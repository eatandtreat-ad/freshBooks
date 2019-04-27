webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WeekOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeekOrdersPage = /** @class */ (function () {
    function WeekOrdersPage(navCtrl, navParams, alertCtrl, loadingCtrl, freshBooksApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.freshBooksApiProvider = freshBooksApiProvider;
        this.invoices = [];
        this.invoiceItems = [];
        this.business_memberships = [];
        this.extractInvoices = function () {
            _this.showLoading();
            var toDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.toDate).format("YYYY-MM-DD");
            var fromDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.fromDate).format("YYYY-MM-DD");
            _this.freshBooksApiProvider
                .getInvoices(_this.selected_business_membership, ("due_date_start=" + fromDate + "&due_date_end=" + toDate))
                .then(function (data) {
                _this.invoices = data.invoices;
                _this.extractedCount = 0;
                _this.invoiceItems = [];
                _this.extractInvoiceItems();
                _this.hideLoading();
            });
        };
        this.extractedCount = 0;
        this.extractInvoiceItems = function () {
            if (_this.extractedCount >= _this.invoices.length) {
                //DONE
                return;
            }
            var invoice = _this.invoices[_this.extractedCount];
            _this.freshBooksApiProvider
                .getInvoice(_this.selected_business_membership, invoice.invoice_id)
                .then(function (data) {
                Object.assign(invoice, data.invoice);
                // invoice.lines = data.invoice.line_items;
                _this.addItemsToDisplay(data.invoice.line_items);
                _this.extractedCount++;
                _this.extractInvoiceItems();
            });
        };
        this.getInOrder = function (items) {
            return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.orderBy(items, ["quantity"], ["desc"]);
        };
        this.addItemsToDisplay = function (items) {
            items.forEach(function (item) {
                var foundItem = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(_this.invoiceItems, function (obj) {
                    return obj.item_id === item.item_id;
                });
                if (!!foundItem)
                    foundItem.quantity += item.quantity;
                else
                    _this.invoiceItems.push(item);
            });
        };
        this.showLoading = function () {
            _this.loading && _this.hideLoading();
            _this.loading = _this.loadingCtrl.create({
                content: "Please wait..."
            });
            _this.loading.present();
        };
        this.showLoading();
        this.freshBooksApiProvider.getBusiness_memberships().then(function (data) {
            _this.hideLoading();
            _this.business_memberships = data.organizations;
            _this.selected_business_membership = _this.business_memberships[0].organization_id;
            _this.fromDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().add(1, 'days').format("YYYY-MM-DD");
            _this.toDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().add(7, 'days').format("YYYY-MM-DD");
        });
    }
    WeekOrdersPage.prototype.hideLoading = function () {
        this.loading.dismiss();
        this.loading = null;
    };
    WeekOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeekOrdersPage');
    };
    WeekOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-week-orders',template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/week-orders/week-orders.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Total items in duration\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-item>\n    <ion-label>From Date</ion-label>\n    {{myDate}}\n    <ion-datetime displayFormat="DDD DD MMMM YYYY" pickerFormat="DDD DD MMMM YYYY" [(ngModel)]="fromDate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>To Date</ion-label>\n    {{myDate}}\n    <ion-datetime displayFormat="DDD DD MMMM YYYY" pickerFormat="DDD DD MMMM YYYY" [(ngModel)]="toDate"></ion-datetime>\n  </ion-item>\n  <ion-toolbar color="light">\n    Extracted Invoices {{extractedCount}} of {{invoices.length}}\n    <ion-buttons end>\n      <button ion-button round outline item-end icon-end color="dark" (click)="extractInvoices()"\n        [disabled]="extractedCount<invoices.length">\n        {{extractedCount>=invoices.length?\'Extract\':\'Please Wait...\'}}\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-list padding>\n    <ion-item no-padding text-wrap *ngFor="let item of getInOrder(invoiceItems)">\n      <h2> {{item.name}}</h2>\n      <p>{{item.description }}</p>\n      <p>{{item.rate}} {{item.rate*item.quantity}}</p>\n      <ion-avatar item-end>\n        <h2>{{item.quantity}} </h2>\n        <p>@{{item.rate}} </p>\n      </ion-avatar>\n\n      <ion-avatar item-end>\n        <p>{{item.rate*item.quantity}} </p>\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/week-orders/week-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */]])
    ], WeekOrdersPage);
    return WeekOrdersPage;
}());

