(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-exchanges-admin-exchanges-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-button color=\"buttons\" slot=\"start\">\n        <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Admin/{{ adminUrl }}\"></ion-back-button>\n      </ion-button>\n    <ion-title>Tauschanfragen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Tauschanfragen\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ text1 }}<ion-icon name=\"close\" color=\"danger\"></ion-icon>{{ text2 }}<ion-icon name=\"checkmark\" color=\"warning\"></ion-icon>{{ text3 }}<ion-icon name=\"checkmark-done\" color=\"success\"></ion-icon>{{ text4 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card color=\"background\" *ngFor=\"let exchange of loadedExchanges\" [disabled]=\"!!!+exchange.confirmed || !!+exchange.accomplished\" [routerLink]=\"['./', exchange.id]\">\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-icon *ngIf=\"!!!+exchange.confirmed\" slot=\"start\" name=\"close\" color=\"danger\"></ion-icon>\n                  <ion-icon *ngIf=\"!!+exchange.confirmed &&  !!!+exchange.accomplished\" slot=\"start\" name=\"checkmark\" color=\"warning\"></ion-icon>\n                  <ion-icon *ngIf=\"!!+exchange.accomplished\" slot=\"start\" name=\"checkmark-done\" color=\"success\"></ion-icon>\n                  <ion-label color=\"text\">\n                    <h2>Tauschanfrage von {{ exchange.sender.first_name }} {{ exchange.sender.last_name }}  und {{ exchange.receiver.first_name }} {{ exchange.receiver.last_name }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminExchangesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExchangesPageModule", function() { return AdminExchangesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_exchanges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-exchanges.page */ "./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.ts");







const routes = [
    {
        path: '',
        component: _admin_exchanges_page__WEBPACK_IMPORTED_MODULE_6__["AdminExchangesPage"]
    }
];
let AdminExchangesPageModule = class AdminExchangesPageModule {
};
AdminExchangesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_exchanges_page__WEBPACK_IMPORTED_MODULE_6__["AdminExchangesPage"]]
    })
], AdminExchangesPageModule);



/***/ }),

/***/ "./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9hZG1pbi1wYWdlL2FkbWluLWV4Y2hhbmdlcy9hZG1pbi1leGNoYW5nZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.ts ***!
  \***************************************************************************/
/*! exports provided: AdminExchangesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExchangesPage", function() { return AdminExchangesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/exchanges.service */ "./src/app/exchanges.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");





let AdminExchangesPage = class AdminExchangesPage {
    constructor(exchangesService, activatedRoute, config) {
        this.exchangesService = exchangesService;
        this.activatedRoute = activatedRoute;
        this.config = config;
        this.exchanges = [];
    }
    ngOnInit() {
        this.text1 = this.config.get_content_by_index('admin-exchanges', 0);
        this.text2 = this.config.get_content_by_index('admin-exchanges', 1);
        this.text3 = this.config.get_content_by_index('admin-exchanges', 2);
        this.text4 = this.config.get_content_by_index('admin-exchanges', 3);
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.adminUrl = paramMap.get('AdminName');
        });
        this.getAllExchanges();
        this.exchangesService.update.subscribe(() => this.getAllExchanges());
    }
    getAllExchanges() {
        this.exchangesService.getAllexchanges().subscribe(data => {
            this.loadedExchanges = data.data;
        });
    }
};
AdminExchangesPage.ctorParameters = () => [
    { type: src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_2__["ExchangesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AdminExchangesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-exchanges',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-exchanges.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-exchanges.page.scss */ "./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.page.scss")).default]
    })
], AdminExchangesPage);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-exchanges-admin-exchanges-module-es2015.js.map