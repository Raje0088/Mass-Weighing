package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "social_media")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SocialMedia {
    @Id
    private String id;
    private String facebook;
    private String instagram;
    private String twitter;
    private String youtube;
    private String whatsapp;
}
