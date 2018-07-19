import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TransportProvider} from "../../providers/transport/transport";

/**
 * Generated class for the TransportNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-transport-new',
    templateUrl: 'transport-new.html',
})
export class TransportNewPage {

    brand;
    model;
    year;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private transportProvider: TransportProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TransportNewPage');
    }

    addTransport() {
        this.transportProvider
            .addTransport({brand: this.brand, model: this.model, year: this.year})
            .subscribe(data => {
                console.log(data)
            });
        this.navCtrl.push('TransportPage');
    }

}
