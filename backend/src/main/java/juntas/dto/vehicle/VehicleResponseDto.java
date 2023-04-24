package juntas.dto.vehicle;

import juntas.dto.user.UserResponseDto;
import juntas.model.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class VehicleResponseDto{

    private Long vehicleId;
    private String vehicleColor;
    private Integer emptySeats;
    private String primaryBrand;
    private String modelName;
    private String patentNumber;
    private UserResponseDto driver;
    private Boolean isVerified;
}
