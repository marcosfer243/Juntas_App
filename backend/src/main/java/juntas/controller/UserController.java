package juntas.controller;

import io.swagger.annotations.ApiOperation;
import juntas.dto.user.LoginRequestDto;
import juntas.dto.user.LoginResponseDto;
import juntas.dto.user.UserRequestDto;
import juntas.dto.user.UserResponseDto;
import juntas.service.IUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public record UserController(IUserService service) {

    @ApiOperation(value = "Create a new user", notes = "Creates a new user with the given details")
    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserRequestDto dto){
        return ResponseEntity.ok(service.register(dto));
    }

    @ApiOperation(value = "Log in an user", notes = "log in an user with email and password")
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto dto){
        return ResponseEntity.ok(service.login(dto));
    }

    @GetMapping("/oauth")
    public ResponseEntity<UserResponseDto> oauthLogin( OAuth2AuthenticationToken authenticate){
        return ResponseEntity.ok(service.oauthLogin(authenticate));
    }
}
