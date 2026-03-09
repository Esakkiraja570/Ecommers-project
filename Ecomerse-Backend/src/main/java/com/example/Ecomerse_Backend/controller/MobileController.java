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

import com.example.Ecomerse_Backend.entity.Mobile;
import com.example.Ecomerse_Backend.repositary.MobileRepo;




@RestController
@RequestMapping("/api/auth/mobile")

public class MobileController {
    @Autowired
    private MobileRepo repo;

    @GetMapping("/get")
    public List<Mobile> getAllProducts(){
        return repo.findAll();
    }

    @PostMapping("/post")
    public Mobile addProduct(@RequestBody Mobile c){
        return repo.save(c);
    }

    @PutMapping("/{id}")
    public Mobile updateProduct(@PathVariable Long id,
                                  @RequestBody Mobile c){
        c.setId(id);
        return repo.save(c);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        repo.deleteById(id);
    }
}
