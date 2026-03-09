package com.example.Ecomerse_Backend.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Ecomerse_Backend.entity.Clothing;


public interface ClothingRepositary  extends JpaRepository<Clothing, Long>{

}
