(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "0McF":
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/config.service */ "r4Kj");





/**
 * This guard handles which routes are available and which aren't
 */
let AuthenticationGuard = class AuthenticationGuard {
    constructor(auth, router, config) {
        this.auth = auth;
        this.router = router;
        this.config = config;
        /**
         * Contains the logged in state
         */
        this.isLoggedIn = false;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
        /**
         * Contains the url to which unauthenticated requests are redirected
         */
        this.redirectUrl = this.eventName + '/Anmeldung';
    }
    /**
     * Checks if the user is allowed to access the page
     */
    canActivate(next, state) {
        const url = state.url;
        return this.checkLogin();
    }
    /**
     * Checks if the user is logged in
     */
    checkLogin() {
        if (this.auth.isLoggedIn) {
            return true;
        }
        this.router.navigate([this.eventName + '/Anmeldung']);
        return false;
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AuthenticationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationGuard);



/***/ }),

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css\"\n  />\n</head>\n<ion-tabs *ngIf=\"!isDesktop\">\n\n  <ion-tab-bar color=\"menu\" slot=\"bottom\">\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Einstellungen\" routerDirection=\"root\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Einstellungen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Impressum und Datenschutzerklärung\" routerDirection=\"root\">\n      <ion-icon name=\"document\"></ion-icon>\n      <ion-label>Impressum</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Home\" routerDirection=\"root\">\n      <ion-icon name=\"Home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"!auth.isLoggedIn\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\">\n      <ion-icon name=\"log-in\"></ion-icon>\n      <ion-label>Anmeldung</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"auth.isLoggedIn\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Dashboard</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<div *ngIf=\"isDesktop\" class=\"desktop\">\n  <ion-header id=\"navbar\">\n    <ion-toolbar color=\"menu\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"2\">\n          <img class=\"logo ion-text-left\" routerLink=\"/{{ eventName }}/Home\" src=\"../../assets/logo/Logo_light.svg\">\n        </ion-col>\n        <ion-col>\n          <div class=\"navbar\" class=\"ion-text-right\">\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Home\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Home\n            </ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"!auth.isLoggedIn\" fill=\"clear\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Anmeldung\n            </ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"auth.isLoggedIn\" fill=\"clear\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Dashboard\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Help\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Hilfe\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Einstellungen\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Einstellungen\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-router-outlet class=\"desktop-wrapper\"></ion-router-outlet>\n\n  <ion-item [id]=\"message.id\" class=\"animate__animated animate__fadeInDown\" *ngFor=\"let message of alertsAndErrors\" (click)=\"fadeOutAlertOrError(message.id)\" button=\"true\" [color]=\"message.type == 'alert' ? 'success' : 'danger'\">\n    <ion-label class=\"ion-text-center\" color=\"light\">\n      {{ message.desrc }}\n    </ion-label>\n  </ion-item>\n\n  <ion-footer color=\"menu\" class=\"footer\">\n    <span>© Paul Maier | <a routerLink=\"/{{ eventName }}/Impressum und Datenschutzerklärung\">Impressum und Datenschutz</a><br></span>\n  </ion-footer>\n</div>\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/screensize.service */ "uIHg");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let TabsPage = class TabsPage {
    constructor(screensizeService, auth, alertService, config) {
        this.screensizeService = screensizeService;
        this.auth = auth;
        this.alertService = alertService;
        this.config = config;
        /**
         * Contains all active alert and error messages
         */
        this.alertsAndErrors = [];
        /**
         * Contains the maximum lifetime for alert and error messages
         */
        this.maxLifetime = this.config.ui.alert_errors_max_lifetime * 1000;
        /**
         * Conatins the noun to be used instead of projects
         */
        this.projectsNoun = this.config.app_config.projects_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
        this.screensizeService.isDesktopView().subscribe(isDesktop => {
            if (this.isDesktop && !isDesktop) {
                window.location.reload();
            }
            this.isDesktop = isDesktop;
        });
        this.alertService.update.subscribe(() => this.getAlertsAndErrors());
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(this.maxLifetime / 2);
        this.regularInterval = source.subscribe(() => this.deleteOldAlertsAndErrors(this.maxLifetime));
    }
    getAlertsAndErrors() {
        this.alertsAndErrors = this.alertService.alertsAndErrors;
    }
    /**
     * Deletes all alert and error messages that are older than the maximum lifetime
     * @param maxLifetime Contains the maximum lifetime
     */
    deleteOldAlertsAndErrors(maxLifetime) {
        const now = new Date().getTime();
        this.alertsAndErrors.forEach((alert) => {
            if (now - alert.time > maxLifetime) {
                this.fadeOutAlertOrError(alert.id);
            }
        });
    }
    fadeOutAlertOrError(alertID) {
        const element = document.getElementById(alertID.toString());
        element.classList.add('animate__fadeOutLeft');
        element.onanimationend = () => {
            this.deleteAlertOrError(alertID);
        };
    }
    deleteAlertOrError(alertID) {
        this.alertService.delete_alert_error(alertID);
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_5__["ScreensizeService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "r4Kj");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");







/**
 * This service handles all everything having to do with the authentification especially the management of the jwt
 */
let AuthenticationService = class AuthenticationService {
    constructor(http, router, config, alert, cookieService) {
        this.http = http;
        this.router = router;
        this.config = config;
        this.alert = alert;
        this.cookieService = cookieService;
        /**
         * Contains the logged in state
         */
        this.loggedIn = false;
        /**
         * Contains the active jwt
         */
        this.JWT = '';
        /**
         * The url to the backend
         */
        this.backendUrl = this.config.backend_config.url;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    /**
     * Gets the current jwt
     * @returns jwt
     */
    get jwt() {
        return this.JWT;
    }
    /**
     * Sets the current jwt and saves it to locale storage
     * @param jwt Contains the jwt to be set
     */
    set_jwt(jwt) {
        this.JWT = jwt;
        this.cookieService.set('Diribitio-Session', this.jwt, 2, '/', null, false, 'Strict');
    }
    /**
     * Asynchronously sets the current jwtand saves it to locale storage
     * @param jwt Contains the jwt to be set
     */
    async_set_jwt(jwt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.JWT = jwt;
            this.cookieService.set('Diribitio-Session', this.jwt, 2, '/', null, false, 'Strict');
        });
    }
    /**
     * Returns whether the user is logged in or not
     * @returns boolean
     */
    get isLoggedIn() {
        return this.loggedIn;
    }
    /**
     * Sets loggedIn to the new state and if the new state is false removes the jwt from storage
     * @param newState Contains the new logged in state
     */
    setLoggedIn(newState) {
        this.loggedIn = newState;
        if (newState === false) {
            this.cookieService.delete('Diribitio-Session');
        }
    }
    /**
     * Checks if the given jwt is still valid and if it is refreshes it
     * @param jwt Contains the jwt to be checked
     * @returns RequestObservable
     */
    check_jwt(jwt) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'auth/refresh', null, options);
    }
    /**
     * Sends a password reset email to the user with the given email
     * @param forgotPasswordData Contains the email of the user
     */
    forgotPassword(forgotPasswordData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.JWT,
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'auth/password/email', forgotPasswordData, options).subscribe(data => {
            this.alert.alert(data.message);
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Die E-Mail konnte nicht versandt werden.', error.error);
        });
    }
    /**
     * Resets the user password
     * @param resetPasswordData Contains the email and the new password of the user
     * @returns RequestObservable
     */
    resetPassword(resetPasswordData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'auth/password/reset', resetPasswordData, options);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_router_static_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.static.module */ "yhnw");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







