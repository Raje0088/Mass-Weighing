package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.Carousel;
import com.example.demo.service.CarouselService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class CarouselController {

    @Autowired
    private CarouselService carouselService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/carousel")
    public ApiResponse<List<Carousel>> getAllCarouselItems() {
        log.info("Received request to get all Carousel items");
        try {
            List<Carousel> items = carouselService.getAllCarouselItems();
            log.info("Successfully retrieved {} Carousel items", items.size());
            return new ApiResponse<>(true, items, null);
        } catch (Exception e) {
            log.error("Error retrieving Carousel items", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/carousel", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Carousel> createCarouselItem(
            @RequestPart(value = "carousel", required = false) String carouselJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create Carousel item, carouselJson: {}", carouselJson);
        try {
            Carousel carousel = carouselJson != null ? objectMapper.readValue(carouselJson, Carousel.class)
                    : new Carousel();
            log.info("Parsed Carousel object: {}", carousel);
            Carousel saved = carouselService.createCarouselItem(carousel, image);
            log.info("Successfully created Carousel item: {}", saved);
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating Carousel item", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PutMapping(value = "/carousel/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Carousel> updateCarouselItem(
            @PathVariable String id,
            @RequestPart(value = "carousel", required = false) String carouselJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to update Carousel item with ID: {}", id);
        try {
            Carousel carousel = carouselJson != null ? objectMapper.readValue(carouselJson, Carousel.class)
                    : new Carousel();
            Carousel saved = carouselService.updateCarouselItem(id, carousel, image);
            log.info("Successfully updated Carousel item with ID: {}", id);
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error updating Carousel item with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/carousel/{id}")
    public ApiResponse<Void> deleteCarouselItem(@PathVariable String id) throws IOException {
        log.info("Received request to delete Carousel item with ID: {}", id);
        try {
            carouselService.deleteCarouselItem(id);
            log.info("Successfully deleted Carousel item with ID: {}", id);
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Carousel item with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
