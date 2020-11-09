import { AboutComponent } from './about/about.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SettleUpComponent } from './settle-up/settle-up.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { GroupExpensesComponent } from './group-expenses/group-expenses.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'addExpense', component:AddExpenseComponent},
  {path: 'groupExpense', component:GroupExpensesComponent},
  {path: 'login',component:LoginComponent},
  {path: 'help', component: HelpComponent},
  {path: 'addExpense',component: AddExpenseComponent},
  {path: 'settleUp', component: SettleUpComponent},
  {path: 'paypal', component: PaypalComponent},
  {path: 'facebook', component: FacebookComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
