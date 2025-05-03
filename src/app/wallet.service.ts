import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {


  private baseUrl = 'http://localhost:8080'; 

  constructor(private http:HttpClient) { }

  // Create User
  createUser(user: { name: string, balance: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/create`, user);
  }

  // Get User Balance
  getBalance(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/wallet/balance/${userId}`);
  }

  // Add Money to Wallet
  addMoney(userId: number, amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/wallet/add/${userId}?amount=${amount}`, null);
  }

  // Withdraw Money from Wallet
  withdrawMoney(userId: number, amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/wallet/withdraw/${userId}?amount=${amount}`, null);
  }

   // Get Transaction History
   getTransactionHistory(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/wallet/history/${userId}`);
  }

}
