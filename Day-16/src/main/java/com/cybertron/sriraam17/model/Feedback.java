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
@Table(name="_feedback")
public class Feedback {

	@Id
//	@GeneratedValue(strategy = GenerationType.UUID)
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long fid;
	private String username;
	private String email;
	private Long phoneno;
	private String feedback;
	
	  @Enumerated(EnumType.STRING)
	private Role role;

}
