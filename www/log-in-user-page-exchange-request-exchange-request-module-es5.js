(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-exchange-request-exchange-request-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/exchange-request/exchange-request.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/exchange-request/exchange-request.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInUserPageExchangeRequestExchangeRequestPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Benutzer/{{ participantUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Tausch anfragen</ion-title>\n    <ion-button color=\"buttons\" [disabled]=\"loadedUser.exchange_id == 0\" slot=\"end\" (click)=\"delete()\"  color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"loadedUser.exchange_id == 0\" class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-title>Tauschanfragen senden</ion-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ExchangeForm\" (ngSubmit)=\"submit()\">\n        <ion-list>\n          <ion-item-divider color=\"background\">\n            <ion-title>Du</ion-title>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-input color=\"text\" readonly [(ngModel)]=\"loadedUser.first_name\" name=\"ExchangeFirstFirstName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-input color=\"text\" readonly [(ngModel)]=\"loadedUser.last_name\" name=\"ExchangeFirstLastName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-input color=\"text\" readonly name=\"ExchangeFirstGradeAndClass\">{{ loadedUser.grade }}{{ loadedUser.letter }}</ion-input>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-title *ngIf=\"exchangePartner.id === 0\">Dein Freund </ion-title>\n            <ion-title *ngIf=\"exchangePartner.id != 0\">\n                {{ exchangePartner.first_name }} {{ exchangePartner.last_name }} {{ exchangePartner.grade }}{{ exchangePartner.letter }}\n            </ion-title>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" type=\"text\" required placeholder=\"Vorname\" [(ngModel)]=\"exchangePartner.first_name\" name=\"ExchangeSecondFirstName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" type=\"text\" required placeholder=\"Nachname\" [(ngModel)]=\"exchangePartner.last_name\" name=\"ExchangeSecondLastName\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n            <ion-select [selectedText]=\"exchangePartner.grade\" required name=\"ParticipantGrade\" cancelText=\"Abbrechen\" [(ngModel)]=\"exchangePartner.grade\">\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-radio-group required name=\"ParticipantClass\" [(ngModel)]=\"exchangePartner.letter\">\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">A </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">B </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">C </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">D </ion-label>\n                <ion-radio  color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Tauschanfrage senden</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"loadedUser.exchange_id != 0\" class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ studentAlreadyExchangeError }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/user-page/exchange-request/exchange-request.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/log-in/user-page/exchange-request/exchange-request.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ExchangeRequestPageModule */

    /***/
    function srcAppLogInUserPageExchangeRequestExchangeRequestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExchangeRequestPageModule", function () {
        return ExchangeRequestPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _exchange_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exchange-request.page */
      "./src/app/log-in/user-page/exchange-request/exchange-request.page.ts");

      var routes = [{
        path: '',
        component: _exchange_request_page__WEBPACK_IMPORTED_MODULE_6__["ExchangeRequestPage"]
      }];

      var ExchangeRequestPageModule = function ExchangeRequestPageModule() {
        _classCallCheck(this, ExchangeRequestPageModule);
      };

      ExchangeRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_exchange_request_page__WEBPACK_IMPORTED_MODULE_6__["ExchangeRequestPage"]]
      })], ExchangeRequestPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/user-page/exchange-request/exchange-request.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/log-in/user-page/exchange-request/exchange-request.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInUserPageExchangeRequestExchangeRequestPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLXBhZ2UvZXhjaGFuZ2UtcmVxdWVzdC9leGNoYW5nZS1yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/log-in/user-page/exchange-request/exchange-request.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/log-in/user-page/exchange-request/exchange-request.page.ts ***!
      \****************************************************************************/

    /*! exports provided: ExchangeRequestPage */

    /***/
    function srcAppLogInUserPageExchangeRequestExchangeRequestPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExchangeRequestPage", function () {
        return ExchangeRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_participants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/participants.service */
      "./src/app/participants.service.ts");
      /* harmony import */


      var src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/exchanges.service */
      "./src/app/exchanges.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");

      var ExchangeRequestPage = /*#__PURE__*/function () {
        function ExchangeRequestPage(activatedRoute, router, participantsService, exchangesService, alertCtrl, alert, config) {
          _classCallCheck(this, ExchangeRequestPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.participantsService = participantsService;
          this.exchangesService = exchangesService;
          this.alertCtrl = alertCtrl;
          this.alert = alert;
          this.config = config;
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
            letter: ''
          };
        }

        _createClass(ExchangeRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('user-exchange-request');
            this.studentAlreadyExchangeError = this.config.get_error('student-already_exchange');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.participantUrl = paramMap.get('ParticipantName');
            });
            this.getStudent();
          }
        }, {
          key: "getStudent",
          value: function getStudent() {
            var _this2 = this;

            this.participantsService.getSelfParticipant().subscribe(function (data) {
              _this2.loadedUser = data.data;
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            this.participantsService.getParticipantID(this.exchangePartner).subscribe(function (data) {
              // tslint:disable-next-line:disable-next-line: triple-equals
              if (data.id != 0 && _this3.loadedUser.exchange_id == 0) {
                _this3.exchangesService.createExchange(data.id).subscribe(function (response) {
                  _this3.alert.alert(response.message);

                  _this3.router.navigate(['Projekttage/Benutzer/' + _this3.participantUrl]);

                  _this3.exchangesService.update.emit();
                }, function (error) {
                  _this3.alert.error('Erstellung des Tausches fehlgeschlagen!', error.error);
                });
              } else {
                _this3.alertCtrl.create({
                  header: 'Fehler',
                  message: 'Du must zuerst einen validen Tauschpartner auswählen!',
                  buttons: [{
                    text: 'Ok',
                    role: 'cancel'
                  }]
                }).then(function (alertEl) {
                  alertEl.present();
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this4 = this;

            this.alertCtrl.create({
              header: 'Bist du sicher?',
              message: 'Willst du wirklich deine Tauschanfrage löschen?',
              buttons: [{
                text: 'Abbrechen',
                role: 'cancel'
              }, {
                text: 'Löschen',
                handler: function handler() {
                  _this4.exchangesService.deleteSelfExchange().subscribe(function (data) {
                    _this4.alert.alert(data.message);

                    _this4.router.navigate(['Projekttage/Benutzer/' + _this4.participantUrl]);

                    _this4.exchangesService.update.emit();
                  }, function (error) {
                    _this4.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
                  });
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }]);

        return ExchangeRequestPage;
      }();

      ExchangeRequestPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantsService"]
        }, {
          type: src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_4__["ExchangesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
        }];
      };

      ExchangeRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exchange-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./exchange-request.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/exchange-request/exchange-request.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./exchange-request.page.scss */
        "./src/app/log-in/user-page/exchange-request/exchange-request.page.scss"))["default"]]
      })], ExchangeRequestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-user-page-exchange-request-exchange-request-module-es5.js.map