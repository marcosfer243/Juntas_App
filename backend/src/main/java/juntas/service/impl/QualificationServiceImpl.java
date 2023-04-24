package juntas.service.impl;

import juntas.dto.qualification.QualificationRequestDto;
import juntas.dto.qualification.QualificationResponseDto;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Qualification;
import juntas.repository.QualificationRepository;
import juntas.service.IQualificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QualificationServiceImpl implements IQualificationService {

    private final GenericMapper mapper;
    private final QualificationRepository repository;

    @Override
    public QualificationResponseDto createQualification(QualificationRequestDto toCreate) {
        if(goodQualification(toCreate)){
            Qualification toAdd = mapper.map(toCreate, Qualification.class);
            return mapper.map(repository.save(toAdd), QualificationResponseDto.class);
        } else {
            throw new ResourceNotFoundException("The qualification that you attempt to save is null or empty.");
        }
    }

    @Override
    public QualificationResponseDto updateQualification(Long id, QualificationRequestDto toUpdate) {
        if(goodQualification(toUpdate)){
            Qualification toReassign = repository.findById(id).orElseThrow( () -> new ResourceNotFoundException("Resources not found or not exist."));

            toReassign.setQualificationQuantity(toUpdate.getQualificationQuantity());
            toReassign.setComment(toUpdate.getComment());

            return mapper.map(repository.save(toReassign), QualificationResponseDto.class);
        } else {
            throw new ResourceNotFoundException("The qualification that you attempt to update is empty or not exist.");
        }
    }

    @Override
    public QualificationResponseDto getById(Long id) {
        return mapper.map(repository.findById(id), QualificationResponseDto.class);
    }

    @Override
    public void deleteQualification(Long id) {
        repository.deleteById(id);
    }

    public boolean goodQualification(QualificationRequestDto toCheck){
        return toCheck != null &&
                (toCheck.getQualificationQuantity() != 0 &&
                    !toCheck.getComment().isEmpty() &&
                    toCheck.getFromUser() >= 0 &&
                    toCheck.getToUser() >= 0
                );
    }
}
