(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-schedule-admin-schedule-module"],{

/***/ "FzJE":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Zeitplan verwalten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"manageSchedule()\">\n    <ion-card color=\"background\" class=\"content\">\n      <ion-card-header>\n        <ion-card-title>Zeitplan</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-list>\n          <ion-item color=\"items\" lines=\"none\">\n            ab <ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" required name=\"Beginn\" [(ngModel)]=\"schedule.begin\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\">\n            <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n            <ion-label>Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.begin || currentDate > schedule.control\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>\n            <ion-label color=\"text\">Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" name=\"Kontrolle\" [(ngModel)]=\"schedule.control\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.control && currentDate <= schedule.registration\">\n            <ion-icon slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n            <ion-label>Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.control || currentDate > schedule.registration\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n            <ion-label color=\"text\">Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" required name=\"Anmeldung\" [(ngModel)]=\"schedule.registration\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.registration && currentDate <= schedule.sort_students\">\n            <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n            <ion-label>Anmeldung für die {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.registration || currentDate > schedule.sort_students\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"log-in\"></ion-icon>\n            <ion-label color=\"text\">Anmeldung für die {{ projectsNoun }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" required name=\"Sortierung\" [(ngModel)]=\"schedule.sort_students\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.sort_students && currentDate <= schedule.exchange\">\n            <ion-icon slot=\"start\" name=\"funnel\"></ion-icon>\n            <ion-label>Sortierung durch den Algorithmus</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.sort_students || currentDate > schedule.exchange\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"funnel\"></ion-icon>\n            <ion-label color=\"text\">Sortierung durch den Algorithmus</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" required name=\"Tausch\" [(ngModel)]=\"schedule.exchange\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\">\n            <ion-icon slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n            <ion-label>Tauschphase</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.exchange || currentDate > schedule.projects\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n            <ion-label color=\"text\">Tauschphase</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis <ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" required name=\"Projekte\" [(ngModel)]=\"schedule.projects\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n          <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.projects && currentDate <= schedule.end\">\n            <ion-icon slot=\"start\" name=\"flag\"></ion-icon>\n            <ion-label>{{ eventName }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.projects || currentDate > schedule.end\">\n            <ion-icon color=\"text\" slot=\"start\" name=\"flag\"></ion-icon>\n            <ion-label color=\"text\">{{ eventName }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            bis<ion-datetime [max]=\"maxDate\" displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" required name=\"Ende\" [(ngModel)]=\"schedule.end\" picker-format=\"YYYY-MM-DD\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' cancelText=\"Abbrechen\" doneText=\"Ok\"></ion-datetime>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Zeitplan bestätigen</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "Vn9w":
/*!*************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.ts ***!
  \*************************************************************************/
/*! exports provided: AdminSchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSchedulePage", function() { return AdminSchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_schedule_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-schedule.page.html */ "FzJE");
/* harmony import */ var _admin_schedule_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-schedule.page.scss */ "iJf1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");









let AdminSchedulePage = class AdminSchedulePage {
    constructor(activatedRoute, scheduleService, router, alert, config) {
        this.activatedRoute = activatedRoute;
        this.scheduleService = scheduleService;
        this.router = router;
        this.alert = alert;
        this.config = config;
        this.subscriptions = [];
        /**
         * Contains the time schedule of the application
         */
        this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en')
        };
        /**
         * Contains the max date to be inputted in yyyy-MM-dd format (1 year from today)
         */
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
        this.projectsNoun = this.config.app_config.projects_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text = this.config.get_content('admin-schedule');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.adminUrl = paramMap.get('AdminName');
        });
        this.getSchedule();
        this.subscriptions.push(this.scheduleService.update.subscribe(() => this.getSchedule()));
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
    manageSchedule() {
        this.schedule.begin = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.begin, 'yyyy-MM-dd', 'en');
        this.schedule.control = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.control, 'yyyy-MM-dd', 'en');
        this.schedule.registration = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.registration, 'yyyy-MM-dd', 'en');
        this.schedule.sort_students = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.sort_students, 'yyyy-MM-dd', 'en');
        this.schedule.exchange = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.exchange, 'yyyy-MM-dd', 'en');
        this.schedule.projects = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.projects, 'yyyy-MM-dd', 'en');
        this.schedule.end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.schedule.end, 'yyyy-MM-dd', 'en');
        this.alert.alert(JSON.stringify(this.schedule));
        this.scheduleService.putSchedule(this.schedule).subscribe(data => {
            this.alert.alert(data.message);
            this.scheduleService.update.emit();
            this.router.navigate([this.eventName + '/Admin/' + this.adminUrl]);
        }, error => {
            this.alert.error('Aktualisierung des Zeitplans fehlgeschlagen!', error.error);
        });
    }
};
AdminSchedulePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
AdminSchedulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-schedule',
        template: _raw_loader_admin_schedule_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_schedule_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminSchedulePage);



/***/ }),

/***/ "iJf1":
/*!***************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zY2hlZHVsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "qLtw":
/*!***************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-schedule/admin-schedule.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdminSchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSchedulePageModule", function() { return AdminSchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-schedule.page */ "Vn9w");







const routes = [
    {
        path: '',
        component: _admin_schedule_page__WEBPACK_IMPORTED_MODULE_6__["AdminSchedulePage"]
    }
];
let AdminSchedulePageModule = class AdminSchedulePageModule {
};
AdminSchedulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_schedule_page__WEBPACK_IMPORTED_MODULE_6__["AdminSchedulePage"]]
    })
], AdminSchedulePageModule);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-schedule-admin-schedule-module-es2015.js.map