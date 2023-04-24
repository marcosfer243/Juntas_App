package juntas.dto.journey;

import juntas.model.Comfort;
import juntas.model.Place;
import juntas.model.Vehicle;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class JourneyResponseDto {
    private LocalDate createDate;
    private LocalDateTime departureDate;
    private LocalDate arrivalDate;
    private Comfort comfort;
    private Vehicle vehicle;
    private Place arrival;
    private Place departure;
    private int price;

}
