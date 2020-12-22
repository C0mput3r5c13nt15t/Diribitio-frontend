(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-page-module"],{

/***/ "DCW1":
/*!******************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-page.page.ts ***!
  \******************************************************/
/*! exports provided: AdminPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPagePage", function() { return AdminPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-page.page.html */ "zjLz");
/* harmony import */ var _admin_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-page.page.scss */ "yIiC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admins.service */ "uVPj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");










let AdminPagePage = class AdminPagePage {
    constructor(activatedRoute, router, adminsService, scheduleService, config, alert) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.adminsService = adminsService;
        this.scheduleService = scheduleService;
        this.config = config;
        this.alert = alert;
        this.subscriptions = [];
        this.loadedAdmin = {
            id: 0,
            user_name: '',
            email: '',
            password: ''
        };
        /**
         * Contains the time schedule of the application
         */
        this.schedule = {
            id: 1,
            begin: null,
            control: null,
            registration: null,
            sort_students: null,
            exchange: null,
            projects: null,
            end: null
        };
        this.buttonPressed = true;
        this.projectsNoun = this.config.app_config.projects_noun;
        this.projectNoun = this.config.app_config.project_noun;
    }
    ngOnInit() {
        this.projectsNoun = this.config.app_config.projects_noun;
        this.projectNoun = this.config.app_config.project_noun;
        this.text = this.config.get_content('admin-page');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('AdminName')) {
                this.router.navigate(['']);
                return;
            }
        });
        this.getSchedule();
        this.getAdmin();
        this.subscriptions.push(this.scheduleService.update.subscribe(() => this.getSchedule()), this.adminsService.update.subscribe(() => this.getAdmin()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    /**
     * Gets the current time schedule for the application and sets the schedule value
     */
    getSchedule() {
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
    getAdmin() {
        this.adminsService.getSelfAdmin().subscribe(data => {
            this.loadedAdmin = data.data;
            if (this.loadedAdmin.email_verified_at == null) {
                this.buttonPressed = false;
            }
        });
    }
    refresh() {
        this.getAdmin();
        this.getSchedule();
    }
    sendVerificationEmail() {
        this.adminsService.sendAuthentificationEmailSubscribe().subscribe(data => {
            this.alert.alert(data.message);
            this.buttonPressed = true;
        }, error => {
            this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
        });
    }
    logout() {
        this.adminsService.logOutAdmin();
    }
};
AdminPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_5__["AdminsService"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
AdminPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-page',
        template: _raw_loader_admin_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminPagePage);



/***/ }),

/***/ "iKym":
/*!********************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-page.module.ts ***!
  \********************************************************/
/*! exports provided: AdminPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPagePageModule", function() { return AdminPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-page.page */ "DCW1");







const routes = [
    {
        path: '',
        component: _admin_page_page__WEBPACK_IMPORTED_MODULE_6__["AdminPagePage"]
    }
];
let AdminPagePageModule = class AdminPagePageModule {
};
AdminPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_page_page__WEBPACK_IMPORTED_MODULE_6__["AdminPagePage"]]
    })
], AdminPagePageModule);



/***/ }),

/***/ "yIiC":
/*!********************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-page.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJhZG1pbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "zjLz":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Admin</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\" text-wrap>Willkommen {{ loadedAdmin.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>  \n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedAdmin.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" routerLink='./{{ projectsNoun }}'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"apps\"></ion-icon>{{ projectsNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" routerLink='./Schüler und {{projectNoun}}leiter verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>Schüler und {{ projectNoun }}leiter verwalten\n        </ion-item>\n        <ion-item *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\" [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Tauschanfragen']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>Tauschanfragen verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Zeitplan verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"calendar\"></ion-icon>Zeitplan verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./App verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>App verwalten\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-page-module-es2015.js.map