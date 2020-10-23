(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/forgot-password/forgot-password.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/forgot-password/forgot-password.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Passwort vergessen?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n    <ion-card color=\"background\" class=\"content\">\n      <ion-card-header>\n        <ion-title>Passwort vergessen</ion-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-segment color=\"buttons\" [(ngModel)]=\"formType\">\n          <ion-segment-button value=\"students\">\n            <ion-label>Schüler</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"leaders\">\n            <ion-label>{{ projectNoun }}leiter</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"admins\">\n            <ion-label>Admin</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <form #forgotPasswordStudent=\"ngForm\" (ngSubmit)=\"sendPasswordEmail()\" class=\"content\"  [hidden]=\"formType != 'students'\">\n          <ion-card color=\"background\">\n            <ion-card-header>\n              <ion-card-title>Schüler</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item color=\"items\">\n                  <ion-input color=\"text\" [(ngModel)]=\"forgotPasswordData.email\" name=\"user_name\" placeholder=\"E-Mail\" required type=\"email\"></ion-input>\n                </ion-item>\n                <div class=\"ion-padding\">\n                  <ion-button color=\"buttons\" [disabled]=\"forgotPasswordStudent.invalid\" name=\"LogIn\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">E-Mail senden</ion-button>\n                </div>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </form>\n\n        <form #forgotPasswordLeader=\"ngForm\" (ngSubmit)=\"sendPasswordEmail()\" class=\"content\" [hidden]=\"formType != 'leaders'\">\n          <ion-card color=\"background\">\n            <ion-card-header>\n              <ion-card-title>{{ projectNoun }}leiter</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item color=\"items\">\n                  <ion-input color=\"text\" [(ngModel)]=\"forgotPasswordData.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"email\"></ion-input>\n                </ion-item>\n                <div class=\"ion-padding\">\n                  <ion-button color=\"buttons\" [disabled]=\"forgotPasswordLeader.invalid\" name=\"LogIn\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">E-Mail senden</ion-button>\n                </div>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </form>\n\n        <form #forgotPasswordAdmin=\"ngForm\" (ngSubmit)=\"sendPasswordEmail()\" class=\"content\" [hidden]=\"formType != 'admins'\">\n          <ion-card color=\"background\">\n            <ion-card-header>\n              <ion-card-title>Admin</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item color=\"items\">\n                  <ion-input color=\"text\" [(ngModel)]=\"forgotPasswordData.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"email\"></ion-input>\n                </ion-item>\n                <div class=\"ion-padding\">\n                  <ion-button color=\"buttons\" [disabled]=\"forgotPasswordAdmin.invalid\" name=\"LogIn\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">E-Mail senden</ion-button>\n                </div>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </form>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/forgot-password/forgot-password-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/log-in/forgot-password/forgot-password-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/log-in/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/log-in/forgot-password/forgot-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/log-in/forgot-password/forgot-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/log-in/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/log-in/forgot-password/forgot-password.page.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/log-in/forgot-password/forgot-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/log-in/forgot-password/forgot-password.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/log-in/forgot-password/forgot-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/log-in/forgot-password/forgot-password.page.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");




let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(config, auth) {
        this.config = config;
        this.auth = auth;
        this.formType = 'students';
        this.forgotPasswordData = {
            email: '',
            user_type: 'students'
        };
    }
    ngOnInit() {
        this.projectNoun = this.config.app_config.project_noun;
        this.text = this.config.get_content('forgot-password');
    }
    sendPasswordEmail() {
        this.forgotPasswordData.user_type = this.formType;
        this.auth.forgotPassword(this.forgotPasswordData);
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/forgot-password/forgot-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/log-in/forgot-password/forgot-password.page.scss")).default]
    })
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=log-in-forgot-password-forgot-password-module-es2015.js.map