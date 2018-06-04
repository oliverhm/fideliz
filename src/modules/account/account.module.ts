import { NgModule } from "@angular/core";
import { AccountComponent } from "./account.component";
import { IonicModule } from "ionic-angular";
import { AccountService } from "./account.service";

@NgModule({
  declarations: [AccountComponent],
  entryComponents: [AccountComponent],
  providers: [AccountService],
  imports: [IonicModule],
})
export class AccountModule {}