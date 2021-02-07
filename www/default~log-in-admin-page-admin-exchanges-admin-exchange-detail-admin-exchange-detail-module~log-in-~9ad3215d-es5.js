(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d"], {
    /***/
    "CoJz":
    /*!**********************************************!*\
      !*** ./src/app/services/projects.service.ts ***!
      \**********************************************/

    /*! exports provided: ProjectsService */

    /***/
    function CoJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
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
       * This service handles all request to the backend having to do with the projects
       */


      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService(http, auth, alert, config, router) {
          _classCallCheck(this, ProjectsService);

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
         * Gets all projects
         * @returns RequestObservable
         */


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
          /**
           * Gets the project with the given id
           * @param projectID Contains the id of the project
           * @returns RequestObservable
           */

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
          /**
           * Gets some of the project data with the given id
           * @param projectID Contains the id of the project
           * @returns RequestObservable
           */

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
          /**
           * Gets the project data available to an admin with the given id
           * @param projectID Contains the id of the project
           * @returns RequestObservable
           */

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
          /**
           * Gets the project of the student associated with the provided token
           * @returns RequestObservable
           */

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
          /**
           * Gets the leaded project of the student or leader associated with the provided token
           * @param baseUrl Contains for which type of user accout this request is (students or leaders)
           * @returns RequestObservable
           */

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
          /**
           * Creates a new project
           * @param baseUrl Contains for which type of user accout this request is (students or leaders)
           * @param projectData Contains the new project
           * @param image Contains the image of the new project
           * @returns RequestObservable
           */

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
          /**
           * Updates the authorization of the project with the given id
           * @param projectID Contains the id of the project to be un-/auhorized
           * @param authorized Contains the new value for authorized
           */

        }, {
          key: "toogleAuthorizedProject",
          value: function toogleAuthorizedProject(projectID, authorized) {
            var _this = this;

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
                _this.alert.alert(data.message);
              }

              _this.update.emit();
            }, function (error) {
              _this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
          /**
           * Updates the editability of the project with the given id
           * @param projectID Contains the id of the project to be un-/editable
           * @param editable Contains the new value for editable
           */

        }, {
          key: "toogleEditableProject",
          value: function toogleEditableProject(projectID, editable) {
            var _this2 = this;

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
            this.http.put(this.backendUrl + 'admins/toogle_editable/' + projectID, sendData, options).subscribe(function (data) {
              _this2.alert.alert(data.message);

              _this2.update.emit();
            }, function (error) {
              _this2.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
          /**
           * Updates the project of the student/leader associated with the provided token
           * @param baseUrl Contains for which type of user accout this request is (students or leaders)
           * @param projectData Contains the new project data
           * @param backUrl Contains the url that the user should be navigated to after a successful update
           */

        }, {
          key: "putProject",
          value: function putProject() {
            var _this3 = this;

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
              _this3.alert.alert(data.message);

              if (baseUrl === 'students') {
                _this3.router.navigate([_this3.eventName + '/Schüler/' + backUrl]);
              } else {
                _this3.router.navigate([_this3.eventName + '/' + _this3.projectNoun + 'leiter/' + backUrl]);
              }

              _this3.update.emit();
            }, function (error) {
              _this3.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
          /**
           * Updates the project of the student/leader associated with the provided token even after the actual
           *              deadline if ediatble allows it
           * @param baseUrl Contains for which type of user accout this request is (students or leaders)
           * @param projectData Contains the new project data
           * @param backUrl Contains the url that the user should be navigated to after a successful update
           */

        }, {
          key: "touchUpProject",
          value: function touchUpProject() {
            var _this4 = this;

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
              _this4.alert.alert(data.message);

              if (baseUrl === 'students') {
                _this4.router.navigate([_this4.eventName + '/Schüler/' + backUrl]);
              } else {
                _this4.router.navigate([_this4.eventName + '/' + _this4.projectNoun + 'leiter/' + backUrl]);
              }

              _this4.update.emit();
            }, function (error) {
              _this4.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
            });
          }
          /**
           * Deletes the project with the given id
           * @param projectID Contains the id of the project to be deleted
           */

        }, {
          key: "deleteProject",
          value: function deleteProject(projectID) {
            var _this5 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.auth.jwt
            });
            var options = {
              headers: headers
            };
            this.http["delete"](this.backendUrl + 'admins/destroy_project/' + projectID, options).subscribe(function (data) {
              _this5.alert.alert(data.message);

              _this5.update.emit();
            }, function (error) {
              _this5.alert.error('Löschung des Projektes fehlgeschlagen!', error.error);
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
    }
  }]);
})();
//# sourceMappingURL=default~log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module~log-in-~9ad3215d-es5.js.map