package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String title;
    private String description;
    private List<String> features;
    private String imageUrl;
    private String imagePublicId;

    private String type;
    private String model;
    private String make;
    private String construction;
    private String speed;
    private String weighingRange;
    private String accuracy;
    private String airRequirement;
    private String approvalFromWeightsMeasures;
    private String paint;
    private String loadCell;
    private String pneumatics;
    private String dischargeGate;
    private String display;
    private String controller;
    private String totalizedAndAutoTare;
}
