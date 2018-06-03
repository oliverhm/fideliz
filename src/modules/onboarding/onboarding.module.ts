import { IonicModule } from "ionic-angular";
import { NgModule } from "@angular/core";

import { OnboardingComponent } from "./onboarding.component";

@NgModule({
  declarations: [
    OnboardingComponent,
  ],
  entryComponents: [
    OnboardingComponent,
  ],
  imports: [
    IonicModule,
  ]
})
export class OnboardingModule {}
