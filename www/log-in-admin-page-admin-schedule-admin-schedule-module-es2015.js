(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-schedule-admin-schedule-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Zeitplan verwalten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"mangaeSchedule()\">\n    <ion-card color=\"background\" class=\"content\">\n      <ion-card-header>\n        <ion-card-title>\n          Zeitplan\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-list>\n          <ion-item color=\"items\" lines=\"none\">\n            ab <ion-datetime placeholder=\"Bitte ein Datum wählen\" required name=\"Beginn\" [(ngModel)]=\"schedule.begin\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\">\n            <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n            <ion-label>Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.begin || currentDate > schedule.control\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>\n            <ion-label color=\"text\">Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" name=\"Kontrolle\" [(ngModel)]=\"schedule.control\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.control && currentDate <= schedule.registration\">\n            <ion-icon slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n            <ion-label>Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.control || currentDate > schedule.registration\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n            <ion-label color=\"text\">Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" required name=\"Anmeldung\" [(ngModel)]=\"schedule.registration\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.registration && currentDate <= schedule.sort_students\">\n            <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n            <ion-label>Anmeldung für die {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.registration || currentDate > schedule.sort_students\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"log-in\"></ion-icon>\n            <ion-label color=\"text\">Anmeldung für die {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" required name=\"Sortierung\" [(ngModel)]=\"schedule.sort_students\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.sort_students && currentDate <= schedule.exchange\">\n            <ion-icon slot=\"start\" name=\"funnel\"></ion-icon>\n            <ion-label>Sortierung durch den Algorithmus</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.sort_students || currentDate > schedule.exchange\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"funnel\"></ion-icon>\n            <ion-label color=\"text\">Sortierung durch den Algorithmus</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" required name=\"Tausch\" [(ngModel)]=\"schedule.exchange\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\">\n            <ion-icon slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n            <ion-label>Tauschphase</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.exchange || currentDate > schedule.projects\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n            <ion-label color=\"text\">Tauschphase</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" required name=\"Projekte\" [(ngModel)]=\"schedule.projects\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.projects && currentDate <= schedule.end\">\n            <ion-icon slot=\"start\" name=\"flag\"></ion-icon>\n            <ion-label>{{ eventNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.projects || currentDate > schedule.end\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"flag\"></ion-icon>\n            <ion-label color=\"text\">{{ eventNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis<ion-datetime placeholder=\"Bitte ein Datum wählen\" required name=\"Ende\" [(ngModel)]=\"schedule.end\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Zeitplan bestätigen</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-schedule/admin-schedule-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminSchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSchedulePageRoutingModule", function() { return AdminSchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-schedule.page */ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.ts");




const routes = [
    {
        path: '',
        component: _admin_schedule_page__WEBPACK_IMPORTED_MODULE_3__["AdminSchedulePage"]
    }
];
let AdminSchedulePageRoutingModule = class AdminSchedulePageRoutingModule {
};
AdminSchedulePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminSchedulePageRoutingModule);



/***/ }),

/***/ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdminSchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSchedulePageModule", function() { return AdminSchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-schedule-routing.module */ "./src/app/log-in/admin-page/admin-schedule/admin-schedule-routing.module.ts");
/* harmony import */ var _admin_schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-schedule.page */ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.ts");







let AdminSchedulePageModule = class AdminSchedulePageModule {
};
AdminSchedulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminSchedulePageRoutingModule"]
        ],
        declarations: [_admin_schedule_page__WEBPACK_IMPORTED_MODULE_6__["AdminSchedulePage"]]
    })
], AdminSchedulePageModule);



/***/ }),

/***/ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9hZG1pbi1wYWdlL2FkbWluLXNjaGVkdWxlL2FkbWluLXNjaGVkdWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.ts ***!
  \*************************************************************************/
/*! exports provided: AdminSchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSchedulePage", function() { return AdminSchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_admins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admins.service */ "./src/app/admins.service.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let AdminSchedulePage = class AdminSchedulePage {
    constructor(activatedRoute, adminsService, scheduleService, router, alert, config) {
        this.activatedRoute = activatedRoute;
        this.adminsService = adminsService;
        this.scheduleService = scheduleService;
        this.router = router;
        this.alert = alert;
        this.config = config;
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
    }
    ngOnInit() {
        this.projectsNoun = this.config.app_config.projects_noun;
        this.eventNoun = this.config.app_config.eventname;
        this.text = this.config.get_content('admin-schedule');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.adminUrl = paramMap.get('AdminName');
        });
        this.getSchedule();
        this.adminsService.update.subscribe(() => this.getSchedule());
    }
    getSchedule() {
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
    mangaeSchedule() {
        this.scheduleService.putSchedule(this.schedule).subscribe(data => {
            this.alert.alert(data.message);
            this.scheduleService.update.emit();
            this.router.navigate(['Projekttage/Admin/' + this.adminUrl]);
        }, error => {
            this.alert.error('Aktualisierung des Zeitplans fehlgeschlagen!', error.error);
        });
    }
};
AdminSchedulePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_admins_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AdminSchedulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-schedule',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-schedule.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-schedule.page.scss */ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.scss")).default]
    })
], AdminSchedulePage);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-schedule-admin-schedule-module-es2015.js.map