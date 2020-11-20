import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public auth: AuthService,private router: Router) { }
  title = 'webappsProj';

  logout() {
    this.auth.logout();
  }
}


