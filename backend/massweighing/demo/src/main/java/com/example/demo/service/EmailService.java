package com.example.demo.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username:noreply@example.com}")
    private String fromEmail;

    @Value("${app.receiver.email:rajchincholkar22@gmail.com}")
    private String receiverEmail;

    public void sendQueryNotification(String name, String email, String mobile, String address, String message) {
        log.info("Preparing to send query notification email...");
        log.info("From email: {}", fromEmail);
        log.info("To email: {}", receiverEmail);

        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(fromEmail);
            mailMessage.setTo(receiverEmail);
            mailMessage.setSubject("New Query from " + name);

            String content = "You have received a new query!\n\n" +
                    "Name: " + name + "\n" +
                    "Email: " + email + "\n" +
                    "Mobile: " + mobile + "\n" +
                    "Address: " + address + "\n\n" +
                    "Message:\n" + message;

            mailMessage.setText(content);
            mailSender.send(mailMessage);
            log.info("Query notification email sent successfully to {}", receiverEmail);
        } catch (Exception e) {
            log.error("Error sending query notification email", e);
            log.error("Error details: {}", e.getMessage());
            if (e.getCause() != null) {
                log.error("Cause: {}", e.getCause().getMessage());
            }
        }
    }
}
