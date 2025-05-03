package com.example.walletsystem.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.walletsystem.dao.TransactionRepository;
import com.example.walletsystem.dao.UserRepository;
import com.example.walletsystem.entity.Transaction;
import com.example.walletsystem.entity.User;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WalletService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // Get user balance
    public double getBalance(Long userId) {
        User user = getUserOrThrow(userId);
        return user.getBalance();
    }

    // Add money
    public User addMoney(Long userId, double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");

        User user = getUserOrThrow(userId);
        user.setBalance(user.getBalance() + amount);
        userRepository.save(user);

        Transaction tx = new Transaction(userId, amount, "ADD", LocalDateTime.now());
        transactionRepository.save(tx);

        return user;
    }

    // Withdraw money
    public User withdrawMoney(Long userId, double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");

        User user = getUserOrThrow(userId);
        if (user.getBalance() < amount) throw new IllegalArgumentException("Insufficient balance");

        user.setBalance(user.getBalance() - amount);
        userRepository.save(user);

        Transaction tx = new Transaction(userId, amount, "WITHDRAW", LocalDateTime.now());
        transactionRepository.save(tx);

        return user;
    }

    // Get transaction history
    public List<Transaction> getHistory(Long userId) {
        getUserOrThrow(userId); // ensure user exists
        return transactionRepository.findByUserId(userId);
    }

    // Helper: fetch user or throw error
    private User getUserOrThrow(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));
    }
}
