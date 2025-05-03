package com.example.walletsystem.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.walletsystem.dao.UserRepository;
import com.example.walletsystem.entity.User;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

 
    public User createUser(User user) {
    
        return userRepository.save(user); // Save the user to the database
    }

   
}
