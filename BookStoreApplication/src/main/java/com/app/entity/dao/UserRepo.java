package com.app.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	public User findByPhoneNo(long phone);
	public User findByPhoneNoAndPassword(long phone, String password);
	public User findByPhoneNoAndEmail(long phone, String email);
}
