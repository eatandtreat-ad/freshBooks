webpackJsonp([0],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.invoice = { billing_address: {}, shipping_address: {} };
    }
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ModalPage");
        this.invoice = this.navParams.get("invoice");
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-modal",template:/*ion-inline-start:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/modal/modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{invoice.customer_name}} -\n      <span [ngClass]="invoice.payment_status">\n        {{invoice.status}}\n      </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list no-padding>\n    <ion-item text-wrap no-padding>\n      <h2> Billing Address : </h2>\n      <h2>{{invoice.billing_address.address}} - {{invoice.billing_address.street2}}</h2>\n      <h2>{{invoice.shipping_address.address}} - {{invoice.shipping_address.street2}}</h2>\n    </ion-item>\n    <ion-item no-padding text-wrap *ngFor="let item of invoice.line_items">\n      <ion-avatar item-start>\n        <h1>{{item.qty}} </h1>\n      </ion-avatar>\n      <h2> {{item.name}}</h2>\n      <p>{{item.description }}</p>\n      <!-- <p>{{item | json}}</p> -->\n      <ion-avatar item-end>\n        <h2>{{item.quantity}} </h2>\n      </ion-avatar>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-navbar text-center color="danger" (click)="closeModal()">\n    <ion-title>\n      <ion-icon name="md-close"></ion-icon>\n      CLOSE\n    </ion-title>\n  </ion-navbar>\n  <ion-footer>'/*ion-inline-end:"/Users/mullahkhan/Desktop/freshBooks Invoices /freshBooks/Source/freshBooks-Ionic3/src/pages/modal/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCIuLi8uLi9zcmMvcGFnZXMvbW9kYWwvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUNaO0FBVXBDO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBUjNCLHVFQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1oseURBQVM7YUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDUCxzRUFBZSxDQUFDLFFBQVEsQ0FBQyx5REFBUyxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmM7QUFDK0I7QUFFekU7Ozs7O0dBS0c7QUFPSDtJQUVFLG1CQUFtQixPQUFzQixFQUFTLFFBQXlCLEVBQVMsU0FBb0I7UUFBckYsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUR4RyxZQUFPLEdBQVEsRUFBQyxlQUFlLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBQyxDQUFDO0lBQ21ELENBQUM7SUFFckcsOEJBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxrQ0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVZVLFNBQVM7UUFKckIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1dBQ0c7U0FDMUIsQ0FBQztrQkFHd0c7T0FGN0YsU0FBUyxDQVdyQjtJQUFELENBQUM7QUFBQTtTQVhZLFNBQVMsZSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljUGFnZU1vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTW9kYWxQYWdlIH0gZnJvbSAnLi9tb2RhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1vZGFsUGFnZSxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljUGFnZU1vZHVsZS5mb3JDaGlsZChNb2RhbFBhZ2UpLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFBhZ2VNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSW9uaWNQYWdlLCBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIFZpZXdDb250cm9sbGVyIH0gZnJvbSBcImlvbmljLWFuZ3VsYXJcIjtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBNb2RhbFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBJb25pY1BhZ2UoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBhZ2UtbW9kYWxcIixcbiAgdGVtcGxhdGVVcmw6IFwibW9kYWwuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsUGFnZSB7XG4gIGludm9pY2U6IGFueSA9IHtiaWxsaW5nX2FkZHJlc3M6e30sc2hpcHBpbmdfYWRkcmVzczp7fX07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgdmlld0N0cmwgOiBWaWV3Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zKSB7fVxuXG4gIHB1YmxpYyBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMudmlld0N0cmwuZGlzbWlzcygpO1xuICB9XG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW9uVmlld0RpZExvYWQgTW9kYWxQYWdlXCIpO1xuICAgIHRoaXMuaW52b2ljZSA9IHRoaXMubmF2UGFyYW1zLmdldChcImludm9pY2VcIik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9tb2RhbC9tb2RhbC50cyJdLCJzb3VyY2VSb290IjoiIn0=