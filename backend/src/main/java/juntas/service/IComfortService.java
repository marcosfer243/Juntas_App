package juntas.service;

import juntas.dto.comfort.ComfortRequestDto;
import juntas.dto.comfort.ComfortResponseDto;

public interface IComfortService {

    ComfortResponseDto create(ComfortRequestDto requestDto);

    ComfortResponseDto update(Long id, ComfortRequestDto requestDto);

    ComfortResponseDto getById(Long id);

    void delete(Long id);
}
