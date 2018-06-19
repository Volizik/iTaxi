import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {SharedProvider} from "../../providers/shared/shared";

@IonicPage()
@Component({
    selector: 'page-auth-login',
    templateUrl: 'auth-login.html',
})
export class AuthLoginPage {

    loginForm = new FormGroup({
        'username': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authProvider: AuthProvider,
                private app: App,
                private sharedProvider: SharedProvider) {}

    ionViewDidLoad() {}

    login() {
        const preloader = this.sharedProvider.preloader();
        preloader.present();
        this.authProvider.login(this.loginForm.value).subscribe(data => {
            if (data['status'] !== 1) {
                preloader.dismiss();
                this.authProvider.showError('К сожалению такого пользователя не существует!');
                return false;
            } else {
                this.authProvider.setToken(data['token']);
                this.app.getRootNav().setRoot('TabsPage');
                window.location.href = '/#/tabs/главная/p2';
                this.navCtrl.push('TabsPage');
                preloader.dismiss();
            }
        });
    }


}
