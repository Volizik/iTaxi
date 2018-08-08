import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertController, LoadingController} from "ionic-angular";
import {AuthProvider} from "../auth/auth";


@Injectable()
export class SharedProvider {

    url = 'https://taxi.art-craft.xyz/api/user';

    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private authProvider: AuthProvider) {}

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
        formData.append('token', this.authProvider.getUserInfo()['token']);
        formData.append('avatar', photo);
        return this.http.post(`${this.url}/avatar`, formData);
    }


}
