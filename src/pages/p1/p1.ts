import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RequestsProvider} from "../../providers/requests/requests";

/**
 * Generated class for the P1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p1',
  templateUrl: 'p1.html',
})
export class P1Page {

  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestsProvider: RequestsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P1Page');
    this.requestsProvider.getList(1).subscribe(res => {
      this.data = JSON.stringify(res);
    })
  }

}
