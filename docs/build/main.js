webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreshBooksApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the FreshBooksApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FreshBooksApiProvider = /** @class */ (function () {
    function FreshBooksApiProvider(http, platform, helper, iab) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.helper = helper;
        this.iab = iab;
        this.redirect_uri = "eatandtreat://freshBooks/";
        this.client_secret = "8fa4bc86b60768bcc77d385f058ed0c227c50b0861dfa35977c01e046781d636";
        this.client_id = "71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13";
        this.authenticationUrl = "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=eatandtreat://freshBooks/";
        this.getAuthorization = function () {
            return new Promise(function (resolve) {
                _this.platform.ready().then(function () {
                    if (_this.platform.is("core") == true) {
                        var qs_code = _this.getParameterByName("code");
                        if (!!qs_code) {
                            _this.helper.ls.set("code", qs_code).then(function () {
                                _this._webAuthorization(resolve);
                            });
                        }
                        else {
                            _this._webAuthorization(resolve);
                        }
                    }
                    else {
                        _this.helper.ls.get("code").then(function (code) {
                            if (!code) {
                                _this.helper.ls.remove("auth");
                                var browser = _this.iab.create(_this.authenticationUrl);
                                browser.show();
                            }
                            else {
                                _this.helper.ls.get("auth").then(function (auth) {
                                    if (!auth) {
                                        _this._getAuthWithCode(code, resolve);
                                    }
                                    else {
                                        _this._getAuthWithAuth(auth, resolve);
                                    }
                                });
                            }
                        });
                    }
                });
            });
        };
        this.getBusiness_memberships = function () {
            return new Promise(function (resolve) {
                _this.getAuthorization().then(function (auth) {
                    _this._getBusiness_memberships(auth.access_token, resolve);
                });
            });
        };
        this.getInvoices = function (account_id, searchString) {
            return new Promise(function (resolve) {
                _this.getAuthorization().then(function (auth) {
                    _this._getInvoice(auth.access_token, account_id, searchString, resolve);
                });
            });
        };
        this.getParameterByName = function (name, url) {
            if (url === void 0) { url = null; }
            if (!url)
                url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return "";
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };
        if (this.platform.is("core") == true) {
            this.redirect_uri = "https://eatandtreat-ad.github.io/freshBooks";
            this.authenticationUrl =
                "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=https://eatandtreat-ad.github.io/freshBooks";
        }
        else {
            this.authenticationUrl =
                "https://my.freshbooks.com/service/auth/oauth/authorize?client_id=71e3a6e71804375e8c2055b34e05444a41c86312ac49dd5aaa5146d3cc9dea13&response_type=code&redirect_uri=eatandtreat://freshBooks/";
        }
        console.log("Hello FreshBooksApiProvider Provider");
    }
    FreshBooksApiProvider.prototype._webAuthorization = function (resolve) {
        var _this = this;
        this.helper.ls.get("code").then(function (code) {
            if (!code) {
                _this.helper.ls.remove("auth");
                location.href = _this.authenticationUrl;
            }
            else {
                _this.helper.ls.get("auth").then(function (auth) {
                    if (!auth) {
                        _this._getAuthWithCode(code, resolve);
                    }
                    else {
                        _this._getAuthWithAuth(auth, resolve);
                    }
                });
            }
        });
    };
    FreshBooksApiProvider.prototype._getAuthWithCode = function (code, resolve) {
        var _this = this;
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
        var url = "/token";
        if (this.platform.is("core") == true) {
            url = "/token";
        }
        else {
            url = "https://api.freshbooks.com/auth/oauth/token";
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Api-Version", "alpha");
        headers.append("Content-Type", "application/json");
        var body = {
            grant_type: "authorization_code",
            client_secret: this.client_secret,
            code: code,
            client_id: this.client_id,
            redirect_uri: this.redirect_uri
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .post(url, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            _this.helper.ls.set("auth", data);
            resolve(data);
        });
    };
    FreshBooksApiProvider.prototype._getAuthWithAuth = function (auth, resolve) {
        var _this = this;
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
        var url = "/token";
        if (this.platform.is("core") == true) {
            url = "/token";
        }
        else {
            url = "https://api.freshbooks.com/auth/oauth/token";
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Api-Version", "alpha");
        headers.append("Content-Type", "application/json");
        var body = {
            grant_type: "refresh_token",
            client_secret: this.client_secret,
            refresh_token: auth.refresh_token,
            client_id: this.client_id,
            redirect_uri: this.redirect_uri
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .post(url, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            _this.helper.ls.set("auth", data);
            resolve(data);
        });
    };
    FreshBooksApiProvider.prototype._getInvoice = function (access_token, account_id, searchString, resolve) {
        /*
          curl -X GET
          -H 'Authorization: Bearer 8763331008cf21cdf7a6ad3a36753734e599ff96d4b80544446da4033191dd00'
          -H 'Api-Version: alpha'
          -H 'Content-Type: application/json'
          https://api.freshbooks.com/accounting/account/K5Vxa/invoices/invoices?search%5Bnotes%5D=Wednesday
          */
        var url = "/freshbooks";
        if (this.platform.is("core") == true) {
            url = "/freshbooks";
        }
        else {
            url = "https://api.freshbooks.com";
        }
        url +=
            "/accounting/account/" +
                account_id +
                "/invoices/invoices?search%5Bnotes%5D=" +
                searchString;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Api-Version", "alpha");
        headers.append("Authorization", "Bearer " + access_token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .request(url, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            resolve(data);
        });
    };
    FreshBooksApiProvider.prototype._getBusiness_memberships = function (access_token, resolve) {
        /*
          curl -X GET \
          -H 'Authorization: Bearer <insert your bearer here>' \
          -H 'Api-Version: alpha' \
          -H 'Content-Type: application/json' \
          https://api.freshbooks.com/auth/api/v1/users/me
          */
        var url = "/freshbooks";
        if (this.platform.is("core") == true) {
            url = "/freshbooks";
        }
        else {
            url = "https://api.freshbooks.com";
        }
        url += "/auth/api/v1/users/me";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Api-Version", "alpha");
        headers.append("Authorization", "Bearer " + access_token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .request(url, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            resolve(data);
        });
    };
    FreshBooksApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__helper_helper__["a" /* HelperProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__helper_helper__["a" /* HelperProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object])
    ], FreshBooksApiProvider);
    return FreshBooksApiProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=fresh-books-api.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelperProvider = /** @class */ (function () {
    function HelperProvider() {
        this.ls = {
            set: function (key, value) {
                return new Promise(function (resolve) {
                    window.localStorage.setItem(key, JSON.stringify(value));
                    resolve();
                });
            },
            get: function (key) {
                return new Promise(function (resolve) {
                    resolve(JSON.parse(window.localStorage.getItem(key)));
                });
            },
            remove: function (key) {
                return new Promise(function (resolve) {
                    window.localStorage.removeItem(key);
                    resolve();
                });
            }
        };
        console.log("Hello HelperProvider Provider");
    }
    HelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HelperProvider);
    return HelperProvider;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, loadingCtrl, navCtrl, freshBooksApiProvider) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.freshBooksApiProvider = freshBooksApiProvider;
        this.business_memberships = [];
        this.dateChanged = function () {
            _this.showLoading();
            var date = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.myDate).format("dddd D MMM");
            _this.freshBooksApiProvider
                .getInvoices(_this.selected_business_membership, date)
                .then(function (data) {
                _this.data = data.response.result.invoices;
                _this.hideLoading();
            });
        };
        this.showLoading = function () {
            _this.loading && _this.hideLoading();
            _this.loading = _this.loadingCtrl.create({
                content: "Please wait..."
            });
            _this.loading.present();
        };
        this.showDetail = function (invoice) {
            console.log(invoice);
            var alert = _this.alertCtrl.create({
                title: invoice.current_organization,
                subTitle: '<span class="' + invoice.payment_status + '">STATUS : ' + invoice.display_status + '</span>',
                message: "\n          <div class=\"my-message\">\n            <strong>Description: </strong>" + invoice.description + "\n            <br/>\n            <strong>Address: </strong>" + invoice.street + "\n            <hr>\n            <br/>\n            <strong>Totat: </strong>" + invoice.amount.amount + ' ' + invoice.amount.code + "\n            <br/>\n            <strong>Paid: </strong>" + invoice.paid.amount + ' ' + invoice.paid.code + "\n            <br/>\n            <strong>Outstanding: </strong>" + invoice.outstanding.amount + ' ' + invoice.outstanding.code + "\n          </div>\n      ",
                buttons: ["Dismiss"]
            });
            alert.present();
        };
        this.showLoading();
        this.freshBooksApiProvider.getBusiness_memberships().then(function (data) {
            _this.hideLoading();
            _this.business_memberships = data.response.business_memberships;
            _this.selected_business_membership = _this.business_memberships[0].business.account_id;
            _this.myDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format("YYYY-MM-DD");
            _this.dateChanged();
        });
    }
    HomePage.prototype.hideLoading = function () {
        this.loading.dismiss();
        this.loading = null;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/mullahkhan/Desktop/test/freshBooks/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <ion-title>FreshBooks</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Invoices of </h3>\n  <!-- {{business_memberships.length}}{{selected_business_membership}} -->\n  <ion-item>\n    <ion-label>Business</ion-label>\n    <ion-select [(ngModel)]="selected_business_membership">\n      <ion-option *ngFor="let business_membership of business_memberships" [value]="business_membership.business.account_id">{{business_membership.business.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <br/>\n  <!-- {{data|json}} -->\n  <ion-item>\n    <ion-label>Date</ion-label>\n    {{myDate}}\n    <ion-datetime displayFormat="DDD DD MMMM YYYY" pickerFormat="DDD DD MMMM YYYY" [(ngModel)]="myDate" (ngModelChange)="dateChanged()"></ion-datetime>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n\n      <ion-row no-padding>\n        <ion-col no-padding>\n          <div>\n            <h2> </h2>\n          </div>\n        </ion-col>\n\n        <ion-col no-padding text-right>\n          <ion-note>\n            <h2>outstanding</h2>\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n    </ion-item>\n    <ion-item *ngFor="let invoice of data" (click)="showDetail(invoice,$event)">\n\n      <ion-row no-padding>\n        <ion-col no-padding>\n          <div>\n            <h2>{{invoice.fname}} {{invoice.lname}}</h2>\n          </div>\n        </ion-col>\n\n        <ion-col no-padding text-right>\n          <ion-note>\n            <h2 [class]="invoice.payment_status">{{invoice.payment_status=="unpaid"?invoice.outstanding.amount:"PAID"}}</h2>\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n      <p>{{invoice.notes}}</p>\n    </ion-item>\n  </ion-list>\n  <li *ngIf="data?.length == 0">\n    <span class="search_no_results">\n      No invoice found\n    </span>\n  </li>\n</ion-content>'/*ion-inline-end:"/Users/mullahkhan/Desktop/test/freshBooks/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/mullahkhan/Desktop/test/freshBooks/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mullahkhan/Desktop/test/freshBooks/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_helper_helper__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_helper_helper__["a" /* HelperProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(freshBooksApi, helper, iab, deeplinks, platform, statusBar, splashScreen) {
        this.freshBooksApi = freshBooksApi;
        this.helper = helper;
        this.iab = iab;
        this.deeplinks = deeplinks;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: "List", component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.freshBooksApi.getAuthorization().then(data => {
            //   this.helper.ls.set("auth", data);
            // });
            _this.deeplinks
                .route({
                "/": __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            })
                .subscribe(function (match) {
                _this.helper.ls.set("code", match.$args.code).then(function () {
                    debugger;
                    location.reload();
                });
                console.log("Successfully matched route", match);
            }, function (nomatch) {
                console.error("Got a deeplink that didn't match", nomatch);
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mullahkhan/Desktop/test/freshBooks/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mullahkhan/Desktop/test/freshBooks/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__["a" /* HelperProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn.js": 212,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-au": 226,
	"./en-au.js": 226,
	"./en-ca": 227,
	"./en-ca.js": 227,
	"./en-gb": 228,
	"./en-gb.js": 228,
	"./en-ie": 229,
	"./en-ie.js": 229,
	"./en-il": 230,
	"./en-il.js": 230,
	"./en-nz": 231,
	"./en-nz.js": 231,
	"./eo": 232,
	"./eo.js": 232,
	"./es": 233,
	"./es-do": 234,
	"./es-do.js": 234,
	"./es-us": 235,
	"./es-us.js": 235,
	"./es.js": 233,
	"./et": 236,
	"./et.js": 236,
	"./eu": 237,
	"./eu.js": 237,
	"./fa": 238,
	"./fa.js": 238,
	"./fi": 239,
	"./fi.js": 239,
	"./fo": 240,
	"./fo.js": 240,
	"./fr": 241,
	"./fr-ca": 242,
	"./fr-ca.js": 242,
	"./fr-ch": 243,
	"./fr-ch.js": 243,
	"./fr.js": 241,
	"./fy": 244,
	"./fy.js": 244,
	"./gd": 245,
	"./gd.js": 245,
	"./gl": 246,
	"./gl.js": 246,
	"./gom-latn": 247,
	"./gom-latn.js": 247,
	"./gu": 248,
	"./gu.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it.js": 256,
	"./ja": 257,
	"./ja.js": 257,
	"./jv": 258,
	"./jv.js": 258,
	"./ka": 259,
	"./ka.js": 259,
	"./kk": 260,
	"./kk.js": 260,
	"./km": 261,
	"./km.js": 261,
	"./kn": 262,
	"./kn.js": 262,
	"./ko": 263,
	"./ko.js": 263,
	"./ky": 264,
	"./ky.js": 264,
	"./lb": 265,
	"./lb.js": 265,
	"./lo": 266,
	"./lo.js": 266,
	"./lt": 267,
	"./lt.js": 267,
	"./lv": 268,
	"./lv.js": 268,
	"./me": 269,
	"./me.js": 269,
	"./mi": 270,
	"./mi.js": 270,
	"./mk": 271,
	"./mk.js": 271,
	"./ml": 272,
	"./ml.js": 272,
	"./mn": 273,
	"./mn.js": 273,
	"./mr": 274,
	"./mr.js": 274,
	"./ms": 275,
	"./ms-my": 276,
	"./ms-my.js": 276,
	"./ms.js": 275,
	"./mt": 277,
	"./mt.js": 277,
	"./my": 278,
	"./my.js": 278,
	"./nb": 279,
	"./nb.js": 279,
	"./ne": 280,
	"./ne.js": 280,
	"./nl": 281,
	"./nl-be": 282,
	"./nl-be.js": 282,
	"./nl.js": 281,
	"./nn": 283,
	"./nn.js": 283,
	"./pa-in": 284,
	"./pa-in.js": 284,
	"./pl": 285,
	"./pl.js": 285,
	"./pt": 286,
	"./pt-br": 287,
	"./pt-br.js": 287,
	"./pt.js": 286,
	"./ro": 288,
	"./ro.js": 288,
	"./ru": 289,
	"./ru.js": 289,
	"./sd": 290,
	"./sd.js": 290,
	"./se": 291,
	"./se.js": 291,
	"./si": 292,
	"./si.js": 292,
	"./sk": 293,
	"./sk.js": 293,
	"./sl": 294,
	"./sl.js": 294,
	"./sq": 295,
	"./sq.js": 295,
	"./sr": 296,
	"./sr-cyrl": 297,
	"./sr-cyrl.js": 297,
	"./sr.js": 296,
	"./ss": 298,
	"./ss.js": 298,
	"./sv": 299,
	"./sv.js": 299,
	"./sw": 300,
	"./sw.js": 300,
	"./ta": 301,
	"./ta.js": 301,
	"./te": 302,
	"./te.js": 302,
	"./tet": 303,
	"./tet.js": 303,
	"./tg": 304,
	"./tg.js": 304,
	"./th": 305,
	"./th.js": 305,
	"./tl-ph": 306,
	"./tl-ph.js": 306,
	"./tlh": 307,
	"./tlh.js": 307,
	"./tr": 308,
	"./tr.js": 308,
	"./tzl": 309,
	"./tzl.js": 309,
	"./tzm": 310,
	"./tzm-latn": 311,
	"./tzm-latn.js": 311,
	"./tzm.js": 310,
	"./ug-cn": 312,
	"./ug-cn.js": 312,
	"./uk": 313,
	"./uk.js": 313,
	"./ur": 314,
	"./ur.js": 314,
	"./uz": 315,
	"./uz-latn": 316,
	"./uz-latn.js": 316,
	"./uz.js": 315,
	"./vi": 317,
	"./vi.js": 317,
	"./x-pseudo": 318,
	"./x-pseudo.js": 318,
	"./yo": 319,
	"./yo.js": 319,
	"./zh-cn": 320,
	"./zh-cn.js": 320,
	"./zh-hk": 321,
	"./zh-hk.js": 321,
	"./zh-tw": 322,
	"./zh-tw.js": 322
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 401;

/***/ })

},[325]);
//# sourceMappingURL=main.js.map