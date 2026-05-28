package com.example.demo.service;

import com.example.demo.model.SocialMedia;
import com.example.demo.repository.SocialMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocialMediaService {

    @Autowired
    private SocialMediaRepository socialMediaRepository;

    public SocialMedia getSocialMedia() {
        List<SocialMedia> all = socialMediaRepository.findAll();
        return all.isEmpty() ? new SocialMedia() : all.get(0);
    }

    public SocialMedia createOrUpdateSocialMedia(SocialMedia socialMedia) {
        List<SocialMedia> existing = socialMediaRepository.findAll();
        SocialMedia toSave;

        if (!existing.isEmpty()) {
            toSave = existing.get(0);
        } else {
            toSave = socialMedia;
        }

        toSave.setFacebook(socialMedia.getFacebook());
        toSave.setInstagram(socialMedia.getInstagram());
        toSave.setTwitter(socialMedia.getTwitter());
        toSave.setYoutube(socialMedia.getYoutube());
        toSave.setWhatsapp(socialMedia.getWhatsapp());

        return socialMediaRepository.save(toSave);
    }

    public void deleteSocialMedia() {
        List<SocialMedia> existing = socialMediaRepository.findAll();
        if (!existing.isEmpty()) {
            socialMediaRepository.delete(existing.get(0));
        }
    }
}
