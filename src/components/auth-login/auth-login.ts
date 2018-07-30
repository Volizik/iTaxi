import { Component } from '@angular/core';
import {AuthProvider} from "../../providers/auth/auth";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NavController, NavParams} from "ionic-angular";
import {SharedProvider} from "../../providers/shared/shared";


@Component({
  selector: 'auth-login',
  templateUrl: 'auth-login.html'
})
export class AuthLoginComponent {

    loginForm = new FormGroup({
        'username': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authProvider: AuthProvider,
                private sharedProvider: SharedProvider) {}

    login() {
        const preloader = this.sharedProvider.preloader();
        preloader.present();
        this.authProvider.login(this.loginForm.value).subscribe(data => {
            console.log(data);
            if (data['status'] !== 1) {
                preloader.dismiss();
                this.authProvider.showError('К сожалению такого пользователя не существует!');
                return false;
            } else {
                this.authProvider.setUserInfo(data);
                this.navCtrl.setRoot('AppMenuPage');
                preloader.dismiss();

            }
        });
    }


}
