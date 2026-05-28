package com.example.demo.service;

import com.example.demo.model.Query;
import com.example.demo.repository.QueryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
public class QueryService {

    @Autowired
    private QueryRepository queryRepository;

    @Autowired
    private EmailService emailService;

    public Query createQuery(Query query) {
        query.setCreatedAt(LocalDateTime.now());
        log.info("Creating new query: {}", query);
        Query savedQuery = queryRepository.save(query);

        emailService.sendQueryNotification(
                savedQuery.getName(),
                savedQuery.getEmail(),
                savedQuery.getMobile(),
                savedQuery.getAddress(),
                savedQuery.getMessage());

        return savedQuery;
    }
}
