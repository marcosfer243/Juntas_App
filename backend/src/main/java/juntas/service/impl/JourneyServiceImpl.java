package juntas.service.impl;

import juntas.dto.journey.JourneyRequestDto;
import juntas.dto.journey.JourneyResponseDto;

import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.*;
import juntas.repository.*;
import juntas.service.IJourneyService;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class JourneyServiceImpl implements IJourneyService {

    private final GenericMapper mapper;
    private final JourneyRepository repository;
    private final ComfortRepository comfortRepository;
    private final VehicleRepository vehicleRepository;
    private final PlaceRepository placeRepository;


    @Override
    public JourneyResponseDto create(JourneyRequestDto request) {

        Journey journey = mapper.map(request, Journey.class);
        Comfort comfort = comfortRepository.findById(request.getComfortId()).orElseThrow(()->new ResourceNotFoundException(""));
        Vehicle vehicle = vehicleRepository.findById(request.getVehicleId()).orElseThrow(()->new ResourceNotFoundException(""));
        Place arrival = placeRepository.findById(request.getArrivalId()).orElseThrow(()->new ResourceNotFoundException(""));
        Place departure = placeRepository.findById(request.getDepartureId()).orElseThrow(()->new ResourceNotFoundException(""));

        journey.setComfort(comfort);
        journey.setVehicle(vehicle);
        journey.setArrival(arrival);
        journey.setDeparture(departure);

        return mapper.map(repository.save(journey), JourneyResponseDto.class);
    }

    @Override
    public JourneyResponseDto update(JourneyRequestDto request) {
        Journey journey = repository.findById(request.getId()).orElseThrow(()->new ResourceNotFoundException(""));
        Comfort comfort = comfortRepository.findById(request.getComfortId()).orElseThrow(()->new ResourceNotFoundException(""));
        Vehicle vehicle = vehicleRepository.findById(request.getVehicleId()).orElseThrow(()->new ResourceNotFoundException(""));
        Place arrival = placeRepository.findById(request.getArrivalId()).orElseThrow(()->new ResourceNotFoundException(""));
        Place departure = placeRepository.findById(request.getDepartureId()).orElseThrow(()->new ResourceNotFoundException(""));

        journey.setArrivalDate(request.getArrivalDate());
        journey.setDepartureDate(request.getDepartureDate());
        journey.setComfort(comfort);
        journey.setVehicle(vehicle);
        journey.setArrival(arrival);
        journey.setDeparture(departure);

        return mapper.map(repository.save(journey), JourneyResponseDto.class);
    }

    @Override
    public JourneyResponseDto getById(Long id){
        Journey journey = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        return mapper.map(journey,JourneyResponseDto.class);
    }

    @Override
    public List<JourneyResponseDto> getAll(){
        return mapper.mapAll(repository.findAll(),JourneyResponseDto.class);
    }

    @Override
    public void delete(Long id){
        Journey journey = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        repository.delete(journey);
    }

}
