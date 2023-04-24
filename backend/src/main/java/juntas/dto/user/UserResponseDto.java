package juntas.dto.user;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter

public class UserResponseDto {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    private Integer dni;
    private LocalDate birthdayDate;
    private LocalDate registerDate;
    private Boolean isConfirmedEmail;
    private Boolean hasConfirmedDni;
    private String profileImage;
    private String token;
}
