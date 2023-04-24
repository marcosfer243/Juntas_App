package juntas.service.impl;

import com.nimbusds.jose.proc.SecurityContext;
import juntas.dto.user.LoginRequestDto;
import juntas.dto.user.LoginResponseDto;
import juntas.dto.user.UserRequestDto;
import juntas.dto.user.UserResponseDto;
import juntas.exception.ResourceAlreadyExistsException;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Provider;
import juntas.model.Role;
import juntas.model.User;
import juntas.repository.RoleRepository;
import juntas.repository.UserRepository;
import juntas.security.jwt.JwtUtil;
import juntas.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService, UserDetailsService {

    private final UserRepository repository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder encoder;
    private final GenericMapper mapper;
    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @Override
    public UserResponseDto oauthLogin(OAuth2AuthenticationToken authenticate) {
        OAuth2AuthorizedClient client = authorizedClientService
                .loadAuthorizedClient(
                        authenticate.getAuthorizedClientRegistrationId(),
                        authenticate.getName());

        String email = authenticate.getPrincipal().getAttribute("email");

        //Login side
        if (existsByEmail(email)) {
            User user = findByEmail(email);
            UserResponseDto response = mapper.map(user, UserResponseDto.class);
            response.setToken(JwtUtil.generateToken(user));
            return response;
        } else {
            //Dto and db candidate builder
            UserResponseDto response = new UserResponseDto();
            Role role = roleRepository.findById(1L).orElseThrow();

            response.setEmail(authenticate.getPrincipal().getAttribute("email"));
            response.setName(authenticate.getPrincipal().getAttribute("name"));
            response.setProfileImage(authenticate.getPrincipal().getAttribute("picture"));

            User userDb = mapper.map(response, User.class);
            userDb.setRole(role);
            userDb.setProvider(Provider.GOOGLE);
            repository.save(userDb);
            response.setToken(JwtUtil.generateToken(userDb));
            response.setId(userDb.getId());

            return response;
        }
    }
    @Override
    public UserResponseDto register(UserRequestDto dto) {

        if(existsByEmail(dto.getEmail()) || existsByDni(dto.getDni())) {
            throw new ResourceAlreadyExistsException("message");
        }
            Role role = roleRepository.findById(1L).orElseThrow();

            User user = mapper.map(dto, User.class);
            user.setPassword(encoder.encode(dto.getPassword()));
            user.setRole(role);
            //Siempre se agrega como local
            user.setProvider(Provider.LOCAL);


            UserResponseDto response = mapper.map(repository.save(user), UserResponseDto.class);
            response.setToken(JwtUtil.generateToken(user));

        return response;
    }

    @Override
    public LoginResponseDto login(LoginRequestDto dto) {
        var user = findByEmail(dto.getEmail());

        //If the user is not local
        if (!user.getProvider().equals(Provider.LOCAL)) {
            throw new RuntimeException("The user has been registered by external services");
        }
        if (!encoder.matches(dto.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("message");
        }
            LoginResponseDto response = mapper.map(user, LoginResponseDto.class);
            response.setToken(JwtUtil.generateToken(user));

            return response;
    }

    @Override
    public User findByEmail(String email) {
        return repository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("message"));
    }

    @Override
    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    @Override
    public boolean existsByDni(Integer dni) {
        return repository.existsByDni(dni);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = findByEmail(email);

        var grantedAuthority = new SimpleGrantedAuthority(user.getRole().getName());

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                List.of(grantedAuthority));
    }
}
