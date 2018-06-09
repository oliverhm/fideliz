import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from "ionic-angular";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { AccountComponent } from "../account/account.component";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private facebook: Facebook,
  ) {}

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  public doLogin(): void {
    console.log(this.loginForm.value)
  }

  public facebookLogin(): void {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch((err: Error) => console.log('Error logging into Facebook', err));
  }

  public googleLogin(): void {
    console.log("Google login...");
  }

  public navAccountComponent(): void {
    this.navCtrl.push(AccountComponent);
  }

  public navForgotPasswordComponent(): void {
    console.log("Clicou em navForgotPasswordComponent()");
  }
}