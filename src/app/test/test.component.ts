import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor(public auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
