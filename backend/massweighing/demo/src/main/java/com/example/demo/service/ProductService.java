package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    public Product createProduct(Product product, MultipartFile image) throws IOException {
        log.info("=== ProductService.createProduct ===");
        log.info("1. Product before imageUrl: {}, imagePublicId: {}", product.getImageUrl(),
                product.getImagePublicId());
        if (image != null && !image.isEmpty()) {
            log.info("2. Uploading image to Cloudinary...");
            Map uploadResult = cloudinaryService.uploadFile(image, "product");
            log.info("3. Cloudinary upload result: {}", uploadResult);
            product.setImageUrl((String) uploadResult.get("url"));
            product.setImagePublicId((String) uploadResult.get("public_id"));
            log.info("4. Set product after Cloudinary - imageUrl: {}, imagePublicId: {}", product.getImageUrl(),
                    product.getImagePublicId());
        } else {
            log.info("2. No image provided");
        }
        log.info("5. Product before save to MongoDB: {}", product);
        Product saved = productRepository.save(product);
        log.info("6. Product AFTER save to MongoDB: {}", saved);
        log.info("=== ProductService.createProduct SUCCESS ===");
        return saved;
    }

    public Product updateProduct(String id, Product product, MultipartFile image) throws IOException {
        Product existing = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        if (image != null && !image.isEmpty()) {
            if (existing.getImagePublicId() != null) {
                cloudinaryService.deleteFile(existing.getImagePublicId());
            }
            Map uploadResult = cloudinaryService.uploadFile(image, "product");
            existing.setImageUrl((String) uploadResult.get("url"));
            existing.setImagePublicId((String) uploadResult.get("public_id"));
        }

        existing.setTitle(product.getTitle());
        existing.setDescription(product.getDescription());
        existing.setFeatures(product.getFeatures());
        existing.setType(product.getType());
        existing.setModel(product.getModel());
        existing.setMake(product.getMake());
        existing.setConstruction(product.getConstruction());
        existing.setSpeed(product.getSpeed());
        existing.setWeighingRange(product.getWeighingRange());
        existing.setAccuracy(product.getAccuracy());
        existing.setAirRequirement(product.getAirRequirement());
        existing.setApprovalFromWeightsMeasures(product.getApprovalFromWeightsMeasures());
        existing.setPaint(product.getPaint());
        existing.setLoadCell(product.getLoadCell());
        existing.setPneumatics(product.getPneumatics());
        existing.setDischargeGate(product.getDischargeGate());
        existing.setDisplay(product.getDisplay());
        existing.setController(product.getController());
        existing.setTotalizedAndAutoTare(product.getTotalizedAndAutoTare());

        return productRepository.save(existing);
    }

    public void deleteProduct(String id) throws IOException {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        if (product.getImagePublicId() != null) {
            cloudinaryService.deleteFile(product.getImagePublicId());
        }
        productRepository.delete(product);
    }
}
