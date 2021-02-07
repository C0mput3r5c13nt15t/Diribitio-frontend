(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+L5d":
    /*!****************************************!*\
      !*** ./src/config/backend.config.json ***!
      \****************************************/

    /*! exports provided: url, imageUrl, default */

    /***/
    function L5d(module) {
      module.exports = JSON.parse("{\"url\":\"www.diribitio.de:8000/api/\",\"imageUrl\":\"www.diribitio.de:8000/storage/images/\"}");
      /***/
    },

    /***/
    "+mQx":
    /*!*****************************************!*\
      !*** ./src/config/data-protection.json ***!
      \*****************************************/

    /*! exports provided: data_protection, default */

    /***/
    function mQx(module) {
      module.exports = JSON.parse("{\"data_protection\":\"Datenschutzbedingungen\"}");
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
      "zUnb");
      /***/
    },

    /***/
    "3LUQ":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function LUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /* harmony import */


      var _screensize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./screensize.service */
      "uIHg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * This service handles the display of all error and alert messages
       */


      var AlertService = /*#__PURE__*/function () {
        function AlertService(alertCtrl, loadingController, screensizeService, config, cookieService) {
          var _this = this;

          _classCallCheck(this, AlertService);

          this.alertCtrl = alertCtrl;
          this.loadingController = loadingController;
          this.screensizeService = screensizeService;
          this.config = config;
          this.cookieService = cookieService;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Contains all active alert and error messages
           */

          this.alertsAndErrors = [];
          /**
           * Contains the maximum lifetime for alert and error messages
           */

          this.maxLifetime = this.config.ui.alert_errors_max_lifetime * 1000;
          /**
           * Contains the id to be given to the next alert or error message
           */

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
        /**
         * Creates an alert message for the desktop layout
         * @param text Contains the text to be displayed by the alert
         */


        _createClass(AlertService, [{
          key: "desktop_alert",
          value: function desktop_alert(text) {
            if (!text) {
              text = 'Die Aktion wurde Erfolgreich durchgeführt.';
            }

            var alertData = {
              id: this.id,
              type: 'alert',
              header: 'Erfolg',
              desrc: text,
              time: new Date().getTime()
            };
            this.id += 1;
            this.alertsAndErrors.unshift(alertData);
            this.update.emit();
          }
          /**
           * Creates an error message for the desktop layout
           * @param text Contains the text to be displayed by the error alert
           * @param output Contains the output of the request
           */

        }, {
          key: "desktop_error",
          value: function desktop_error(text) {
            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (output == null) {
              output = '';
            }

            var errorData = {
              id: this.id,
              type: 'error',
              header: 'Fehler',
              desrc: text + ' ' + output,
              time: new Date().getTime()
            };
            this.id += 1;
            this.alertsAndErrors.unshift(errorData);
            this.update.emit();
          }
          /**
           * Deletes the alert or error message with the given id for the desktop layout
           * @param alertID Contains the id of the alert to be deleted
           */

        }, {
          key: "delete_alert_error",
          value: function delete_alert_error(alertOrErrorID) {
            this.alertsAndErrors = this.alertsAndErrors.filter(function (alertOrError) {
              return alertOrError.id !== alertOrErrorID;
            });
            this.update.emit();
          }
          /**
           * Creates an alert message for either the desktop or the mobile layout
           * @param text Contains the text to be displayed by the alert
           */

        }, {
          key: "alert",
          value: function alert(text) {
            if (!text) {
              text = 'Die Aktion wurde Erfolgreich durchgeführt.';
            }

            if (this.isDesktop) {
              this.desktop_alert(text);
            } else {
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
          /**
           * Creates an error message for either the desktop or the mobile layout
           * @param text Contains the text to be displayed by the error alert
           * @param output Contains the output of the request
           */

        }, {
          key: "error",
          value: function error(text) {
            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (output == null || typeof output !== 'string') {
              output = '';
            }

            if (this.isDesktop) {
              this.desktop_error(text, output);
            } else {
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
          /**
           * Creates an loading screen for a given amount of time
           * @param time Contains the time the loading screen should appear
           */

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
                        message: 'Bitte gedulden Sie sich einen Augenblick...',
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
          /**
           * Creates an waiting screen after a number of wrong login tries
           * @param time Contains the time the waiting screen should appear
           * @param tries Contains the number of times the user provided incorrect login credentials
           */

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
          /**
           * Creates an alert message that displays all the Terms of Use
           */

        }, {
          key: "agreements",
          value: function agreements() {
            var _this2 = this;

            this.alertCtrl.create({
              header: 'AGBs und Cookienutzung',
              message: this.conditions,
              buttons: [{
                text: 'Akzeptieren',
                role: 'cancel'
              }]
            }).then(function (alertEl) {
              alertEl.present();

              _this2.cookieService.set('Diribitio-AgreedOn', Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'), 10);
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
          type: _screensize_service__WEBPACK_IMPORTED_MODULE_5__["ScreensizeService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
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
    "6nr9":
    /*!**********************************************!*\
      !*** ./src/app/services/settings.service.ts ***!
      \**********************************************/

    /*! exports provided: SettingsService */

    /***/
    function nr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
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


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /**
       * This service handles the color settings of the application
       */


      var SettingsService = /*#__PURE__*/function () {
        /**
         * @ignore
         */
        function SettingsService(cookieService) {
          _classCallCheck(this, SettingsService);

          this.cookieService = cookieService;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The color of the background (light or dark)
           */

          this.background = 'light';
          /**
           * The color of the buttons, titles, etc. (blue, green, yellow or pink)
           */

          this.color = 'blue';
        }
        /**
         * Gives back the current theme
         * @returns The current theme from the cookie or a pre-set standard
         */


        _createClass(SettingsService, [{
          key: "change_theme",

          /**
           * Changes the current theme and saves it to the cookie
           * @param background Contains the background color (light or dark)
           * @param color Contains the color of buttons, titles, etc (blue, pink, green or yellow)
           */
          value: function change_theme(background, color) {
            this.background = background;
            this.color = color;
            this.cookieService.set('Diribitio-Theme', background + '-' + color);
            this.update.emit();
          }
        }, {
          key: "theme",
          get: function get() {
            if (this.cookieService.get('Diribitio-Theme')) {
              return this.cookieService.get('Diribitio-Theme');
            } else {
              return this.background + '-' + this.color;
            }
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ctorParameters = function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
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
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.

      /**
       * The debug environment
       */


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
    "GW04":
    /*!******************************!*\
      !*** ./src/config/help.json ***!
      \******************************/

    /*! exports provided: instructions, default */

    /***/
    function GW04(module) {
      module.exports = JSON.parse("{\"instructions\":[{\"title\":\"Als neuer Benutzer registrieren\",\"title1\":\"Schüler\",\"text1\":\"Um sich als neuer Schüler zu registrieren, geht man auf die Log-In-Seite und klickt dort in dem Bereich für Schüler auf \\\"Account erstellen\\\". Nun muss ein Benutzername gewählt werden, dieser muss nicht dem tatsächlichen Namen entsprechen. Anschließend wird das Passwort gewählt und durch erneute Angabe unter \\\"Passwort bestätigen\\\" bestätigt. Zum Schluss muss ein Token angegeben werden, welches jeder Schüler erhält und welches nur für eine Registrierung gültig ist. Nun kann der Account mit einem Klick auf \\\"Registrieren\\\" erstellt werden. Nach der Erstellung ist immernoch die Anmeldung mit dem Account erforderlich. \",\"title2\":\"Projektleiter!\",\"text2\":\"Die Registrierung als Projektleiter verläuft wie die Registrierung als Schüler, allerdings ist kein Token notwendig. Trotzdem muss man sich nach der Registrierung separat anmelden. \"},{\"title\":\"Anmelden!\",\"text1\":\"Für die Anmeldung ist lediglich die Eingabe des Benutzernamen und des Passwortes in den vorgegebenen Feldern und der Klick auf \\\"Anmelden\\\" nötig. \"},{\"title\":\"Passwort vergessen?\",\"text1\":\"Für den Fall, das Sie Ihr Passwort vergessen haben, müssen Sie einen Systemadministrator kontaktieren und sich von ihm ein Token übermitteln lassen. Dieses Token können Sie dann verwenden um Ihr Passwort zu ändern. Geben Sie dazu auf der dafür \",\"text2\":\" Ihren Benutzernamen und Ihr Passwort ein und bestätigen Sie das Passwort. Bitte achten Sie arauf anzugeben welche Art von Account Sie haben (Schüler oder Projektleiter). Geben Sie schließlich noch das Token an und klicken Sie auf \\\"Passwort ändern\\\". Nun können Sie sich mit ihrem neuen Passwort anmelden. \"}]}");
      /***/
    },

    /***/
    "MGnQ":
    /*!************************************!*\
      !*** ./src/config/conditions.json ***!
      \************************************/

    /*! exports provided: short_conditions, full_conditions, default */

    /***/
    function MGnQ(module) {
      module.exports = JSON.parse("{\"short_conditions\":\"Mit der Nutzung dieser Webseite stimmen Sie unseren Bedingungen zu. Nähere Informationen und die Bedingungen finden Sie im Impressum.\",\"full_conditions\":\"Sie akzeptieren alle Risiken die von dieser Seite ausgehen.\"}");
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/settings.service */
      "6nr9");
      /* harmony import */


      var _services_screensize_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/screensize.service */
      "uIHg");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/alert.service */
      "3LUQ");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/config.service */
      "r4Kj");
      /**
       * @ignore
       */


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, settings, screensizeService, alert, cookieService, config) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.settings = settings;
          this.screensizeService = screensizeService;
          this.alert = alert;
          this.cookieService = cookieService;
          this.config = config;
          this.theme = 'dark-blue';
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            this.platform.ready().then(function () {
              _this3.statusBar.styleDefault();

              _this3.splashScreen.hide();

              _this3.screensizeService.onResize(_this3.platform.width());

              _this3.changeColor();

              _this3.settings.update.subscribe(function () {
                _this3.changeColor();
              });
            });

            if (!this.cookieService.get('Diribitio-AgreedOn')) {
              this.alert.agreements();
            }
          }
        }, {
          key: "changeColor",
          value: function changeColor() {
            var _this4 = this;

            var colorAndBackground = this.settings.theme.split('-', 2);
            var background = colorAndBackground[0];
            var color = colorAndBackground[1];
            var now = new Date();

            if (background === 'auto') {
              if (this.config.ui.night_start_hour <= now.getHours() || now.getHours() < this.config.ui.night_end_hour) {
                background = 'dark';
                var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60 * 1000); // Every 1 Minute

                this.regularInterval = source.subscribe(function () {
                  return _this4.changeColor();
                });
              } else {
                background = 'light';

                var _source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60 * 1000); // Every 1 Minute


                this.regularInterval = _source.subscribe(function () {
                  return _this4.changeColor();
                });
              }
            } else {
              if (this.regularInterval) {
                this.regularInterval.unsubscribe();
              }
            }

            this.theme = background + '-' + color + ' hydrated';
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]
        }, {
          type: _services_screensize_service__WEBPACK_IMPORTED_MODULE_9__["ScreensizeService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]
        }, {
          type: _services_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]
        }];
      };

      AppComponent.propDecorators = {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "Twpp":
    /*!******************************!*\
      !*** ./src/config/home.json ***!
      \******************************/

    /*! exports provided: welcome, articles, default */

    /***/
    function Twpp(module) {
      module.exports = JSON.parse("{\"welcome\":{\"title\":\"Willkommen bei diribitio\",\"text\":\"Sie befinden sich aktuell auf der Startseite von diribitio.de. Diribitio ist ein Schülerprojekt und aktuell noch in einer Testphase. Wir raten Ihnen dringed von der Benutzung dieser Webseite ab und übernehmen keinerlei Haftung für Schäden, Kosten oder ähnliches, die durch die Nutzung dieser Seite anfallen. Die Benutzung ist somit auf eigene Gefahr!\"},\"articles\":[{\"title\":\"Artikel 1\",\"text\":\"Das hier ist ein Artikel, der aktuelle, bzw. interesssante Informationen bezüglich der Projekttage enthalten sollte.\"},{\"title\":\"Artikel 2\",\"text\":\"Das hier ist ein weiterer Artikel, der aktuelle, bzw. interesssante Informationen bezüglich der Projekttage enthalten sollte.\"}]}");
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app [class]=\"theme\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

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
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"]
        }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "c5HQ":
    /*!*********************************!*\
      !*** ./src/config/content.json ***!
      \*********************************/

    /*! exports provided: contents, default */

    /***/
    function c5HQ(module) {
      module.exports = JSON.parse("{\"contents\":[{\"page\":\"admin-page\",\"content\":\"Vom Dashboard aus gelangen sie zu allen weiteren Funktionalitäten, die aktuell verfügbar sind.\"},{\"page\":\"admin-generation\",\"content\":\"Zur Erstellung eines Admin-Accounts muss Ihre E-Mail zuerst von einem Admin freigegeben worden sein. Ist das der Fall können Sie sich hier als Admin registrieren.\"},{\"page\":\"admin-exchanges\",\"contents\":[{\"content\":\"Tauschanfragen durchlaufen drei Stadien. Nach ihrer Erstellung durch den Versender der Anfrage sind sie noch nicht durch den Empfänger bestätigt. Dies wird durch das \"},{\"content\":\"-Symbol deutlich. Hat der Empfänger dem Tausch gestimmt, so zeigt sich das \"},{\"content\":\"-Symbol. Jetzt muss ein Admin den Tausch durchführen. Ist dies geschehen, so verdeutlicht das \"},{\"content\":\"-Häckchen-Symbol, dass der Tausch abgehandelt ist.\"}]},{\"page\":\"admin-exchange-details\"},{\"page\":\"admin-logs\",\"content\":\"Falls Sie weitere Admins in das System intigrieren wollen, müssen Sie vor der Anmeldung die jeweilige E-Mail freigeben. Die entsprechende Person kann sich dann einen Adminaccount erstellen. Dabei ist die Erstellung der Adminaccounts auf den Zeitraum von der Registrierung bis zur Sortierung der Schüler begrenzt.\"},{\"page\":\"admin-projects\",\"content\":\"Auf dieser Seite können Sie alle Projekte verwalten. Klicken Sie ein Projekt an, um nähere Informationen zu ihm zu erhalten. Ihnen werden dann auch die Optionen der Löschung und Zulassung des Projektes gegeben. Ein Projekt kann wenn es nicht zugelassen ist weder als Wunsch angegeben, noch von den Schülern angesehen werden. Um Ihnen die Regulierung der eingehenden Projekte zu ermöglichen, muss jedes Projekt standardmäßig erst von einem Admin zugelassen werden bevor es angezeit und auswählbar ist. Sollten Sie das Projekt als nicht zulassungswürdig empfiden, können Sie es löschen. Der zuständige Projektleiter wird dann per E-Mail über die Löschung seines Projektes informiert.\"},{\"page\":\"admin-schedule\",\"content\":\"Der Zeitplan legt fest, wann welche Aktionen zur Verfügung stehen. Er kann sehr einfach und zu jedem Zeitpunkt bearbeitet werden. Es wird allerdings strengstens von einem nachträglichen Ändern abgeraten.\"},{\"page\":\"admin-students-leaders\",\"contents\":[{\"content\":\"Hier sehen Sie alle Schüler und falls Sie schon zugewiesen sind Ihre Projekte, außerdem sehen Sie die drei Projektwünsche (Wichtigkeit von oben nach unten) und die angegebenen Freunde des jeweiligen Schülers.\"},{\"content\":\"Durchsuchen sie alle angemeldeten Schülern nach E-Mail, Vor-, Nachname und Klasse (Zahl und Buchstabe).\"},{\"content\":\"Hier haben Sie eine Übersicht über die verschiedenen Projektleiter, sowie einen Link zum jeweiligen Projekt. Falls ein Projektleiter noch oder nicht mehr Leiter eines Projektes ist, so können Sie ihn von hier aus direkt löschen, achten Sie aber bitte darauf nur bewusst ausgewählte Leute zu löschen.\"},{\"content\":\"Hier können Sie zu gegebener Zeit die Sortierung der Schüler abwickeln. Erstellen sie dafür einen Sortiervorschlag, der vom Algorithmus geliefrete Vorschlag zur Sortierung der Schüler wird ihnen dann angezeigt. Alternativ können sie auch, wenn sie schon einen Sortiervorschlag haben diesen laden.\"},{\"content\":\"Hier wird ihnen der Sortiervorschlag für die Sortierung der Schüler angezeigt. Er enthält die Projekte und die ihnen zugeordneten Schüler. Sie können die Schüler beliebig in Projekte verschieben. Achten sie aber darauf, dass das Auffangprojekt für nicht zuordnbaren Schüler leer bleibt.\"}]},{\"page\":\"forgot-password\",\"content\":\"Bitte lassen Sie sich von einem Admin ein Token zuschicken.\"},{\"page\":\"reset-password\",\"content\":\"Hier können Sie Ihr Passwort zurücksetzen.\"},{\"page\":\"leader-generation\",\"content\":\"Hier können Sie sich als Projektleiter registrieren. Als Projektleiter können Sie ein Projekt erstellen, verwalten und schließlich auch am Gymnasium Dorfen durchführen. Für Fragen wenden Sie sich bitte an den Systemadministrator.\"},{\"page\":\"leader-page\",\"content\":\"Auf dieser Seite können Sie Ihr Projekt verwalten bzw. ein neues Projekt erstellen.\"},{\"page\":\"leader-project-generation\",\"content\":\"Hier können Sie Ihr Projekt erstellen. Lassen Sie sich dafür aber genug Zeit und füllen Sie die Felder sorgfältig aus. Sie können das Projekt im Nach­hi­n­ein noch bearbeiten.\"},{\"page\":\"student-generation\",\"content\":\"Hier kannst du deinen Account erstellen. Dazu benötigst du allerings ein Token, dass du von deinen Lehrkräften bereits bekommen haben solltest.\"},{\"page\":\"student-page\",\"content\":\"Auf dieser Seite kannst du deinen Account verwalten. Du kannst ein Projekt erstellen oder dich auch nur für Projekte anmelden. Außerdem kannst nach der Sortierungsphase Tauschanfragen stellen und annehmen.\"},{\"page\":\"student-exchange-confirm\",\"content\":\"Hier kannst du eine gestellte Tauschanfrage annehmen. Klicke dazu einfach auf den Knopf neben der Anfrage.\"},{\"page\":\"student-exchange-request\",\"content\":\"Hier kannst du eine Tauschanfrage stellen, fülle dazu einfach das Formular aus und klicke auf 'Tauschanfrage senden'\"},{\"page\":\"student-projects\",\"content\":\"Implimentiert\"},{\"page\":\"promote-students\",\"content\":\"Hier kannst du andere Schüler auswählen, die dir bei deinem Projekt helfen sollen. Sie können auch Notizen an das Projekt anhägen. Wähle sie aber sorgfältig aus, denn du kannst sie nach der Anmeldungsphase nicht mehr entfernen.\"},{\"page\":\"student-registration\",\"content\":\"Hier kannst du deine Projektwünsche äußern, fülle dazu einfach die folgenden Felder fehlerfrei aus. Falls du mit einem Freund zusammen in ein Projekt willst kannst du ihn hier angeben, beachte aber, dass auch er oder sie dich als Freund angeben muss.\"},{\"page\":\"student-project-generation\",\"content\":\"Hier kannst du dein Projekt erstellen. Lasse dir sich dafür aber genug Zeit und fülle die Felder sorgfältig aus. Du kannst das Projekt im Nach­hi­n­ein noch bearbeiten.\"},{\"page\":\"settings\",\"contents\":[{\"content\":\"Hier kannst du die Farbe des Hintergrundes bestimmen.\"},{\"content\":\"Hier kannst du die Farbe der Knöpfe, Felder, etc. bestimmen.\"}]},{\"page\":\"email-verification\",\"descriptions\":[{\"code\":\"200\",\"title\":\"E-Mail wurde erfolgreich verifiziert.\",\"descr\":\"Sie können nun ungehindert auf Ihren Account zugreifen. Es kann allerdings sein, dass Sie ihn vorher nocheinmal neu laden müssen.\"},{\"code\":\"400\",\"title\":\"E-Mail wurde bereits verifiziert.\",\"descr\":\"Es scheint als hätten Sie Ihre E-Mail bereits verifiziert. Sie können somit schon auf Ihren Account zugreifen. Falls dies nicht der Fall ist laden Sie die Seite neu. Sollte der Fehler immernoch bestehen, kontaktieren Sie einen Systemadministrator.\"}]}]}");
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
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

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "oXYy":
    /*!*******************************!*\
      !*** ./src/config/error.json ***!
      \*******************************/

    /*! exports provided: errors, default */

    /***/
    function oXYy(module) {
      module.exports = JSON.parse("{\"errors\":[{\"error\":\"admin-wrong_time\",\"descr\":\"Ein Projekt kann nur in der Kontrollphase zugelassen bzw. gelöscht werden.\"},{\"error\":\"leader-loading_project\",\"descr\":\"Es gab einen Fehler beim Laden Ihres Projektes. Versuchen Sie sich neu einzuloggen und melden Sie diesen Fehler bitte dem Systemadministrator.\"},{\"error\":\"leader-wrong_time\",\"descr\":\"Ein Projekt kann nur in der Registrierungsphase bearbeitet werden.\"},{\"error\":\"student-loading_project\",\"descr\":\"Es gab einen Fehler beim Laden deines Projektes. Versuche dich neu einzuloggen und melde diesen Fehler bitte dem Systemadministrator.\"},{\"error\":\"student-wrong_time\",\"descr\":\"Ein Projekt kann nur in der Registrierungsphase bearbeitet werden.\"},{\"error\":\"student-project_not_allowed\",\"descr\":\"Es gab ein Problem mit deinem Projekt. Aktuell scheint es nict mehr zugelassen zu sein. Bitte erkundige dich bei dem Systemadministrator.\"},{\"error\":\"student-no_project_edit_by_assistants\",\"descr\":\"Nur der ursprüngliche Ersteller des Projektes kann Änderungen daran vornehmen.\"},{\"error\":\"student-no_assistants_edit_by_assistants\",\"descr\":\"Die Verwaltung der Assistenten ist dem ursprünglichen Projektleiter vorbehalten.\"},{\"error\":\"student-already_exchange\",\"descr\":\"Du hast schon getauscht!\"},{\"error\":\"mail_status_not_found\",\"descr\":\"Der Statuscode ist...\"}]}");
      /***/
    },

    /***/
    "phZJ":
    /*!************************************!*\
      !*** ./src/config/app.config.json ***!
      \************************************/

    /*! exports provided: noun_gender, project_noun, projects_noun, event_name, students_can_create_projects, default */

    /***/
    function phZJ(module) {
      module.exports = JSON.parse("{\"noun_gender\":\"n\",\"project_noun\":\"Projekt\",\"projects_noun\":\"Projekte\",\"event_name\":\"Projekttage\",\"students_can_create_projects\":true}");
      /***/
    },

    /***/
    "r4Kj":
    /*!********************************************!*\
      !*** ./src/app/services/config.service.ts ***!
      \********************************************/

    /*! exports provided: ConfigService */

    /***/
    function r4Kj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
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


      var src_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/config/app.config.json */
      "phZJ");

      var src_config_app_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/app.config.json */
      "phZJ", 1);
      /* harmony import */


      var src_config_backend_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/config/backend.config.json */
      "+L5d");

      var src_config_backend_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/backend.config.json */
      "+L5d", 1);
      /* harmony import */


      var src_config_conditions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/config/conditions.json */
      "MGnQ");

      var src_config_conditions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/conditions.json */
      "MGnQ", 1);
      /* harmony import */


      var src_config_content_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/config/content.json */
      "c5HQ");

      var src_config_content_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/content.json */
      "c5HQ", 1);
      /* harmony import */


      var src_config_data_protection_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/config/data-protection.json */
      "+mQx");

      var src_config_data_protection_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/data-protection.json */
      "+mQx", 1);
      /* harmony import */


      var src_config_error_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/config/error.json */
      "oXYy");

      var src_config_error_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/error.json */
      "oXYy", 1);
      /* harmony import */


      var src_config_help_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/config/help.json */
      "GW04");

      var src_config_help_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/help.json */
      "GW04", 1);
      /* harmony import */


      var src_config_home_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/config/home.json */
      "Twpp");

      var src_config_home_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/home.json */
      "Twpp", 1);
      /* harmony import */


      var src_config_imprint_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/config/imprint.json */
      "s+Tv");

      var src_config_imprint_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/imprint.json */
      "s+Tv", 1);
      /* harmony import */


      var src_config_ui_config_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/config/ui.config.json */
      "xhvJ");

      var src_config_ui_config_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/config/ui.config.json */
      "xhvJ", 1);
      /**
       * This service handles all configuration files
       */


      var ConfigService = /*#__PURE__*/function () {
        /**
         * @ignore
         */
        function ConfigService() {
          _classCallCheck(this, ConfigService);

          /**
           * All possible definite articles for the projectNoun
           */
          this.definiteArticlesCapital = {
            m: 'Der',
            f: 'Die',
            n: 'Das'
          };
          /**
           * All possible indefinite articles for the projectNoun
           */

          this.indefiniteArticlesCapital = {
            m: 'Ein',
            f: 'Eine',
            n: 'Ein'
          };
        }
        /**
         * Returns the content of the page with the given name
         * @param pageName Contains the name of the page
         */


        _createClass(ConfigService, [{
          key: "get_content",
          value: function get_content(pageName) {
            // tslint:disable-next-line: triple-equals
            return src_config_content_json__WEBPACK_IMPORTED_MODULE_5__.contents.filter(function (text) {
              return text.page == pageName;
            })[0].content;
          }
          /**
           * Returns the content with the given index of the page with the given name
           * @param pageName Contains the name of the page
           */

        }, {
          key: "get_content_by_index",
          value: function get_content_by_index(pageName) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            // tslint:disable-next-line: triple-equals
            return src_config_content_json__WEBPACK_IMPORTED_MODULE_5__.contents.filter(function (text) {
              return text.page == pageName;
            })[0].contents[index].content;
          }
          /**
           * Returns the error message of the error with the given name
           * @param pageName Contains the name of the page
           */

        }, {
          key: "get_error",
          value: function get_error(errorName) {
            // tslint:disable-next-line: triple-equals
            return src_config_error_json__WEBPACK_IMPORTED_MODULE_7__.errors.filter(function (descr) {
              return descr.error == errorName;
            })[0].descr;
          }
          /**
           * Returns the status text for the given status of the given page
           * @param pageName Contains the name of the page
           */

        }, {
          key: "get_mail_status_descr",
          value: function get_mail_status_descr(pageName, status) {
            // tslint:disable-next-line: triple-equals
            var descriptions = src_config_content_json__WEBPACK_IMPORTED_MODULE_5__.contents.filter(function (text) {
              return text.page == pageName;
            })[0].descriptions; // tslint:disable-next-line: triple-equals

            return descriptions.filter(function (text) {
              return text.code == status;
            })[0];
          }
          /**
           * Returns the app.config.json
           * @returns Contains the json
           */

        }, {
          key: "app_config",
          get: function get() {
            return src_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__;
          }
          /**
           * Returns the backend.config.json
           * @returns Contains the json
           */

        }, {
          key: "backend_config",
          get: function get() {
            return src_config_backend_config_json__WEBPACK_IMPORTED_MODULE_3__;
          }
          /**
           * Returns the conditions.config.json
           * @returns Contains the json
           */

        }, {
          key: "conditions",
          get: function get() {
            return src_config_conditions_json__WEBPACK_IMPORTED_MODULE_4__;
          }
          /**
           * Returns the data-protection.config.json
           * @returns Contains the json
           */

        }, {
          key: "data_protection",
          get: function get() {
            return src_config_data_protection_json__WEBPACK_IMPORTED_MODULE_6__;
          }
          /**
           * Returns the help.config.json
           * @returns Contains the json
           */

        }, {
          key: "help",
          get: function get() {
            return src_config_help_json__WEBPACK_IMPORTED_MODULE_8__;
          }
          /**
           * Returns the home.config.json
           * @returns Contains the json
           */

        }, {
          key: "home",
          get: function get() {
            return src_config_home_json__WEBPACK_IMPORTED_MODULE_9__;
          }
          /**
           * Returns the imprint.config.json
           * @returns Contains the json
           */

        }, {
          key: "imprint",
          get: function get() {
            return src_config_imprint_json__WEBPACK_IMPORTED_MODULE_10__;
          }
          /**
           * Returns the ui.config.json
           * @returns Contains the json
           */

        }, {
          key: "ui",
          get: function get() {
            return src_config_ui_config_json__WEBPACK_IMPORTED_MODULE_11__;
          }
          /**
           * Returns the definite article for projectNoun
           * @returns Contains the definite article
           */

        }, {
          key: "definite_article",
          get: function get() {
            var gender = src_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__.noun_gender;
            return this.definiteArticlesCapital[gender];
          }
          /**
           * Returns the indefinite article for projectNoun
           * @returns Contains the indefinite article
           */

        }, {
          key: "indefinite_article",
          get: function get() {
            var gender = src_config_app_config_json__WEBPACK_IMPORTED_MODULE_2__.noun_gender;
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
    "s+Tv":
    /*!*********************************!*\
      !*** ./src/config/imprint.json ***!
      \*********************************/

    /*! exports provided: contacts, default */

    /***/
    function sTv(module) {
      module.exports = JSON.parse("{\"contacts\":[{\"name\":\"Paul Maier\",\"email\":\"pauljustus279@gmail.com\"},{\"name\":\"This Page represents a student project test deployment and should not be used by anybody other than the creator.\"}]}");
      /***/
    },

    /***/
    "uIHg":
    /*!************************************************!*\
      !*** ./src/app/services/screensize.service.ts ***!
      \************************************************/

    /*! exports provided: ScreensizeService */

    /***/
    function uIHg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreensizeService", function () {
        return ScreensizeService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * This service handles the resize events and switches between the mobile and the desktop view
       */


      var ScreensizeService = /*#__PURE__*/function () {
        /**
         * @ignore
         */
        function ScreensizeService() {
          _classCallCheck(this, ScreensizeService);

          this.isDesktop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }
        /**
         * Changes the page layout based on resize events
         * @param size Contains the new size of the page
         */


        _createClass(ScreensizeService, [{
          key: "onResize",
          value: function onResize(size) {
            if (size < 570) {
              this.isDesktop.next(false);
            } else {
              this.isDesktop.next(true);
            }
          }
          /**
           * Gives back an observable that describes if the page should use the desktop or the moblie layout
           * @returns Observable<boolean>
           */

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
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
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
    "xhvJ":
    /*!***********************************!*\
      !*** ./src/config/ui.config.json ***!
      \***********************************/

    /*! exports provided: default_background, default_color, alert_errors_max_lifetime, night_start_hour, night_end_hour, default */

    /***/
    function xhvJ(module) {
      module.exports = JSON.parse("{\"default_background\":\"light\",\"default_color\":\"blue\",\"alert_errors_max_lifetime\":6,\"night_start_hour\":19,\"night_end_hour\":6}");
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map