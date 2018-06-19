import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedProvider} from "../../providers/shared/shared";

@IonicPage()
@Component({
  selector: 'page-auth-registration',
  templateUrl: 'auth-registration.html',
})
export class AuthRegistrationPage {

    registrationForm = new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required),
    });

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private authProvider: AuthProvider,
                private sharedProvider: SharedProvider) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegistrationPage');
    }

    registration() {
        const preloader = this.sharedProvider.preloader();
        preloader.present();
        this.authProvider.registration(this.registrationForm.value).subscribe(data => {
            if (data['status'] !== 1) {
                preloader.dismiss();
                this.authProvider.showError('Пользователь с таким логином или email уже существует');
            } else {
                preloader.dismiss();
                this.sharedProvider.showAlert('Вы успешно зарегистрировались! Для входа введите данные.');
                window.location.href = '/#/auth-tabs/вход/auth-login';
            }
        });
    }
}
