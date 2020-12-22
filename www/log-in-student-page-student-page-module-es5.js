(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-student-page-module"], {
    /***/
    "PGfu":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/student-page.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PGfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Schüler</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\" text-wrap>Willkommen {{ loadedStudent.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedStudent.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.registration\" routerLink='./{{ projectsNoun }}'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"apps\"></ion-icon>Alle {{ projectsNoun }}\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.registration && currentDate <= schedule.sort_students\" [routerLink]=\"['./Anmeldung']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"log-in\"></ion-icon>Anmeldedaten eingeben\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"loadedStudent.role === 1 && loadedStudent.project_id != 0 && currentDate > schedule.exchange && currentDate <= schedule.projects\" [routerLink]=\"['./Tauschanfrage senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Tauschanfragen senden\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"loadedStudent.role === 1 && loadedStudent.exchange_requests.length > 0 && loadedStudent.project_id != 0 && loadedStudent.exchange_id == 0 && currentDate > schedule.exchange && currentDate <= schedule.projects\" [routerLink]=\"['./Tauschanfrage bestätigen']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"swap-horizontal\"></ion-icon>Tauschanfrage bestätigen\n          <ion-badge color=\"buttons\" slot=\"end\">{{ loadedStudent.exchange_requests.length }}</ion-badge>\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"loadedStudent.role === 1 && loadedStudent.project_id != 0\" routerLink='./{{ projectNoun }}'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>{{ projectNoun }} einsehen\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedStudent.project_id == 0 && loadedStudent.role === 1 && studentsCanCreateProjects\" routerLink='./{{ projectNoun }} erstellen'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>{{ projectNoun }} erstellen\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"loadedStudent.role === 2 && loadedStudent.project_id != 0 && studentsCanCreateProjects\" routerLink='./{{ projectNoun }} verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>{{ projectNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedStudent.role === 2 && loadedStudent.project_id != 0 && studentsCanCreateProjects\" [routerLink]=\"['./Assistenten verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>Assistenten verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedStudent.email_verified_at == null\" color=\"items\" *ngIf=\"loadedStudent.role === 2 && loadedStudent.project_id != 0 && studentsCanCreateProjects\" [routerLink]=\"['./Nachricht senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Nachricht senden\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "Xlih":
    /*!************************************************************!*\
      !*** ./src/app/log-in/student-page/student-page.module.ts ***!
      \************************************************************/

    /*! exports provided: StudentPagePageModule */

    /***/
    function Xlih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentPagePageModule", function () {
        return StudentPagePageModule;
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


      var _student_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-page.page */
      "Z6L9");

      var routes = [{
        path: '',
        component: _student_page_page__WEBPACK_IMPORTED_MODULE_6__["StudentPagePage"]
      }];

      var StudentPagePageModule = function StudentPagePageModule() {
        _classCallCheck(this, StudentPagePageModule);
      };

      StudentPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_student_page_page__WEBPACK_IMPORTED_MODULE_6__["StudentPagePage"]]
      })], StudentPagePageModule);
      /***/
    },

    /***/
    "Z6L9":
    /*!**********************************************************!*\
      !*** ./src/app/log-in/student-page/student-page.page.ts ***!
      \**********************************************************/

    /*! exports provided: StudentPagePage */

    /***/
    function Z6L9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentPagePage", function () {
        return StudentPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_student_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./student-page.page.html */
      "PGfu");
      /* harmony import */


      var _student_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./student-page.page.scss */
      "ydiP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/students.service */
      "ZvwH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_exchanges_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/exchanges.service */
      "hQbD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");

      var StudentPagePage = /*#__PURE__*/function () {
        function StudentPagePage(activatedRoute, router, exchangesService, studentsService, projectsService, scheduleService, config, alert) {
          _classCallCheck(this, StudentPagePage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.exchangesService = exchangesService;
          this.studentsService = studentsService;
          this.projectsService = projectsService;
          this.scheduleService = scheduleService;
          this.config = config;
          this.alert = alert;
          this.subscriptions = [];
          this.loadedStudent = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
            exchange_id: 0,
            exchange_requests: [],
            first_friend: 0,
            second_friend: 0,
            third_friend: 0,
            first_wish: 0,
            second_wish: 0,
            third_wish: 0,
            project_id: 0,
            role: 1
          };
          /**
           * Contains the time schedule of the application
           */

          this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
          };
          this.buttonPressed = true;
          this.projectNoun = this.config.app_config.project_noun;
          this.projectsNoun = this.config.app_config.projects_noun;
          this.studentsCanCreateProjects = this.config.app_config.students_can_create_projects;
        }

        _createClass(StudentPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('user-page');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }
            });
            this.getSchedule();
            this.getStudent();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }), this.studentsService.update.subscribe(function () {
              return _this.getStudent();
            }), this.projectsService.update.subscribe(function () {
              return _this.getStudent();
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
          key: "getStudent",
          value: function getStudent() {
            var _this3 = this;

            this.studentsService.getSelfStudent().subscribe(function (data) {
              _this3.loadedStudent = data.data;
              _this3.loadedStudent.exchange_requests = [];

              if (_this3.currentDate > _this3.schedule.exchange && _this3.currentDate <= _this3.schedule.projects) {
                _this3.exchangesService.getAllExchangesForParticipant().subscribe(function (requestData) {
                  _this3.loadedStudent.exchange_requests = requestData.data;
                });
              }

              if (_this3.loadedStudent.email_verified_at == null) {
                _this3.buttonPressed = false;
              }
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this4 = this;

            this.getStudent();
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this4.schedule = data.data;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.studentsService.logOutStudent();
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            var _this5 = this;

            this.studentsService.sendAuthentificationEmailSubscribe().subscribe(function (data) {
              _this5.alert.alert(data.message);

              _this5.buttonPressed = true;
            }, function (error) {
              _this5.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
            });
          }
        }]);

        return StudentPagePage;
      }();

      StudentPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_exchanges_service__WEBPACK_IMPORTED_MODULE_6__["ExchangesService"]
        }, {
          type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_9__["ScheduleService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"]
        }];
      };

      StudentPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-page',
        template: _raw_loader_student_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [_student_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StudentPagePage);
      /***/
    },

    /***/
    "ydiP":
    /*!************************************************************!*\
      !*** ./src/app/log-in/student-page/student-page.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function ydiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LXBhZ2UucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-student-page-student-page-module-es5.js.map