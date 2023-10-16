package com.cybertron.sriraam17.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class FeedbackRequest {
	
	private Long fid;
	private String username;
	private String email;
	private Long phoneno;
	private String feedback; 
}
