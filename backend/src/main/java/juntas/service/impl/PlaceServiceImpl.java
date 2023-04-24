package juntas.service.impl;

import juntas.dto.place.PlaceRequestDto;
import juntas.dto.place.PlaceResponseDto;
import juntas.exception.ResourceEmptyOrNullException;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Place;
import juntas.repository.PlaceRepository;
import juntas.service.IPlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements IPlaceService {

    private final PlaceRepository repository;
    private final GenericMapper mapper;

    @Override
    public PlaceResponseDto createPlace(PlaceRequestDto toCreate) {

            Place newPlace = mapper.map(toCreate, Place.class);
            return mapper.map(repository.save(newPlace), PlaceResponseDto.class);
    }
    @Override
    public PlaceResponseDto updatePlace(Long id, PlaceRequestDto toUpdate) {
        Place updatedPlace = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The place doesn't exist. ")) ;

        updatedPlace.setAddress(toUpdate.getAddress());
        updatedPlace.setCity(toUpdate.getCity());
        updatedPlace.setProvince(toUpdate.getProvince());
        updatedPlace.setCountry(toUpdate.getCountry());

        return mapper.map(repository.save(updatedPlace), PlaceResponseDto.class);
    }

    @Override
    public PlaceResponseDto findById(Long id) {
        Place place = repository
                .findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("The place doesn't exist. "));
        return mapper.map(place, PlaceResponseDto.class);
    }

    @Override
    public List<PlaceResponseDto> findByCity(String city)  {
        List<Place> places = repository
                .findByCity(city)
                .orElseThrow(() -> new ResourceNotFoundException("It cant find the city with the city provided"));
        return mapper.mapAll(places, PlaceResponseDto.class);
    }

    @Override
    public List<PlaceResponseDto> findByProvince(String province) {
        List<Place> places = repository
                .findByCity(province)
                .orElseThrow(() -> new ResourceNotFoundException("It cant find the province with the province provided"));
        return mapper.mapAll(places, PlaceResponseDto.class);
    }

    @Override
    public void deletePlace(Long id) {
        repository.deleteById(id);
    }

    private boolean checkGoodPlace(PlaceRequestDto toCheck) {
        return toCheck != null &&
                (toCheck.getCity().isEmpty() ||
                toCheck.getAddress().isEmpty() ||
                toCheck.getProvince().isEmpty());
    }
}
