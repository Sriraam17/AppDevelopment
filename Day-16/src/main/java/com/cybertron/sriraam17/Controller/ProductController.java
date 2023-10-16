package com.cybertron.sriraam17.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.sriraam17.model.Product;
import com.cybertron.sriraam17.Service.ProductService;
import com.cybertron.sriraam17.dto.request.ProductRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/temp")	
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class ProductController {

private final ProductService ProductService;
	
	@PostMapping("/post")
	  public ResponseEntity<String> register(
	      @RequestBody ProductRequest request
	  ) {
	      boolean isSaved = ProductService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Product added!")
	                : ResponseEntity.badRequest().build();

	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<Product>> getAllProducts() {
       List<Product> productList = ProductService.getAllProducts();
       return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
               : ResponseEntity.noContent().build();
	}
       
    @PutMapping("/put/{productid}")
    public ResponseEntity<String> updateProduct(@RequestBody ProductRequest request, @PathVariable Long productid)
    {
    	boolean isUpdate = ProductService.updateProduct(request,productid);
    	return isUpdate ? ResponseEntity.status(201).body("Updated!")
    			: ResponseEntity.notFound().build();
    }
    
    @DeleteMapping ("/delete/{productid}")
    public ResponseEntity<String> delete(@PathVariable("productid") Long productid)
    {
    	boolean isDelete = ProductService.delete(productid);
    	return isDelete ? ResponseEntity.status(201).body("Deleted!")
    					: ResponseEntity.notFound().build();    			
    }
       
   }
	


