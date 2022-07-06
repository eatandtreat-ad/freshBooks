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
import { CodePush } from '@ionic-native/code-push';
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
    private codePush: CodePush,
    public iab: InAppBrowser
  ) {
    if (this.platform.is("core") == true) {
      this.enableProxy = false;
      this.redirect_uri = "http://127.0.0.1:8100/";
      this.client_secret = "ca26cbcf9331671d6a33f7a3cb58b699376ab3ab72";
      this.client_id = "1000.ES1M6NYBATU881971BF1X0142A9JOM";

      try {
        const parsedUrl = new URL(window.location.href);
        const baseUrl = parsedUrl.origin;
        if(baseUrl.includes("github")){
          this.redirect_uri = "https://eatandtreat-ad.github.io/freshBooks/";
          this.client_secret = "bd983560d6e62b177627de0ceab61d9de264975385";
          this.client_id = "1000.RPMVIDKO99TL3UVG5DDJFUQM360SXH";
        }

      } catch (error) {

      }
      this.authenticationUrl =
        "https://accounts.zoho.com/oauth/v2/auth?" +
        "scope=" +
        this.zoho_scope +
        "&client_id=" +
        this.client_id +
        "&state=testing&response_type=code&redirect_uri=" +
        this.redirect_uri +
        "&access_type=offline";
      // "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=https://eatandtreat-ad.github.io/freshBooks";
    } else {
      this.checkUpdate();
      this.authenticationUrl =
        "https://accounts.zoho.com/oauth/v2/auth?" +
        "scope=" +
        this.zoho_scope +
        "&client_id=" +
        this.client_id +
        "&state=testing&response_type=code&redirect_uri=" +
        this.redirect_uri +
        "&access_type=offline";
      // "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=eatandtreat://freshBooks/";
    }
    console.log("Hello FreshBooksApiProvider Provider");
  }

  checkUpdate = () => {
    try {
      this.platform.ready().then(() => {
        this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

        const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
        this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
      });
    } catch (e) {

    }
  };

  enableProxy = true;

  redirect_uri = "eatandtreat://freshBooks/";
  client_secret = "96b65b3fcdfbba33674eeec236c321ae0f1cef230e";
  client_id = "1000.3RIXSTO5VT2E91130KXCC1VIKDACVV";
  zoho_scope =
    "ZohoInvoice.expenses.READ,ZohoInvoice.projects.READ,ZohoInvoice.creditnotes.READ,ZohoInvoice.customerpayments.READ,ZohoInvoice.estimates.READ,ZohoInvoice.settings.READ,ZohoInvoice.contacts.Create,ZohoInvoice.contacts.UPDATE,ZohoInvoice.contacts.READ,ZohoInvoice.contacts.DELETE,ZohoInvoice.invoices.READ";
  authenticationUrl = "";

  getAuthorization = () => {
    return new Promise(resolve => {
      this.platform.ready().then(() => {
        this.helper.ls.get("auth").then(auth => {
          if (!!auth) {
            resolve(auth);
            return;
          } else {

          }
          if (this.platform.is("core") == true) {
            this.helper.ls.get("auth").then(auth => {
              if (!!auth) {
                resolve(auth);
              } else {
                let qs_code = this.getParameterByName("code");
                if (!!qs_code) {
                  this.helper.ls.set("code", qs_code).then(() => {
                    this._webAuthorization(resolve);
                  });
                } else {
                  this._webAuthorization(resolve);
                }
              }
            });
          } else {
            this.helper.ls.get("code").then(code => {
              if (!code) {
                this.helper.ls.remove("auth");
                const browser = this.iab.create(this.authenticationUrl);
                browser.show();
              } else {
                this.helper.ls.get("auth").then(auth => {
                  this.helper.ls.get("refresh_token").then(refresh_token => {
                    if (!auth) {
                      this._getAuthWithCode(code, resolve);
                    } else {
                      this._getAuthWithAuth(auth, refresh_token, resolve);
                    }
                  });
                });
              }
            });
          }
        });
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
        this._getInvoices(auth.access_token, account_id, searchString, resolve);
      });
    });
  };

  getInvoice = (account_id, invoice_id) => {
    return new Promise(resolve => {
      this.getAuthorization().then((auth: any) => {
        this._getInvoice(auth.access_token, account_id, invoice_id, resolve);
      });
      // this.helper.ls.get("auth").then((auth: any) => {
      //   this._getInvoice(auth.access_token, account_id, invoice_id, resolve);
      // });
    });
  };

  sendEmail = (account_id, mailBody) => {
    return new Promise(resolve => {
      this.getAuthorization().then((auth: any) => {
        this._SendEmail(auth.access_token, account_id, mailBody, resolve);
      });
      // this.helper.ls.get("auth").then((auth: any) => {
      //   this._getInvoice(auth.access_token, account_id, invoice_id, resolve);
      // });
    });
  };


  getItemDetail = (account_id, item_id) => {
    return new Promise(resolve => {
      this.getAuthorization().then((auth: any) => {
        this._getItem(auth.access_token, account_id, item_id, resolve);
      });
      // this.helper.ls.get("auth").then((auth: any) => {
      //   this._getInvoice(auth.access_token, account_id, invoice_id, resolve);
      // });
    });
  };


  private _webAuthorization(resolve: (value?: {} | PromiseLike<{}>) => void) {
    this.helper.ls.get("code").then(code => {
      if (!code) {
        this.helper.ls.remove("auth");
        location.href = this.authenticationUrl;
      } else {
        this.helper.ls.get("auth").then(auth => {
          // this.helper.ls.get("refresh_token").then(refresh_token => {
          //   if (!auth) {
          //     this._getAuthWithCode(code, resolve);
          //   } else {
          //     this._getAuthWithAuth(auth, refresh_token, resolve);
          //   }
          // });
          this._getAuthWithCode(code, resolve);
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
      }' "https://api.freshbooks.com/auth/oauth/token" //

      */
    let url = "/token";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/token";
    } else {
      url = "https://accounts.zoho.com/oauth/v2/token";
    }
    //Append params in query string fo ZOHO
    url +=
      "?" +
      "code=" +
      code +
      "&" +
      "client_id=" +
      this.client_id +
      "&" +
      "client_secret=" +
      this.client_secret +
      "&" +
      "redirect_uri=" +
      this.redirect_uri +
      "&" +
      "grant_type=" +
      "authorization_code";
    let headers = new Headers();
    // headers.append("Api-Version", "alpha");
    headers.append("Content-Type", "application/json");
    let body = {
      code: code,
      client_id: this.client_id,
      client_secret: this.client_secret,
      redirect_uri: this.redirect_uri,
      grant_type: "authorization_code"
    };
    let options = new RequestOptions({ headers: headers });
    this.http
      .post(url, body, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.helper.ls.set("auth", data).then(() => {
          this.helper.ls.set("refresh_token", data.refresh_token).then(() => {
            resolve(data);
          });
        });
      });
  }

  private _getAuthWithAuth(
    auth: any,
    refresh_token: any,
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
      }' "https://api.freshbooks.com/auth/oauth/token" //

      */
    let url = "/token";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/token";
    } else {
      url = "https://accounts.zoho.com/oauth/v2/token";
    }
    url +=
      "?" +
      "refresh_token=" +
      refresh_token +
      "&" +
      "client_id=" +
      this.client_id +
      "&" +
      "client_secret=" +
      this.client_secret +
      "&" +
      "redirect_uri=" +
      this.redirect_uri +
      "&" +
      "grant_type=" +
      "refresh_token";
    let headers = new Headers();
    headers.append("Api-Version", "alpha");
    headers.append("Content-Type", "application/json");
    let body = {
      refresh_token: auth.refresh_token,
      client_id: this.client_id,
      client_secret: this.client_secret,
      redirect_uri: this.redirect_uri,
      grant_type: "refresh_token"
    };
    let options = new RequestOptions({ headers: headers });
    this.http
      .post(url, body, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.helper.ls.set("auth", data).then(() => {
          resolve(data);
        });
      });
  }

  private _getInvoice(
    access_token: string,
    account_id: string,
    invoice_id: any,
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
      url = "https://invoice.zoho.com/api/v3";
    }
    url += "/invoices/" + invoice_id;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Zoho-oauthtoken " + access_token);
    headers.append("X-com-zoho-invoice-organizationid", account_id);
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

  private _SendEmail(
    access_token: string,
    account_id: string,
    mailBody: {},
    resolve: (value?: {} | PromiseLike<{}>) => void
  ) {
    /*
      
  // $ curl https://invoice.zoho.com/api/v3/contacts/{contact_id}/statements/email
  // -X POST
  // -H "X-com-zoho-invoice-organizationid: 10234695"
  // -H "Content-Type: application/json;charset=UTF-8"
  // -H "Authorization: Zoho-oauthtoken 1000.41d9f2cfbd1b7a8f9e314b7aff7bc2d1.8fcc9810810a216793f385b9dd6e125f"
  // -d '{"field":"value","field":"value"}'
      */
    let url = "/freshbooks";
    if (this.platform.is("core") == true && this.enableProxy) {
      url = "/freshbooks";
    } else {
      url = "https://invoice.zoho.com/api/v3";
    }
    url += "/contacts/1764297000000083999/statements/email";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Zoho-oauthtoken " + access_token);
    headers.append("X-com-zoho-invoice-organizationid", account_id);
    let body = mailBody;
    let options = new RequestOptions({ headers: headers });
    this.http
      .post(url, body, options)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        resolve(data);
      });
  }


  private _getItem(
    access_token: string,
    account_id: string,
    item_id: any,
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
      url = "https://invoice.zoho.com/api/v3";
    }
    url += "/items/" + item_id;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Zoho-oauthtoken " + access_token);
    headers.append("X-com-zoho-invoice-organizationid", account_id);
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


  private _getInvoices(
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
      url = "https://invoice.zoho.com/api/v3";
    }
    url += "/invoices?" + searchString;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Zoho-oauthtoken " + access_token);
    headers.append("X-com-zoho-invoice-organizationid", account_id);
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
      url = "https://invoice.zoho.com/api/v3";
    }
    url += "/organizations";
    let headers = new Headers();
    // headers.append("Content-Type", "application/json");
    // headers.append("Api-Version", "alpha");
    headers.append("Authorization", "Zoho-oauthtoken " + access_token);
    let options = new RequestOptions({ headers: headers });
    this.http
      .request(url, options)
      .map(res => res.json())
      .subscribe(
        data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          resolve(data);
        },
        error => {
          //ERROR
          console.log(error);
          if (error.status == 401) {
            //Remove code and auth
            this.resetAppVariableToLoginAgain();
          }
        }
      );
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

  private resetAppVariableToLoginAgain() {
    this.helper.ls.remove("auth");
    this.helper.ls.remove("code");
    if (this.platform.is("core") == true) {
      location.href = location.origin;
    }
    else
      location.reload();
  }
}
