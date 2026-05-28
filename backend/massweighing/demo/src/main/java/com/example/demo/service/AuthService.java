package com.example.demo.service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.security.JwtUtil;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AuthService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Value("${ADMIN_EMAIL}")
    private String adminEmail;

    @Value("${ADMIN_PASSWORD}")
    private String adminPassword;

    public LoginResponse login(LoginRequest loginRequest) {
        log.info("=== Login attempt ===");
        log.info("Input email: {}", loginRequest.getEmail());
        log.info("Loaded adminEmail from env: {}", adminEmail);
        log.info("Loaded adminPassword from env: {}", adminPassword);
        log.info("Admin count in DB: {}", adminRepository.count());

        Admin admin = adminRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> {
                    log.error("Admin not found with email: {}", loginRequest.getEmail());
                    return new RuntimeException("Invalid email or password");
                });

        log.info("Found admin in DB: {}", admin.getEmail());
        log.info("Input password: {}", loginRequest.getPassword());
        log.info("DB password (encoded): {}", admin.getPassword());
        log.info("Password matches: {}", passwordEncoder.matches(loginRequest.getPassword(), admin.getPassword()));

        if (!passwordEncoder.matches(loginRequest.getPassword(), admin.getPassword())) {
            log.error("Password mismatch");
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtUtil.generateToken(userDetailsService.loadUserByUsername(loginRequest.getEmail()));
        log.info("Generated token: {}", token);
        return new LoginResponse(token, "Bearer");
    }

    public void initAdmin() {
        log.info("=== Initializing admin ===");
        log.info("Admin count before: {}", adminRepository.count());
        log.info("Admin email from env: {}", adminEmail);
        log.info("Admin password from env: {}", adminPassword);

        // Delete all existing admins to ensure we have the correct one
        adminRepository.deleteAll();
        log.info("Deleted all existing admins");

        Admin admin = new Admin();
        admin.setEmail(adminEmail);
        admin.setPassword(passwordEncoder.encode(adminPassword));
        adminRepository.save(admin);
        log.info("Admin created successfully with email: {}", adminEmail);
    }
}
