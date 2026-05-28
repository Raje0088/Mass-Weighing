package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.Query;
import com.example.demo.service.QueryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api")
public class QueryController {

    @Autowired
    private QueryService queryService;

    @PostMapping("/public/query")
    public ApiResponse<Query> submitQuery(@RequestBody Query query) {
        log.info("Received query submission: {}", query);
        try {
            Query savedQuery = queryService.createQuery(query);
            log.info("Query saved successfully: {}", savedQuery);
            return new ApiResponse<>(true, savedQuery, null);
        } catch (Exception e) {
            log.error("Error saving query", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
