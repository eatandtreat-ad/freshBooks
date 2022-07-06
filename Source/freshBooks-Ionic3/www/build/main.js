webpackJsonp([3],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(285);
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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtractInvoiceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(285);
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
 * Generated class for the ExtractInvoiceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtractInvoiceDetailPage = /** @class */ (function () {
    function ExtractInvoiceDetailPage(navCtrl, navParams, alertCtrl, loadingCtrl, freshBooksApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.freshBooksApiProvider = freshBooksApiProvider;
        this.invoices = [];
        this.invoiceItems = [];
        this.business_memberships = [];
        this.window = window;
        this.extractInvoices = function () {
            _this.showLoading();
            var toDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.toDate).format("YYYY-MM-DD");
            var fromDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.fromDate).format("YYYY-MM-DD");
            _this.invoices = [];
            _this.freshBooksApiProvider
                .getInvoices(_this.selected_business_membership, ("due_date_start=" + fromDate + "&due_date_end=" + toDate + "&sort_column=due_date"))
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
                _this.extractJsonForCsv(_this.invoices);
                // this.calculatePCs();
                return;
            }
            var invoice = _this.invoices[_this.extractedCount];
            _this.freshBooksApiProvider
                .getInvoice(_this.selected_business_membership, invoice.invoice_id)
                .then(function (data) {
                Object.assign(invoice, data.invoice);
                // invoice.lines = data.invoice.line_items;
                // this.addItemsToDisplay(data.invoice.line_items);
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
        this.jsonDataForCsv = [];
        this.extractJsonForCsv = function (invoices) {
            var rowCount = 0;
            _this.jsonDataForCsv = [];
            console.log(invoices);
            __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.forEach(invoices, function (invoice) {
                rowCount++;
                var item = invoice.line_items[0];
                _this.jsonDataForCsv.push({
                    "ID": invoice.invoice_number,
                    "Item Name": item.quantity + " - " + item.name,
                    // "Quantity Ordered": item.quantity,
                    "Due Date": __WEBPACK_IMPORTED_MODULE_3_moment___default()(invoice.due_date).format("ddd DD-MM-YY") + " - " + invoice.cf_time,
                    // "Delivery Time": invoice.cf_time,
                    "Total": invoice.balance,
                    "Status": invoice.status,
                    // "Customer Name": invoice.contact_persons_details[0].first_name + " - " + invoice.contact_persons_details[0].mobile,
                    "Customer Name": invoice.customer_name + " |\n " + invoice.shipping_address.address + " |\n " + invoice.shipping_address.city,
                });
                for (var i = 1; i < invoice.line_items.length; i++) {
                    var item_1 = invoice.line_items[i];
                    _this.jsonDataForCsv.push({
                        "ID": "",
                        "Item Name": item_1.quantity + " - " + item_1.name,
                        // "Quantity Ordered": item.quantity,
                        "Due Date": "",
                        // "Delivery Time": invoice.cf_time,
                        "Total": "",
                        "Status": "",
                        // "Customer Name": invoice.contact_persons_details[0].first_name + " - " + invoice.contact_persons_details[0].mobile,
                        "Customer Name": "",
                    });
                }
                // _.forEach(invoice.line_items, (item) => {
                //   this.jsonDataForCsv.push({
                //     "ID": invoice.invoice_number,//rowCount,
                //     "Item Name": item.quantity + " - " + item.name,
                //     // "Quantity Ordered": item.quantity,
                //     "Due Date": moment(invoice.due_date).format("ddd DD-MM-YY") + " - " + invoice.cf_time,
                //     // "Delivery Time": invoice.cf_time,
                //     "Total": invoice.balance,
                //     "Status": invoice.status,
                //     // "Customer Name": invoice.contact_persons_details[0].first_name + " - " + invoice.contact_persons_details[0].mobile,
                //     "Customer Name": invoice.customer_name + " |\n " + invoice.shipping_address.address + " |\n " + invoice.shipping_address.city,
                //     // "Shipping Street 1": invoice.shipping_address.address,
                //     // "Shipping City": invoice.shipping_address.city
                //   });
                // });
            });
            debugger;
            var csv = _this.ConvertToCSV(_this.jsonDataForCsv, __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.keys(_this.jsonDataForCsv[0]));
            console.log(csv);
            // const a = document.createElement('a');
            var blob = new Blob([csv], { type: 'text/csv' });
            // const url = window.URL.createObjectURL(blob);
            // a.href = url;
            // a.download = 'myFile.csv';
            // a.click();
            // window.URL.revokeObjectURL(url);
            // a.remove();
            //send file on email Use ZOHO
            var toDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.toDate).format("YYYY-MM-DD");
            var fromDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.fromDate).format("YYYY-MM-DD");
            var email = prompt("Please enter your name", "lsalmskari@scad.gov.ae");
            var mailBody = {
                "send_from_org_email_id": true,
                "to_mail_ids": [
                    "mullahkhan@scad.gov.ae",
                    email
                    // "eatandtreat.ad@gmail.com"
                ],
                "cc_mail_ids": [],
                "subject": ("Invoices from " + fromDate + " - " + toDate),
                "body": "Save below lines as CSV,<br/><hr/><br/><br/> " + csv + "<br/><br/><hr/>"
            };
            _this.freshBooksApiProvider.sendEmail(_this.selected_business_membership, mailBody).then(function (data) {
                if (data.code == 0)
                    alert("Data sent on Email");
                console.log(data);
            });
            // Dummy implementation for Desktop download purpose
            try {
                // const data: string = encodeURI(csv);
                // const link: HTMLElement = document.createElement('a');
                // link.setAttribute('href', data);
                // link.setAttribute('download', 'myFile.csv');
                // link.click();
            }
            catch (error) {
            }
            try {
                var window_1 = _this.window;
                _this.window.requestFileSystem(_this.window.LocalFileSystem.PERSISTENT, 0, function (fs) {
                    console.log('file system open: ' + fs.name);
                    fs.root.getFile("report.csv", { create: true, exclusive: false }, function (fileEntry) {
                        console.log("fileEntry is file?" + fileEntry.isFile.toString());
                        // fileEntry.name == 'someFile.txt'
                        // fileEntry.fullPath == '/someFile.txt'
                        window_1.FileHandlers.writeFile(fileEntry, blob);
                    }, function (err) {
                        console.log(err);
                    });
                }, function (err) { console.log(err); });
            }
            catch (error) {
            }
        };
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
        this.window.FileHandlers = {
            writeFile: function (fileEntry, dataObj) {
                // Create a FileWriter object for our FileEntry (log.txt).
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        console.log("Successful file write...");
                        // window.FileHandlers.readFile(fileEntry);
                    };
                    fileWriter.onerror = function (e) {
                        console.log("Failed file write: " + e.toString());
                    };
                    // If data object is not passed in,
                    // create a new Blob instead.
                    if (!dataObj) {
                        dataObj = new Blob(['some file data'], { type: 'text/plain' });
                    }
                    fileWriter.write(dataObj);
                });
            },
            readFile: function (fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        console.log("Successful file read: " + this.result);
                        // displayFileData(fileEntry.fullPath + ": " + this.result);
                    };
                    reader.readAsText(file);
                }, function (err) {
                    console.log(err);
                });
            }
        };
    }
    ExtractInvoiceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtractInvoiceDetailPage');
    };
    ExtractInvoiceDetailPage.prototype.ConvertToCSV = function (objArray, headerList) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = 'S.No,';
        for (var index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = (i + 1) + '';
            for (var index in headerList) {
                var head = headerList[index];
                line += ',"' + array[i][head] + '"';
            }
            str += line + '\r\n';
        }
        return str;
    };
    ExtractInvoiceDetailPage.prototype.hideLoading = function () {
        this.loading.dismiss();
        this.loading = null;
    };
    ExtractInvoiceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-extract-invoice-detail',template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/extract-invoice-detail/extract-invoice-detail.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Total Invoices in duration </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-item>\n    <ion-label>From Date</ion-label>\n    {{myDate}}\n    <ion-datetime\n      displayFormat="DDD DD MMMM YYYY"\n      pickerFormat="DDD DD MMMM YYYY"\n      [(ngModel)]="fromDate"\n    >\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>To Date</ion-label>\n    {{myDate}}\n    <ion-datetime\n      displayFormat="DDD DD MMMM YYYY"\n      pickerFormat="DDD DD MMMM YYYY"\n      [(ngModel)]="toDate"\n    ></ion-datetime>\n  </ion-item>\n  <ion-toolbar color="light">\n    Extracted Invoices {{extractedCount}} of {{invoices.length}}\n    <ion-buttons end>\n      <button\n        ion-button\n        round\n        outline\n        item-end\n        icon-end\n        color="dark"\n        (click)="extractInvoices()"\n        [disabled]="extractedCount<invoices.length"\n      >\n        {{extractedCount>=invoices.length?\'Extract\':\'Please Wait...\'}}\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  Material Summary\n  <ion-list padding>\n    <ion-item no-padding text-wrap *ngFor="let item of materialData">\n      <h2>{{item.label}}</h2>\n      <ion-avatar item-end>\n        <h2>{{item.quantity}}</h2>\n      </ion-avatar>\n    </ion-item>\n  </ion-list>\n  All Items in Invoice\n  <ion-list padding>\n    <ion-item\n      no-padding\n      text-wrap\n      *ngFor="let item of getInOrder(invoiceItems)"\n    >\n      <h2>{{item.name}}</h2>\n      <p>{{item.description }}</p>\n      <p>{{item.rate}} {{item.rate*item.quantity}}</p>\n      <ion-avatar item-end>\n        <h2>{{item.quantity}}</h2>\n        <p>@{{item.rate}}</p>\n      </ion-avatar>\n\n      <ion-avatar item-end>\n        <p>{{item.rate*item.quantity}}</p>\n      </ion-avatar>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/extract-invoice-detail/extract-invoice-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__["a" /* FreshBooksApiProvider */]])
    ], ExtractInvoiceDetailPage);
    return ExtractInvoiceDetailPage;
}());

