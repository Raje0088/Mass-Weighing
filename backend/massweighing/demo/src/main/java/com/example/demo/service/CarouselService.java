package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Carousel;
import com.example.demo.repository.CarouselRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class CarouselService {

    @Autowired
    private CarouselRepository carouselRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public List<Carousel> getAllCarouselItems() {
        return carouselRepository.findAll();
    }

    public Carousel createCarouselItem(Carousel carousel, MultipartFile image) throws IOException {
        log.info("Creating carousel item with data: {}", carousel);
        if (image != null && !image.isEmpty()) {
            Map uploadResult = cloudinaryService.uploadFile(image, "hero");
            carousel.setImageUrl((String) uploadResult.get("url"));
            carousel.setImagePublicId((String) uploadResult.get("public_id"));
        }
        Carousel saved = carouselRepository.save(carousel);
        log.info("Saved carousel item: {}", saved);
        return saved;
    }

    public Carousel updateCarouselItem(String id, Carousel carousel, MultipartFile image) throws IOException {
        Carousel existing = carouselRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Carousel item not found"));

        if (image != null && !image.isEmpty()) {
            if (existing.getImagePublicId() != null) {
                cloudinaryService.deleteFile(existing.getImagePublicId());
            }
            Map uploadResult = cloudinaryService.uploadFile(image, "hero");
            existing.setImageUrl((String) uploadResult.get("url"));
            existing.setImagePublicId((String) uploadResult.get("public_id"));
        }

        existing.setTitle(carousel.getTitle());
        existing.setDescription(carousel.getDescription());
        existing.setSubtext(carousel.getSubtext());
        Carousel saved = carouselRepository.save(existing);
        log.info("Updated carousel item: {}", saved);
        return saved;
    }

    public void deleteCarouselItem(String id) throws IOException {
        Carousel carousel = carouselRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Carousel item not found"));
        if (carousel.getImagePublicId() != null) {
            cloudinaryService.deleteFile(carousel.getImagePublicId());
        }
        carouselRepository.delete(carousel);
    }
}
