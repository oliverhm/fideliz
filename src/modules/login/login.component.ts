import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  public doLogin(): void {
    console.log(this.loginForm.value)
  }
}