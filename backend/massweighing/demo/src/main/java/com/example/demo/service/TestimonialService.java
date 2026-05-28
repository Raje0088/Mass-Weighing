package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Testimonial;
import com.example.demo.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class TestimonialService {

    @Autowired
    private TestimonialRepository testimonialRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    public Testimonial createTestimonial(Testimonial testimonial, MultipartFile image) throws IOException {
        if (image != null && !image.isEmpty()) {
            Map uploadResult = cloudinaryService.uploadFile(image, "testimonial");
            testimonial.setImageUrl((String) uploadResult.get("url"));
            testimonial.setImagePublicId((String) uploadResult.get("public_id"));
        }
        return testimonialRepository.save(testimonial);
    }

    public Testimonial updateTestimonial(String id, Testimonial testimonial, MultipartFile image) throws IOException {
        Testimonial existing = testimonialRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Testimonial not found"));

        if (image != null && !image.isEmpty()) {
            if (existing.getImagePublicId() != null) {
                cloudinaryService.deleteFile(existing.getImagePublicId());
            }
            Map uploadResult = cloudinaryService.uploadFile(image, "testimonial");
            existing.setImageUrl((String) uploadResult.get("url"));
            existing.setImagePublicId((String) uploadResult.get("public_id"));
        }

        existing.setTitle(testimonial.getTitle());
        return testimonialRepository.save(existing);
    }

    public void deleteTestimonial(String id) throws IOException {
        Testimonial testimonial = testimonialRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Testimonial not found"));
        if (testimonial.getImagePublicId() != null) {
            cloudinaryService.deleteFile(testimonial.getImagePublicId());
        }
        testimonialRepository.delete(testimonial);
    }
}
