package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.Testimonial;
import com.example.demo.service.TestimonialService;
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
public class TestimonialController {

    @Autowired
    private TestimonialService testimonialService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/testimonials")
    public ApiResponse<List<Testimonial>> getAllTestimonials() {
        log.info("Received request to get all Testimonials");
        try {
            List<Testimonial> testimonials = testimonialService.getAllTestimonials();
            log.info("Successfully retrieved {} Testimonials", testimonials.size());
            return new ApiResponse<>(true, testimonials, null);
        } catch (Exception e) {
            log.error("Error retrieving Testimonials", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/testimonials", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Testimonial> createTestimonial(
            @RequestPart(value = "testimonial", required = false) String testimonialJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create Testimonial");
        try {
            Testimonial testimonial = testimonialJson != null
                    ? objectMapper.readValue(testimonialJson, Testimonial.class)
                    : new Testimonial();
            Testimonial saved = testimonialService.createTestimonial(testimonial, image);
            log.info("Successfully created Testimonial");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating Testimonial", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PutMapping(value = "/testimonials/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Testimonial> updateTestimonial(
            @PathVariable String id,
            @RequestPart(value = "testimonial", required = false) String testimonialJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to update Testimonial with ID: {}", id);
        try {
            Testimonial testimonial = testimonialJson != null
                    ? objectMapper.readValue(testimonialJson, Testimonial.class)
                    : new Testimonial();
            Testimonial saved = testimonialService.updateTestimonial(id, testimonial, image);
            log.info("Successfully updated Testimonial with ID: {}", id);
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error updating Testimonial with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/testimonials/{id}")
    public ApiResponse<Void> deleteTestimonial(@PathVariable String id) throws IOException {
        log.info("Received request to delete Testimonial with ID: {}", id);
        try {
            testimonialService.deleteTestimonial(id);
            log.info("Successfully deleted Testimonial with ID: {}", id);
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Testimonial with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
