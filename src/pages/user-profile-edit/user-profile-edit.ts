import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharedProvider} from "../../providers/shared/shared";

/**
 * Generated class for the UserProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-profile-edit',
    templateUrl: 'user-profile-edit.html',
})
export class UserProfileEditPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private sharedProvider: SharedProvider) {
    }

    ionViewDidLoad() {
    }

    setPhoto(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (ev) => {
                this.sharedProvider.setPhoto(ev.target['result']).subscribe((e) => {
                    console.log(e)
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
