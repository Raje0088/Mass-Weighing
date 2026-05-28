package com.example.demo.repository;

import com.example.demo.model.Carousel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarouselRepository extends MongoRepository<Carousel, String> {
}
