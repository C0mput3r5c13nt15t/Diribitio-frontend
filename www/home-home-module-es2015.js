(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Startseite</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" [routerLink]=\"['../../Help']\"><ion-icon name=\"help-circle\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <img class=\"logo_light\" src=\"../../assets/logo/Logo_light.svg\">\n    <img class=\"logo_dark\" src=\"../../assets/logo/Logo_dark.svg\">\n    <ion-card-header>\n      <ion-title>{{ welcome.title }}</ion-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"welcome.text\">\n      <ion-label color=\"text\">\n        {{ welcome.text }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-title>Zeitplan</ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item color=\"items\" lines=\"none\">\n          ab <ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Beginn\" [(ngModel)]=\"schedule.begin\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\">\n          <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n          <ion-label>Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.begin || currentDate > schedule.control\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>\n          <ion-label color=\"text\">Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Anmeldung\" [(ngModel)]=\"schedule.control\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.control && currentDate <= schedule.registration\">\n          <ion-icon slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n          <ion-label>Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.control || currentDate > schedule.registration\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n          <ion-label color=\"text\">Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Anmeldung\" [(ngModel)]=\"schedule.registration\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.registration && currentDate <= schedule.sort_students\">\n          <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n          <ion-label>Anmeldung für die {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.registration || currentDate > schedule.sort_students\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"log-in\"></ion-icon>\n          <ion-label color=\"text\">Anmeldung für die {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Sortierung\" [(ngModel)]=\"schedule.sort_students\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.sort_students && currentDate <= schedule.exchange\">\n          <ion-icon slot=\"start\" name=\"funnel\"></ion-icon>\n          <ion-label>Sortierung durch den Algorithmus</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.sort_students || currentDate > schedule.exchange\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"funnel\"></ion-icon>\n          <ion-label color=\"text\">Sortierung durch den Algorithmus</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Tausch\" [(ngModel)]=\"schedule.exchange\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\">\n          <ion-icon slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n          <ion-label>Tauschphase</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.exchange || currentDate > schedule.projects\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n          <ion-label color=\"text\">Tauschphase</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Projekte\" [(ngModel)]=\"schedule.projects\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.projects && currentDate <= schedule.end\">\n          <ion-icon slot=\"start\" name=\"flag\"></ion-icon>\n          <ion-label>{{ eventNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.projects || currentDate > schedule.end\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"flag\"></ion-icon>\n          <ion-label color=\"text\">{{ eventNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis<ion-datetime placeholder=\"Bitte ein Datum wählen\" readonly name=\"Ende\" [(ngModel)]=\"schedule.end\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngFor=\"let article of articles\" color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-title>{{ article.title }}</ion-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"article.text\">\n      <ion-label color=\"text\">\n        {{ article.text }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule.service */ "./src/app/schedule.service.ts");





let HomePage = class HomePage {
    constructor(config, scheduleService) {
        this.config = config;
        this.scheduleService = scheduleService;
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
        this.welcome = this.config.home.welcome;
        this.articles = this.config.home.articles;
        this.projectsNoun = this.config.app_config.projects_noun;
        this.eventNoun = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map