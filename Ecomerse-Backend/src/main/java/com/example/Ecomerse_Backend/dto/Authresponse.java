package com.example.Ecomerse_Backend.dto;





import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Authresponse {

	 private String token;

	    public Authresponse(String token) {
	        this.token = token;
	    }

	    public String getToken() {
	        return token;
	    }

	    public void setToken(String token) {
	        this.token = token;
	    }


}