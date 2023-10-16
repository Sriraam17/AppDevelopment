package com.cybertron.sriraam17.Service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cybertron.sriraam17.model.ProductDetails;
import com.cybertron.sriraam17.model.enumerate.Role;
import com.cybertron.sriraam17.Repository.ProductDetailRepository;
import com.cybertron.sriraam17.dto.request.ProductDetailRequest;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor

public class ProductDetailService {
	
	private  final ProductDetailRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private  final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	 
	 
	 public boolean registertemp(ProductDetailRequest request) {
			// TODO Auto-generated method stub
		
				
		    var user = ProductDetails.builder()
		            
		    		.auctionid(request.getAuctionid()) 	           
		    		.brand(request.getBrand())
		     		.model(request.getModel())
		    		.variant(request.getVariant())
		    		.years(request.getYears())
		            .colour(request.getColour())
		            .role(Role.USER)
		            .build();
		    		repository.save(user);
//		    
		    
		    return true;
		}
	 
	 public List<ProductDetails> getAllProducts() {
	        List<ProductDetails> productList = repository.findAll();

	        return productList;
	    }
	 
	 public boolean updateProduct(ProductDetailRequest request, Long auctionid) {
		 ProductDetails product = repository.findByAuctionid(auctionid);
		 
		 product.setAuctionid(request.getAuctionid());
		 product.setBrand(request.getBrand());
		 product.setModel(request.getModel());
		 product.setVariant(request.getVariant());
		 product.setYears(request.getYears());
		 product.setColour(request.getColour());
		 
		 repository.save(product);
		 return true;
	 }
	 
	 public boolean delete(Long auctionid) {
		 repository.deleteById(auctionid);
		 return true;
	 }
	 





}
