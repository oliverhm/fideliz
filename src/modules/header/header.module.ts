import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { IonicModule } from "ionic-angular";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [IonicModule],
})
export class HeaderModule {}