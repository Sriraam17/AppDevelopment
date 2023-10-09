package com.cybertron.sriraam17.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.sriraam17.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long>{
	

}
