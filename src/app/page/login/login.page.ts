import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

import { DefaultLogin, Login } from 'src/app/models/login/task';

import { LoginService } from 'src/app/providers/login/login.service';
import { ToastUtil } from 'src/app/utils/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public login: Login = DefaultLogin();
  public form: FormGroup = this.defaultForm();
  public keyboardType = 'number';
  public passwordType = 'password';
  public inInput = false;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loginService: LoginService,
    public toast: ToastUtil
  ) {}

  public showPassword() {
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  public inputOut() {
    setTimeout(() => this.inInput = false, 250);
  }

  public inputIn() {
    setTimeout(() => this.inInput = true, 250);
  }

  public setLogin(formulario: any) {
    this.login.Email  = formulario.Email;
    this.login.Password = formulario.Password;

    this.loginService.login(this.login)
    .then(() => {
      this.navCtrl.navigateRoot('/home');
    }).catch(e => {
      this.toast.show(e, 3000);
    });
  }

  private defaultForm(): FormGroup {
    return this.formBuilder.group({
      Email:  new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', Validators.required)
    });
  }

}
