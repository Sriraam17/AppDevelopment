package com.example.crudsample.CrudOperation.service;

import java.util.List;

import com.example.crudsample.CrudOperation.dto.requestt.*;
import com.example.crudsample.CrudOperation.dto.response.*;

public interface UserService {

	boolean saveUser(UserRequestDto userRequest);

	List<UserResponseDto> getAllUser();

	UserResponseDto updateUser(UserRequestDto userRequest, int id);

	boolean deleteUser(int id);
	
}
