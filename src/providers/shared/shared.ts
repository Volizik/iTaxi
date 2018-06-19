import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertController, LoadingController} from "ionic-angular";


@Injectable()
export class SharedProvider {

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

}
