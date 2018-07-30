import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {TransportProvider} from "../../providers/transport/transport";

/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-transport',
    templateUrl: 'transport.html',
})
export class TransportPage {

    carsArr;
    @ViewChild('navbar') navBar: Navbar;

    constructor(public navCtrl: NavController, public navParams: NavParams, private transportProvider: TransportProvider) {
    }

    ionViewDidEnter() {
        this.navBar.backButtonClick = () => {
            this.navCtrl.setRoot('AppMenuPage');
        };
    }

    ionViewDidLoad() {
        this.transportProvider.getAllTransport().subscribe(data => {
            this.carsArr = data;
            console.log(this.carsArr)
        })
    }

    goToAddTransport() {
        this.navCtrl.push('TransportNewPage');
    }

    goToDetailCarPage(car) {
        this.navCtrl.push('TransportDetailPage', {car: car});
    }

    // deleteCar(carId) {
    //     this.transportProvider.deleteCurrentTransport(carId).subscribe(res => {
    //         console.log('car deleted');
    //     });
    // }

}
