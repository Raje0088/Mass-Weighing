package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "vision_and_mission")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisionAndMission {
    @Id
    private String id;
    private String visionTitle;
    private String visionDescription;
    private String missionTitle;
    private String missionDescription;
    private String imageUrl;
    private String imagePublicId;
    private List<String> bulletPoints;
}
