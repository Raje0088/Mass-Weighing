package com.example.demo.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AboutRequestDTO {
    @NotBlank(message="Description is required")
    private String description;

    @NotBlank(message="Image is required")
    private String imageUrl;

    @Min(value = 0, message = "YOE must be >= 0")
    private int yoe;

    @Min(value = 0)
    private int projectCompleted;

    @Min(value = 0)
    private int customSatisfaction;
}
