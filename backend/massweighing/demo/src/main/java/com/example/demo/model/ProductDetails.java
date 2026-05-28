package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetails {
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
