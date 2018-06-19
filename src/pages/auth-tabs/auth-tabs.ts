import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-auth-tabs',
    templateUrl: 'auth-tabs.html',
})
export class AuthTabsPage {

    tab1Root = 'AuthLoginPage';
    tab2Root = 'AuthRegistrationPage';

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad AuthTabsPage');
    }

}
