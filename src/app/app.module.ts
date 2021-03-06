import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { SharedProvider } from '../providers/shared/shared';
import {CommonModule} from "@angular/common";
import { TransportProvider } from '../providers/transport/transport';
import { RequestsProvider } from '../providers/requests/requests';
import { CityProvider } from '../providers/city/city';


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthProvider,
        SharedProvider,
        TransportProvider,
        RequestsProvider,
        CityProvider
    ]
})
export class AppModule {}