//# sourceMappingURL=extract-invoice-detail.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/extract-invoice-detail/extract-invoice-detail.module": [
		408,
		2
	],
	"../pages/modal/modal.module": [
		406,
		0
	],
	"../pages/week-orders/week-orders.module": [
		407,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(41);
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_week_orders_week_orders__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_code_push__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_helper_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_extract_invoice_detail_extract_invoice_detail__ = __webpack_require__(106);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_week_orders_week_orders__["a" /* WeekOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_extract_invoice_detail_extract_invoice_detail__["a" /* ExtractInvoiceDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/week-orders/week-orders.module#WeekOrdersPageModule', name: 'WeekOrdersPage', segment: 'week-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extract-invoice-detail/extract-invoice-detail.module#ExtractInvoiceDetailPageModule', name: 'ExtractInvoiceDetailPage', segment: 'extract-invoice-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_week_orders_week_orders__["a" /* WeekOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_extract_invoice_detail_extract_invoice_detail__["a" /* ExtractInvoiceDetailPage */]
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

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 162,
	"./af.js": 162,
	"./ar": 163,
	"./ar-dz": 164,
	"./ar-dz.js": 164,
	"./ar-kw": 165,
	"./ar-kw.js": 165,
	"./ar-ly": 166,
	"./ar-ly.js": 166,
	"./ar-ma": 167,
	"./ar-ma.js": 167,
	"./ar-sa": 168,
	"./ar-sa.js": 168,
	"./ar-tn": 169,
	"./ar-tn.js": 169,
	"./ar.js": 163,
	"./az": 170,
	"./az.js": 170,
	"./be": 171,
	"./be.js": 171,
	"./bg": 172,
	"./bg.js": 172,
	"./bm": 173,
	"./bm.js": 173,
	"./bn": 174,
	"./bn.js": 174,
	"./bo": 175,
	"./bo.js": 175,
	"./br": 176,
	"./br.js": 176,
	"./bs": 177,
	"./bs.js": 177,
	"./ca": 178,
	"./ca.js": 178,
	"./cs": 179,
	"./cs.js": 179,
	"./cv": 180,
	"./cv.js": 180,
	"./cy": 181,
	"./cy.js": 181,
	"./da": 182,
	"./da.js": 182,
	"./de": 183,
	"./de-at": 184,
	"./de-at.js": 184,
	"./de-ch": 185,
	"./de-ch.js": 185,
	"./de.js": 183,
	"./dv": 186,
	"./dv.js": 186,
	"./el": 187,
	"./el.js": 187,
	"./en-au": 188,
	"./en-au.js": 188,
	"./en-ca": 189,
	"./en-ca.js": 189,
	"./en-gb": 190,
	"./en-gb.js": 190,
	"./en-ie": 191,
	"./en-ie.js": 191,
	"./en-il": 192,
	"./en-il.js": 192,
	"./en-nz": 193,
	"./en-nz.js": 193,
	"./eo": 194,
	"./eo.js": 194,
	"./es": 195,
	"./es-do": 196,
	"./es-do.js": 196,
	"./es-us": 197,
	"./es-us.js": 197,
	"./es.js": 195,
	"./et": 198,
	"./et.js": 198,
	"./eu": 199,
	"./eu.js": 199,
	"./fa": 200,
	"./fa.js": 200,
	"./fi": 201,
	"./fi.js": 201,
	"./fo": 202,
	"./fo.js": 202,
	"./fr": 203,
	"./fr-ca": 204,
	"./fr-ca.js": 204,
	"./fr-ch": 205,
	"./fr-ch.js": 205,
	"./fr.js": 203,
	"./fy": 206,
	"./fy.js": 206,
	"./gd": 207,
	"./gd.js": 207,
	"./gl": 208,
	"./gl.js": 208,
	"./gom-latn": 209,
	"./gom-latn.js": 209,
	"./gu": 210,
	"./gu.js": 210,
	"./he": 211,
	"./he.js": 211,
	"./hi": 212,
	"./hi.js": 212,
	"./hr": 213,
	"./hr.js": 213,
	"./hu": 214,
	"./hu.js": 214,
	"./hy-am": 215,
	"./hy-am.js": 215,
	"./id": 216,
	"./id.js": 216,
	"./is": 217,
	"./is.js": 217,
	"./it": 218,
	"./it.js": 218,
	"./ja": 219,
	"./ja.js": 219,
	"./jv": 220,
	"./jv.js": 220,
	"./ka": 221,
	"./ka.js": 221,
	"./kk": 222,
	"./kk.js": 222,
	"./km": 223,
	"./km.js": 223,
	"./kn": 224,
	"./kn.js": 224,
	"./ko": 225,
	"./ko.js": 225,
	"./ky": 226,
	"./ky.js": 226,
	"./lb": 227,
	"./lb.js": 227,
	"./lo": 228,
	"./lo.js": 228,
	"./lt": 229,
	"./lt.js": 229,
	"./lv": 230,
	"./lv.js": 230,
	"./me": 231,
	"./me.js": 231,
	"./mi": 232,
	"./mi.js": 232,
	"./mk": 233,
	"./mk.js": 233,
	"./ml": 234,
	"./ml.js": 234,
	"./mn": 235,
	"./mn.js": 235,
	"./mr": 236,
	"./mr.js": 236,
	"./ms": 237,
	"./ms-my": 238,
	"./ms-my.js": 238,
	"./ms.js": 237,
	"./mt": 239,
	"./mt.js": 239,
	"./my": 240,
	"./my.js": 240,
	"./nb": 241,
	"./nb.js": 241,
	"./ne": 242,
	"./ne.js": 242,
	"./nl": 243,
	"./nl-be": 244,
	"./nl-be.js": 244,
	"./nl.js": 243,
	"./nn": 245,
	"./nn.js": 245,
	"./pa-in": 246,
	"./pa-in.js": 246,
	"./pl": 247,
	"./pl.js": 247,
	"./pt": 248,
	"./pt-br": 249,
	"./pt-br.js": 249,
	"./pt.js": 248,
	"./ro": 250,
	"./ro.js": 250,
	"./ru": 251,
	"./ru.js": 251,
	"./sd": 252,
	"./sd.js": 252,
	"./se": 253,
	"./se.js": 253,
	"./si": 254,
	"./si.js": 254,
	"./sk": 255,
	"./sk.js": 255,
	"./sl": 256,
	"./sl.js": 256,
	"./sq": 257,
	"./sq.js": 257,
	"./sr": 258,
	"./sr-cyrl": 259,
	"./sr-cyrl.js": 259,
	"./sr.js": 258,
	"./ss": 260,
	"./ss.js": 260,
	"./sv": 261,
	"./sv.js": 261,
	"./sw": 262,
	"./sw.js": 262,
	"./ta": 263,
	"./ta.js": 263,
	"./te": 264,
	"./te.js": 264,
	"./tet": 265,
	"./tet.js": 265,
	"./tg": 266,
	"./tg.js": 266,
	"./th": 267,
	"./th.js": 267,
	"./tl-ph": 268,
	"./tl-ph.js": 268,
	"./tlh": 269,
	"./tlh.js": 269,
	"./tr": 270,
	"./tr.js": 270,
	"./tzl": 271,
	"./tzl.js": 271,
	"./tzm": 272,
	"./tzm-latn": 273,
	"./tzm-latn.js": 273,
	"./tzm.js": 272,
	"./ug-cn": 274,
	"./ug-cn.js": 274,
	"./uk": 275,
	"./uk.js": 275,
	"./ur": 276,
	"./ur.js": 276,
	"./uz": 277,
	"./uz-latn": 278,
	"./uz-latn.js": 278,
	"./uz.js": 277,
	"./vi": 279,
	"./vi.js": 279,
	"./x-pseudo": 280,
	"./x-pseudo.js": 280,
	"./yo": 281,
	"./yo.js": 281,
	"./zh-cn": 282,
	"./zh-cn.js": 282,
	"./zh-hk": 283,
	"./zh-hk.js": 283,
	"./zh-tw": 284,
	"./zh-tw.js": 284
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
webpackContext.id = 386;

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_week_orders_week_orders__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fresh_books_api_fresh_books_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_extract_invoice_detail_extract_invoice_detail__ = __webpack_require__(106);
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
            { title: "Week Orders", component: __WEBPACK_IMPORTED_MODULE_5__pages_week_orders_week_orders__["a" /* WeekOrdersPage */] },
            { title: "Extract Invoice Detail", component: __WEBPACK_IMPORTED_MODULE_10__pages_extract_invoice_detail_extract_invoice_detail__["a" /* ExtractInvoiceDetailPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n\n\n  </ion-content>\n  <ion-footer>\n    <ion-navbar text-center color="light" (click)="closeModal()">\n      <ion-title>\n        <ion-icon></ion-icon>\n        v # 2.8\n      </ion-title>\n    </ion-navbar>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/app/app.html"*/
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreshBooksApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_code_push__ = __webpack_require__(160);
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
        this.sendEmail = function (account_id, mailBody) {
            return new Promise(function (resolve) {
                _this.getAuthorization().then(function (auth) {
                    _this._SendEmail(auth.access_token, account_id, mailBody, resolve);
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
            try {
                var parsedUrl = new URL(window.location.href);
                var baseUrl = parsedUrl.origin;
                if (baseUrl.includes("github")) {
                    this.redirect_uri = "https://eatandtreat-ad.github.io/freshBooks/";
                    this.client_secret = "bd983560d6e62b177627de0ceab61d9de264975385";
                    this.client_id = "1000.RPMVIDKO99TL3UVG5DDJFUQM360SXH";
                }
            }
            catch (error) {
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
    FreshBooksApiProvider.prototype._SendEmail = function (access_token, account_id, mailBody, resolve) {
        /*
          
      // $ curl https://invoice.zoho.com/api/v3/contacts/{contact_id}/statements/email
      // -X POST
      // -H "X-com-zoho-invoice-organizationid: 10234695"
      // -H "Content-Type: application/json;charset=UTF-8"
      // -H "Authorization: Zoho-oauthtoken 1000.41d9f2cfbd1b7a8f9e314b7aff7bc2d1.8fcc9810810a216793f385b9dd6e125f"
      // -d '{"field":"value","field":"value"}'
          */
        var url = "/freshbooks";
        if (this.platform.is("core") == true && this.enableProxy) {
            url = "/freshbooks";
        }
        else {
            url = "https://invoice.zoho.com/api/v3";
        }
        url += "/contacts/1764297000000083999/statements/email";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Zoho-oauthtoken " + access_token);
        headers.append("X-com-zoho-invoice-organizationid", account_id);
        var body = mailBody;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http
            .post(url, body, options)
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

},[329]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVycy50cyIsIi4uLy4uL3NyYy9wYWdlcy9leHRyYWN0LWludm9pY2UtZGV0YWlsL2V4dHJhY3QtaW52b2ljZS1kZXRhaWwudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9lc201IGxhenkiLCIuLi8uLi9zcmMgbGF6eSIsIi4uLy4uL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCIuLi8uLi9zcmMvYXBwL21haW4udHMiLCIuLi8uLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBeLy4vLy4qJCIsIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9wYWdlcy9saXN0L2xpc3QudHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2ZyZXNoLWJvb2tzLWFwaS9mcmVzaC1ib29rcy1hcGkudHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2hlbHBlci9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNtRDtBQUNMO0FBQzVEO0FBQ0w7QUFFdkI7Ozs7O0dBS0c7QUFPSDtJQVFFLHdCQUFtQixPQUFzQixFQUNoQyxTQUFvQixFQUNuQixTQUEwQixFQUMzQixXQUE4QixFQUM5QixxQkFBNEM7UUFKckQsaUJBY0M7UUFka0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVHJELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIseUJBQW9C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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QyxDQUFDO29CQUN4RCxPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxHQUFHLEVBQUUsYUFBRztnQkFDTixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQU87b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxFQUFFLGFBQUc7Z0JBQ1QsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFPO29CQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQztRQXJCQSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUhVLGNBQWM7UUFEMUIseUVBQVUsRUFBRTs7T0FDQSxjQUFjLENBd0IxQjtJQUFELHFCQUFDO0NBQUE7QUF4QjBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZSwgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBBbGVydENvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaSc7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXZWVrT3JkZXJzUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXdlZWstb3JkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICd3ZWVrLW9yZGVycy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgV2Vla09yZGVyc1BhZ2Uge1xuICBmcm9tRGF0ZTogYW55O1xuICB0b0RhdGU6IGFueTtcbiAgaW52b2ljZXM6IGFueSA9IFtdO1xuICBpbnZvaWNlSXRlbXM6IGFueSA9IFtdO1xuICBidXNpbmVzc19tZW1iZXJzaGlwczogYW55ID0gW107XG4gIHNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwdWJsaWMgZnJlc2hCb29rc0FwaVByb3ZpZGVyOiBGcmVzaEJvb2tzQXBpUHJvdmlkZXIpIHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXIuZ2V0QnVzaW5lc3NfbWVtYmVyc2hpcHMoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuYnVzaW5lc3NfbWVtYmVyc2hpcHMgPSBkYXRhLm9yZ2FuaXphdGlvbnM7XG4gICAgICB0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAgPSB0aGlzLmJ1c2luZXNzX21lbWJlcnNoaXBzWzBdLm9yZ2FuaXphdGlvbl9pZDtcbiAgICAgIHRoaXMuZnJvbURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy50b0RhdGUgPSBtb21lbnQoKS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gICAgfSk7XG4gIH1cblxuICBleHRyYWN0SW52b2ljZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIGxldCB0b0RhdGUgPSBtb21lbnQodGhpcy50b0RhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgbGV0IGZyb21EYXRlID0gbW9tZW50KHRoaXMuZnJvbURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgIC5nZXRJbnZvaWNlcyh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIChcImR1ZV9kYXRlX3N0YXJ0PVwiICsgZnJvbURhdGUgKyBcIiZkdWVfZGF0ZV9lbmQ9XCIgKyB0b0RhdGUpKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmludm9pY2VzID0gZGF0YS5pbnZvaWNlcztcbiAgICAgICAgdGhpcy5leHRyYWN0ZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMubWF0ZXJpYWxEYXRhID0gW107XG4gICAgICAgIHRoaXMuZXh0cmFjdEludm9pY2VJdGVtcygpO1xuICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLy8gZXh0cmFjdEl0ZW1zQ29udGVudHMgPSAoaXRlbV9pZCkgPT4ge1xuICAvLyAgIC8vIGxldCBpdGVtX2lkID0gXCIxNzY0Mjk3MDAwMDAwNjY5MDAxXCI7XG4gIC8vICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgLy8gICAgIC5nZXRJdGVtRGV0YWlsKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaXRlbV9pZClcbiAgLy8gICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcblxuICAvLyAgICAgICAvLyB0aGlzLnNob3dJdGVtcyhkYXRhKTtcbiAgLy8gICAgIH0pO1xuICAvLyB9XG5cbiAgZXh0cmFjdGVkQ291bnQgPSAwO1xuICBleHRyYWN0SW52b2ljZUl0ZW1zID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmV4dHJhY3RlZENvdW50ID49IHRoaXMuaW52b2ljZXMubGVuZ3RoKSB7XG4gICAgICAvL0RPTkVcbiAgICAgIHRoaXMuY2FsY3VsYXRlUENzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGludm9pY2UgPSB0aGlzLmludm9pY2VzW3RoaXMuZXh0cmFjdGVkQ291bnRdO1xuICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICAgICAuZ2V0SW52b2ljZSh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIGludm9pY2UuaW52b2ljZV9pZClcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbnZvaWNlLCBkYXRhLmludm9pY2UpO1xuICAgICAgICAvLyBpbnZvaWNlLmxpbmVzID0gZGF0YS5pbnZvaWNlLmxpbmVfaXRlbXM7XG4gICAgICAgIHRoaXMuYWRkSXRlbXNUb0Rpc3BsYXkoZGF0YS5pbnZvaWNlLmxpbmVfaXRlbXMpO1xuICAgICAgICB0aGlzLmV4dHJhY3RlZENvdW50Kys7XG4gICAgICAgIHRoaXMuZXh0cmFjdEludm9pY2VJdGVtcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRSZXBvcnRPbkNvbnNvbGUgPSAoKSA9PiB7XG4gICAgbGV0IHJldFZhbCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5pbnZvaWNlcykge1xuICAgICAgbGV0IHJldDogYW55ID0ge307XG4gICAgICBsZXQgaW52b2ljZSA9IHRoaXMuaW52b2ljZXNbaV07XG5cbiAgICAgIHJldC5ub3RlcyA9IHRoaXMuaW52b2ljZXNbaV0ubm90ZXM7XG4gICAgICByZXQubGluZV9pdGVtcyA9IHRoaXMuaW52b2ljZXNbaV0ubGluZV9pdGVtcy5tYXAoaXRlbSA9PiB7IHJldHVybiB7IG5hbWU6IGl0ZW0ubmFtZSwgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24gfTsgfSk7XG4gICAgICByZXQudG90YWwgPSB0aGlzLmludm9pY2VzW2ldLnRvdGFsO1xuICAgICAgcmV0LmJhbGFuY2UgPSB0aGlzLmludm9pY2VzW2ldLmJhbGFuY2U7XG4gICAgICByZXQubmFtZSA9IHRoaXMuaW52b2ljZXNbaV0uY29udGFjdF9wZXJzb25zX2RldGFpbHNbMF0uZmlyc3RfbmFtZSArIFwiIFwiICsgdGhpcy5pbnZvaWNlc1tpXS5jb250YWN0X3BlcnNvbnNfZGV0YWlsc1swXS5sYXN0X25hbWU7XG4gICAgICByZXQucGhvbmUgPSB0aGlzLmludm9pY2VzW2ldLmNvbnRhY3RfcGVyc29uc19kZXRhaWxzLnBob25lO1xuICAgICAgcmV0LmJpbGxpbmdfYWRkcmVzcyA9IHRoaXMuaW52b2ljZXNbaV0uYmlsbGluZ19hZGRyZXNzLmFkZHJlc3M7XG5cblxuICAgICAgcmV0VmFsLnB1c2gocmV0KTtcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXRWYWwpO1xuICAgIC8vIGNvcHkocmV0VmFsKTtcbiAgfVxuXG4gIGdldEluT3JkZXIgPSAoaXRlbXMpID0+IHtcbiAgICByZXR1cm4gXy5vcmRlckJ5KGl0ZW1zLCBbXCJxdWFudGl0eVwiXSwgW1wiZGVzY1wiXSk7XG4gIH1cblxuICBhZGRJdGVtc1RvRGlzcGxheSA9IGl0ZW1zID0+IHtcbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaXRlbXMuZm9yRWFjaChhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgbGV0IGZvdW5kSXRlbSA9IF8uZmluZCh0aGlzLmludm9pY2VJdGVtcywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLml0ZW1faWQgPT09IGl0ZW0uaXRlbV9pZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKCEhZm91bmRJdGVtKVxuICAgICAgICBmb3VuZEl0ZW0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLmZyZXNoQm9va3NBcGlQcm92aWRlclxuICAgICAgICAgIC5nZXRJdGVtRGV0YWlsKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaXRlbS5pdGVtX2lkKVxuICAgICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uZGV0YWlsID0gZGF0YS5pdGVtO1xuICAgICAgICAgICAgLy8gdGhpcy5zaG93SXRlbXMoZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIG1hdGVyaWFsRGF0YSA9IFtdO1xuICBjYWxjdWxhdGVQQ3MgPSAoKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5tYXRlcmlhbERhdGEgPSBbXTtcbiAgICB0aGlzLmludm9pY2VJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5kZXRhaWwuY3VzdG9tX2ZpZWxkcy5mb3JFYWNoKGN1c3RvbV9maWVsZCA9PiB7XG4gICAgICAgIGxldCBmb3VuZE1hdGVyaWFsSXRlbSA9IF8uZmluZCh0aGlzLm1hdGVyaWFsRGF0YSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmouY3VzdG9tZmllbGRfaWQgPT09IGN1c3RvbV9maWVsZC5jdXN0b21maWVsZF9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZm91bmRNYXRlcmlhbEl0ZW0pIHtcbiAgICAgICAgICBjdXN0b21fZmllbGQucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIGZvdW5kTWF0ZXJpYWxJdGVtID0gY3VzdG9tX2ZpZWxkO1xuICAgICAgICAgIHRoaXMubWF0ZXJpYWxEYXRhLnB1c2goZm91bmRNYXRlcmlhbEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZvdW5kTWF0ZXJpYWxJdGVtLnF1YW50aXR5ID0gZm91bmRNYXRlcmlhbEl0ZW0ucXVhbnRpdHkgKyAoY3VzdG9tX2ZpZWxkLnZhbHVlICogaXRlbS5xdWFudGl0eSk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgbG9hZGluZztcbiAgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5sb2FkaW5nICYmIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiBcIlBsZWFzZSB3YWl0Li4uXCJcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZGluZy5wcmVzZW50KCk7XG4gIH07XG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZy5kaXNtaXNzKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBXZWVrT3JkZXJzUGFnZScpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVycy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBJb25pY1BhZ2UsIExvYWRpbmdDb250cm9sbGVyLCBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IEZyZXNoQm9va3NBcGlQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9mcmVzaC1ib29rcy1hcGkvZnJlc2gtYm9va3MtYXBpJztcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEV4dHJhY3RJbnZvaWNlRGV0YWlsUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQElvbmljUGFnZSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWV4dHJhY3QtaW52b2ljZS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ2V4dHJhY3QtaW52b2ljZS1kZXRhaWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEV4dHJhY3RJbnZvaWNlRGV0YWlsUGFnZSB7XG4gIGZyb21EYXRlOiBhbnk7XG4gIHRvRGF0ZTogYW55O1xuICBpbnZvaWNlczogYW55ID0gW107XG4gIGludm9pY2VJdGVtczogYW55ID0gW107XG4gIGJ1c2luZXNzX21lbWJlcnNoaXBzOiBhbnkgPSBbXTtcbiAgc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcDtcbiAgcHVibGljIHdpbmRvdzogYW55ID0gd2luZG93O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwcml2YXRlIGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHVibGljIGZyZXNoQm9va3NBcGlQcm92aWRlcjogRnJlc2hCb29rc0FwaVByb3ZpZGVyKSB7XG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyLmdldEJ1c2luZXNzX21lbWJlcnNoaXBzKCkudGhlbigoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuYnVzaW5lc3NfbWVtYmVyc2hpcHMgPSBkYXRhLm9yZ2FuaXphdGlvbnM7XG4gICAgICB0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAgPSB0aGlzLmJ1c2luZXNzX21lbWJlcnNoaXBzWzBdLm9yZ2FuaXphdGlvbl9pZDtcbiAgICAgIHRoaXMuZnJvbURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy50b0RhdGUgPSBtb21lbnQoKS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuXG4gICAgfSk7XG5cbiAgICB0aGlzLndpbmRvdy5GaWxlSGFuZGxlcnMgPSB7XG4gICAgICB3cml0ZUZpbGU6IChmaWxlRW50cnksIGRhdGFPYmopID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgRmlsZVdyaXRlciBvYmplY3QgZm9yIG91ciBGaWxlRW50cnkgKGxvZy50eHQpLlxuICAgICAgICBmaWxlRW50cnkuY3JlYXRlV3JpdGVyKGZ1bmN0aW9uIChmaWxlV3JpdGVyKSB7XG5cbiAgICAgICAgICBmaWxlV3JpdGVyLm9ud3JpdGVlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWwgZmlsZSB3cml0ZS4uLlwiKTtcbiAgICAgICAgICAgIC8vIHdpbmRvdy5GaWxlSGFuZGxlcnMucmVhZEZpbGUoZmlsZUVudHJ5KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZmlsZVdyaXRlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIGZpbGUgd3JpdGU6IFwiICsgZS50b1N0cmluZygpKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSWYgZGF0YSBvYmplY3QgaXMgbm90IHBhc3NlZCBpbixcbiAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgQmxvYiBpbnN0ZWFkLlxuICAgICAgICAgIGlmICghZGF0YU9iaikge1xuICAgICAgICAgICAgZGF0YU9iaiA9IG5ldyBCbG9iKFsnc29tZSBmaWxlIGRhdGEnXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlsZVdyaXRlci53cml0ZShkYXRhT2JqKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVhZEZpbGU6IChmaWxlRW50cnkpID0+IHtcblxuICAgICAgICBmaWxlRW50cnkuZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bCBmaWxlIHJlYWQ6IFwiICsgdGhpcy5yZXN1bHQpO1xuICAgICAgICAgICAgLy8gZGlzcGxheUZpbGVEYXRhKGZpbGVFbnRyeS5mdWxsUGF0aCArIFwiOiBcIiArIHRoaXMucmVzdWx0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG5cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBFeHRyYWN0SW52b2ljZURldGFpbFBhZ2UnKTtcbiAgfVxuXG4gIGV4dHJhY3RJbnZvaWNlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgbGV0IHRvRGF0ZSA9IG1vbWVudCh0aGlzLnRvRGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBsZXQgZnJvbURhdGUgPSBtb21lbnQodGhpcy5mcm9tRGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICB0aGlzLmludm9pY2VzID0gW107XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgIC5nZXRJbnZvaWNlcyh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIChcImR1ZV9kYXRlX3N0YXJ0PVwiICsgZnJvbURhdGUgKyBcIiZkdWVfZGF0ZV9lbmQ9XCIgKyB0b0RhdGUgKyBcIiZzb3J0X2NvbHVtbj1kdWVfZGF0ZVwiKSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5pbnZvaWNlcyA9IGRhdGEuaW52b2ljZXM7XG4gICAgICAgIHRoaXMuZXh0cmFjdGVkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmludm9pY2VJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLm1hdGVyaWFsRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmV4dHJhY3RJbnZvaWNlSXRlbXMoKTtcbiAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIC8vIGV4dHJhY3RJdGVtc0NvbnRlbnRzID0gKGl0ZW1faWQpID0+IHtcbiAgLy8gICAvLyBsZXQgaXRlbV9pZCA9IFwiMTc2NDI5NzAwMDAwMDY2OTAwMVwiO1xuICAvLyAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gIC8vICAgICAuZ2V0SXRlbURldGFpbCh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIGl0ZW1faWQpXG4gIC8vICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG5cbiAgLy8gICAgICAgLy8gdGhpcy5zaG93SXRlbXMoZGF0YSk7XG4gIC8vICAgICB9KTtcbiAgLy8gfVxuXG4gIGV4dHJhY3RlZENvdW50ID0gMDtcbiAgZXh0cmFjdEludm9pY2VJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5leHRyYWN0ZWRDb3VudCA+PSB0aGlzLmludm9pY2VzLmxlbmd0aCkge1xuICAgICAgLy9ET05FXG4gICAgICB0aGlzLmV4dHJhY3RKc29uRm9yQ3N2KHRoaXMuaW52b2ljZXMpO1xuICAgICAgLy8gdGhpcy5jYWxjdWxhdGVQQ3MoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW52b2ljZSA9IHRoaXMuaW52b2ljZXNbdGhpcy5leHRyYWN0ZWRDb3VudF07XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgIC5nZXRJbnZvaWNlKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaW52b2ljZS5pbnZvaWNlX2lkKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBPYmplY3QuYXNzaWduKGludm9pY2UsIGRhdGEuaW52b2ljZSk7XG4gICAgICAgIC8vIGludm9pY2UubGluZXMgPSBkYXRhLmludm9pY2UubGluZV9pdGVtcztcbiAgICAgICAgLy8gdGhpcy5hZGRJdGVtc1RvRGlzcGxheShkYXRhLmludm9pY2UubGluZV9pdGVtcyk7XG4gICAgICAgIHRoaXMuZXh0cmFjdGVkQ291bnQrKztcbiAgICAgICAgdGhpcy5leHRyYWN0SW52b2ljZUl0ZW1zKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFJlcG9ydE9uQ29uc29sZSA9ICgpID0+IHtcbiAgICBsZXQgcmV0VmFsID0gW107XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLmludm9pY2VzKSB7XG4gICAgICBsZXQgcmV0OiBhbnkgPSB7fTtcbiAgICAgIGxldCBpbnZvaWNlID0gdGhpcy5pbnZvaWNlc1tpXTtcblxuICAgICAgcmV0Lm5vdGVzID0gdGhpcy5pbnZvaWNlc1tpXS5ub3RlcztcbiAgICAgIHJldC5saW5lX2l0ZW1zID0gdGhpcy5pbnZvaWNlc1tpXS5saW5lX2l0ZW1zLm1hcChpdGVtID0+IHsgcmV0dXJuIHsgbmFtZTogaXRlbS5uYW1lLCBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB9OyB9KTtcbiAgICAgIHJldC50b3RhbCA9IHRoaXMuaW52b2ljZXNbaV0udG90YWw7XG4gICAgICByZXQuYmFsYW5jZSA9IHRoaXMuaW52b2ljZXNbaV0uYmFsYW5jZTtcbiAgICAgIHJldC5uYW1lID0gdGhpcy5pbnZvaWNlc1tpXS5jb250YWN0X3BlcnNvbnNfZGV0YWlsc1swXS5maXJzdF9uYW1lICsgXCIgXCIgKyB0aGlzLmludm9pY2VzW2ldLmNvbnRhY3RfcGVyc29uc19kZXRhaWxzWzBdLmxhc3RfbmFtZTtcbiAgICAgIHJldC5waG9uZSA9IHRoaXMuaW52b2ljZXNbaV0uY29udGFjdF9wZXJzb25zX2RldGFpbHMucGhvbmU7XG4gICAgICByZXQuYmlsbGluZ19hZGRyZXNzID0gdGhpcy5pbnZvaWNlc1tpXS5iaWxsaW5nX2FkZHJlc3MuYWRkcmVzcztcblxuXG4gICAgICByZXRWYWwucHVzaChyZXQpO1xuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJldFZhbCk7XG4gICAgLy8gY29weShyZXRWYWwpO1xuICB9XG5cbiAgZ2V0SW5PcmRlciA9IChpdGVtcykgPT4ge1xuICAgIHJldHVybiBfLm9yZGVyQnkoaXRlbXMsIFtcInF1YW50aXR5XCJdLCBbXCJkZXNjXCJdKTtcbiAgfVxuXG4gIGFkZEl0ZW1zVG9EaXNwbGF5ID0gaXRlbXMgPT4ge1xuICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBpdGVtcy5mb3JFYWNoKGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICBsZXQgZm91bmRJdGVtID0gXy5maW5kKHRoaXMuaW52b2ljZUl0ZW1zLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouaXRlbV9pZCA9PT0gaXRlbS5pdGVtX2lkO1xuICAgICAgfSk7XG4gICAgICBpZiAoISFmb3VuZEl0ZW0pXG4gICAgICAgIGZvdW5kSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICAgICAgICAgLmdldEl0ZW1EZXRhaWwodGhpcy5zZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwLCBpdGVtLml0ZW1faWQpXG4gICAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5kZXRhaWwgPSBkYXRhLml0ZW07XG4gICAgICAgICAgICAvLyB0aGlzLnNob3dJdGVtcyhkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbnZvaWNlSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB9KTtcblxuICB9XG5cbiAgbWF0ZXJpYWxEYXRhID0gW107XG4gIGpzb25EYXRhRm9yQ3N2ID0gW107XG4gIGV4dHJhY3RKc29uRm9yQ3N2ID0gKGludm9pY2VzOiBhbnkpID0+IHtcbiAgICBsZXQgcm93Q291bnQgPSAwO1xuICAgIHRoaXMuanNvbkRhdGFGb3JDc3YgPSBbXTtcblxuICAgIGNvbnNvbGUubG9nKGludm9pY2VzKTtcblxuICAgIF8uZm9yRWFjaChpbnZvaWNlcywgKGludm9pY2UpID0+IHtcbiAgICAgIHJvd0NvdW50Kys7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBpbnZvaWNlLmxpbmVfaXRlbXNbMF07XG4gICAgICB0aGlzLmpzb25EYXRhRm9yQ3N2LnB1c2goe1xuICAgICAgICBcIklEXCI6IGludm9pY2UuaW52b2ljZV9udW1iZXIsLy9yb3dDb3VudCxcbiAgICAgICAgXCJJdGVtIE5hbWVcIjogaXRlbS5xdWFudGl0eSArIFwiIC0gXCIgKyBpdGVtLm5hbWUsXG4gICAgICAgIC8vIFwiUXVhbnRpdHkgT3JkZXJlZFwiOiBpdGVtLnF1YW50aXR5LFxuICAgICAgICBcIkR1ZSBEYXRlXCI6IG1vbWVudChpbnZvaWNlLmR1ZV9kYXRlKS5mb3JtYXQoXCJkZGQgREQtTU0tWVlcIikgKyBcIiAtIFwiICsgaW52b2ljZS5jZl90aW1lLFxuICAgICAgICAvLyBcIkRlbGl2ZXJ5IFRpbWVcIjogaW52b2ljZS5jZl90aW1lLFxuICAgICAgICBcIlRvdGFsXCI6IGludm9pY2UuYmFsYW5jZSxcbiAgICAgICAgXCJTdGF0dXNcIjogaW52b2ljZS5zdGF0dXMsXG4gICAgICAgIC8vIFwiQ3VzdG9tZXIgTmFtZVwiOiBpbnZvaWNlLmNvbnRhY3RfcGVyc29uc19kZXRhaWxzWzBdLmZpcnN0X25hbWUgKyBcIiAtIFwiICsgaW52b2ljZS5jb250YWN0X3BlcnNvbnNfZGV0YWlsc1swXS5tb2JpbGUsXG4gICAgICAgIFwiQ3VzdG9tZXIgTmFtZVwiOiBpbnZvaWNlLmN1c3RvbWVyX25hbWUgKyBcIiB8XFxuIFwiICsgaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmFkZHJlc3MgKyBcIiB8XFxuIFwiICsgaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmNpdHksXG4gICAgICAgIC8vIFwiU2hpcHBpbmcgU3RyZWV0IDFcIjogaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgIC8vIFwiU2hpcHBpbmcgQ2l0eVwiOiBpbnZvaWNlLnNoaXBwaW5nX2FkZHJlc3MuY2l0eVxuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGludm9pY2UubGluZV9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gaW52b2ljZS5saW5lX2l0ZW1zW2ldO1xuICAgICAgICB0aGlzLmpzb25EYXRhRm9yQ3N2LnB1c2goe1xuICAgICAgICAgIFwiSURcIjogXCJcIiwvL3Jvd0NvdW50LFxuICAgICAgICAgIFwiSXRlbSBOYW1lXCI6IGl0ZW0ucXVhbnRpdHkgKyBcIiAtIFwiICsgaXRlbS5uYW1lLFxuICAgICAgICAgIC8vIFwiUXVhbnRpdHkgT3JkZXJlZFwiOiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgIFwiRHVlIERhdGVcIjogXCJcIixcbiAgICAgICAgICAvLyBcIkRlbGl2ZXJ5IFRpbWVcIjogaW52b2ljZS5jZl90aW1lLFxuICAgICAgICAgIFwiVG90YWxcIjogXCJcIixcbiAgICAgICAgICBcIlN0YXR1c1wiOiBcIlwiLFxuICAgICAgICAgIC8vIFwiQ3VzdG9tZXIgTmFtZVwiOiBpbnZvaWNlLmNvbnRhY3RfcGVyc29uc19kZXRhaWxzWzBdLmZpcnN0X25hbWUgKyBcIiAtIFwiICsgaW52b2ljZS5jb250YWN0X3BlcnNvbnNfZGV0YWlsc1swXS5tb2JpbGUsXG4gICAgICAgICAgXCJDdXN0b21lciBOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgLy8gXCJTaGlwcGluZyBTdHJlZXQgMVwiOiBpbnZvaWNlLnNoaXBwaW5nX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAvLyBcIlNoaXBwaW5nIENpdHlcIjogaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmNpdHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBfLmZvckVhY2goaW52b2ljZS5saW5lX2l0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgLy8gICB0aGlzLmpzb25EYXRhRm9yQ3N2LnB1c2goe1xuICAgICAgLy8gICAgIFwiSURcIjogaW52b2ljZS5pbnZvaWNlX251bWJlciwvL3Jvd0NvdW50LFxuICAgICAgLy8gICAgIFwiSXRlbSBOYW1lXCI6IGl0ZW0ucXVhbnRpdHkgKyBcIiAtIFwiICsgaXRlbS5uYW1lLFxuICAgICAgLy8gICAgIC8vIFwiUXVhbnRpdHkgT3JkZXJlZFwiOiBpdGVtLnF1YW50aXR5LFxuICAgICAgLy8gICAgIFwiRHVlIERhdGVcIjogbW9tZW50KGludm9pY2UuZHVlX2RhdGUpLmZvcm1hdChcImRkZCBERC1NTS1ZWVwiKSArIFwiIC0gXCIgKyBpbnZvaWNlLmNmX3RpbWUsXG4gICAgICAvLyAgICAgLy8gXCJEZWxpdmVyeSBUaW1lXCI6IGludm9pY2UuY2ZfdGltZSxcbiAgICAgIC8vICAgICBcIlRvdGFsXCI6IGludm9pY2UuYmFsYW5jZSxcbiAgICAgIC8vICAgICBcIlN0YXR1c1wiOiBpbnZvaWNlLnN0YXR1cyxcbiAgICAgIC8vICAgICAvLyBcIkN1c3RvbWVyIE5hbWVcIjogaW52b2ljZS5jb250YWN0X3BlcnNvbnNfZGV0YWlsc1swXS5maXJzdF9uYW1lICsgXCIgLSBcIiArIGludm9pY2UuY29udGFjdF9wZXJzb25zX2RldGFpbHNbMF0ubW9iaWxlLFxuICAgICAgLy8gICAgIFwiQ3VzdG9tZXIgTmFtZVwiOiBpbnZvaWNlLmN1c3RvbWVyX25hbWUgKyBcIiB8XFxuIFwiICsgaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmFkZHJlc3MgKyBcIiB8XFxuIFwiICsgaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmNpdHksXG4gICAgICAvLyAgICAgLy8gXCJTaGlwcGluZyBTdHJlZXQgMVwiOiBpbnZvaWNlLnNoaXBwaW5nX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIC8vICAgICAvLyBcIlNoaXBwaW5nIENpdHlcIjogaW52b2ljZS5zaGlwcGluZ19hZGRyZXNzLmNpdHlcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICB9KTtcbiAgICBkZWJ1Z2dlclxuICAgIGxldCBjc3YgPSB0aGlzLkNvbnZlcnRUb0NTVih0aGlzLmpzb25EYXRhRm9yQ3N2LCBfLmtleXModGhpcy5qc29uRGF0YUZvckNzdlswXSkpO1xuICAgIGNvbnNvbGUubG9nKGNzdik7XG5cbiAgICAvLyBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiAndGV4dC9jc3YnIH0pO1xuICAgIC8vIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgLy8gYS5ocmVmID0gdXJsO1xuICAgIC8vIGEuZG93bmxvYWQgPSAnbXlGaWxlLmNzdic7XG4gICAgLy8gYS5jbGljaygpO1xuICAgIC8vIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgLy8gYS5yZW1vdmUoKTtcblxuXG5cbiAgICAvL3NlbmQgZmlsZSBvbiBlbWFpbCBVc2UgWk9IT1xuICAgIGxldCB0b0RhdGUgPSBtb21lbnQodGhpcy50b0RhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgbGV0IGZyb21EYXRlID0gbW9tZW50KHRoaXMuZnJvbURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG5cbiAgICBsZXQgZW1haWwgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwibHNhbG1za2FyaUBzY2FkLmdvdi5hZVwiKTtcbiAgICBsZXQgbWFpbEJvZHkgPSB7XG4gICAgICBcInNlbmRfZnJvbV9vcmdfZW1haWxfaWRcIjogdHJ1ZSxcbiAgICAgIFwidG9fbWFpbF9pZHNcIjogW1xuICAgICAgICBcIm11bGxhaGtoYW5Ac2NhZC5nb3YuYWVcIixcbiAgICAgICAgZW1haWxcbiAgICAgICAgLy8gXCJlYXRhbmR0cmVhdC5hZEBnbWFpbC5jb21cIlxuICAgICAgXSxcbiAgICAgIFwiY2NfbWFpbF9pZHNcIjogW1xuICAgICAgICAvLyBcIm11bGxhaGtoYW5Ac2NhZC5nb3YuYWVcIlxuICAgICAgXSxcbiAgICAgIFwic3ViamVjdFwiOiAoXCJJbnZvaWNlcyBmcm9tIFwiICsgZnJvbURhdGUgKyBcIiAtIFwiICsgdG9EYXRlKSxcbiAgICAgIFwiYm9keVwiOiBcIlNhdmUgYmVsb3cgbGluZXMgYXMgQ1NWLDxici8+PGhyLz48YnIvPjxici8+IFwiICsgY3N2ICsgXCI8YnIvPjxici8+PGhyLz5cIlxuXG4gICAgfVxuICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyLnNlbmRFbWFpbCh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIG1haWxCb2R5KS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmIChkYXRhLmNvZGUgPT0gMClcbiAgICAgICAgYWxlcnQoXCJEYXRhIHNlbnQgb24gRW1haWxcIik7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcblxuICAgIC8vIER1bW15IGltcGxlbWVudGF0aW9uIGZvciBEZXNrdG9wIGRvd25sb2FkIHB1cnBvc2VcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgZGF0YTogc3RyaW5nID0gZW5jb2RlVVJJKGNzdik7XG4gICAgICAvLyBjb25zdCBsaW5rOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIC8vIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZGF0YSk7XG4gICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnbXlGaWxlLmNzdicpO1xuICAgICAgLy8gbGluay5jbGljaygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG5cbiAgICB0cnkgey8vU2F2ZSBGaWxlIGluIElPUyBcbiAgICAgIGxldCB3aW5kb3cgPSB0aGlzLndpbmRvdztcbiAgICAgIHRoaXMud2luZG93LnJlcXVlc3RGaWxlU3lzdGVtKHRoaXMud2luZG93LkxvY2FsRmlsZVN5c3RlbS5QRVJTSVNURU5ULCAwLCBmdW5jdGlvbiAoZnMpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnZmlsZSBzeXN0ZW0gb3BlbjogJyArIGZzLm5hbWUpO1xuICAgICAgICBmcy5yb290LmdldEZpbGUoXCJyZXBvcnQuY3N2XCIsIHsgY3JlYXRlOiB0cnVlLCBleGNsdXNpdmU6IGZhbHNlIH0sIGZ1bmN0aW9uIChmaWxlRW50cnkpIHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZUVudHJ5IGlzIGZpbGU/XCIgKyBmaWxlRW50cnkuaXNGaWxlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIC8vIGZpbGVFbnRyeS5uYW1lID09ICdzb21lRmlsZS50eHQnXG4gICAgICAgICAgLy8gZmlsZUVudHJ5LmZ1bGxQYXRoID09ICcvc29tZUZpbGUudHh0J1xuICAgICAgICAgIHdpbmRvdy5GaWxlSGFuZGxlcnMud3JpdGVGaWxlKGZpbGVFbnRyeSwgYmxvYik7XG5cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9LCAoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycikgfSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxuXG5cbiAgfVxuICBDb252ZXJ0VG9DU1Yob2JqQXJyYXksIGhlYWRlckxpc3QpIHtcbiAgICBsZXQgYXJyYXkgPSB0eXBlb2Ygb2JqQXJyYXkgIT0gJ29iamVjdCcgPyBKU09OLnBhcnNlKG9iakFycmF5KSA6IG9iakFycmF5O1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBsZXQgcm93ID0gJ1MuTm8sJztcbiAgICBmb3IgKGxldCBpbmRleCBpbiBoZWFkZXJMaXN0KSB7XG4gICAgICByb3cgKz0gaGVhZGVyTGlzdFtpbmRleF0gKyAnLCc7XG4gICAgfVxuICAgIHJvdyA9IHJvdy5zbGljZSgwLCAtMSk7XG4gICAgc3RyICs9IHJvdyArICdcXHJcXG4nO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gKGkgKyAxKSArICcnO1xuICAgICAgZm9yIChsZXQgaW5kZXggaW4gaGVhZGVyTGlzdCkge1xuICAgICAgICBsZXQgaGVhZCA9IGhlYWRlckxpc3RbaW5kZXhdO1xuICAgICAgICBsaW5lICs9ICcsXCInICsgYXJyYXlbaV1baGVhZF0gKyAnXCInO1xuICAgICAgfVxuICAgICAgc3RyICs9IGxpbmUgKyAnXFxyXFxuJztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBDcyA9ICgpID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLm1hdGVyaWFsRGF0YSA9IFtdO1xuICAgIHRoaXMuaW52b2ljZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmRldGFpbC5jdXN0b21fZmllbGRzLmZvckVhY2goY3VzdG9tX2ZpZWxkID0+IHtcbiAgICAgICAgbGV0IGZvdW5kTWF0ZXJpYWxJdGVtID0gXy5maW5kKHRoaXMubWF0ZXJpYWxEYXRhLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5jdXN0b21maWVsZF9pZCA9PT0gY3VzdG9tX2ZpZWxkLmN1c3RvbWZpZWxkX2lkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmb3VuZE1hdGVyaWFsSXRlbSkge1xuICAgICAgICAgIGN1c3RvbV9maWVsZC5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgZm91bmRNYXRlcmlhbEl0ZW0gPSBjdXN0b21fZmllbGQ7XG4gICAgICAgICAgdGhpcy5tYXRlcmlhbERhdGEucHVzaChmb3VuZE1hdGVyaWFsSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZm91bmRNYXRlcmlhbEl0ZW0ucXVhbnRpdHkgPSBmb3VuZE1hdGVyaWFsSXRlbS5xdWFudGl0eSArIChjdXN0b21fZmllbGQudmFsdWUgKiBpdGVtLnF1YW50aXR5KTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH1cblxuXG4gIGxvYWRpbmc7XG4gIHNob3dMb2FkaW5nID0gKCkgPT4ge1xuICAgIHRoaXMubG9hZGluZyAmJiB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogXCJQbGVhc2Ugd2FpdC4uLlwiXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRpbmcucHJlc2VudCgpO1xuICB9O1xuICBoaWRlTG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRpbmcuZGlzbWlzcygpO1xuICAgIHRoaXMubG9hZGluZyA9IG51bGw7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvZXh0cmFjdC1pbnZvaWNlLWRldGFpbC9leHRyYWN0LWludm9pY2UtZGV0YWlsLnRzIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTE1O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIG1hcCA9IHtcblx0XCIuLi9wYWdlcy9leHRyYWN0LWludm9pY2UtZGV0YWlsL2V4dHJhY3QtaW52b2ljZS1kZXRhaWwubW9kdWxlXCI6IFtcblx0XHQ0MDgsXG5cdFx0MlxuXHRdLFxuXHRcIi4uL3BhZ2VzL21vZGFsL21vZGFsLm1vZHVsZVwiOiBbXG5cdFx0NDA2LFxuXHRcdDBcblx0XSxcblx0XCIuLi9wYWdlcy93ZWVrLW9yZGVycy93ZWVrLW9yZGVycy5tb2R1bGVcIjogW1xuXHRcdDQwNyxcblx0XHQxXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWRzWzBdKTtcblx0fSk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSAxNTc7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBOYXZDb250cm9sbGVyLFxuICBEYXRlVGltZSxcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG4gIEFsZXJ0Q29udHJvbGxlclxufSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xuaW1wb3J0IHsgRnJlc2hCb29rc0FwaVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9mcmVzaC1ib29rcy1hcGkvZnJlc2gtYm9va3MtYXBpXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBhZ2UtaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJob21lLmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gIGRhdGE6IGFueTtcbiAgbXlEYXRlOiBhbnk7XG4gIGJ1c2luZXNzX21lbWJlcnNoaXBzOiBhbnkgPSBbXTtcbiAgc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwdWJsaWMgZnJlc2hCb29rc0FwaVByb3ZpZGVyOiBGcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgKSB7XG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyLmdldEJ1c2luZXNzX21lbWJlcnNoaXBzKCkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB0aGlzLmJ1c2luZXNzX21lbWJlcnNoaXBzID0gZGF0YS5vcmdhbml6YXRpb25zO1xuICAgICAgdGhpcy5zZWxlY3RlZF9idXNpbmVzc19tZW1iZXJzaGlwID0gdGhpcy5idXNpbmVzc19tZW1iZXJzaGlwc1swXS5vcmdhbml6YXRpb25faWQ7XG4gICAgICB0aGlzLm15RGF0ZSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRhdGVDaGFuZ2VkKCk7XG4gICAgfSk7XG4gIH1cblxuICBkYXRlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgbGV0IGRhdGUgPSBtb21lbnQodGhpcy5teURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5mcmVzaEJvb2tzQXBpUHJvdmlkZXJcbiAgICAgIC5nZXRJbnZvaWNlcyh0aGlzLnNlbGVjdGVkX2J1c2luZXNzX21lbWJlcnNoaXAsIChcImR1ZV9kYXRlPVwiICsgZGF0ZSkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuaW52b2ljZXM7XG4gICAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGxvYWRpbmc7XG4gIHNob3dMb2FkaW5nID0gKCkgPT4ge1xuICAgIHRoaXMubG9hZGluZyAmJiB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogXCJQbGVhc2Ugd2FpdC4uLlwiXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRpbmcucHJlc2VudCgpO1xuICB9O1xuICBoaWRlTG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRpbmcuZGlzbWlzcygpO1xuICAgIHRoaXMubG9hZGluZyA9IG51bGw7XG4gIH1cbiAgc2hvd0RldGFpbCA9IGludm9pY2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKGludm9pY2UpO1xuICAgIGlmIChpbnZvaWNlLmhhc093blByb3BlcnR5KFwibGluZV9pdGVtc1wiKSkge1xuICAgICAgdGhpcy5zaG93SXRlbXMoaW52b2ljZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICAgICAgIC5nZXRJbnZvaWNlKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaW52b2ljZS5pbnZvaWNlX2lkKVxuICAgICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihpbnZvaWNlLCBkYXRhLmludm9pY2UpO1xuICAgICAgICAgIC8vIGludm9pY2UubGluZXMgPSBkYXRhLmludm9pY2UubGluZV9pdGVtcztcbiAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgdGhpcy5zaG93SXRlbXMoaW52b2ljZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgc2hvd0RldGFpbDIgPSBpbnZvaWNlID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnZvaWNlKTtcbiAgICBpZiAoaW52b2ljZS5oYXNPd25Qcm9wZXJ0eShcImxpbmVzXCIpKSB7XG4gICAgICB0aGlzLnNob3dJdGVtczIoaW52b2ljZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcbiAgICAgIHRoaXMuZnJlc2hCb29rc0FwaVByb3ZpZGVyXG4gICAgICAgIC5nZXRJbnZvaWNlKHRoaXMuc2VsZWN0ZWRfYnVzaW5lc3NfbWVtYmVyc2hpcCwgaW52b2ljZS5pbnZvaWNlX2lkKVxuICAgICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgaW52b2ljZS5saW5lcyA9IGRhdGEuaW52b2ljZS5saW5lX2l0ZW1zO1xuICAgICAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB0aGlzLnNob3dJdGVtczIoaW52b2ljZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHNob3dJdGVtcyhpbnZvaWNlOiBhbnkpIHtcbiAgICBsZXQgbW9kYWxQYWdlID0gdGhpcy5tb2RhbEN0cmwuY3JlYXRlKFwiTW9kYWxQYWdlXCIsIHsgaW52b2ljZTogaW52b2ljZSB9KTtcbiAgICBtb2RhbFBhZ2UucHJlc2VudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93SXRlbXMyKGludm9pY2U6IGFueSkge1xuICAgIGxldCBpbnB1dHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludm9pY2UubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlucHV0cy5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBsYWJlbDogaW52b2ljZS5saW5lc1tpXS5xdHkgKyBcIi1cIiArIGludm9pY2UubGluZXNbaV0ubmFtZSxcbiAgICAgICAgdmFsdWU6IGludm9pY2UubGluZXNbaV0ucXR5ICsgXCItXCIgKyBpbnZvaWNlLmxpbmVzW2ldLm5hbWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBpbnZvaWNlLmxpbmVzW2ldLm5hbWUsXG4gICAgICAgIGNoZWNrZWQ6IHRydWVcbiAgICAgICAgLy8gZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgYWxlcnQgPSB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgdGl0bGU6IGludm9pY2UuY3VycmVudF9vcmdhbml6YXRpb24sXG4gICAgICBzdWJUaXRsZTpcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgIGludm9pY2UucGF5bWVudF9zdGF0dXMgK1xuICAgICAgICAnXCI+U1RBVFVTIDogJyArXG4gICAgICAgIGludm9pY2UuZGlzcGxheV9zdGF0dXMgK1xuICAgICAgICBcIjwvc3Bhbj5cIixcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktbWVzc2FnZVwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3Ryb25nPkFkZHJlc3M6IDwvc3Ryb25nPmAgK1xuICAgICAgICBpbnZvaWNlLnN0cmVldCArXG4gICAgICAgIGBcbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgIC8qXG4gICAgICA8c3Ryb25nPkRlc2NyaXB0aW9uOiA8L3N0cm9uZz5gK2ludm9pY2UuZGVzY3JpcHRpb24rYFxuICAgICAgPGJyLz5cbiAgICAgIDxocj5cbiAgICAgIDxici8+XG4gICAgICA8c3Ryb25nPlRvdGF0OiA8L3N0cm9uZz5gK2ludm9pY2UuYW1vdW50LmFtb3VudCsnICcraW52b2ljZS5hbW91bnQuY29kZStgXG4gICAgICA8YnIvPlxuICAgICAgPHN0cm9uZz5QYWlkOiA8L3N0cm9uZz5gK2ludm9pY2UucGFpZC5hbW91bnQrJyAnK2ludm9pY2UucGFpZC5jb2RlK2BcbiAgICAgIDxici8+XG4gICAgICA8c3Ryb25nPk91dHN0YW5kaW5nOiA8L3N0cm9uZz5gK2ludm9pY2Uub3V0c3RhbmRpbmcuYW1vdW50KycgJytpbnZvaWNlLm91dHN0YW5kaW5nLmNvZGUrYFxuICAgICAgKi9cbiAgICAgIGlucHV0czogaW5wdXRzLFxuICAgICAgYnV0dG9uczogW1wiRGlzbWlzc1wiXVxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4udHMiLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY0FwcCwgSW9uaWNFcnJvckhhbmRsZXIsIElvbmljTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbmltcG9ydCB7IE15QXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IExpc3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvbGlzdC9saXN0JztcbmltcG9ydCB7IFdlZWtPcmRlcnNQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL3dlZWstb3JkZXJzL3dlZWstb3JkZXJzXCI7XG5cbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xuaW1wb3J0IHsgRnJlc2hCb29rc0FwaVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2ZyZXNoLWJvb2tzLWFwaS9mcmVzaC1ib29rcy1hcGknO1xuXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBEZWVwbGlua3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RlZXBsaW5rcyc7XG5pbXBvcnQgeyBJbkFwcEJyb3dzZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luLWFwcC1icm93c2VyJztcbmltcG9ydCB7IENvZGVQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb2RlLXB1c2gnO1xuaW1wb3J0IHsgSGVscGVyUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBFeHRyYWN0SW52b2ljZURldGFpbFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9leHRyYWN0LWludm9pY2UtZGV0YWlsL2V4dHJhY3QtaW52b2ljZS1kZXRhaWwnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgV2Vla09yZGVyc1BhZ2UsXG4gICAgRXh0cmFjdEludm9pY2VEZXRhaWxQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICAgIEh0dHBNb2R1bGUsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgV2Vla09yZGVyc1BhZ2UsXG4gICAgRXh0cmFjdEludm9pY2VEZXRhaWxQYWdlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0YXR1c0JhcixcbiAgICBTcGxhc2hTY3JlZW4sIERlZXBsaW5rcywgSW5BcHBCcm93c2VyLCBDb2RlUHVzaCxcbiAgICB7IHByb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyIH0sXG4gICAgRnJlc2hCb29rc0FwaVByb3ZpZGVyLFxuICAgIEhlbHBlclByb3ZpZGVyLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiAxNjIsXG5cdFwiLi9hZi5qc1wiOiAxNjIsXG5cdFwiLi9hclwiOiAxNjMsXG5cdFwiLi9hci1kelwiOiAxNjQsXG5cdFwiLi9hci1kei5qc1wiOiAxNjQsXG5cdFwiLi9hci1rd1wiOiAxNjUsXG5cdFwiLi9hci1rdy5qc1wiOiAxNjUsXG5cdFwiLi9hci1seVwiOiAxNjYsXG5cdFwiLi9hci1seS5qc1wiOiAxNjYsXG5cdFwiLi9hci1tYVwiOiAxNjcsXG5cdFwiLi9hci1tYS5qc1wiOiAxNjcsXG5cdFwiLi9hci1zYVwiOiAxNjgsXG5cdFwiLi9hci1zYS5qc1wiOiAxNjgsXG5cdFwiLi9hci10blwiOiAxNjksXG5cdFwiLi9hci10bi5qc1wiOiAxNjksXG5cdFwiLi9hci5qc1wiOiAxNjMsXG5cdFwiLi9helwiOiAxNzAsXG5cdFwiLi9hei5qc1wiOiAxNzAsXG5cdFwiLi9iZVwiOiAxNzEsXG5cdFwiLi9iZS5qc1wiOiAxNzEsXG5cdFwiLi9iZ1wiOiAxNzIsXG5cdFwiLi9iZy5qc1wiOiAxNzIsXG5cdFwiLi9ibVwiOiAxNzMsXG5cdFwiLi9ibS5qc1wiOiAxNzMsXG5cdFwiLi9iblwiOiAxNzQsXG5cdFwiLi9ibi5qc1wiOiAxNzQsXG5cdFwiLi9ib1wiOiAxNzUsXG5cdFwiLi9iby5qc1wiOiAxNzUsXG5cdFwiLi9iclwiOiAxNzYsXG5cdFwiLi9ici5qc1wiOiAxNzYsXG5cdFwiLi9ic1wiOiAxNzcsXG5cdFwiLi9icy5qc1wiOiAxNzcsXG5cdFwiLi9jYVwiOiAxNzgsXG5cdFwiLi9jYS5qc1wiOiAxNzgsXG5cdFwiLi9jc1wiOiAxNzksXG5cdFwiLi9jcy5qc1wiOiAxNzksXG5cdFwiLi9jdlwiOiAxODAsXG5cdFwiLi9jdi5qc1wiOiAxODAsXG5cdFwiLi9jeVwiOiAxODEsXG5cdFwiLi9jeS5qc1wiOiAxODEsXG5cdFwiLi9kYVwiOiAxODIsXG5cdFwiLi9kYS5qc1wiOiAxODIsXG5cdFwiLi9kZVwiOiAxODMsXG5cdFwiLi9kZS1hdFwiOiAxODQsXG5cdFwiLi9kZS1hdC5qc1wiOiAxODQsXG5cdFwiLi9kZS1jaFwiOiAxODUsXG5cdFwiLi9kZS1jaC5qc1wiOiAxODUsXG5cdFwiLi9kZS5qc1wiOiAxODMsXG5cdFwiLi9kdlwiOiAxODYsXG5cdFwiLi9kdi5qc1wiOiAxODYsXG5cdFwiLi9lbFwiOiAxODcsXG5cdFwiLi9lbC5qc1wiOiAxODcsXG5cdFwiLi9lbi1hdVwiOiAxODgsXG5cdFwiLi9lbi1hdS5qc1wiOiAxODgsXG5cdFwiLi9lbi1jYVwiOiAxODksXG5cdFwiLi9lbi1jYS5qc1wiOiAxODksXG5cdFwiLi9lbi1nYlwiOiAxOTAsXG5cdFwiLi9lbi1nYi5qc1wiOiAxOTAsXG5cdFwiLi9lbi1pZVwiOiAxOTEsXG5cdFwiLi9lbi1pZS5qc1wiOiAxOTEsXG5cdFwiLi9lbi1pbFwiOiAxOTIsXG5cdFwiLi9lbi1pbC5qc1wiOiAxOTIsXG5cdFwiLi9lbi1uelwiOiAxOTMsXG5cdFwiLi9lbi1uei5qc1wiOiAxOTMsXG5cdFwiLi9lb1wiOiAxOTQsXG5cdFwiLi9lby5qc1wiOiAxOTQsXG5cdFwiLi9lc1wiOiAxOTUsXG5cdFwiLi9lcy1kb1wiOiAxOTYsXG5cdFwiLi9lcy1kby5qc1wiOiAxOTYsXG5cdFwiLi9lcy11c1wiOiAxOTcsXG5cdFwiLi9lcy11cy5qc1wiOiAxOTcsXG5cdFwiLi9lcy5qc1wiOiAxOTUsXG5cdFwiLi9ldFwiOiAxOTgsXG5cdFwiLi9ldC5qc1wiOiAxOTgsXG5cdFwiLi9ldVwiOiAxOTksXG5cdFwiLi9ldS5qc1wiOiAxOTksXG5cdFwiLi9mYVwiOiAyMDAsXG5cdFwiLi9mYS5qc1wiOiAyMDAsXG5cdFwiLi9maVwiOiAyMDEsXG5cdFwiLi9maS5qc1wiOiAyMDEsXG5cdFwiLi9mb1wiOiAyMDIsXG5cdFwiLi9mby5qc1wiOiAyMDIsXG5cdFwiLi9mclwiOiAyMDMsXG5cdFwiLi9mci1jYVwiOiAyMDQsXG5cdFwiLi9mci1jYS5qc1wiOiAyMDQsXG5cdFwiLi9mci1jaFwiOiAyMDUsXG5cdFwiLi9mci1jaC5qc1wiOiAyMDUsXG5cdFwiLi9mci5qc1wiOiAyMDMsXG5cdFwiLi9meVwiOiAyMDYsXG5cdFwiLi9meS5qc1wiOiAyMDYsXG5cdFwiLi9nZFwiOiAyMDcsXG5cdFwiLi9nZC5qc1wiOiAyMDcsXG5cdFwiLi9nbFwiOiAyMDgsXG5cdFwiLi9nbC5qc1wiOiAyMDgsXG5cdFwiLi9nb20tbGF0blwiOiAyMDksXG5cdFwiLi9nb20tbGF0bi5qc1wiOiAyMDksXG5cdFwiLi9ndVwiOiAyMTAsXG5cdFwiLi9ndS5qc1wiOiAyMTAsXG5cdFwiLi9oZVwiOiAyMTEsXG5cdFwiLi9oZS5qc1wiOiAyMTEsXG5cdFwiLi9oaVwiOiAyMTIsXG5cdFwiLi9oaS5qc1wiOiAyMTIsXG5cdFwiLi9oclwiOiAyMTMsXG5cdFwiLi9oci5qc1wiOiAyMTMsXG5cdFwiLi9odVwiOiAyMTQsXG5cdFwiLi9odS5qc1wiOiAyMTQsXG5cdFwiLi9oeS1hbVwiOiAyMTUsXG5cdFwiLi9oeS1hbS5qc1wiOiAyMTUsXG5cdFwiLi9pZFwiOiAyMTYsXG5cdFwiLi9pZC5qc1wiOiAyMTYsXG5cdFwiLi9pc1wiOiAyMTcsXG5cdFwiLi9pcy5qc1wiOiAyMTcsXG5cdFwiLi9pdFwiOiAyMTgsXG5cdFwiLi9pdC5qc1wiOiAyMTgsXG5cdFwiLi9qYVwiOiAyMTksXG5cdFwiLi9qYS5qc1wiOiAyMTksXG5cdFwiLi9qdlwiOiAyMjAsXG5cdFwiLi9qdi5qc1wiOiAyMjAsXG5cdFwiLi9rYVwiOiAyMjEsXG5cdFwiLi9rYS5qc1wiOiAyMjEsXG5cdFwiLi9ra1wiOiAyMjIsXG5cdFwiLi9ray5qc1wiOiAyMjIsXG5cdFwiLi9rbVwiOiAyMjMsXG5cdFwiLi9rbS5qc1wiOiAyMjMsXG5cdFwiLi9rblwiOiAyMjQsXG5cdFwiLi9rbi5qc1wiOiAyMjQsXG5cdFwiLi9rb1wiOiAyMjUsXG5cdFwiLi9rby5qc1wiOiAyMjUsXG5cdFwiLi9reVwiOiAyMjYsXG5cdFwiLi9reS5qc1wiOiAyMjYsXG5cdFwiLi9sYlwiOiAyMjcsXG5cdFwiLi9sYi5qc1wiOiAyMjcsXG5cdFwiLi9sb1wiOiAyMjgsXG5cdFwiLi9sby5qc1wiOiAyMjgsXG5cdFwiLi9sdFwiOiAyMjksXG5cdFwiLi9sdC5qc1wiOiAyMjksXG5cdFwiLi9sdlwiOiAyMzAsXG5cdFwiLi9sdi5qc1wiOiAyMzAsXG5cdFwiLi9tZVwiOiAyMzEsXG5cdFwiLi9tZS5qc1wiOiAyMzEsXG5cdFwiLi9taVwiOiAyMzIsXG5cdFwiLi9taS5qc1wiOiAyMzIsXG5cdFwiLi9ta1wiOiAyMzMsXG5cdFwiLi9tay5qc1wiOiAyMzMsXG5cdFwiLi9tbFwiOiAyMzQsXG5cdFwiLi9tbC5qc1wiOiAyMzQsXG5cdFwiLi9tblwiOiAyMzUsXG5cdFwiLi9tbi5qc1wiOiAyMzUsXG5cdFwiLi9tclwiOiAyMzYsXG5cdFwiLi9tci5qc1wiOiAyMzYsXG5cdFwiLi9tc1wiOiAyMzcsXG5cdFwiLi9tcy1teVwiOiAyMzgsXG5cdFwiLi9tcy1teS5qc1wiOiAyMzgsXG5cdFwiLi9tcy5qc1wiOiAyMzcsXG5cdFwiLi9tdFwiOiAyMzksXG5cdFwiLi9tdC5qc1wiOiAyMzksXG5cdFwiLi9teVwiOiAyNDAsXG5cdFwiLi9teS5qc1wiOiAyNDAsXG5cdFwiLi9uYlwiOiAyNDEsXG5cdFwiLi9uYi5qc1wiOiAyNDEsXG5cdFwiLi9uZVwiOiAyNDIsXG5cdFwiLi9uZS5qc1wiOiAyNDIsXG5cdFwiLi9ubFwiOiAyNDMsXG5cdFwiLi9ubC1iZVwiOiAyNDQsXG5cdFwiLi9ubC1iZS5qc1wiOiAyNDQsXG5cdFwiLi9ubC5qc1wiOiAyNDMsXG5cdFwiLi9ublwiOiAyNDUsXG5cdFwiLi9ubi5qc1wiOiAyNDUsXG5cdFwiLi9wYS1pblwiOiAyNDYsXG5cdFwiLi9wYS1pbi5qc1wiOiAyNDYsXG5cdFwiLi9wbFwiOiAyNDcsXG5cdFwiLi9wbC5qc1wiOiAyNDcsXG5cdFwiLi9wdFwiOiAyNDgsXG5cdFwiLi9wdC1iclwiOiAyNDksXG5cdFwiLi9wdC1ici5qc1wiOiAyNDksXG5cdFwiLi9wdC5qc1wiOiAyNDgsXG5cdFwiLi9yb1wiOiAyNTAsXG5cdFwiLi9yby5qc1wiOiAyNTAsXG5cdFwiLi9ydVwiOiAyNTEsXG5cdFwiLi9ydS5qc1wiOiAyNTEsXG5cdFwiLi9zZFwiOiAyNTIsXG5cdFwiLi9zZC5qc1wiOiAyNTIsXG5cdFwiLi9zZVwiOiAyNTMsXG5cdFwiLi9zZS5qc1wiOiAyNTMsXG5cdFwiLi9zaVwiOiAyNTQsXG5cdFwiLi9zaS5qc1wiOiAyNTQsXG5cdFwiLi9za1wiOiAyNTUsXG5cdFwiLi9zay5qc1wiOiAyNTUsXG5cdFwiLi9zbFwiOiAyNTYsXG5cdFwiLi9zbC5qc1wiOiAyNTYsXG5cdFwiLi9zcVwiOiAyNTcsXG5cdFwiLi9zcS5qc1wiOiAyNTcsXG5cdFwiLi9zclwiOiAyNTgsXG5cdFwiLi9zci1jeXJsXCI6IDI1OSxcblx0XCIuL3NyLWN5cmwuanNcIjogMjU5LFxuXHRcIi4vc3IuanNcIjogMjU4LFxuXHRcIi4vc3NcIjogMjYwLFxuXHRcIi4vc3MuanNcIjogMjYwLFxuXHRcIi4vc3ZcIjogMjYxLFxuXHRcIi4vc3YuanNcIjogMjYxLFxuXHRcIi4vc3dcIjogMjYyLFxuXHRcIi4vc3cuanNcIjogMjYyLFxuXHRcIi4vdGFcIjogMjYzLFxuXHRcIi4vdGEuanNcIjogMjYzLFxuXHRcIi4vdGVcIjogMjY0LFxuXHRcIi4vdGUuanNcIjogMjY0LFxuXHRcIi4vdGV0XCI6IDI2NSxcblx0XCIuL3RldC5qc1wiOiAyNjUsXG5cdFwiLi90Z1wiOiAyNjYsXG5cdFwiLi90Zy5qc1wiOiAyNjYsXG5cdFwiLi90aFwiOiAyNjcsXG5cdFwiLi90aC5qc1wiOiAyNjcsXG5cdFwiLi90bC1waFwiOiAyNjgsXG5cdFwiLi90bC1waC5qc1wiOiAyNjgsXG5cdFwiLi90bGhcIjogMjY5LFxuXHRcIi4vdGxoLmpzXCI6IDI2OSxcblx0XCIuL3RyXCI6IDI3MCxcblx0XCIuL3RyLmpzXCI6IDI3MCxcblx0XCIuL3R6bFwiOiAyNzEsXG5cdFwiLi90emwuanNcIjogMjcxLFxuXHRcIi4vdHptXCI6IDI3Mixcblx0XCIuL3R6bS1sYXRuXCI6IDI3Myxcblx0XCIuL3R6bS1sYXRuLmpzXCI6IDI3Myxcblx0XCIuL3R6bS5qc1wiOiAyNzIsXG5cdFwiLi91Zy1jblwiOiAyNzQsXG5cdFwiLi91Zy1jbi5qc1wiOiAyNzQsXG5cdFwiLi91a1wiOiAyNzUsXG5cdFwiLi91ay5qc1wiOiAyNzUsXG5cdFwiLi91clwiOiAyNzYsXG5cdFwiLi91ci5qc1wiOiAyNzYsXG5cdFwiLi91elwiOiAyNzcsXG5cdFwiLi91ei1sYXRuXCI6IDI3OCxcblx0XCIuL3V6LWxhdG4uanNcIjogMjc4LFxuXHRcIi4vdXouanNcIjogMjc3LFxuXHRcIi4vdmlcIjogMjc5LFxuXHRcIi4vdmkuanNcIjogMjc5LFxuXHRcIi4veC1wc2V1ZG9cIjogMjgwLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogMjgwLFxuXHRcIi4veW9cIjogMjgxLFxuXHRcIi4veW8uanNcIjogMjgxLFxuXHRcIi4vemgtY25cIjogMjgyLFxuXHRcIi4vemgtY24uanNcIjogMjgyLFxuXHRcIi4vemgtaGtcIjogMjgzLFxuXHRcIi4vemgtaGsuanNcIjogMjgzLFxuXHRcIi4vemgtdHdcIjogMjg0LFxuXHRcIi4vemgtdHcuanNcIjogMjg0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMzg2O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdiwgUGxhdGZvcm0gfSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvc3RhdHVzLWJhclwiO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlblwiO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9ob21lL2hvbWVcIjtcbmltcG9ydCB7IExpc3RQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgV2Vla09yZGVyc1BhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvd2Vlay1vcmRlcnMvd2Vlay1vcmRlcnNcIjtcbmltcG9ydCB7IERlZXBsaW5rcyB9IGZyb20gXCJAaW9uaWMtbmF0aXZlL2RlZXBsaW5rc1wiO1xuaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvaW4tYXBwLWJyb3dzZXJcIjtcbmltcG9ydCB7IEhlbHBlclByb3ZpZGVyIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL2ZyZXNoLWJvb2tzLWFwaS9mcmVzaC1ib29rcy1hcGlcIjtcbmltcG9ydCB7IEV4dHJhY3RJbnZvaWNlRGV0YWlsUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9leHRyYWN0LWludm9pY2UtZGV0YWlsL2V4dHJhY3QtaW52b2ljZS1kZXRhaWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiBcImFwcC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTXlBcHAge1xuICBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XG5cbiAgcm9vdFBhZ2U6IGFueSA9IEhvbWVQYWdlO1xuXG4gIHBhZ2VzOiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IGNvbXBvbmVudDogYW55IH0+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmcmVzaEJvb2tzQXBpOiBGcmVzaEJvb2tzQXBpUHJvdmlkZXIsXG4gICAgcHVibGljIGhlbHBlcjogSGVscGVyUHJvdmlkZXIsXG4gICAgcHVibGljIGlhYjogSW5BcHBCcm93c2VyLFxuICAgIHB1YmxpYyBkZWVwbGlua3M6IERlZXBsaW5rcyxcbiAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHB1YmxpYyBzdGF0dXNCYXI6IFN0YXR1c0JhcixcbiAgICBwdWJsaWMgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW5cbiAgKSB7XG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XG5cbiAgICAvLyB1c2VkIGZvciBhbiBleGFtcGxlIG9mIG5nRm9yIGFuZCBuYXZpZ2F0aW9uXG4gICAgdGhpcy5wYWdlcyA9IFtcbiAgICAgIHsgdGl0bGU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVQYWdlIH0sXG4gICAgICB7IHRpdGxlOiBcIldlZWsgT3JkZXJzXCIsIGNvbXBvbmVudDogV2Vla09yZGVyc1BhZ2UgfSxcbiAgICAgIHsgdGl0bGU6IFwiRXh0cmFjdCBJbnZvaWNlIERldGFpbFwiLCBjb21wb25lbnQ6IEV4dHJhY3RJbnZvaWNlRGV0YWlsUGFnZSB9XG5cbiAgICBdO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAvLyBPa2F5LCBzbyB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG91ciBwbHVnaW5zIGFyZSBhdmFpbGFibGUuXG4gICAgICAvLyBIZXJlIHlvdSBjYW4gZG8gYW55IGhpZ2hlciBsZXZlbCBuYXRpdmUgdGhpbmdzIHlvdSBtaWdodCBuZWVkLlxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgICB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cbiAgICAgIC8vIHRoaXMuZnJlc2hCb29rc0FwaS5nZXRBdXRob3JpemF0aW9uKCkudGhlbihkYXRhID0+IHtcbiAgICAgIC8vICAgdGhpcy5oZWxwZXIubHMuc2V0KFwiYXV0aFwiLCBkYXRhKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmRlZXBsaW5rc1xuICAgICAgICAucm91dGUoe1xuICAgICAgICAgIFwiL1wiOiBIb21lUGFnZVxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIG1hdGNoID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcImNvZGVcIiwgbWF0Y2guJGFyZ3MuY29kZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBtYXRjaGVkIHJvdXRlXCIsIG1hdGNoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5vbWF0Y2ggPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdvdCBhIGRlZXBsaW5rIHRoYXQgZGlkbid0IG1hdGNoXCIsIG5vbWF0Y2gpO1xuICAgICAgICAgICAgaWYgKG5vbWF0Y2ggPT0gXCJjb3Jkb3ZhX25vdF9hdmFpbGFibGVcIikge1xuICAgICAgICAgICAgICAvL3RyeSBhcyB3ZWJcbiAgICAgICAgICAgICAgLy8gdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgLy8gdmFyIGNvZGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvZGUpO1xuICAgICAgICAgICAgICAvLyB0aGlzLmhlbHBlci5scy5zZXQoXCJjb2RlXCIsIGNvZGUpLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5QYWdlKHBhZ2UpIHtcbiAgICAvLyBSZXNldCB0aGUgY29udGVudCBuYXYgdG8gaGF2ZSBqdXN0IHRoaXMgcGFnZVxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xuICAgIHRoaXMubmF2LnNldFJvb3QocGFnZS5jb21wb25lbnQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFBhZ2Uge1xuICBzZWxlY3RlZEl0ZW06IGFueTtcbiAgaWNvbnM6IHN0cmluZ1tdO1xuICBpdGVtczogQXJyYXk8e3RpdGxlOiBzdHJpbmcsIG5vdGU6IHN0cmluZywgaWNvbjogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcykge1xuICAgIC8vIElmIHdlIG5hdmlnYXRlZCB0byB0aGlzIHBhZ2UsIHdlIHdpbGwgaGF2ZSBhbiBpdGVtIGF2YWlsYWJsZSBhcyBhIG5hdiBwYXJhbVxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmF2UGFyYW1zLmdldCgnaXRlbScpO1xuXG4gICAgLy8gTGV0J3MgcG9wdWxhdGUgdGhpcyBwYWdlIHdpdGggc29tZSBmaWxsZXIgY29udGVudCBmb3IgZnVuemllc1xuICAgIHRoaXMuaWNvbnMgPSBbJ2ZsYXNrJywgJ3dpZmknLCAnYmVlcicsICdmb290YmFsbCcsICdiYXNrZXRiYWxsJywgJ3BhcGVyLXBsYW5lJyxcbiAgICAnYW1lcmljYW4tZm9vdGJhbGwnLCAnYm9hdCcsICdibHVldG9vdGgnLCAnYnVpbGQnXTtcblxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgIHRpdGxlOiAnSXRlbSAnICsgaSxcbiAgICAgICAgbm90ZTogJ1RoaXMgaXMgaXRlbSAjJyArIGksXG4gICAgICAgIGljb246IHRoaXMuaWNvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5pY29ucy5sZW5ndGgpXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaXRlbVRhcHBlZChldmVudCwgaXRlbSkge1xuICAgIC8vIFRoYXQncyByaWdodCwgd2UncmUgcHVzaGluZyB0byBvdXJzZWx2ZXMhXG4gICAgdGhpcy5uYXZDdHJsLnB1c2goTGlzdFBhZ2UsIHtcbiAgICAgIGl0ZW06IGl0ZW1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xpc3QvbGlzdC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgSHR0cCxcbiAgVVJMU2VhcmNoUGFyYW1zLFxuICBIZWFkZXJzLFxuICBSZXF1ZXN0T3B0aW9ucyxcbiAgUmVxdWVzdE1ldGhvZFxufSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gXCJpb25pYy1hbmd1bGFyXCI7XG5pbXBvcnQgeyBIZWxwZXJQcm92aWRlciB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBJbkFwcEJyb3dzZXIgfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3NlclwiO1xuaW1wb3J0IHsgQ29kZVB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvZGUtcHVzaCc7XG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBGcmVzaEJvb2tzQXBpUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnJlc2hCb29rc0FwaVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGh0dHA6IEh0dHAsXG4gICAgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwdWJsaWMgaGVscGVyOiBIZWxwZXJQcm92aWRlcixcbiAgICBwcml2YXRlIGNvZGVQdXNoOiBDb2RlUHVzaCxcbiAgICBwdWJsaWMgaWFiOiBJbkFwcEJyb3dzZXJcbiAgKSB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoXCJjb3JlXCIpID09IHRydWUpIHtcbiAgICAgIHRoaXMuZW5hYmxlUHJveHkgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gXCJodHRwOi8vMTI3LjAuMC4xOjgxMDAvXCI7XG4gICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBcImNhMjZjYmNmOTMzMTY3MWQ2YTMzZjdhM2NiNThiNjk5Mzc2YWIzYWI3MlwiO1xuICAgICAgdGhpcy5jbGllbnRfaWQgPSBcIjEwMDAuRVMxTTZOWUJBVFU4ODE5NzFCRjFYMDE0MkE5Sk9NXCI7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gcGFyc2VkVXJsLm9yaWdpbjtcbiAgICAgICAgaWYoYmFzZVVybC5pbmNsdWRlcyhcImdpdGh1YlwiKSl7XG4gICAgICAgICAgdGhpcy5yZWRpcmVjdF91cmkgPSBcImh0dHBzOi8vZWF0YW5kdHJlYXQtYWQuZ2l0aHViLmlvL2ZyZXNoQm9va3MvXCI7XG4gICAgICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ID0gXCJiZDk4MzU2MGQ2ZTYyYjE3NzYyN2RlMGNlYWI2MWQ5ZGUyNjQ5NzUzODVcIjtcbiAgICAgICAgICB0aGlzLmNsaWVudF9pZCA9IFwiMTAwMC5SUE1WSURLTzk5VEwzVVZHNURESkZVUU0zNjBTWEhcIjtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICB9XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVXJsID1cbiAgICAgICAgXCJodHRwczovL2FjY291bnRzLnpvaG8uY29tL29hdXRoL3YyL2F1dGg/XCIgK1xuICAgICAgICBcInNjb3BlPVwiICtcbiAgICAgICAgdGhpcy56b2hvX3Njb3BlICtcbiAgICAgICAgXCImY2xpZW50X2lkPVwiICtcbiAgICAgICAgdGhpcy5jbGllbnRfaWQgK1xuICAgICAgICBcIiZzdGF0ZT10ZXN0aW5nJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9XCIgK1xuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSArXG4gICAgICAgIFwiJmFjY2Vzc190eXBlPW9mZmxpbmVcIjtcbiAgICAgIC8vIFwiaHR0cHM6Ly9teS5mcmVzaGJvb2tzLmNvbS9zZXJ2aWNlL2F1dGgvb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD03MWUzYTZlNzE4MDQzNzVlOGMyMDU1YjM0ZTA1NDQ0YTQxYzg2MzEyYWM0OWRkNWFhYTUxNDZkM2NjOWRlYTEzJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHM6Ly9lYXRhbmR0cmVhdC1hZC5naXRodWIuaW8vZnJlc2hCb29rc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrVXBkYXRlKCk7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVXJsID1cbiAgICAgICAgXCJodHRwczovL2FjY291bnRzLnpvaG8uY29tL29hdXRoL3YyL2F1dGg/XCIgK1xuICAgICAgICBcInNjb3BlPVwiICtcbiAgICAgICAgdGhpcy56b2hvX3Njb3BlICtcbiAgICAgICAgXCImY2xpZW50X2lkPVwiICtcbiAgICAgICAgdGhpcy5jbGllbnRfaWQgK1xuICAgICAgICBcIiZzdGF0ZT10ZXN0aW5nJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9XCIgK1xuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSArXG4gICAgICAgIFwiJmFjY2Vzc190eXBlPW9mZmxpbmVcIjtcbiAgICAgIC8vIFwiaHR0cHM6Ly9teS5mcmVzaGJvb2tzLmNvbS9zZXJ2aWNlL2F1dGgvb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD03MWUzYTZlNzE4MDQzNzVlOGMyMDU1YjM0ZTA1NDQ0YTQxYzg2MzEyYWM0OWRkNWFhYTUxNDZkM2NjOWRlYTEzJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9ZWF0YW5kdHJlYXQ6Ly9mcmVzaEJvb2tzL1wiO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIEZyZXNoQm9va3NBcGlQcm92aWRlciBQcm92aWRlclwiKTtcbiAgfVxuXG4gIGNoZWNrVXBkYXRlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY29kZVB1c2guc3luYygpLnN1YnNjcmliZSgoc3luY1N0YXR1cykgPT4gY29uc29sZS5sb2coc3luY1N0YXR1cykpO1xuXG4gICAgICAgIGNvbnN0IGRvd25sb2FkUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MpID0+IHsgY29uc29sZS5sb2coYERvd25sb2FkZWQgJHtwcm9ncmVzcy5yZWNlaXZlZEJ5dGVzfSBvZiAke3Byb2dyZXNzLnRvdGFsQnl0ZXN9YCk7IH1cbiAgICAgICAgdGhpcy5jb2RlUHVzaC5zeW5jKHt9LCBkb3dubG9hZFByb2dyZXNzKS5zdWJzY3JpYmUoKHN5bmNTdGF0dXMpID0+IGNvbnNvbGUubG9nKHN5bmNTdGF0dXMpKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cbiAgfTtcblxuICBlbmFibGVQcm94eSA9IHRydWU7XG5cbiAgcmVkaXJlY3RfdXJpID0gXCJlYXRhbmR0cmVhdDovL2ZyZXNoQm9va3MvXCI7XG4gIGNsaWVudF9zZWNyZXQgPSBcIjk2YjY1YjNmY2RmYmJhMzM2NzRlZWVjMjM2YzMyMWFlMGYxY2VmMjMwZVwiO1xuICBjbGllbnRfaWQgPSBcIjEwMDAuM1JJWFNUTzVWVDJFOTExMzBLWENDMVZJS0RBQ1ZWXCI7XG4gIHpvaG9fc2NvcGUgPVxuICAgIFwiWm9ob0ludm9pY2UuZXhwZW5zZXMuUkVBRCxab2hvSW52b2ljZS5wcm9qZWN0cy5SRUFELFpvaG9JbnZvaWNlLmNyZWRpdG5vdGVzLlJFQUQsWm9ob0ludm9pY2UuY3VzdG9tZXJwYXltZW50cy5SRUFELFpvaG9JbnZvaWNlLmVzdGltYXRlcy5SRUFELFpvaG9JbnZvaWNlLnNldHRpbmdzLlJFQUQsWm9ob0ludm9pY2UuY29udGFjdHMuQ3JlYXRlLFpvaG9JbnZvaWNlLmNvbnRhY3RzLlVQREFURSxab2hvSW52b2ljZS5jb250YWN0cy5SRUFELFpvaG9JbnZvaWNlLmNvbnRhY3RzLkRFTEVURSxab2hvSW52b2ljZS5pbnZvaWNlcy5SRUFEXCI7XG4gIGF1dGhlbnRpY2F0aW9uVXJsID0gXCJcIjtcblxuICBnZXRBdXRob3JpemF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgIGlmICghIWF1dGgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYXV0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgICAgICBpZiAoISFhdXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhdXRoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcXNfY29kZSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiY29kZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoISFxc19jb2RlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci5scy5zZXQoXCJjb2RlXCIsIHFzX2NvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWJBdXRob3JpemF0aW9uKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYkF1dGhvcml6YXRpb24ocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiY29kZVwiKS50aGVuKGNvZGUgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci5scy5yZW1vdmUoXCJhdXRoXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyb3dzZXIgPSB0aGlzLmlhYi5jcmVhdGUodGhpcy5hdXRoZW50aWNhdGlvblVybCk7XG4gICAgICAgICAgICAgICAgYnJvd3Nlci5zaG93KCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwiYXV0aFwiKS50aGVuKGF1dGggPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIubHMuZ2V0KFwicmVmcmVzaF90b2tlblwiKS50aGVuKHJlZnJlc2hfdG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRBdXRoV2l0aENvZGUoY29kZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0QXV0aFdpdGhBdXRoKGF1dGgsIHJlZnJlc2hfdG9rZW4sIHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEJ1c2luZXNzX21lbWJlcnNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZ2V0QXV0aG9yaXphdGlvbigpLnRoZW4oKGF1dGg6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9nZXRCdXNpbmVzc19tZW1iZXJzaGlwcyhhdXRoLmFjY2Vzc190b2tlbiwgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJbnZvaWNlcyA9IChhY2NvdW50X2lkLCBzZWFyY2hTdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmdldEF1dGhvcml6YXRpb24oKS50aGVuKChhdXRoOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0SW52b2ljZXMoYXV0aC5hY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsIHNlYXJjaFN0cmluZywgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJbnZvaWNlID0gKGFjY291bnRfaWQsIGludm9pY2VfaWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmdldEF1dGhvcml6YXRpb24oKS50aGVuKChhdXRoOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0SW52b2ljZShhdXRoLmFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgaW52b2ljZV9pZCwgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuaGVscGVyLmxzLmdldChcImF1dGhcIikudGhlbigoYXV0aDogYW55KSA9PiB7XG4gICAgICAvLyAgIHRoaXMuX2dldEludm9pY2UoYXV0aC5hY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsIGludm9pY2VfaWQsIHJlc29sdmUpO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZEVtYWlsID0gKGFjY291bnRfaWQsIG1haWxCb2R5KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5nZXRBdXRob3JpemF0aW9uKCkudGhlbigoYXV0aDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX1NlbmRFbWFpbChhdXRoLmFjY2Vzc190b2tlbiwgYWNjb3VudF9pZCwgbWFpbEJvZHksIHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmhlbHBlci5scy5nZXQoXCJhdXRoXCIpLnRoZW4oKGF1dGg6IGFueSkgPT4ge1xuICAgICAgLy8gICB0aGlzLl9nZXRJbnZvaWNlKGF1dGguYWNjZXNzX3Rva2VuLCBhY2NvdW50X2lkLCBpbnZvaWNlX2lkLCByZXNvbHZlKTtcbiAgICAgIC8vIH0pO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgZ2V0SXRlbURldGFpbCA9IChhY2NvdW50X2lkLCBpdGVtX2lkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5nZXRBdXRob3JpemF0aW9uKCkudGhlbigoYXV0aDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX2dldEl0ZW0oYXV0aC5hY2Nlc3NfdG9rZW4sIGFjY291bnRfaWQsIGl0ZW1faWQsIHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmhlbHBlci5scy5nZXQoXCJhdXRoXCIpLnRoZW4oKGF1dGg6IGFueSkgPT4ge1xuICAgICAgLy8gICB0aGlzLl9nZXRJbnZvaWNlKGF1dGguYWNjZXNzX3Rva2VuLCBhY2NvdW50X2lkLCBpbnZvaWNlX2lkLCByZXNvbHZlKTtcbiAgICAgIC8vIH0pO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgcHJpdmF0ZSBfd2ViQXV0aG9yaXphdGlvbihyZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZCkge1xuICAgIHRoaXMuaGVscGVyLmxzLmdldChcImNvZGVcIikudGhlbihjb2RlID0+IHtcbiAgICAgIGlmICghY29kZSkge1xuICAgICAgICB0aGlzLmhlbHBlci5scy5yZW1vdmUoXCJhdXRoXCIpO1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gdGhpcy5hdXRoZW50aWNhdGlvblVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGVscGVyLmxzLmdldChcImF1dGhcIikudGhlbihhdXRoID0+IHtcbiAgICAgICAgICAvLyB0aGlzLmhlbHBlci5scy5nZXQoXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4ocmVmcmVzaF90b2tlbiA9PiB7XG4gICAgICAgICAgLy8gICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5fZ2V0QXV0aFdpdGhDb2RlKGNvZGUsIHJlc29sdmUpO1xuICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAgICAgdGhpcy5fZ2V0QXV0aFdpdGhBdXRoKGF1dGgsIHJlZnJlc2hfdG9rZW4sIHJlc29sdmUpO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIHRoaXMuX2dldEF1dGhXaXRoQ29kZShjb2RlLCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRBdXRoV2l0aENvZGUoXG4gICAgY29kZTogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIFBPU1QgXG4gICAgICAgIC1IIFwiQXBpLVZlcnNpb246IGFscGhhXCIgXG4gICAgICAgIC1IIFwiQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXCIgXG4gICAgICAgIC1kICd7XG4gICAgICAgIFwiZ3JhbnRfdHlwZVwiOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICAgICAgICBcImNsaWVudF9zZWNyZXRcIjogXCI8aW5zZXJ0IHlvdXIgc2VjcmV0PlwiLFxuICAgICAgICBcImNvZGVcIjogXCI8aW5zZXJ0IHlvdXIgYXV0aG9yaXphdGlvbiBjb2RlPlwiLFxuICAgICAgICBcImNsaWVudF9pZFwiOiBcIjxpbnNlcnQgeW91ciBjbGllbnQgaWQ+XCIsXG4gICAgICAgIFwicmVkaXJlY3RfdXJpXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9qdXN0X2FuX2V4YW1wbGVcIlxuICAgICAgfScgXCJodHRwczovL2FwaS5mcmVzaGJvb2tzLmNvbS9hdXRoL29hdXRoL3Rva2VuXCIgLy9cblxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvdG9rZW5cIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi90b2tlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vYWNjb3VudHMuem9oby5jb20vb2F1dGgvdjIvdG9rZW5cIjtcbiAgICB9XG4gICAgLy9BcHBlbmQgcGFyYW1zIGluIHF1ZXJ5IHN0cmluZyBmbyBaT0hPXG4gICAgdXJsICs9XG4gICAgICBcIj9cIiArXG4gICAgICBcImNvZGU9XCIgK1xuICAgICAgY29kZSArXG4gICAgICBcIiZcIiArXG4gICAgICBcImNsaWVudF9pZD1cIiArXG4gICAgICB0aGlzLmNsaWVudF9pZCArXG4gICAgICBcIiZcIiArXG4gICAgICBcImNsaWVudF9zZWNyZXQ9XCIgK1xuICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwicmVkaXJlY3RfdXJpPVwiICtcbiAgICAgIHRoaXMucmVkaXJlY3RfdXJpICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZ3JhbnRfdHlwZT1cIiArXG4gICAgICBcImF1dGhvcml6YXRpb25fY29kZVwiO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkFwaS1WZXJzaW9uXCIsIFwiYWxwaGFcIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGxldCBib2R5ID0ge1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxuICAgICAgZ3JhbnRfdHlwZTogXCJhdXRob3JpemF0aW9uX2NvZGVcIlxuICAgIH07XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgLy8gYW5kIHNhdmUgdGhlIGRhdGEgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICB0aGlzLmhlbHBlci5scy5zZXQoXCJhdXRoXCIsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcInJlZnJlc2hfdG9rZW5cIiwgZGF0YS5yZWZyZXNoX3Rva2VuKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRBdXRoV2l0aEF1dGgoXG4gICAgYXV0aDogYW55LFxuICAgIHJlZnJlc2hfdG9rZW46IGFueSxcbiAgICByZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZFxuICApIHtcbiAgICAvKlxuICAgICAgY3VybCAtWCBQT1NUIFxuICAgICAgICAtSCBcIkFwaS1WZXJzaW9uOiBhbHBoYVwiIFxuICAgICAgICAtSCBcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblwiIFxuICAgICAgICAtZCAne1xuICAgICAgICBcImdyYW50X3R5cGVcIjogXCJhdXRob3JpemF0aW9uX2NvZGVcIixcbiAgICAgICAgXCJjbGllbnRfc2VjcmV0XCI6IFwiPGluc2VydCB5b3VyIHNlY3JldD5cIixcbiAgICAgICAgXCJjb2RlXCI6IFwiPGluc2VydCB5b3VyIGF1dGhvcml6YXRpb24gY29kZT5cIixcbiAgICAgICAgXCJjbGllbnRfaWRcIjogXCI8aW5zZXJ0IHlvdXIgY2xpZW50IGlkPlwiLFxuICAgICAgICBcInJlZGlyZWN0X3VyaVwiOiBcImh0dHBzOi8vbG9jYWxob3N0OjMwMDAvanVzdF9hbl9leGFtcGxlXCJcbiAgICAgIH0nIFwiaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYXV0aC9vYXV0aC90b2tlblwiIC8vXG5cbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL3Rva2VuXCI7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoXCJjb3JlXCIpID09IHRydWUgJiYgdGhpcy5lbmFibGVQcm94eSkge1xuICAgICAgdXJsID0gXCIvdG9rZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gXCJodHRwczovL2FjY291bnRzLnpvaG8uY29tL29hdXRoL3YyL3Rva2VuXCI7XG4gICAgfVxuICAgIHVybCArPVxuICAgICAgXCI/XCIgK1xuICAgICAgXCJyZWZyZXNoX3Rva2VuPVwiICtcbiAgICAgIHJlZnJlc2hfdG9rZW4gK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJjbGllbnRfaWQ9XCIgK1xuICAgICAgdGhpcy5jbGllbnRfaWQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJjbGllbnRfc2VjcmV0PVwiICtcbiAgICAgIHRoaXMuY2xpZW50X3NlY3JldCArXG4gICAgICBcIiZcIiArXG4gICAgICBcInJlZGlyZWN0X3VyaT1cIiArXG4gICAgICB0aGlzLnJlZGlyZWN0X3VyaSArXG4gICAgICBcIiZcIiArXG4gICAgICBcImdyYW50X3R5cGU9XCIgK1xuICAgICAgXCJyZWZyZXNoX3Rva2VuXCI7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXBpLVZlcnNpb25cIiwgXCJhbHBoYVwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICByZWZyZXNoX3Rva2VuOiBhdXRoLnJlZnJlc2hfdG9rZW4sXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jbGllbnRfc2VjcmV0LFxuICAgICAgcmVkaXJlY3RfdXJpOiB0aGlzLnJlZGlyZWN0X3VyaSxcbiAgICAgIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiXG4gICAgfTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGJvZHksIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gd2UndmUgZ290IGJhY2sgdGhlIHJhdyBkYXRhLCBub3cgZ2VuZXJhdGUgdGhlIGNvcmUgc2NoZWR1bGUgZGF0YVxuICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIHRoaXMuaGVscGVyLmxzLnNldChcImF1dGhcIiwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEludm9pY2UoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIGludm9pY2VfaWQ6IGFueSxcbiAgICByZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZFxuICApIHtcbiAgICAvKlxuICAgICAgY3VybCAtWCBHRVQgXG4gICAgICAtSCAnQXV0aG9yaXphdGlvbjogQmVhcmVyIDg3NjMzMzEwMDhjZjIxY2RmN2E2YWQzYTM2NzUzNzM0ZTU5OWZmOTZkNGI4MDU0NDQ0NmRhNDAzMzE5MWRkMDAnIFxuICAgICAgLUggJ0FwaS1WZXJzaW9uOiBhbHBoYScgXG4gICAgICAtSCAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJyBcbiAgICAgIGh0dHBzOi8vYXBpLmZyZXNoYm9va3MuY29tL2FjY291bnRpbmcvYWNjb3VudC9LNVZ4YS9pbnZvaWNlcy9pbnZvaWNlcz9zZWFyY2glNUJub3RlcyU1RD1XZWRuZXNkYXlcbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9pbnZvaWNlLnpvaG8uY29tL2FwaS92M1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIvaW52b2ljZXMvXCIgKyBpbnZvaWNlX2lkO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiWm9oby1vYXV0aHRva2VuIFwiICsgYWNjZXNzX3Rva2VuKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIlgtY29tLXpvaG8taW52b2ljZS1vcmdhbml6YXRpb25pZFwiLCBhY2NvdW50X2lkKTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdGhpcy5odHRwXG4gICAgICAucmVxdWVzdCh1cmwsIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gd2UndmUgZ290IGJhY2sgdGhlIHJhdyBkYXRhLCBub3cgZ2VuZXJhdGUgdGhlIGNvcmUgc2NoZWR1bGUgZGF0YVxuICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX1NlbmRFbWFpbChcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICBhY2NvdW50X2lkOiBzdHJpbmcsXG4gICAgbWFpbEJvZHk6IHt9LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBcbiAgLy8gJCBjdXJsIGh0dHBzOi8vaW52b2ljZS56b2hvLmNvbS9hcGkvdjMvY29udGFjdHMve2NvbnRhY3RfaWR9L3N0YXRlbWVudHMvZW1haWxcbiAgLy8gLVggUE9TVFxuICAvLyAtSCBcIlgtY29tLXpvaG8taW52b2ljZS1vcmdhbml6YXRpb25pZDogMTAyMzQ2OTVcIlxuICAvLyAtSCBcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCJcbiAgLy8gLUggXCJBdXRob3JpemF0aW9uOiBab2hvLW9hdXRodG9rZW4gMTAwMC40MWQ5ZjJjZmJkMWI3YThmOWUzMTRiN2FmZjdiYzJkMS44ZmNjOTgxMDgxMGEyMTY3OTNmMzg1YjlkZDZlMTI1ZlwiXG4gIC8vIC1kICd7XCJmaWVsZFwiOlwidmFsdWVcIixcImZpZWxkXCI6XCJ2YWx1ZVwifSdcbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9pbnZvaWNlLnpvaG8uY29tL2FwaS92M1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIvY29udGFjdHMvMTc2NDI5NzAwMDAwMDA4Mzk5OS9zdGF0ZW1lbnRzL2VtYWlsXCI7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJab2hvLW9hdXRodG9rZW4gXCIgKyBhY2Nlc3NfdG9rZW4pO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1jb20tem9oby1pbnZvaWNlLW9yZ2FuaXphdGlvbmlkXCIsIGFjY291bnRfaWQpO1xuICAgIGxldCBib2R5ID0gbWFpbEJvZHk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgLy8gYW5kIHNhdmUgdGhlIGRhdGEgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2dldEl0ZW0oXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIGl0ZW1faWQ6IGFueSxcbiAgICByZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZFxuICApIHtcbiAgICAvKlxuICAgICAgY3VybCAtWCBHRVQgXG4gICAgICAtSCAnQXV0aG9yaXphdGlvbjogQmVhcmVyIDg3NjMzMzEwMDhjZjIxY2RmN2E2YWQzYTM2NzUzNzM0ZTU5OWZmOTZkNGI4MDU0NDQ0NmRhNDAzMzE5MWRkMDAnIFxuICAgICAgLUggJ0FwaS1WZXJzaW9uOiBhbHBoYScgXG4gICAgICAtSCAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJyBcbiAgICAgIGh0dHBzOi8vYXBpLmZyZXNoYm9va3MuY29tL2FjY291bnRpbmcvYWNjb3VudC9LNVZ4YS9pbnZvaWNlcy9pbnZvaWNlcz9zZWFyY2glNUJub3RlcyU1RD1XZWRuZXNkYXlcbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9pbnZvaWNlLnpvaG8uY29tL2FwaS92M1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIvaXRlbXMvXCIgKyBpdGVtX2lkO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiWm9oby1vYXV0aHRva2VuIFwiICsgYWNjZXNzX3Rva2VuKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIlgtY29tLXpvaG8taW52b2ljZS1vcmdhbml6YXRpb25pZFwiLCBhY2NvdW50X2lkKTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdGhpcy5odHRwXG4gICAgICAucmVxdWVzdCh1cmwsIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gd2UndmUgZ290IGJhY2sgdGhlIHJhdyBkYXRhLCBub3cgZ2VuZXJhdGUgdGhlIGNvcmUgc2NoZWR1bGUgZGF0YVxuICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0SW52b2ljZXMoXG4gICAgYWNjZXNzX3Rva2VuOiBzdHJpbmcsXG4gICAgYWNjb3VudF9pZDogc3RyaW5nLFxuICAgIHNlYXJjaFN0cmluZzogYW55LFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkXG4gICkge1xuICAgIC8qXG4gICAgICBjdXJsIC1YIEdFVCBcbiAgICAgIC1IICdBdXRob3JpemF0aW9uOiBCZWFyZXIgODc2MzMzMTAwOGNmMjFjZGY3YTZhZDNhMzY3NTM3MzRlNTk5ZmY5NmQ0YjgwNTQ0NDQ2ZGE0MDMzMTkxZGQwMCcgXG4gICAgICAtSCAnQXBpLVZlcnNpb246IGFscGhhJyBcbiAgICAgIC1IICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24nIFxuICAgICAgaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYWNjb3VudGluZy9hY2NvdW50L0s1VnhhL2ludm9pY2VzL2ludm9pY2VzP3NlYXJjaCU1Qm5vdGVzJTVEPVdlZG5lc2RheVxuICAgICAgKi9cbiAgICBsZXQgdXJsID0gXCIvZnJlc2hib29rc1wiO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKFwiY29yZVwiKSA9PSB0cnVlICYmIHRoaXMuZW5hYmxlUHJveHkpIHtcbiAgICAgIHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gXCJodHRwczovL2ludm9pY2Uuem9oby5jb20vYXBpL3YzXCI7XG4gICAgfVxuICAgIHVybCArPSBcIi9pbnZvaWNlcz9cIiArIHNlYXJjaFN0cmluZztcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIlpvaG8tb2F1dGh0b2tlbiBcIiArIGFjY2Vzc190b2tlbik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJYLWNvbS16b2hvLWludm9pY2Utb3JnYW5pemF0aW9uaWRcIiwgYWNjb3VudF9pZCk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnJlcXVlc3QodXJsLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgLy8gYW5kIHNhdmUgdGhlIGRhdGEgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCdXNpbmVzc19tZW1iZXJzaGlwcyhcbiAgICBhY2Nlc3NfdG9rZW46IHN0cmluZyxcbiAgICByZXNvbHZlOiAodmFsdWU/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZFxuICApIHtcbiAgICAvKlxuICAgICAgY3VybCAtWCBHRVQgXFxcbiAgICAgIC1IICdBdXRob3JpemF0aW9uOiBCZWFyZXIgPGluc2VydCB5b3VyIGJlYXJlciBoZXJlPicgXFxcbiAgICAgIC1IICdBcGktVmVyc2lvbjogYWxwaGEnIFxcXG4gICAgICAtSCAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJyBcXFxuICAgICAgaHR0cHM6Ly9hcGkuZnJlc2hib29rcy5jb20vYXV0aC9hcGkvdjEvdXNlcnMvbWVcbiAgICAgICovXG4gICAgbGV0IHVybCA9IFwiL2ZyZXNoYm9va3NcIjtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSAmJiB0aGlzLmVuYWJsZVByb3h5KSB7XG4gICAgICB1cmwgPSBcIi9mcmVzaGJvb2tzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9pbnZvaWNlLnpvaG8uY29tL2FwaS92M1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIvb3JnYW5pemF0aW9uc1wiO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoXCJBcGktVmVyc2lvblwiLCBcImFscGhhXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIlpvaG8tb2F1dGh0b2tlbiBcIiArIGFjY2Vzc190b2tlbik7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHRoaXMuaHR0cFxuICAgICAgLnJlcXVlc3QodXJsLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIC8vIHdlJ3ZlIGdvdCBiYWNrIHRoZSByYXcgZGF0YSwgbm93IGdlbmVyYXRlIHRoZSBjb3JlIHNjaGVkdWxlIGRhdGFcbiAgICAgICAgICAvLyBhbmQgc2F2ZSB0aGUgZGF0YSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vRVJST1JcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgIC8vUmVtb3ZlIGNvZGUgYW5kIGF1dGhcbiAgICAgICAgICAgIHRoaXMucmVzZXRBcHBWYXJpYWJsZVRvTG9naW5BZ2FpbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuICBnZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSwgdXJsID0gbnVsbCkgPT4ge1xuICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZXNldEFwcFZhcmlhYmxlVG9Mb2dpbkFnYWluKCkge1xuICAgIHRoaXMuaGVscGVyLmxzLnJlbW92ZShcImF1dGhcIik7XG4gICAgdGhpcy5oZWxwZXIubHMucmVtb3ZlKFwiY29kZVwiKTtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcyhcImNvcmVcIikgPT0gdHJ1ZSkge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbjtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvZnJlc2gtYm9va3MtYXBpL2ZyZXNoLWJvb2tzLWFwaS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBIZWxwZXJQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWxwZXJQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gSGVscGVyUHJvdmlkZXIgUHJvdmlkZXJcIik7XG4gIH1cblxuICBscyA9IHtcbiAgICBzZXQ6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBrZXkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBrZXkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9oZWxwZXIvaGVscGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==