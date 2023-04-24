package juntas.controller;

import juntas.dto.comfort.ComfortRequestDto;

import juntas.service.IComfortService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static juntas.handler.ResponseBuilder.responseBuilder;

@RestController
@RequestMapping("/comfort")
public record ComfortController(IComfortService service) {

    @PostMapping
    public ResponseEntity<?> create(@RequestBody ComfortRequestDto requestDto){
        return responseBuilder(HttpStatus.CREATED,service.create(requestDto));
    }

    @PutMapping("/{id}")
    public  ResponseEntity<?> update(@PathVariable Long id, @RequestBody ComfortRequestDto requestDto) {
        return responseBuilder(HttpStatus.OK,service.update(id,requestDto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return responseBuilder(HttpStatus.OK,service.getById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
