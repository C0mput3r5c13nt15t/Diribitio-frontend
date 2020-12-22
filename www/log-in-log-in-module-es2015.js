(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-log-in-module"],{

/***/ "1dtn":
/*!***************************************!*\
  !*** ./src/app/log-in/log-in.page.ts ***!
  \***************************************/
/*! exports provided: LogInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPage", function() { return LogInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_log_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./log-in.page.html */ "Ny6q");
/* harmony import */ var _log_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-in.page.scss */ "L6Md");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/students.service */ "ZvwH");
/* harmony import */ var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/leaders.service */ "PO/Q");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/admins.service */ "uVPj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");













let LogInPage = class LogInPage {
    constructor(auth, router, studentsService, scheduleService, leadersService, adminsService, alert, config) {
        this.auth = auth;
        this.router = router;
        this.studentsService = studentsService;
        this.scheduleService = scheduleService;
        this.leadersService = leadersService;
        this.adminsService = adminsService;
        this.alert = alert;
        this.config = config;
        this.subscriptions = [];
        /**
         * Conatins the which form should be shown on the log-in page
         */
        this.formType = 'student';
        this.StudentCredentials = {
            email: '',
            password: '',
        };
        this.LeaderCredentials = {
            email: '',
            password: '',
        };
        this.AdminCredentials = {
            email: '',
            password: '',
        };
        /**
         * Conatins the number of times a log-in has been tried
         */
        this.tries = 0;
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
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.getSchedule();
        this.subscriptions.push(this.scheduleService.update.subscribe(() => this.getSchedule()));
    }
    ionViewWillEnter() {
        this.log_in_from_storage();
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
    keyPressEventHandler(keyCode, type = 'students', form) {
        if (keyCode === 13) {
            if (type === 'students') {
                this.LogInStudent(form);
            }
            else if (type === 'leaders') {
                this.LogInLeader(form);
            }
            else if (type === 'admins') {
                this.LogInAdmin(form);
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
    log_in_from_storage() {
        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt');
            this.auth.check_jwt(jwt).subscribe(data => {
                const userAuth = data.auth;
                this.auth.set_jwt(data.token);
                this.auth.setLoggedIn(true);
                if (userAuth === 'admins') {
                    this.router.navigate([this.eventName + '/Admin/' + data.user_name]);
                }
                else if (userAuth === 'leaders') {
                    this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + data.user_name]);
                }
                else if (userAuth === 'students') {
                    this.router.navigate([this.eventName + '/Schüler/' + data.user_name]);
                }
            }, (error) => {
                this.alert.error('Die Sitzung ist bereits abgelaufen!', error);
                this.auth.setLoggedIn(false);
            });
        }
    }
    LogInStudent(form) {
        this.studentsService.logInStudent(this.StudentCredentials).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.router.navigate([this.eventName + '/Schüler/' + data.user_name]);
                this.auth.setLoggedIn(true);
                form.reset();
            }
        }, error => {
            this.alert.error('Anmeldung fehlgeschlagen!', error.error);
            this.wrongPassword();
        });
    }
    LogInLeader(form) {
        this.leadersService.logInLeader(this.LeaderCredentials).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + data.user_name]);
                this.auth.setLoggedIn(true);
                form.reset();
            }
        }, error => {
            this.alert.error('Anmeldung fehlgeschlagen!', error.error);
            this.wrongPassword();
        });
    }
    LogInAdmin(form) {
        this.adminsService.logInAdmin(this.AdminCredentials).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.router.navigate([this.eventName + '/Admin/' + data.user_name]);
                this.auth.setLoggedIn(true);
                form.reset();
            }
        }, error => {
            this.alert.error('Anmeldung fehlgeschlagen!', error.error);
            this.wrongPassword();
        });
    }
    wrongPassword() {
        this.tries += 1;
        if (this.tries >= 5) {
            this.alert.wrongPassword(this.tries * 3000, this.tries);
        }
    }
};
LogInPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"] },
    { type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_7__["LeadersService"] },
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_8__["AdminsService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"] }
];
LogInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-log-in',
        template: _raw_loader_log_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_log_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogInPage);



