package juntas.controller;


import juntas.dto.vehicle.VehicleRequestDto;
import juntas.service.IVehicleService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static juntas.handler.ResponseBuilder.responseBuilder;


@RestController
@RequestMapping("/vehicle")
public record VehicleController (IVehicleService service){

@PostMapping
public ResponseEntity<?> create(@Valid @RequestBody VehicleRequestDto requestDto){
    return responseBuilder(HttpStatus.CREATED,service.create(requestDto));
}

@PutMapping("/{id}")
public  ResponseEntity<?> update(@PathVariable Long id, @RequestBody VehicleRequestDto requestDto) {
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
