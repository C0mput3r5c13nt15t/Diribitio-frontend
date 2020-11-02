(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInAdminPageAdminPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Admin</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\">Wilkommen {{ loadedAdmin.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>  \n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedAdmin.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" routerLink='./{{ projectsNoun }}'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"apps\"></ion-icon>{{ projectsNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" routerLink='./Schüler und {{projectNoun}}leiter verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>Schüler und {{ projectNoun }}leiter verwalten\n        </ion-item>\n        <ion-item *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\" [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Tauschanfragen']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>Tauschanfragen verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./Zeitplan verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"calendar\"></ion-icon>Zeitplan verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedAdmin.email_verified_at == null\" color=\"items\" [routerLink]=\"['./App verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>App verwalten\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-page.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-page.module.ts ***!
      \********************************************************/

    /*! exports provided: AdminPagePageModule */

    /***/
    function srcAppLogInAdminPageAdminPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPagePageModule", function () {
        return AdminPagePageModule;
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


      var _admin_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-page.page */
      "./src/app/log-in/admin-page/admin-page.page.ts");

      var routes = [{
        path: '',
        component: _admin_page_page__WEBPACK_IMPORTED_MODULE_6__["AdminPagePage"]
      }];

      var AdminPagePageModule = function AdminPagePageModule() {
        _classCallCheck(this, AdminPagePageModule);
      };

      AdminPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_page_page__WEBPACK_IMPORTED_MODULE_6__["AdminPagePage"]]
      })], AdminPagePageModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-page.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-page.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInAdminPageAdminPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vYWRtaW4tcGFnZS9hZG1pbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-page.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-page.page.ts ***!
      \******************************************************/

    /*! exports provided: AdminPagePage */

    /***/
    function srcAppLogInAdminPageAdminPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPagePage", function () {
        return AdminPagePage;
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


      var src_app_admins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/admins.service */
      "./src/app/admins.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/schedule.service */
      "./src/app/schedule.service.ts");
      /* harmony import */


      var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/alert.service */
      "./src/app/alert.service.ts");

      var AdminPagePage = /*#__PURE__*/function () {
        function AdminPagePage(activatedRoute, router, adminsService, scheduleService, config, alert) {
          _classCallCheck(this, AdminPagePage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.adminsService = adminsService;
          this.scheduleService = scheduleService;
          this.config = config;
          this.alert = alert;
          this.loadedAdmin = {
            id: 0,
            user_name: '',
            email: '',
            password: ''
          };
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
          this.buttonPressed = true;
          this.projectsNoun = this.config.app_config.projects_noun;
          this.projectNoun = this.config.app_config.project_noun;
        }

        _createClass(AdminPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.projectsNoun = this.config.app_config.projects_noun;
            this.projectNoun = this.config.app_config.project_noun;
            this.text = this.config.get_content('admin-page');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('AdminName')) {
                _this.router.navigate(['']);

                return;
              }
            });
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this.schedule = data.data;
            });
            this.getAdmin();
            this.adminsService.update.subscribe(function () {
              return _this.getAdmin();
            });
          }
        }, {
          key: "getAdmin",
          value: function getAdmin() {
            var _this2 = this;

            this.adminsService.getSelfAdmin().subscribe(function (data) {
              _this2.loadedAdmin = data.data;

              if (_this2.loadedAdmin.email_verified_at == null) {
                _this2.buttonPressed = false;
              }
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this3 = this;

            this.getAdmin();
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this3.schedule = data.data;
            });
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            var _this4 = this;

            this.adminsService.sendAuthentificationEmailSubscribe().subscribe(function (data) {
              _this4.alert.alert(data.message);

              _this4.buttonPressed = true;
            }, function (error) {
              _this4.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.adminsService.logOutAdmin();
          }
        }]);

        return AdminPagePage;
      }();

      AdminPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_admins_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"]
        }, {
          type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }, {
          type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }];
      };

      AdminPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-page.page.scss */
        "./src/app/log-in/admin-page/admin-page.page.scss"))["default"]]
      })], AdminPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-page-module-es5.js.map