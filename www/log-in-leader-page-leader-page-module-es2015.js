(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-page.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-page.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Projektleiter</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\">Wilkommen {{ loadedLeader.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>   \n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedLeader.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedLeader.project_id == 0\" routerLink='./{{ projectNoun }} erstellen'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>{{ projectNoun }} erstellen\n        </ion-item>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"loadedLeader.project_id != 0\" routerLink='./{{ projectNoun }} verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>{{ projectNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"loadedLeader.project_id != 0\" [routerLink]=\"['./Nachricht senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Nachricht senden\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/leader-page/leader-page.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-page.module.ts ***!
  \**********************************************************/
/*! exports provided: LeaderPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderPagePageModule", function() { return LeaderPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _leader_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leader-page.page */ "./src/app/log-in/leader-page/leader-page.page.ts");







const routes = [
    {
        path: '',
        component: _leader_page_page__WEBPACK_IMPORTED_MODULE_6__["LeaderPagePage"]
    }
];
let LeaderPagePageModule = class LeaderPagePageModule {
};
LeaderPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_leader_page_page__WEBPACK_IMPORTED_MODULE_6__["LeaderPagePage"]]
    })
], LeaderPagePageModule);



/***/ }),

/***/ "./src/app/log-in/leader-page/leader-page.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-page.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9sZWFkZXItcGFnZS9sZWFkZXItcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/log-in/leader-page/leader-page.page.ts":
/*!********************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-page.page.ts ***!
  \********************************************************/
/*! exports provided: LeaderPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderPagePage", function() { return LeaderPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_leaders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/leaders.service */ "./src/app/leaders.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");









let LeaderPagePage = class LeaderPagePage {
    constructor(activatedRoute, router, leadersService, projectsService, scheduleService, config, alert) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.leadersService = leadersService;
        this.projectsService = projectsService;
        this.scheduleService = scheduleService;
        this.config = config;
        this.alert = alert;
        this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0
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
        this.projectNoun = this.config.app_config.project_noun;
    }
    ngOnInit() {
        this.text = this.config.get_content('leader-page');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('LeaderName')) {
                this.router.navigate(['']);
                return;
            }
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getLeader();
        this.leadersService.update.subscribe(() => this.getLeader());
        this.projectsService.update.subscribe(() => this.getLeader());
    }
    getLeader() {
        this.leadersService.getSelfLeader().subscribe(data => {
            this.loadedLeader = data.data;
            if (this.loadedLeader.email_verified_at == null) {
                this.buttonPressed = false;
            }
        });
    }
    refresh() {
        this.getLeader();
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
    sendVerificationEmail() {
        this.leadersService.sendAuthentificationEmailSubscribe().subscribe(data => {
            this.alert.alert(data.message);
            this.buttonPressed = true;
        }, error => {
            this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
        });
    }
    logout() {
        this.leadersService.logOutLeader();
    }
};
LeaderPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_leaders_service__WEBPACK_IMPORTED_MODULE_3__["LeadersService"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
LeaderPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leader-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./leader-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./leader-page.page.scss */ "./src/app/log-in/leader-page/leader-page.page.scss")).default]
    })
], LeaderPagePage);



/***/ })

}]);
//# sourceMappingURL=log-in-leader-page-leader-page-module-es2015.js.map