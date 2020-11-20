import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SettleUpComponent } from './settle-up/settle-up.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { GroupExpensesComponent } from './group-expenses/group-expenses.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'addExpense', component:AddExpenseComponent,canActivate: [AuthGuard]},
  {path: 'groupExpense', component:GroupExpensesComponent,canActivate: [AuthGuard]},
  {path: 'login',component:LoginComponent},
  {path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
  {path: 'addExpense',component: AddExpenseComponent,canActivate: [AuthGuard]},
  {path: 'settleUp', component: SettleUpComponent,canActivate: [AuthGuard]},
  {path: 'paypal', component: PaypalComponent,canActivate: [AuthGuard]},
  {path: 'facebook', component: FacebookComponent,canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent,},
  {path: '', component: TestComponent, canActivate: [AuthGuard] },
  {path: 'test', component: TestComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
