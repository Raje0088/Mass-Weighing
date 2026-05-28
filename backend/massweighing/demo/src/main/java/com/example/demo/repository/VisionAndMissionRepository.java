package com.example.demo.repository;

import com.example.demo.model.VisionAndMission;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisionAndMissionRepository extends MongoRepository<VisionAndMission, String> {
}
