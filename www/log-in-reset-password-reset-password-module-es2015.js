(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-reset-password-reset-password-module"],{

/***/ "2Bqv":
/*!**************************************************************!*\
  !*** ./src/app/log-in/reset-password/reset-password.page.ts ***!
  \**************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password.page.html */ "kdX/");
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.page.scss */ "DphT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");








let ResetPasswordPage = class ResetPasswordPage {
    constructor(activatedRoute, router, config, auth, alert) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.config = config;
        this.auth = auth;
        this.alert = alert;
        this.subscriptions = [];
        this.formType = 'student';
        this.resetPasswordStudent = {
            token: '',
            email: '',
            user_type: 'students',
            password: '',
            password_confirmation: ''
        };
        this.resetPasswordLeader = {
            token: '',
            email: '',
            user_type: 'leaders',
            password: '',
            password_confirmation: ''
        };
        this.resetPasswordAdmin = {
            token: '',
            email: '',
            user_type: 'admins',
            password: '',
            password_confirmation: ''
        };
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text = this.config.get_content('reset-password');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (paramMap.has('ResetToken')) {
                this.resetPasswordAdmin.token = this.activatedRoute.snapshot.paramMap.get('ResetToken');
                this.resetPasswordLeader.token = this.activatedRoute.snapshot.paramMap.get('ResetToken');
                this.resetPasswordStudent.token = this.activatedRoute.snapshot.paramMap.get('ResetToken');
            }
            else {
                this.router.navigate([this.eventName + '/Anmeldung']);
            }
        });
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    eventHandler(keyCode, type = 'students', form) {
        if (keyCode === 13) {
            if (type === 'students') {
                this.resetStudentPassword(form);
            }
            else if (type === 'leaders') {
                this.resetLeaderPassword(form);
            }
            else if (type === 'admins') {
                this.resetAdminPassword(form);
            }
        }
    }
    /**
     * Sets the focus on the given element if ENTER is pressed
     * @param keyCode Contains the code of the pressed key
     * @param nextInput Contains the next element to be focused
     */
    nextInput(keyCode, nextInput) {
        if (keyCode === 13) {
            nextInput.setFocus();
        }
    }
    resetStudentPassword(form) {
        this.auth.resetPassword(this.resetPasswordStudent).subscribe(data => {
            this.alert.alert(data.message);
            form.reset();
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
        });
    }
    resetLeaderPassword(form) {
        this.auth.resetPassword(this.resetPasswordLeader).subscribe(data => {
            this.alert.alert(data.message);
            form.reset();
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
        });
    }
    resetAdminPassword(form) {
        this.auth.resetPassword(this.resetPasswordAdmin).subscribe(data => {
            this.alert.alert(data.message);
            form.reset();
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
        });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPasswordPage);



/***/ }),

/***/ "4SHV":
/*!****************************************************************!*\
  !*** ./src/app/log-in/reset-password/reset-password.module.ts ***!
  \****************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "2Bqv");







const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
    }
];
let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ "DphT":
/*!****************************************************************!*\
  !*** ./src/app/log-in/reset-password/reset-password.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "kdX/":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/reset-password/reset-password.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Passwort ändern</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-card-title>Passwort ändern</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-segment color=\"buttons\" [(ngModel)]=\"formType\">\n        <ion-segment-button value=\"student\">\n          <ion-label>Schüler</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"leader\">\n          <ion-label>{{ projectNoun }}leiter</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"admin\">\n          <ion-label>Admin</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <form #studentResetPassword=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"resetStudentPassword(studentResetPassword)\" [hidden]=\"formType != 'student'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Schüler</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"resetPasswordStudent.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password\" required [(ngModel)]=\"resetPasswordStudent.password\" placeholder=\"Passwort\" type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password_confirmation\" required [(ngModel)]=\"resetPasswordStudent.password_confirmation\" placeholder=\"Passwort bestätigen\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"studentResetPassword.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Passwort ändern</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #leaderResetPassword=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"resetLeaderPassword(leaderResetPassword)\" [hidden]=\"formType != 'leader'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>{{ projectNoun }}leiter</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"resetPasswordLeader.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password\" required [(ngModel)]=\"resetPasswordLeader.password\" placeholder=\"Passwort\" type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password_confirmation\" required [(ngModel)]=\"resetPasswordLeader.password_confirmation\" placeholder=\"Passwort bestätigen\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"leaderResetPassword.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Passwort ändern</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #adminResetPassword=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"resetAdminPassword(adminResetPassword)\" [hidden]=\"formType != 'admin'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Admins</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"resetPasswordAdmin.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password\" required [(ngModel)]=\"resetPasswordAdmin.password\" placeholder=\"Passwort\" type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password_confirmation\" required [(ngModel)]=\"resetPasswordAdmin.password_confirmation\" placeholder=\"Passwort bestätigen\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"adminResetPassword.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Passwort ändern</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=log-in-reset-password-reset-password-module-es2015.js.map