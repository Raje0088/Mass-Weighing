package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.SocialMedia;
import com.example.demo.service.SocialMediaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api")
public class SocialMediaController {

    @Autowired
    private SocialMediaService socialMediaService;

    @GetMapping("/public/social-media")
    public ApiResponse<SocialMedia> getSocialMedia() {
        log.info("Received request to get Social Media");
        try {
            SocialMedia socialMedia = socialMediaService.getSocialMedia();
            log.info("Successfully retrieved Social Media");
            return new ApiResponse<>(true, socialMedia, null);
        } catch (Exception e) {
            log.error("Error retrieving Social Media", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping("/social-media")
    public ApiResponse<SocialMedia> createOrUpdateSocialMedia(@RequestBody SocialMedia socialMedia) {
        log.info("Received request to create/update Social Media");
        try {
            SocialMedia saved = socialMediaService.createOrUpdateSocialMedia(socialMedia);
            log.info("Successfully created/updated Social Media");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating/updating Social Media", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/social-media")
    public ApiResponse<Void> deleteSocialMedia() {
        log.info("Received request to delete Social Media");
        try {
            socialMediaService.deleteSocialMedia();
            log.info("Successfully deleted Social Media");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Social Media", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
