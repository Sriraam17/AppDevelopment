package com.cybertron.sriraam17.Service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cybertron.sriraam17.model.Product;
import com.cybertron.sriraam17.model.enumerate.Role;
import com.cybertron.sriraam17.Repository.ProductRepository;
import com.cybertron.sriraam17.dto.request.ProductRequest;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor

public class ProductService {
	
	private  final ProductRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private  final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	 
	 
	 public boolean registertemp(ProductRequest request) {
			// TODO Auto-generated method stub
		
				
		    var user = Product.builder()
//		            .productid(request.getProductid())
		    		.productid(request.getProductid())
//		            .productname(request.getProductname())
		    		.productname(request.getProductname())
		            .price(request.getPrice())
		            .auctionid(request.getAuctionid())
		            .description(request.getDescription())
		            .role(Role.USER)
		            .build();
		    		repository.save(user);
//		    var jwtToken = jwtservice.generateToken(user);
		    
		    return true;
		}
	 
	 public List<Product> getAllProducts() {
	        List<Product> productList = repository.findAll();

	        return productList;
	    }
	 





}
