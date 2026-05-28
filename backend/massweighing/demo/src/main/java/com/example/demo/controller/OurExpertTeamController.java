package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.OurExpertTeam;
import com.example.demo.service.OurExpertTeamService;
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
public class OurExpertTeamController {

    @Autowired
    private OurExpertTeamService ourExpertTeamService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/our-expert-team")
    public ApiResponse<List<OurExpertTeam>> getAllTeamMembers() {
        log.info("Received request to get all Team Members");
        try {
            List<OurExpertTeam> teamMembers = ourExpertTeamService.getAllTeamMembers();
            log.info("Successfully retrieved {} Team Members", teamMembers.size());
            return new ApiResponse<>(true, teamMembers, null);
        } catch (Exception e) {
            log.error("Error retrieving Team Members", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/our-expert-team", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<OurExpertTeam> createTeamMember(
            @RequestPart(value = "teamMember", required = false) String teamMemberJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to create Team Member");
        try {
            OurExpertTeam teamMember = teamMemberJson != null
                    ? objectMapper.readValue(teamMemberJson, OurExpertTeam.class)
                    : new OurExpertTeam();
            OurExpertTeam saved = ourExpertTeamService.createTeamMember(teamMember, image);
            log.info("Successfully created Team Member");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating Team Member", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PutMapping(value = "/our-expert-team/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<OurExpertTeam> updateTeamMember(
            @PathVariable String id,
            @RequestPart(value = "teamMember", required = false) String teamMemberJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to update Team Member with ID: {}", id);
        try {
            OurExpertTeam teamMember = teamMemberJson != null
                    ? objectMapper.readValue(teamMemberJson, OurExpertTeam.class)
                    : new OurExpertTeam();
            OurExpertTeam saved = ourExpertTeamService.updateTeamMember(id, teamMember, image);
            log.info("Successfully updated Team Member with ID: {}", id);
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error updating Team Member with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/our-expert-team/{id}")
    public ApiResponse<Void> deleteTeamMember(@PathVariable String id) throws IOException {
        log.info("Received request to delete Team Member with ID: {}", id);
        try {
            ourExpertTeamService.deleteTeamMember(id);
            log.info("Successfully deleted Team Member with ID: {}", id);
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Team Member with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
