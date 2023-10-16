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
		            
		    		.productid(request.getProductid()) 	           
		    		.productname(request.getProductname())
		    		.sellername(request.getSellername())
		            .price(request.getPrice())
		            .auctionid(request.getAuctionid())
		            .proimage(request.getProimage())
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
	 
	 public boolean updateProduct(ProductRequest request, Long productid) {
		 Product product = repository.findByProductid(productid);
		 
		 product.setProductname(request.getProductname());
		 product.setSellername(request.getSellername());
		 product.setPrice(request.getPrice());
		 product.setAuctionid(request.getAuctionid());
		 product.setProimage(request.getProimage());
		 
		 repository.save(product);
		 return true;
	 }
	 
	 public boolean delete(Long productid) {
		 repository.deleteById(productid);
		 return true;
	 }
	 





}
