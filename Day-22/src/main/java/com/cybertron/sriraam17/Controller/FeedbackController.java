package com.cybertron.sriraam17.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.sriraam17.model.Feedback;
import com.cybertron.sriraam17.Service.FeedbackService;
import com.cybertron.sriraam17.dto.request.FeedbackRequest ;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/feed")	
@RequiredArgsConstructor

public class FeedbackController {

private final FeedbackService FeedbackService;
	
	@PostMapping("/post")
	  public ResponseEntity<String> register(
	      @RequestBody FeedbackRequest request
	  ) {
	      boolean isSaved = FeedbackService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("feedback added!")
	                : ResponseEntity.badRequest().build();

	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<Feedback>> getAllProducts() {
       List<Feedback> productList = FeedbackService.getAllProducts();
       return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
               : ResponseEntity.noContent().build();
	}
       
    
       
   }
