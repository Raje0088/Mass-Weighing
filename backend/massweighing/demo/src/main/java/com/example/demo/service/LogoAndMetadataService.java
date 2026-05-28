package com.example.demo.service;

import com.example.demo.model.LogoAndMetadata;
import com.example.demo.repository.LogoAndMetadataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class LogoAndMetadataService {

    @Autowired
    private LogoAndMetadataRepository logoAndMetadataRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public LogoAndMetadata getLogoAndMetadata() {
        List<LogoAndMetadata> all = logoAndMetadataRepository.findAll();
        return all.isEmpty() ? new LogoAndMetadata() : all.get(0);
    }

    public LogoAndMetadata createOrUpdateLogoAndMetadata(LogoAndMetadata logoAndMetadata, MultipartFile logo)
            throws IOException {
        List<LogoAndMetadata> existing = logoAndMetadataRepository.findAll();
        LogoAndMetadata toSave;

        if (!existing.isEmpty()) {
            toSave = existing.get(0);
            if (logo != null && !logo.isEmpty()) {
                if (toSave.getLogoPublicId() != null) {
                    cloudinaryService.deleteFile(toSave.getLogoPublicId());
                }
                Map uploadResult = cloudinaryService.uploadFile(logo, "logo");
                toSave.setLogoUrl((String) uploadResult.get("url"));
                toSave.setLogoPublicId((String) uploadResult.get("public_id"));
            }
        } else {
            toSave = logoAndMetadata;
            if (logo != null && !logo.isEmpty()) {
                Map uploadResult = cloudinaryService.uploadFile(logo, "logo");
                toSave.setLogoUrl((String) uploadResult.get("url"));
                toSave.setLogoPublicId((String) uploadResult.get("public_id"));
            }
        }

        toSave.setSiteTitle(logoAndMetadata.getSiteTitle());
        toSave.setSiteDescription(logoAndMetadata.getSiteDescription());
        toSave.setMetaKeywords(logoAndMetadata.getMetaKeywords());
        toSave.setGoogleAnalyticsCode(logoAndMetadata.getGoogleAnalyticsCode());
        toSave.setRssFeedUrl(logoAndMetadata.getRssFeedUrl());
        toSave.setSitemapXml(logoAndMetadata.getSitemapXml());
        toSave.setRobotsTxt(logoAndMetadata.getRobotsTxt());

        return logoAndMetadataRepository.save(toSave);
    }

    public void deleteLogoAndMetadata() throws IOException {
        List<LogoAndMetadata> existing = logoAndMetadataRepository.findAll();
        if (!existing.isEmpty()) {
            LogoAndMetadata data = existing.get(0);
            if (data.getLogoPublicId() != null) {
                cloudinaryService.deleteFile(data.getLogoPublicId());
            }
            logoAndMetadataRepository.delete(data);
        }
    }
}
