import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthRegistrationPage } from './auth-registration';

@NgModule({
  declarations: [
    AuthRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthRegistrationPage),
  ],
})
export class AuthRegistrationPageModule {}