//# sourceMappingURL=week-orders.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		406,
		0
	],
	"../pages/week-orders/week-orders.module": [
		405,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(48);
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
    function HomePage(modalCtrl, alertCtrl, loadingCtrl, navCtrl, freshBooksApiProvider) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.freshBooksApiProvider = freshBooksApiProvider;
        this.business_memberships = [];
        this.dateChanged = function () {
            _this.showLoading();
            var date = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.myDate).format("YYYY-MM-DD");
            _this.freshBooksApiProvider
                .getInvoices(_this.selected_business_membership, ("due_date=" + date))
                .then(function (data) {
                _this.data = data.invoices;
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
            if (invoice.hasOwnProperty("line_items")) {
                _this.showItems(invoice);
            }
            else {
                _this.showLoading();
                _this.freshBooksApiProvider
                    .getInvoice(_this.selected_business_membership, invoice.invoice_id)
                    .then(function (data) {
                    debugger;
                    Object.assign(invoice, data.invoice);
                    // invoice.lines = data.invoice.line_items;
                    _this.hideLoading();
                    _this.showItems(invoice);
                });
            }
        };
        this.showDetail2 = function (invoice) {
            console.log(invoice);
            if (invoice.hasOwnProperty("lines")) {
                _this.showItems2(invoice);
            }
            else {
                _this.showLoading();
                _this.freshBooksApiProvider
                    .getInvoice(_this.selected_business_membership, invoice.invoice_id)
                    .then(function (data) {
                    debugger;
                    invoice.lines = data.invoice.line_items;
                    _this.hideLoading();
                    _this.showItems2(invoice);
                });
            }
        };
        this.showLoading();
        this.freshBooksApiProvider.getBusiness_memberships().then(function (data) {
            _this.hideLoading();
            _this.business_memberships = data.organizations;
            _this.selected_business_membership = _this.business_memberships[0].organization_id;
            _this.myDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format("YYYY-MM-DD");
            _this.dateChanged();
        });
    }
    HomePage.prototype.hideLoading = function () {
        this.loading.dismiss();
        this.loading = null;
    };
    HomePage.prototype.showItems = function (invoice) {
        var modalPage = this.modalCtrl.create("ModalPage", { invoice: invoice });
        modalPage.present();
    };
    HomePage.prototype.showItems2 = function (invoice) {
        var inputs = [];
        for (var i = 0; i < invoice.lines.length; i++) {
            inputs.push({
                type: "checkbox",
                label: invoice.lines[i].qty + "-" + invoice.lines[i].name,
                value: invoice.lines[i].qty + "-" + invoice.lines[i].name,
                placeholder: invoice.lines[i].name,
                checked: true
                // disabled: true
            });
        }
        var alert = this.alertCtrl.create({
            title: invoice.current_organization,
            subTitle: '<span class="' +
                invoice.payment_status +
                '">STATUS : ' +
                invoice.display_status +
                "</span>",
            message: "\n          <div class=\"my-message\">\n            \n            <strong>Address: </strong>" +
                invoice.street +
                "\n            \n          </div>\n      ",
            /*
            <strong>Description: </strong>`+invoice.description+`
            <br/>
            <hr>
            <br/>
            <strong>Totat: </strong>`+invoice.amount.amount+' '+invoice.amount.code+`
            <br/>
            <strong>Paid: </strong>`+invoice.paid.amount+' '+invoice.paid.code+`
            <br/>
            <strong>Outstanding: </strong>`+invoice.outstanding.amount+' '+invoice.outstanding.code+`
            */
            inputs: inputs,
            buttons: ["Dismiss"]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FreshBooks</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Invoices of </h3>\n  <!-- {{business_memberships.length}}{{selected_business_membership}} -->\n  <ion-item>\n    <ion-label>Business</ion-label>\n    <ion-select [(ngModel)]="selected_business_membership">\n      <ion-option *ngFor="let business_membership of business_memberships" [value]="business_membership.organization_id">{{business_membership.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <br/>\n  <!-- {{data|json}} -->\n  <ion-item>\n    <ion-label>Date</ion-label>\n    {{myDate}}\n    <ion-datetime displayFormat="DDD DD MMMM YYYY" pickerFormat="DDD DD MMMM YYYY" [(ngModel)]="myDate" (ngModelChange)="dateChanged()"></ion-datetime>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n\n      <ion-row no-padding>\n        <ion-col no-padding>\n          <div>\n            <h2> </h2>\n          </div>\n        </ion-col>\n\n        <ion-col no-padding text-right>\n          <ion-note>\n            <h2>outstanding</h2>\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n    </ion-item>\n    <ion-item *ngFor="let invoice of data" (click)="showDetail(invoice,$event)">\n\n      <ion-row no-padding>\n        <ion-col no-padding>\n          <div>\n            <h2>{{invoice.customer_name}}</h2>\n          </div>\n        </ion-col>\n\n        <ion-col no-padding text-right class="balance">\n          <ion-note>\n            <h2 [class]="invoice.status">{{invoice.status=="paid"?"PAID":invoice.balance}}</h2>\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n      <!-- <p>{{invoice.notes}}</p> -->\n      <p>Delivery Time: {{invoice.cf_time}}</p>\n    </ion-item>\n  </ion-list>\n  <li *ngIf="data?.length == 0">\n    <span class="search_no_results">\n      No invoice found\n    </span>\n  </li>\n</ion-content>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_week_orders_week_orders__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_code_push__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_helper_helper__ = __webpack_require__(81);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_week_orders_week_orders__["a" /* WeekOrdersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/week-orders/week-orders.module#WeekOrdersPageModule', name: 'WeekOrdersPage', segment: 'week-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_week_orders_week_orders__["a" /* WeekOrdersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_code_push__["a" /* CodePush */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_helper_helper__["a" /* HelperProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 161,
	"./af.js": 161,
	"./ar": 162,
	"./ar-dz": 163,
	"./ar-dz.js": 163,
	"./ar-kw": 164,
	"./ar-kw.js": 164,
	"./ar-ly": 165,
	"./ar-ly.js": 165,
	"./ar-ma": 166,
	"./ar-ma.js": 166,
	"./ar-sa": 167,
	"./ar-sa.js": 167,
	"./ar-tn": 168,
	"./ar-tn.js": 168,
	"./ar.js": 162,
	"./az": 169,
	"./az.js": 169,
	"./be": 170,
	"./be.js": 170,
	"./bg": 171,
	"./bg.js": 171,
	"./bm": 172,
	"./bm.js": 172,
	"./bn": 173,
	"./bn.js": 173,
	"./bo": 174,
	"./bo.js": 174,
	"./br": 175,
	"./br.js": 175,
	"./bs": 176,
	"./bs.js": 176,
	"./ca": 177,
	"./ca.js": 177,
	"./cs": 178,
	"./cs.js": 178,
	"./cv": 179,
	"./cv.js": 179,
	"./cy": 180,
	"./cy.js": 180,
	"./da": 181,
	"./da.js": 181,
	"./de": 182,
	"./de-at": 183,
	"./de-at.js": 183,
	"./de-ch": 184,
	"./de-ch.js": 184,
	"./de.js": 182,
	"./dv": 185,
	"./dv.js": 185,
	"./el": 186,
	"./el.js": 186,
	"./en-au": 187,
	"./en-au.js": 187,
	"./en-ca": 188,
	"./en-ca.js": 188,
	"./en-gb": 189,
	"./en-gb.js": 189,
	"./en-ie": 190,
	"./en-ie.js": 190,
	"./en-il": 191,
	"./en-il.js": 191,
	"./en-nz": 192,
	"./en-nz.js": 192,
	"./eo": 193,
	"./eo.js": 193,
	"./es": 194,
	"./es-do": 195,
	"./es-do.js": 195,
	"./es-us": 196,
	"./es-us.js": 196,
	"./es.js": 194,
	"./et": 197,
	"./et.js": 197,
	"./eu": 198,
	"./eu.js": 198,
	"./fa": 199,
	"./fa.js": 199,
	"./fi": 200,
	"./fi.js": 200,
	"./fo": 201,
	"./fo.js": 201,
	"./fr": 202,
	"./fr-ca": 203,
	"./fr-ca.js": 203,
	"./fr-ch": 204,
	"./fr-ch.js": 204,
	"./fr.js": 202,
	"./fy": 205,
	"./fy.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./gu": 209,
	"./gu.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it.js": 217,
	"./ja": 218,
	"./ja.js": 218,
	"./jv": 219,
	"./jv.js": 219,
	"./ka": 220,
	"./ka.js": 220,
	"./kk": 221,
	"./kk.js": 221,
	"./km": 222,
	"./km.js": 222,
	"./kn": 223,
	"./kn.js": 223,
	"./ko": 224,
	"./ko.js": 224,
	"./ky": 225,
	"./ky.js": 225,
	"./lb": 226,
	"./lb.js": 226,
	"./lo": 227,
	"./lo.js": 227,
	"./lt": 228,
	"./lt.js": 228,
	"./lv": 229,
	"./lv.js": 229,
	"./me": 230,
	"./me.js": 230,
	"./mi": 231,
	"./mi.js": 231,
	"./mk": 232,
	"./mk.js": 232,
	"./ml": 233,
	"./ml.js": 233,
	"./mn": 234,
	"./mn.js": 234,
	"./mr": 235,
	"./mr.js": 235,
	"./ms": 236,
	"./ms-my": 237,
	"./ms-my.js": 237,
	"./ms.js": 236,
	"./mt": 238,
	"./mt.js": 238,
	"./my": 239,
	"./my.js": 239,
	"./nb": 240,
	"./nb.js": 240,
	"./ne": 241,
	"./ne.js": 241,
	"./nl": 242,
	"./nl-be": 243,
	"./nl-be.js": 243,
	"./nl.js": 242,
	"./nn": 244,
	"./nn.js": 244,
	"./pa-in": 245,
	"./pa-in.js": 245,
	"./pl": 246,
	"./pl.js": 246,
	"./pt": 247,
	"./pt-br": 248,
	"./pt-br.js": 248,
	"./pt.js": 247,
	"./ro": 249,
	"./ro.js": 249,
	"./ru": 250,
	"./ru.js": 250,
	"./sd": 251,
	"./sd.js": 251,
	"./se": 252,
	"./se.js": 252,
	"./si": 253,
	"./si.js": 253,
	"./sk": 254,
	"./sk.js": 254,
	"./sl": 255,
	"./sl.js": 255,
	"./sq": 256,
	"./sq.js": 256,
	"./sr": 257,
	"./sr-cyrl": 258,
	"./sr-cyrl.js": 258,
	"./sr.js": 257,
	"./ss": 259,
	"./ss.js": 259,
	"./sv": 260,
	"./sv.js": 260,
	"./sw": 261,
	"./sw.js": 261,
	"./ta": 262,
	"./ta.js": 262,
	"./te": 263,
	"./te.js": 263,
	"./tet": 264,
	"./tet.js": 264,
	"./tg": 265,
	"./tg.js": 265,
	"./th": 266,
	"./th.js": 266,
	"./tl-ph": 267,
	"./tl-ph.js": 267,
	"./tlh": 268,
	"./tlh.js": 268,
	"./tr": 269,
	"./tr.js": 269,
	"./tzl": 270,
	"./tzl.js": 270,
	"./tzm": 271,
	"./tzm-latn": 272,
	"./tzm-latn.js": 272,
	"./tzm.js": 271,
	"./ug-cn": 273,
	"./ug-cn.js": 273,
	"./uk": 274,
	"./uk.js": 274,
	"./ur": 275,
	"./ur.js": 275,
	"./uz": 276,
	"./uz-latn": 277,
	"./uz-latn.js": 277,
	"./uz.js": 276,
	"./vi": 278,
	"./vi.js": 278,
	"./x-pseudo": 279,
	"./x-pseudo.js": 279,
	"./yo": 280,
	"./yo.js": 280,
	"./zh-cn": 281,
	"./zh-cn.js": 281,
	"./zh-hk": 282,
	"./zh-hk.js": 282,
	"./zh-tw": 283,
	"./zh-tw.js": 283
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
webpackContext.id = 384;

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_week_orders_week_orders__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(48);
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
            { title: "Week Orders", component: __WEBPACK_IMPORTED_MODULE_5__pages_week_orders_week_orders__["a" /* WeekOrdersPage */] }
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
                if (nomatch == "cordova_not_available") {
                    //try as web
                    // var url = new URL(window.location);
                    // var code = url.searchParams.get("code");
                    // console.log(code);
                    // this.helper.ls.set("code", code).then(() => {
                    // });
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n\n\n  </ion-content>\n  <ion-footer>\n    <ion-navbar text-center color="light" (click)="closeModal()">\n      <ion-title>\n        <ion-icon></ion-icon>\n        v # 2.3\n      </ion-title>\n    </ion-navbar>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__["a" /* HelperProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreshBooksApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_code_push__ = __webpack_require__(159);
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
    function FreshBooksApiProvider(http, platform, helper, codePush, iab) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.helper = helper;
        this.codePush = codePush;
        this.iab = iab;
        this.checkUpdate = function () {
            try {
                _this.platform.ready().then(function () {
                    _this.codePush.sync().subscribe(function (syncStatus) { return console.log(syncStatus); });
                    var downloadProgress = function (progress) { console.log("Downloaded " + progress.receivedBytes + " of " + progress.totalBytes); };
                    _this.codePush.sync({}, downloadProgress).subscribe(function (syncStatus) { return console.log(syncStatus); });
                });
            }
            catch (e) {
            }
        };
        this.enableProxy = true;
        this.redirect_uri = "eatandtreat://freshBooks/";
        this.client_secret = "96b65b3fcdfbba33674eeec236c321ae0f1cef230e";
        this.client_id = "1000.3RIXSTO5VT2E91130KXCC1VIKDACVV";
        this.zoho_scope = "ZohoInvoice.expenses.READ,ZohoInvoice.projects.READ,ZohoInvoice.creditnotes.READ,ZohoInvoice.customerpayments.READ,ZohoInvoice.estimates.READ,ZohoInvoice.settings.READ,ZohoInvoice.contacts.Create,ZohoInvoice.contacts.UPDATE,ZohoInvoice.contacts.READ,ZohoInvoice.contacts.DELETE,ZohoInvoice.invoices.READ";
        this.authenticationUrl = "";
        this.getAuthorization = function () {
            return new Promise(function (resolve) {
                _this.platform.ready().then(function () {
                    _this.helper.ls.get("auth").then(function (auth) {
                        if (!!auth) {
                            resolve(auth);
                            return;
                        }
                        else {
                        }
                        if (_this.platform.is("core") == true) {
                            _this.helper.ls.get("auth").then(function (auth) {
                                if (!!auth) {
                                    resolve(auth);
                                }
                                else {
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
                            });
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
                                        _this.helper.ls.get("refresh_token").then(function (refresh_token) {
                                            if (!auth) {
                                                _this._getAuthWithCode(code, resolve);
                                            }
                                            else {
                                                _this._getAuthWithAuth(auth, refresh_token, resolve);
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
                    _this._getInvoices(auth.access_token, account_id, searchString, resolve);
                });
            });
        };
        this.getInvoice = function (account_id, invoice_id) {
            return new Promise(function (resolve) {
                _this.getAuthorization().then(function (auth) {
                    _this._getInvoice(auth.access_token, account_id, invoice_id, resolve);
                });
                // this.helper.ls.get("auth").then((auth: any) => {
                //   this._getInvoice(auth.access_token, account_id, invoice_id, resolve);
                // });
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
            this.enableProxy = false;
            this.redirect_uri = "http://127.0.0.1:8100/";
            this.client_secret = "ca26cbcf9331671d6a33f7a3cb58b699376ab3ab72";
            this.client_id = "1000.ES1M6NYBATU881971BF1X0142A9JOM";
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
        }
        else {
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
    FreshBooksApiProvider.prototype._webAuthorization = function (resolve) {
        var _this = this;
        this.helper.ls.get("code").then(function (code) {
            if (!code) {
                _this.helper.ls.remove("auth");
                location.href = _this.authenticationUrl;
            }
            else {
                _this.helper.ls.get("auth").then(function (auth) {
                    // this.helper.ls.get("refresh_token").then(refresh_token => {
                    //   if (!auth) {
                    //     this._getAuthWithCode(code, resolve);
                    //   } else {
                    //     this._getAuthWithAuth(auth, refresh_token, resolve);
                    //   }
                    // });
                    _this._getAuthWithCode(code, resolve);
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
          }' "https://api.freshbooks.com/auth/oauth/token" //
    
          */
        var url = "/token";
        if (this.platform.is("core") == true && this.enableProxy) {
            url = "/token";
        }
        else {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append("Api-Version", "alpha");
        headers.append("Content-Type", "application/json");
        var body = {
            code: code,
            client_id: this.client_id,
            client_secret: this.client_secret,
            redirect_uri: this.redirect_uri,
            grant_type: "authorization_code"
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .post(url, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            _this.helper.ls.set("auth", data).then(function () {
                _this.helper.ls.set("refresh_token", data.refresh_token).then(function () {
                    resolve(data);
                });
            });
        });
    };
    FreshBooksApiProvider.prototype._getAuthWithAuth = function (auth, refresh_token, resolve) {
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
          }' "https://api.freshbooks.com/auth/oauth/token" //
    
          */
        var url = "/token";
        if (this.platform.is("core") == true && this.enableProxy) {
            url = "/token";
        }
        else {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Api-Version", "alpha");
        headers.append("Content-Type", "application/json");
        var body = {
            refresh_token: auth.refresh_token,
            client_id: this.client_id,
            client_secret: this.client_secret,
            redirect_uri: this.redirect_uri,
            grant_type: "refresh_token"
        };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .post(url, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            _this.helper.ls.set("auth", data).then(function () {
                resolve(data);
            });
        });
    };
    FreshBooksApiProvider.prototype._getInvoice = function (access_token, account_id, invoice_id, resolve) {
        /*
          curl -X GET
          -H 'Authorization: Bearer 8763331008cf21cdf7a6ad3a36753734e599ff96d4b80544446da4033191dd00'
          -H 'Api-Version: alpha'
          -H 'Content-Type: application/json'
          https://api.freshbooks.com/accounting/account/K5Vxa/invoices/invoices?search%5Bnotes%5D=Wednesday
          */
        var url = "/freshbooks";
        if (this.platform.is("core") == true && this.enableProxy) {
            url = "/freshbooks";
        }
        else {
            url = "https://invoice.zoho.com/api/v3";
        }
        url += "/invoices/" + invoice_id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Zoho-oauthtoken " + access_token);
        headers.append("X-com-zoho-invoice-organizationid", account_id);
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
    FreshBooksApiProvider.prototype._getInvoices = function (access_token, account_id, searchString, resolve) {
        /*
          curl -X GET
          -H 'Authorization: Bearer 8763331008cf21cdf7a6ad3a36753734e599ff96d4b80544446da4033191dd00'
          -H 'Api-Version: alpha'
          -H 'Content-Type: application/json'
          https://api.freshbooks.com/accounting/account/K5Vxa/invoices/invoices?search%5Bnotes%5D=Wednesday
          */
        var url = "/freshbooks";
        if (this.platform.is("core") == true && this.enableProxy) {
            url = "/freshbooks";
        }
        else {
            url = "https://invoice.zoho.com/api/v3";
        }
        url += "/invoices?" + searchString;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Zoho-oauthtoken " + access_token);
        headers.append("X-com-zoho-invoice-organizationid", account_id);
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
        var _this = this;
        /*
          curl -X GET \
          -H 'Authorization: Bearer <insert your bearer here>' \
          -H 'Api-Version: alpha' \
          -H 'Content-Type: application/json' \
          https://api.freshbooks.com/auth/api/v1/users/me
          */
        var url = "/freshbooks";
        if (this.platform.is("core") == true && this.enableProxy) {
            url = "/freshbooks";
        }
        else {
            url = "https://invoice.zoho.com/api/v3";
        }
        url += "/organizations";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append("Content-Type", "application/json");
        // headers.append("Api-Version", "alpha");
        headers.append("Authorization", "Zoho-oauthtoken " + access_token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .request(url, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            resolve(data);
        }, function (error) {
            //ERROR
            console.log(error);
            if (error.status == 401) {
                //Remove code and auth
                _this.resetAppVariableToLoginAgain();
            }
        });
    };
    FreshBooksApiProvider.prototype.resetAppVariableToLoginAgain = function () {
        this.helper.ls.remove("auth");
        this.helper.ls.remove("code");
        if (this.platform.is("core") == true) {
            location.href = location.origin;
        }
        else
            location.reload();
    };
    FreshBooksApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__helper_helper__["a" /* HelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_code_push__["a" /* CodePush */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FreshBooksApiProvider);
    return FreshBooksApiProvider;
}());

//# sourceMappingURL=fresh-books-api.js.map

/***/ }),

/***/ 81:
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

/***/ })

},[327]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVycy50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIF4vLi8vLiokIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xpc3QvbGlzdC50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaS50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvaGVscGVyL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNtRDtBQUNMO0FBQzVEO0FBQ0w7QUFFdkI7Ozs7O0dBS0c7QUFPSDtJQVFFLHdCQUFtQixPQUFzQixFQUNoQyxTQUFvQixFQUNuQixTQUEwQixFQUMzQixXQUE4QixFQUM5QixxQkFBNEM7UUFKckQsaUJBY0M7UUFka0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVHJELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIseUJBQW9CLEdBQVEsRUFBRSxDQUFDO1FBbUIvQixvQkFBZSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLE1BQU0sR0FBRyw4Q0FBTSxDQUFDLEtBQUks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QUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUhVLGNBQWM7UUFEMUIseUVBQVUsRUFBRTs7T0FDQSxjQUFjLENBd0IxQjtJQUFELHFCQUFDO0NBQUE7QUF4QjBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZSwgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBBbGVydENvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaSc7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXZWVrT3JkZXJzUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXdlZWstb3JkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICd3ZWVrLW9yZGVycy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgV2Vla09yZGVyc1BhZ2Uge1xuICBmcm9tRGF0ZTogYW55O1xuICB0b0RhdGU6IGFueTtcbiAgaW52b2ljZXM6IGFueSA9IFtdO1xuICBpbnZvaWNlSXRlbXM6IGFueSA9IFtdO1xuICBidXNpbmVzc19tZW1iZXJzaGlwczogYW55ID0gW107XG4gIHNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwdWJsaWMgZnJlc2hCb29rc0FwaVByb3ZpZGVyOiBGcmVzaEJvb2tzQXBpUHJvdmlkZXIpIHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXIuZ2V0QnVzaW5lc3NfbWVtYmVyc2hpcHMoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuYnVzaW5lc3NfbWVtYmVyc2hpcHMgPSBkYXRhLm9yZ2FuaXphdGlvbnM7XG4gICAgICB0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAgPSB0aGlzLmJ1c2luZXNzX21lbWJlcnNoaXBzWzBdLm9yZ2FuaXphdGlvbl9pZDtcbiAgICAgIHRoaXMuZnJvbURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy50b0RhdGUgPSBtb21lbnQoKS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gICAgfSk7XG4gIH1cblxuICBleHRyYWN0SW52b2ljZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIGxldCB0b0RhdGUgPSBtb21lbnQodGhpcy50b0RhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgbGV0IGZyb21EYXRlID0gbW9tZW50KHRoaXMuZnJvbURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgIC5nZXRJbnZvaWNlcyh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIChcImR1ZV9kYXRlX3N0YXJ0PVwiICsgZnJvbURhdGUgKyBcIiZkdWVfZGF0ZV9lbmQ9XCIgKyB0b0RhdGUpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmludm9pY2VzID0gZGF0YS5pbnZvaWNlcztcbiAgICAgICAgdGhpcy5leHRyYWN0ZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZXh0cmFjdEludm9pY2VJdGVtcygpO1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4dHJhY3RlZENvdW50ID0gMDtcbiAgZXh0cmFjdEludm9pY2VJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5leHRyYWN0ZWRDb3VudCA+PSB0aGlzLmludm9pY2VzLmxlbmd0aCkge1xuICAgICAgLy9ET05FXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpbnZvaWNlID0gdGhpcy5pbnZvaWNlc1t0aGlzLmV4dHJhY3RlZENvdW50XTtcbiAgICB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlclxuICAgICAgLmdldEludm9pY2UodGhpcy5zZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwLCBpbnZvaWNlLmludm9pY2VfaWQpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW52b2ljZSwgZGF0YS5pbnZvaWNlKTtcbiAgICAgICAgLy8gaW52b2ljZS5saW5lcyA9IGRhdGEuaW52b2ljZS5saW5lX2l0ZW1zO1xuICAgICAgICB0aGlzLmFkZEl0ZW1zVG9EaXNwbGF5KGRhdGEuaW52b2ljZS5saW5lX2l0ZW1zKTtcbiAgICAgICAgdGhpcy5leHRyYWN0ZWRDb3VudCsrO1xuICAgICAgICB0aGlzLmV4dHJhY3RJbnZvaWNlSXRlbXMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5PcmRlciA9IChpdGVtcykgPT4ge1xuICAgIHJldHVybiBfLm9yZGVyQnkoaXRlbXMsIFtcInF1YW50aXR5XCJdLCBbXCJkZXNjXCJdKTtcbiAgfVxuICBcbiAgYWRkSXRlbXNUb0Rpc3BsYXkgPSBpdGVtcyA9PiB7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGxldCBmb3VuZEl0ZW0gPSBfLmZpbmQodGhpcy5pbnZvaWNlSXRlbXMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5pdGVtX2lkID09PSBpdGVtLml0ZW1faWQ7XG4gICAgICB9KTtcbiAgICAgIGlmICghIWZvdW5kSXRlbSlcbiAgICAgICAgZm91bmRJdGVtLnF1YW50aXR5ICs9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkaW5nO1xuICBzaG93TG9hZGluZyA9ICgpID0+IHtcbiAgICB0aGlzLmxvYWRpbmcgJiYgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgIHRoaXMubG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNvbnRlbnQ6IFwiUGxlYXNlIHdhaXQuLi5cIlxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkaW5nLnByZXNlbnQoKTtcbiAgfTtcbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkaW5nLmRpc21pc3MoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBudWxsO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIFdlZWtPcmRlcnNQYWdlJyk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3dlZWstb3JkZXJzL3dlZWstb3JkZXJzLnRzIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTE0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIG1hcCA9IHtcblx0XCIuLi9wYWdlcy9tb2RhbC9tb2RhbC5tb2R1bGVcIjogW1xuXHRcdDQwNixcblx0XHQwXG5cdF0sXG5cdFwiLi4vcGFnZXMvd2Vlay1vcmRlcnMvd2Vlay1vcmRlcnMubW9kdWxlXCI6IFtcblx0XHQ0MDUsXG5cdFx0MVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKVxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkc1swXSk7XG5cdH0pO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gMTU2O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjIGxhenlcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgTmF2Q29udHJvbGxlcixcbiAgRGF0ZVRpbWUsXG4gIExvYWRpbmdDb250cm9sbGVyLFxuICBBbGVydENvbnRyb2xsZXJcbn0gZnJvbSBcImlvbmljLWFuZ3VsYXJcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSBcImlvbmljLWFuZ3VsYXJcIjtcbmltcG9ydCB7IEZyZXNoQm9va3NBcGlQcm92aWRlciB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwYWdlLWhvbWVcIixcbiAgdGVtcGxhdGVVcmw6IFwiaG9tZS5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICBkYXRhOiBhbnk7XG4gIG15RGF0ZTogYW55O1xuICBidXNpbmVzc19tZW1iZXJzaGlwczogYW55ID0gW107XG4gIHNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXA7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHVibGljIGZyZXNoQm9va3NBcGlQcm92aWRlcjogRnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICkge1xuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlci5nZXRCdXNpbmVzc19tZW1iZXJzaGlwcygpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgdGhpcy5idXNpbmVzc19tZW1iZXJzaGlwcyA9IGRhdGEub3JnYW5pemF0aW9ucztcbiAgICAgIHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCA9IHRoaXMuYnVzaW5lc3NfbWVtYmVyc2hpcHNbMF0ub3JnYW5pemF0aW9uX2lkO1xuICAgICAgdGhpcy5teURhdGUgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy5kYXRlQ2hhbmdlZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGF0ZUNoYW5nZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIGxldCBkYXRlID0gbW9tZW50KHRoaXMubXlEYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICAgICAuZ2V0SW52b2ljZXModGhpcy5zZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwLCAoXCJkdWVfZGF0ZT1cIiArIGRhdGUpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmludm9pY2VzO1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBsb2FkaW5nO1xuICBzaG93TG9hZGluZyA9ICgpID0+IHtcbiAgICB0aGlzLmxvYWRpbmcgJiYgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgIHRoaXMubG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNvbnRlbnQ6IFwiUGxlYXNlIHdhaXQuLi5cIlxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkaW5nLnByZXNlbnQoKTtcbiAgfTtcbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkaW5nLmRpc21pc3MoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBudWxsO1xuICB9XG4gIHNob3dEZXRhaWwgPSBpbnZvaWNlID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnZvaWNlKTtcbiAgICBpZiAoaW52b2ljZS5oYXNPd25Qcm9wZXJ0eShcImxpbmVfaXRlbXNcIikpIHtcbiAgICAgIHRoaXMuc2hvd0l0ZW1zKGludm9pY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgICB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlclxuICAgICAgICAuZ2V0SW52b2ljZSh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIGludm9pY2UuaW52b2ljZV9pZClcbiAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oaW52b2ljZSwgZGF0YS5pbnZvaWNlKTtcbiAgICAgICAgICAvLyBpbnZvaWNlLmxpbmVzID0gZGF0YS5pbnZvaWNlLmxpbmVfaXRlbXM7XG4gICAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIHRoaXMuc2hvd0l0ZW1zKGludm9pY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHNob3dEZXRhaWwyID0gaW52b2ljZSA9PiB7XG4gICAgY29uc29sZS5sb2coaW52b2ljZSk7XG4gICAgaWYgKGludm9pY2UuaGFzT3duUHJvcGVydHkoXCJsaW5lc1wiKSkge1xuICAgICAgdGhpcy5zaG93SXRlbXMyKGludm9pY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgICB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlclxuICAgICAgICAuZ2V0SW52b2ljZSh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIGludm9pY2UuaW52b2ljZV9pZClcbiAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIGludm9pY2UubGluZXMgPSBkYXRhLmludm9pY2UubGluZV9pdGVtcztcbiAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgdGhpcy5zaG93SXRlbXMyKGludm9pY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzaG93SXRlbXMoaW52b2ljZTogYW55KSB7XG4gICAgbGV0IG1vZGFsUGFnZSA9IHRoaXMubW9kYWxDdHJsLmNyZWF0ZShcIk1vZGFsUGFnZVwiLCB7IGludm9pY2U6IGludm9pY2UgfSk7XG4gICAgbW9kYWxQYWdlLnByZXNlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0l0ZW1zMihpbnZvaWNlOiBhbnkpIHtcbiAgICBsZXQgaW5wdXRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnZvaWNlLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbGFiZWw6IGludm9pY2UubGluZXNbaV0ucXR5ICsgXCItXCIgKyBpbnZvaWNlLmxpbmVzW2ldLm5hbWUsXG4gICAgICAgIHZhbHVlOiBpbnZvaWNlLmxpbmVzW2ldLnF0eSArIFwiLVwiICsgaW52b2ljZS5saW5lc1tpXS5uYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogaW52b2ljZS5saW5lc1tpXS5uYW1lLFxuICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICAgIC8vIGRpc2FibGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IGFsZXJ0ID0gdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIHRpdGxlOiBpbnZvaWNlLmN1cnJlbnRfb3JnYW5pemF0aW9uLFxuICAgICAgc3ViVGl0bGU6XG4gICAgICAgICc8c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICBpbnZvaWNlLnBheW1lbnRfc3RhdHVzICtcbiAgICAgICAgJ1wiPlNUQVRVUyA6ICcgK1xuICAgICAgICBpbnZvaWNlLmRpc3BsYXlfc3RhdHVzICtcbiAgICAgICAgXCI8L3NwYW4+XCIsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm15LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0cm9uZz5BZGRyZXNzOiA8L3N0cm9uZz5gICtcbiAgICAgICAgaW52b2ljZS5zdHJlZXQgK1xuICAgICAgICBgXG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgICAvKlxuICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjogPC9zdHJvbmc+YCtpbnZvaWNlLmRlc2NyaXB0aW9uK2BcbiAgICAgIDxici8+XG4gICAgICA8aHI+XG4gICAgICA8YnIvPlxuICAgICAgPHN0cm9uZz5Ub3RhdDogPC9zdHJvbmc+YCtpbnZvaWNlLmFtb3VudC5hbW91bnQrJyAnK2ludm9pY2UuYW1vdW50LmNvZGUrYFxuICAgICAgPGJyLz5cbiAgICAgIDxzdHJvbmc+UGFpZDogPC9zdHJvbmc+YCtpbnZvaWNlLnBhaWQuYW1vdW50KycgJytpbnZvaWNlLnBhaWQuY29kZStgXG4gICAgICA8YnIvPlxuICAgICAgPHN0cm9uZz5PdXRzdGFuZGluZzogPC9zdHJvbmc+YCtpbnZvaWNlLm91dHN0YW5kaW5nLmFtb3VudCsnICcraW52b2ljZS5vdXRzdGFuZGluZy5jb2RlK2BcbiAgICAgICovXG4gICAgICBpbnB1dHM6IGlucHV0cyxcbiAgICAgIGJ1dHRvbnM6IFtcIkRpc21pc3NcIl1cbiAgICB9KTtcbiAgICBhbGVydC5wcmVzZW50KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluLnRzIiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNBcHAsIElvbmljRXJyb3JIYW5kbGVyLCBJb25pY01vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBNeUFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBMaXN0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xpc3QvbGlzdCc7XG5pbXBvcnQgeyBXZWVrT3JkZXJzUGFnZSB9IGZyb20gXCIuLi9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVyc1wiO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcbmltcG9ydCB7IEZyZXNoQm9va3NBcGlQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9mcmVzaC1ib29rcy1hcGkvZnJlc2gtYm9va3MtYXBpJztcblxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgRGVlcGxpbmtzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZWVwbGlua3MnO1xuaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlcic7XG5pbXBvcnQgeyBDb2RlUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29kZS1wdXNoJztcbmltcG9ydCB7IEhlbHBlclByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2hlbHBlci9oZWxwZXInO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgV2Vla09yZGVyc1BhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXG4gICAgSHR0cE1vZHVsZSxcbiAgXSxcbiAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBNeUFwcCxcbiAgICBIb21lUGFnZSxcbiAgICBMaXN0UGFnZSxcbiAgICBXZWVrT3JkZXJzUGFnZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdGF0dXNCYXIsXG4gICAgU3BsYXNoU2NyZWVuLERlZXBsaW5rcyxJbkFwcEJyb3dzZXIsQ29kZVB1c2gsXG4gICAge3Byb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyfSxcbiAgICBGcmVzaEJvb2tzQXBpUHJvdmlkZXIsXG4gICAgSGVscGVyUHJvdmlkZXIsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogMTYxLFxuXHRcIi4vYWYuanNcIjogMTYxLFxuXHRcIi4vYXJcIjogMTYyLFxuXHRcIi4vYXItZHpcIjogMTYzLFxuXHRcIi4vYXItZHouanNcIjogMTYzLFxuXHRcIi4vYXIta3dcIjogMTY0LFxuXHRcIi4vYXIta3cuanNcIjogMTY0LFxuXHRcIi4vYXItbHlcIjogMTY1LFxuXHRcIi4vYXItbHkuanNcIjogMTY1LFxuXHRcIi4vYXItbWFcIjogMTY2LFxuXHRcIi4vYXItbWEuanNcIjogMTY2LFxuXHRcIi4vYXItc2FcIjogMTY3LFxuXHRcIi4vYXItc2EuanNcIjogMTY3LFxuXHRcIi4vYXItdG5cIjogMTY4LFxuXHRcIi4vYXItdG4uanNcIjogMTY4LFxuXHRcIi4vYXIuanNcIjogMTYyLFxuXHRcIi4vYXpcIjogMTY5LFxuXHRcIi4vYXouanNcIjogMTY5LFxuXHRcIi4vYmVcIjogMTcwLFxuXHRcIi4vYmUuanNcIjogMTcwLFxuXHRcIi4vYmdcIjogMTcxLFxuXHRcIi4vYmcuanNcIjogMTcxLFxuXHRcIi4vYm1cIjogMTcyLFxuXHRcIi4vYm0uanNcIjogMTcyLFxuXHRcIi4vYm5cIjogMTczLFxuXHRcIi4vYm4uanNcIjogMTczLFxuXHRcIi4vYm9cIjogMTc0LFxuXHRcIi4vYm8uanNcIjogMTc0LFxuXHRcIi4vYnJcIjogMTc1LFxuXHRcIi4vYnIuanNcIjogMTc1LFxuXHRcIi4vYnNcIjogMTc2LFxuXHRcIi4vYnMuanNcIjogMTc2LFxuXHRcIi4vY2FcIjogMTc3LFxuXHRcIi4vY2EuanNcIjogMTc3LFxuXHRcIi4vY3NcIjogMTc4LFxuXHRcIi4vY3MuanNcIjogMTc4LFxuXHRcIi4vY3ZcIjogMTc5LFxuXHRcIi4vY3YuanNcIjogMTc5LFxuXHRcIi4vY3lcIjogMTgwLFxuXHRcIi4vY3kuanNcIjogMTgwLFxuXHRcIi4vZGFcIjogMTgxLFxuXHRcIi4vZGEuanNcIjogMTgxLFxuXHRcIi4vZGVcIjogMTgyLFxuXHRcIi4vZGUtYXRcIjogMTgzLFxuXHRcIi4vZGUtYXQuanNcIjogMTgzLFxuXHRcIi4vZGUtY2hcIjogMTg0LFxuXHRcIi4vZGUtY2guanNcIjogMTg0LFxuXHRcIi4vZGUuanNcIjogMTgyLFxuXHRcIi4vZHZcIjogMTg1LFxuXHRcIi4vZHYuanNcIjogMTg1LFxuXHRcIi4vZWxcIjogMTg2LFxuXHRcIi4vZWwuanNcIjogMTg2LFxuXHRcIi4vZW4tYXVcIjogMTg3LFxuXHRcIi4vZW4tYXUuanNcIjogMTg3LFxuXHRcIi4vZW4tY2FcIjogMTg4LFxuXHRcIi4vZW4tY2EuanNcIjogMTg4LFxuXHRcIi4vZW4tZ2JcIjogMTg5LFxuXHRcIi4vZW4tZ2IuanNcIjogMTg5LFxuXHRcIi4vZW4taWVcIjogMTkwLFxuXHRcIi4vZW4taWUuanNcIjogMTkwLFxuXHRcIi4vZW4taWxcIjogMTkxLFxuXHRcIi4vZW4taWwuanNcIjogMTkxLFxuXHRcIi4vZW4tbnpcIjogMTkyLFxuXHRcIi4vZW4tbnouanNcIjogMTkyLFxuXHRcIi4vZW9cIjogMTkzLFxuXHRcIi4vZW8uanNcIjogMTkzLFxuXHRcIi4vZXNcIjogMTk0LFxuXHRcIi4vZXMtZG9cIjogMTk1LFxuXHRcIi4vZXMtZG8uanNcIjogMTk1LFxuXHRcIi4vZXMtdXNcIjogMTk2LFxuXHRcIi4vZXMtdXMuanNcIjogMTk2LFxuXHRcIi4vZXMuanNcIjogMTk0LFxuXHRcIi4vZXRcIjogMTk3LFxuXHRcIi4vZXQuanNcIjogMTk3LFxuXHRcIi4vZXVcIjogMTk4LFxuXHRcIi4vZXUuanNcIjogMTk4LFxuXHRcIi4vZmFcIjogMTk5LFxuXHRcIi4vZmEuanNcIjogMTk5LFxuXHRcIi4vZmlcIjogMjAwLFxuXHRcIi4vZmkuanNcIjogMjAwLFxuXHRcIi4vZm9cIjogMjAxLFxuXHRcIi4vZm8uanNcIjogMjAxLFxuXHRcIi4vZnJcIjogMjAyLFxuXHRcIi4vZnItY2FcIjogMjAzLFxuXHRcIi4vZnItY2EuanNcIjogMjAzLFxuXHRcIi4vZnItY2hcIjogMjA0LFxuXHRcIi4vZnItY2guanNcIjogMjA0LFxuXHRcIi4vZnIuanNcIjogMjAyLFxuXHRcIi4vZnlcIjogMjA1LFxuXHRcIi4vZnkuanNcIjogMjA1LFxuXHRcIi4vZ2RcIjogMjA2LFxuXHRcIi4vZ2QuanNcIjogMjA2LFxuXHRcIi4vZ2xcIjogMjA3LFxuXHRcIi4vZ2wuanNcIjogMjA3LFxuXHRcIi4vZ29tLWxhdG5cIjogMjA4LFxuXHRcIi4vZ29tLWxhdG4uanNcIjogMjA4LFxuXHRcIi4vZ3VcIjogMjA5LFxuXHRcIi4vZ3UuanNcIjogMjA5LFxuXHRcIi4vaGVcIjogMjEwLFxuXHRcIi4vaGUuanNcIjogMjEwLFxuXHRcIi4vaGlcIjogMjExLFxuXHRcIi4vaGkuanNcIjogMjExLFxuXHRcIi4vaHJcIjogMjEyLFxuXHRcIi4vaHIuanNcIjogMjEyLFxuXHRcIi4vaHVcIjogMjEzLFxuXHRcIi4vaHUuanNcIjogMjEzLFxuXHRcIi4vaHktYW1cIjogMjE0LFxuXHRcIi4vaHktYW0uanNcIjogMjE0LFxuXHRcIi4vaWRcIjogMjE1LFxuXHRcIi4vaWQuanNcIjogMjE1LFxuXHRcIi4vaXNcIjogMjE2LFxuXHRcIi4vaXMuanNcIjogMjE2LFxuXHRcIi4vaXRcIjogMjE3LFxuXHRcIi4vaXQuanNcIjogMjE3LFxuXHRcIi4vamFcIjogMjE4LFxuXHRcIi4vamEuanNcIjogMjE4LFxuXHRcIi4vanZcIjogMjE5LFxuXHRcIi4vanYuanNcIjogMjE5LFxuXHRcIi4va2FcIjogMjIwLFxuXHRcIi4va2EuanNcIjogMjIwLFxuXHRcIi4va2tcIjogMjIxLFxuXHRcIi4va2suanNcIjogMjIxLFxuXHRcIi4va21cIjogMjIyLFxuXHRcIi4va20uanNcIjogMjIyLFxuXHRcIi4va25cIjogMjIzLFxuXHRcIi4va24uanNcIjogMjIzLFxuXHRcIi4va29cIjogMjI0LFxuXHRcIi4va28uanNcIjogMjI0LFxuXHRcIi4va3lcIjogMjI1LFxuXHRcIi4va3kuanNcIjogMjI1LFxuXHRcIi4vbGJcIjogMjI2LFxuXHRcIi4vbGIuanNcIjogMjI2LFxuXHRcIi4vbG9cIjogMjI3LFxuXHRcIi4vbG8uanNcIjogMjI3LFxuXHRcIi4vbHRcIjogMjI4LFxuXHRcIi4vbHQuanNcIjogMjI4LFxuXHRcIi4vbHZcIjogMjI5LFxuXHRcIi4vbHYuanNcIjogMjI5LFxuXHRcIi4vbWVcIjogMjMwLFxuXHRcIi4vbWUuanNcIjogMjMwLFxuXHRcIi4vbWlcIjogMjMxLFxuXHRcIi4vbWkuanNcIjogMjMxLFxuXHRcIi4vbWtcIjogMjMyLFxuXHRcIi4vbWsuanNcIjogMjMyLFxuXHRcIi4vbWxcIjogMjMzLFxuXHRcIi4vbWwuanNcIjogMjMzLFxuXHRcIi4vbW5cIjogMjM0LFxuXHRcIi4vbW4uanNcIjogMjM0LFxuXHRcIi4vbXJcIjogMjM1LFxuXHRcIi4vbXIuanNcIjogMjM1LFxuXHRcIi4vbXNcIjogMjM2LFxuXHRcIi4vbXMtbXlcIjogMjM3LFxuXHRcIi4vbXMtbXkuanNcIjogMjM3LFxuXHRcIi4vbXMuanNcIjogMjM2LFxuXHRcIi4vbXRcIjogMjM4LFxuXHRcIi4vbXQuanNcIjogMjM4LFxuXHRcIi4vbXlcIjogMjM5LFxuXHRcIi4vbXkuanNcIjogMjM5LFxuXHRcIi4vbmJcIjogMjQwLFxuXHRcIi4vbmIuanNcIjogMjQwLFxuXHRcIi4vbmVcIjogMjQxLFxuXHRcIi4vbmUuanNcIjogMjQxLFxuXHRcIi4vbmxcIjogMjQyLFxuXHRcIi4vbmwtYmVcIjogMjQzLFxuXHRcIi4vbmwtYmUuanNcIjogMjQzLFxuXHRcIi4vbmwuanNcIjogMjQyLFxuXHRcIi4vbm5cIjogMjQ0LFxuXHRcIi4vbm4uanNcIjogMjQ0LFxuXHRcIi4vcGEtaW5cIjogMjQ1LFxuXHRcIi4vcGEtaW4uanNcIjogMjQ1LFxuXHRcIi4vcGxcIjogMjQ2LFxuXHRcIi4vcGwuanNcIjogMjQ2LFxuXHRcIi4vcHRcIjogMjQ3LFxuXHRcIi4vcHQtYnJcIjogMjQ4LFxuXHRcIi4vcHQtYnIuanNcIjogMjQ4LFxuXHRcIi4vcHQuanNcIjogMjQ3LFxuXHRcIi4vcm9cIjogMjQ5LFxuXHRcIi4vcm8uanNcIjogMjQ5LFxuXHRcIi4vcnVcIjogMjUwLFxuXHRcIi4vcnUuanNcIjogMjUwLFxuXHRcIi4vc2RcIjogMjUxLFxuXHRcIi4vc2QuanNcIjogMjUxLFxuXHRcIi4vc2VcIjogMjUyLFxuXHRcIi4vc2UuanNcIjogMjUyLFxuXHRcIi4vc2lcIjogMjUzLFxuXHRcIi4vc2kuanNcIjogMjUzLFxuXHRcIi4vc2tcIjogMjU0LFxuXHRcIi4vc2suanNcIjogMjU0LFxuXHRcIi4vc2xcIjogMjU1LFxuXHRcIi4vc2wuanNcIjogMjU1LFxuXHRcIi4vc3FcIjogMjU2LFxuXHRcIi4vc3EuanNcIjogMjU2LFxuXHRcIi4vc3JcIjogMjU3LFxuXHRcIi4vc3ItY3lybFwiOiAyNTgsXG5cdFwiLi9zci1jeXJsLmpzXCI6IDI1OCxcblx0XCIuL3NyLmpzXCI6IDI1Nyxcblx0XCIuL3NzXCI6IDI1OSxcblx0XCIuL3NzLmpzXCI6IDI1OSxcblx0XCIuL3N2XCI6IDI2MCxcblx0XCIuL3N2LmpzXCI6IDI2MCxcblx0XCIuL3N3XCI6IDI2MSxcblx0XCIuL3N3LmpzXCI6IDI2MSxcblx0XCIuL3RhXCI6IDI2Mixcblx0XCIuL3RhLmpzXCI6IDI2Mixcblx0XCIuL3RlXCI6IDI2Myxcblx0XCIuL3RlLmpzXCI6IDI2Myxcblx0XCIuL3RldFwiOiAyNjQsXG5cdFwiLi90ZXQuanNcIjogMjY0LFxuXHRcIi4vdGdcIjogMjY1LFxuXHRcIi4vdGcuanNcIjogMjY1LFxuXHRcIi4vdGhcIjogMjY2LFxuXHRcIi4vdGguanNcIjogMjY2LFxuXHRcIi4vdGwtcGhcIjogMjY3LFxuXHRcIi4vdGwtcGguanNcIjogMjY3LFxuXHRcIi4vdGxoXCI6IDI2OCxcblx0XCIuL3RsaC5qc1wiOiAyNjgsXG5cdFwiLi90clwiOiAyNjksXG5cdFwiLi90ci5qc1wiOiAyNjksXG5cdFwiLi90emxcIjogMjcwLFxuXHRcIi4vdHpsLmpzXCI6IDI3MCxcblx0XCIuL3R6bVwiOiAyNzEsXG5cdFwiLi90em0tbGF0blwiOiAyNzIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiAyNzIsXG5cdFwiLi90em0uanNcIjogMjcxLFxuXHRcIi4vdWctY25cIjogMjczLFxuXHRcIi4vdWctY24uanNcIjogMjczLFxuXHRcIi4vdWtcIjogMjc0LFxuXHRcIi4vdWsuanNcIjogMjc0LFxuXHRcIi4vdXJcIjogMjc1LFxuXHRcIi4vdXIuanNcIjogMjc1LFxuXHRcIi4vdXpcIjogMjc2LFxuXHRcIi4vdXotbGF0blwiOiAyNzcsXG5cdFwiLi91ei1sYXRuLmpzXCI6IDI3Nyxcblx0XCIuL3V6LmpzXCI6IDI3Nixcblx0XCIuL3ZpXCI6IDI3OCxcblx0XCIuL3ZpLmpzXCI6IDI3OCxcblx0XCIuL3gtcHNldWRvXCI6IDI3OSxcblx0XCIuL3gtcHNldWRvLmpzXCI6IDI3OSxcblx0XCIuL3lvXCI6IDI4MCxcblx0XCIuL3lvLmpzXCI6IDI4MCxcblx0XCIuL3poLWNuXCI6IDI4MSxcblx0XCIuL3poLWNuLmpzXCI6IDI4MSxcblx0XCIuL3poLWhrXCI6IDI4Mixcblx0XCIuL3poLWhrLmpzXCI6IDI4Mixcblx0XCIuL3poLXR3XCI6IDI4Myxcblx0XCIuL3poLXR3LmpzXCI6IDI4M1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDM4NDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIF5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDM4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXYsIFBsYXRmb3JtIH0gZnJvbSBcImlvbmljLWFuZ3VsYXJcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXJcIjtcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW5cIjtcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvaG9tZS9ob21lXCI7XG5pbXBvcnQgeyBMaXN0UGFnZSB9IGZyb20gXCIuLi9wYWdlcy9saXN0L2xpc3RcIjtcbmltcG9ydCB7IFdlZWtPcmRlcnNQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL3dlZWstb3JkZXJzL3dlZWstb3JkZXJzXCI7XG5pbXBvcnQgeyBEZWVwbGlua3MgfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9kZWVwbGlua3NcIjtcbmltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL2luLWFwcC1icm93c2VyXCI7XG5pbXBvcnQgeyBIZWxwZXJQcm92aWRlciB9IGZyb20gXCIuLi9wcm92aWRlcnMvaGVscGVyL2hlbHBlclwiO1xuaW1wb3J0IHsgRnJlc2hCb29rc0FwaVByb3ZpZGVyIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9mcmVzaC1ib29rcy1hcGkvZnJlc2gtYm9va3MtYXBpXCI7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogXCJhcHAuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAgQFZpZXdDaGlsZChOYXYpIG5hdjogTmF2O1xuXG4gIHJvb3RQYWdlOiBhbnkgPSBIb21lUGFnZTtcblxuICBwYWdlczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyBjb21wb25lbnQ6IGFueSB9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZnJlc2hCb29rc0FwaTogRnJlc2hCb29rc0FwaVByb3ZpZGVyLFxuICAgIHB1YmxpYyBoZWxwZXI6IEhlbHBlclByb3ZpZGVyLFxuICAgIHB1YmxpYyBpYWI6IEluQXBwQnJvd3NlcixcbiAgICBwdWJsaWMgZGVlcGxpbmtzOiBEZWVwbGlua3MsXG4gICAgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwdWJsaWMgc3RhdHVzQmFyOiBTdGF0dXNCYXIsXG4gICAgcHVibGljIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuXG4gICkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xuXG4gICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxuICAgIHRoaXMucGFnZXMgPSBbXG4gICAgICB7IHRpdGxlOiBcIkhvbWVcIiwgY29tcG9uZW50OiBIb21lUGFnZSB9LFxuICAgICAgeyB0aXRsZTogXCJXZWVrIE9yZGVyc1wiLCBjb21wb25lbnQ6IFdlZWtPcmRlcnNQYWdlIH0gICAgICBcbiAgICBdO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAvLyBPa2F5LCBzbyB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG91ciBwbHVnaW5zIGFyZSBhdmFpbGFibGUuXG4gICAgICAvLyBIZXJlIHlvdSBjYW4gZG8gYW55IGhpZ2hlciBsZXZlbCBuYXRpdmUgdGhpbmdzIHlvdSBtaWdodCBuZWVkLlxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgICB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cbiAgICAgIC8vIHRoaXMuZnJlc2hCb29rc0FwaS5nZXRBdXRob3JpemF0aW9uKCkudGhlbihkYXRhID0+IHtcbiAgICAgIC8vICAgdGhpcy5oZWxwZXIubHMuc2V0KFwiYXV0aFwiLCBkYXRhKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmRlZXBsaW5rc1xuICAgICAgICAucm91dGUoe1xuICAgICAgICAgIFwiL1wiOiBIb21lUGFnZVxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIG1hdGNoID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcImNvZGVcIiwgbWF0Y2guJGFyZ3MuY29kZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBtYXRjaGVkIHJvdXRlXCIsIG1hdGNoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5vbWF0Y2ggPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdvdCBhIGRlZXBsaW5rIHRoYXQgZGlkbid0IG1hdGNoXCIsIG5vbWF0Y2gpO1xuICAgICAgICAgICAgaWYgKG5vbWF0Y2ggPT0gXCJjb3Jkb3ZhX25vdF9hdmFpbGFibGVcIikge1xuICAgICAgICAgICAgICAvL3RyeSBhcyB3ZWJcbiAgICAgICAgICAgICAgLy8gdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgLy8gdmFyIGNvZGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvZGUpO1xuICAgICAgICAgICAgICAvLyB0aGlzLmhlbHBlci5scy5zZXQoXCJjb2RlXCIsIGNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuUGFnZShwYWdlKSB7XG4gICAgLy8gUmVzZXQgdGhlIGNvbnRlbnQgbmF2IHRvIGhhdmUganVzdCB0aGlzIHBhZ2VcbiAgICAvLyB3ZSB3b3VsZG4ndCB3YW50IHRoZSBiYWNrIGJ1dHRvbiB0byBzaG93IGluIHRoaXMgc2NlbmFyaW9cbiAgICB0aGlzLm5hdi5zZXRSb290KHBhZ2UuY29tcG9uZW50KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RQYWdlIHtcbiAgc2VsZWN0ZWRJdGVtOiBhbnk7XG4gIGljb25zOiBzdHJpbmdbXTtcbiAgaXRlbXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBub3RlOiBzdHJpbmcsIGljb246IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMpIHtcbiAgICAvLyBJZiB3ZSBuYXZpZ2F0ZWQgdG8gdGhpcyBwYWdlLCB3ZSB3aWxsIGhhdmUgYW4gaXRlbSBhdmFpbGFibGUgYXMgYSBuYXYgcGFyYW1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5hdlBhcmFtcy5nZXQoJ2l0ZW0nKTtcblxuICAgIC8vIExldCdzIHBvcHVsYXRlIHRoaXMgcGFnZSB3aXRoIHNvbWUgZmlsbGVyIGNvbnRlbnQgZm9yIGZ1bnppZXNcbiAgICB0aGlzLmljb25zID0gWydmbGFzaycsICd3aWZpJywgJ2JlZXInLCAnZm9vdGJhbGwnLCAnYmFza2V0YmFsbCcsICdwYXBlci1wbGFuZScsXG4gICAgJ2FtZXJpY2FuLWZvb3RiYWxsJywgJ2JvYXQnLCAnYmx1ZXRvb3RoJywgJ2J1aWxkJ107XG5cbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICB0aXRsZTogJ0l0ZW0gJyArIGksXG4gICAgICAgIG5vdGU6ICdUaGlzIGlzIGl0ZW0gIycgKyBpLFxuICAgICAgICBpY29uOiB0aGlzLmljb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaWNvbnMubGVuZ3RoKV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1UYXBwZWQoZXZlbnQsIGl0ZW0pIHtcbiAgICAvLyBUaGF0J3MgcmlnaHQsIHdlJ3JlIHB1c2hpbmcgdG8gb3Vyc2VsdmVzIVxuICAgIHRoaXMubmF2Q3RybC5wdXNoKExpc3RQYWdlLCB7XG4gICAgICBpdGVtOiBpdGVtXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9saXN0L2xpc3QudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEh0dHAsXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgSGVhZGVycyxcbiAgUmVxdWVzdE9wdGlvbnMsXG4gIFJlcXVlc3RNZXRob2Rcbn0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xuaW1wb3J0IHsgSGVscGVyUHJvdmlkZXIgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlclwiO1xuaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvaW4tYXBwLWJyb3dzZXJcIjtcbmltcG9ydCB7IENvZGVQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb2RlLXB1c2gnO1xuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgRnJlc2hCb29rc0FwaVByb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24gZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnNcbiAgYW5kIEFuZ3VsYXIgREkuXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZyZXNoQm9va3NBcGlQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBodHRwOiBIdHRwLFxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHVibGljIGhlbHBlcjogSGVscGVyUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSBjb2RlUHVzaDogQ29kZVB1c2gsXG4gICAgcHVibGljIGlhYjogSW5BcHBCcm93c2VyXG4gICkge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmVuYWJsZVByb3h5ID0gZmFsc2U7XG5cbiAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gXCJodHRwOi8vMTI3LjAuMC4xOjgxMDAvXCI7XG4gICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBcImNhMjZjYmNmOTMzMTY3MWQ2YTMzZjdhM2NiNThiNjk5Mzc2YWIzYWI3MlwiO1xuICAgICAgdGhpcy5jbGllbnRfaWQgPSBcIjEwMDAuRVMxTTZOWUJBVFU4ODE5NzFCRjFYMDE0MkE5Sk9NXCI7XG5cbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25VcmwgPVxuICAgICAgICBcImh0dHBzOi8vYWNjb3VudHMuem9oby5jb20vb2F1dGgvdjIvYXV0aD9cIiArXG4gICAgICAgIFwic2NvcGU9XCIgK1xuICAgICAgICB0aGlzLnpvaG9fc2NvcGUgK1xuICAgICAgICBcIiZjbGllbnRfaWQ9XCIgK1xuICAgICAgICB0aGlzLmNsaWVudF9pZCArXG4gICAgICAgIFwiJnN0YXRlPXRlc3RpbmcmcmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT1cIiArXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpICtcbiAgICAgICAgXCImYWNjZXNzX3R5cGU9b2ZmbGluZVwiO1xuICAgICAgLy8gXCJodHRwczovL215LmZyZXNoYm9va3MuY29tL3NlcnZpY2UvYXV0aC9vYXV0aC9hdXRob3JpemU/Y2xpZW50X2lkPTcxZTNhNmU3MTgwNDM3NWU4YzIwNTViMzRlMDU0NDRhNDFjODYzMTJhYzQ5ZGQ1YWFhNTE0NmQzY2M5ZGVhMTMmcmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT1odHRwczovL2VhdGFuZHRyZWF0LWFkLmdpdGh1Yi5pby9mcmVzaEJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tVcGRhdGUoKTtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25VcmwgPVxuICAgICAgICBcImh0dHBzOi8vYWNjb3VudHMuem9oby5jb20vb2F1dGgvdjIvYXV0aD9cIiArXG4gICAgICAgIFwic2NvcGU9XCIgK1xuICAgICAgICB0aGlzLnpvaG9fc2NvcGUgK1xuICAgICAgICBcIiZjbGllbnRfaWQ9XCIgK1xuICAgICAgICB0aGlzLmNsaWVudF9pZCArXG4gICAgICAgIFwiJnN0YXRlPXRlc3RpbmcmcmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT1cIiArXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpICtcbiAgICAgICAgXCImYWNjZXNzX3R5cGU9b2ZmbGluZVwiO1xuICAgICAgLy8gXCJodHRwczovL215LmZyZXNoYm9va3MuY29tL3NlcnZpY2UvYXV0aC9vYXV0aC9hdXRob3JpemU/Y2xpZW50X2lkPTcxZTNhNmU3MTgwNDM3NWU4YzIwNTViMzRlMDU0NDRhNDFjODYzMTJhYzQ5ZGQ1YWFhNTE0NmQzY2M5ZGVhMTMmcmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT1lYXRhbmR0cmVhdDovL2ZyZXNoQm9va3MvXCI7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gRnJlc2hCb29rc0FwaVByb3ZpZGVyIFByb3ZpZGVyXCIpO1xuICB9XG5cbiAgY2hlY2tVcGRhdGUgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2RlUHVzaC5zeW5jKCkuc3Vic2NyaWJlKChzeW5jU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzeW5jU3RhdHVzKSk7XG5cbiAgICAgICAgY29uc3QgZG93bmxvYWRQcm9ncmVzcyA9IChwcm9ncmVzcykgPT4geyBjb25zb2xlLmxvZyhgRG93bmxvYWRlZCAke3Byb2dyZXNzLnJlY2VpdmVkQnl0ZXN9IG9mICR7cHJvZ3Jlc3MudG90YWxCeXRlc31gKTsgfVxuICAgICAgICB0aGlzLmNvZGVQdXNoLnN5bmMoe30sIGRvd25sb2FkUHJvZ3Jlc3MpLnN1YnNjcmliZSgoc3luY1N0YXR1cykgPT4gY29uc29sZS5sb2coc3luY1N0YXR1cykpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuICB9O1xuXG4gIGVuYWJsZVByb3h5ID0gdHJ1ZTtcblxuICByZWRpcmVjdF91cmkgPSBcImVhdGFuZHRyZWF0Oi8vZnJlc2hCb29rcy9cIjtcbiAgY2xpZW50X3NlY3JldCA9IFwiOTZiNjViM2ZjZGZiYmEzMzY3NGVlZWMyMzZjMzIxYWUwZjFjZWYyMzBlXCI7XG4gIGNsaWVudF9pZCA9IFwiMTAwMC4zUklYU1RPNVZUMkU5MTEzMEtYQ0MxVklLREFDVlZcIjtcbiAgem9ob19zY29wZSA9XG4gICAgXCJab2hvSW52b2ljZS5leHBlbnNlcy5SRUFELFpvaG9JbnZvaWNlLnByb2plY3RzLlJFQUQsWm9ob0ludm9pY2UuY3JlZGl0bm90ZXMuUkVBRCxab2hvSW52b2ljZS5jdXN0b21lcnBheW1lbnRzLlJFQUQsWm9ob0ludm9pY2UuZXN0aW1hdGVzLlJFQUQsWm9ob0ludm9pY2Uuc2V0dGluZ3MuUkVBRCxab2hvSW52b2ljZS5jb250YWN0cy5DcmVhdGUsWm9ob0ludm9pY2UuY29udGFjdHMuVVBEQVRFLFpvaG9JbnZvaWNlLmNvbnRhY3RzLlJFQUQsWm9ob0ludm9pY2UuY29udGFjdHMuREVMRVRFLFpvaG9JbnZvaWNlLmludm9pY2VzLlJFQURcIjtcbiAgYXV0aGVudGljYXRpb25VcmwgPSBcIlwiO1xuXG4gIGdldEF1dGhvcml6YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhlbHBlci5scy5nZXQoXCJhdXRoXCIpLnRoZW4oYXV0aCA9PiB7XG4gICAgICAgICAgaWYgKCEhYXV0aCkge1xuICAgICAgICAgICAgcmVzb2x2ZShhdXRoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlci5scy5nZXQoXCJhdXRoXCIpLnRoZW4oYXV0aCA9PiB7XG4gICAgICAgICAgICAgIGlmICghIWF1dGgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGF1dGgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBxc19jb2RlID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJjb2RlXCIpO1xuICAgICAgICAgICAgICAgIGlmICghIXFzX2NvZGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcImNvZGVcIiwgcXNfY29kZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYkF1dGhvcml6YXRpb24ocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fd2ViQXV0aG9yaXphdGlvbihyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlci5scy5nZXQoXCJjb2RlXCIpLnRoZW4oY29kZSA9PiB7XG4gICAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLmxzLnJlbW92ZShcImF1dGhcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSh0aGlzLmF1dGhlbnRpY2F0aW9uVXJsKTtcbiAgICAgICAgICAgICAgICBicm93c2VyLnNob3coKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci5scy5nZXQoXCJhdXRoXCIpLnRoZW4oYXV0aCA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci5scy5nZXQoXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4ocmVmcmVzaF90b2tlbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXV0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEF1dGhXaXRoQ29kZShjb2RlLCByZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRBdXRoV2l0aEF1dGgoYXV0aCwgcmVmcmVzaF90b2tlbiwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0QnVzaW5lc3NfbWVtYmVyc2hpcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5nZXRBdXRob3JpemF0aW9uKCkudGhlbigoYXV0aDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX2dldEJ1c2luZXNzX21lbWJlcnNoaXBzKGF1dGguYWNjZXNzX3Rva2VuLCByZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEludm9pY2VzID0gKGFjY291bnRfaWQsIHNlYXJjaFN0cmluZykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZ2V0QXV0aG9yaXphdGlvbigpLnRoZW4oKGF1dGg6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9nZXRJbnZvaWNlcyhhdXRoLmFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgc2VhcmNoU3RyaW5nLCByZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEludm9pY2UgPSAoYWNjb3VudF9pZCwgaW52b2ljZV9pZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZ2V0QXV0aG9yaXphdGlvbigpLnRoZW4oKGF1dGg6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9nZXRJbnZvaWNlKGF1dGguYWNjZXNzX3Rva2VuLCBhY2NvdW50X2lkLCBpbnZvaWNlX2lkLCByZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKChhdXRoOiBhbnkpID0+IHtcbiAgICAgIC8vICAgdGhpcy5fZ2V0SW52b2ljZShhdXRoLmFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgaW52b2ljZV9pZCwgcmVzb2x2ZSk7XG4gICAgICAvLyB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIF93ZWJBdXRob3JpemF0aW9uKHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiY29kZVwiKS50aGVuKGNvZGUgPT4ge1xuICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgIHRoaXMuaGVscGVyLmxzLnJlbW92ZShcImF1dGhcIik7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSB0aGlzLmF1dGhlbnRpY2F0aW9uVXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgIC8vIHRoaXMuaGVscGVyLmxzLmdldChcInJlZnJlc2hfdG9rZW5cIikudGhlbihyZWZyZXNoX3Rva2VuID0+IHtcbiAgICAgICAgICAvLyAgIGlmICghYXV0aCkge1xuICAgICAgICAgIC8vICAgICB0aGlzLl9nZXRBdXRoV2l0aENvZGUoY29kZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICB0aGlzLl9nZXRBdXRoV2l0aEF1dGgoYXV0aCwgcmVmcmVzaF90b2tlbiwgcmVzb2x2ZSk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgdGhpcy5fZ2V0QXV0aFdpdGhDb2RlKGNvZGUsIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEF1dGhXaXRoQ29kZShcbiAgICBjb2RlOiBhbnksXG4gICAgcmVzb2x2ZTogKHZhbHVlPzoge30gfCBQcm9taXNlTGlrZTx7fT4pID0+IHZvaWRcbiAgKSB7XG4gICAgLypcbiAgICAgIGN1cmwgLVggUE9TVCBcbiAgICAgICAgLUggXCJBcGktVmVyc2lvbjogYWxwaGFcIiBcbiAgICAgICAgLUggXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cIiBcbiAgICAgICAgLWQgJ3tcbiAgICAgICAgXCJncmFudF90eXBlXCI6IFwiYXV0aG9yaXphdGlvbl9jb2RlXCIsXG4gICAgICAgIFwiY2xpZW50X3NlY3JldFwiOiBcIjxpbnNlcnQgeW91ciBzZWNyZXQ+XCIsXG4gICAgICAgIFwiY29kZVwiOiBcIjxpbnNlcnQgeW91ciBhdXRob3JpemF0aW9uIGNvZGU+XCIsXG4gICAgICAgIFwiY2xpZW50X2lkXCI6IFwiPGluc2VydCB5b3VyIGNsaWVudCBpZD5cIixcbiAgICAgICAgXCJyZWRpcmVjdF91cmlcIjogXCJodHRwczovL2xvY2FsaG9zdDozMDAwL2p1c3RfYW5fZXhhbXBsZVwiXG4gICAgICB9JyBcImh0dHBzOi8vYXBpLmZyZXNoYm9va3MuY29tL2F1dGgvb2F1dGgvdG9rZW5cIiAvL1xuXG4gICAgICAqL1xuICAgIGxldCB1cmwgPSBcIi90b2tlblwiO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlICYmIHRoaXMuZW5hYmxlUHJveHkpIHtcbiAgICAgIHVybCA9IFwiL3Rva2VuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9hY2NvdW50cy56b2hvLmNvbS9vYXV0aC92Mi90b2tlblwiO1xuICAgIH1cbiAgICAvL0FwcGVuZCBwYXJhbXMgaW4gcXVlcnkgc3RyaW5nIGZvIFpPSE9cbiAgICB1cmwgKz1cbiAgICAgIFwiP1wiICtcbiAgICAgIFwiY29kZT1cIiArXG4gICAgICBjb2RlICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiY2xpZW50X2lkPVwiICtcbiAgICAgIHRoaXMuY2xpZW50X2lkICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiY2xpZW50X3NlY3JldD1cIiArXG4gICAgICB0aGlzLmNsaWVudF9zZWNyZXQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJyZWRpcmVjdF91cmk9XCIgK1xuICAgICAgdGhpcy5yZWRpcmVjdF91cmkgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJncmFudF90eXBlPVwiICtcbiAgICAgIFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXBpLVZlcnNpb25cIiwgXCJhbHBoYVwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcbiAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdF91cmksXG4gICAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiXG4gICAgfTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGJvZHksIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gd2UndmUgZ290IGJhY2sgdGhlIHJhdyBkYXRhLCBub3cgZ2VuZXJhdGUgdGhlIGNvcmUgc2NoZWR1bGUgZGF0YVxuICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcImF1dGhcIiwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oZWxwZXIubHMuc2V0KFwicmVmcmVzaF90b2tlblwiLCBkYXRhLnJlZnJlc2hfdG9rZW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEF1dGhXaXRoQXV0aChcbiAgICBhdXRoOiBhbnksXG4gICAgcmVmcmVzaF90b2tlbjogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIFBPU1QgXG4gICAgICAgIC1IIFwiQXBpLVZlcnNpb246IGFscGhhXCIgXG4gICAgICAgIC1IIFwiQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXCIgXG4gICAgICAgIC1kICd7XG4gICAgICAgIFwiZ3JhbnRfdHlwZVwiOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICAgICAgICBcImNsaWVudF9zZWNyZXRcIjogXCI8aW5zZXJ0IHlvdXIgc2VjcmV0PlwiLFxuICAgICAgICBcImNvZGVcIjogXCI8aW5zZXJ0IHlvdXIgYXV0aG9yaXphdGlvbiBjb2RlPlwiLFxuICAgICAgICBcImNsaWVudF9pZFwiOiBcIjxpbnNlcnQgeW91ciBjbGllbnQgaWQ+XCIsXG4gICAgICAgIFwicmVkaXJlY3RfdXJpXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9qdXN0X2FuX2V4YW1wbGVcIlxuICAgICAgfScgXCJodHRwczovL2FwaS5mcmVzaGJvb2tzLmNvbS9hdXRoL29hdXRoL3Rva2VuXCIgLy9cblxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvdG9rZW5cIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi90b2tlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vYWNjb3VudHMuem9oby5jb20vb2F1dGgvdjIvdG9rZW5cIjtcbiAgICB9XG4gICAgdXJsICs9XG4gICAgICBcIj9cIiArXG4gICAgICBcInJlZnJlc2hfdG9rZW49XCIgK1xuICAgICAgcmVmcmVzaF90b2tlbiArXG4gICAgICBcIiZcIiArXG4gICAgICBcImNsaWVudF9pZD1cIiArXG4gICAgICB0aGlzLmNsaWVudF9pZCArXG4gICAgICBcIiZcIiArXG4gICAgICBcImNsaWVudF9zZWNyZXQ9XCIgK1xuICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwicmVkaXJlY3RfdXJpPVwiICtcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJpICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZ3JhbnRfdHlwZT1cIiArXG4gICAgICBcInJlZnJlc2hfdG9rZW5cIjtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBcGktVmVyc2lvblwiLCBcImFscGhhXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBsZXQgYm9keSA9IHtcbiAgICAgIHJlZnJlc2hfdG9rZW46IGF1dGgucmVmcmVzaF90b2tlbixcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCJcbiAgICB9O1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyB3ZSd2ZSBnb3QgYmFjayB0aGUgcmF3IGRhdGEsIG5vdyBnZW5lcmF0ZSB0aGUgY29yZSBzY2hlZHVsZSBkYXRhXG4gICAgICAgIC8vIGFuZCBzYXZlIHRoZSBkYXRhIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5oZWxwZXIubHMuc2V0KFwiYXV0aFwiLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW52b2ljZShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgaW52b2ljZV9pZDogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIEdFVCBcbiAgICAgIC1IICdBdXRob3JpemF0aW9uOiBCZWFyZXIgODc2MzMzMTAwOGNmMjFjZGY3YTZhZDNhMzY3NTM3MzRlNTk5ZmY5NmQ0YjgwNTQ0NDQ2ZGE0MDMzMTkxZGQwMCcgXG4gICAgICAtSCAnQXBpLVZlcnNpb246IGFscGhhJyBcbiAgICAgIC1IICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24nIFxuICAgICAgaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYWNjb3VudGluZy9hY2NvdW50L0s1VnhhL2ludm9pY2VzL2ludm9pY2VzP3NlYXJjaCU1Qm5vdGVzJTVEPVdlZG5lc2RheVxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvZnJlc2hib29rc1wiO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlICYmIHRoaXMuZW5hYmxlUHJveHkpIHtcbiAgICAgIHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gXCJodHRwczovL2ludm9pY2Uuem9oby5jb20vYXBpL3YzXCI7XG4gICAgfVxuICAgIHVybCArPSBcIi9pbnZvaWNlcy9cIiArIGludm9pY2VfaWQ7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJab2hvLW9hdXRodG9rZW4gXCIgKyBhY2Nlc3NfdG9rZW4pO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1jb20tem9oby1pbnZvaWNlLW9yZ2FuaXphdGlvbmlkXCIsIGFjY291bnRfaWQpO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5yZXF1ZXN0KHVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyB3ZSd2ZSBnb3QgYmFjayB0aGUgcmF3IGRhdGEsIG5vdyBnZW5lcmF0ZSB0aGUgY29yZSBzY2hlZHVsZSBkYXRhXG4gICAgICAgIC8vIGFuZCBzYXZlIHRoZSBkYXRhIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW52b2ljZXMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIHNlYXJjaFN0cmluZzogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIEdFVCBcbiAgICAgIC1IICdBdXRob3JpemF0aW9uOiBCZWFyZXIgODc2MzMzMTAwOGNmMjFjZGY3YTZhZDNhMzY3NTM3MzRlNTk5ZmY5NmQ0YjgwNTQ0NDQ2ZGE0MDMzMTkxZGQwMCcgXG4gICAgICAtSCAnQXBpLVZlcnNpb246IGFscGhhJyBcbiAgICAgIC1IICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24nIFxuICAgICAgaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYWNjb3VudGluZy9hY2NvdW50L0s1VnhhL2ludm9pY2VzL2ludm9pY2VzP3NlYXJjaCU1Qm5vdGVzJTVEPVdlZG5lc2RheVxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvZnJlc2hib29rc1wiO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlICYmIHRoaXMuZW5hYmxlUHJveHkpIHtcbiAgICAgIHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gXCJodHRwczovL2ludm9pY2Uuem9oby5jb20vYXBpL3YzXCI7XG4gICAgfVxuICAgIHVybCArPSBcIi9pbnZvaWNlcz9cIiArIHNlYXJjaFN0cmluZztcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIlpvaG8tb2F1dGh0b2tlbiBcIiArIGFjY2Vzc190b2tlbik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJYLWNvbS16b2hvLWludm9pY2Utb3JnYW5pemF0aW9uaWRcIiwgYWNjb3VudF9pZCk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnJlcXVlc3QodXJsLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgLy8gYW5kIHNhdmUgdGhlIGRhdGEgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCdXNpbmVzc19tZW1iZXJzaGlwcyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICByZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZFxuICApIHtcbiAgICAvKlxuICAgICAgY3VybCAtWCBHRVQgXFxcbiAgICAgIC1IICdBdXRob3JpemF0aW9uOiBCZWFyZXIgPGluc2VydCB5b3VyIGJlYXJlciBoZXJlPicgXFxcbiAgICAgIC1IICdBcGktVmVyc2lvbjogYWxwaGEnIFxcXG4gICAgICAtSCAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJyBcXFxuICAgICAgaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYXV0aC9hcGkvdjEvdXNlcnMvbWVcbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9pbnZvaWNlLnpvaG8uY29tL2FwaS92M1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIvb3JnYW5pemF0aW9uc1wiO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoXCJBcGktVmVyc2lvblwiLCBcImFscGhhXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIlpvaG8tb2F1dGh0b2tlbiBcIiArIGFjY2Vzc190b2tlbik7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnJlcXVlc3QodXJsLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vRVJST1JcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgIC8vUmVtb3ZlIGNvZGUgYW5kIGF1dGhcbiAgICAgICAgICAgIHRoaXMucmVzZXRBcHBWYXJpYWJsZVRvTG9naW5BZ2FpbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuICBnZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSwgdXJsID0gbnVsbCkgPT4ge1xuICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZXNldEFwcFZhcmlhYmxlVG9Mb2dpbkFnYWluKCkge1xuICAgIHRoaXMuaGVscGVyLmxzLnJlbW92ZShcImF1dGhcIik7XG4gICAgdGhpcy5oZWxwZXIubHMucmVtb3ZlKFwiY29kZVwiKTtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSkge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBIZWxwZXJQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWxwZXJQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gSGVscGVyUHJvdmlkZXIgUHJvdmlkZXJcIik7XG4gIH1cblxuICBscyA9IHtcbiAgICBzZXQ6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBrZXkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBrZXkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9oZWxwZXIvaGVscGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==