import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TransportProvider} from "../../providers/transport/transport";

/**
 * Generated class for the TransportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-transport-detail',
    templateUrl: 'transport-detail.html',
})
export class TransportDetailPage {

    car;

    constructor(public navCtrl: NavController, public navParams: NavParams, private transportProvider: TransportProvider) {
        this.car = this.navParams.get('car');
        console.log(this.navParams.get('car'));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TransportDetailPage');
    }

    deleteTransport(carId) {
        this.transportProvider.deleteCurrentTransport(carId).subscribe(data => {
            console.log(data);
            if (data['status'] === 1) {
                this.navCtrl.push('TransportPage');
            }
        })
    }

}
