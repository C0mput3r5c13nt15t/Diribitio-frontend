(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-log-in-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInLogInPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Anmeldung</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" [routerLink]=\"['../../Help']\"><ion-icon name=\"help-circle\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <div data-ng-controller=\"myCtrl\" data-ng-init=\"log_in_from_storage()\"></div>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-title>\n        Einloggen\n      </ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment color=\"buttons\" [(ngModel)]=\"formType\">\n        <ion-segment-button value=\"student\">\n          <ion-label>Schüler</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"leader\">\n          <ion-label>{{ projectNoun }}leiter</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"admin\">\n          <ion-label>Admin</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <form #studentLoginForm=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"LogInStudent(studentLoginForm)\" [hidden]=\"formType != 'student'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Schüler</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input name=\"email\" [(ngModel)]=\"Student.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextStudentField)\" placeholder=\"Benutzername\" color=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input #nextStudentField name=\"password\" [(ngModel)]=\"Student.password\" required minlength=\"8\" type=\"password\" (keypress)=\"eventHandler($event.keyCode, 'students', studentLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n            <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.registration\" [routerLink]=\"['./Schüler Registration']\" color=\"buttons\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"studentLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #leaderLoginForm=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"LogInLeader(leaderLoginForm)\" [hidden]=\"formType != 'leader'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>{{ projectNoun }}leiter</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input name=\"email\" [(ngModel)]=\"Leader.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextLeaderField)\" placeholder=\"E-mail\" color=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input #nextLeaderField name=\"password\" [(ngModel)]=\"Leader.password\" required minlength=\"8\" type=\"password\" (keypress)=\"eventHandler($event.keyCode, 'leaders', leaderLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n            <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.registration\" [routerLink]=\"['./Projektleiter Registration']\" color=\"buttons\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"leaderLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form id=\"Formular\" #adminLoginForm=\"ngForm\" (ngSubmit)=\"LogInAdmin(adminLoginForm)\" [hidden]=\"formType != 'admin'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Admin</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <ion-list>\n                <ion-item color=\"items\">\n                  <ion-input name=\"email\" [(ngModel)]=\"Admin.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextAdminField)\" placeholder=\"E-mail\" color=\"text\"></ion-input>\n                </ion-item>\n                <ion-item color=\"items\">\n                  <ion-input #nextAdminField name=\"password\" [(ngModel)]=\"Admin.password\" required minlength=\"8\" type=\"password\" (keypress)=\"eventHandler($event.keyCode, 'admins', adminLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n                </ion-item>\n              </ion-list>\n              <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n              <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.sort_students\" [routerLink]=\"['./Admin Registration']\" color=\"buttons\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n              <div class=\"ion-padding\">\n                <ion-button name=\"login\" type=\"submit\" [disabled]=\"adminLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n              </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/log-in.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/log-in/log-in.module.ts ***!
      \*****************************************/

    /*! exports provided: LogInPageModule */

    /***/
    function srcAppLogInLogInModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPageModule", function () {
        return LogInPageModule;
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


      var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./log-in.page */
      "./src/app/log-in/log-in.page.ts");

      var routes = [{
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]
      }];

      var LogInPageModule = function LogInPageModule() {
        _classCallCheck(this, LogInPageModule);
      };

      LogInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]]
      })], LogInPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/log-in.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/log-in/log-in.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInLogInPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9sb2ctaW4ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/log-in/log-in.page.ts":
    /*!***************************************!*\
      !*** ./src/app/log-in/log-in.page.ts ***!
      \***************************************/

    /*! exports provided: LogInPage */

    /***/
    function srcAppLogInLogInPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPage", function () {
        return LogInPage;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _participants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../participants.service */
      "./src/app/participants.service.ts");
      /* harmony import */


      var _leaders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../leaders.service */
      "./src/app/leaders.service.ts");
      /* harmony import */


      var _admins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../admins.service */
      "./src/app/admins.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _schedule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../schedule.service */
      "./src/app/schedule.service.ts");

      var LogInPage = /*#__PURE__*/function () {
        function LogInPage(auth, router, participantsService, scheduleService, leadersService, adminsService, alert, config) {
          _classCallCheck(this, LogInPage);

          this.auth = auth;
          this.router = router;
          this.participantsService = participantsService;
          this.scheduleService = scheduleService;
          this.leadersService = leadersService;
          this.adminsService = adminsService;
          this.alert = alert;
          this.config = config;
          this.formType = 'student';
          this.Student = {
            email: 'kirsten.koepp@example.net',
            password: 'Passwort'
          };
          this.Leader = {
            email: 'freda60@example.net',
            password: 'Passwort'
          };
          this.Admin = {
            email: 'pauljustus27@gmail.com',
            password: 'Passwort'
          };
          this.tries = 0;
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
        }

        _createClass(LogInPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.projectNoun = this.config.app_config.project_noun;
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this.schedule = data.data;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.log_in_from_storage();
          }
        }, {
          key: "eventHandler",
          value: function eventHandler(keyCode) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'students';
            var form = arguments.length > 2 ? arguments[2] : undefined;

            if (keyCode === 13) {
              if (type === 'students') {
                this.LogInStudent(form);
              } else if (type === 'leaders') {
                this.LogInLeader(form);
              } else if (type === 'admins') {
                this.LogInAdmin(form);
              }
            }
          }
        }, {
          key: "nextInput",
          value: function nextInput(keyCode, _nextInput) {
            if (keyCode === 13) {
              _nextInput.setFocus();
            }
          }
        }, {
          key: "log_in_from_storage",
          value: function log_in_from_storage() {
            var _this2 = this;

            if (localStorage.getItem('jwt')) {
              var jwt = localStorage.getItem('jwt');
              this.auth.check_jwt(jwt).subscribe(function (data) {
                var userAuth = data.auth;

                _this2.auth.set_jwt(data.token);

                _this2.auth.setLoggedIn(true);

                if (userAuth === 'admins') {
                  _this2.router.navigate(['Projekttage/Admin/' + data.user_name]);
                } else if (userAuth === 'leaders') {
                  _this2.router.navigate(['Projekttage/Projektleiter/' + data.user_name]);
                } else if (userAuth === 'students') {
                  _this2.router.navigate(['Projekttage/Benutzer/' + data.user_name]);
                }
              }, function (error) {
                _this2.alert.error('Die Sitzung ist bereits abgelaufen!', error);

                _this2.auth.setLoggedIn(false);
              });
            }
          }
        }, {
          key: "LogInStudent",
          value: function LogInStudent(form) {
            var _this3 = this;

            this.participantsService.logInParticipant(this.Student).subscribe(function (data) {
              if (data.token) {
                _this3.auth.set_jwt(data.token);

                _this3.router.navigate(['Projekttage/Benutzer/' + data.user_name]);

                _this3.auth.setLoggedIn(true);

                form.reset();
              }
            }, function (error) {
              _this3.alert.error('Anmeldung fehlgeschlagen!', error.error);

              _this3.wrongPassword();
            });
          }
        }, {
          key: "LogInLeader",
          value: function LogInLeader(form) {
            var _this4 = this;

            this.leadersService.logInLeader(this.Leader).subscribe(function (data) {
              if (data.token) {
                _this4.auth.set_jwt(data.token);

                _this4.router.navigate(['Projekttage/Projektleiter/' + data.user_name]);

                _this4.auth.setLoggedIn(true);

                form.reset();
              }
            }, function (error) {
              _this4.alert.error('Anmeldung fehlgeschlagen!', error.error);

              _this4.wrongPassword();
            });
          }
        }, {
          key: "LogInAdmin",
          value: function LogInAdmin(form) {
            var _this5 = this;

            this.adminsService.logInAdmin(this.Admin).subscribe(function (data) {
              if (data.token) {
                _this5.auth.set_jwt(data.token);

                _this5.router.navigate(['Projekttage/Admin/' + data.user_name]);

                _this5.auth.setLoggedIn(true);

                form.reset();
              }
            }, function (error) {
              _this5.alert.error('Anmeldung fehlgeschlagen!', error.error);

              _this5.wrongPassword();
            });
          }
        }, {
          key: "wrongPassword",
          value: function wrongPassword() {
            this.tries += 1;

            if (this.tries >= 5) {
              this.alert.wrongPassword(this.tries * 3000, this.tries);
            }
          }
        }]);

        return LogInPage;
      }();

      LogInPage.ctorParameters = function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _participants_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantsService"]
        }, {
          type: _schedule_service__WEBPACK_IMPORTED_MODULE_10__["ScheduleService"]
        }, {
          type: _leaders_service__WEBPACK_IMPORTED_MODULE_5__["LeadersService"]
        }, {
          type: _admins_service__WEBPACK_IMPORTED_MODULE_6__["AdminsService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]
        }];
      };

      LogInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./log-in.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./log-in.page.scss */
        "./src/app/log-in/log-in.page.scss"))["default"]]
      })], LogInPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-log-in-module-es5.js.map