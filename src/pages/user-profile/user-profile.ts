import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-profile',
    templateUrl: 'user-profile.html',
})
export class UserProfilePage {

    user = {
        name: 'Вася',
        age: '120',
        gender: 'мужской',
        phone: '+38(066) 123 45 56',
        car: 'Mercedes Vito',
        photo: './assets/imgs/nofoto.png'
    };

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserProfilePage');
    }

    editProfile() {
        this.navCtrl.push('UserProfileEditPage')
    }


}
