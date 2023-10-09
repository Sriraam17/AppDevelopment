package com.cybertron.sriraam17.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequest {

	private Long productid;
	private String productname;
	private Long price;
	private Long auctionid;
	private String description;
	
}
