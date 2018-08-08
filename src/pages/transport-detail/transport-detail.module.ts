import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportDetailPage } from './transport-detail';

@NgModule({
  declarations: [
    TransportDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportDetailPage),
  ],
})
export class TransportDetailPageModule {}
