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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
                _this.materialData = [];
                _this.extractInvoiceItems();
                _this.hideLoading();
            });
        };
        // extractItemsContents = (item_id) => {
        //   // let item_id = "1764297000000669001";
        //   this.freshBooksApiProvider
        //     .getItemDetail(this.selected_business_membership, item_id)
        //     .then((data: any) => {
        //       // this.showItems(data);
        //     });
        // }
        this.extractedCount = 0;
        this.extractInvoiceItems = function () {
            if (_this.extractedCount >= _this.invoices.length) {
                //DONE
                _this.calculatePCs();
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
        this.getReportOnConsole = function () {
            var retVal = [];
            for (var i in _this.invoices) {
                var ret = {};
                var invoice = _this.invoices[i];
                ret.notes = _this.invoices[i].notes;
                ret.line_items = _this.invoices[i].line_items.map(function (item) { return { name: item.name, description: item.description }; });
                ret.total = _this.invoices[i].total;
                ret.balance = _this.invoices[i].balance;
                ret.name = _this.invoices[i].contact_persons_details[0].first_name + " " + _this.invoices[i].contact_persons_details[0].last_name;
                ret.phone = _this.invoices[i].contact_persons_details.phone;
                ret.billing_address = _this.invoices[i].billing_address.address;
                retVal.push(ret);
            }
            console.log(retVal);
            // copy(retVal);
        };
        this.getInOrder = function (items) {
            return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.orderBy(items, ["quantity"], ["desc"]);
        };
        this.addItemsToDisplay = function (items) {
            // return new Promise(resolve => {
            items.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                var foundItem;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            foundItem = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(this.invoiceItems, function (obj) {
                                return obj.item_id === item.item_id;
                            });
                            if (!!!foundItem) return [3 /*break*/, 1];
                            foundItem.quantity += item.quantity;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.freshBooksApiProvider
                                .getItemDetail(this.selected_business_membership, item.item_id)
                                .then(function (data) {
                                item.detail = data.item;
                                // this.showItems(data);
                            })];
                        case 2:
                            _a.sent();
                            this.invoiceItems.push(item);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // });
        };
        this.materialData = [];
        this.calculatePCs = function () {
            debugger;
            _this.materialData = [];
            _this.invoiceItems.forEach(function (item) {
                item.detail.custom_fields.forEach(function (custom_field) {
                    var foundMaterialItem = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(_this.materialData, function (obj) {
                        return obj.customfield_id === custom_field.customfield_id;
                    });
                    if (!foundMaterialItem) {
                        custom_field.quantity = 0;
                        foundMaterialItem = custom_field;
                        _this.materialData.push(foundMaterialItem);
                    }
                    foundMaterialItem.quantity = foundMaterialItem.quantity + (custom_field.value * item.quantity);
                });
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
            selector: 'page-week-orders',template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/week-orders/week-orders.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Total items in duration\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-item>\n    <ion-label>From Date</ion-label>\n    {{myDate}}\n    <ion-datetime displayFormat="DDD DD MMMM YYYY" pickerFormat="DDD DD MMMM YYYY" [(ngModel)]="fromDate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>To Date</ion-label>\n    {{myDate}}\n    <ion-datetime displayFormat="DDD DD MMMM YYYY" pickerFormat="DDD DD MMMM YYYY" [(ngModel)]="toDate"></ion-datetime>\n  </ion-item>\n  <ion-toolbar color="light">\n    Extracted Invoices {{extractedCount}} of {{invoices.length}}\n    <ion-buttons end>\n      <button ion-button round outline item-end icon-end color="dark" (click)="extractInvoices()"\n        [disabled]="extractedCount<invoices.length">\n        {{extractedCount>=invoices.length?\'Extract\':\'Please Wait...\'}}\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  Material Summary\n  <ion-list padding>\n    <ion-item no-padding text-wrap *ngFor="let item of materialData">\n      <h2> {{item.label}}</h2>\n      <ion-avatar item-end>\n        <h2>{{item.quantity}} </h2>\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n  All Items in Invoice\n  <ion-list padding>\n    <ion-item no-padding text-wrap *ngFor="let item of getInOrder(invoiceItems)">\n      <h2> {{item.name}}</h2>\n      <p>{{item.description }}</p>\n      <p>{{item.rate}} {{item.rate*item.quantity}}</p>\n      <ion-avatar item-end>\n        <h2>{{item.quantity}} </h2>\n        <p>@{{item.rate}} </p>\n      </ion-avatar>\n\n      <ion-avatar item-end>\n        <p>{{item.rate*item.quantity}} </p>\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/week-orders/week-orders.html"*/,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n\n\n  </ion-content>\n  <ion-footer>\n    <ion-navbar text-center color="light" (click)="closeModal()">\n      <ion-title>\n        <ion-icon></ion-icon>\n        v # 2.4\n      </ion-title>\n    </ion-navbar>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/app/app.html"*/
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
        this.getItemDetail = function (account_id, item_id) {
            return new Promise(function (resolve) {
                _this.getAuthorization().then(function (auth) {
                    _this._getItem(auth.access_token, account_id, item_id, resolve);
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
    FreshBooksApiProvider.prototype._getItem = function (access_token, account_id, item_id, resolve) {
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
        url += "/items/" + item_id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVycy50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIF4vLi8vLiokIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xpc3QvbGlzdC50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaS50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvaGVscGVyL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ21EO0FBQ0w7QUFDNUQ7QUFDTDtBQUV2Qjs7Ozs7R0FLRztBQU9IO0lBUUUsd0JBQW1CLE9BQXNCLEVBQ2hDLFNBQW9CLEVBQ25CLFNBQTBCLEVBQzNCLFdBQThCLEVBQzlCLHFCQUE0QztRQUpyRCxpQkFjQztRQWRrQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFUckQsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2Qix5QkFBb0IsR0FBUSxFQUFFLENBQUM7UUFtQi9CLG9CQUFlLEdBQUc7WUFDaEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7QUNwQlM7QUFFM0M7Ozs7O0VBS0U7QUFFRjtJQUNFO1FBSUEsT0FBRSxHQUFHO1lBQ0gsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ2QsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFPO29CQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxHQUFHLEVBQUUsYUFBRztnQkFDTixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQU87b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxFQUFFLGFBQUc7Z0JBQ1QsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFPO29CQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQztRQXJCQSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUhVLGNBQWM7UUFEMUIseUVBQVUsRUFBRTs7T0FDQSxjQUFjLENBd0IxQjtJQUFELHFCQUFDO0NBQUE7QUF4QjBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZSwgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBBbGVydENvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaSc7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXZWVrT3JkZXJzUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXdlZWstb3JkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICd3ZWVrLW9yZGVycy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgV2Vla09yZGVyc1BhZ2Uge1xuICBmcm9tRGF0ZTogYW55O1xuICB0b0RhdGU6IGFueTtcbiAgaW52b2ljZXM6IGFueSA9IFtdO1xuICBpbnZvaWNlSXRlbXM6IGFueSA9IFtdO1xuICBidXNpbmVzc19tZW1iZXJzaGlwczogYW55ID0gW107XG4gIHNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwdWJsaWMgZnJlc2hCb29rc0FwaVByb3ZpZGVyOiBGcmVzaEJvb2tzQXBpUHJvdmlkZXIpIHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXIuZ2V0QnVzaW5lc3NfbWVtYmVyc2hpcHMoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuYnVzaW5lc3NfbWVtYmVyc2hpcHMgPSBkYXRhLm9yZ2FuaXphdGlvbnM7XG4gICAgICB0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAgPSB0aGlzLmJ1c2luZXNzX21lbWJlcnNoaXBzWzBdLm9yZ2FuaXphdGlvbl9pZDtcbiAgICAgIHRoaXMuZnJvbURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy50b0RhdGUgPSBtb21lbnQoKS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gICAgfSk7XG4gIH1cblxuICBleHRyYWN0SW52b2ljZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIGxldCB0b0RhdGUgPSBtb21lbnQodGhpcy50b0RhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgbGV0IGZyb21EYXRlID0gbW9tZW50KHRoaXMuZnJvbURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgIC5nZXRJbnZvaWNlcyh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIChcImR1ZV9kYXRlX3N0YXJ0PVwiICsgZnJvbURhdGUgKyBcIiZkdWVfZGF0ZV9lbmQ9XCIgKyB0b0RhdGUpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmludm9pY2VzID0gZGF0YS5pbnZvaWNlcztcbiAgICAgICAgdGhpcy5leHRyYWN0ZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMubWF0ZXJpYWxEYXRhID0gW107XG4gICAgICAgIHRoaXMuZXh0cmFjdEludm9pY2VJdGVtcygpO1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLy8gZXh0cmFjdEl0ZW1zQ29udGVudHMgPSAoaXRlbV9pZCkgPT4ge1xuICAvLyAgIC8vIGxldCBpdGVtX2lkID0gXCIxNzY0Mjk3MDAwMDAwNjY5MDAxXCI7XG4gIC8vICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgLy8gICAgIC5nZXRJdGVtRGV0YWlsKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaXRlbV9pZClcbiAgLy8gICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcblxuICAvLyAgICAgICAvLyB0aGlzLnNob3dJdGVtcyhkYXRhKTtcbiAgLy8gICAgIH0pO1xuICAvLyB9XG5cbiAgZXh0cmFjdGVkQ291bnQgPSAwO1xuICBleHRyYWN0SW52b2ljZUl0ZW1zID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmV4dHJhY3RlZENvdW50ID49IHRoaXMuaW52b2ljZXMubGVuZ3RoKSB7XG4gICAgICAvL0RPTkVcbiAgICAgIHRoaXMuY2FsY3VsYXRlUENzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGludm9pY2UgPSB0aGlzLmludm9pY2VzW3RoaXMuZXh0cmFjdGVkQ291bnRdO1xuICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICAgICAuZ2V0SW52b2ljZSh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIGludm9pY2UuaW52b2ljZV9pZClcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbnZvaWNlLCBkYXRhLmludm9pY2UpO1xuICAgICAgICAvLyBpbnZvaWNlLmxpbmVzID0gZGF0YS5pbnZvaWNlLmxpbmVfaXRlbXM7XG4gICAgICAgIHRoaXMuYWRkSXRlbXNUb0Rpc3BsYXkoZGF0YS5pbnZvaWNlLmxpbmVfaXRlbXMpO1xuICAgICAgICB0aGlzLmV4dHJhY3RlZENvdW50Kys7XG4gICAgICAgIHRoaXMuZXh0cmFjdEludm9pY2VJdGVtcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRSZXBvcnRPbkNvbnNvbGUgPSAoKSA9PiB7XG4gICAgbGV0IHJldFZhbCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5pbnZvaWNlcykge1xuICAgICAgbGV0IHJldDogYW55ID0ge307XG4gICAgICBsZXQgaW52b2ljZSA9IHRoaXMuaW52b2ljZXNbaV07XG5cbiAgICAgIHJldC5ub3RlcyA9IHRoaXMuaW52b2ljZXNbaV0ubm90ZXM7XG4gICAgICByZXQubGluZV9pdGVtcyA9IHRoaXMuaW52b2ljZXNbaV0ubGluZV9pdGVtcy5tYXAoaXRlbSA9PiB7IHJldHVybiB7IG5hbWU6IGl0ZW0ubmFtZSwgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24gfTsgfSk7XG4gICAgICByZXQudG90YWwgPSB0aGlzLmludm9pY2VzW2ldLnRvdGFsO1xuICAgICAgcmV0LmJhbGFuY2UgPSB0aGlzLmludm9pY2VzW2ldLmJhbGFuY2U7XG4gICAgICByZXQubmFtZSA9IHRoaXMuaW52b2ljZXNbaV0uY29udGFjdF9wZXJzb25zX2RldGFpbHNbMF0uZmlyc3RfbmFtZSArIFwiIFwiICsgdGhpcy5pbnZvaWNlc1tpXS5jb250YWN0X3BlcnNvbnNfZGV0YWlsc1swXS5sYXN0X25hbWU7XG4gICAgICByZXQucGhvbmUgPSB0aGlzLmludm9pY2VzW2ldLmNvbnRhY3RfcGVyc29uc19kZXRhaWxzLnBob25lO1xuICAgICAgcmV0LmJpbGxpbmdfYWRkcmVzcyA9IHRoaXMuaW52b2ljZXNbaV0uYmlsbGluZ19hZGRyZXNzLmFkZHJlc3M7XG5cblxuICAgICAgcmV0VmFsLnB1c2gocmV0KTtcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXRWYWwpO1xuICAgIC8vIGNvcHkocmV0VmFsKTtcbiAgfVxuXG4gIGdldEluT3JkZXIgPSAoaXRlbXMpID0+IHtcbiAgICByZXR1cm4gXy5vcmRlckJ5KGl0ZW1zLCBbXCJxdWFudGl0eVwiXSwgW1wiZGVzY1wiXSk7XG4gIH1cblxuICBhZGRJdGVtc1RvRGlzcGxheSA9IGl0ZW1zID0+IHtcbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaXRlbXMuZm9yRWFjaChhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgbGV0IGZvdW5kSXRlbSA9IF8uZmluZCh0aGlzLmludm9pY2VJdGVtcywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLml0ZW1faWQgPT09IGl0ZW0uaXRlbV9pZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKCEhZm91bmRJdGVtKVxuICAgICAgICBmb3VuZEl0ZW0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlclxuICAgICAgICAgIC5nZXRJdGVtRGV0YWlsKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaXRlbS5pdGVtX2lkKVxuICAgICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uZGV0YWlsID0gZGF0YS5pdGVtO1xuICAgICAgICAgICAgLy8gdGhpcy5zaG93SXRlbXMoZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIG1hdGVyaWFsRGF0YSA9IFtdO1xuICBjYWxjdWxhdGVQQ3MgPSAoKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5tYXRlcmlhbERhdGEgPSBbXTtcbiAgICB0aGlzLmludm9pY2VJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5kZXRhaWwuY3VzdG9tX2ZpZWxkcy5mb3JFYWNoKGN1c3RvbV9maWVsZCA9PiB7XG4gICAgICAgIGxldCBmb3VuZE1hdGVyaWFsSXRlbSA9IF8uZmluZCh0aGlzLm1hdGVyaWFsRGF0YSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmouY3VzdG9tZmllbGRfaWQgPT09IGN1c3RvbV9maWVsZC5jdXN0b21maWVsZF9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZm91bmRNYXRlcmlhbEl0ZW0pIHtcbiAgICAgICAgICBjdXN0b21fZmllbGQucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIGZvdW5kTWF0ZXJpYWxJdGVtID0gY3VzdG9tX2ZpZWxkO1xuICAgICAgICAgIHRoaXMubWF0ZXJpYWxEYXRhLnB1c2goZm91bmRNYXRlcmlhbEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZvdW5kTWF0ZXJpYWxJdGVtLnF1YW50aXR5ID0gZm91bmRNYXRlcmlhbEl0ZW0ucXVhbnRpdHkgKyAoY3VzdG9tX2ZpZWxkLnZhbHVlICogaXRlbS5xdWFudGl0eSk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgbG9hZGluZztcbiAgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5sb2FkaW5nICYmIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiBcIlBsZWFzZSB3YWl0Li4uXCJcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZGluZy5wcmVzZW50KCk7XG4gIH07XG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZy5kaXNtaXNzKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBXZWVrT3JkZXJzUGFnZScpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVycy50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDExNDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBtYXAgPSB7XG5cdFwiLi4vcGFnZXMvbW9kYWwvbW9kYWwubW9kdWxlXCI6IFtcblx0XHQ0MDYsXG5cdFx0MFxuXHRdLFxuXHRcIi4uL3BhZ2VzL3dlZWstb3JkZXJzL3dlZWstb3JkZXJzLm1vZHVsZVwiOiBbXG5cdFx0NDA1LFxuXHRcdDFcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHZhciBpZHMgPSBtYXBbcmVxXTtcblx0aWYoIWlkcylcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZHNbMF0pO1xuXHR9KTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IDE1Njtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIE5hdkNvbnRyb2xsZXIsXG4gIERhdGVUaW1lLFxuICBMb2FkaW5nQ29udHJvbGxlcixcbiAgQWxlcnRDb250cm9sbGVyXG59IGZyb20gXCJpb25pYy1hbmd1bGFyXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gXCJpb25pYy1hbmd1bGFyXCI7XG5pbXBvcnQgeyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2ZyZXNoLWJvb2tzLWFwaS9mcmVzaC1ib29rcy1hcGlcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGFnZS1ob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcImhvbWUuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAgZGF0YTogYW55O1xuICBteURhdGU6IGFueTtcbiAgYnVzaW5lc3NfbWVtYmVyc2hpcHM6IGFueSA9IFtdO1xuICBzZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLFxuICAgIHB1YmxpYyBmcmVzaEJvb2tzQXBpUHJvdmlkZXI6IEZyZXNoQm9va3NBcGlQcm92aWRlclxuICApIHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXIuZ2V0QnVzaW5lc3NfbWVtYmVyc2hpcHMoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuYnVzaW5lc3NfbWVtYmVyc2hpcHMgPSBkYXRhLm9yZ2FuaXphdGlvbnM7XG4gICAgICB0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAgPSB0aGlzLmJ1c2luZXNzX21lbWJlcnNoaXBzWzBdLm9yZ2FuaXphdGlvbl9pZDtcbiAgICAgIHRoaXMubXlEYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRhdGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICBsZXQgZGF0ZSA9IG1vbWVudCh0aGlzLm15RGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlclxuICAgICAgLmdldEludm9pY2VzKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgKFwiZHVlX2RhdGU9XCIgKyBkYXRlKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5pbnZvaWNlcztcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbG9hZGluZztcbiAgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5sb2FkaW5nICYmIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiBcIlBsZWFzZSB3YWl0Li4uXCJcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZGluZy5wcmVzZW50KCk7XG4gIH07XG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZy5kaXNtaXNzKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gbnVsbDtcbiAgfVxuICBzaG93RGV0YWlsID0gaW52b2ljZSA9PiB7XG4gICAgY29uc29sZS5sb2coaW52b2ljZSk7XG4gICAgaWYgKGludm9pY2UuaGFzT3duUHJvcGVydHkoXCJsaW5lX2l0ZW1zXCIpKSB7XG4gICAgICB0aGlzLnNob3dJdGVtcyhpbnZvaWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgICAgLmdldEludm9pY2UodGhpcy5zZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwLCBpbnZvaWNlLmludm9pY2VfaWQpXG4gICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGludm9pY2UsIGRhdGEuaW52b2ljZSk7XG4gICAgICAgICAgLy8gaW52b2ljZS5saW5lcyA9IGRhdGEuaW52b2ljZS5saW5lX2l0ZW1zO1xuICAgICAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB0aGlzLnNob3dJdGVtcyhpbnZvaWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBzaG93RGV0YWlsMiA9IGludm9pY2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKGludm9pY2UpO1xuICAgIGlmIChpbnZvaWNlLmhhc093blByb3BlcnR5KFwibGluZXNcIikpIHtcbiAgICAgIHRoaXMuc2hvd0l0ZW1zMihpbnZvaWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgICAgLmdldEludm9pY2UodGhpcy5zZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwLCBpbnZvaWNlLmludm9pY2VfaWQpXG4gICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICBpbnZvaWNlLmxpbmVzID0gZGF0YS5pbnZvaWNlLmxpbmVfaXRlbXM7XG4gICAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIHRoaXMuc2hvd0l0ZW1zMihpbnZvaWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc2hvd0l0ZW1zKGludm9pY2U6IGFueSkge1xuICAgIGxldCBtb2RhbFBhZ2UgPSB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoXCJNb2RhbFBhZ2VcIiwgeyBpbnZvaWNlOiBpbnZvaWNlIH0pO1xuICAgIG1vZGFsUGFnZS5wcmVzZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHNob3dJdGVtczIoaW52b2ljZTogYW55KSB7XG4gICAgbGV0IGlucHV0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW52b2ljZS5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIGxhYmVsOiBpbnZvaWNlLmxpbmVzW2ldLnF0eSArIFwiLVwiICsgaW52b2ljZS5saW5lc1tpXS5uYW1lLFxuICAgICAgICB2YWx1ZTogaW52b2ljZS5saW5lc1tpXS5xdHkgKyBcIi1cIiArIGludm9pY2UubGluZXNbaV0ubmFtZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IGludm9pY2UubGluZXNbaV0ubmFtZSxcbiAgICAgICAgY2hlY2tlZDogdHJ1ZVxuICAgICAgICAvLyBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBhbGVydCA9IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICB0aXRsZTogaW52b2ljZS5jdXJyZW50X29yZ2FuaXphdGlvbixcbiAgICAgIHN1YlRpdGxlOlxuICAgICAgICAnPHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgaW52b2ljZS5wYXltZW50X3N0YXR1cyArXG4gICAgICAgICdcIj5TVEFUVVMgOiAnICtcbiAgICAgICAgaW52b2ljZS5kaXNwbGF5X3N0YXR1cyArXG4gICAgICAgIFwiPC9zcGFuPlwiLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1tZXNzYWdlXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHJvbmc+QWRkcmVzczogPC9zdHJvbmc+YCArXG4gICAgICAgIGludm9pY2Uuc3RyZWV0ICtcbiAgICAgICAgYFxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgLypcbiAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246IDwvc3Ryb25nPmAraW52b2ljZS5kZXNjcmlwdGlvbitgXG4gICAgICA8YnIvPlxuICAgICAgPGhyPlxuICAgICAgPGJyLz5cbiAgICAgIDxzdHJvbmc+VG90YXQ6IDwvc3Ryb25nPmAraW52b2ljZS5hbW91bnQuYW1vdW50KycgJytpbnZvaWNlLmFtb3VudC5jb2RlK2BcbiAgICAgIDxici8+XG4gICAgICA8c3Ryb25nPlBhaWQ6IDwvc3Ryb25nPmAraW52b2ljZS5wYWlkLmFtb3VudCsnICcraW52b2ljZS5wYWlkLmNvZGUrYFxuICAgICAgPGJyLz5cbiAgICAgIDxzdHJvbmc+T3V0c3RhbmRpbmc6IDwvc3Ryb25nPmAraW52b2ljZS5vdXRzdGFuZGluZy5hbW91bnQrJyAnK2ludm9pY2Uub3V0c3RhbmRpbmcuY29kZStgXG4gICAgICAqL1xuICAgICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgICBidXR0b25zOiBbXCJEaXNtaXNzXCJdXG4gICAgfSk7XG4gICAgYWxlcnQucHJlc2VudCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEVycm9ySGFuZGxlciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuaW1wb3J0IHsgTXlBcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgTGlzdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9saXN0L2xpc3QnO1xuaW1wb3J0IHsgV2Vla09yZGVyc1BhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvd2Vlay1vcmRlcnMvd2Vlay1vcmRlcnNcIjtcblxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaSc7XG5cbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IERlZXBsaW5rcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGVlcGxpbmtzJztcbmltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29kZVB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvZGUtcHVzaCc7XG5pbXBvcnQgeyBIZWxwZXJQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9oZWxwZXIvaGVscGVyJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlLFxuICAgIExpc3RQYWdlLFxuICAgIFdlZWtPcmRlcnNQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICAgIEh0dHBNb2R1bGUsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgV2Vla09yZGVyc1BhZ2VcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3RhdHVzQmFyLFxuICAgIFNwbGFzaFNjcmVlbixEZWVwbGlua3MsSW5BcHBCcm93c2VyLENvZGVQdXNoLFxuICAgIHtwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBJb25pY0Vycm9ySGFuZGxlcn0sXG4gICAgRnJlc2hCb29rc0FwaVByb3ZpZGVyLFxuICAgIEhlbHBlclByb3ZpZGVyLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IDE2MSxcblx0XCIuL2FmLmpzXCI6IDE2MSxcblx0XCIuL2FyXCI6IDE2Mixcblx0XCIuL2FyLWR6XCI6IDE2Myxcblx0XCIuL2FyLWR6LmpzXCI6IDE2Myxcblx0XCIuL2FyLWt3XCI6IDE2NCxcblx0XCIuL2FyLWt3LmpzXCI6IDE2NCxcblx0XCIuL2FyLWx5XCI6IDE2NSxcblx0XCIuL2FyLWx5LmpzXCI6IDE2NSxcblx0XCIuL2FyLW1hXCI6IDE2Nixcblx0XCIuL2FyLW1hLmpzXCI6IDE2Nixcblx0XCIuL2FyLXNhXCI6IDE2Nyxcblx0XCIuL2FyLXNhLmpzXCI6IDE2Nyxcblx0XCIuL2FyLXRuXCI6IDE2OCxcblx0XCIuL2FyLXRuLmpzXCI6IDE2OCxcblx0XCIuL2FyLmpzXCI6IDE2Mixcblx0XCIuL2F6XCI6IDE2OSxcblx0XCIuL2F6LmpzXCI6IDE2OSxcblx0XCIuL2JlXCI6IDE3MCxcblx0XCIuL2JlLmpzXCI6IDE3MCxcblx0XCIuL2JnXCI6IDE3MSxcblx0XCIuL2JnLmpzXCI6IDE3MSxcblx0XCIuL2JtXCI6IDE3Mixcblx0XCIuL2JtLmpzXCI6IDE3Mixcblx0XCIuL2JuXCI6IDE3Myxcblx0XCIuL2JuLmpzXCI6IDE3Myxcblx0XCIuL2JvXCI6IDE3NCxcblx0XCIuL2JvLmpzXCI6IDE3NCxcblx0XCIuL2JyXCI6IDE3NSxcblx0XCIuL2JyLmpzXCI6IDE3NSxcblx0XCIuL2JzXCI6IDE3Nixcblx0XCIuL2JzLmpzXCI6IDE3Nixcblx0XCIuL2NhXCI6IDE3Nyxcblx0XCIuL2NhLmpzXCI6IDE3Nyxcblx0XCIuL2NzXCI6IDE3OCxcblx0XCIuL2NzLmpzXCI6IDE3OCxcblx0XCIuL2N2XCI6IDE3OSxcblx0XCIuL2N2LmpzXCI6IDE3OSxcblx0XCIuL2N5XCI6IDE4MCxcblx0XCIuL2N5LmpzXCI6IDE4MCxcblx0XCIuL2RhXCI6IDE4MSxcblx0XCIuL2RhLmpzXCI6IDE4MSxcblx0XCIuL2RlXCI6IDE4Mixcblx0XCIuL2RlLWF0XCI6IDE4Myxcblx0XCIuL2RlLWF0LmpzXCI6IDE4Myxcblx0XCIuL2RlLWNoXCI6IDE4NCxcblx0XCIuL2RlLWNoLmpzXCI6IDE4NCxcblx0XCIuL2RlLmpzXCI6IDE4Mixcblx0XCIuL2R2XCI6IDE4NSxcblx0XCIuL2R2LmpzXCI6IDE4NSxcblx0XCIuL2VsXCI6IDE4Nixcblx0XCIuL2VsLmpzXCI6IDE4Nixcblx0XCIuL2VuLWF1XCI6IDE4Nyxcblx0XCIuL2VuLWF1LmpzXCI6IDE4Nyxcblx0XCIuL2VuLWNhXCI6IDE4OCxcblx0XCIuL2VuLWNhLmpzXCI6IDE4OCxcblx0XCIuL2VuLWdiXCI6IDE4OSxcblx0XCIuL2VuLWdiLmpzXCI6IDE4OSxcblx0XCIuL2VuLWllXCI6IDE5MCxcblx0XCIuL2VuLWllLmpzXCI6IDE5MCxcblx0XCIuL2VuLWlsXCI6IDE5MSxcblx0XCIuL2VuLWlsLmpzXCI6IDE5MSxcblx0XCIuL2VuLW56XCI6IDE5Mixcblx0XCIuL2VuLW56LmpzXCI6IDE5Mixcblx0XCIuL2VvXCI6IDE5Myxcblx0XCIuL2VvLmpzXCI6IDE5Myxcblx0XCIuL2VzXCI6IDE5NCxcblx0XCIuL2VzLWRvXCI6IDE5NSxcblx0XCIuL2VzLWRvLmpzXCI6IDE5NSxcblx0XCIuL2VzLXVzXCI6IDE5Nixcblx0XCIuL2VzLXVzLmpzXCI6IDE5Nixcblx0XCIuL2VzLmpzXCI6IDE5NCxcblx0XCIuL2V0XCI6IDE5Nyxcblx0XCIuL2V0LmpzXCI6IDE5Nyxcblx0XCIuL2V1XCI6IDE5OCxcblx0XCIuL2V1LmpzXCI6IDE5OCxcblx0XCIuL2ZhXCI6IDE5OSxcblx0XCIuL2ZhLmpzXCI6IDE5OSxcblx0XCIuL2ZpXCI6IDIwMCxcblx0XCIuL2ZpLmpzXCI6IDIwMCxcblx0XCIuL2ZvXCI6IDIwMSxcblx0XCIuL2ZvLmpzXCI6IDIwMSxcblx0XCIuL2ZyXCI6IDIwMixcblx0XCIuL2ZyLWNhXCI6IDIwMyxcblx0XCIuL2ZyLWNhLmpzXCI6IDIwMyxcblx0XCIuL2ZyLWNoXCI6IDIwNCxcblx0XCIuL2ZyLWNoLmpzXCI6IDIwNCxcblx0XCIuL2ZyLmpzXCI6IDIwMixcblx0XCIuL2Z5XCI6IDIwNSxcblx0XCIuL2Z5LmpzXCI6IDIwNSxcblx0XCIuL2dkXCI6IDIwNixcblx0XCIuL2dkLmpzXCI6IDIwNixcblx0XCIuL2dsXCI6IDIwNyxcblx0XCIuL2dsLmpzXCI6IDIwNyxcblx0XCIuL2dvbS1sYXRuXCI6IDIwOCxcblx0XCIuL2dvbS1sYXRuLmpzXCI6IDIwOCxcblx0XCIuL2d1XCI6IDIwOSxcblx0XCIuL2d1LmpzXCI6IDIwOSxcblx0XCIuL2hlXCI6IDIxMCxcblx0XCIuL2hlLmpzXCI6IDIxMCxcblx0XCIuL2hpXCI6IDIxMSxcblx0XCIuL2hpLmpzXCI6IDIxMSxcblx0XCIuL2hyXCI6IDIxMixcblx0XCIuL2hyLmpzXCI6IDIxMixcblx0XCIuL2h1XCI6IDIxMyxcblx0XCIuL2h1LmpzXCI6IDIxMyxcblx0XCIuL2h5LWFtXCI6IDIxNCxcblx0XCIuL2h5LWFtLmpzXCI6IDIxNCxcblx0XCIuL2lkXCI6IDIxNSxcblx0XCIuL2lkLmpzXCI6IDIxNSxcblx0XCIuL2lzXCI6IDIxNixcblx0XCIuL2lzLmpzXCI6IDIxNixcblx0XCIuL2l0XCI6IDIxNyxcblx0XCIuL2l0LmpzXCI6IDIxNyxcblx0XCIuL2phXCI6IDIxOCxcblx0XCIuL2phLmpzXCI6IDIxOCxcblx0XCIuL2p2XCI6IDIxOSxcblx0XCIuL2p2LmpzXCI6IDIxOSxcblx0XCIuL2thXCI6IDIyMCxcblx0XCIuL2thLmpzXCI6IDIyMCxcblx0XCIuL2trXCI6IDIyMSxcblx0XCIuL2trLmpzXCI6IDIyMSxcblx0XCIuL2ttXCI6IDIyMixcblx0XCIuL2ttLmpzXCI6IDIyMixcblx0XCIuL2tuXCI6IDIyMyxcblx0XCIuL2tuLmpzXCI6IDIyMyxcblx0XCIuL2tvXCI6IDIyNCxcblx0XCIuL2tvLmpzXCI6IDIyNCxcblx0XCIuL2t5XCI6IDIyNSxcblx0XCIuL2t5LmpzXCI6IDIyNSxcblx0XCIuL2xiXCI6IDIyNixcblx0XCIuL2xiLmpzXCI6IDIyNixcblx0XCIuL2xvXCI6IDIyNyxcblx0XCIuL2xvLmpzXCI6IDIyNyxcblx0XCIuL2x0XCI6IDIyOCxcblx0XCIuL2x0LmpzXCI6IDIyOCxcblx0XCIuL2x2XCI6IDIyOSxcblx0XCIuL2x2LmpzXCI6IDIyOSxcblx0XCIuL21lXCI6IDIzMCxcblx0XCIuL21lLmpzXCI6IDIzMCxcblx0XCIuL21pXCI6IDIzMSxcblx0XCIuL21pLmpzXCI6IDIzMSxcblx0XCIuL21rXCI6IDIzMixcblx0XCIuL21rLmpzXCI6IDIzMixcblx0XCIuL21sXCI6IDIzMyxcblx0XCIuL21sLmpzXCI6IDIzMyxcblx0XCIuL21uXCI6IDIzNCxcblx0XCIuL21uLmpzXCI6IDIzNCxcblx0XCIuL21yXCI6IDIzNSxcblx0XCIuL21yLmpzXCI6IDIzNSxcblx0XCIuL21zXCI6IDIzNixcblx0XCIuL21zLW15XCI6IDIzNyxcblx0XCIuL21zLW15LmpzXCI6IDIzNyxcblx0XCIuL21zLmpzXCI6IDIzNixcblx0XCIuL210XCI6IDIzOCxcblx0XCIuL210LmpzXCI6IDIzOCxcblx0XCIuL215XCI6IDIzOSxcblx0XCIuL215LmpzXCI6IDIzOSxcblx0XCIuL25iXCI6IDI0MCxcblx0XCIuL25iLmpzXCI6IDI0MCxcblx0XCIuL25lXCI6IDI0MSxcblx0XCIuL25lLmpzXCI6IDI0MSxcblx0XCIuL25sXCI6IDI0Mixcblx0XCIuL25sLWJlXCI6IDI0Myxcblx0XCIuL25sLWJlLmpzXCI6IDI0Myxcblx0XCIuL25sLmpzXCI6IDI0Mixcblx0XCIuL25uXCI6IDI0NCxcblx0XCIuL25uLmpzXCI6IDI0NCxcblx0XCIuL3BhLWluXCI6IDI0NSxcblx0XCIuL3BhLWluLmpzXCI6IDI0NSxcblx0XCIuL3BsXCI6IDI0Nixcblx0XCIuL3BsLmpzXCI6IDI0Nixcblx0XCIuL3B0XCI6IDI0Nyxcblx0XCIuL3B0LWJyXCI6IDI0OCxcblx0XCIuL3B0LWJyLmpzXCI6IDI0OCxcblx0XCIuL3B0LmpzXCI6IDI0Nyxcblx0XCIuL3JvXCI6IDI0OSxcblx0XCIuL3JvLmpzXCI6IDI0OSxcblx0XCIuL3J1XCI6IDI1MCxcblx0XCIuL3J1LmpzXCI6IDI1MCxcblx0XCIuL3NkXCI6IDI1MSxcblx0XCIuL3NkLmpzXCI6IDI1MSxcblx0XCIuL3NlXCI6IDI1Mixcblx0XCIuL3NlLmpzXCI6IDI1Mixcblx0XCIuL3NpXCI6IDI1Myxcblx0XCIuL3NpLmpzXCI6IDI1Myxcblx0XCIuL3NrXCI6IDI1NCxcblx0XCIuL3NrLmpzXCI6IDI1NCxcblx0XCIuL3NsXCI6IDI1NSxcblx0XCIuL3NsLmpzXCI6IDI1NSxcblx0XCIuL3NxXCI6IDI1Nixcblx0XCIuL3NxLmpzXCI6IDI1Nixcblx0XCIuL3NyXCI6IDI1Nyxcblx0XCIuL3NyLWN5cmxcIjogMjU4LFxuXHRcIi4vc3ItY3lybC5qc1wiOiAyNTgsXG5cdFwiLi9zci5qc1wiOiAyNTcsXG5cdFwiLi9zc1wiOiAyNTksXG5cdFwiLi9zcy5qc1wiOiAyNTksXG5cdFwiLi9zdlwiOiAyNjAsXG5cdFwiLi9zdi5qc1wiOiAyNjAsXG5cdFwiLi9zd1wiOiAyNjEsXG5cdFwiLi9zdy5qc1wiOiAyNjEsXG5cdFwiLi90YVwiOiAyNjIsXG5cdFwiLi90YS5qc1wiOiAyNjIsXG5cdFwiLi90ZVwiOiAyNjMsXG5cdFwiLi90ZS5qc1wiOiAyNjMsXG5cdFwiLi90ZXRcIjogMjY0LFxuXHRcIi4vdGV0LmpzXCI6IDI2NCxcblx0XCIuL3RnXCI6IDI2NSxcblx0XCIuL3RnLmpzXCI6IDI2NSxcblx0XCIuL3RoXCI6IDI2Nixcblx0XCIuL3RoLmpzXCI6IDI2Nixcblx0XCIuL3RsLXBoXCI6IDI2Nyxcblx0XCIuL3RsLXBoLmpzXCI6IDI2Nyxcblx0XCIuL3RsaFwiOiAyNjgsXG5cdFwiLi90bGguanNcIjogMjY4LFxuXHRcIi4vdHJcIjogMjY5LFxuXHRcIi4vdHIuanNcIjogMjY5LFxuXHRcIi4vdHpsXCI6IDI3MCxcblx0XCIuL3R6bC5qc1wiOiAyNzAsXG5cdFwiLi90em1cIjogMjcxLFxuXHRcIi4vdHptLWxhdG5cIjogMjcyLFxuXHRcIi4vdHptLWxhdG4uanNcIjogMjcyLFxuXHRcIi4vdHptLmpzXCI6IDI3MSxcblx0XCIuL3VnLWNuXCI6IDI3Myxcblx0XCIuL3VnLWNuLmpzXCI6IDI3Myxcblx0XCIuL3VrXCI6IDI3NCxcblx0XCIuL3VrLmpzXCI6IDI3NCxcblx0XCIuL3VyXCI6IDI3NSxcblx0XCIuL3VyLmpzXCI6IDI3NSxcblx0XCIuL3V6XCI6IDI3Nixcblx0XCIuL3V6LWxhdG5cIjogMjc3LFxuXHRcIi4vdXotbGF0bi5qc1wiOiAyNzcsXG5cdFwiLi91ei5qc1wiOiAyNzYsXG5cdFwiLi92aVwiOiAyNzgsXG5cdFwiLi92aS5qc1wiOiAyNzgsXG5cdFwiLi94LXBzZXVkb1wiOiAyNzksXG5cdFwiLi94LXBzZXVkby5qc1wiOiAyNzksXG5cdFwiLi95b1wiOiAyODAsXG5cdFwiLi95by5qc1wiOiAyODAsXG5cdFwiLi96aC1jblwiOiAyODEsXG5cdFwiLi96aC1jbi5qc1wiOiAyODEsXG5cdFwiLi96aC1oa1wiOiAyODIsXG5cdFwiLi96aC1oay5qc1wiOiAyODIsXG5cdFwiLi96aC10d1wiOiAyODMsXG5cdFwiLi96aC10dy5qc1wiOiAyODNcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzODQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAzODRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2LCBQbGF0Zm9ybSB9IGZyb20gXCJpb25pYy1hbmd1bGFyXCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyXCI7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuXCI7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL2hvbWUvaG9tZVwiO1xuaW1wb3J0IHsgTGlzdFBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvbGlzdC9saXN0XCI7XG5pbXBvcnQgeyBXZWVrT3JkZXJzUGFnZSB9IGZyb20gXCIuLi9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVyc1wiO1xuaW1wb3J0IHsgRGVlcGxpbmtzIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvZGVlcGxpbmtzXCI7XG5pbXBvcnQgeyBJbkFwcEJyb3dzZXIgfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3NlclwiO1xuaW1wb3J0IHsgSGVscGVyUHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IEZyZXNoQm9va3NBcGlQcm92aWRlciB9IGZyb20gXCIuLi9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6IFwiYXBwLmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNeUFwcCB7XG4gIEBWaWV3Q2hpbGQoTmF2KSBuYXY6IE5hdjtcblxuICByb290UGFnZTogYW55ID0gSG9tZVBhZ2U7XG5cbiAgcGFnZXM6IEFycmF5PHsgdGl0bGU6IHN0cmluZzsgY29tcG9uZW50OiBhbnkgfT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZyZXNoQm9va3NBcGk6IEZyZXNoQm9va3NBcGlQcm92aWRlcixcbiAgICBwdWJsaWMgaGVscGVyOiBIZWxwZXJQcm92aWRlcixcbiAgICBwdWJsaWMgaWFiOiBJbkFwcEJyb3dzZXIsXG4gICAgcHVibGljIGRlZXBsaW5rczogRGVlcGxpbmtzLFxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyLFxuICAgIHB1YmxpYyBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlblxuICApIHtcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcblxuICAgIC8vIHVzZWQgZm9yIGFuIGV4YW1wbGUgb2YgbmdGb3IgYW5kIG5hdmlnYXRpb25cbiAgICB0aGlzLnBhZ2VzID0gW1xuICAgICAgeyB0aXRsZTogXCJIb21lXCIsIGNvbXBvbmVudDogSG9tZVBhZ2UgfSxcbiAgICAgIHsgdGl0bGU6IFwiV2VlayBPcmRlcnNcIiwgY29tcG9uZW50OiBXZWVrT3JkZXJzUGFnZSB9ICAgICAgXG4gICAgXTtcbiAgfVxuXG4gIGluaXRpYWxpemVBcHAoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gT2theSwgc28gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBvdXIgcGx1Z2lucyBhcmUgYXZhaWxhYmxlLlxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cbiAgICAgIHRoaXMuc3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgICAgdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuXG4gICAgICAvLyB0aGlzLmZyZXNoQm9va3NBcGkuZ2V0QXV0aG9yaXphdGlvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAvLyAgIHRoaXMuaGVscGVyLmxzLnNldChcImF1dGhcIiwgZGF0YSk7XG4gICAgICAvLyB9KTtcblxuICAgICAgdGhpcy5kZWVwbGlua3NcbiAgICAgICAgLnJvdXRlKHtcbiAgICAgICAgICBcIi9cIjogSG9tZVBhZ2VcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBtYXRjaCA9PiB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlci5scy5zZXQoXCJjb2RlXCIsIG1hdGNoLiRhcmdzLmNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbWF0Y2hlZCByb3V0ZVwiLCBtYXRjaCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBub21hdGNoID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHb3QgYSBkZWVwbGluayB0aGF0IGRpZG4ndCBtYXRjaFwiLCBub21hdGNoKTtcbiAgICAgICAgICAgIGlmIChub21hdGNoID09IFwiY29yZG92YV9ub3RfYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgICAgLy90cnkgYXMgd2ViXG4gICAgICAgICAgICAgIC8vIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgICAgICAgIC8vIHZhciBjb2RlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjb2RlXCIpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2RlKTtcbiAgICAgICAgICAgICAgLy8gdGhpcy5oZWxwZXIubHMuc2V0KFwiY29kZVwiLCBjb2RlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblBhZ2UocGFnZSkge1xuICAgIC8vIFJlc2V0IHRoZSBjb250ZW50IG5hdiB0byBoYXZlIGp1c3QgdGhpcyBwYWdlXG4gICAgLy8gd2Ugd291bGRuJ3Qgd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2hvdyBpbiB0aGlzIHNjZW5hcmlvXG4gICAgdGhpcy5uYXYuc2V0Um9vdChwYWdlLmNvbXBvbmVudCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0UGFnZSB7XG4gIHNlbGVjdGVkSXRlbTogYW55O1xuICBpY29uczogc3RyaW5nW107XG4gIGl0ZW1zOiBBcnJheTx7dGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nLCBpY29uOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zKSB7XG4gICAgLy8gSWYgd2UgbmF2aWdhdGVkIHRvIHRoaXMgcGFnZSwgd2Ugd2lsbCBoYXZlIGFuIGl0ZW0gYXZhaWxhYmxlIGFzIGEgbmF2IHBhcmFtXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuYXZQYXJhbXMuZ2V0KCdpdGVtJyk7XG5cbiAgICAvLyBMZXQncyBwb3B1bGF0ZSB0aGlzIHBhZ2Ugd2l0aCBzb21lIGZpbGxlciBjb250ZW50IGZvciBmdW56aWVzXG4gICAgdGhpcy5pY29ucyA9IFsnZmxhc2snLCAnd2lmaScsICdiZWVyJywgJ2Zvb3RiYWxsJywgJ2Jhc2tldGJhbGwnLCAncGFwZXItcGxhbmUnLFxuICAgICdhbWVyaWNhbi1mb290YmFsbCcsICdib2F0JywgJ2JsdWV0b290aCcsICdidWlsZCddO1xuXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6ICdJdGVtICcgKyBpLFxuICAgICAgICBub3RlOiAnVGhpcyBpcyBpdGVtICMnICsgaSxcbiAgICAgICAgaWNvbjogdGhpcy5pY29uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmljb25zLmxlbmd0aCldXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpdGVtVGFwcGVkKGV2ZW50LCBpdGVtKSB7XG4gICAgLy8gVGhhdCdzIHJpZ2h0LCB3ZSdyZSBwdXNoaW5nIHRvIG91cnNlbHZlcyFcbiAgICB0aGlzLm5hdkN0cmwucHVzaChMaXN0UGFnZSwge1xuICAgICAgaXRlbTogaXRlbVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBIdHRwLFxuICBVUkxTZWFyY2hQYXJhbXMsXG4gIEhlYWRlcnMsXG4gIFJlcXVlc3RPcHRpb25zLFxuICBSZXF1ZXN0TWV0aG9kXG59IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSBcImlvbmljLWFuZ3VsYXJcIjtcbmltcG9ydCB7IEhlbHBlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL2luLWFwcC1icm93c2VyXCI7XG5pbXBvcnQgeyBDb2RlUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29kZS1wdXNoJztcbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEZyZXNoQm9va3NBcGlQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaHR0cDogSHR0cCxcbiAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHB1YmxpYyBoZWxwZXI6IEhlbHBlclByb3ZpZGVyLFxuICAgIHByaXZhdGUgY29kZVB1c2g6IENvZGVQdXNoLFxuICAgIHB1YmxpYyBpYWI6IEluQXBwQnJvd3NlclxuICApIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5lbmFibGVQcm94eSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MTAwL1wiO1xuICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ID0gXCJjYTI2Y2JjZjkzMzE2NzFkNmEzM2Y3YTNjYjU4YjY5OTM3NmFiM2FiNzJcIjtcbiAgICAgIHRoaXMuY2xpZW50X2lkID0gXCIxMDAwLkVTMU02TllCQVRVODgxOTcxQkYxWDAxNDJBOUpPTVwiO1xuXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVXJsID1cbiAgICAgICAgXCJodHRwczovL2FjY291bnRzLnpvaG8uY29tL29hdXRoL3YyL2F1dGg/XCIgK1xuICAgICAgICBcInNjb3BlPVwiICtcbiAgICAgICAgdGhpcy56b2hvX3Njb3BlICtcbiAgICAgICAgXCImY2xpZW50X2lkPVwiICtcbiAgICAgICAgdGhpcy5jbGllbnRfaWQgK1xuICAgICAgICBcIiZzdGF0ZT10ZXN0aW5nJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9XCIgK1xuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSArXG4gICAgICAgIFwiJmFjY2Vzc190eXBlPW9mZmxpbmVcIjtcbiAgICAgIC8vIFwiaHR0cHM6Ly9teS5mcmVzaGJvb2tzLmNvbS9zZXJ2aWNlL2F1dGgvb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD03MWUzYTZlNzE4MDQzNzVlOGMyMDU1YjM0ZTA1NDQ0YTQxYzg2MzEyYWM0OWRkNWFhYTUxNDZkM2NjOWRlYTEzJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHM6Ly9lYXRhbmR0cmVhdC1hZC5naXRodWIuaW8vZnJlc2hCb29rc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrVXBkYXRlKCk7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVXJsID1cbiAgICAgICAgXCJodHRwczovL2FjY291bnRzLnpvaG8uY29tL29hdXRoL3YyL2F1dGg/XCIgK1xuICAgICAgICBcInNjb3BlPVwiICtcbiAgICAgICAgdGhpcy56b2hvX3Njb3BlICtcbiAgICAgICAgXCImY2xpZW50X2lkPVwiICtcbiAgICAgICAgdGhpcy5jbGllbnRfaWQgK1xuICAgICAgICBcIiZzdGF0ZT10ZXN0aW5nJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9XCIgK1xuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSArXG4gICAgICAgIFwiJmFjY2Vzc190eXBlPW9mZmxpbmVcIjtcbiAgICAgIC8vIFwiaHR0cHM6Ly9teS5mcmVzaGJvb2tzLmNvbS9zZXJ2aWNlL2F1dGgvb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD03MWUzYTZlNzE4MDQzNzVlOGMyMDU1YjM0ZTA1NDQ0YTQxYzg2MzEyYWM0OWRkNWFhYTUxNDZkM2NjOWRlYTEzJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9ZWF0YW5kdHJlYXQ6Ly9mcmVzaEJvb2tzL1wiO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIEZyZXNoQm9va3NBcGlQcm92aWRlciBQcm92aWRlclwiKTtcbiAgfVxuXG4gIGNoZWNrVXBkYXRlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY29kZVB1c2guc3luYygpLnN1YnNjcmliZSgoc3luY1N0YXR1cykgPT4gY29uc29sZS5sb2coc3luY1N0YXR1cykpO1xuXG4gICAgICAgIGNvbnN0IGRvd25sb2FkUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MpID0+IHsgY29uc29sZS5sb2coYERvd25sb2FkZWQgJHtwcm9ncmVzcy5yZWNlaXZlZEJ5dGVzfSBvZiAke3Byb2dyZXNzLnRvdGFsQnl0ZXN9YCk7IH1cbiAgICAgICAgdGhpcy5jb2RlUHVzaC5zeW5jKHt9LCBkb3dubG9hZFByb2dyZXNzKS5zdWJzY3JpYmUoKHN5bmNTdGF0dXMpID0+IGNvbnNvbGUubG9nKHN5bmNTdGF0dXMpKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cbiAgfTtcblxuICBlbmFibGVQcm94eSA9IHRydWU7XG5cbiAgcmVkaXJlY3RfdXJpID0gXCJlYXRhbmR0cmVhdDovL2ZyZXNoQm9va3MvXCI7XG4gIGNsaWVudF9zZWNyZXQgPSBcIjk2YjY1YjNmY2RmYmJhMzM2NzRlZWVjMjM2YzMyMWFlMGYxY2VmMjMwZVwiO1xuICBjbGllbnRfaWQgPSBcIjEwMDAuM1JJWFNUTzVWVDJFOTExMzBLWENDMVZJS0RBQ1ZWXCI7XG4gIHpvaG9fc2NvcGUgPVxuICAgIFwiWm9ob0ludm9pY2UuZXhwZW5zZXMuUkVBRCxab2hvSW52b2ljZS5wcm9qZWN0cy5SRUFELFpvaG9JbnZvaWNlLmNyZWRpdG5vdGVzLlJFQUQsWm9ob0ludm9pY2UuY3VzdG9tZXJwYXltZW50cy5SRUFELFpvaG9JbnZvaWNlLmVzdGltYXRlcy5SRUFELFpvaG9JbnZvaWNlLnNldHRpbmdzLlJFQUQsWm9ob0ludm9pY2UuY29udGFjdHMuQ3JlYXRlLFpvaG9JbnZvaWNlLmNvbnRhY3RzLlVQREFURSxab2hvSW52b2ljZS5jb250YWN0cy5SRUFELFpvaG9JbnZvaWNlLmNvbnRhY3RzLkRFTEVURSxab2hvSW52b2ljZS5pbnZvaWNlcy5SRUFEXCI7XG4gIGF1dGhlbnRpY2F0aW9uVXJsID0gXCJcIjtcblxuICBnZXRBdXRob3JpemF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgIGlmICghIWF1dGgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYXV0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgICAgICBpZiAoISFhdXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhdXRoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcXNfY29kZSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiY29kZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoISFxc19jb2RlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci5scy5zZXQoXCJjb2RlXCIsIHFzX2NvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWJBdXRob3JpemF0aW9uKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYkF1dGhvcml6YXRpb24ocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiY29kZVwiKS50aGVuKGNvZGUgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci5scy5yZW1vdmUoXCJhdXRoXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyb3dzZXIgPSB0aGlzLmlhYi5jcmVhdGUodGhpcy5hdXRoZW50aWNhdGlvblVybCk7XG4gICAgICAgICAgICAgICAgYnJvd3Nlci5zaG93KCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwicmVmcmVzaF90b2tlblwiKS50aGVuKHJlZnJlc2hfdG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRBdXRoV2l0aENvZGUoY29kZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0QXV0aFdpdGhBdXRoKGF1dGgsIHJlZnJlc2hfdG9rZW4sIHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEJ1c2luZXNzX21lbWJlcnNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZ2V0QXV0aG9yaXphdGlvbigpLnRoZW4oKGF1dGg6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9nZXRCdXNpbmVzc19tZW1iZXJzaGlwcyhhdXRoLmFjY2Vzc190b2tlbiwgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJbnZvaWNlcyA9IChhY2NvdW50X2lkLCBzZWFyY2hTdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmdldEF1dGhvcml6YXRpb24oKS50aGVuKChhdXRoOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0SW52b2ljZXMoYXV0aC5hY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsIHNlYXJjaFN0cmluZywgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJbnZvaWNlID0gKGFjY291bnRfaWQsIGludm9pY2VfaWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmdldEF1dGhvcml6YXRpb24oKS50aGVuKChhdXRoOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0SW52b2ljZShhdXRoLmFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgaW52b2ljZV9pZCwgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuaGVscGVyLmxzLmdldChcImF1dGhcIikudGhlbigoYXV0aDogYW55KSA9PiB7XG4gICAgICAvLyAgIHRoaXMuX2dldEludm9pY2UoYXV0aC5hY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsIGludm9pY2VfaWQsIHJlc29sdmUpO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gIH07XG5cblxuICBnZXRJdGVtRGV0YWlsID0gKGFjY291bnRfaWQsIGl0ZW1faWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmdldEF1dGhvcml6YXRpb24oKS50aGVuKChhdXRoOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0SXRlbShhdXRoLmFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgaXRlbV9pZCwgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuaGVscGVyLmxzLmdldChcImF1dGhcIikudGhlbigoYXV0aDogYW55KSA9PiB7XG4gICAgICAvLyAgIHRoaXMuX2dldEludm9pY2UoYXV0aC5hY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsIGludm9pY2VfaWQsIHJlc29sdmUpO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gIH07XG5cblxuICBwcml2YXRlIF93ZWJBdXRob3JpemF0aW9uKHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiY29kZVwiKS50aGVuKGNvZGUgPT4ge1xuICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgIHRoaXMuaGVscGVyLmxzLnJlbW92ZShcImF1dGhcIik7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSB0aGlzLmF1dGhlbnRpY2F0aW9uVXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgIC8vIHRoaXMuaGVscGVyLmxzLmdldChcInJlZnJlc2hfdG9rZW5cIikudGhlbihyZWZyZXNoX3Rva2VuID0+IHtcbiAgICAgICAgICAvLyAgIGlmICghYXV0aCkge1xuICAgICAgICAgIC8vICAgICB0aGlzLl9nZXRBdXRoV2l0aENvZGUoY29kZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICB0aGlzLl9nZXRBdXRoV2l0aEF1dGgoYXV0aCwgcmVmcmVzaF90b2tlbiwgcmVzb2x2ZSk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgdGhpcy5fZ2V0QXV0aFdpdGhDb2RlKGNvZGUsIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEF1dGhXaXRoQ29kZShcbiAgICBjb2RlOiBhbnksXG4gICAgcmVzb2x2ZTogKHZhbHVlPzoge30gfCBQcm9taXNlTGlrZTx7fT4pID0+IHZvaWRcbiAgKSB7XG4gICAgLypcbiAgICAgIGN1cmwgLVggUE9TVCBcbiAgICAgICAgLUggXCJBcGktVmVyc2lvbjogYWxwaGFcIiBcbiAgICAgICAgLUggXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cIiBcbiAgICAgICAgLWQgJ3tcbiAgICAgICAgXCJncmFudF90eXBlXCI6IFwiYXV0aG9yaXphdGlvbl9jb2RlXCIsXG4gICAgICAgIFwiY2xpZW50X3NlY3JldFwiOiBcIjxpbnNlcnQgeW91ciBzZWNyZXQ+XCIsXG4gICAgICAgIFwiY29kZVwiOiBcIjxpbnNlcnQgeW91ciBhdXRob3JpemF0aW9uIGNvZGU+XCIsXG4gICAgICAgIFwiY2xpZW50X2lkXCI6IFwiPGluc2VydCB5b3VyIGNsaWVudCBpZD5cIixcbiAgICAgICAgXCJyZWRpcmVjdF91cmlcIjogXCJodHRwczovL2xvY2FsaG9zdDozMDAwL2p1c3RfYW5fZXhhbXBsZVwiXG4gICAgICB9JyBcImh0dHBzOi8vYXBpLmZyZXNoYm9va3MuY29tL2F1dGgvb2F1dGgvdG9rZW5cIiAvL1xuXG4gICAgICAqL1xuICAgIGxldCB1cmwgPSBcIi90b2tlblwiO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlICYmIHRoaXMuZW5hYmxlUHJveHkpIHtcbiAgICAgIHVybCA9IFwiL3Rva2VuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9hY2NvdW50cy56b2hvLmNvbS9vYXV0aC92Mi90b2tlblwiO1xuICAgIH1cbiAgICAvL0FwcGVuZCBwYXJhbXMgaW4gcXVlcnkgc3RyaW5nIGZvIFpPSE9cbiAgICB1cmwgKz1cbiAgICAgIFwiP1wiICtcbiAgICAgIFwiY29kZT1cIiArXG4gICAgICBjb2RlICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiY2xpZW50X2lkPVwiICtcbiAgICAgIHRoaXMuY2xpZW50X2lkICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiY2xpZW50X3NlY3JldD1cIiArXG4gICAgICB0aGlzLmNsaWVudF9zZWNyZXQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJyZWRpcmVjdF91cmk9XCIgK1xuICAgICAgdGhpcy5yZWRpcmVjdF91cmkgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJncmFudF90eXBlPVwiICtcbiAgICAgIFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXBpLVZlcnNpb25cIiwgXCJhbHBoYVwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcbiAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdF91cmksXG4gICAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiXG4gICAgfTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGJvZHksIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gd2UndmUgZ290IGJhY2sgdGhlIHJhdyBkYXRhLCBub3cgZ2VuZXJhdGUgdGhlIGNvcmUgc2NoZWR1bGUgZGF0YVxuICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcImF1dGhcIiwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oZWxwZXIubHMuc2V0KFwicmVmcmVzaF90b2tlblwiLCBkYXRhLnJlZnJlc2hfdG9rZW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEF1dGhXaXRoQXV0aChcbiAgICBhdXRoOiBhbnksXG4gICAgcmVmcmVzaF90b2tlbjogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIFBPU1QgXG4gICAgICAgIC1IIFwiQXBpLVZlcnNpb246IGFscGhhXCIgXG4gICAgICAgIC1IIFwiQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXCIgXG4gICAgICAgIC1kICd7XG4gICAgICAgIFwiZ3JhbnRfdHlwZVwiOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICAgICAgICBcImNsaWVudF9zZWNyZXRcIjogXCI8aW5zZXJ0IHlvdXIgc2VjcmV0PlwiLFxuICAgICAgICBcImNvZGVcIjogXCI8aW5zZXJ0IHlvdXIgYXV0aG9yaXphdGlvbiBjb2RlPlwiLFxuICAgICAgICBcImNsaWVudF9pZFwiOiBcIjxpbnNlcnQgeW91ciBjbGllbnQgaWQ+XCIsXG4gICAgICAgIFwicmVkaXJlY3RfdXJpXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9qdXN0X2FuX2V4YW1wbGVcIlxuICAgICAgfScgXCJodHRwczovL2FwaS5mcmVzaGJvb2tzLmNvbS9hdXRoL29hdXRoL3Rva2VuXCIgLy9cblxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvdG9rZW5cIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi90b2tlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vYWNjb3VudHMuem9oby5jb20vb2F1dGgvdjIvdG9rZW5cIjtcbiAgICB9XG4gICAgdXJsICs9XG4gICAgICBcIj9cIiArXG4gICAgICBcInJlZnJlc2hfdG9rZW49XCIgK1xuICAgICAgcmVmcmVzaF90b2tlbiArXG4gICAgICBcIiZcIiArXG4gICAgICBcImNsaWVudF9pZD1cIiArXG4gICAgICB0aGlzLmNsaWVudF9pZCArXG4gICAgICBcIiZcIiArXG4gICAgICBcImNsaWVudF9zZWNyZXQ9XCIgK1xuICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwicmVkaXJlY3RfdXJpPVwiICtcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJpICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZ3JhbnRfdHlwZT1cIiArXG4gICAgICBcInJlZnJlc2hfdG9rZW5cIjtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBcGktVmVyc2lvblwiLCBcImFscGhhXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBsZXQgYm9keSA9IHtcbiAgICAgIHJlZnJlc2hfdG9rZW46IGF1dGgucmVmcmVzaF90b2tlbixcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCJcbiAgICB9O1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyB3ZSd2ZSBnb3QgYmFjayB0aGUgcmF3IGRhdGEsIG5vdyBnZW5lcmF0ZSB0aGUgY29yZSBzY2hlZHVsZSBkYXRhXG4gICAgICAgIC8vIGFuZCBzYXZlIHRoZSBkYXRhIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5oZWxwZXIubHMuc2V0KFwiYXV0aFwiLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW52b2ljZShcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgaW52b2ljZV9pZDogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIEdFVCBcbiAgICAgIC1IICdBdXRob3JpemF0aW9uOiBCZWFyZXIgODc2MzMzMTAwOGNmMjFjZGY3YTZhZDNhMzY3NTM3MzRlNTk5ZmY5NmQ0YjgwNTQ0NDQ2ZGE0MDMzMTkxZGQwMCcgXG4gICAgICAtSCAnQXBpLVZlcnNpb246IGFscGhhJyBcbiAgICAgIC1IICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24nIFxuICAgICAgaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYWNjb3VudGluZy9hY2NvdW50L0s1VnhhL2ludm9pY2VzL2ludm9pY2VzP3NlYXJjaCU1Qm5vdGVzJTVEPVdlZG5lc2RheVxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvZnJlc2hib29rc1wiO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlICYmIHRoaXMuZW5hYmxlUHJveHkpIHtcbiAgICAgIHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gXCJodHRwczovL2ludm9pY2Uuem9oby5jb20vYXBpL3YzXCI7XG4gICAgfVxuICAgIHVybCArPSBcIi9pbnZvaWNlcy9cIiArIGludm9pY2VfaWQ7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJab2hvLW9hdXRodG9rZW4gXCIgKyBhY2Nlc3NfdG9rZW4pO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1jb20tem9oby1pbnZvaWNlLW9yZ2FuaXphdGlvbmlkXCIsIGFjY291bnRfaWQpO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5yZXF1ZXN0KHVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyB3ZSd2ZSBnb3QgYmFjayB0aGUgcmF3IGRhdGEsIG5vdyBnZW5lcmF0ZSB0aGUgY29yZSBzY2hlZHVsZSBkYXRhXG4gICAgICAgIC8vIGFuZCBzYXZlIHRoZSBkYXRhIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIF9nZXRJdGVtKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWQ6IHN0cmluZyxcbiAgICBpdGVtX2lkOiBhbnksXG4gICAgcmVzb2x2ZTogKHZhbHVlPzoge30gfCBQcm9taXNlTGlrZTx7fT4pID0+IHZvaWRcbiAgKSB7XG4gICAgLypcbiAgICAgIGN1cmwgLVggR0VUIFxuICAgICAgLUggJ0F1dGhvcml6YXRpb246IEJlYXJlciA4NzYzMzMxMDA4Y2YyMWNkZjdhNmFkM2EzNjc1MzczNGU1OTlmZjk2ZDRiODA1NDQ0NDZkYTQwMzMxOTFkZDAwJyBcbiAgICAgIC1IICdBcGktVmVyc2lvbjogYWxwaGEnIFxuICAgICAgLUggJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbicgXG4gICAgICBodHRwczovL2FwaS5mcmVzaGJvb2tzLmNvbS9hY2NvdW50aW5nL2FjY291bnQvSzVWeGEvaW52b2ljZXMvaW52b2ljZXM/c2VhcmNoJTVCbm90ZXMlNUQ9V2VkbmVzZGF5XG4gICAgICAqL1xuICAgIGxldCB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoXCJjb3JlXCIpID09IHRydWUgJiYgdGhpcy5lbmFibGVQcm94eSkge1xuICAgICAgdXJsID0gXCIvZnJlc2hib29rc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vaW52b2ljZS56b2hvLmNvbS9hcGkvdjNcIjtcbiAgICB9XG4gICAgdXJsICs9IFwiL2l0ZW1zL1wiICsgaXRlbV9pZDtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIlpvaG8tb2F1dGh0b2tlbiBcIiArIGFjY2Vzc190b2tlbik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJYLWNvbS16b2hvLWludm9pY2Utb3JnYW5pemF0aW9uaWRcIiwgYWNjb3VudF9pZCk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnJlcXVlc3QodXJsLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgLy8gYW5kIHNhdmUgdGhlIGRhdGEgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2dldEludm9pY2VzKFxuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nLFxuICAgIGFjY291bnRfaWQ6IHN0cmluZyxcbiAgICBzZWFyY2hTdHJpbmc6IGFueSxcbiAgICByZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZFxuICApIHtcbiAgICAvKlxuICAgICAgY3VybCAtWCBHRVQgXG4gICAgICAtSCAnQXV0aG9yaXphdGlvbjogQmVhcmVyIDg3NjMzMzEwMDhjZjIxY2RmN2E2YWQzYTM2NzUzNzM0ZTU5OWZmOTZkNGI4MDU0NDQ0NmRhNDAzMzE5MWRkMDAnIFxuICAgICAgLUggJ0FwaS1WZXJzaW9uOiBhbHBoYScgXG4gICAgICAtSCAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJyBcbiAgICAgIGh0dHBzOi8vYXBpLmZyZXNoYm9va3MuY29tL2FjY291bnRpbmcvYWNjb3VudC9LNVZ4YS9pbnZvaWNlcy9pbnZvaWNlcz9zZWFyY2glNUJub3RlcyU1RD1XZWRuZXNkYXlcbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9pbnZvaWNlLnpvaG8uY29tL2FwaS92M1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIvaW52b2ljZXM/XCIgKyBzZWFyY2hTdHJpbmc7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJab2hvLW9hdXRodG9rZW4gXCIgKyBhY2Nlc3NfdG9rZW4pO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1jb20tem9oby1pbnZvaWNlLW9yZ2FuaXphdGlvbmlkXCIsIGFjY291bnRfaWQpO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5yZXF1ZXN0KHVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyB3ZSd2ZSBnb3QgYmFjayB0aGUgcmF3IGRhdGEsIG5vdyBnZW5lcmF0ZSB0aGUgY29yZSBzY2hlZHVsZSBkYXRhXG4gICAgICAgIC8vIGFuZCBzYXZlIHRoZSBkYXRhIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QnVzaW5lc3NfbWVtYmVyc2hpcHMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgcmVzb2x2ZTogKHZhbHVlPzoge30gfCBQcm9taXNlTGlrZTx7fT4pID0+IHZvaWRcbiAgKSB7XG4gICAgLypcbiAgICAgIGN1cmwgLVggR0VUIFxcXG4gICAgICAtSCAnQXV0aG9yaXphdGlvbjogQmVhcmVyIDxpbnNlcnQgeW91ciBiZWFyZXIgaGVyZT4nIFxcXG4gICAgICAtSCAnQXBpLVZlcnNpb246IGFscGhhJyBcXFxuICAgICAgLUggJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbicgXFxcbiAgICAgIGh0dHBzOi8vYXBpLmZyZXNoYm9va3MuY29tL2F1dGgvYXBpL3YxL3VzZXJzL21lXG4gICAgICAqL1xuICAgIGxldCB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoXCJjb3JlXCIpID09IHRydWUgJiYgdGhpcy5lbmFibGVQcm94eSkge1xuICAgICAgdXJsID0gXCIvZnJlc2hib29rc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vaW52b2ljZS56b2hvLmNvbS9hcGkvdjNcIjtcbiAgICB9XG4gICAgdXJsICs9IFwiL29yZ2FuaXphdGlvbnNcIjtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXBpLVZlcnNpb25cIiwgXCJhbHBoYVwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJab2hvLW9hdXRodG9rZW4gXCIgKyBhY2Nlc3NfdG9rZW4pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5yZXF1ZXN0KHVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAvLyB3ZSd2ZSBnb3QgYmFjayB0aGUgcmF3IGRhdGEsIG5vdyBnZW5lcmF0ZSB0aGUgY29yZSBzY2hlZHVsZSBkYXRhXG4gICAgICAgICAgLy8gYW5kIHNhdmUgdGhlIGRhdGEgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAvL0VSUk9SXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAvL1JlbW92ZSBjb2RlIGFuZCBhdXRoXG4gICAgICAgICAgICB0aGlzLnJlc2V0QXBwVmFyaWFibGVUb0xvZ2luQWdhaW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbiAgZ2V0UGFyYW1ldGVyQnlOYW1lID0gKG5hbWUsIHVybCA9IG51bGwpID0+IHtcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xuICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVzZXRBcHBWYXJpYWJsZVRvTG9naW5BZ2FpbigpIHtcbiAgICB0aGlzLmhlbHBlci5scy5yZW1vdmUoXCJhdXRoXCIpO1xuICAgIHRoaXMuaGVscGVyLmxzLnJlbW92ZShcImNvZGVcIik7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoXCJjb3JlXCIpID09IHRydWUpIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW47XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL2ZyZXNoLWJvb2tzLWFwaS9mcmVzaC1ib29rcy1hcGkudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgSGVscGVyUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVscGVyUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIEhlbHBlclByb3ZpZGVyIFByb3ZpZGVyXCIpO1xuICB9XG5cbiAgbHMgPSB7XG4gICAgc2V0OiAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDoga2V5ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlbW92ZToga2V5ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvaGVscGVyL2hlbHBlci50cyJdLCJzb3VyY2VSb290IjoiIn0=