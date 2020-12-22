(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-exchange-request-exchange-request-module"],{

/***/ "67tE":
/*!*********************************************************************************!*\
  !*** ./src/app/log-in/student-page/exchange-request/exchange-request.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ExchangeRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRequestPageModule", function() { return ExchangeRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _exchange_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exchange-request.page */ "otn3");







const routes = [
    {
        path: '',
        component: _exchange_request_page__WEBPACK_IMPORTED_MODULE_6__["ExchangeRequestPage"]
    }
];
let ExchangeRequestPageModule = class ExchangeRequestPageModule {
};
ExchangeRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_exchange_request_page__WEBPACK_IMPORTED_MODULE_6__["ExchangeRequestPage"]]
    })
], ExchangeRequestPageModule);



/***/ }),

/***/ "RAMv":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/exchange-request/exchange-request.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Tausch anfragen</ion-title>\n    <ion-button color=\"buttons\" [disabled]=\"loadedStudent.exchange_id == 0\" slot=\"end\" (click)=\"delete()\"  color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"loadedStudent.exchange_id == 0\" class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-card-title>Tauschanfragen senden</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ExchangeForm\" (ngSubmit)=\"submit()\">\n        <ion-list>\n          <ion-item-divider color=\"background\">\n            <ion-card-title>Du</ion-card-title>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-input color=\"text\" readonly [(ngModel)]=\"loadedStudent.first_name\" name=\"ExchangeFirstFirstName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-input color=\"text\" readonly [(ngModel)]=\"loadedStudent.last_name\" name=\"ExchangeFirstLastName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-input color=\"text\" readonly name=\"ExchangeFirstGradeAndClass\">{{ loadedStudent.grade }}{{ loadedStudent.letter }}</ion-input>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-title *ngIf=\"exchangePartner.id === 0\">Dein Freund </ion-title>\n            <ion-title *ngIf=\"exchangePartner.id != 0\">\n                {{ exchangePartner.first_name }} {{ exchangePartner.last_name }} {{ exchangePartner.grade }}{{ exchangePartner.letter }}\n            </ion-title>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" type=\"text\" required placeholder=\"Vorname\" [(ngModel)]=\"exchangePartner.first_name\" name=\"ExchangeSecondFirstName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" type=\"text\" required placeholder=\"Nachname\" [(ngModel)]=\"exchangePartner.last_name\" name=\"ExchangeSecondLastName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n            <ion-select [selectedText]=\"exchangePartner.grade\" required name=\"ParticipantGrade\" cancelText=\"Abbrechen\" [(ngModel)]=\"exchangePartner.grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-radio-group required name=\"ParticipantClass\" [(ngModel)]=\"exchangePartner.letter\">\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">A </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">B </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">C </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">D </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Tauschanfrage senden</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"loadedStudent.exchange_id != 0\" class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ studentAlreadyExchangeError }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "VX3g":
/*!*********************************************************************************!*\
  !*** ./src/app/log-in/student-page/exchange-request/exchange-request.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNoYW5nZS1yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "otn3":
/*!*******************************************************************************!*\
  !*** ./src/app/log-in/student-page/exchange-request/exchange-request.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ExchangeRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRequestPage", function() { return ExchangeRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_exchange_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./exchange-request.page.html */ "RAMv");
/* harmony import */ var _exchange_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exchange-request.page.scss */ "VX3g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/students.service */ "ZvwH");
/* harmony import */ var src_app_services_exchanges_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/exchanges.service */ "hQbD");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");










let ExchangeRequestPage = class ExchangeRequestPage {
    constructor(activatedRoute, router, studentsService, exchangesService, alertCtrl, alert, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.studentsService = studentsService;
        this.exchangesService = exchangesService;
        this.alertCtrl = alertCtrl;
        this.alert = alert;
        this.config = config;
        this.subscriptions = [];
        this.loadedStudent = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
            exchange_id: 0,
            first_friend: 0,
            second_friend: 0,
            third_friend: 0,
            first_wish: 0,
            second_wish: 0,
            third_wish: 0,
            project_id: 0,
            role: 1
        };
        this.exchangePartner = {
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
        };
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text = this.config.get_content('user-exchange-request');
        this.studentAlreadyExchangeError = this.config.get_error('student-already_exchange');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.studentUrl = paramMap.get('ParticipantName');
        });
        this.getStudent();
        this.subscriptions.push(this.studentsService.update.subscribe(() => this.getStudent()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getStudent() {
        this.studentsService.getSelfStudent().subscribe(data => {
            this.loadedStudent = data.data;
        });
    }
    submit() {
        this.studentsService.getStudentID(this.exchangePartner).subscribe(data => {
            // tslint:disable-next-line:disable-next-line: triple-equals
            if (data.id != 0 && this.loadedStudent.exchange_id == 0) {
                this.exchangesService.createExchange(data.id).subscribe(response => {
                    this.alert.alert(response.message);
                    this.router.navigate([this.eventName + '/Schüler/' + this.studentUrl]);
                    this.exchangesService.update.emit();
                }, error => {
                    this.alert.error('Erstellung des Tausches fehlgeschlagen!', error.error);
                });
            }
            else {
                this.alertCtrl.create({
                    header: 'Fehler',
                    message: 'Du must zuerst einen validen Tauschpartner auswählen!',
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel',
                        }]
                }).then(alertEl => {
                    alertEl.present();
                });
            }
        });
    }
    delete() {
        this.alertCtrl.create({
            header: 'Bist du sicher?',
            message: 'Willst du wirklich deine Tauschanfrage löschen?',
            buttons: [{
                    text: 'Abbrechen',
                    role: 'cancel',
                }, {
                    text: 'Löschen',
                    handler: () => {
                        this.exchangesService.deleteSelfExchange().subscribe(data => {
                            this.alert.alert(data.message);
                            this.router.navigate([this.eventName + '/Schüler/' + this.studentUrl]);
                            this.exchangesService.update.emit();
                        }, error => {
                            this.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
                        });
                    }
                }]
        }).then(alertEl => {
            alertEl.present();
        });
    }
};
ExchangeRequestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__["StudentsService"] },
    { type: src_app_services_exchanges_service__WEBPACK_IMPORTED_MODULE_6__["ExchangesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }
];
ExchangeRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-exchange-request',
        template: _raw_loader_exchange_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exchange_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExchangeRequestPage);



/***/ })

}]);
//# sourceMappingURL=log-in-student-page-exchange-request-exchange-request-module-es2015.js.map