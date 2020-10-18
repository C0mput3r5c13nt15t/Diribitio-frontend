(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Admin</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\">Wilkommen {{ loadedAdmin.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>  \n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedAdmin.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Projekte']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"apps\"></ion-icon>{{ projectsNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Schüler und Projektleiter verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>Schüler und {{ projectNoun }}leiter verwalten\n        </ion-item>\n        <ion-item *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\" [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Tauschanfragen']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>Tauschanfragen verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Zeitplan verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"calendar\"></ion-icon>Zeitplan verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./App verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>App verwalten\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-page.module.ts":
/*!********************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-page.module.ts ***!
  \********************************************************/
/*! exports provided: AdminPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPagePageModule", function() { return AdminPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-page.page */ "./src/app/log-in/admin-page/admin-page.page.ts");







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

/***/ "./src/app/log-in/admin-page/admin-page.page.scss":
/*!********************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-page.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vYWRtaW4tcGFnZS9hZG1pbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-page.page.ts":
/*!******************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-page.page.ts ***!
  \******************************************************/
/*! exports provided: AdminPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPagePage", function() { return AdminPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_admins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admins.service */ "./src/app/admins.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let AdminPagePage = class AdminPagePage {
    constructor(activatedRoute, router, adminsService, scheduleService, config, alert) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.adminsService = adminsService;
        this.scheduleService = scheduleService;
        this.config = config;
        this.alert = alert;
        this.loadedAdmin = {
            id: 0,
            user_name: '',
            email: '',
            password: ''
        };
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
    }
    ngOnInit() {
        this.projectsNoun = this.config.app_config.projects_noun;
        this.projectNoun = this.config.app_config.project_noun;
        this.text = this.config.get_content('admin-page');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('AdminName')) {
                this.router.navigate(['']);
                return;
            }
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getAdmin();
        this.adminsService.update.subscribe(() => this.getAdmin());
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
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
    sendVerificationEmail() {
        this.adminsService.sendAuthentificationEmailSubscribe().subscribe(data => {
            this.alert.alert(data.message);
            this.buttonPressed = true;
        }, error => {
            this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
        });
    }
    logout() {
        this.adminsService.logOutAdmin();
    }
};
AdminPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_admins_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
AdminPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-page.page.scss */ "./src/app/log-in/admin-page/admin-page.page.scss")).default]
    })
], AdminPagePage);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-page-module-es2015.js.map