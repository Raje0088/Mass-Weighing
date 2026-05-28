package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {
    public String uploadFile(MultipartFile file){
        try{
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String uploadDir = "/home/username/public_html/uploads/";

            File dir = new File(uploadDir);
            if(!dir.exists()) dir.mkdirs();

            Path path = Paths.get(uploadDir + fileName);
            Files.write(path, file.getBytes());

            return "https://yourdomain.com/uploads/" + fileName;
        }catch(Exception e){
            throw new RuntimeException("File upload failed");
        }
    }
}
