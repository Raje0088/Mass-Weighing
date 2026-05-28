package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "our_expert_team")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OurExpertTeam {
    @Id
    private String id;
    private String imageUrl;
    private String imagePublicId;
}
