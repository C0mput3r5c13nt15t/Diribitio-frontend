(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-exchange-confirm-exchange-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Benutzer/{{ participantUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Tauschanfrage bestätigen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"loadedUser.exchange_id == 0\" class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-title>Tauschanfragen annehmen</ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ content }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item color=\"items\" *ngFor=\"let exchange of loadedUser.exchange_requests\">\n          <ion-button color=\"buttons\" slot=\"start\" (click)=\"confirm(exchange.id)\"><ion-icon name=\"checkmark\"></ion-icon></ion-button>\n          {{ exchange.sender.first_name }} {{ exchange.sender.last_name }} {{ exchange.sender.grade }}{{ exchange.sender.letter }} aus {{ exchange.sender.project_title }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"loadedUser.exchange_id != 0\" class=\"content\">\n    <ion-card-content>\n      <label color=\"danger\">{{ studentAlreadyExchangeError }}</label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/user-page/exchange-confirm/exchange-confirm.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/log-in/user-page/exchange-confirm/exchange-confirm.module.ts ***!
  \******************************************************************************/
/*! exports provided: ExchangeConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeConfirmPageModule", function() { return ExchangeConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _exchange_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exchange-confirm.page */ "./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.ts");







const routes = [
    {
        path: '',
        component: _exchange_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ExchangeConfirmPage"]
    }
];
let ExchangeConfirmPageModule = class ExchangeConfirmPageModule {
};
ExchangeConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_exchange_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ExchangeConfirmPage"]]
    })
], ExchangeConfirmPageModule);



/***/ }),

/***/ "./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLXBhZ2UvZXhjaGFuZ2UtY29uZmlybS9leGNoYW5nZS1jb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.ts ***!
  \****************************************************************************/
/*! exports provided: ExchangeConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeConfirmPage", function() { return ExchangeConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/exchanges.service */ "./src/app/exchanges.service.ts");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









let ExchangeConfirmPage = class ExchangeConfirmPage {
    constructor(router, activatedRoute, exchangesService, projectsService, alertCtrl, config, alert) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.exchangesService = exchangesService;
        this.projectsService = projectsService;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.alert = alert;
        this.loadedUser = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
            exchange_id: 0,
            exchange_requests: [],
            first_friend: 0,
            second_friend: 0,
            third_friend: 0,
            first_wish: 0,
            second_wish: 0,
            third_wish: 0,
            project_id: 0,
            role: 1
        };
    }
    ngOnInit() {
        this.content = this.config.get_content('user-exchange-confirm');
        this.studentAlreadyExchangeError = this.config.get_error('student-already_exchange');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.participantUrl = paramMap.get('ParticipantName');
        });
        this.getExchanges();
    }
    getExchanges() {
        this.exchangesService.getAllExchangesForParticipant().subscribe(data => {
            this.loadedUser.exchange_requests = data.data;
            this.loadedUser.exchange_requests.forEach(request => {
                this.projectsService.getLittleProject(request.sender.project_id).subscribe(response => {
                    request.sender.project_title = response.data.title;
                });
            });
        });
    }
    confirm(exchangeID) {
        this.alertCtrl.create({
            header: 'Bist du sicher?',
            message: 'Willst du wirklich tauschen?',
            buttons: [{
                    text: 'Abbrechen',
                    role: 'cancel',
                }, {
                    text: 'Ja',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.exchangesService.confirmExchange(exchangeID).subscribe(data => {
                            this.alert.alert(data.message);
                            this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
                            this.exchangesService.update.emit();
                        }, error => {
                            this.alert.error('Bestätigung des Tausches fehlgeschlagen!', error.error);
                        });
                    })
                }]
        }).then(alertEl => {
            alertEl.present();
        });
    }
};
ExchangeConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_3__["ExchangesService"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
ExchangeConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exchange-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exchange-confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exchange-confirm.page.scss */ "./src/app/log-in/user-page/exchange-confirm/exchange-confirm.page.scss")).default]
    })
], ExchangeConfirmPage);



/***/ })

}]);
//# sourceMappingURL=log-in-user-page-exchange-confirm-exchange-confirm-module-es2015.js.map