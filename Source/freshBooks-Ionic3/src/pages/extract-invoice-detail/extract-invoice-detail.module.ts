import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtractInvoiceDetailPage } from './extract-invoice-detail';

@NgModule({
  declarations: [
    ExtractInvoiceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtractInvoiceDetailPage),
  ],
})
export class ExtractInvoiceDetailPageModule {}
