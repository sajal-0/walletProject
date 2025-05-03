import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },  
  { path: 'user', component: CreateUserComponent },              
  { path: 'wallet', component: WalletComponent },          
  { path: 'transactions', component: TransactionHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
