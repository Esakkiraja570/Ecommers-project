package com.example.Ecomerse_Backend.repositary;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Ecomerse_Backend.entity.User;


@Repository
public interface UserRepositary
        extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);


  
	
}
