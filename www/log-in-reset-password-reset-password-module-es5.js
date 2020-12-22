(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-reset-password-reset-password-module"], {
    /***/
    "2Bqv":
    /*!**************************************************************!*\
      !*** ./src/app/log-in/reset-password/reset-password.page.ts ***!
      \**************************************************************/

    /*! exports provided: ResetPasswordPage */

    /***/
    function Bqv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function () {
        return ResetPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password.page.html */
      "kdX/");
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      "DphT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");

      var ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(activatedRoute, router, config, auth, alert) {
          _classCallCheck(this, ResetPasswordPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.config = config;
          this.auth = auth;
          this.alert = alert;
          this.subscriptions = [];
          this.formType = 'student';
          this.resetPasswordStudent = {
            token: '',
            email: '',
            user_type: 'students',
            password: '',
            password_confirmation: ''
          };
          this.resetPasswordLeader = {
            token: '',
            email: '',
            user_type: 'leaders',
            password: '',
            password_confirmation: ''
          };
          this.resetPasswordAdmin = {
            token: '',
            email: '',
            user_type: 'admins',
            password: '',
            password_confirmation: ''
          };
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(ResetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('reset-password');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('ResetToken')) {
                _this.resetPasswordAdmin.token = _this.activatedRoute.snapshot.paramMap.get('ResetToken');
                _this.resetPasswordLeader.token = _this.activatedRoute.snapshot.paramMap.get('ResetToken');
                _this.resetPasswordStudent.token = _this.activatedRoute.snapshot.paramMap.get('ResetToken');
              } else {
                _this.router.navigate([_this.eventName + '/Anmeldung']);
              }
            });
          }
          /**
           * Unsubscribes from all events when the page is unloaded
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sub) {
              return sub.unsubscribe();
            });
          }
        }, {
          key: "eventHandler",
          value: function eventHandler(keyCode) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'students';
            var form = arguments.length > 2 ? arguments[2] : undefined;

            if (keyCode === 13) {
              if (type === 'students') {
                this.resetStudentPassword(form);
              } else if (type === 'leaders') {
                this.resetLeaderPassword(form);
              } else if (type === 'admins') {
                this.resetAdminPassword(form);
              }
            }
          }
          /**
           * Sets the focus on the given element if ENTER is pressed
           * @param keyCode Contains the code of the pressed key
           * @param nextInput Contains the next element to be focused
           */

        }, {
          key: "nextInput",
          value: function nextInput(keyCode, _nextInput) {
            if (keyCode === 13) {
              _nextInput.setFocus();
            }
          }
        }, {
          key: "resetStudentPassword",
          value: function resetStudentPassword(form) {
            var _this2 = this;

            this.auth.resetPassword(this.resetPasswordStudent).subscribe(function (data) {
              _this2.alert.alert(data.message);

              form.reset();

              _this2.router.navigate([_this2.eventName + '/Anmeldung']);
            }, function (error) {
              _this2.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
            });
          }
        }, {
          key: "resetLeaderPassword",
          value: function resetLeaderPassword(form) {
            var _this3 = this;

            this.auth.resetPassword(this.resetPasswordLeader).subscribe(function (data) {
              _this3.alert.alert(data.message);

              form.reset();

              _this3.router.navigate([_this3.eventName + '/Anmeldung']);
            }, function (error) {
              _this3.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
            });
          }
        }, {
          key: "resetAdminPassword",
          value: function resetAdminPassword(form) {
            var _this4 = this;

            this.auth.resetPassword(this.resetPasswordAdmin).subscribe(function (data) {
              _this4.alert.alert(data.message);

              form.reset();

              _this4.router.navigate([_this4.eventName + '/Anmeldung']);
            }, function (error) {
              _this4.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
            });
          }
        }]);

        return ResetPasswordPage;
      }();

      ResetPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }];
      };

      ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetPasswordPage);
      /***/
    },

    /***/
    "4SHV":
    /*!****************************************************************!*\
      !*** ./src/app/log-in/reset-password/reset-password.module.ts ***!
      \****************************************************************/

    /*! exports provided: ResetPasswordPageModule */

    /***/
    function SHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function () {
        return ResetPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset-password.page */
      "2Bqv");

      var routes = [{
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
      }];

      var ResetPasswordPageModule = function ResetPasswordPageModule() {
        _classCallCheck(this, ResetPasswordPageModule);
      };

      ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
      })], ResetPasswordPageModule);
      /***/
    },

    /***/
    "DphT":
    /*!****************************************************************!*\
      !*** ./src/app/log-in/reset-password/reset-password.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function DphT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "kdX/":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/reset-password/reset-password.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kdX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Passwort ändern</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-card-title>Passwort ändern</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-segment color=\"buttons\" [(ngModel)]=\"formType\">\n        <ion-segment-button value=\"student\">\n          <ion-label>Schüler</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"leader\">\n          <ion-label>{{ projectNoun }}leiter</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"admin\">\n          <ion-label>Admin</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <form #studentResetPassword=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"resetStudentPassword(studentResetPassword)\" [hidden]=\"formType != 'student'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Schüler</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"resetPasswordStudent.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password\" required [(ngModel)]=\"resetPasswordStudent.password\" placeholder=\"Passwort\" type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password_confirmation\" required [(ngModel)]=\"resetPasswordStudent.password_confirmation\" placeholder=\"Passwort bestätigen\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"studentResetPassword.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Passwort ändern</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #leaderResetPassword=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"resetLeaderPassword(leaderResetPassword)\" [hidden]=\"formType != 'leader'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>{{ projectNoun }}leiter</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"resetPasswordLeader.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password\" required [(ngModel)]=\"resetPasswordLeader.password\" placeholder=\"Passwort\" type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password_confirmation\" required [(ngModel)]=\"resetPasswordLeader.password_confirmation\" placeholder=\"Passwort bestätigen\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"leaderResetPassword.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Passwort ändern</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #adminResetPassword=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"resetAdminPassword(adminResetPassword)\" [hidden]=\"formType != 'admin'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Admins</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"resetPasswordAdmin.email\" name=\"email\" placeholder=\"E-Mail\" required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password\" required [(ngModel)]=\"resetPasswordAdmin.password\" placeholder=\"Passwort\" type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" minlength=\"8\" name=\"password_confirmation\" required [(ngModel)]=\"resetPasswordAdmin.password_confirmation\" placeholder=\"Passwort bestätigen\" type=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"adminResetPassword.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Passwort ändern</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-reset-password-reset-password-module-es5.js.map