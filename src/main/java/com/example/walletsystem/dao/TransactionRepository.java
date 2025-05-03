package com.example.walletsystem.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.walletsystem.entity.Transaction;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(Long userId);
}
