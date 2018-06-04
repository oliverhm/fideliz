import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/timeout";

const TIMEOUT: number = 60000;

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  public createAccount(data: any): Observable<Object> {
    const reqOpts = {
      params: new HttpParams()
    };

    reqOpts.params.set('Content-Type', 'application/json');

    return this.http.post("https://app-dot-fideliza-api.appspot.com/cadastroUsuarioApp", {
      cpf: data.cpf,
      email: data.email,
      nome: data.name,
      senha: data.password,
      telefone: data.phone,
      desejaReceberInfo: true,
    }, reqOpts)
    .timeout(TIMEOUT);
  }
}