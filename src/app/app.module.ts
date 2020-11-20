import { TestComponent } from './test/test.component';
import { FacebookComponent } from './facebook/facebook.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';



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
    FacebookComponent,
    AboutComponent,
    TestComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
