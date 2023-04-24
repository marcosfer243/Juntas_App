package juntas.repository;

import juntas.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place, Long> {

    @Override
    Optional<Place> findById(Long id);
    @Override
    List<Place> findAll();

    Optional<List<Place>> findByProvince(String province);

    Optional<List<Place>> findByCity(String city);
}
