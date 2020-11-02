(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-generation-user-generation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-generation/user-generation.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-generation/user-generation.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Als Schüler registrieren</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <form #signUpStudentForm=\"ngForm\" name=\"LeaderForm\" (submit)=\"signUpAsStudent(signUpStudentForm)\" class=\"content\">\n    <ion-card color=\"background\">\n      <ion-card-header>\n        <ion-title>Schüler-Account erstellen</ion-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-list>\n          <ion-item color=\"items\">\n            <ion-input name=\"user_name\" [(ngModel)]=\"signUpData.user_name\" required minlength=\"5\" maxlength=\"50\" type=\"text\" placeholder=\"Benutzername\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"email\" [(ngModel)]=\"signUpData.email\" required maxlength=\"50\" type=\"email\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password\" [(ngModel)]=\"signUpData.password\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password_confirmation\" [(ngModel)]=\"signUpData.password_confirmation\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort bestätigen\" color=\"text\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button name=\"submit\" type=\"submit\" [disabled]=\"signUpStudentForm.invalid\"  class=\"ion-no-margin\" expand=\"block\"color=\"buttons\">Registrieren</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/user-generation/user-generation-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/log-in/user-generation/user-generation-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UserGenerationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGenerationPageRoutingModule", function() { return UserGenerationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_generation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-generation.page */ "./src/app/log-in/user-generation/user-generation.page.ts");




const routes = [
    {
        path: '',
        component: _user_generation_page__WEBPACK_IMPORTED_MODULE_3__["UserGenerationPage"]
    }
];
let UserGenerationPageRoutingModule = class UserGenerationPageRoutingModule {
};
UserGenerationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserGenerationPageRoutingModule);



/***/ }),

/***/ "./src/app/log-in/user-generation/user-generation.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/log-in/user-generation/user-generation.module.ts ***!
  \******************************************************************/
/*! exports provided: UserGenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGenerationPageModule", function() { return UserGenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-generation-routing.module */ "./src/app/log-in/user-generation/user-generation-routing.module.ts");
/* harmony import */ var _user_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-generation.page */ "./src/app/log-in/user-generation/user-generation.page.ts");







let UserGenerationPageModule = class UserGenerationPageModule {
};
UserGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserGenerationPageRoutingModule"]
        ],
        declarations: [_user_generation_page__WEBPACK_IMPORTED_MODULE_6__["UserGenerationPage"]]
    })
], UserGenerationPageModule);



/***/ }),

/***/ "./src/app/log-in/user-generation/user-generation.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/log-in/user-generation/user-generation.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLWdlbmVyYXRpb24vdXNlci1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/log-in/user-generation/user-generation.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/log-in/user-generation/user-generation.page.ts ***!
  \****************************************************************/
/*! exports provided: UserGenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGenerationPage", function() { return UserGenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/participants.service */ "./src/app/participants.service.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");






let UserGenerationPage = class UserGenerationPage {
    constructor(activatedRoute, alertCtrl, participantsService, config) {
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.participantsService = participantsService;
        this.config = config;
        this.signUpData = {
            user_name: '',
            email: '',
            password: '',
            password_confirmation: '',
        };
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text = this.config.get_content('user-generation');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (paramMap.has('SignUpToken')) {
                this.signUpData.sign_up_token = this.activatedRoute.snapshot.paramMap.get('SignUpToken');
            }
        });
    }
    signUpAsStudent(form) {
        if (this.signUpData.password === this.signUpData.password_confirmation) {
            this.participantsService.signUpParticipant(this.signUpData, form);
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
UserGenerationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantsService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
UserGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-generation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-generation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-generation/user-generation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-generation.page.scss */ "./src/app/log-in/user-generation/user-generation.page.scss")).default]
    })
], UserGenerationPage);



/***/ })

}]);
//# sourceMappingURL=log-in-user-generation-user-generation-module-es2015.js.map