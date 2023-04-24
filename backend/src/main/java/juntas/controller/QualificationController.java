package juntas.controller;

import juntas.dto.qualification.QualificationRequestDto;
import juntas.dto.qualification.QualificationResponseDto;
import juntas.service.IQualificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static juntas.handler.ResponseBuilder.responseBuilder;

@RestController
@RequestMapping("/qualifications")
public record QualificationController(IQualificationService service) {
    @PostMapping()
    public ResponseEntity<?> createQualification(@RequestBody QualificationRequestDto qualification) {
        return responseBuilder(HttpStatus.CREATED,service.createQualification(qualification));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateQualification(@PathVariable Long id, @RequestBody QualificationRequestDto qualification) {
        return responseBuilder( HttpStatus.ACCEPTED,service.updateQualification(id, qualification));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return responseBuilder( HttpStatus.OK,service.getById(id));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQualification(@PathVariable Long id){
        service.deleteQualification(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
