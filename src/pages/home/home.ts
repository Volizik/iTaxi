import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SharedProvider} from "../../providers/shared/shared";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sharedProvider: SharedProvider) {}

  ionViewDidLoad() {
    if (this.sharedProvider.getToken()) {
        this.navCtrl.setRoot('AppMenuPage');
    } else {
        this.navCtrl.setRoot('AuthTabsPage');
    }
  }

}
