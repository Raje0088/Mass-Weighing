package com.example.demo.repository;

import com.example.demo.model.OurExpertTeam;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OurExpertTeamRepository extends MongoRepository<OurExpertTeam, String> {
}
