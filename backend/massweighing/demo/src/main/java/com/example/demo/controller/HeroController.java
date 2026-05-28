package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.Hero;
import com.example.demo.service.HeroService;
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
public class HeroController {

    @Autowired
    private HeroService heroService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/hero")
    public ApiResponse<Hero> getHero() {
        log.info("Received request to get Hero section");
        try {
            Hero hero = heroService.getHero();
            log.info("Successfully retrieved Hero section");
            return new ApiResponse<>(true, hero, null);
        } catch (Exception e) {
            log.error("Error retrieving Hero section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/hero", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Hero> createOrUpdateHero(
            @RequestPart(value = "hero", required = false) String heroJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create/update Hero section");
        try {
            Hero hero = heroJson != null ? objectMapper.readValue(heroJson, Hero.class) : new Hero();
            Hero savedHero = heroService.createOrUpdateHero(hero, image);
            log.info("Successfully created/updated Hero section");
            return new ApiResponse<>(true, savedHero, null);
        } catch (Exception e) {
            log.error("Error creating/updating Hero section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/hero")
    public ApiResponse<Void> deleteHero() throws IOException {
        log.info("Received request to delete Hero section");
        try {
            heroService.deleteHero();
            log.info("Successfully deleted Hero section");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Hero section", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
