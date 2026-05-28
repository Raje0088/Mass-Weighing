package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.OurExpertTeam;
import com.example.demo.repository.OurExpertTeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class OurExpertTeamService {

    @Autowired
    private OurExpertTeamRepository ourExpertTeamRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public List<OurExpertTeam> getAllTeamMembers() {
        return ourExpertTeamRepository.findAll();
    }

    public OurExpertTeam createTeamMember(OurExpertTeam teamMember, MultipartFile image) throws IOException {
        if (image != null && !image.isEmpty()) {
            Map uploadResult = cloudinaryService.uploadFile(image, "team");
            teamMember.setImageUrl((String) uploadResult.get("url"));
            teamMember.setImagePublicId((String) uploadResult.get("public_id"));
        }
        return ourExpertTeamRepository.save(teamMember);
    }

    public OurExpertTeam updateTeamMember(String id, OurExpertTeam teamMember, MultipartFile image) throws IOException {
        OurExpertTeam existing = ourExpertTeamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found"));

        if (image != null && !image.isEmpty()) {
            if (existing.getImagePublicId() != null) {
                cloudinaryService.deleteFile(existing.getImagePublicId());
            }
            Map uploadResult = cloudinaryService.uploadFile(image, "team");
            existing.setImageUrl((String) uploadResult.get("url"));
            existing.setImagePublicId((String) uploadResult.get("public_id"));
        }
        return ourExpertTeamRepository.save(existing);
    }

    public void deleteTeamMember(String id) throws IOException {
        OurExpertTeam teamMember = ourExpertTeamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found"));
        if (teamMember.getImagePublicId() != null) {
            cloudinaryService.deleteFile(teamMember.getImagePublicId());
        }
        ourExpertTeamRepository.delete(teamMember);
    }
}
