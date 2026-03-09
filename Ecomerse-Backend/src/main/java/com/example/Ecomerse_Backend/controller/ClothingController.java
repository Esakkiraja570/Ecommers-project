package com.example.Ecomerse_Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ecomerse_Backend.entity.Clothing;

import com.example.Ecomerse_Backend.repositary.ClothingRepositary;

@RestController
@RequestMapping("/api/auth/clothing")

public class ClothingController {
    @Autowired
    private ClothingRepositary repo;

    @GetMapping("/get")
    public List<Clothing> getAllProducts(){
        return repo.findAll();
    }

    @PostMapping("/post")
    public Clothing addProduct(@RequestBody Clothing c){
        return repo.save(c);
    }

    @PutMapping("/{id}")
    public Clothing updateProduct(@PathVariable Long id,
                                  @RequestBody Clothing c){
        c.setId(id);
        return repo.save(c);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        repo.deleteById(id);
    }
}
