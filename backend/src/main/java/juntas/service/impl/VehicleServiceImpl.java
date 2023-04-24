package juntas.service.impl;

import juntas.dto.vehicle.VehicleRequestDto;
import juntas.dto.vehicle.VehicleResponseDto;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.User;
import juntas.model.Vehicle;
import juntas.repository.UserRepository;
import juntas.repository.VehicleRepository;
import juntas.service.IVehicleService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements IVehicleService {

    private final GenericMapper mapper;
    private final VehicleRepository repository;
    private final UserRepository userRepository;


    @Override
    public VehicleResponseDto create(VehicleRequestDto request) {
        Vehicle vehicle = mapper.map(request, Vehicle.class);
        User user = userRepository.findById(request.getDriverId()).orElseThrow();
        vehicle.setDriver(user);
        return mapper.map(repository.save(vehicle), VehicleResponseDto.class);
    }

    @Override
    public VehicleResponseDto update(Long id,VehicleRequestDto request) {
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));

        vehicle.setVehicleColor(request.getVehicleColor());
        vehicle.setEmptySeats(request.getEmptySeats());
        vehicle.setPrimaryBrand(request.getPrimaryBrand());
        vehicle.setModelName(request.getModelName());
        vehicle.setPatentNumber(request.getPatentNumber());


        return mapper.map(repository.save(vehicle), VehicleResponseDto.class);
    }

    @Override
    public VehicleResponseDto getById(Long id){
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        return mapper.map(vehicle,VehicleResponseDto.class);
    }

    @Override
    public void delete(Long id){
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        repository.delete(vehicle);
    }

}
