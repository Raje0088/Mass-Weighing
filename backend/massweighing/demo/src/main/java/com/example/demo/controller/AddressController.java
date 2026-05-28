package com.example.demo.controller;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.Address;
import com.example.demo.service.AddressService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/public/address")
    public ApiResponse<Address> getAddress() {
        log.info("Received request to get Address");
        try {
            Address address = addressService.getAddress();
            log.info("Successfully retrieved Address");
            return new ApiResponse<>(true, address, null);
        } catch (Exception e) {
            log.error("Error retrieving Address", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @PostMapping("/address")
    public ApiResponse<Address> createOrUpdateAddress(@RequestBody Address address) {
        log.info("Received request to create/update Address: {}", address);
        try {
            Address saved = addressService.createOrUpdateAddress(address);
            log.info("Successfully created/updated Address: {}", saved);
            return new ApiResponse<>(true, saved, null);
        } catch (Exception e) {
            log.error("Error creating/updating Address", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }

    @DeleteMapping("/address")
    public ApiResponse<Void> deleteAddress() {
        log.info("Received request to delete Address");
        try {
            addressService.deleteAddress();
            log.info("Successfully deleted Address");
            return new ApiResponse<>(true, null, null);
        } catch (Exception e) {
            log.error("Error deleting Address", e);
            return new ApiResponse<>(false, null, e.getMessage());
        }
    }
}
