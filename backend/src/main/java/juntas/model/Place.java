package juntas.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "places")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Place implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long placeId;
    private String address;
    private String city;
    private String province;
    private String country;

}
