import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login/task';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(login: Login) {
    return new Promise((resolve, reject) => {
      if (login.Email === 'admin@admin.com' && login.Password === 'admin') {
        resolve();
      } else {
        reject('Email or Password is incorrect');
      }
    });
  }
}
