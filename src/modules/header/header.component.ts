import { Component, Input } from "@angular/core";

@Component({
  selector: 'comp-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input()
  public title: string = "Título da Página";

  @Input()
  public subheader: boolean = false;

  public openQrCode(): void {
    console.log("Clicou no ícone do QR Code...");
  }

  public filterNearFromMe(): void {
    console.log("Near From Me...");
  }

  public changeLocation(): void {
    console.log("Change location...");
  }

  public toggleFilter(): void {
    console.log("Toggle filter...");
  }
}