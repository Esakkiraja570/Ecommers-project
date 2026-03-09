package com.example.Ecomerse_Backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ecomerse_Backend.entity.UserModel;
import com.example.Ecomerse_Backend.repositary.UserModelRepositary;
import com.example.Ecomerse_Backend.service.UserService;

@RestController
@RequestMapping("/api/auth/products")
public class UserController {

    private final UserModelRepositary repo;
    private final UserService userService;

    public UserController(UserModelRepositary repo, UserService userService) {
        this.repo = repo;
        this.userService = userService;
    }

    // Create user
    @PostMapping("/post")
    public UserModel createUser(@RequestBody UserModel model) {
        model.setId(null); // force new record
        return repo.save(model);
    }

    // Get all users
    @GetMapping("/get")
    public List<UserModel> getAllUsers() {
        return repo.findAll();
    }

    // Get user by id
    @GetMapping("/get/{id}")
    public UserModel getUserById(@PathVariable Long id) {
        return UserService.getuserByid(id);
    }

    // Update user
    @PutMapping("/update/{id}")
    public UserModel updateUser(@PathVariable Long id,
                                 @RequestBody UserModel usermodel) {
        return UserService.updateuser(id, usermodel);
    }

    // Delete user
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully";
    }
}
