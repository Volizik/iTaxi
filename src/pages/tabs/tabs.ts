import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1Root = 'P1Page';
    tab2Root = 'P2Page';
    tab3Root = 'P3Page';

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {}

}
