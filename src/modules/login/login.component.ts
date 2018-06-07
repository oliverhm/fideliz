import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from "ionic-angular";

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

  public navAccountComponent(): void {
    this.navCtrl.push(AccountComponent);
  }

  public navForgotPasswordComponent(): void {
    console.log("Clicou em navForgotPasswordComponent()");
  }
}