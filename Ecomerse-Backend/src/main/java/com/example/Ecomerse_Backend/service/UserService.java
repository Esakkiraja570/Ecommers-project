package com.example.Ecomerse_Backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Ecomerse_Backend.entity.UserModel;
import com.example.Ecomerse_Backend.repositary.UserModelRepositary;

@Service

public class UserService {

	public static UserModelRepositary userRepositry;
	public UserService(UserModelRepositary userRepositry) {
	UserService.userRepositry=userRepositry;
	}

	public UserModel adduser( UserModel usermodel) {

		return userRepositry.save(usermodel);

	}
	
	//get
	public List<UserModel> getall(){
		return userRepositry.findAll(); 
	}
	
	public UserModel getuserById(Long id) {
		return userRepositry.findById(id).orElse(null);
	}
	//UPDATE
	public static UserModel updateuser(Long id,UserModel usermodel) {
		UserModel existingUser = userRepositry.findById(id).orElse(null);
		if (existingUser != null) {
			existingUser.setName(usermodel.getName());
	        return userRepositry.save(existingUser);
	    }
	    return null;
	}
	//DELETE
	public void deleteUser(Long id) {
	    if (!userRepositry.existsById(id)) {
	        throw new RuntimeException("User not found with id: " + id);
	    }
	    userRepositry.deleteById(id);
	}

	public static UserModel getuserByid(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
	}
