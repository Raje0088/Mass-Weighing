package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "why_choose_us")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WhyChooseUs {
    @Id
    private String id;
    private List<String> bulletPoints;
}
