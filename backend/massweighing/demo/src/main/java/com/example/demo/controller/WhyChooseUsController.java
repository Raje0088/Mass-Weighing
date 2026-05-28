package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.WhyChooseUs;
import com.example.demo.service.WhyChooseUsService;
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
public class WhyChooseUsController {

    @Autowired
    private WhyChooseUsService whyChooseUsService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/why-choose-us")
    public ApiResponse<WhyChooseUs> getWhyChooseUs() {
        log.info("Received request to get Why Choose Us section");
        try {
            WhyChooseUs data = whyChooseUsService.getWhyChooseUs();
            log.info("Successfully retrieved Why Choose Us section");
            return new ApiResponse<>(true, data, null);
        } catch (Exception e) {
            log.error("Error retrieving Why Choose Us section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/why-choose-us", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<WhyChooseUs> createOrUpdateWhyChooseUs(
            @RequestPart(value = "whyChooseUs", required = false) String dataJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create/update Why Choose Us section");
        try {
            WhyChooseUs data = dataJson != null ? objectMapper.readValue(dataJson, WhyChooseUs.class) : new WhyChooseUs();
            WhyChooseUs saved = whyChooseUsService.createOrUpdateWhyChooseUs(data, image);
            log.info("Successfully created/updated Why Choose Us section");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating/updating Why Choose Us section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/why-choose-us")
    public ApiResponse<Void> deleteWhyChooseUs() throws IOException {
        log.info("Received request to delete Why Choose Us section");
        try {
            whyChooseUsService.deleteWhyChooseUs();
            log.info("Successfully deleted Why Choose Us section");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Why Choose Us section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
