import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loged = false;
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private router: Router, private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    this.httpClient.post<any>(`${this.apiServerUrl}authenticate`, { username, password }).subscribe(
      userData => {
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('id', userData.id)
        sessionStorage.setItem('password', password)
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<" + sessionStorage.getItem('username') + " " + sessionStorage.getItem('id'))
        this.loged = true

        this.router.navigate(['/shop'])
        return this.loged
      },
      error => {
        this.loged = false
        sessionStorage.setItem('username', "notLogged");
        return this.loged
      }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')

    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('password')
  }

  isAdminLoggedIn() {

    let user = sessionStorage.getItem('username')
    if (user == "admin") {
      return true
    }
    return false  
  }
}