import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
