package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "carousel")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Carousel {
    @Id
    private String id;
    private String imageUrl;
    private String imagePublicId;
    private String title;
    private String description;
    private String subtext;
}
