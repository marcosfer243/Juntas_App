package juntas.service;

import juntas.dto.vehicle.VehicleRequestDto;
import juntas.dto.vehicle.VehicleResponseDto;

public interface IVehicleService{
    VehicleResponseDto create(VehicleRequestDto requestDto);

    VehicleResponseDto update(Long id, VehicleRequestDto requestDto);

    VehicleResponseDto getById(Long id);

    void delete(Long id);
}
