import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportNewPage } from './transport-new';

@NgModule({
  declarations: [
    TransportNewPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportNewPage),
  ],
})
export class TransportNewPageModule {}
