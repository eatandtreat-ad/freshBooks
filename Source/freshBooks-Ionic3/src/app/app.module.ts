import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FreshBooksApiProvider } from '../providers/fresh-books-api/fresh-books-api';

import { HttpModule } from '@angular/http';
import { Deeplinks } from '@ionic-native/deeplinks';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HelperProvider } from '../providers/helper/helper';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
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
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Deeplinks,InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FreshBooksApiProvider,
    HelperProvider,
  ]
})
export class AppModule {}
