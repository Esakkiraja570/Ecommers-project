package com.example.Ecomerse_Backend.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;


@Component
public class Jwutil {

//    private final String SECRET_KEY = "ecommerce_secret_key";
//
//    @SuppressWarnings("deprecation")
//	public String generateToken(String object) {
//        return Jwts.builder()
//                .setSubject(object)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day
//                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
//                .compact();
//    }
//
//    @SuppressWarnings("deprecation")
//	public String extractEmail(String token) {
//        return Jwts.parser()
//                .setSigningKey(SECRET_KEY)
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//
//	public String generateToken(Object email) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	private final SecretKey SECRET_KEY =
            Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + 86400000)
                )
                .signWith(SECRET_KEY)
                .compact();
    }

	public String extractUsername(String token) {
		// TODO Auto-generated method stub
		return null;
	}
}

