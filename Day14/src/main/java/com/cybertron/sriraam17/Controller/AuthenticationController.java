package com.cybertron.sriraam17.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.sriraam17.Service.AuthenticationService;
import com.cybertron.sriraam17.dto.request.AuthenticationRequest;
import com.cybertron.sriraam17.dto.request.RegisterRequest;
import com.cybertron.sriraam17.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService service;
	
	  @PostMapping("/register")
	  public ResponseEntity<AuthenticationResponse> register(
	      @RequestBody RegisterRequest request
	  ) {
	    return ResponseEntity.ok(service.register(request));
	  }
	  @PostMapping("/authenticate")
	  public ResponseEntity<AuthenticationResponse> authenticate(
	      @RequestBody AuthenticationRequest request
	  ) {
	    return ResponseEntity.ok(service.authenticate(request));
	  }
	  

}

