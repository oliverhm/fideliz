import { IonicModule } from "ionic-angular";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  imports: [IonicModule]
})
export class LoginModule {}
