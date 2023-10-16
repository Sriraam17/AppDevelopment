package com.cybertron.sriraam17.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.sriraam17.model.ProductDetails;
import com.cybertron.sriraam17.Service.ProductDetailService;
import com.cybertron.sriraam17.dto.request.ProductDetailRequest ;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/prodetails")	
@RequiredArgsConstructor

public class ProductDetailController {

private final ProductDetailService ProductDetailService;
	
	@PostMapping("/post")
	  public ResponseEntity<String> register(
	      @RequestBody ProductDetailRequest request
	  ) {
	      boolean isSaved = ProductDetailService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Details added!")
	                : ResponseEntity.badRequest().build();

	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<ProductDetails>> getAllProducts() {
       List<ProductDetails> productList = ProductDetailService.getAllProducts();
       return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
               : ResponseEntity.noContent().build();
	}
       
    @PutMapping("/put/{auctionid}")
    public ResponseEntity<String> updateProduct(@RequestBody ProductDetailRequest request, @PathVariable Long auctionid)
    {
    	boolean isUpdate = ProductDetailService.updateProduct(request,auctionid);
    	return isUpdate ? ResponseEntity.status(201).body("Updated!")
    			: ResponseEntity.notFound().build();
    }
    
    @DeleteMapping ("/delete/{auctionid}")
    public ResponseEntity<String> delete(@PathVariable("auctionid") Long auctionid)
    {
    	boolean isDelete = ProductDetailService.delete(auctionid);
    	return isDelete ? ResponseEntity.status(201).body("Deleted!")
    					: ResponseEntity.notFound().build();    			
    }
       
   }
