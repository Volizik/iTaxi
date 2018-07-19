import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharedProvider} from "../../providers/shared/shared";


@IonicPage()
@Component({
    selector: 'page-app-menu',
    templateUrl: 'app-menu.html',
})
export class AppMenuPage {

    rootPage = 'TabsPage';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private sharedProvider: SharedProvider) {
    }

    ionViewDidLoad() {}

    logout() {
        this.sharedProvider.clearToken();
        this.navCtrl.setRoot('AuthTabsPage');
    }

    openUserProfilePage() {
        this.navCtrl.push('UserProfilePage')
    }

    openUserTransportPage() {
        this.navCtrl.push('TransportPage')
    }

}
