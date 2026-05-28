package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "hero")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hero {
    @Id
    private String id;
    private String title;
    private String description;
    private String imageUrl;
    private String imagePublicId;
    private List<String> bulletPoints;
}
