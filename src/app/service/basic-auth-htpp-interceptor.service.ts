import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<string>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          'Authorization': sessionStorage.getItem('token') + ""
        },
        responseType: 'text'
      })
    }

    return next.handle(req);


  }
}
