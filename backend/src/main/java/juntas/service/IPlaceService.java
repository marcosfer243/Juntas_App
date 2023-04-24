package juntas.service;

import juntas.dto.place.PlaceRequestDto;
import juntas.dto.place.PlaceResponseDto;

import java.util.List;

public interface IPlaceService {

    PlaceResponseDto createPlace(PlaceRequestDto toCreate);

    PlaceResponseDto updatePlace(Long id, PlaceRequestDto toUpdate);

    PlaceResponseDto findById(Long id);

    List<PlaceResponseDto> findByCity(String city);

    List<PlaceResponseDto> findByProvince(String province);

    void deletePlace(Long id);
}
