package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.About;
import com.example.demo.service.AboutService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/api")
public class AboutController {

    @Autowired
    private AboutService aboutService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/about")
    public ApiResponse<About> getAbout() {
        log.info("Received request to get About section");
        try {
            About about = aboutService.getAbout();
            log.info("Successfully retrieved About section");
            return new ApiResponse<>(true, about, null);
        } catch (Exception e) {
            log.error("Error retrieving About section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/about", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<About> createOrUpdateAbout(
            @RequestPart(value = "about", required = false) String aboutJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create/update About section");
        try {
            About about = aboutJson != null ? objectMapper.readValue(aboutJson, About.class) : new About();
            About savedAbout = aboutService.createOrUpdateAbout(about, image);
            log.info("Successfully created/updated About section");
            return new ApiResponse<>(true, savedAbout, null);
        } catch (Exception e) {
            log.error("Error creating/updating About section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/about")
    public ApiResponse<Void> deleteAbout() throws IOException {
        log.info("Received request to delete About section");
        try {
            aboutService.deleteAbout();
            log.info("Successfully deleted About section");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting About section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
