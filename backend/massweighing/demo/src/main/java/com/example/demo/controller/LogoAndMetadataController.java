package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.LogoAndMetadata;
import com.example.demo.service.LogoAndMetadataService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/api")
public class LogoAndMetadataController {

    @Autowired
    private LogoAndMetadataService logoAndMetadataService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/logo-metadata")
    public ApiResponse<LogoAndMetadata> getLogoAndMetadata() {
        log.info("Received request to get Logo and Metadata");
        try {
            LogoAndMetadata data = logoAndMetadataService.getLogoAndMetadata();
            log.info("Successfully retrieved Logo and Metadata");
            return new ApiResponse<>(true, data, null);
        } catch (Exception e) {
            log.error("Error retrieving Logo and Metadata", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/logo-metadata", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<LogoAndMetadata> createOrUpdateLogoAndMetadata(
            @RequestPart(value = "logoAndMetadata", required = false) String dataJson,
            @RequestPart(value = "logo", required = false) MultipartFile logo) throws IOException {
        log.info("Received request to create/update Logo and Metadata");
        try {
            LogoAndMetadata data = dataJson != null ? objectMapper.readValue(dataJson, LogoAndMetadata.class) : new LogoAndMetadata();
            LogoAndMetadata saved = logoAndMetadataService.createOrUpdateLogoAndMetadata(data, logo);
            log.info("Successfully created/updated Logo and Metadata");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating/updating Logo and Metadata", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/logo-metadata")
    public ApiResponse<Void> deleteLogoAndMetadata() throws IOException {
        log.info("Received request to delete Logo and Metadata");
        try {
            logoAndMetadataService.deleteLogoAndMetadata();
            log.info("Successfully deleted Logo and Metadata");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Logo and Metadata", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @GetMapping(value = "/public/sitemap.xml", produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<String> getSitemapXml() {
        log.info("Received request for sitemap.xml");
        try {
            LogoAndMetadata data = logoAndMetadataService.getLogoAndMetadata();
            String sitemap = data.getSitemapXml();
            if (sitemap == null || sitemap.isEmpty()) {
                String defaultSitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                        "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" +
                        "  <url>\n" +
                        "    <loc>https://your-domain.com/</loc>\n" +
                        "    <changefreq>weekly</changefreq>\n" +
                        "    <priority>1.0</priority>\n" +
                        "  </url>\n" +
                        "</urlset>";
                return ResponseEntity.ok(defaultSitemap);
            }
            return ResponseEntity.ok(sitemap);
        } catch (Exception e) {
            log.error("Error retrieving sitemap.xml", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping(value = "/public/robots.txt", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> getRobotsTxt() {
        log.info("Received request for robots.txt");
        try {
            LogoAndMetadata data = logoAndMetadataService.getLogoAndMetadata();
            String robots = data.getRobotsTxt();
            if (robots == null || robots.isEmpty()) {
                String defaultRobots = "User-agent: *\n" +
                        "Allow: /\n" +
                        "Sitemap: https://your-domain.com/api/public/sitemap.xml";
                return ResponseEntity.ok(defaultRobots);
            }
            return ResponseEntity.ok(robots);
        } catch (Exception e) {
            log.error("Error retrieving robots.txt", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
