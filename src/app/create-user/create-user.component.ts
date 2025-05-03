import { Component } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  name: string = '';
  balance: number = 0.0;
  
  constructor(private walletService: WalletService) {}

  createUser() {
    const user = { name: this.name, balance: this.balance };
    this.walletService.createUser(user).subscribe(response => {
      console.log('User created:', response);
      alert('User created successfully');
    }, error => {
      console.error('Error creating user:', error);
    });
    this.resetForm();
  }

  // Reset the form
  resetForm() {
    this.name = '';  
    this.balance = 0;  
  }
}
