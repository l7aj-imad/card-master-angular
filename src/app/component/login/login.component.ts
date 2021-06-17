import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


    //nice to meet you
export class LoginComponent implements OnInit {

  _userName!: string;
  _password!: string;
  loged = true

  message: any;
  constructor(private router: Router, private loginservice: AuthenticationService) { }
  invalidLogin = false
  ngOnInit(): void {
  }

  checkLogin() {
    this.loginservice.authenticate(this._userName, this._password)
    console.log("username : " + this._userName)
    console.log("password : " + this._password)
    if (sessionStorage.getItem('username') == "notLogged") {
      console.log(sessionStorage.getItem('username'))
      this.loged = false

    } else {
      this.loged = true
    }
  }
}