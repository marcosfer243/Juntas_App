package juntas.service.impl;

import juntas.dto.comfort.ComfortRequestDto;
import juntas.dto.comfort.ComfortResponseDto;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Comfort;
import juntas.repository.ComfortRepository;
import juntas.service.IComfortService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ComfortServiceImpl implements IComfortService {

    private final GenericMapper mapper;
    private final ComfortRepository repository;

    @Override
    public ComfortResponseDto create(ComfortRequestDto request) {
        Comfort comfort = mapper.map(request, Comfort.class);

        return mapper.map(repository.save(comfort), ComfortResponseDto.class);
    }


    @Override
    public ComfortResponseDto update(Long id, ComfortRequestDto request) {
        Comfort comfort = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));

        comfort.setAcceptChild(request.getAcceptChild());
        comfort.setLuggage(request.getLuggage());
        comfort.setAcceptSmokers(request.getAcceptSmokers());
        comfort.setPetFriendly(request.getPetFriendly());

        return mapper.map(repository.save(comfort), ComfortResponseDto.class);
    }

    @Override
    public ComfortResponseDto getById(Long id){
        Comfort comfort = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        return mapper.map(comfort,ComfortResponseDto.class);
    }

    @Override
    public void delete(Long id){
        Comfort comfort = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        repository.delete(comfort);
    }


}
