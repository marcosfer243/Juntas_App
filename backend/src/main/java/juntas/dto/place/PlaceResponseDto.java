package juntas.dto.place;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PlaceResponseDto {
        private String address;
        private String city;
        private String province;
        private String country;
}
