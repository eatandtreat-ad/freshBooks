import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WeekOrdersPage } from "../pages/week-orders/week-orders";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FreshBooksApiProvider } from '../providers/fresh-books-api/fresh-books-api';

import { HttpModule } from '@angular/http';
import { Deeplinks } from '@ionic-native/deeplinks';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CodePush } from '@ionic-native/code-push';
import { HelperProvider } from '../providers/helper/helper';
import { ExtractInvoiceDetailPage } from '../pages/extract-invoice-detail/extract-invoice-detail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WeekOrdersPage,
    ExtractInvoiceDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WeekOrdersPage,
    ExtractInvoiceDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Deeplinks, InAppBrowser, CodePush,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FreshBooksApiProvider,
    HelperProvider,
  ]
})
export class AppModule { }
