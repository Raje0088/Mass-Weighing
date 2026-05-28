package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "about")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class About {
    @Id
    private String id;
    private String description;
    private String imageUrl;
    private String imagePublicId;
    private String videoUrl;
    private int yoe;
    private int projectCompleted;
    private int customerSatisfaction;
    private int teamMember;
}
