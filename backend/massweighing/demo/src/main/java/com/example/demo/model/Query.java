package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "queries")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Query {
    @Id
    private String id;
    private String name;
    private String email;
    private String mobile;
    private String address;
    private String message;
    private LocalDateTime createdAt;
}
