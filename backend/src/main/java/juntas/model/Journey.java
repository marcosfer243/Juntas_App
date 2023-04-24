package juntas.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "journeys")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Journey implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate createDate;
    private LocalDateTime departureDate;
    private LocalDate arrivalDate;
    private int price;
    @OneToOne
    @JoinColumn(name = "comfort_journey")
    private Comfort comfort;
    @ManyToOne
    @JoinColumn(name = "vehicle_journey")
    private Vehicle vehicle;

    @ManyToMany
    private List<User> users;

    @OneToOne
    private Place arrival;

    @OneToOne
    private Place departure;
}
