import { Component, ViewChild } from "@angular/core";
import { Slides, NavController } from "ionic-angular";

import { LoginComponent } from "../login/login.component";
import { TabsPage } from "../../pages/tabs/tabs";

@Component({
  selector: 'onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingComponent {
  @ViewChild(Slides) onboardingSlides: Slides;
  public slides: any[];
  public title: string;
  public buttonLabel: string = "Quer experimentar sem criar uma conta? <span>Clique aqui</span>";

  constructor(private navCtrl: NavController) {
    this.title = "Olá, bem vindo ao Fideliz.";
    this.slides = [
      {
        body: "Aqui você organiza todos os seus cartões fidelidade de vários estabelecimentos e acompanha o status de cada um deles.",
        image: {
          src: "assets/modules/onboarding/fideliz.png",
          alt: "Imagem do Fideliz"
        },
      },
      {
        body: "Através de um QR code, que fica aqui no canto direito, o estabelecimento escaneia e pronto. Seus pontos já foram computados.",
        image: {
          src: "assets/modules/onboarding/qrcode.png",
          alt: "Imagem do QR code"
        },
      },
      {
        body: "Na aba meus cartões você pode acompanhar o seu progresso em todos os programas de fidelização que participa.",
        image: {
          src: "assets/modules/onboarding/carteira.png",
          alt: "Imagem de Cartões"
        },
      },
      {
        body: "Tudo em um só lugar. Sem perdas, sem preocupações e sem stress ;) deixa que a gente organiza tudo por aqui! Legal, né? Agora é só aproveitar.",
        image: {
          src: "assets/modules/onboarding/feliz.png",
          alt: "Imagem Rosto Feliz"
        },
      },
    ];
  }

  public slideNext(): void {
    this.onboardingSlides.slideNext();
  }

  public navTabsPage(): void {
    this.navCtrl.setRoot(TabsPage)
      .then(() => this.navCtrl.popToRoot());
  }

  public navLoginComponent(): void {
    this.navCtrl.setRoot(LoginComponent)
      .then(() => this.navCtrl.popToRoot());
  }
}