/**
 * This Module cointanis the navigation and footer for mobile and desktop view and displays all the error and alert messages.
 */
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_static_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "yhnw":
/*!***************************************************!*\
  !*** ./src/app/tabs/tabs.router.static.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.guard */ "0McF");





/**
 * Contains all Routes for the application
 */
const routes = [
    {
        path: 'Projekttage',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'Help',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ../help/help.module */ "7XJi")).then(m => m.HelpPageModule)
                    }
                ]
            },
            {
                path: 'Einstellungen',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: 'Impressum und Datenschutzerklärung',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | imprint-data-protection-imprint-data-protection-module */ "imprint-data-protection-imprint-data-protection-module").then(__webpack_require__.bind(null, /*! ../imprint-data-protection/imprint-data-protection.module */ "z3fI")).then(m => m.ImprintDataProtectionPageModule)
                    }
                ]
            },
            {
                path: 'Home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-log-in-module */[__webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-log-in-module")]).then(__webpack_require__.bind(null, /*! ../log-in/log-in.module */ "S2+d")).then(m => m.LogInPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Passwort vergessen',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | log-in-forgot-password-forgot-password-module */ "log-in-forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ../log-in/forgot-password/forgot-password.module */ "xsru")).then(m => m.ForgotPasswordPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Passwort zurücksetzen/:ResetToken',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | log-in-reset-password-reset-password-module */ "log-in-reset-password-reset-password-module").then(__webpack_require__.bind(null, /*! ../log-in/reset-password/reset-password.module */ "4SHV")).then(m => m.ResetPasswordPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Admin Registration',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-generation-admin-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-generation-admin-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-generation/admin-generation.module */ "4DVB")).then(m => m.AdminGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Projektleiter Registration',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-generation-leader-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-generation-leader-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-generation/leader-generation.module */ "aa1q")).then(m => m.LeaderGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Schüler Registration',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-generation-student-generation-module */[__webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("log-in-student-generation-student-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-generation/student-generation.module */ "i/4z")).then(m => m.StudentGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Projektleiter/:LeaderName',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-leader-page-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-page-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/leader-page.module */ "XF5o")).then(m => m.LeaderPagePageModule)
                    }
                ]
            },
            {
                path: 'Projektleiter/:LeaderName/Projekt erstellen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-leader-project-generation-leader-project-generation-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-leader-page-leader-project-generation-leader-project-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/leader-project-generation/leader-project-generation.module */ "FHDN")).then(m => m.LeaderProjectGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Projektleiter/:LeaderName/Projekt verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-leader-project-administration-leader-project-administration-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-project-administration-leader-project-administration-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/leader-project-administration/leader-project-administration.module */ "2a+d")).then(m => m.LeaderProjectAdministrationPageModule)
                    }
                ]
            },
            {
                path: 'Projektleiter/:LeaderName/Projekt verwalten/Projekt bearbeiten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-leader-project-administration-leader-project-edit-leader-project-edit-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-project-administration-leader-project-edit-leader-project-edit-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/leader-project-administration/leader-project-edit/leader-project-edit.module */ "eXB2")).then(m => m.LeaderProjectEditPageModule)
                    }
                ]
            },
            {
                path: 'Projektleiter/:LeaderName/Nachricht senden',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-leader-messages-leader-messages-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-messages-leader-messages-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/leader-messages/leader-messages.module */ "0zAt")).then(m => m.LeaderMessagesPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-student-page-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-page-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/student-page.module */ "Xlih")).then(m => m.StudentPagePageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Projekte',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-projects-projects-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-projects-projects-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/projects/projects.module */ "GoqE")).then(m => m.ProjectsPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Projekte/:ProjectID',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-projects-project-detail-project-detail-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-student-page-projects-project-detail-project-detail-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/projects/project-detail/project-detail.module */ "Pe+c")).then(m => m.ProjectDetailPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Anmeldung',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-registration-registration-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("log-in-student-page-registration-registration-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/registration/registration.module */ "1i7b")).then(m => m.RegistrationPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Tauschanfrage senden',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-exchange-request-exchange-request-module */[__webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-exchange-request-exchange-request-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/exchange-request/exchange-request.module */ "67tE")).then(m => m.ExchangeRequestPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Tauschanfrage bestätigen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-exchange-confirm-exchange-confirm-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-exchange-confirm-exchange-confirm-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/exchange-confirm/exchange-confirm.module */ "p+Yt")).then(m => m.ExchangeConfirmPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Projekt',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-project-project-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-student-page-project-project-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/project/project.module */ "ZITW")).then(m => m.ProjectPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Projekt erstellen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-student-project-generation-student-project-generation-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-student-page-student-project-generation-student-project-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/student-project-generation/student-project-generation.module */ "e7et")).then(m => m.StudentProjectGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Assistenten verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-promote-students-promote-students-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("log-in-student-page-promote-students-promote-students-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/promote-students/promote-students.module */ "7RaF")).then(m => m.PromoteStudentsPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Projekt verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-student-project-administration-student-project-administration-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-project-administration-student-project-administration-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/student-project-administration/student-project-administration.module */ "sWDz")).then(m => m.StudentProjectAdministrationPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Projekt verwalten/Projekt bearbeiten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-student-project-administration-student-project-edit-student-project-edit-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-project-administration-student-project-edit-student-project-edit-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/student-project-administration/student-project-edit/student-project-edit.module */ "eHwU")).then(m => m.StudentProjectEditPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Nachricht senden',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-student-page-student-messages-student-messages-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-messages-student-messages-module")]).then(__webpack_require__.bind(null, /*! ../log-in/student-page/student-messages/student-messages.module */ "V6Bk")).then(m => m.StudentMessagesPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-page-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-page-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-page.module */ "iKym")).then(m => m.AdminPagePageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Projekte',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-projects-admin-projects-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-admin-page-admin-projects-admin-projects-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-projects/admin-projects.module */ "gH7Q")).then(m => m.AdminProjectsPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Tauschanfragen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-exchanges-admin-exchanges-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-exchanges-admin-exchanges-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-exchanges/admin-exchanges.module */ "aApZ")).then(m => m.AdminExchangesPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Projekte/:ProjectID',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module */ "7RvP")).then(m => m.AdminProjectDetailPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Tauschanfragen/:ExchangeID',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module */ "oKxh")).then(m => m.AdminExchangeDetailPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Zeitplan verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-schedule-admin-schedule-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-schedule-admin-schedule-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-schedule/admin-schedule.module */ "qLtw")).then(m => m.AdminSchedulePageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Schüler und Projektleiter verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-students-leaders-admin-students-leaders-module */[__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-students-leaders-admin-students-leaders-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-students-leaders/admin-students-leaders.module */ "ZReS")).then(m => m.AdminStudentsLeadersPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/App verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-logs-admin-logs-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-logs-admin-logs-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-logs/admin-logs.module */ "HFXa")).then(m => m.AdminLogsPageModule)
                    }
                ]
            },
            {
                path: 'E-Mail verifizieren/:Status',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | log-in-verify-email-verify-email-module */ "log-in-verify-email-verify-email-module").then(__webpack_require__.bind(null, /*! ../log-in/verify-email/verify-email.module */ "QRSX")).then(m => m.VerifyEmailPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/Projekttage/Home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/Projekttage/Home',
        pathMatch: 'full'
    }
];
/**
 * This module contains the default routes for the TabsPageModule
 * Note that these are NOT actually used for routing and just represent the defaul routes
 */
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map