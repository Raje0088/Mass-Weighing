package com.example.demo.repository;

import com.example.demo.model.WhyChooseUs;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhyChooseUsRepository extends MongoRepository<WhyChooseUs, String> {
}
