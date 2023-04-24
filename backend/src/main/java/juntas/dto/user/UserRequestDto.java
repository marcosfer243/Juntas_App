package juntas.dto.user;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class UserRequestDto {

    private String name;
    private String lastName;
    private String email;
    private Integer dni;
    private String password;
    private LocalDate birthdayDate;
    private String profileImage;
}
