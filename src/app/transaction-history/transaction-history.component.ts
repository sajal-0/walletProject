import { Component } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  userId: number = 1;
  transactions: any[] = [];

  constructor(private walletService: WalletService) {}

  getHistory() {
    this.walletService.getTransactionHistory(this.userId).subscribe((data) => {
      this.transactions = data;
    }, error => {
      console.error('Error fetching history:', error);
      alert('Failed to fetch transaction history');
    });
  }
}
