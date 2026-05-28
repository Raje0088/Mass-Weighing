package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/public/products")
    public ApiResponse<List<Product>> getAllProducts() {
        log.info("Received request to get all Products");
        try {
            List<Product> products = productService.getAllProducts();
            log.info("Successfully retrieved {} Products", products.size());
            return new ApiResponse<>(true, products, null);
        } catch (Exception e) {
            log.error("Error retrieving Products", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @GetMapping("/public/products/{id}")
    public ApiResponse<Product> getProductById(@PathVariable String id) {
        log.info("Received request to get Product by ID: {}", id);
        try {
            Product product = productService.getProductById(id);
            log.info("Successfully retrieved Product by ID: {}", id);
            return new ApiResponse<>(true, product, null);
        } catch (Exception e) {
            log.error("Error retrieving Product by ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping(value = "/products", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Product> createProduct(
            @RequestPart(value = "product", required = false) String productJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("=== ProductController.createProduct ===");
        log.info("1. Received productJson: {}", productJson);
        log.info("2. Received image: {}", image != null ? image.getOriginalFilename() : "NO IMAGE");
        try {
            Product product;
            if (productJson != null && !productJson.trim().isEmpty()) {
                log.info("3. Parsing productJson with ObjectMapper...");
                product = objectMapper.readValue(productJson, Product.class);
                log.info("4. Parsed Product object - ALL FIELDS:");
                log.info("   - id: {}", product.getId());
                log.info("   - title: {}", product.getTitle());
                log.info("   - description: {}", product.getDescription());
                log.info("   - features: {}", product.getFeatures());
                log.info("   - type: {}", product.getType());
                log.info("   - model: {}", product.getModel());
                log.info("   - make: {}", product.getMake());
                log.info("   - construction: {}", product.getConstruction());
                log.info("   - speed: {}", product.getSpeed());
                log.info("   - weighingRange: {}", product.getWeighingRange());
                log.info("   - accuracy: {}", product.getAccuracy());
                log.info("   - airRequirement: {}", product.getAirRequirement());
                log.info("   - approvalFromWeightsMeasures: {}", product.getApprovalFromWeightsMeasures());
                log.info("   - paint: {}", product.getPaint());
                log.info("   - loadCell: {}", product.getLoadCell());
                log.info("   - pneumatics: {}", product.getPneumatics());
                log.info("   - dischargeGate: {}", product.getDischargeGate());
                log.info("   - display: {}", product.getDisplay());
                log.info("   - controller: {}", product.getController());
                log.info("   - totalizedAndAutoTare: {}", product.getTotalizedAndAutoTare());
            } else {
                log.warn("3. productJson is NULL or EMPTY - creating new empty Product");
                product = new Product();
            }
            log.info("5. Calling productService.createProduct...");
            Product saved = productService.createProduct(product, image);
            log.info("6. SAVED Product from MongoDB: {}", saved);
            log.info("=== ProductController.createProduct SUCCESS ===");
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("=== ProductController.createProduct ERROR ===", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PutMapping(value = "/products/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<Product> updateProduct(
            @PathVariable String id,
            @RequestPart(value = "product", required = false) String productJson,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        log.info("Received request to update Product with ID: {}", id);
        try {
            Product product = productJson != null ? objectMapper.readValue(productJson, Product.class) : new Product();
            Product saved = productService.updateProduct(id, product, image);
            log.info("Successfully updated Product with ID: {}", id);
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error updating Product with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/products/{id}")
    public ApiResponse<Void> deleteProduct(@PathVariable String id) throws IOException {
        log.info("Received request to delete Product with ID: {}", id);
        try {
            productService.deleteProduct(id);
            log.info("Successfully deleted Product with ID: {}", id);
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Product with ID: {}", id, e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
