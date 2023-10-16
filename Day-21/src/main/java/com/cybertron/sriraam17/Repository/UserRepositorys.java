package com.cybertron.sriraam17.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.sriraam17.model.User;

public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
