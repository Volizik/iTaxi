import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthProvider} from "../auth/auth";

/*
  Generated class for the TransportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportProvider {

    url = 'https://taxi.art-craft.xyz/api/motor-transport';
    user = this.authProvider.getUserInfo();
    token: string = this.user.token;
    id: string = this.user.id;

    constructor(public http: HttpClient, private authProvider: AuthProvider) {
        console.log('Hello TransportProvider Provider');
        console.log('token', this.token);
        console.log('id', this.id);
    }

    addTransport(transport) {
        let formData = new FormData();
        formData.append('token', this.token);
        formData.append('brand', transport.brand);
        formData.append('model', transport.model);
        formData.append('user_id', this.id);
        formData.append('year', transport.year);
        formData.append('city_id', '1');
        return this.http.post(`${this.url}/add`, formData);
    }

    getAllTransport() {
        let formData = new FormData();
        formData.append('token', this.token);
        formData.append('user_id', this.id);
        formData.append('offset', '0');
        formData.append('limit', '100');
        return this.http.post(`${this.url}/get-lists`, formData);
    }

    deleteCurrentTransport(carId) {
        let formData = new FormData();
        formData.append('token', this.token);
        formData.append('id', carId);
        return this.http.post(`${this.url}/delete`, formData);
    }

}

