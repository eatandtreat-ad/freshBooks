import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { Deeplinks } from "@ionic-native/deeplinks";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { HelperProvider } from "../providers/helper/helper";
import { FreshBooksApiProvider } from "../providers/fresh-books-api/fresh-books-api";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public freshBooksApi: FreshBooksApiProvider,
    public helper: HelperProvider,
    public iab: InAppBrowser,
    public deeplinks: Deeplinks,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "List", component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.freshBooksApi.getAuthorization().then(data => {
      //   this.helper.ls.set("auth", data);
      // });

      this.deeplinks
        .route({
          "/": HomePage
        })
        .subscribe(
          match => {
            this.helper.ls.set("code", match.$args.code).then(() => {
              debugger;
              location.reload();
            });

            console.log("Successfully matched route", match);
          },
          nomatch => {
            console.error("Got a deeplink that didn't match", nomatch);
            if (nomatch == "cordova_not_available") {
              //try as web
              // var url = new URL(window.location);
              // var code = url.searchParams.get("code");
              // console.log(code);
              // this.helper.ls.set("code", code).then(() => {
                
              // });
            }
          }
        );
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
