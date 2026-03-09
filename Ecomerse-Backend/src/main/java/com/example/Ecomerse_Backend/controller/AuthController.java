package com.example.Ecomerse_Backend.controller;










import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ecomerse_Backend.dto.Authrequest;
import com.example.Ecomerse_Backend.entity.User;
import com.example.Ecomerse_Backend.repositary.UserRepositary;
import com.example.Ecomerse_Backend.security.Jwutil;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private UserRepositary repo;
    private BCryptPasswordEncoder encoder;
    private Jwutil jwtUtil;

    public  AuthController(
            UserRepositary repo,
            BCryptPasswordEncoder encoder,
            Jwutil jwtUtil) {

        this.repo = repo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    // ---------- SIGNUP ----------
    @PostMapping("/signup")
    public String signup(@RequestBody Authrequest request) {

        User user = new User();
        user.setName(request.getName());
        user.setEmail((String) request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole("USER");

        repo.save(user);

        return "User registered successfully";
    }

    // ---------- LOGIN ----------
   
    
    @PostMapping("/login")
    public String login(@RequestBody User request) {

        User user = repo.findByEmail(request.getEmail())
                .orElseThrow(()->
                        new RuntimeException("User not found"));

        if (!encoder.matches(request.getPassword(),
                user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(user.getEmail());
    }

}
