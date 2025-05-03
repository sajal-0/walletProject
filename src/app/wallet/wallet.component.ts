import { Component } from '@angular/core';
import { WalletService } from '../wallet.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  userId: number = 1;
  amount: number = 0.0;
  balance: number = 0.0;

  constructor(private walletService: WalletService,private http: HttpClient) {}
  getBalance() {
    this.http.get<number>(`http://localhost:8080/wallet/balance/${this.userId}`)
      .subscribe(data => {
        this.balance = data;
      }, error => {
        console.error('Error fetching balance', error);
      });
  } 
  addMoney() {
    this.walletService.addMoney(this.userId, this.amount).subscribe((data) => {
      alert('Money added successfully!');
      this.getBalance(); // Refresh balance after transaction
    });
  }

  withdrawMoney() {
    this.walletService.withdrawMoney(this.userId, this.amount).subscribe((data) => {
      alert('Money withdrawn successfully!');
      this.getBalance(); // Refresh balance after transaction
    });
  }
}
