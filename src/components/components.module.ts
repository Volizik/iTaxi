import {NgModule} from '@angular/core';
import {AuthLoginComponent} from './auth-login/auth-login';
import {AuthRegistrationComponent} from './auth-registration/auth-registration';
import {Tab, Tabs} from './tabs/tabs';
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AuthLoginComponent,
        AuthRegistrationComponent,
        Tabs,
        Tab
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AuthLoginComponent,
        AuthRegistrationComponent,
        Tabs,
        Tab
    ]
})
export class ComponentsModule {
}
