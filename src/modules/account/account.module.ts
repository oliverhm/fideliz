import { NgModule } from "@angular/core";
import { AccountComponent } from "./account.component";
import { IonicModule } from "ionic-angular";
import { AccountService } from "./account.service";
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [AccountComponent],
  entryComponents: [AccountComponent],
  providers: [AccountService],
  imports: [IonicModule, HeaderModule],
})
export class AccountModule {}