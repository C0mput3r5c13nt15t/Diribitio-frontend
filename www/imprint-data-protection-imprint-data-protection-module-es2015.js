(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imprint-data-protection-imprint-data-protection-module"],{

/***/ "5Wib":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imprint-data-protection/imprint-data-protection.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Impressum und Datenschutzerklärung</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card *ngIf=\"contacts.length\" color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Impressum\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngFor=\"let contact of contacts\">\n        <ion-card-subtitle>{{ contact.name }}</ion-card-subtitle>\n        <ion-label *ngIf=\"contact.adress\" color=\"text\">\n          Adresse: {{ contact.adress }}<br>\n        </ion-label>\n        <ion-label *ngIf=\"contact.link\" color=\"text\">\n          offizielle Webseite: <a [href]=\"contact.link\">{{ contact.link }}</a><br>\n        </ion-label>\n        <ion-label *ngIf=\"contact.email\" color=\"text\">\n          E-Mail: {{ contact.email }}<br>\n        </ion-label>\n        <ion-label *ngIf=\"contact.phone\" color=\"text\">\n          Telefonnummer: {{ contact.phone }}<br>\n        </ion-label>\n        <br>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Datenschutz\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ dataProtection }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        AGBs\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ conditions }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "AO3F":
/*!*************************************************************************!*\
  !*** ./src/app/imprint-data-protection/imprint-data-protection.page.ts ***!
  \*************************************************************************/
/*! exports provided: ImprintDataProtectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintDataProtectionPage", function() { return ImprintDataProtectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_imprint_data_protection_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./imprint-data-protection.page.html */ "5Wib");
/* harmony import */ var _imprint_data_protection_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imprint-data-protection.page.scss */ "ccD/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");





let ImprintDataProtectionPage = class ImprintDataProtectionPage {
    constructor(config) {
        this.config = config;
        this.subscriptions = [];
        /**
         * Conatins all the contact information of imprint.json
         */
        this.contacts = this.config.imprint.contacts;
        /**
         * Conatins all the terms of condition from the conditions.json
         */
        this.conditions = this.config.conditions.full_conditions;
        /**
         * Conatins all the data protection information from the data-protection.json
         */
        this.dataProtection = this.config.data_protection.data_protection;
    }
    ngOnInit() {
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
};
ImprintDataProtectionPage.ctorParameters = () => [
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
ImprintDataProtectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imprint-data-protection',
        template: _raw_loader_imprint_data_protection_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imprint_data_protection_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ImprintDataProtectionPage);



/***/ }),

/***/ "ccD/":
/*!***************************************************************************!*\
  !*** ./src/app/imprint-data-protection/imprint-data-protection.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByaW50LWRhdGEtcHJvdGVjdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "z3fI":
/*!***************************************************************************!*\
  !*** ./src/app/imprint-data-protection/imprint-data-protection.module.ts ***!
  \***************************************************************************/
/*! exports provided: ImprintDataProtectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintDataProtectionPageModule", function() { return ImprintDataProtectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imprint-data-protection.page */ "AO3F");







const routes = [
    {
        path: '',
        component: _imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_6__["ImprintDataProtectionPage"]
    }
];
let ImprintDataProtectionPageModule = class ImprintDataProtectionPageModule {
};
ImprintDataProtectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_6__["ImprintDataProtectionPage"]]
    })
], ImprintDataProtectionPageModule);



/***/ })

}]);
//# sourceMappingURL=imprint-data-protection-imprint-data-protection-module-es2015.js.map