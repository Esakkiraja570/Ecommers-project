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

import com.example.Ecomerse_Backend.entity.Furniture;
import com.example.Ecomerse_Backend.repositary.FurnitureRepo;

@RestController
@RequestMapping("/api/auth/furniture")
public class FurnitureController {

    @Autowired
    private FurnitureRepo repo;

    @GetMapping("/get")
    public List<Furniture> getAllProducts(){
        return repo.findAll();
    }

    @PostMapping("/post")
    public Furniture addProduct(@RequestBody Furniture p){
        return repo.save(p);
    }

    @PutMapping("/{id}")
    public Furniture updateProduct(@PathVariable Long id,
                                  @RequestBody Furniture p){
        p.setId(id);
        return repo.save(p);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        repo.deleteById(id);
    }
}
