import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AccountService } from "./account.service";

@Component({
  selector: 'account',
  templateUrl: 'account.html'
})
export class AccountComponent implements OnInit {
  private accountForm: FormGroup;
  public buttonLabel: string;
  public items: any[];

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) {}

  public ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      cpf: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });

    this.buttonLabel = "Cadastrar";
    this.items = [
      {
        label: "Nome",
        type: "text",
        name: "name",
      },
      {
        label: "E-mail",
        type: "email",
        name: "email",
      },
      {
        label: "Telefone",
        type: "tel",
        name: "phone",
      },
      {
        label: "CPF",
        type: "text",
        name: "cpf",
      },
      {
        label: "Senha",
        type: "password",
        name: "password",
      },
      {
        label: "Confirmar Senha",
        type: "password",
        name: "confirmPassword",
      },
    ];
  }

  public createAccount(): void {
    this.accountService.createAccount(this.accountForm.value)
      .subscribe(null, (err: Error) => console.error(err.message));
  }
}