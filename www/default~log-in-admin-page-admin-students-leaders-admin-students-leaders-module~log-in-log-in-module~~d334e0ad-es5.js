(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"], {
    /***/
    "ZvwH":
    /*!**********************************************!*\
      !*** ./src/app/services/students.service.ts ***!
      \**********************************************/

    /*! exports provided: StudentsService */

    /***/
    function ZvwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsService", function () {
        return StudentsService;
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
       * This service handles all request to the backend having to do with the students
       */


      var StudentsService = /*#__PURE__*/function () {
        function StudentsService(http, auth, alert, config, router) {
          _classCallCheck(this, StudentsService);

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
         * Creates a new student account
         * @param signUpData Contains the credentials for the account creation
         * @param form Contains the form to be resetted after the creation
         */


        _createClass(StudentsService, [{
          key: "signUpStudent",
          value: function signUpStudent(signUpData, form) {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            this.http.post(this.backendUrl + 'students/register', signUpData, options).subscribe(function (data) {
              if (data.token) {
                _this.auth.set_jwt(data.token);

                _this.auth.setLoggedIn(true);

                _this.router.navigate([_this.eventName + '/Anmeldung']);
              }

              _this.alert.alert('Dein Account wurde erfolgreich erstellt!');

              _this.sendAuthentificationEmail();

              _this.update.emit();

              form.reset();
            }, function (error) {
              _this.alert.error('Erstellung des Accounts fehlgeschlagen!', error.error);
            });
          }
          /**
           * Sends the authentification email to the student associated with the provided token
           */

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
            this.http.post(this.backendUrl + 'students/email/resend', null, options).subscribe(function (data) {
              _this2.alert.alert(data.message);
            }, function (error) {
              _this2.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
            });
          }
          /**
           * Sends the authentification email to the student associated with the provided token (same as before)
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
            return this.http.post(this.backendUrl + 'students/email/resend', null, options);
          }
          /**
           * Logs in as student with the given credentials
           * @param loginData Contains the credentials to be used (email and password)
           * @returns RequestObservable
           */

        }, {
          key: "logInStudent",
          value: function logInStudent(loginData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'students/login', loginData, options);
          }
          /**
           * Logs out the student associated with the provided token
           */

        }, {
          key: "logOutStudent",
          value: function logOutStudent() {
            var _this3 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'students/logout', null, options).subscribe(function (data) {
              _this3.alert.alert(data.message);

              _this3.auth.setLoggedIn(false);

              _this3.router.navigate([_this3.eventName + '/Anmeldung']);
            }, function (error) {
              _this3.alert.error('Logout fehlgeschlagen!', error.error);
            });
          }
          /**
           * Gets the student associated with the provided token
           * @returns RequestObservable
           */

        }, {
          key: "getSelfStudent",
          value: function getSelfStudent() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'students/self', options);
          }
          /**
           * Gets the id of an given student
           * @param studentData Contains the student
           * @returns RequestObservable
           */

        }, {
          key: "getStudentID",
          value: function getStudentID(studentData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.post(this.backendUrl + 'students/id', studentData, options);
          }
          /**
           * Gets all names of all students
           * @returns RequestObservable
           */

        }, {
          key: "getAllStudentNames",
          value: function getAllStudentNames() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            return this.http.get(this.backendUrl + 'admins/little_index_students', options);
          }
          /**
           * Gets all students of the given page
           * @param page Contains the number of the page
           * @returns RequestObservable
           */

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
          /**
           * Gets all students that are relevant for the search
           * @param searchValue Contains a string value of the search
           * @returns RequestObservable
           */

        }, {
          key: "getAllSearchedStudents",
          value: function getAllSearchedStudents(searchStudent) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            var sendData = {
              search_email: searchStudent.email,
              search_first_name: searchStudent.first_name,
              search_last_name: searchStudent.last_name,
              search_class: searchStudent["class"]
            };
            return this.http.post(this.backendUrl + 'admins/search_index_students', sendData, options);
          }
          /**
           * Gets all friends of the student associated with the provided token
           * @returns RequestObservable
           */

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
          /**
           * Makes the student with the given id a assistant leader in the project of the student associated
           *              with the provided token
           * @param studentID Contains the id of the student to be promoted
           */

        }, {
          key: "promoteStudent",
          value: function promoteStudent(studentID) {
            var _this4 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'students/promote_student/' + studentID, null, options).subscribe(function (data) {
              _this4.alert.alert(data.message);

              _this4.update.emit();
            }, function (error) {
              _this4.alert.error('Ernennung des Assistenten fehlgeschlagen!', error.error);
            });
          }
          /**
           * Suspends the assistent leader with the given id as assistant leader in the project of the student
           *              associated with the provided token
           * @param assistentID Contains the id of the assistent leader to be suspended
           */

        }, {
          key: "suspendStudent",
          value: function suspendStudent(assistentID) {
            var _this5 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'students/suspend_student/' + assistentID, null, options).subscribe(function (data) {
              _this5.alert.alert(data.message);

              _this5.update.emit();
            }, function (error) {
              _this5.alert.error('Suspendierung des Assistenten fehlgeschlagen!', error.error);
            });
          }
          /**
           * Removes the assistant leader role of the student associated with the provided token
           * @returns RequestObservable
           */

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
          /**
           * Updates the student associated with the provided token
           * @param studentData Contains the updated student
           * @param backUrl Contains the url that the user should be navigated to after a successful update
           */

        }, {
          key: "putSelfStudent",
          value: function putSelfStudent(studentData, backUrl) {
            var _this6 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http.put(this.backendUrl + 'students/self_update', studentData, options).subscribe(function () {
              _this6.alert.alert('Der Account wurde erfolgreich aktualisiert!');

              _this6.router.navigate([_this6.eventName + '/Schüler/' + backUrl]);

              _this6.update.emit();
            }, function (error) {
              _this6.alert.error('Aktualisierung des Accounts fehlgeschlagen!', error.error);
            });
          }
        }]);

        return StudentsService;
      }();

      StudentsService.ctorParameters = function () {
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

      StudentsService.propDecorators = {
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      StudentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StudentsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad-es5.js.map