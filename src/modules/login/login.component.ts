import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private login : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  doLogin() {
    console.log(this.login.value)
  }
}