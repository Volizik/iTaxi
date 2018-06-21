import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";


@IonicPage()
@Component({
    selector: 'page-app-menu',
    templateUrl: 'app-menu.html',
})
export class AppMenuPage {

    rootPage = 'TabsPage';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authProvider: AuthProvider) {
    }

    ionViewDidLoad() {}

    logout() {
        this.authProvider.clearToken();
        this.navCtrl.setRoot('AuthTabsPage');
    }

    openUserProfilePage() {
        this.navCtrl.push('UserProfilePage')
    }

}
