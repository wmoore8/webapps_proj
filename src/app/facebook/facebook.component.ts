import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit{

  constructor(){}

fbLibrary() {

  (window as any).fbAsyncInit = function() {
    window['FB'].init({
      appId      : '664197537625130',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.1'
    });
    window['FB'].AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

}
ngOnInit(): void {
  this.fbLibrary();
}

login() {

  window['FB'].login((response) => {
      console.log('login response',response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name, email'
        }, (userInfo) => {

          console.log("user information");
          console.log(userInfo);
        });

      } else {
        console.log('User login failed');
      }
  }, {scope: 'email'});
}
}
