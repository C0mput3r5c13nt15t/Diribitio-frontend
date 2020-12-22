(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "0McF":
    /*!*****************************************!*\
      !*** ./src/app/authentication.guard.ts ***!
      \*****************************************/

    /*! exports provided: AuthenticationGuard */

    /***/
    function McF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
        return AuthenticationGuard;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/config.service */
      "r4Kj");
      /**
       * This guard handles which routes are available and which aren't
       */


      var AuthenticationGuard = /*#__PURE__*/function () {
        function AuthenticationGuard(auth, router, config) {
          _classCallCheck(this, AuthenticationGuard);

          this.auth = auth;
          this.router = router;
          this.config = config;
          /**
           * Contains the logged in state
           */

          this.isLoggedIn = false;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
          /**
           * Contains the url to which unauthenticated requests are redirected
           */

          this.redirectUrl = this.eventName + '/Anmeldung';
        }
        /**
         * Checks if the user is allowed to access the page
         */


        _createClass(AuthenticationGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var url = state.url;
            return this.checkLogin();
          }
          /**
           * Checks if the user is logged in
           */

        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (this.auth.isLoggedIn) {
              return true;
            }

            this.router.navigate([this.eventName + '/Anmeldung']);
            return false;
          }
        }]);

        return AuthenticationGuard;
      }();

      AuthenticationGuard.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }];
      };

      AuthenticationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationGuard);
      /***/
    },

    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css\"\n  />\n</head>\n<ion-tabs *ngIf=\"!isDesktop\">\n\n  <ion-tab-bar color=\"menu\" slot=\"bottom\">\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Einstellungen\" routerDirection=\"root\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Einstellungen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Impressum und Datenschutzerklärung\" routerDirection=\"root\">\n      <ion-icon name=\"document\"></ion-icon>\n      <ion-label>Impressum</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Home\" routerDirection=\"root\">\n      <ion-icon name=\"Home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"!auth.isLoggedIn\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\">\n      <ion-icon name=\"log-in\"></ion-icon>\n      <ion-label>Anmeldung</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"auth.isLoggedIn\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<div *ngIf=\"isDesktop\" class=\"desktop\">\n  <ion-header id=\"navbar\">\n    <ion-toolbar color=\"menu\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"2\">\n          <img class=\"logo ion-text-left\" routerLink=\"/{{ eventName }}/Home\" src=\"../../assets/logo/Logo_light.svg\">\n        </ion-col>\n        <ion-col>\n          <div class=\"navbar\" class=\"ion-text-right\">\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Home\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Home\n            </ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"!auth.isLoggedIn\" fill=\"clear\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Anmeldung\n            </ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"auth.isLoggedIn\" fill=\"clear\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Account\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Help\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Hilfe\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Einstellungen\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Einstellungen\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-router-outlet class=\"desktop-wrapper\"></ion-router-outlet>\n\n  <ion-item [id]=\"error.id\" class=\"animate__animated animate__fadeInDown\" *ngFor=\"let error of errors\" (click)=\"fadeOutError(error.id)\" button=\"true\" color=\"danger\">\n    <ion-label class=\"ion-text-center\" color=\"light\">\n      {{ error.desrc }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item [id]=\"alert.id\" class=\"animate__animated animate__fadeInDown\" *ngFor=\"let alert of alerts\" (click)=\"fadeOutAlert(alert.id)\" button=\"true\" color=\"success\">\n    <ion-label class=\"ion-text-center\" color=\"light\">\n      {{ alert.desrc }}\n    </ion-label>\n  </ion-item>\n\n  <ion-footer color=\"menu\" class=\"footer\">\n    <span>© Paul Maier | <a routerLink=\"/{{ eventName }}/Impressum und Datenschutzerklärung\">Impressum und Datenschutz</a><br></span>\n  </ion-footer>\n</div>\n";
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/screensize.service */
      "uIHg");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(screensizeService, auth, alert, config) {
          var _this = this;

          _classCallCheck(this, TabsPage);

          this.screensizeService = screensizeService;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          /**
           * Contains all active error messages
           */

          this.errors = [];
          /**
           * Contains all active alert messages
           */

          this.alerts = [];
          this.projectsNoun = this.config.app_config.projects_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
          this.screensizeService.isDesktopView().subscribe(function (isDesktop) {
            if (_this.isDesktop && !isDesktop) {
              window.location.reload();
            }

            _this.isDesktop = isDesktop;
          });
          this.alert.update.subscribe(function () {
            return _this.getAlertsAndErrors();
          });
        }

        _createClass(TabsPage, [{
          key: "getAlertsAndErrors",
          value: function getAlertsAndErrors() {
            this.alerts = this.alert.alerts;
            this.errors = this.alert.errors;
          }
        }, {
          key: "fadeOutAlert",
          value: function fadeOutAlert(alertID) {
            var _this2 = this;

            var element = document.getElementById(alertID.toString());
            element.classList.add('animate__fadeOutLeft');

            element.onanimationend = function () {
              _this2.delete_alert(alertID);
            };
          }
        }, {
          key: "delete_alert",
          value: function delete_alert(alertID) {
            this.alert.delete_alert(alertID);
          }
        }, {
          key: "fadeOutError",
          value: function fadeOutError(errorID) {
            var _this3 = this;

            var element = document.getElementById(errorID.toString());
            element.classList.add('animate__fadeOutLeft');

            element.onanimationend = function () {
              _this3.delete_error(errorID);
            };
          }
        }, {
          key: "delete_error",
          value: function delete_error(errorID) {
            this.alert.delete_error(errorID);
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_5__["ScreensizeService"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /**
       * This service handles all everything having to do with the authentification especially the management of the jwt
       */


      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http, router, config, alert) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.router = router;
          this.config = config;
          this.alert = alert;
          /**
           * Contains the logged in state
           */

          this.loggedIn = false;
          /**
           * Contains the active jwt
           */

          this.JWT = '';
          /**
           * The url to the backend
           */

          this.backendUrl = this.config.backend_config.url;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }
        /**
         * Gets the current jwt
         * @returns jwt
         */


        _createClass(AuthenticationService, [{
          key: "set_jwt",

          /**
           * Sets the current jwt and saves it to locale storage
           * @param jwt Contains the jwt to be set
           */
          value: function set_jwt(jwt) {
            this.JWT = jwt;
            localStorage.setItem('jwt', this.jwt);
          }
          /**
           * Asynchronously sets the current jwtand saves it to locale storage
           * @param jwt Contains the jwt to be set
           */

        }, {
          key: "async_set_jwt",
          value: function async_set_jwt(jwt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.JWT = jwt;
                      localStorage.setItem('jwt', this.jwt);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Returns whether the user is logged in or not
           * @returns boolean
           */

        }, {
          key: "setLoggedIn",

          /**
           * Sets loggedIn to the new state and if the new state is false removes the jwt from storage
           * @param newState Contains the new logged in state
           */
          value: function setLoggedIn(newState) {
            this.loggedIn = newState;

            if (newState === false) {
              localStorage.removeItem('jwt');
            }
          }
          /**
           * Checks if the given jwt is still valid and if it is refreshes it
           * @param jwt Contains the jwt to be checked
           * @returns RequestObservable
           */

        }, {
          key: "check_jwt",
          value: function check_jwt(jwt) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'auth/refresh', null, options);
          }
          /**
           * Sends a password reset email to the user with the given email
           * @param forgotPasswordData Contains the email of the user
           */

        }, {
          key: "forgotPassword",
          value: function forgotPassword(forgotPasswordData) {
            var _this4 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.JWT
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'auth/password/email', forgotPasswordData, options).subscribe(function (data) {
              _this4.alert.alert(data.message);

              _this4.router.navigate([_this4.eventName + '/Anmeldung']);
            }, function (error) {
              _this4.alert.error('Die E-Mail konnte nicht versandt werden.', error.error);
            });
          }
          /**
           * Resets the user password
           * @param resetPasswordData Contains the email and the new password of the user
           * @returns RequestObservable
           */

        }, {
          key: "resetPassword",
          value: function resetPassword(resetPasswordData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'auth/password/reset', resetPasswordData, options);
          }
        }, {
          key: "jwt",
          get: function get() {
            return this.JWT;
          }
        }, {
          key: "isLoggedIn",
          get: function get() {
            return this.loggedIn;
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_router_static_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs.router.static.module */
      "yhnw");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");
      /**
       * This Module cointanis the navigation and footer for mobile and desktop view and displays all the error and alert messages.
       */


      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_router_static_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "yhnw":
    /*!***************************************************!*\
      !*** ./src/app/tabs/tabs.router.static.module.ts ***!
      \***************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function yhnw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");
      /* harmony import */


      var _authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../authentication.guard */
      "0McF");
      /**
       * Contains all Routes for the application
       */


      var routes = [{
        path: 'Projekttage',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'Help',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | help-help-module */
              "help-help-module").then(__webpack_require__.bind(null,
              /*! ../help/help.module */
              "7XJi")).then(function (m) {
                return m.HelpPageModule;
              });
            }
          }]
        }, {
          path: 'Einstellungen',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | settings-settings-module */
              "settings-settings-module").then(__webpack_require__.bind(null,
              /*! ../settings/settings.module */
              "7wo0")).then(function (m) {
                return m.SettingsPageModule;
              });
            }
          }]
        }, {
          path: 'Impressum und Datenschutzerklärung',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | imprint-data-protection-imprint-data-protection-module */
              "imprint-data-protection-imprint-data-protection-module").then(__webpack_require__.bind(null,
              /*! ../imprint-data-protection/imprint-data-protection.module */
              "z3fI")).then(function (m) {
                return m.ImprintDataProtectionPageModule;
              });
            }
          }]
        }, {
          path: 'Home',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | home-home-module */
              [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
              /*! ../home/home.module */
              "ct+p")).then(function (m) {
                return m.HomePageModule;
              });
            }
          }]
        }, {
          path: 'Anmeldung',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-log-in-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-log-in-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/log-in.module */
              "S2+d")).then(function (m) {
                return m.LogInPageModule;
              });
            }
          }]
        }, {
          path: 'Anmeldung/Passwort vergessen',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | log-in-forgot-password-forgot-password-module */
              "log-in-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
              /*! ../log-in/forgot-password/forgot-password.module */
              "xsru")).then(function (m) {
                return m.ForgotPasswordPageModule;
              });
            }
          }]
        }, {
          path: 'Anmeldung/Passwort zurücksetzen/:ResetToken',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | log-in-reset-password-reset-password-module */
              "log-in-reset-password-reset-password-module").then(__webpack_require__.bind(null,
              /*! ../log-in/reset-password/reset-password.module */
              "4SHV")).then(function (m) {
                return m.ResetPasswordPageModule;
              });
            }
          }]
        }, {
          path: 'Anmeldung/Admin Registration',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-generation-admin-generation-module */
              [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-generation-admin-generation-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-generation/admin-generation.module */
              "4DVB")).then(function (m) {
                return m.AdminGenerationPageModule;
              });
            }
          }]
        }, {
          path: 'Anmeldung/Projektleiter Registration',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-leader-generation-leader-generation-module */
              [__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-generation-leader-generation-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/leader-generation/leader-generation.module */
              "aa1q")).then(function (m) {
                return m.LeaderGenerationPageModule;
              });
            }
          }]
        }, {
          path: 'Anmeldung/Schüler Registration',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-generation-student-generation-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("log-in-student-generation-student-generation-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-generation/student-generation.module */
              "i/4z")).then(function (m) {
                return m.StudentGenerationPageModule;
              });
            }
          }]
        }, {
          path: 'Projektleiter/:LeaderName',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-leader-page-leader-page-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-page-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/leader-page/leader-page.module */
              "XF5o")).then(function (m) {
                return m.LeaderPagePageModule;
              });
            }
          }]
        }, {
          path: 'Projektleiter/:LeaderName/Projekt erstellen',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-leader-page-leader-project-generation-leader-project-generation-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-leader-page-leader-project-generation-leader-project-generation-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/leader-page/leader-project-generation/leader-project-generation.module */
              "FHDN")).then(function (m) {
                return m.LeaderProjectGenerationPageModule;
              });
            }
          }]
        }, {
          path: 'Projektleiter/:LeaderName/Projekt verwalten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-leader-page-leader-project-administration-leader-project-administration-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-project-administration-leader-project-administration-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/leader-page/leader-project-administration/leader-project-administration.module */
              "2a+d")).then(function (m) {
                return m.LeaderProjectAdministrationPageModule;
              });
            }
          }]
        }, {
          path: 'Projektleiter/:LeaderName/Projekt verwalten/Projekt bearbeiten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-leader-page-leader-project-administration-leader-project-edit-leader-project-edit-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-project-administration-leader-project-edit-leader-project-edit-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/leader-page/leader-project-administration/leader-project-edit/leader-project-edit.module */
              "eXB2")).then(function (m) {
                return m.LeaderProjectEditPageModule;
              });
            }
          }]
        }, {
          path: 'Projektleiter/:LeaderName/Nachricht senden',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-leader-page-leader-messages-leader-messages-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-messages-leader-messages-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/leader-page/leader-messages/leader-messages.module */
              "0zAt")).then(function (m) {
                return m.LeaderMessagesPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-student-page-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-page-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/student-page.module */
              "Xlih")).then(function (m) {
                return m.StudentPagePageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Projekte',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-projects-projects-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-projects-projects-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/projects/projects.module */
              "GoqE")).then(function (m) {
                return m.ProjectsPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Projekte/:ProjectID',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-projects-project-detail-project-detail-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-student-page-projects-project-detail-project-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/projects/project-detail/project-detail.module */
              "Pe+c")).then(function (m) {
                return m.ProjectDetailPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Anmeldung',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-registration-registration-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("log-in-student-page-registration-registration-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/registration/registration.module */
              "1i7b")).then(function (m) {
                return m.RegistrationPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Tauschanfrage senden',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-exchange-request-exchange-request-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-exchange-request-exchange-request-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/exchange-request/exchange-request.module */
              "67tE")).then(function (m) {
                return m.ExchangeRequestPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Tauschanfrage bestätigen',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-exchange-confirm-exchange-confirm-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-exchange-confirm-exchange-confirm-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/exchange-confirm/exchange-confirm.module */
              "p+Yt")).then(function (m) {
                return m.ExchangeConfirmPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Projekt',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-project-project-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-student-page-project-project-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/project/project.module */
              "ZITW")).then(function (m) {
                return m.ProjectPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Projekt erstellen',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-student-project-generation-student-project-generation-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-student-page-student-project-generation-student-project-generation-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/student-project-generation/student-project-generation.module */
              "e7et")).then(function (m) {
                return m.StudentProjectGenerationPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Assistenten verwalten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-promote-students-promote-students-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("log-in-student-page-promote-students-promote-students-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/promote-students/promote-students.module */
              "7RaF")).then(function (m) {
                return m.PromoteStudentsPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Projekt verwalten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-student-project-administration-student-project-administration-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-project-administration-student-project-administration-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/student-project-administration/student-project-administration.module */
              "sWDz")).then(function (m) {
                return m.StudentProjectAdministrationPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Projekt verwalten/Projekt bearbeiten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-student-project-administration-student-project-edit-student-project-edit-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-project-administration-student-project-edit-student-project-edit-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/student-project-administration/student-project-edit/student-project-edit.module */
              "eHwU")).then(function (m) {
                return m.StudentProjectEditPageModule;
              });
            }
          }]
        }, {
          path: 'Schüler/:ParticipantName/Nachricht senden',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-student-page-student-messages-student-messages-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-student-page-student-messages-student-messages-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/student-page/student-messages/student-messages.module */
              "V6Bk")).then(function (m) {
                return m.StudentMessagesPageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-page-module */
              [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-page-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-page.module */
              "iKym")).then(function (m) {
                return m.AdminPagePageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/Projekte',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-projects-admin-projects-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("log-in-admin-page-admin-projects-admin-projects-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-projects/admin-projects.module */
              "gH7Q")).then(function (m) {
                return m.AdminProjectsPageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/Tauschanfragen',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-exchanges-admin-exchanges-module */
              [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-exchanges-admin-exchanges-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-exchanges/admin-exchanges.module */
              "aApZ")).then(function (m) {
                return m.AdminExchangesPageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/Projekte/:ProjectID',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module */
              "7RvP")).then(function (m) {
                return m.AdminProjectDetailPageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/Tauschanfragen/:ExchangeID',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module */
              "oKxh")).then(function (m) {
                return m.AdminExchangeDetailPageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/Zeitplan verwalten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-schedule-admin-schedule-module */
              [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-schedule-admin-schedule-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-schedule/admin-schedule.module */
              "qLtw")).then(function (m) {
                return m.AdminSchedulePageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/Schüler und Projektleiter verwalten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-students-leaders-admin-students-leaders-module */
              [__webpack_require__.e("default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"), __webpack_require__.e("default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"), __webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-students-leaders-admin-students-leaders-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-students-leaders/admin-students-leaders.module */
              "ZReS")).then(function (m) {
                return m.AdminStudentsLeadersPageModule;
              });
            }
          }]
        }, {
          path: 'Admin/:AdminName/App verwalten',
          canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | log-in-admin-page-admin-logs-admin-logs-module */
              [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-logs-admin-logs-module")]).then(__webpack_require__.bind(null,
              /*! ../log-in/admin-page/admin-logs/admin-logs.module */
              "HFXa")).then(function (m) {
                return m.AdminLogsPageModule;
              });
            }
          }]
        }, {
          path: 'E-Mail verifizieren/:Status',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | log-in-verify-email-verify-email-module */
              "log-in-verify-email-verify-email-module").then(__webpack_require__.bind(null,
              /*! ../log-in/verify-email/verify-email.module */
              "QRSX")).then(function (m) {
                return m.VerifyEmailPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/Projekttage/Home',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/Projekttage/Home',
        pathMatch: 'full'
      }];
      /**
       * This module contains the default routes for the TabsPageModule
       * Note that these are NOT actually used for routing and just represent the defaul routes
       */

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map