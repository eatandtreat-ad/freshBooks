import { Injectable } from "@angular/core";
import {
  Http,
  URLSearchParams,
  Headers,
  RequestOptions,
  RequestMethod
} from "@angular/http";
import "rxjs/add/operator/map";
import { Platform } from "ionic-angular";
import { HelperProvider } from "../helper/helper";
import { InAppBrowser } from "@ionic-native/in-app-browser";
/*
  Generated class for the FreshBooksApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FreshBooksApiProvider {
  constructor(
    public http: Http,
    public platform: Platform,
    public helper: HelperProvider,
    public iab: InAppBrowser
  ) {
    if (this.platform.is("core") == true) {
      this.redirect_uri="https://eatandtreat-ad.github.io/freshBooks";
      this.authenticationUrl =
        "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=https://eatandtreat-ad.github.io/freshBooks";
    } else {
      this.authenticationUrl =
        "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=eatandtreat://freshBooks/";
    }
    console.log("Hello FreshBooksApiProvider Provider");
  }

  enableProxy=true;

  redirect_uri = "eatandtreat://freshBooks/";
  client_secret = "8fa4bc86b60768bcc77d385f058ed0c227c50b0861dfa35977c01e046781d636";
  client_id = "71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13";
  authenticationUrl = "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=eatandtreat://freshBooks/";
  getAuthorization = () => {
    return new Promise(resolve => {
      this.platform.ready().then(() => {
        if (this.platform.is("core") == true) {
          let qs_code = this.getParameterByName("code");
          if (!!qs_code) {
            this.helper.ls.set("code", qs_code).then(() => {
              this._webAuthorization(resolve);
            });
          } else {
            this._webAuthorization(resolve);
          }
        } else {
          this.helper.ls.get("code").then(code => {
            if (!code) {
              this.helper.ls.remove("auth");
              const browser = this.iab.create(this.authenticationUrl);
              browser.show();
            } else {
              this.helper.ls.get("auth").then(auth => {
                if (!auth) {
                  this._getAuthWithCode(code, resolve);
                } else {
                  this._getAuthWithAuth(auth, resolve);
                }
              });
            }
          });
        }
      });
    });
  };

  getBusiness_memberships = () => {
    return new Promise(resolve => {
      this.getAuthorization().then((auth: any) => {
        this._getBusiness_memberships(auth.access_token, resolve);
      });
    });
  };

  getInvoices = (account_id, searchString) => {
    return new Promise(resolve => {
      this.getAuthorization().then((auth: any) => {
        this._getInvoice(auth.access_token, account_id, searchString, resolve);
      });
    });
  };

  private _webAuthorization(resolve: (value?: {} | PromiseLike<{}>) => void) {
    this.helper.ls.get("code").then(code => {
      if (!code) {
        this.helper.ls.remove("auth");
        location.href = this.authenticationUrl;
      }
      else {
        this.helper.ls.get("auth").then(auth => {
          if (!auth) {
            this._getAuthWithCode(code, resolve);
          }
          else {
            this._getAuthWithAuth(auth, resolve);
          }
        });
      }
    });
  }

  private _getAuthWithCode(
    code: any,
    resolve: (value?: {} | PromiseLike<{}>) => void
  ) {
    /*
      curl -X POST 
        -H "Api-Version: alpha" 
        -H "Content-Type: application/json" 
        -d '{
        "grant_type": "authorization_code",
        "client_secret": "<insert your secret>",
        "code": "<insert your authorization code>",
        "client_id": "<insert your client id>",
        "redirect_uri": "https://localhost:3000/just_an_example"
      }' "https://api.freshbooks.com/auth/oauth/token"

      */
    let url = "/token";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/token";
    } else {
      url = "https://api.freshbooks.com/auth/oauth/token";
    }
    let headers = new Headers();
    headers.append("Api-Version", "alpha");
    headers.append("Content-Type", "application/json");
    let body = {
      grant_type: "authorization_code",
      client_secret: this.client_secret,
      code: code,
      client_id: this.client_id,
      redirect_uri: this.redirect_uri
    };
    let options = new RequestOptions({ headers: headers });
    this.http
      .post(url, body, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.helper.ls.set("auth", data);
        resolve(data);
      });
  }

  private _getAuthWithAuth(
    auth: any,
    resolve: (value?: {} | PromiseLike<{}>) => void
  ) {
    /*
      curl -X POST 
        -H "Api-Version: alpha" 
        -H "Content-Type: application/json" 
        -d '{
        "grant_type": "authorization_code",
        "client_secret": "<insert your secret>",
        "code": "<insert your authorization code>",
        "client_id": "<insert your client id>",
        "redirect_uri": "https://localhost:3000/just_an_example"
      }' "https://api.freshbooks.com/auth/oauth/token"

      */
    let url = "/token";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/token";
    } else {
      url = "https://api.freshbooks.com/auth/oauth/token";
    }
    let headers = new Headers();
    headers.append("Api-Version", "alpha");
    headers.append("Content-Type", "application/json");
    let body = {
      grant_type: "refresh_token",
      client_secret: this.client_secret,
      refresh_token: auth.refresh_token,
      client_id: this.client_id,
      redirect_uri: this.redirect_uri
    };
    let options = new RequestOptions({ headers: headers });
    this.http
      .post(url, body, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.helper.ls.set("auth", data);
        resolve(data);
      });
  }

  private _getInvoice(
    access_token: string,
    account_id: string,
    searchString: any,
    resolve: (value?: {} | PromiseLike<{}>) => void
  ) {
    /*
      curl -X GET 
      -H 'Authorization: Bearer 8763331008cf21cdf7a6ad3a36753734e599ff96d4b80544446da4033191dd00' 
      -H 'Api-Version: alpha' 
      -H 'Content-Type: application/json' 
      https://api.freshbooks.com/accounting/account/K5Vxa/invoices/invoices?search%5Bnotes%5D=Wednesday
      */
    let url = "/freshbooks";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/freshbooks";
    } else {
      url = "https://api.freshbooks.com";
    }
    url +=
      "/accounting/account/" +
      account_id +
      "/invoices/invoices?include%5B%5D=lines&search%5Bnotes%5D=" +
      searchString;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Api-Version", "alpha");
    headers.append("Authorization", "Bearer " + access_token);
    let options = new RequestOptions({ headers: headers });
    this.http
      .request(url, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        resolve(data);
      });
  }

  private _getBusiness_memberships(
    access_token: string,
    resolve: (value?: {} | PromiseLike<{}>) => void
  ) {
    /*
      curl -X GET \
      -H 'Authorization: Bearer <insert your bearer here>' \
      -H 'Api-Version: alpha' \
      -H 'Content-Type: application/json' \
      https://api.freshbooks.com/auth/api/v1/users/me
      */
    let url = "/freshbooks";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/freshbooks";
    } else {
      url = "https://api.freshbooks.com";
    }
    url += "/auth/api/v1/users/me";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Api-Version", "alpha");
    headers.append("Authorization", "Bearer " + access_token);
    let options = new RequestOptions({ headers: headers });
    this.http
      .request(url, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        resolve(data);
      });
  }
  getParameterByName = (name, url = null) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };
}
