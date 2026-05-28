package com.example.demo.service;

import com.example.demo.model.VisionAndMission;
import com.example.demo.repository.VisionAndMissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class VisionAndMissionService {

    @Autowired
    private VisionAndMissionRepository visionAndMissionRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public VisionAndMission getVisionAndMission() {
        List<VisionAndMission> all = visionAndMissionRepository.findAll();
        return all.isEmpty() ? new VisionAndMission() : all.get(0);
    }

    public VisionAndMission createOrUpdateVisionAndMission(VisionAndMission visionAndMission, MultipartFile image)
            throws IOException {
        List<VisionAndMission> existing = visionAndMissionRepository.findAll();
        VisionAndMission toSave;

        if (!existing.isEmpty()) {
            toSave = existing.get(0);
            if (image != null && !image.isEmpty()) {
                if (toSave.getImagePublicId() != null) {
                    cloudinaryService.deleteFile(toSave.getImagePublicId());
                }
                Map uploadResult = cloudinaryService.uploadFile(image, "vision-mission");
                toSave.setImageUrl((String) uploadResult.get("url"));
                toSave.setImagePublicId((String) uploadResult.get("public_id"));
            }
        } else {
            toSave = visionAndMission;
            if (image != null && !image.isEmpty()) {
                Map uploadResult = cloudinaryService.uploadFile(image, "vision-mission");
                toSave.setImageUrl((String) uploadResult.get("url"));
                toSave.setImagePublicId((String) uploadResult.get("public_id"));
            }
        }

        toSave.setVisionTitle(visionAndMission.getVisionTitle());
        toSave.setVisionDescription(visionAndMission.getVisionDescription());
        toSave.setMissionTitle(visionAndMission.getMissionTitle());
        toSave.setMissionDescription(visionAndMission.getMissionDescription());
        toSave.setBulletPoints(visionAndMission.getBulletPoints());

        return visionAndMissionRepository.save(toSave);
    }

    public void deleteVisionAndMission() throws IOException {
        List<VisionAndMission> existing = visionAndMissionRepository.findAll();
        if (!existing.isEmpty()) {
            VisionAndMission data = existing.get(0);
            if (data.getImagePublicId() != null) {
                cloudinaryService.deleteFile(data.getImagePublicId());
            }
            visionAndMissionRepository.delete(data);
        }
    }
}
