import { FacebookComponent } from './facebook/facebook.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupExpensesComponent } from './group-expenses/group-expenses.component';
import { GroupProfilesComponent } from './group-profiles/group-profiles.component';
import { HelpComponent } from './help/help.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { SettleUpComponent } from './settle-up/settle-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';




@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    DashboardComponent,
    GroupExpensesComponent,
    GroupProfilesComponent,
    HelpComponent,
    MenuBarComponent,
    RightSideBarComponent,
    SettleUpComponent,
    UserProfileComponent,

    LoginComponent,
      PaypalComponent,
      FacebookComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
