package com.example.walletsystem.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.walletsystem.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom queries if needed, for example:
    // Optional<User> findByName(String name);
}
