package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.VisionAndMission;
import com.example.demo.service.VisionAndMissionService;
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
public class VisionAndMissionController {

    @Autowired
    private VisionAndMissionService visionAndMissionService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/vision-mission")
    public ApiResponse<VisionAndMission> getVisionAndMission() {
        log.info("Received request to get Vision and Mission section");
        try {
            VisionAndMission data = visionAndMissionService.getVisionAndMission();
            log.info("Successfully retrieved Vision and Mission section");
            return new ApiResponse<>(true, data, null);
        } catch (Exception e) {
            log.error("Error retrieving Vision and Mission section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/vision-mission", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<VisionAndMission> createOrUpdateVisionAndMission(
            @RequestPart(value = "visionAndMission", required = false) String dataJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create/update Vision and Mission section");
        try {
            VisionAndMission data = dataJson != null ? objectMapper.readValue(dataJson, VisionAndMission.class)
                    : new VisionAndMission();
            VisionAndMission saved = visionAndMissionService.createOrUpdateVisionAndMission(data, image);
            log.info("Successfully created/updated Vision and Mission section");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating/updating Vision and Mission section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/vision-mission")
    public ApiResponse<Void> deleteVisionAndMission() throws IOException {
        log.info("Received request to delete Vision and Mission section");
        try {
            visionAndMissionService.deleteVisionAndMission();
            log.info("Successfully deleted Vision and Mission section");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Vision and Mission section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
