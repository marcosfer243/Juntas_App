package juntas.controller;

import io.swagger.annotations.ApiOperation;
import juntas.dto.place.PlaceRequestDto;
import juntas.dto.place.PlaceResponseDto;
import juntas.service.IPlaceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static juntas.handler.ResponseBuilder.responseBuilder;

@RestController
@RequestMapping("/places")
public record PlaceController(IPlaceService placeService) {


    @PostMapping
    public ResponseEntity<?> createPlace(@Valid @RequestBody PlaceRequestDto toCreate) {
        return responseBuilder(HttpStatus.CREATED,placeService.createPlace(toCreate));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePlace(@PathVariable Long id, @RequestBody PlaceRequestDto toUpdate) {

        return responseBuilder(HttpStatus.OK,placeService.updatePlace(id, toUpdate));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return responseBuilder(HttpStatus.FOUND,placeService.findById(id));
    }

    @GetMapping("/city")
    public ResponseEntity<List<PlaceResponseDto>> findByCity(@RequestParam String city){
        return new ResponseEntity<>(placeService.findByCity(city), HttpStatus.FOUND);
    }
    @GetMapping("/province")
    public ResponseEntity<List<PlaceResponseDto>> findByProvince(@RequestParam String province){
        return new ResponseEntity<>(placeService.findByProvince(province), HttpStatus.FOUND);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePlace(@PathVariable Long id) {
        placeService.deletePlace(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
