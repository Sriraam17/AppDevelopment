package com.cybertron.sriraam17.Service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cybertron.sriraam17.model.Feedback;
import com.cybertron.sriraam17.model.enumerate.Role;
import com.cybertron.sriraam17.Repository.FeedbackRepository;
import com.cybertron.sriraam17.dto.request.FeedbackRequest;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor

public class FeedbackService {
	
	private  final FeedbackRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private  final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	 
	 
	 public boolean registertemp(FeedbackRequest request) {
			// TODO Auto-generated method stub
		
				
		    var user = Feedback.builder()
		            
		    		.fid(request.getFid())
		    		.username(request.getUsername())
		    		.email(request.getEmail())
		    		.phoneno(request.getPhoneno())
		    		.feedback(request.getFeedback())
		            .role(Role.USER)
		            .build();
		    		repository.save(user);
//		    var jwtToken = jwtservice.generateToken(user);
		    
		    return true;
		}
	 
	 public List<Feedback> getAllProducts() {
	        List<Feedback> productList = repository.findAll();

	        return productList;
	    }
}	 
