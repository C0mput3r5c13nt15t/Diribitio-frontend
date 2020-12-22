(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-log-in-module"], {
    /***/
    "1dtn":
    /*!***************************************!*\
      !*** ./src/app/log-in/log-in.page.ts ***!
      \***************************************/

    /*! exports provided: LogInPage */

    /***/
    function dtn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPage", function () {
        return LogInPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_log_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./log-in.page.html */
      "Ny6q");
      /* harmony import */


      var _log_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./log-in.page.scss */
      "L6Md");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/students.service */
      "ZvwH");
      /* harmony import */


      var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/leaders.service */
      "PO/Q");
      /* harmony import */


      var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/admins.service */
      "uVPj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");

      var LogInPage = /*#__PURE__*/function () {
        function LogInPage(auth, router, studentsService, scheduleService, leadersService, adminsService, alert, config) {
          _classCallCheck(this, LogInPage);

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
            password: ''
          };
          this.LeaderCredentials = {
            email: '',
            password: ''
          };
          this.AdminCredentials = {
            email: '',
            password: ''
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
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
          };
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(LogInPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');
            this.getSchedule();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.log_in_from_storage();
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
          /**
           * Gets the current time schedule for the application and sets the schedule value
           */

        }, {
          key: "getSchedule",
          value: function getSchedule() {
            var _this2 = this;

            this.scheduleService.getSchedule().subscribe(function (data) {
              _this2.schedule = data.data;
            });
          }
        }, {
          key: "keyPressEventHandler",
          value: function keyPressEventHandler(keyCode) {
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
          key: "log_in_from_storage",
          value: function log_in_from_storage() {
            var _this3 = this;

            if (localStorage.getItem('jwt')) {
              var jwt = localStorage.getItem('jwt');
              this.auth.check_jwt(jwt).subscribe(function (data) {
                var userAuth = data.auth;

                _this3.auth.set_jwt(data.token);

                _this3.auth.setLoggedIn(true);

                if (userAuth === 'admins') {
                  _this3.router.navigate([_this3.eventName + '/Admin/' + data.user_name]);
                } else if (userAuth === 'leaders') {
                  _this3.router.navigate([_this3.eventName + '/' + _this3.projectNoun + 'leiter/' + data.user_name]);
                } else if (userAuth === 'students') {
                  _this3.router.navigate([_this3.eventName + '/Schüler/' + data.user_name]);
                }
              }, function (error) {
                _this3.alert.error('Die Sitzung ist bereits abgelaufen!', error);

                _this3.auth.setLoggedIn(false);
              });
            }
          }
        }, {
          key: "LogInStudent",
          value: function LogInStudent(form) {
            var _this4 = this;

            this.studentsService.logInStudent(this.StudentCredentials).subscribe(function (data) {
              if (data.token) {
                _this4.auth.set_jwt(data.token);

                _this4.router.navigate([_this4.eventName + '/Schüler/' + data.user_name]);

                _this4.auth.setLoggedIn(true);

                form.reset();
              }
            }, function (error) {
              _this4.alert.error('Anmeldung fehlgeschlagen!', error.error);

              _this4.wrongPassword();
            });
          }
        }, {
          key: "LogInLeader",
          value: function LogInLeader(form) {
            var _this5 = this;

            this.leadersService.logInLeader(this.LeaderCredentials).subscribe(function (data) {
              if (data.token) {
                _this5.auth.set_jwt(data.token);

                _this5.router.navigate([_this5.eventName + '/' + _this5.projectNoun + 'leiter/' + data.user_name]);

                _this5.auth.setLoggedIn(true);

                form.reset();
              }
            }, function (error) {
              _this5.alert.error('Anmeldung fehlgeschlagen!', error.error);

              _this5.wrongPassword();
            });
          }
        }, {
          key: "LogInAdmin",
          value: function LogInAdmin(form) {
            var _this6 = this;

            this.adminsService.logInAdmin(this.AdminCredentials).subscribe(function (data) {
              if (data.token) {
                _this6.auth.set_jwt(data.token);

                _this6.router.navigate([_this6.eventName + '/Admin/' + data.user_name]);

                _this6.auth.setLoggedIn(true);

                form.reset();
              }
            }, function (error) {
              _this6.alert.error('Anmeldung fehlgeschlagen!', error.error);

              _this6.wrongPassword();
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
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"]
        }, {
          type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_7__["LeadersService"]
        }, {
          type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_8__["AdminsService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"]
        }];
      };

      LogInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-log-in',
        template: _raw_loader_log_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_log_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogInPage);
      /***/
    },

    /***/
    "L6Md":
    /*!*****************************************!*\
      !*** ./src/app/log-in/log-in.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function L6Md(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".centerd_label {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZy1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoibG9nLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJkX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Ny6q":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Ny6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Anmeldung</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" [routerLink]=\"['../../Help']\"><ion-icon name=\"help-circle\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <div data-ng-controller=\"myCtrl\" data-ng-init=\"log_in_from_storage()\"></div>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>Einloggen</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment color=\"buttons\" [(ngModel)]=\"formType\">\n        <ion-segment-button value=\"student\">\n          <ion-label>Schüler</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"leader\">\n          <ion-label>{{ projectNoun }}leiter</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"admin\">\n          <ion-label>Admin</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <form #studentLoginForm=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"LogInStudent(studentLoginForm)\" [hidden]=\"formType != 'student'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Schüler</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input name=\"email\" [(ngModel)]=\"StudentCredentials.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextStudentField)\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input #nextStudentField name=\"password\" [(ngModel)]=\"StudentCredentials.password\" required minlength=\"8\" type=\"password\" (keypress)=\"keyPressEventHandler($event.keyCode, 'students', studentLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"studentLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n            </div>\n            <ion-label class=\"centerd_label\" color=\"text\">oder</ion-label>\n            <div class=\"ion-padding\">\n              <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\" [routerLink]=\"['./Schüler Registration']\" color=\"buttons\" class=\"ion-no-margin\" expand=\"block\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form #leaderLoginForm=\"ngForm\" name=\"LogInForm\" (ngSubmit)=\"LogInLeader(leaderLoginForm)\" [hidden]=\"formType != 'leader'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>{{ projectNoun }}leiter</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input name=\"email\" [(ngModel)]=\"LeaderCredentials.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextLeaderField)\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input #nextLeaderField name=\"password\" [(ngModel)]=\"LeaderCredentials.password\" required minlength=\"8\" type=\"password\" (keypress)=\"keyPressEventHandler($event.keyCode, 'leaders', leaderLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n            <div class=\"ion-padding\">\n              <ion-button name=\"login\" type=\"submit\" [disabled]=\"leaderLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n            </div>\n            <ion-label class=\"centerd_label\" color=\"text\">oder</ion-label>\n            <div class=\"ion-padding\">\n              <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\" routerLink='./{{ projectNoun}}leiter Registration' color=\"buttons\" class=\"ion-no-margin\" expand=\"block\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n\n      <form id=\"Formular\" #adminLoginForm=\"ngForm\" (ngSubmit)=\"LogInAdmin(adminLoginForm)\" [hidden]=\"formType != 'admin'\" class=\"content\">\n        <ion-card color=\"background\">\n          <ion-card-header>\n            <ion-card-title>Admin</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <ion-list>\n                <ion-item color=\"items\">\n                  <ion-input name=\"email\" [(ngModel)]=\"AdminCredentials.email\" required type=\"email\" (keypress)=\"nextInput($event.keyCode, nextAdminField)\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n                </ion-item>\n                <ion-item color=\"items\">\n                  <ion-input #nextAdminField name=\"password\" [(ngModel)]=\"AdminCredentials.password\" required minlength=\"8\" type=\"password\" (keypress)=\"keyPressEventHandler($event.keyCode, 'admins', adminLoginForm)\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n                </ion-item>\n              </ion-list>\n              <a [routerLink]=\"['./Passwort vergessen']\">Passwort vergessen?</a><br>\n              <div class=\"ion-padding\">\n                <ion-button name=\"login\" type=\"submit\" [disabled]=\"adminLoginForm.invalid\" class=\"ion-no-margin\" expand=\"block\" color=\"buttons\">Anmelden</ion-button>\n              </div>\n              <ion-label class=\"centerd_label\" color=\"text\">oder</ion-label>\n              <div class=\"ion-padding\">\n                <ion-button *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.sort_students\" [routerLink]=\"['./Admin Registration']\" color=\"buttons\" class=\"ion-no-margin\" expand=\"block\"><ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon> Account erstellen</ion-button>\n              </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "S2+d":
    /*!*****************************************!*\
      !*** ./src/app/log-in/log-in.module.ts ***!
      \*****************************************/

    /*! exports provided: LogInPageModule */

    /***/
    function S2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPageModule", function () {
        return LogInPageModule;
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


      var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./log-in.page */
      "1dtn");

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
    }
  }]);
})();
//# sourceMappingURL=log-in-log-in-module-es5.js.map