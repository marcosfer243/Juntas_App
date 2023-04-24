package juntas.service;

import juntas.dto.qualification.QualificationRequestDto;
import juntas.dto.qualification.QualificationResponseDto;

public interface IQualificationService {

    QualificationResponseDto createQualification(QualificationRequestDto toCreate);

    QualificationResponseDto updateQualification(Long id, QualificationRequestDto toUpdate);

    QualificationResponseDto getById(Long id);

    void deleteQualification(Long id);

    //public QualificationResponseDto getByUserQualificated(Long id);



}
