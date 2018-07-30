import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authProvider: AuthProvider) {
    }

    ionViewDidLoad() {
        console.log(this.authProvider.getUserInfo());
        if (this.authProvider.getUserInfo() !== null) {
            this.navCtrl.setRoot('AppMenuPage');
        } else {
            this.navCtrl.setRoot('AuthTabsPage');
        }
    }

}
