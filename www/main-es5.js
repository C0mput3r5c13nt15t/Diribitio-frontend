(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
      var map = {
        "./log-in/leader-generation/leader-generation.module": ["./src/app/log-in/leader-generation/leader-generation.module.ts", "common", "log-in-leader-generation-leader-generation-module"],
        "./log-in/leader-page/leader-page.module": ["./src/app/log-in/leader-page/leader-page.module.ts", "common", "log-in-leader-page-leader-page-module"],
        "./log-in/leader-page/messages/messages.module": ["./src/app/log-in/leader-page/messages/messages.module.ts", "common", "log-in-leader-page-messages-messages-module"],
        "./log-in/leader-page/project-administration/project-administration.module": ["./src/app/log-in/leader-page/project-administration/project-administration.module.ts", "common", "log-in-leader-page-project-administration-project-administration-module"],
        "./log-in/leader-page/project-administration/project-edit/project-edit.module": ["./src/app/log-in/leader-page/project-administration/project-edit/project-edit.module.ts", "common", "log-in-leader-page-project-administration-project-edit-project-edit-module"],
        "./log-in/leader-page/project-generation/project-generation.module": ["./src/app/log-in/leader-page/project-generation/project-generation.module.ts", "common", "log-in-leader-page-project-generation-project-generation-module"],
        "./log-in/user-page/exchange-confirm/exchange-confirm.module": ["./src/app/log-in/user-page/exchange-confirm/exchange-confirm.module.ts", "common", "log-in-user-page-exchange-confirm-exchange-confirm-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app [class]=\"theme\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/alert.service.ts":
    /*!**********************************!*\
      !*** ./src/app/alert.service.ts ***!
      \**********************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _screensize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./screensize.service */
      "./src/app/screensize.service.ts");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(alertCtrl, loadingController, screensizeService, config) {
          var _this = this;

          _classCallCheck(this, AlertService);

          this.alertCtrl = alertCtrl;
          this.loadingController = loadingController;
          this.screensizeService = screensizeService;
          this.config = config;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.conditions = '';
          this.errors = [];
          this.alerts = [];
          this.id = 1;
          this.screensizeService.isDesktopView().subscribe(function (isDesktop) {
            if (_this.isDesktop && !isDesktop) {
              // Reload because our routing is out of place
              window.location.reload();
            }

            _this.isDesktop = isDesktop;
          });
          this.conditions = config.conditions.short_conditions;
        }

        _createClass(AlertService, [{
          key: "desktop_alert",
          value: function desktop_alert(text) {
            if (!text) {
              text = 'Die Aktion wurde Erfolgreich durchgeführt.';
            }

            var alertData = {
              id: this.id,
              header: 'Erfolg',
              desrc: text
            };
            this.id += 1;
            this.alerts.push(alertData);
            this.update.emit();
          }
        }, {
          key: "desktop_error",
          value: function desktop_error(text) {
            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (output == null) {
              output = '';
            }

            var errorData = {
              id: this.id,
              header: 'Fehler',
              desrc: text + ' ' + output
            };
            this.id += 1;
            this.errors.push(errorData);
            this.update.emit();
          }
        }, {
          key: "delete_alert",
          value: function delete_alert(alertID) {
            this.alerts = this.alerts.filter(function (alert) {
              return alert.id !== alertID;
            });
            this.update.emit();
          }
        }, {
          key: "delete_error",
          value: function delete_error(errorID) {
            this.errors = this.errors.filter(function (error) {
              return error.id !== errorID;
            });
            this.update.emit();
          }
        }, {
          key: "alert",
          value: function alert(text) {
            if (this.isDesktop) {
              this.desktop_alert(text);
            } else {
              if (!text) {
                text = 'Die Aktion wurde Erfolgreich durchgeführt.';
              }

              this.alertCtrl.create({
                header: 'Erfolg',
                message: text,
                buttons: [{
                  text: 'OK',
                  role: 'cancel'
                }]
              }).then(function (alertEl) {
                alertEl.present();
              });
            }
          }
        }, {
          key: "error",
          value: function error(text) {
            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (this.isDesktop) {
              this.desktop_error(text, output);
            } else {
              if (output == null) {
                output = '';
              }

              this.alertCtrl.create({
                header: 'Fehler',
                message: text + ' ' + output,
                buttons: [{
                  text: 'OK',
                  role: 'cancel'
                }]
              }).then(function (alertEl) {
                alertEl.present();
              });
            }
          }
        }, {
          key: "loading",
          value: function loading(time) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Bitte gedulden sie sich einen Augenblick...',
                        duration: time
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "wrongPassword",
          value: function wrongPassword(time) {
            var tries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Sie haben ' + tries.toString() + 'mal ein falsches Passwort oder einen falschen Benutzernamen angegeben!',
                        duration: time
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "agreements",
          value: function agreements() {
            this.alertCtrl.create({
              header: 'AGBs und Cookienutzung',
              message: this.conditions,
              buttons: [{
                text: 'Akzeptieren',
                role: 'cancel'
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _screensize_service__WEBPACK_IMPORTED_MODULE_4__["ScreensizeService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      AlertService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tabs-tabs-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'leader-page',
        loadChildren: './log-in/leader-page/leader-page.module#LeaderPagePageModule'
      }, // tslint:disable-next-line: max-line-length
      {
        path: 'project-administration',
        loadChildren: './log-in/leader-page/project-administration/project-administration.module#ProjectAdministrationPageModule'
      }, // tslint:disable-next-line: max-line-length
      {
        path: 'project-generation',
        loadChildren: './log-in/leader-page/project-generation/project-generation.module#ProjectGenerationPageModule'
      }, {
        path: 'messages',
        loadChildren: './log-in/leader-page/messages/messages.module#MessagesPageModule'
      }, // tslint:disable-next-line: max-line-length
      {
        path: 'project-edit',
        loadChildren: './log-in/leader-page/project-administration/project-edit/project-edit.module#ProjectEditPageModule'
      }, {
        path: 'exchange-confirm',
        loadChildren: './log-in/user-page/exchange-confirm/exchange-confirm.module#ExchangeConfirmPageModule'
      }, {
        path: 'leader-generation',
        loadChildren: './log-in/leader-generation/leader-generation.module#LeaderGenerationPageModule'
      }, {
        path: 'admin-schedule',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-admin-page-admin-schedule-admin-schedule-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-schedule-admin-schedule-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/admin-page/admin-schedule/admin-schedule.module */
          "./src/app/log-in/admin-page/admin-schedule/admin-schedule.module.ts")).then(function (m) {
            return m.AdminSchedulePageModule;
          });
        }
      }, {
        path: 'admin-students-leaders',
        // tslint:disable-next-line: max-line-length
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-admin-page-admin-students-leaders-admin-students-leaders-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-students-leaders-admin-students-leaders-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/admin-page/admin-students-leaders/admin-students-leaders.module */
          "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.module.ts")).then(function (m) {
            return m.AdminStudentsLeadersPageModule;
          });
        }
      }, {
        path: 'user-generation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-user-generation-user-generation-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-user-generation-user-generation-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/user-generation/user-generation.module */
          "./src/app/log-in/user-generation/user-generation.module.ts")).then(function (m) {
            return m.UserGenerationPageModule;
          });
        }
      }, {
        path: 'help',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | help-help-module */
          "help-help-module").then(__webpack_require__.bind(null,
          /*! ./help/help.module */
          "./src/app/help/help.module.ts")).then(function (m) {
            return m.HelpPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-forgot-password-forgot-password-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/forgot-password/forgot-password.module */
          "./src/app/log-in/forgot-password/forgot-password.module.ts")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'admin-tokens',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | log-in-admin-page-admin-tokens-admin-tokens-module */
          "log-in-admin-page-admin-tokens-admin-tokens-module").then(__webpack_require__.bind(null,
          /*! ./log-in/admin-page/admin-tokens/admin-tokens.module */
          "./src/app/log-in/admin-page/admin-tokens/admin-tokens.module.ts")).then(function (m) {
            return m.AdminTokensPageModule;
          });
        }
      }, {
        path: 'admin-logs',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-admin-page-admin-logs-admin-logs-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-logs-admin-logs-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/admin-page/admin-logs/admin-logs.module */
          "./src/app/log-in/admin-page/admin-logs/admin-logs.module.ts")).then(function (m) {
            return m.AdminLogsPageModule;
          });
        }
      }, {
        path: 'imprint-data-protection',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | imprint-data-protection-imprint-data-protection-module */
          "imprint-data-protection-imprint-data-protection-module").then(__webpack_require__.bind(null,
          /*! ./imprint-data-protection/imprint-data-protection.module */
          "./src/app/imprint-data-protection/imprint-data-protection.module.ts")).then(function (m) {
            return m.ImprintDataProtectionPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'admin-generation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-admin-generation-admin-generation-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-generation-admin-generation-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/admin-generation/admin-generation.module */
          "./src/app/log-in/admin-generation/admin-generation.module.ts")).then(function (m) {
            return m.AdminGenerationPageModule;
          });
        }
      }, {
        path: 'verify-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | log-in-verify-email-verify-email-module */
          "log-in-verify-email-verify-email-module").then(__webpack_require__.bind(null,
          /*! ./log-in/verify-email/verify-email.module */
          "./src/app/log-in/verify-email/verify-email.module.ts")).then(function (m) {
            return m.VerifyEmailPageModule;
          });
        }
      }, {
        path: 'reset-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-reset-password-reset-password-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-reset-password-reset-password-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/reset-password/reset-password.module */
          "./src/app/log-in/reset-password/reset-password.module.ts")).then(function (m) {
            return m.ResetPasswordPageModule;
          });
        }
      }, {
        path: 'promote-students',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | log-in-user-page-promote-students-promote-students-module */
          [__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-promote-students-promote-students-module")]).then(__webpack_require__.bind(null,
          /*! ./log-in/user-page/promote-students/promote-students.module */
          "./src/app/log-in/user-page/promote-students/promote-students.module.ts")).then(function (m) {
            return m.PromoteStudentsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings.service */
      "./src/app/settings.service.ts");
      /* harmony import */


      var _screensize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./screensize.service */
      "./src/app/screensize.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, settings, screensizeService, alert) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.settings = settings;
          this.screensizeService = screensizeService;
          this.alert = alert;
          this.theme = 'dark-blue';
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              _this2.screensizeService.onResize(_this2.platform.width());

              _this2.theme = _this2.settings.theme + ' hydrated';

              _this2.settings.update.subscribe(function () {
                _this2.changeColor();
              });
            });
            this.alert.agreements();
          }
        }, {
          key: "changeColor",
          value: function changeColor() {
            this.theme = this.settings.theme + ' hydrated';
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.screensizeService.onResize(event.target.innerWidth);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]
        }, {
          type: _screensize_service__WEBPACK_IMPORTED_MODULE_6__["ScreensizeService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }];
      };

      AppComponent.propDecorators = {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/config.service.ts":
    /*!***********************************!*\
      !*** ./src/app/config.service.ts ***!
      \***********************************/

    /*! exports provided: ConfigService */

    /***/
    function srcAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
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


      var src_assets_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/assets/config/app.config.json */
      "./src/assets/config/app.config.json");

      var src_assets_config_app_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/app.config.json */
      "./src/assets/config/app.config.json", 1);
      /* harmony import */


      var src_assets_config_backend_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/assets/config/backend.config.json */
      "./src/assets/config/backend.config.json");

      var src_assets_config_backend_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/backend.config.json */
      "./src/assets/config/backend.config.json", 1);
      /* harmony import */


      var src_assets_config_conditions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/config/conditions.json */
      "./src/assets/config/conditions.json");

      var src_assets_config_conditions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/conditions.json */
      "./src/assets/config/conditions.json", 1);
      /* harmony import */


      var src_assets_config_content_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/config/content.json */
      "./src/assets/config/content.json");

      var src_assets_config_content_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/content.json */
      "./src/assets/config/content.json", 1);
      /* harmony import */


      var src_assets_config_data_protection_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/assets/config/data-protection.json */
      "./src/assets/config/data-protection.json");

      var src_assets_config_data_protection_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/data-protection.json */
      "./src/assets/config/data-protection.json", 1);
      /* harmony import */


      var src_assets_config_error_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/config/error.json */
      "./src/assets/config/error.json");

      var src_assets_config_error_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/error.json */
      "./src/assets/config/error.json", 1);
      /* harmony import */


      var src_assets_config_help_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/assets/config/help.json */
      "./src/assets/config/help.json");

      var src_assets_config_help_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/help.json */
      "./src/assets/config/help.json", 1);
      /* harmony import */


      var src_assets_config_home_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/assets/config/home.json */
      "./src/assets/config/home.json");

      var src_assets_config_home_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/home.json */
      "./src/assets/config/home.json", 1);
      /* harmony import */


      var src_assets_config_imprint_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/assets/config/imprint.json */
      "./src/assets/config/imprint.json");

      var src_assets_config_imprint_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/config/imprint.json */
      "./src/assets/config/imprint.json", 1);

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService() {
          _classCallCheck(this, ConfigService);

          this.definiteArticlesCapital = {
            m: 'Der',
            f: 'Die',
            d: 'Das'
          };
          this.indefiniteArticlesCapital = {
            m: 'Ein',
            f: 'Eine',
            d: 'Ein'
          };
        }

        _createClass(ConfigService, [{
          key: "get_content",
          value: function get_content(pageName) {
            // tslint:disable-next-line: triple-equals
            return src_assets_config_content_json__WEBPACK_IMPORTED_MODULE_5__.contents.filter(function (text) {
              return text.page == pageName;
            })[0].content;
          }
        }, {
          key: "get_content_by_index",
          value: function get_content_by_index(pageName) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            // tslint:disable-next-line: triple-equals
            return src_assets_config_content_json__WEBPACK_IMPORTED_MODULE_5__.contents.filter(function (text) {
              return text.page == pageName;
            })[0].contents[index].content;
          }
        }, {
          key: "get_error",
          value: function get_error(errorName) {
            // tslint:disable-next-line: triple-equals
            return src_assets_config_error_json__WEBPACK_IMPORTED_MODULE_7__.errors.filter(function (descr) {
              return descr.error == errorName;
            })[0].descr;
          }
        }, {
          key: "get_mail_status_descr",
          value: function get_mail_status_descr(pageName, status) {
            // tslint:disable-next-line: triple-equals
            var descriptions = src_assets_config_content_json__WEBPACK_IMPORTED_MODULE_5__.contents.filter(function (text) {
              return text.page == pageName;
            })[0].descriptions; // tslint:disable-next-line: triple-equals

            return descriptions.filter(function (text) {
              return text.code == status;
            })[0];
          }
        }, {
          key: "app_config",
          get: function get() {
            return src_assets_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__;
          }
        }, {
          key: "backend_config",
          get: function get() {
            return src_assets_config_backend_config_json__WEBPACK_IMPORTED_MODULE_3__;
          }
        }, {
          key: "conditions",
          get: function get() {
            return src_assets_config_conditions_json__WEBPACK_IMPORTED_MODULE_4__;
          }
        }, {
          key: "data_protection",
          get: function get() {
            return src_assets_config_data_protection_json__WEBPACK_IMPORTED_MODULE_6__;
          }
        }, {
          key: "help",
          get: function get() {
            return src_assets_config_help_json__WEBPACK_IMPORTED_MODULE_8__;
          }
        }, {
          key: "home",
          get: function get() {
            return src_assets_config_home_json__WEBPACK_IMPORTED_MODULE_9__;
          }
        }, {
          key: "imprint",
          get: function get() {
            return src_assets_config_imprint_json__WEBPACK_IMPORTED_MODULE_10__;
          }
        }, {
          key: "definite_article",
          get: function get() {
            var gender = src_assets_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__.noun_gender;
            return this.definiteArticlesCapital[gender];
          }
        }, {
          key: "indefinite_article",
          get: function get() {
            var gender = src_assets_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__.noun_gender;
            return this.indefiniteArticlesCapital[gender];
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ctorParameters = function () {
        return [];
      };

      ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ConfigService);
      /***/
    },

    /***/
    "./src/app/screensize.service.ts":
    /*!***************************************!*\
      !*** ./src/app/screensize.service.ts ***!
      \***************************************/

    /*! exports provided: ScreensizeService */

    /***/
    function srcAppScreensizeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreensizeService", function () {
        return ScreensizeService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ScreensizeService = /*#__PURE__*/function () {
        function ScreensizeService() {
          _classCallCheck(this, ScreensizeService);

          this.isDesktop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(ScreensizeService, [{
          key: "onResize",
          value: function onResize(size) {
            if (size < 570) {
              this.isDesktop.next(false);
            } else {
              this.isDesktop.next(true);
            }
          }
        }, {
          key: "isDesktopView",
          value: function isDesktopView() {
            return this.isDesktop.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          }
        }]);

        return ScreensizeService;
      }();

      ScreensizeService.ctorParameters = function () {
        return [];
      };

      ScreensizeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ScreensizeService);
      /***/
    },

    /***/
    "./src/app/settings.service.ts":
    /*!*************************************!*\
      !*** ./src/app/settings.service.ts ***!
      \*************************************/

    /*! exports provided: SettingsService */

    /***/
    function srcAppSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SettingsService = /*#__PURE__*/function () {
        function SettingsService() {
          _classCallCheck(this, SettingsService);

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.background = 'dark';
          this.color = 'yellow';
        }

        _createClass(SettingsService, [{
          key: "change_theme",
          value: function change_theme(background, color) {
            this.background = background;
            this.color = color;
            localStorage.setItem('theme', background + '-' + color);
            this.update.emit();
          }
        }, {
          key: "theme",
          get: function get() {
            if (localStorage.getItem('theme')) {
              return localStorage.getItem('theme');
            } else {
              return this.background + '-' + this.color;
            }
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ctorParameters = function () {
        return [];
      };

      SettingsService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SettingsService);
      /***/
    },

    /***/
    "./src/assets/config/app.config.json":
    /*!*******************************************!*\
      !*** ./src/assets/config/app.config.json ***!
      \*******************************************/

    /*! exports provided: noun_gender, project_noun, projects_noun, eventname, students_can_create_projects, default */

    /***/
    function srcAssetsConfigAppConfigJson(module) {
      module.exports = JSON.parse("{\"noun_gender\":\"f\",\"project_noun\":\"Studienfahrt\",\"projects_noun\":\"Studienfahrten\",\"eventname\":\"Studienfahrten\",\"students_can_create_projects\":true}");
      /***/
    },

    /***/
    "./src/assets/config/backend.config.json":
    /*!***********************************************!*\
      !*** ./src/assets/config/backend.config.json ***!
      \***********************************************/

    /*! exports provided: url, default */

    /***/
    function srcAssetsConfigBackendConfigJson(module) {
      module.exports = JSON.parse("{\"url\":\"http://192.248.186.231:8000/api/\"}");
      /***/
    },

    /***/
    "./src/assets/config/conditions.json":
    /*!*******************************************!*\
      !*** ./src/assets/config/conditions.json ***!
      \*******************************************/

    /*! exports provided: short_conditions, full_conditions, default */

    /***/
    function srcAssetsConfigConditionsJson(module) {
      module.exports = JSON.parse("{\"short_conditions\":\"Your conditions here!\",\"full_conditions\":\"Your conditions here!\"}");
      /***/
    },

    /***/
    "./src/assets/config/content.json":
    /*!****************************************!*\
      !*** ./src/assets/config/content.json ***!
      \****************************************/

    /*! exports provided: contents, default */

    /***/
    function srcAssetsConfigContentJson(module) {
      module.exports = JSON.parse("{\"contents\":[{\"page\":\"projects\",\"content\":\"Implimentiert\"},{\"page\":\"admin-page\",\"content\":\"Von dieser Seite aus können sie die Projekttage verwalten. Dabei ist zu beachten, dass nicht alle Funktionalitäten immer zugänglich sind, sondern entsprechend dem Zeitplan zur Verfügung stehen.\"},{\"page\":\"admin-generation\",\"content\":\"Zur Erstellung eines Admin-Accounts muss ihre E-Mail zuerst von einem Admin verifiziert sein, ist dass der Fall können sie sich hier als Admin registrieren.\"},{\"page\":\"admin-exchanges\",\"contents\":[{\"content\":\"Tauschanfragen durchlaufen drei Stadien. Nach ihrer Erstellung durch den Versender der Anfrage sind sie noch nicht durch den Empfänger bestätigt. Dies wird durch das \"},{\"content\":\"-Symbol deutlich. Hat der Empfänger dem Tausch gestimmt, so zeigt sich das \"},{\"content\":\"-Symbol. Jetzt muss ein Admin den Tausch durchführen. Ist dies geschehen, so verdeutlicht das \"},{\"content\":\"-Häckchen-Symbol, dass der Tausch abgehandelt ist.\"}]},{\"page\":\"admin-exchange-details\"},{\"page\":\"admin-logs\",\"content\":\"Falls sie weitere Admins in das System intigrieren wollen, so müssen sie hier nur die entsprechende E-Mail eingeben, um dies zu ermöglichen. Die entsprechende Person kann sich dann einen Adminaccount erstellen. Dabei ist die Erstellung der Adminaccounts auf den Zeitraum von der Registrierung bis zur Sortierung der Schüler begrenzt.\"},{\"page\":\"admin-projects\",\"content\":\"Auf dieser Seite können sie die Projekte verwalten, klicken sie ein Projekt an, um nähere Informationen zu ihm zu erhalten. Ihnen werden dann auch die Optionen der Löschung und Zulassung des Projektes gegeben. Ein Projekt kann wenn es nicht zugelassen ist weder als Wunsch angegeben, noch von den Schülern angesehen werden. Um ihnen die Regulierung der eingehenden Projekte zu ermöglichen, muss jedes Projekt standardmäßig erst von einem Admin zugelassen werden bevor es angezeit und auswählbar ist. Sollten sie das Projekt als nicht zulassungswürdig empfiden, können sie es mit einem einfachen Knopfdruck löschen.\"},{\"page\":\"admin-schedule\",\"content\":\"Der Zeitplan legt fest, wann welche Aktionen zur Verfügung stehen. Er kann sehr einfach und zu jedem Zeitpunkt bearbeitet werden, es wird allerdings empfolen ihn nach einmaligem festlegen möglichst nicht wieder zu verändern, da dies zu Problemen mit den Daten führen kann.\"},{\"page\":\"admin-students-leaders\",\"contents\":[{\"content\":\"Hier sehen sie alle Schüler und falls sie schon zugewiesen sind ihre Projekte, außerdem sehen sie die drei Projektwünsche (Wichtigkeit von oben nach unten) und die angegebenen Freunde des jeweiligen Schülers. Falls sie nach einem bestimmten Schüler suchen, können sie nach Vor-, Nachpage oder Klasse suchen. Sie können diese drei eigenschaften allerdings auch auf einmal eingeben, bitte beachten sie dabei aber, dass sie Leerzeichen zur Trennung des Vor- und Nachnames und der Klasse einfügen müssen.\"},{\"content\":\"Hier haben sie eine Übersicht über die verschiedenen Projektleiter, sowie einen Link zum jeweiligen Projekt. Falls ein Projektleiter noch oder nicht mehr tatsächlicher Leiter eines Projektes ist, so können sie ihn von hier aus direkt löschen, achten sie aber bitte darauf nur bewusst ausgewählte Leute zu löschen.\"},{\"content\":\"Mit diesen drei selbsterklärenden Buttons können sie zu gegebener Zeit die Sortierung der Schüler abwickeln. Ratsam ist es vor der durchführung ein Backup zu machen, da sonst durch einen Fehler eventuel Daten verloren gehen könnten.\"},{\"content\":\"Hier wird ihnen nach der Sortierung der Schüler (Button SCHÜLER IN PROJEKTE SORTIEREN) der Vorschlag für die Sortierung angezeigt. Überprüfen sie ihn bitte sorgfältig, um Fehler zu vermeiden. Mit VORSCHLAG ANWENDEN können sie dann den hier sichtbaren Vorschlag in die Datenbank übertragen. Versuchen sie bitte diesen Vorgang bei möglichst wenig Zugriff durch andere Nutzer durchzuführen.\"}]},{\"page\":\"admin-tokens\",\"content\":\"Diese Tokens werden benötigt, um einen Schüler-Account zu erstellen. Die Tokens müssen nach ihrer Erstellung an die Schüler eitergeleitet werden, dabei ist jedes Token nur für einen Schüler bzw. eine Benutzung gültig. Bei der Registrierung müssen die Schüler die Tokens vollständig und ohne Tippfehler eingeben.\"},{\"page\":\"forgot-password\",\"content\":\"Bitte lassen sie sich von einem Admin ein Token zuschicken.\"},{\"page\":\"reset-password\",\"content\":\"Hier können sie ihr Passwort zurücksetzen.\"},{\"page\":\"leader-generation\",\"content\":\"Hier können sie sich als Projektleiter registrieren. Als Projektleiter können sie ein Projekt erstellen, verwalten und schließlich auch am Gymnasium Dorfen durchführen. Für Fragen wenden sie sich bitte an den Systemadministrator.\"},{\"page\":\"leader-page\",\"content\":\"Auf dieser Seite können sie ihr Projekt verwalten bzw. ein neues Projekt erstellen.\"},{\"page\":\"leader-project-generation\",\"content\":\"Hier können sie ihr Projekt erstellen. Lassen sie sich dafür aber genug Zeit und füllen sie die Felder sorgfältig aus. Sie können das Projekt im Nach­hi­n­ein noch bearbeiten.\"},{\"page\":\"user-generation\",\"content\":\"Hier kannst du deinen Account erstellen. Dazu benötigst du allerings ein Token, dass du von deinen Lehrkräften bereits bekommen haben solltest.\"},{\"page\":\"user-page\",\"content\":\"Auf dieser Seite kannst du deinen Account verwalten. Du kannst ein Projekt erstellen oder dich auch nur für Projekte anmelden. Außerdem kannst nach der Sortierungsphase Tauschanfragen stellen und annehmen.\"},{\"page\":\"user-exchange-confirm\",\"content\":\"Hier kannst du eine gestellte Tauschanfrage annehmen. Klicke dazu einfach auf den Knopf neben der Anfrage.\"},{\"page\":\"user-exchange-request\",\"content\":\"Hier kannst du eine Tauschanfrage stellen, fülle dazu einfach das Formular aus und klicke auf 'Tauschanfrage senden'\"},{\"page\":\"promote-students\",\"content\":\"Hier kannst du andere Schüler auswählen, die dir bei deinem Projekt helfen sollen. Sie können unter anderem auch Nachrichten an die Teilnehmer schreiben. Wähle sie aber sorgfältig aus, denn du kannst sie nach der Anmeldungsphase nicht mehr entfernen.\"},{\"page\":\"user-project-generation\",\"content\":\"Hier kannst du dein Projekt erstellen. Lasse dir sich dafür aber genug Zeit und fülle die Felder sorgfältig aus. Du kannst das Projekt im Nach­hi­n­ein noch bearbeiten.\"},{\"page\":\"user-registration\",\"content\":\"Hier kannst du deine Projektwünsche äußern, fülle dazu einfach die folgenden Felder fehlerfrei aus. Falls du mit einem Freund zusammen in ein Projekt willst kannst du ihn hier angeben, beachte aber, dass auch er oder sie dich als Freund angeben muss.\"},{\"page\":\"settings\",\"contents\":[{\"content\":\"Hier kannst du die Farbe des Hintergrundes bestimmen.\"},{\"content\":\"Hier kannst du die Farbe der Knöpfe, Felder, etc. bestimmen.\"}]},{\"page\":\"email-verification\",\"descriptions\":[{\"code\":\"200\",\"title\":\"E-Mail wurde erfolgreich verifiziert.\",\"descr\":\"Sie können nun ungehindert auf ihren Account zugreifen. Es kann allerdings sein, dass sie ihn vorher nocheinmal neu laden müssen.\"},{\"code\":\"400\",\"title\":\"E-Mail wurde bereits verifiziert.\",\"descr\":\"Es scheint als hätten sie ihre E-mail bereits verifiziert. Sie können somit schon auf ihren Account zugreifen. Falls dies nicht der Fall ist laden sie die Seite neu. Sollte der Fehler immernoch bestehen, kontaktieren sie einen Systemadministrator.\"}]}]}");
      /***/
    },

    /***/
    "./src/assets/config/data-protection.json":
    /*!************************************************!*\
      !*** ./src/assets/config/data-protection.json ***!
      \************************************************/

    /*! exports provided: data_protection, default */

    /***/
    function srcAssetsConfigDataProtectionJson(module) {
      module.exports = JSON.parse("{\"data_protection\":\"Your Data is our most valuable good!\"}");
      /***/
    },

    /***/
    "./src/assets/config/error.json":
    /*!**************************************!*\
      !*** ./src/assets/config/error.json ***!
      \**************************************/

    /*! exports provided: errors, default */

    /***/
    function srcAssetsConfigErrorJson(module) {
      module.exports = JSON.parse("{\"errors\":[{\"error\":\"admin-wrong_time\",\"descr\":\"Ein Projekt kann nur in der Kontrollphase zugelassen bzw. gelöscht werden.\"},{\"error\":\"leader-loading_project\",\"descr\":\"Es gab einen Fehler beim Laden ihres Projektes. Versuchen sie sich neu einzuloggen und melden sie diesen Fehler bitte dem Systemadministrator.\"},{\"error\":\"leader-wrong_time\",\"descr\":\"Ein Projekt kann nur in der Registrierungsphase bearbeitet werden.\"},{\"error\":\"student-loading_project\",\"descr\":\"Es gab einen Fehler beim Laden deines Projektes. Versuche dich neu einzuloggen und melde diesen Fehler bitte dem Systemadministrator.\"},{\"error\":\"student-wrong_time\",\"descr\":\"Ein Projekt kann nur in der Registrierungsphase bearbeitet werden.\"},{\"error\":\"student-project_not_allowed\",\"descr\":\"Es gab ein Problem mit deinem Projekt. Aktuell scheint es nict mehr zugelassen zu sein. Bitte erkundige dich bei dem Systemadministrator.\"},{\"error\":\"student-no_project_edit_by_assistants\",\"descr\":\"Nur der ursprüngliche Ersteller des Projektes kann Änderungen daran vornehmen.\"},{\"error\":\"student-no_assistants_edit_by_assistants\",\"descr\":\"Die Verwaltung der Assistenten ist dem ursprünglichen Projektleiter vorbehalten.\"},{\"error\":\"student-already_exchange\",\"descr\":\"Du hast schon getauscht!\"},{\"error\":\"mail_status_not_found\",\"descr\":\"Der Statuscode ist...\"}]}");
      /***/
    },

    /***/
    "./src/assets/config/help.json":
    /*!*************************************!*\
      !*** ./src/assets/config/help.json ***!
      \*************************************/

    /*! exports provided: instructions, default */

    /***/
    function srcAssetsConfigHelpJson(module) {
      module.exports = JSON.parse("{\"instructions\":[{\"title\":\"Als neuer Benutzer registrieren\",\"title1\":\"Schüler\",\"text1\":\"Um sich als neuer Schüler zu registrieren, geht man auf die Log-In-Seite und klickt dort in dem Bereich für Schüler auf \\\"Account erstellen\\\". Nun muss ein Benutzername gewählt werden, dieser muss nicht dem tatsächlichen Namen entsprechen. Anschließend wird das Passwort gewählt und durch erneute Angabe unter \\\"Passwort bestätigen\\\" bestätigt. Zum Schluss muss ein Token angegeben werden, welches jeder Schüler erhält und welches nur für eine Registrierung gültig ist. Nun kann der Account mit einem Klick auf \\\"Registrieren\\\" erstellt werden. Nach der Erstellung ist immernoch die Anmeldung mit dem Account erforderlich. \",\"title2\":\"Projektleiter!\",\"text2\":\"Die Registrierung als Projektleiter verläuft wie die Registrierung als Schüler, allerdings ist kein Token notwendig. Trotzdem muss man sich nach der Registrierung separat anmelden. \"},{\"title\":\"Anmelden!\",\"text\":\"Für die Anmeldung ist lediglich die Eingabe des Benutzernamen und des Passwortes in den vorgegebenen Feldern und der Klick auf \\\"Anmelden\\\" nötig. \"},{\"title\":\"Passwort vergessen?\",\"text1\":\"Für den Fall, das sie ihr Passwort vergessen haben, müssen sie einen Systemadministrator kontaktieren und sich von ihm ein Token übermitteln lassen. Dieses Token können sie dann verwenden um ihr Passwort zu ändern. Geben sie dazu auf der dafür \",\"text2\":\" ihren Benutzernamen und ihr Passwort ein und bestätigen sie das Passwort. Bitte achten sie arauf anzugeben welche Art von Account sie haben (Schüler oder Projektleiter). Geben sie schließlich noch das Token an und klicken sie auf \\\"Passwort ändern\\\". Nun können sie sich mit ihrem neuen Passwort anmelden. \"}]}");
      /***/
    },

    /***/
    "./src/assets/config/home.json":
    /*!*************************************!*\
      !*** ./src/assets/config/home.json ***!
      \*************************************/

    /*! exports provided: welcome, articles, default */

    /***/
    function srcAssetsConfigHomeJson(module) {
      module.exports = JSON.parse("{\"welcome\":{\"title\":\"Schüleraustausch\",\"text\":\"Willkommen!\"},\"articles\":[{\"title\":\"Coronabier\",\"text\":\"Hallo, dieses Jahr ein paar Überraschungen!\"},{\"title\":\"Coronabier2\",\"text\":\"Hallo, dieses Jahr noch ein paar mehr Überraschungen!\"}]}");
      /***/
    },

    /***/
    "./src/assets/config/imprint.json":
    /*!****************************************!*\
      !*** ./src/assets/config/imprint.json ***!
      \****************************************/

    /*! exports provided: contacts, default */

    /***/
    function srcAssetsConfigImprintJson(module) {
      module.exports = JSON.parse("{\"contacts\":[{\"name\":\"Your School\",\"adress\":\"12345 HereYourAdress 2\",\"link\":\"https://www.yourSchool.com\",\"email\":\"yourSchool@example.com\",\"phone\":\"08777777777\"},{\"name\":\"Your Schools Admin\",\"adress\":\"\",\"link\":\"\",\"email\":\"AdminsEmail@example.com\",\"phone\":\"08777777755\"}]}");
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Hartm\Desktop\NOT IBHam\JugendForscht\Jugend forscht 2019\Frontend\diribit.io\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map