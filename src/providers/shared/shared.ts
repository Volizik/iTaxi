import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertController, LoadingController} from "ionic-angular";


@Injectable()
export class SharedProvider {

    url = 'https://taxi.art-craft.xyz/api/user';

    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {}

    preloader() {
        return this.loadingCtrl.create({
            content: "Загрузка..."
        });
    }

    showAlert(text) {
        const alert = this.alertCtrl.create({
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

    setPhoto(photo) {
        let formData = new FormData();
        formData.append('token', this.getToken());
        formData.append('avatar', photo);
        return this.http.post(`${this.url}/avatar`, formData);
    }

    setToken(token) {
        localStorage.setItem('iTaxiToken', token);
    }

    getToken() {
        return localStorage.getItem('iTaxiToken');
    }

    clearToken() {
        localStorage.removeItem('iTaxiToken');
    }

}
