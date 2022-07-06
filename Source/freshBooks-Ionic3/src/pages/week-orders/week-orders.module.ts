import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekOrdersPage } from './week-orders';

@NgModule({
  declarations: [
    WeekOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekOrdersPage),
  ],
})
export class WeekOrdersPageModule {}