/***/ }),

/***/ "L6Md":
/*!*****************************************!*\
  !*** ./src/app/log-in/log-in.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerd_label {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZy1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoibG9nLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJkX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "Ny6q":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Anmeldung</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" [routerLink]=\"['../../Help']\"><ion-icon name=\"help-circle\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <div data-ng-controller=\"myCtrl\" data-ng-init=\"log_in_from_storage()\"></div>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>Einloggen</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment color=\"buttons\" [(ngModel)]=\"formType\">\n        <ion-segment-button value=\"student\">\n          <ion-label>Schüler</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"leader\">\n          <ion-label>{{ projectNoun }}leiter</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"admin\">\n          <ion-label>Admin</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <form #studentLoginForm=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"LogInStudent(studentLoginForm)\" [hidden]=\"formType != 'student'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Schüler</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input name=\"email\" [(ngModel)]=\"StudentCredentials.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextStudentField)\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input #nextStudentField name=\"password\" [(ngModel)]=\"StudentCredentials.password\" required minlength=\"8\" type=\"password\" (keypress)=\"keyPressEventHandler($event.keyCode, 'students', studentLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"studentLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n            </div>\n            <ion-label class=\"centerd_label\" color=\"text\">oder</ion-label>\n            <div class=\"ion-padding\">\n              <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\" [routerLink]=\"['./Schüler Registration']\" color=\"buttons\" class=\"ion-no-margin\" expand=\"block\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #leaderLoginForm=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"LogInLeader(leaderLoginForm)\" [hidden]=\"formType != 'leader'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>{{ projectNoun }}leiter</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input name=\"email\" [(ngModel)]=\"LeaderCredentials.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextLeaderField)\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input #nextLeaderField name=\"password\" [(ngModel)]=\"LeaderCredentials.password\" required minlength=\"8\" type=\"password\" (keypress)=\"keyPressEventHandler($event.keyCode, 'leaders', leaderLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"leaderLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n            </div>\n            <ion-label class=\"centerd_label\" color=\"text\">oder</ion-label>\n            <div class=\"ion-padding\">\n              <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\" routerLink='./{{ projectNoun}}leiter Registration' color=\"buttons\" class=\"ion-no-margin\" expand=\"block\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form id=\"Formular\" #adminLoginForm=\"ngForm\" (ngSubmit)=\"LogInAdmin(adminLoginForm)\" [hidden]=\"formType != 'admin'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Admin</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <ion-list>\n                <ion-item color=\"items\">\n                  <ion-input name=\"email\" [(ngModel)]=\"AdminCredentials.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextAdminField)\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n                </ion-item>\n                <ion-item color=\"items\">\n                  <ion-input #nextAdminField name=\"password\" [(ngModel)]=\"AdminCredentials.password\" required minlength=\"8\" type=\"password\" (keypress)=\"keyPressEventHandler($event.keyCode, 'admins', adminLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n                </ion-item>\n              </ion-list>\n              <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n              <div class=\"ion-padding\">\n                <ion-button name=\"login\" type=\"submit\" [disabled]=\"adminLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n              </div>\n              <ion-label class=\"centerd_label\" color=\"text\">oder</ion-label>\n              <div class=\"ion-padding\">\n                <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.sort_students\" [routerLink]=\"['./Admin Registration']\" color=\"buttons\" class=\"ion-no-margin\" expand=\"block\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n              </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "S2+d":
/*!*****************************************!*\
  !*** ./src/app/log-in/log-in.module.ts ***!
  \*****************************************/
/*! exports provided: LogInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageModule", function() { return LogInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in.page */ "1dtn");







const routes = [
    {
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]
    }
];
let LogInPageModule = class LogInPageModule {
};
LogInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]]
    })
], LogInPageModule);



/***/ })

}]);
//# sourceMappingURL=log-in-log-in-module-es2015.js.map