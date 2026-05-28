package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.About;
import com.example.demo.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class AboutService {

    @Autowired
    private AboutRepository aboutRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public About getAbout() {
        List<About> all = aboutRepository.findAll();
        return all.isEmpty() ? new About() : all.get(0);
    }

    public About createOrUpdateAbout(About about, MultipartFile image) throws IOException {
        List<About> existing = aboutRepository.findAll();
        About aboutToSave;

        if (!existing.isEmpty()) {
            aboutToSave = existing.get(0);
            if (image != null && !image.isEmpty()) {
                if (aboutToSave.getImagePublicId() != null) {
                    cloudinaryService.deleteFile(aboutToSave.getImagePublicId());
                }
                Map uploadResult = cloudinaryService.uploadFile(image, "about");
                aboutToSave.setImageUrl((String) uploadResult.get("url"));
                aboutToSave.setImagePublicId((String) uploadResult.get("public_id"));
            }
        } else {
            aboutToSave = about;
            if (image != null && !image.isEmpty()) {
                Map uploadResult = cloudinaryService.uploadFile(image, "about");
                aboutToSave.setImageUrl((String) uploadResult.get("url"));
                aboutToSave.setImagePublicId((String) uploadResult.get("public_id"));
            }
        }

        aboutToSave.setDescription(about.getDescription());
        aboutToSave.setYoe(about.getYoe());
        aboutToSave.setProjectCompleted(about.getProjectCompleted());
        aboutToSave.setCustomerSatisfaction(about.getCustomerSatisfaction());
        aboutToSave.setTeamMember(about.getTeamMember());
        aboutToSave.setVideoUrl(about.getVideoUrl());

        return aboutRepository.save(aboutToSave);
    }

    public void deleteAbout() throws IOException {
        List<About> existing = aboutRepository.findAll();
        if (!existing.isEmpty()) {
            About about = existing.get(0);
            if (about.getImagePublicId() != null) {
                cloudinaryService.deleteFile(about.getImagePublicId());
            }
            aboutRepository.delete(about);
        }
    }
}
