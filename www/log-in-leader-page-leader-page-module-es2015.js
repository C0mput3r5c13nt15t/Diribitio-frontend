(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-page-module"],{

/***/ "FfgO":
/*!**********************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-page.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "MUgI":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-page.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Projektleiter</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\" text-wrap>Willkommen {{ loadedLeader.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>   \n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedLeader.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedLeader.project_id == 0\" routerLink='./{{ projectNoun }} erstellen'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>{{ projectNoun }} erstellen\n        </ion-item>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"loadedLeader.project_id != 0\" routerLink='./{{ projectNoun }} verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>{{ projectNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"loadedLeader.project_id != 0\" [routerLink]=\"['./Nachricht senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Nachricht senden\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\" *ngIf=\"currentDate > schedule.control && currentDate <= schedule.end &&loadedLeader.project_id == 0\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"deleteAccount()\">Account löschen</ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "XF5o":
/*!**********************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-page.module.ts ***!
  \**********************************************************/
/*! exports provided: LeaderPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderPagePageModule", function() { return LeaderPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leader_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leader-page.page */ "ywBW");







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

/***/ "ywBW":
/*!********************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-page.page.ts ***!
  \********************************************************/
/*! exports provided: LeaderPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderPagePage", function() { return LeaderPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leader_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leader-page.page.html */ "MUgI");
/* harmony import */ var _leader_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leader-page.page.scss */ "FfgO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/leaders.service */ "PO/Q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");











let LeaderPagePage = class LeaderPagePage {
    constructor(activatedRoute, router, leadersService, projectsService, scheduleService, config, alert) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.leadersService = leadersService;
        this.projectsService = projectsService;
        this.scheduleService = scheduleService;
        this.config = config;
        this.alert = alert;
        this.subscriptions = [];
        this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0
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
        this.projectNoun = this.config.app_config.project_noun;
    }
    ngOnInit() {
        this.text = this.config.get_content('leader-page');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('LeaderName')) {
                this.router.navigate(['']);
                return;
            }
        });
        this.getSchedule();
        this.getLeader();
        this.subscriptions.push(this.scheduleService.update.subscribe(() => this.getSchedule()), this.leadersService.update.subscribe(() => this.getLeader()), this.projectsService.update.subscribe(() => this.getLeader()));
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
    deleteAccount() {
        this.leadersService.destroySelfLeader();
    }
};
LeaderPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_5__["LeadersService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
LeaderPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leader-page',
        template: _raw_loader_leader_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaderPagePage);



/***/ })

}]);
//# sourceMappingURL=log-in-leader-page-leader-page-module-es2015.js.map