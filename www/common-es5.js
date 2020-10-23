(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

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
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/admins.service.ts":
    /*!***********************************!*\
      !*** ./src/app/admins.service.ts ***!
      \***********************************/

    /*! exports provided: AdminsService */

    /***/
    function srcAppAdminsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminsService", function () {
        return AdminsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminsService = /*#__PURE__*/function () {
        function AdminsService(http, auth, alert, config, router) {
          _classCallCheck(this, AdminsService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.router = router;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        } // Request having to do with the Admin itself


        _createClass(AdminsService, [{
          key: "signUpAdmin",
          value: function signUpAdmin(signUpData) {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/register', signUpData, options).subscribe(function (data) {
              if (data.token) {
                _this.auth.set_jwt(data.token);

                _this.auth.setLoggedIn(true);

                _this.router.navigate(['Projekttage/Anmeldung']);
              }

              _this.alert.alert('Dein Account wurde erfolgreich erstellt!');

              _this.sendAuthentificationEmail();

              _this.update.emit();
            }, function (error) {
              _this.alert.error('Accounterstellung fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "sendAuthentificationEmail",
          value: function sendAuthentificationEmail() {
            var _this2 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/email/resend', null, options).subscribe(function (data) {
              _this2.alert.alert(data.message);
            }, function (error) {
              _this2.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
            });
          }
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
        }, {
          key: "logOutAdmin",
          value: function logOutAdmin() {
            var _this3 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'admins/logout', null, options).subscribe(function (data) {
              _this3.alert.alert(data.message);

              _this3.auth.setLoggedIn(false);

              _this3.router.navigate(['Projekttage/Anmeldung']);
            }, function (error) {
              _this3.alert.error('Logout fehlgeschlagen!', error.error);
            });
          }
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
        }, {
          key: "getAdmin",
          value: function getAdmin(adminID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/' + adminID, options);
          } // Request having to do with the signUp Tokens for Students

        }, {
          key: "getAllTokens",
          value: function getAllTokens() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'sign_up_tokens', options);
          }
        }, {
          key: "createTokens",
          value: function createTokens(count) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              count: count
            };
            return this.http.post(this.backendUrl + 'sign_up_tokens', sendData, options);
          }
        }, {
          key: "deleteAllTokens",
          value: function deleteAllTokens() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http["delete"](this.backendUrl + 'sign_up_tokens', options);
          } // Request having to do with the SignUpEmails

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
        }, {
          key: "deleteSignUpEmail",
          value: function deleteSignUpEmail(emailID) {
            var _this4 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http["delete"](this.backendUrl + 'sign_up_emails/' + emailID, options).subscribe(function (data) {
              _this4.alert.alert(data.message);

              _this4.update.emit();
            }, function (error) {
              _this4.alert.error('Entfernen der E-mail fehlgeschlagen!', error.error);
            });
          } // Request having to do with the Sorting of the Studnets

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
        }, {
          key: "editSortingProposal",
          value: function editSortingProposal(sortingProposal) {
            var _this5 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/edit_sorting_proposal', sortingProposal, options).subscribe(function (data) {
              _this5.alert.alert(data.message);
            }, function (error) {
              _this5.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "applySortingProposal",
          value: function applySortingProposal() {
            var _this6 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'admins/apply_sorting_proposal', null, options).subscribe(function (data) {
              _this6.alert.alert(data.message);
            }, function (error) {
              _this6.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
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
    },

    /***/
    "./src/app/authentication.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/authentication.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http, router, config, alert) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.router = router;
          this.config = config;
          this.alert = alert;
          this.LoggedIn = false;
          this.JWT = '';
          this.backendUrl = this.config.backend_config.url;
        }

        _createClass(AuthenticationService, [{
          key: "set_jwt",
          value: function set_jwt(Jwt) {
            this.JWT = Jwt;
            localStorage.setItem('jwt', this.jwt);
          }
        }, {
          key: "async_set_jwt",
          value: function async_set_jwt(Jwt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.JWT = Jwt;
                      localStorage.setItem('jwt', this.jwt);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "setLoggedIn",
          value: function setLoggedIn(value) {
            this.LoggedIn = value;

            if (value === false) {
              localStorage.removeItem('jwt');
            }
          }
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
        }, {
          key: "forgotPassword",
          value: function forgotPassword(forgotPasswordData) {
            var _this7 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.JWT
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'auth/password/email', forgotPasswordData, options).subscribe(function (data) {
              _this7.alert.alert(data.message);

              _this7.router.navigate(['Projekttage/Anmeldung']);
            }, function (error) {
              _this7.alert.error('Die E-Mail konnte nicht versandt werden.', error.error);
            });
          }
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
            return this.LoggedIn;
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
    "./src/app/exchanges.service.ts":
    /*!**************************************!*\
      !*** ./src/app/exchanges.service.ts ***!
      \**************************************/

    /*! exports provided: ExchangesService */

    /***/
    function srcAppExchangesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExchangesService", function () {
        return ExchangesService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");

      var ExchangesService = /*#__PURE__*/function () {
        function ExchangesService(http, auth, alert, config) {
          _classCallCheck(this, ExchangesService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        }

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
        }, {
          key: "carryOutExchange",
          value: function carryOutExchange(exchangeID) {
            var _this8 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'admins/accomplish_exchange/' + exchangeID, null, options).subscribe(function (data) {
              _this8.alert.alert(data.message);

              _this8.update.emit();
            }, function (error) {
              _this8.alert.error('Durchführung des Tausches fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "createExchange",
          value: function createExchange(receiverId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              receiver_id: receiverId
            };
            return this.http.post(this.backendUrl + 'students/store_exchange', sendData, options);
          }
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
        }, {
          key: "deleteExchange",
          value: function deleteExchange(ExchangeID) {
            var _this9 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'admins/destroy_exchange/' + ExchangeID, options).subscribe(function (data) {
              _this9.alert.alert(data.message);

              _this9.update.emit();
            }, function (error) {
              _this9.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
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
    "./src/app/leaders.service.ts":
    /*!************************************!*\
      !*** ./src/app/leaders.service.ts ***!
      \************************************/

    /*! exports provided: LeadersService */

    /***/
    function srcAppLeadersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeadersService", function () {
        return LeadersService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LeadersService = /*#__PURE__*/function () {
        function LeadersService(http, auth, alert, config, router) {
          _classCallCheck(this, LeadersService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.router = router;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        }

        _createClass(LeadersService, [{
          key: "signUpLeader",
          value: function signUpLeader(signUpData) {
            var _this10 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'leaders/register', signUpData, options).subscribe(function (data) {
              if (data.token) {
                _this10.auth.set_jwt(data.token);

                _this10.auth.setLoggedIn(true);

                _this10.router.navigate(['Projekttage/Anmeldung']);
              }

              _this10.alert.alert('Dein Account wurde erfolgreich erstellt!');

              _this10.sendAuthentificationEmail();

              _this10.update.emit();
            }, function (error) {
              _this10.alert.error('Accounterstellung fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "sendAuthentificationEmail",
          value: function sendAuthentificationEmail() {
            var _this11 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'leaders/email/resend', null, options).subscribe(function (data) {
              _this11.alert.alert(data.message);
            }, function (error) {
              _this11.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
            });
          }
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
        }, {
          key: "logOutLeader",
          value: function logOutLeader() {
            var _this12 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'leaders/logout', null, options).subscribe(function (data) {
              _this12.alert.alert(data.message);

              _this12.auth.setLoggedIn(false);

              _this12.router.navigate(['Projekttage/Anmeldung']);
            }, function (error) {
              _this12.alert.error('Logout fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "getSelfLeader",
          value: function getSelfLeader() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            }; // tslint:disable-next-line: max-line-length

            return this.http.get(this.backendUrl + 'leaders/self', options);
          }
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
        }, {
          key: "deleteLeader",
          value: function deleteLeader(LeaderID) {
            var _this13 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            }; // tslint:disable-next-line: max-line-length

            this.http["delete"](this.backendUrl + 'admins/destroy_leader/' + LeaderID, options).subscribe(function (data) {
              _this13.alert.alert(data.message);

              _this13.update.emit();
            }, function (error) {
              _this13.alert.error('Löschung des Projektleiters fehlgeschlagen!', error.error);
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
    "./src/app/messages.service.ts":
    /*!*************************************!*\
      !*** ./src/app/messages.service.ts ***!
      \*************************************/

    /*! exports provided: MessagesService */

    /***/
    function srcAppMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");

      var MessagesService = /*#__PURE__*/function () {
        function MessagesService(http, auth, alert, config) {
          _classCallCheck(this, MessagesService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        }

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
            }; // tslint:disable-next-line: max-line-length

            return this.http.post(this.backendUrl + baseUrl + '/store_leaded_project_message', messageData, options);
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage() {
            var _this14 = this;

            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var messageID = arguments.length > 1 ? arguments[1] : undefined;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            }; // tslint:disable-next-line: max-line-length

            return this.http["delete"](this.backendUrl + baseUrl + '/destroy_leaded_project_message/' + messageID, options).subscribe(function () {
              _this14.update.emit();
            }, function (error) {
              _this14.alert.error('Löschung der Nachricht fehlgeschlagen!', error.error);
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
    "./src/app/participants.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/participants.service.ts ***!
      \*****************************************/

    /*! exports provided: ParticipantsService */

    /***/
    function srcAppParticipantsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParticipantsService", function () {
        return ParticipantsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ParticipantsService = /*#__PURE__*/function () {
        function ParticipantsService(http, auth, alert, config, router) {
          _classCallCheck(this, ParticipantsService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.router = router;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        }

        _createClass(ParticipantsService, [{
          key: "signUpParticipant",
          value: function signUpParticipant(signUpData, form) {
            var _this15 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            }; // tslint:disable-next-line: max-line-length

            this.http.post(this.backendUrl + 'students/register', signUpData, options).subscribe(function (data) {
              if (data.token) {
                _this15.auth.set_jwt(data.token);

                _this15.auth.setLoggedIn(true);

                _this15.router.navigate(['Projekttage/Anmeldung']);
              }

              _this15.alert.alert('Dein Account wurde erfolgreich erstellt!');

              _this15.sendAuthentificationEmail();

              _this15.update.emit();

              form.reset();
            }, function (error) {
              _this15.alert.error('Accounterstellung fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "sendAuthentificationEmail",
          value: function sendAuthentificationEmail() {
            var _this16 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'students/email/resend', null, options).subscribe(function (data) {
              _this16.alert.alert(data.message);
            }, function (error) {
              _this16.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
            });
          }
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
            return this.http.post(this.backendUrl + 'students/email/resend', null, options);
          }
        }, {
          key: "logInParticipant",
          value: function logInParticipant(loginData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'students/login', loginData, options);
          }
        }, {
          key: "logOutParticipant",
          value: function logOutParticipant() {
            var _this17 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'students/logout', null, options).subscribe(function (data) {
              _this17.alert.alert(data.message);

              _this17.auth.setLoggedIn(false);

              _this17.router.navigate(['Projekttage/Anmeldung']);
            }, function (error) {
              _this17.alert.error('Logout fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "getSelfParticipant",
          value: function getSelfParticipant() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'students/self', options);
          }
        }, {
          key: "getParticipantID",
          value: function getParticipantID(participantData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'students/id', participantData, options);
          }
        }, {
          key: "getAllParticipantNames",
          value: function getAllParticipantNames() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/little_index_students', options);
          }
        }, {
          key: "getAllStudents",
          value: function getAllStudents(page) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/index_students?page=' + page, options);
          }
        }, {
          key: "getAllSearchedStudents",
          value: function getAllSearchedStudents(searchValue) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              search_value: searchValue
            };
            return this.http.post(this.backendUrl + 'admins/search_index_students', sendData, options);
          }
        }, {
          key: "getFriends",
          value: function getFriends() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'students/friends', options);
          }
        }, {
          key: "promoteStudent",
          value: function promoteStudent(studentID) {
            var _this18 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'students/promote_student/' + studentID, null, options).subscribe(function (data) {
              _this18.alert.alert(data.message);

              _this18.update.emit();
            }, function (error) {
              _this18.alert.error('Ernennung des Assistenten fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "suspendStudent",
          value: function suspendStudent(assistentID) {
            var _this19 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'students/suspend_student/' + assistentID, null, options).subscribe(function (data) {
              _this19.alert.alert(data.message);

              _this19.update.emit();
            }, function (error) {
              _this19.alert.error('Suspendierung des Assistenten fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "quitAssistant",
          value: function quitAssistant() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.put(this.backendUrl + 'students/quit_assistant', null, options);
          }
        }, {
          key: "putSelfParticipant",
          value: function putSelfParticipant(participantData) {
            var _this20 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'students/self_update', participantData, options).subscribe(function () {
              _this20.alert.alert('Erfolgreich registriert!');

              _this20.update.emit();
            }, function (error) {
              _this20.alert.error('Aktualisierung des Accounts fehlgeschlagen!', error.error);
            });
          }
        }]);

        return ParticipantsService;
      }();

      ParticipantsService.ctorParameters = function () {
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

      ParticipantsService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ParticipantsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ParticipantsService);
      /***/
    },

    /***/
    "./src/app/projects.service.ts":
    /*!*************************************!*\
      !*** ./src/app/projects.service.ts ***!
      \*************************************/

    /*! exports provided: ProjectsService */

    /***/
    function srcAppProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService(http, auth, alert, config, router) {
          _classCallCheck(this, ProjectsService);

          this.http = http;
          this.auth = auth;
          this.alert = alert;
          this.config = config;
          this.router = router;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        }

        _createClass(ProjectsService, [{
          key: "getAllProjects",
          value: function getAllProjects() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'projects', options);
          }
        }, {
          key: "getProject",
          value: function getProject(projectID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'projects/' + projectID, options);
          }
        }, {
          key: "getLittleProject",
          value: function getLittleProject(projectID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'projects/show_little/' + projectID, options);
          }
        }, {
          key: "getProjectAdmin",
          value: function getProjectAdmin(projectID) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/project/' + projectID, options);
          }
        }, {
          key: "getSelfProject",
          value: function getSelfProject() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'students/project', options);
          }
        }, {
          key: "getSelfLeadedProject",
          value: function getSelfLeadedProject() {
            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + baseUrl + '/leaded_project', options);
          }
        }, {
          key: "createProject",
          value: function createProject() {
            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var projectData = arguments.length > 1 ? arguments[1] : undefined;
            var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var formData = new FormData();
            formData.append('title', projectData.title);
            formData.append('image', image);
            formData.append('descr', projectData.descr);
            formData.append('leader_name', projectData.leader_name);
            formData.append('cost', projectData.cost);
            formData.append('first_day_begin', projectData.first_day_begin);
            formData.append('first_day_end', projectData.first_day_end);
            formData.append('second_day_begin', projectData.second_day_begin);
            formData.append('second_day_end', projectData.second_day_end);
            formData.append('min_grade', projectData.min_grade);
            formData.append('max_grade', projectData.max_grade);
            formData.append('min_participants', projectData.min_participants);
            formData.append('max_participants', projectData.max_participants);
            return this.http.post(this.backendUrl + baseUrl + '/store_project', formData, options);
          }
        }, {
          key: "toogleAuthorizedProject",
          value: function toogleAuthorizedProject(projectID, authorized) {
            var _this21 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              authorized: authorized
            };
            this.http.put(this.backendUrl + 'admins/toogle_authorized/' + projectID, sendData, options).subscribe(function (data) {
              if (data) {
                _this21.alert.alert(data.message);
              }

              _this21.update.emit();
            }, function (error) {
              _this21.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "toogleEditableProject",
          value: function toogleEditableProject(projectID, editable) {
            var _this22 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              editable: editable
            };
            return this.http.put(this.backendUrl + 'admins/toogle_editable/' + projectID, sendData, options).subscribe(function (data) {
              _this22.alert.alert(data.message);

              _this22.update.emit();
            }, function (error) {
              _this22.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "putProject",
          value: function putProject() {
            var _this23 = this;

            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var projectData = arguments.length > 1 ? arguments[1] : undefined;
            var backUrl = arguments.length > 2 ? arguments[2] : undefined;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + baseUrl + '/update_project', projectData, options).subscribe(function (data) {
              _this23.alert.alert(data.message);

              if (baseUrl === 'students') {
                _this23.router.navigate(['Projekttage/Benutzer/' + backUrl]);
              } else {
                _this23.router.navigate(['Projekttage/Projektleiter/' + backUrl]);
              }

              _this23.update.emit();
            }, function (error) {
              _this23.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "touchUpProject",
          value: function touchUpProject() {
            var _this24 = this;

            var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'students';
            var projectData = arguments.length > 1 ? arguments[1] : undefined;
            var backUrl = arguments.length > 2 ? arguments[2] : undefined;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + baseUrl + '/touch_up_project', projectData, options).subscribe(function (data) {
              _this24.alert.alert(data.message);

              if (baseUrl === 'students') {
                _this24.router.navigate(['Projekttage/Benutzer/' + backUrl]);
              } else {
                _this24.router.navigate(['Projekttage/Projektleiter/' + backUrl]);
              }

              _this24.update.emit();
            }, function (error) {
              _this24.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(projectID) {
            var _this25 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'admins/destroy_project/' + projectID, options).subscribe(function (data) {
              _this25.alert.alert(data.message);

              _this25.update.emit();
            }, function (error) {
              _this25.alert.error('Löschen des Projektes fehlgeschlagen!', error.error);
            });
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ctorParameters = function () {
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

      ProjectsService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProjectsService);
      /***/
    },

    /***/
    "./src/app/schedule.service.ts":
    /*!*************************************!*\
      !*** ./src/app/schedule.service.ts ***!
      \*************************************/

    /*! exports provided: ScheduleService */

    /***/
    function srcAppScheduleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduleService", function () {
        return ScheduleService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/authentication.service.ts");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config.service */
      "./src/app/config.service.ts");

      var ScheduleService = /*#__PURE__*/function () {
        function ScheduleService(http, auth, config) {
          _classCallCheck(this, ScheduleService);

          this.http = http;
          this.auth = auth;
          this.config = config;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.backendUrl = this.config.backend_config.url;
        }

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
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map