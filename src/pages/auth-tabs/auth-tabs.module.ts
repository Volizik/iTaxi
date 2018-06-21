import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AuthTabsPage} from './auth-tabs';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        AuthTabsPage,
    ],
    imports: [
        IonicPageModule.forChild(AuthTabsPage),
        ComponentsModule
    ],
})
export class AuthTabsPageModule {
}
