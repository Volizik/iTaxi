import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SharedProvider} from "../shared/shared";

/*
  Generated class for the TransportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportProvider {

    url = 'https://taxi.art-craft.xyz/api/motor-transport';

    constructor(public http: HttpClient, private sharedProvider: SharedProvider) {
        console.log('Hello TransportProvider Provider');
    }

    addTransport(transport) {
        let formData = new FormData();
        formData.append('token', this.sharedProvider.getToken());
        formData.append('brand', transport.brand);
        formData.append('model', transport.model);
        formData.append('user_id', '18');
        formData.append('year', transport.year);
        formData.append('city_id', '1');
        return this.http.post(`${this.url}/add`, formData);
    }

    getAllTransport() {
        let formData = new FormData();
        formData.append('token', this.sharedProvider.getToken());
        formData.append('user_id', '18');
        formData.append('offset', '0');
        formData.append('limit', '100');
        return this.http.post(`${this.url}/get-lists`, formData);
    }

    deleteCurrentTransport(carId) {
        let formData = new FormData();
        formData.append('token', this.sharedProvider.getToken());
        formData.append('id', carId);
        return this.http.post(`${this.url}/delete`, formData);
    }

}

