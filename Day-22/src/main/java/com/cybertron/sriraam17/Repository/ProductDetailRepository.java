package com.cybertron.sriraam17.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.sriraam17.model.ProductDetails;

public interface ProductDetailRepository extends JpaRepository<ProductDetails,Long>{
	

	ProductDetails findByAuctionid(Long auctionid);
	

}
