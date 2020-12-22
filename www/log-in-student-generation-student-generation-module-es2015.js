(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-generation-student-generation-module"],{

/***/ "i/4z":
/*!************************************************************************!*\
  !*** ./src/app/log-in/student-generation/student-generation.module.ts ***!
  \************************************************************************/
/*! exports provided: StudentGenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGenerationPageModule", function() { return StudentGenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _student_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-generation.page */ "wAlE");







const routes = [
    {
        path: '',
        component: _student_generation_page__WEBPACK_IMPORTED_MODULE_6__["StudentGenerationPage"]
    }
];
let StudentGenerationPageModule = class StudentGenerationPageModule {
};
StudentGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_student_generation_page__WEBPACK_IMPORTED_MODULE_6__["StudentGenerationPage"]]
    })
], StudentGenerationPageModule);



/***/ }),

/***/ "wAlE":
/*!**********************************************************************!*\
  !*** ./src/app/log-in/student-generation/student-generation.page.ts ***!
  \**********************************************************************/
/*! exports provided: StudentGenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGenerationPage", function() { return StudentGenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_student_generation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-generation.page.html */ "xI1O");
/* harmony import */ var _student_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-generation.page.scss */ "wqzf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/students.service */ "ZvwH");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");







let StudentGenerationPage = class StudentGenerationPage {
    constructor(alertCtrl, studentsService, config) {
        this.alertCtrl = alertCtrl;
        this.studentsService = studentsService;
        this.config = config;
        this.subscriptions = [];
        this.signUpData = {
            user_name: '',
            email: '',
            password: '',
            password_confirmation: '',
        };
        this.text = this.config.get_content('user-generation');
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    signUpAsStudent(form) {
        if (this.signUpData.password === this.signUpData.password_confirmation) {
            this.studentsService.signUpStudent(this.signUpData, form);
        }
        else {
            this.alertCtrl.create({
                header: 'Fehler',
                message: 'Das bestätigte Passwort entspricht nicht dem anfangs eingegebenen!',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                    }]
            }).then(alertEl => {
                alertEl.present();
            });
        }
    }
};
StudentGenerationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__["StudentsService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
StudentGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-generation',
        template: _raw_loader_student_generation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentGenerationPage);



/***/ }),

/***/ "wqzf":
/*!************************************************************************!*\
  !*** ./src/app/log-in/student-generation/student-generation.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWdlbmVyYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "xI1O":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-generation/student-generation.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Als Schüler registrieren</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <form #signUpStudentForm=\"ngForm\" name=\"LeaderForm\" (ngSubmit)=\"signUpAsStudent(signUpStudentForm)\" class=\"content\">\n    <ion-card color=\"background\">\n      <ion-card-header>\n        <ion-card-title text-wrap >Schüler-Account erstellen</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-list>\n          <ion-item color=\"items\">\n            <ion-input name=\"user_name\" [(ngModel)]=\"signUpData.user_name\" required minlength=\"5\" maxlength=\"50\" type=\"text\" placeholder=\"Benutzername\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"email\" [(ngModel)]=\"signUpData.email\" required maxlength=\"50\" type=\"email\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password\" [(ngModel)]=\"signUpData.password\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password_confirmation\" [(ngModel)]=\"signUpData.password_confirmation\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort bestätigen\" color=\"text\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button name=\"submit\" type=\"submit\" [disabled]=\"signUpStudentForm.invalid\"  class=\"ion-no-margin\" expand=\"block\"color=\"buttons\">Registrieren</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=log-in-student-generation-student-generation-module-es2015.js.map