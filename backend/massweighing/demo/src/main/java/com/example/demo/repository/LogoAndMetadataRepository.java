package com.example.demo.repository;

import com.example.demo.model.LogoAndMetadata;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogoAndMetadataRepository extends MongoRepository<LogoAndMetadata, String> {
}
