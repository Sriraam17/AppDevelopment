package com.cybertron.sriraam17.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ProductDetailRequest {
	
	private Long auctionid;
	private String brand;
	private String model;
	private String variant;
	private Integer years;
	private String colour;
}
