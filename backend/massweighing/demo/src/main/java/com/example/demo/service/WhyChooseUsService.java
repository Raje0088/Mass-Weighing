package com.example.demo.service;

import com.example.demo.model.WhyChooseUs;
import com.example.demo.repository.WhyChooseUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class WhyChooseUsService {

    @Autowired
    private WhyChooseUsRepository whyChooseUsRepository;

    public WhyChooseUs getWhyChooseUs() {
        List<WhyChooseUs> all = whyChooseUsRepository.findAll();
        return all.isEmpty() ? new WhyChooseUs() : all.get(0);
    }

    public WhyChooseUs createOrUpdateWhyChooseUs(WhyChooseUs whyChooseUs, MultipartFile image) throws IOException {
        List<WhyChooseUs> existing = whyChooseUsRepository.findAll();
        WhyChooseUs toSave;

        if (!existing.isEmpty()) {
            toSave = existing.get(0);
        } else {
            toSave = whyChooseUs;
        }

        toSave.setBulletPoints(whyChooseUs.getBulletPoints());

        return whyChooseUsRepository.save(toSave);
    }

    public void deleteWhyChooseUs() throws IOException {
        List<WhyChooseUs> existing = whyChooseUsRepository.findAll();
        if (!existing.isEmpty()) {
            whyChooseUsRepository.delete(existing.get(0));
        }
    }
}
