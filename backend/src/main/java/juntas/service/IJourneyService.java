package juntas.service;


import juntas.dto.journey.JourneyRequestDto;
import juntas.dto.journey.JourneyResponseDto;

import java.util.List;

public interface IJourneyService {

    JourneyResponseDto create(JourneyRequestDto requestDto);

    JourneyResponseDto update(JourneyRequestDto requestDto);

    JourneyResponseDto getById(Long id);

    List<JourneyResponseDto> getAll();

    void delete(Long id);
    
}
