import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertController} from "ionic-angular";


@Injectable()
export class AuthProvider {

    url = 'https://taxi.art-craft.xyz/api/user';

    constructor(public http: HttpClient,
                public alertCtrl: AlertController) {}

    login(data) {
        let formData = new FormData();
        formData.append('username', data.username.toString());
        formData.append('password', data.password.toString());
        return this.http.post(`${this.url}/login`, formData);
    }

    registration(data) {
        let formData = new FormData();
        formData.append('username', data.username.toString());
        formData.append('email', data.email.toString());
        formData.append('password', data.password.toString());
        return this.http.post(`${this.url}/add`, formData);
    }

    showError(text) {
        const alert = this.alertCtrl.create({
            title: 'Ошибка!',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

    showSuccess() {
        const alert = this.alertCtrl.create({
            title: 'Успех!',
            subTitle: 'Success!',
            buttons: ['OK']
        });
        alert.present();
    }

    setUserInfo(data) {
        console.log(data)
        localStorage.setItem('iTaxiUserInfo', JSON.stringify({token: data['token'], id: data['user_id']}));
    }
    getUserInfo() {
        // console.log(localStorage.getItem('iTaxiUserInfo'))
        return JSON.parse(localStorage.getItem('iTaxiUserInfo'));
    }
    clearUserInfo() {
        localStorage.removeItem('iTaxiUserInfo');
    }

}
