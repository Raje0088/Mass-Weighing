package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "testimonials")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Testimonial {
    @Id
    private String id;
    private String title;
    private String imageUrl;
    private String imagePublicId;
}
