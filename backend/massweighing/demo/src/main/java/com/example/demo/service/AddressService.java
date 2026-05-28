package com.example.demo.service;

import com.example.demo.model.Address;
import com.example.demo.repository.AddressRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address getAddress() {
        List<Address> all = addressRepository.findAll();
        return all.isEmpty() ? new Address() : all.get(0);
    }

    public Address createOrUpdateAddress(Address address) {
        log.info("AddressService.createOrUpdateAddress called with: {}", address);
        List<Address> existing = addressRepository.findAll();
        Address toSave;

        if (!existing.isEmpty()) {
            toSave = existing.get(0);
            log.info("Found existing Address: {}", toSave);
        } else {
            toSave = address;
            log.info("No existing Address, using new one");
        }

        toSave.setRegisteredOffice(address.getRegisteredOffice());
        toSave.setWorkAddress(address.getWorkAddress());
        toSave.setMapUrl(address.getMapUrl());
        toSave.setEmails(address.getEmails());
        toSave.setMobiles(address.getMobiles());

        log.info("About to save Address: {}", toSave);
        return addressRepository.save(toSave);
    }

    public void deleteAddress() {
        List<Address> existing = addressRepository.findAll();
        if (!existing.isEmpty()) {
            addressRepository.delete(existing.get(0));
        }
    }
}
