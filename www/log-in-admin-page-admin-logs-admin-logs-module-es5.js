(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-logs-admin-logs-module"], {
    /***/
    "HFXa":
    /*!*******************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-logs/admin-logs.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminLogsPageModule */

    /***/
    function HFXa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLogsPageModule", function () {
        return AdminLogsPageModule;
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


      var _admin_logs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-logs.page */
      "QOZI");

      var routes = [{
        path: '',
        component: _admin_logs_page__WEBPACK_IMPORTED_MODULE_6__["AdminLogsPage"]
      }];

      var AdminLogsPageModule = function AdminLogsPageModule() {
        _classCallCheck(this, AdminLogsPageModule);
      };

      AdminLogsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_logs_page__WEBPACK_IMPORTED_MODULE_6__["AdminLogsPage"]]
      })], AdminLogsPageModule);
      /***/
    },

    /***/
    "QOZI":
    /*!*****************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-logs/admin-logs.page.ts ***!
      \*****************************************************************/

    /*! exports provided: AdminLogsPage */

    /***/
    function QOZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLogsPage", function () {
        return AdminLogsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_logs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-logs.page.html */
      "pb5k");
      /* harmony import */


      var _admin_logs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-logs.page.scss */
      "pO0v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");
      /* harmony import */


      var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/admins.service */
      "uVPj");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AdminLogsPage = /*#__PURE__*/function () {
        function AdminLogsPage(activatedRoute, scheduleService, adminsService, alertCtrl, alert, config) {
          _classCallCheck(this, AdminLogsPage);

          this.activatedRoute = activatedRoute;
          this.scheduleService = scheduleService;
          this.adminsService = adminsService;
          this.alertCtrl = alertCtrl;
          this.alert = alert;
          this.config = config;
          this.subscriptions = [];
          this.SignUpEmails = [];
          this.SignUpEmail = {
            id: 0,
            email: '',
            email_confirmation: ''
          };
          /**
           * Contains the time schedule of the application
           */

          this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en')
          };
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(AdminLogsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('admin-logs');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              _this.adminUrl = paramMap.get('AdminName');
            });
            this.getSchedule();
            this.getSignUpemails();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }), this.adminsService.update.subscribe(function () {
              return _this.getSignUpemails();
            }));
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
          key: "getSignUpemails",
          value: function getSignUpemails() {
            var _this3 = this;

            this.adminsService.getAllSignUpEmails().subscribe(function (data) {
              _this3.SignUpEmails = data.data;
            });
          }
        }, {
          key: "postSignUpEmail",
          value: function postSignUpEmail(form) {
            var _this4 = this;

            this.adminsService.createSignUpEmail(this.SignUpEmail).subscribe(function (data) {
              _this4.SignUpEmails.push(data.data);

              _this4.alert.alert(data.message);

              form.reset();

              _this4.adminsService.update.emit();
            }, function (error) {
              _this4.alert.error('Freigeben der E-Mail fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "deleteSignUpEmail",
          value: function deleteSignUpEmail(emailID) {
            var _this5 = this;

            this.alertCtrl.create({
              header: 'Sind Sie sicher?',
              message: 'Wollen Sie diese E-Mail wirklich sperren?',
              buttons: [{
                text: 'Abbrechen',
                role: 'cancel'
              }, {
                text: 'Sperren',
                handler: function handler() {
                  if (_this5.SignUpEmail.email === _this5.SignUpEmail.email_confirmation) {
                    _this5.SignUpEmails = _this5.SignUpEmails.filter(function (filterEmail) {
                      return emailID !== filterEmail.id;
                    });

                    _this5.adminsService.deleteSignUpEmail(emailID);
                  } else {
                    _this5.alert.error('Die angegebenen E-Mails stimmen nicht überein.');
                  }
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }]);

        return AdminLogsPage;
      }();

      AdminLogsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"]
        }, {
          type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_8__["AdminsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      };

      AdminLogsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-logs',
        template: _raw_loader_admin_logs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_logs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLogsPage);
      /***/
    },

    /***/
    "pO0v":
    /*!*******************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-logs/admin-logs.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function pO0v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tbG9ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiYWRtaW4tbG9ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICAgIGhlaWdodDogODBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "pb5k":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-logs/admin-logs.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pb5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Appverwaltung</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>E-Mails für Admin-Accounts verwalten</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"SignUpEmails.length\">\n      <ion-item color=\"items\" lines=\"none\" *ngFor=\"let SignUpEmail of SignUpEmails\">\n        <ion-card color=\"background\">\n          <ion-card-content>\n            <ion-text color=\"text\">{{ SignUpEmail.email }}</ion-text>\n          </ion-card-content>\n        </ion-card>\n        <ion-buttons (click)=\"deleteSignUpEmail(SignUpEmail.id)\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n      </ion-item>\n    </ion-card-content>\n    <ion-card-content>\n      <form #signUpEmail=\"ngForm\" name=\"SignUpEmailForm\" (ngSubmit)=\"postSignUpEmail(signUpEmail)\" class=\"content\">\n        <ion-card color=\"background\"color=\"background\">\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"SignUpEmail.email\" name=\"Email\" placeholder=\"E-Mail\" required type=\"email\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"SignUpEmail.email_confirmation\" name=\"Email\" placeholder=\"E-Mail-Bestätigung\" required type=\"email\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button color=\"buttons\" [disabled]=\"signUpEmail.invalid || currentDate <= schedule.begin && currentDate > schedule.sort_students\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Freigeben</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-logs-admin-logs-module-es5.js.map