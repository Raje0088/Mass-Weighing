package com.example.demo.service;

import com.example.demo.model.Hero;
import com.example.demo.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class HeroService {

    @Autowired
    private HeroRepository heroRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public Hero getHero() {
        List<Hero> all = heroRepository.findAll();
        return all.isEmpty() ? new Hero() : all.get(0);
    }

    public Hero createOrUpdateHero(Hero hero, MultipartFile image) throws IOException {
        List<Hero> existing = heroRepository.findAll();
        Hero heroToSave;

        if (!existing.isEmpty()) {
            heroToSave = existing.get(0);
            if (image != null && !image.isEmpty()) {
                if (heroToSave.getImagePublicId() != null) {
                    cloudinaryService.deleteFile(heroToSave.getImagePublicId());
                }
                Map uploadResult = cloudinaryService.uploadFile(image, "hero");
                heroToSave.setImageUrl((String) uploadResult.get("url"));
                heroToSave.setImagePublicId((String) uploadResult.get("public_id"));
            }
        } else {
            heroToSave = hero;
            if (image != null && !image.isEmpty()) {
                Map uploadResult = cloudinaryService.uploadFile(image, "hero");
                heroToSave.setImageUrl((String) uploadResult.get("url"));
                heroToSave.setImagePublicId((String) uploadResult.get("public_id"));
            }
        }

        heroToSave.setTitle(hero.getTitle());
        heroToSave.setDescription(hero.getDescription());
        heroToSave.setBulletPoints(hero.getBulletPoints());

        return heroRepository.save(heroToSave);
    }

    public void deleteHero() throws IOException {
        List<Hero> existing = heroRepository.findAll();
        if (!existing.isEmpty()) {
            Hero hero = existing.get(0);
            if (hero.getImagePublicId() != null) {
                cloudinaryService.deleteFile(hero.getImagePublicId());
            }
            heroRepository.delete(hero);
        }
    }
}
