import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  public points: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }
}
