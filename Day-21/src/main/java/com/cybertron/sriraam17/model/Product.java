package com.cybertron.sriraam17.model;

import com.cybertron.sriraam17.model.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_product")
public class Product {

	@Id
//	@GeneratedValue(strategy = GenerationType.UUID)
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long productid;
	private String productname;
	private String sellername;
	private Long price;
	private Long auctionid;
	private String proimage;
	
	  @Enumerated(EnumType.STRING)
	private Role role;

}
