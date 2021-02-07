(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "Hzbo":
    /*!**********************************************!*\
      !*** ./src/app/services/messages.service.ts ***!
      \**********************************************/

    /*! exports provided: MessagesService */

    /***/
    function Hzbo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /**
       * This service handles all request to the backend having to do with the messages
       */


      var MessagesService = /*#__PURE__*/function () {
        function MessagesService(http, auth, alert, config) {
          _classCallCheck(this, MessagesService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The url to the backend
           */

          this.backendUrl = this.config.backend_config.url;
        }
        /**
         * Creates a new message for a project
         * @param baseUrl Contains for which type of user accout this request is (students or leaders)
         * @param messageData Contains the message
         * @returns RequestObservable
         */


        _createClass(MessagesService, [{
          key: "createMessage",
          value: function createMessage() {
            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var messageData = arguments.length > 1 ? arguments[1] : undefined;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + baseUrl + '/store_leaded_project_message', messageData, options);
          }
          /**
           * Deletes the message with the given id from a project
           * @param baseUrl Contains for which type of user accout this request is (students or leaders)
           * @param messageID Contains the id of the message to be deleted
           * @returns RequestObservable
           */

        }, {
          key: "deleteMessage",
          value: function deleteMessage() {
            var _this = this;

            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var messageID = arguments.length > 1 ? arguments[1] : undefined;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + baseUrl + '/destroy_leaded_project_message/' + messageID, options).subscribe(function () {
              _this.update.emit();
            }, function (error) {
              _this.alert.error('Löschung der Nachricht fehlgeschlagen!', error.error);
            });
          }
        }]);

        return MessagesService;
      }();

      MessagesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      };

      MessagesService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      MessagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MessagesService);
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "OeS+":
    /*!**********************************************!*\
      !*** ./src/app/services/schedule.service.ts ***!
      \**********************************************/

    /*! exports provided: ScheduleService */

    /***/
    function OeS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduleService", function () {
        return ScheduleService;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /**
       * This service handles all request to the backend having to do with the shedule
       */


      var ScheduleService = /*#__PURE__*/function () {
        function ScheduleService(http, auth, config) {
          _classCallCheck(this, ScheduleService);

          this.http = http;
          this.auth = auth;
          this.config = config;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The url to the backend
           */

          this.backendUrl = this.config.backend_config.url;
        }
        /**
         * Gets the current schedule
         * @returns RequestObservable
         */


        _createClass(ScheduleService, [{
          key: "getSchedule",
          value: function getSchedule() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'schedule/1', options);
          }
          /**
           * Updates the current schedule
           * @param schedule Contains the new schedule
           * @returns RequestObservable
           */

        }, {
          key: "putSchedule",
          value: function putSchedule(schedule) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.put(this.backendUrl + 'admins/update_schedule', schedule, options);
          }
        }]);

        return ScheduleService;
      }();

      ScheduleService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }];
      };

      ScheduleService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ScheduleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ScheduleService);
      /***/
    },

    /***/
    "PO/Q":
    /*!*********************************************!*\
      !*** ./src/app/services/leaders.service.ts ***!
      \*********************************************/

    /*! exports provided: LeadersService */

    /***/
    function POQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadersService", function () {
        return LeadersService;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /**
       * This service handles all request to the backend having to do with the leaders
       */


      var LeadersService = /*#__PURE__*/function () {
        function LeadersService(http, auth, alert, config, router) {
          _classCallCheck(this, LeadersService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.router = router;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The url to the backend
           */

          this.backendUrl = this.config.backend_config.url;
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }
        /**
         * Creates a new leader account
         * @param signUpData Contains the credentials for the account creation
         * @param form Contains the form to be resetted after the creation
         */


        _createClass(LeadersService, [{
          key: "signUpLeader",
          value: function signUpLeader(signUpData, form) {
            var _this2 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'leaders/register', signUpData, options).subscribe(function (data) {
              if (data.token) {
                _this2.auth.set_jwt(data.token);

                _this2.auth.setLoggedIn(true);

                _this2.router.navigate([_this2.eventName + '/Anmeldung']);
              }

              _this2.alert.alert('Dein Account wurde erfolgreich erstellt!');

              _this2.sendAuthentificationEmail();

              _this2.update.emit();

              form.reset();
            }, function (error) {
              _this2.alert.error('Erstellung des Accounts fehlgeschlagen!', error.error);
            });
          }
          /**
           * Sends the authentification email to the leader associated with the provided token
           */

        }, {
          key: "sendAuthentificationEmail",
          value: function sendAuthentificationEmail() {
            var _this3 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'leaders/email/resend', null, options).subscribe(function (data) {
              _this3.alert.alert(data.message);
            }, function (error) {
              _this3.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
            });
          }
          /**
           * Sends the authentification email to the leader associated with the provided token (same as before)
           * @returns RequestObservable
           */

        }, {
          key: "sendAuthentificationEmailSubscribe",
          value: function sendAuthentificationEmailSubscribe() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'leaders/email/resend', null, options);
          }
          /**
           * Logs in as leader with the given credentials
           * @param loginData Contains the credentials to be used (email and password)
           * @returns RequestObservable
           */

        }, {
          key: "logInLeader",
          value: function logInLeader(loginData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'leaders/login', loginData, options);
          }
          /**
           * Logs out the leader associated with the provided token
           */

        }, {
          key: "logOutLeader",
          value: function logOutLeader() {
            var _this4 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'leaders/logout', null, options).subscribe(function (data) {
              _this4.alert.alert(data.message);

              _this4.auth.setLoggedIn(false);

              _this4.router.navigate([_this4.eventName + '/Anmeldung']);
            }, function (error) {
              _this4.alert.error('Logout fehlgeschlagen!', error.error);
            });
          }
          /**
           * Gets the leader associated with the provided token
           * @returns RequestObservable
           */

        }, {
          key: "getSelfLeader",
          value: function getSelfLeader() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'leaders/self', options);
          }
          /**
           * Gets all leaders
           * @returns RequestObservable
           */

        }, {
          key: "getAllLeaders",
          value: function getAllLeaders() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/index_leaders', options);
          }
          /**
           * Deletes the leader with the given id
           * @param leaderID Contains the id of the leader to be deleted
           */

        }, {
          key: "deleteLeader",
          value: function deleteLeader(leaderID) {
            var _this5 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'admins/destroy_leader/' + leaderID, options).subscribe(function (data) {
              _this5.alert.alert(data.message);

              _this5.update.emit();
            }, function (error) {
              _this5.alert.error('Löschung des ' + _this5.projectNoun + 'leiters fehlgeschlagen!', error.error);
            });
          }
          /**
           * Deletes the leader associated with the provided token
           */

        }, {
          key: "destroySelfLeader",
          value: function destroySelfLeader() {
            var _this6 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'leaders/self_destroy', options).subscribe(function (data) {
              _this6.alert.alert(data.message);

              _this6.auth.setLoggedIn(false);

              _this6.router.navigate([_this6.eventName + '/Anmeldung']);
            }, function (error) {
              _this6.alert.error('Löschung Ihres Accounts fehlgeschlagen!', error.error);
            });
          }
        }]);

        return LeadersService;
      }();

      LeadersService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      LeadersService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      LeadersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LeadersService);
      /***/
    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "hQbD":
    /*!***********************************************!*\
      !*** ./src/app/services/exchanges.service.ts ***!
      \***********************************************/

    /*! exports provided: ExchangesService */

    /***/
    function hQbD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExchangesService", function () {
        return ExchangesService;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /**
       * This service handles all request to the backend having to do with the exchanges
       */


      var ExchangesService = /*#__PURE__*/function () {
        function ExchangesService(http, auth, alert, config) {
          _classCallCheck(this, ExchangesService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The url to the backend
           */

          this.backendUrl = this.config.backend_config.url;
        }
        /**
         * Gets all exchange requests for the student associated with the provided toke
         * @returns Requestobservable
         */


        _createClass(ExchangesService, [{
          key: "getAllExchangesForParticipant",
          value: function getAllExchangesForParticipant() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'students/exchange_requests', options);
          }
          /**
           * Gets all exchanges
           * @returns Requestobservable
           */

        }, {
          key: "getAllexchanges",
          value: function getAllexchanges() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/index_exchanges', options);
          }
          /**
           * Gets the exchage with the given id
           * @param exchangeID Contains the id of the exchange
           * @returns RequestObservable
           */

        }, {
          key: "getExchange",
          value: function getExchange(exchangeID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/exchange/' + exchangeID, options);
          }
          /**
           * Confirms the exchage with the given id
           * @param exchangeID Contains the id of the exchange
           * @returns RequestObservable
           */

        }, {
          key: "confirmExchange",
          value: function confirmExchange(exchangeID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.put(this.backendUrl + 'students/confirm_exchange/' + exchangeID, null, options);
          }
          /**
           * Carries out the exchage with the given id
           * @param exchangeID Contains the id of the exchange
           */

        }, {
          key: "carryOutExchange",
          value: function carryOutExchange(exchangeID) {
            var _this7 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'admins/accomplish_exchange/' + exchangeID, null, options).subscribe(function (data) {
              _this7.alert.alert(data.message);

              _this7.update.emit();
            }, function (error) {
              _this7.alert.error('Durchführung des Tausches fehlgeschlagen!', error.error);
            });
          }
          /**
           * Creates an exchage request to the student with the given id
           * @param receiverID Contains the id of the recieving student
           * @returns RequestObservable
           */

        }, {
          key: "createExchange",
          value: function createExchange(receiverID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              receiver_id: receiverID
            };
            return this.http.post(this.backendUrl + 'students/store_exchange', sendData, options);
          }
          /**
           * Deletes the current exchange of the student associated with the provided toke
           * @returns RequestObservable
           */

        }, {
          key: "deleteSelfExchange",
          value: function deleteSelfExchange() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http["delete"](this.backendUrl + 'students/destroy_exchange', options);
          }
          /**
           * Deletes the exchage with the given id
           * @param exchangeID Contains the id of the exchage
           */

        }, {
          key: "deleteExchange",
          value: function deleteExchange(exchangeID) {
            var _this8 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'admins/destroy_exchange/' + exchangeID, options).subscribe(function (data) {
              _this8.alert.alert(data.message);

              _this8.update.emit();
            }, function (error) {
              _this8.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
            });
          }
        }]);

        return ExchangesService;
      }();

      ExchangesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      };

      ExchangesService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ExchangesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ExchangesService);
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "uVPj":
    /*!********************************************!*\
      !*** ./src/app/services/admins.service.ts ***!
      \********************************************/

    /*! exports provided: AdminsService */

    /***/
    function uVPj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminsService", function () {
        return AdminsService;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /**
       * This service handles all request to the backend having to do with the admins
       */


      var AdminsService = /*#__PURE__*/function () {
        function AdminsService(http, auth, alert, config, router) {
          _classCallCheck(this, AdminsService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.router = router;
          /**
           * The update event is emitted after every major successful request
           */

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
         * Creates a new admin account
         * @param signUpData Contains the credentials for the account creation
         * @param form Contains the form to be resetted after the creation
         */


        _createClass(AdminsService, [{
          key: "signUpAdmin",
          value: function signUpAdmin(signUpData, form) {
            var _this9 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/register', signUpData, options).subscribe(function (data) {
              if (data.token) {
                _this9.auth.set_jwt(data.token);

                _this9.auth.setLoggedIn(true);

                _this9.router.navigate([_this9.eventName + '/Anmeldung']);
              }

              _this9.alert.alert('Dein Account wurde erfolgreich erstellt!');

              _this9.sendAuthentificationEmail();

              _this9.update.emit();

              form.reset();
            }, function (error) {
              _this9.alert.error('Erstellung des Accounts fehlgeschlagen!', error.error);
            });
          }
          /**
           * Sends the authentification email to the admin associated with the provided token
           */

        }, {
          key: "sendAuthentificationEmail",
          value: function sendAuthentificationEmail() {
            var _this10 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/email/resend', null, options).subscribe(function (data) {
              _this10.alert.alert(data.message);
            }, function (error) {
              _this10.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
            });
          }
          /**
           * Sends the authentification email to the admin associated with the provided token (same as before)
           * @returns RequestObservable
           */

        }, {
          key: "sendAuthentificationEmailSubscribe",
          value: function sendAuthentificationEmailSubscribe() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'admins/email/resend', null, options);
          }
          /**
           * Logs in as admin with the given credentials
           * @param loginData Contains the credentials to be used (email and password)
           * @returns RequestObservable
           */

        }, {
          key: "logInAdmin",
          value: function logInAdmin(loginData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'admins/login', loginData, options);
          }
          /**
           * Logs out the admin associated with the provided token
           */

        }, {
          key: "logOutAdmin",
          value: function logOutAdmin() {
            var _this11 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/logout', null, options).subscribe(function (data) {
              _this11.alert.alert(data.message);

              _this11.auth.setLoggedIn(false);

              _this11.router.navigate([_this11.eventName + '/Anmeldung']);
            }, function (error) {
              _this11.alert.error('Logout fehlgeschlagen!', error.error);
            });
          }
          /**
           * Gets the admin associated with the provided token
           * @returns RequestObservable
           */

        }, {
          key: "getSelfAdmin",
          value: function getSelfAdmin() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/self', options);
          }
          /**
           * Gets all emails that are allowed for the creation of admin accounts
           * @returns RequestObservable
           */

        }, {
          key: "getAllSignUpEmails",
          value: function getAllSignUpEmails() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'sign_up_emails', options);
          }
          /**
           * Authorizes a new email to be used for the creation of an admin account
           * @param emailData Contains the email to be authorized
           * @returns RequestObservable
           */

        }, {
          key: "createSignUpEmail",
          value: function createSignUpEmail(emailData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'sign_up_emails', emailData, options);
          }
          /**
           * Forbids the furter use of an email that was previously allowed for the creation of an admin account
           * @param emailID Contains the id of the email to be forbidden
           */

        }, {
          key: "deleteSignUpEmail",
          value: function deleteSignUpEmail(emailID) {
            var _this12 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'sign_up_emails/' + emailID, options).subscribe(function (data) {
              _this12.alert.alert(data.message);

              _this12.update.emit();
            }, function (error) {
              _this12.alert.error('Sperrung der E-Mail fehlgeschlagen!', error.error);
            });
          }
          /**
           * Creates a sorting proposal
           * @returns RequestObservable
           */

        }, {
          key: "createSortingProposal",
          value: function createSortingProposal() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'admins/create_sorting_proposal', null, options);
          }
          /**
           * Gets the current sorting proposal
           * @returns RequestObservable
           */

        }, {
          key: "requestSortingProposal",
          value: function requestSortingProposal() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/request_sorting_proposal', options);
          }
          /**
           * Updates the current sorting proposal
           * @returns RequestObservable
           */

        }, {
          key: "editSortingProposal",
          value: function editSortingProposal(sortingProposal) {
            var _this13 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/edit_sorting_proposal', sortingProposal, options).subscribe(function (data) {
              _this13.alert.alert(data.message);
            }, function (error) {
              _this13.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
            });
          }
          /**
           * Applies the current sorting proposal to the actual database
           * @returns MessageString
           */

        }, {
          key: "applySortingProposal",
          value: function applySortingProposal() {
            var _this14 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/apply_sorting_proposal', null, options).subscribe(function (data) {
              _this14.alert.alert(data.message);
            }, function (error) {
              _this14.alert.error('Anwendung des Sortiervorschlags fehlgeschlagen!', error.error);
            });
          }
        }]);

        return AdminsService;
      }();

      AdminsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AdminsService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AdminsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map