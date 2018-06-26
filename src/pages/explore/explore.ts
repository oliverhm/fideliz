import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorePage } from '../store/store';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  public items: any[];
  public points: any[];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        name: "Barbearia Brisa Italiana",
        category: ["Barbearia", "Salão de Beleza"],
        address: "Rua das Nações, 15 - Bairro Nova Itália",
        gift: {

        }
      },
      {
        name: "Barbearia Brisa Italiana",
        category: ["Barbearia", "Salão de Beleza"],
        address: "Rua das Nações, 15 - Bairro Nova Itália",
        gift: {

        }
      },
      {
        name: "Barbearia Brisa Italiana",
        category: ["Barbearia", "Salão de Beleza"],
        address: "Rua das Nações, 15 - Bairro Nova Itália",
        gift: {

        }
      },
      {
        name: "Barbearia Brisa Italiana",
        category: ["Barbearia", "Salão de Beleza"],
        address: "Rua das Nações, 15 - Bairro Nova Itália",
        gift: {

        }
      },
      {
        name: "Barbearia Brisa Italiana",
        category: ["Barbearia", "Salão de Beleza"],
        address: "Rua das Nações, 15 - Bairro Nova Itália",
        gift: {

        }
      },
      {
        name: "Barbearia Brisa Italiana",
        category: ["Barbearia", "Salão de Beleza"],
        address: "Rua das Nações, 15 - Bairro Nova Itália",
        gift: {

        }
      },
    ];

    this.points = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ];
  }

  public navStorePage(): void {
    this.navCtrl.push(StorePage);
  }
}