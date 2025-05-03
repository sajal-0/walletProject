package com.example.walletsystem.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.walletsystem.entity.Transaction;
import com.example.walletsystem.entity.User;
import com.example.walletsystem.service.WalletService;

import java.util.List;

@RestController
@RequestMapping("/wallet")
@CrossOrigin(origins = "http://localhost:4200")
public class WalletController {

    @Autowired
    private WalletService walletService;

    // Get the current balance of the user
    @GetMapping("/balance/{userId}")
    public double getBalance(@PathVariable Long userId) {
        return walletService.getBalance(userId);
    }

    // Add money to the wallet
    @PostMapping("/add/{userId}")
    public User addMoney(@PathVariable Long userId, @RequestParam double amount) {
        return walletService.addMoney(userId, amount);
    }

    // Withdraw money from the wallet
    @PostMapping("/withdraw/{userId}")
    public User withdrawMoney(@PathVariable Long userId, @RequestParam double amount) {
        return walletService.withdrawMoney(userId, amount);
    }

    // Get transaction history for the user
    @GetMapping("/history/{userId}")
    public List<Transaction> getTransactionHistory(@PathVariable Long userId) {
        return walletService.getHistory(userId);
    }
}
