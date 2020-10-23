(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-promote-students-promote-students-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/promote-students/promote-students.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/promote-students/promote-students.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInUserPagePromoteStudentsPromoteStudentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Benutzer/{{ participantUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Assistenten verwalten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"loadedUser.role === 2\" class=\"content\">\n    <ion-card-header>\n      <ion-title>\n        <h1>Assistenten verwalten</h1>\n      </ion-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card color=\"background\" *ngIf=\"loadedUser.project_id != 0 && leadedProject.leader_id == loadedUser.id\">\n      <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"promoteStudent()\">\n        <ion-item color=\"items\">\n          <ion-input required color=\"text\" type=\"text\" placeholder=\"Vorname\" [(ngModel)]=\"declaredAssistant.first_name\" name=\"ExchangeSecondFirstName\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-input required color=\"text\" type=\"text\" placeholder=\"Nachname\" [(ngModel)]=\"declaredAssistant.last_name\" name=\"ExchangeSecondLastName\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n          <ion-select required [selectedText]=\"declaredAssistant.grade\" name=\"ParticipantGrade\" [(ngModel)]=\"declaredAssistant.grade\">\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-radio-group required color=\"buttons\" name=\"ParticipantClass\" [(ngModel)]=\"declaredAssistant.letter\">\n            <ion-item color=\"items\" lines=\"none\">\n              <ion-label color=\"text\">A </ion-label>\n              <ion-radio color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"items\" lines=\"none\">\n              <ion-label color=\"text\">B </ion-label>\n              <ion-radio color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"items\" lines=\"none\">\n              <ion-label color=\"text\">C </ion-label>\n              <ion-radio color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"items\" lines=\"none\">\n              <ion-label color=\"text\">D </ion-label>\n              <ion-radio color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid || leadedProject.leader_id != loadedUser.id\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Als Assistent auszeichnen</ion-button>\n        </div>\n      </form>\n    </ion-card>\n    <ion-card color=\"background\" *ngIf=\"leadedProject.leader_id != loadedUser.id\" class=\"content\">\n      <ion-card-content>\n        <ion-text color=\"danger\">{{ studentNoAssistantsEditByAssistants }}</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <ion-card-content *ngIf=\"loadedUser.project_id != 0 && leadedProject.leader_id == loadedUser.id\">\n      <ion-item-group>\n        <ion-item-divider *ngIf=\"leadedProject.assistant_student_leaders.length\" color=\"background\">\n          <ion-label color=\"text\">Assistenten</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"leadedProject.assistant_student_leaders.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of leadedProject.assistant_student_leaders\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n            <ion-buttons *ngIf=\"leadedProject.leader_id == loadedUser.id\" (click)=\"suspendStudent(assistant.id)\"><ion-icon color=\"danger\" name=\"arrow-down\"></ion-icon></ion-buttons>\n          </ion-item>\n        </div>\n      </ion-item-group>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"leadedProject.leader_id != loadedUser.id\">\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"quitAssistent()\">Assistent 'kündigen'</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/log-in/user-page/promote-students/promote-students-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/log-in/user-page/promote-students/promote-students-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: PromoteStudentsPageRoutingModule */

    /***/
    function srcAppLogInUserPagePromoteStudentsPromoteStudentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromoteStudentsPageRoutingModule", function () {
        return PromoteStudentsPageRoutingModule;
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


      var _promote_students_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./promote-students.page */
      "./src/app/log-in/user-page/promote-students/promote-students.page.ts");

      var routes = [{
        path: '',
        component: _promote_students_page__WEBPACK_IMPORTED_MODULE_3__["PromoteStudentsPage"]
      }];

      var PromoteStudentsPageRoutingModule = function PromoteStudentsPageRoutingModule() {
        _classCallCheck(this, PromoteStudentsPageRoutingModule);
      };

      PromoteStudentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PromoteStudentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/log-in/user-page/promote-students/promote-students.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/log-in/user-page/promote-students/promote-students.module.ts ***!
      \******************************************************************************/

    /*! exports provided: PromoteStudentsPageModule */

    /***/
    function srcAppLogInUserPagePromoteStudentsPromoteStudentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromoteStudentsPageModule", function () {
        return PromoteStudentsPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _promote_students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./promote-students-routing.module */
      "./src/app/log-in/user-page/promote-students/promote-students-routing.module.ts");
      /* harmony import */


      var _promote_students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./promote-students.page */
      "./src/app/log-in/user-page/promote-students/promote-students.page.ts");

      var PromoteStudentsPageModule = function PromoteStudentsPageModule() {
        _classCallCheck(this, PromoteStudentsPageModule);
      };

      PromoteStudentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _promote_students_routing_module__WEBPACK_IMPORTED_MODULE_5__["PromoteStudentsPageRoutingModule"]],
        declarations: [_promote_students_page__WEBPACK_IMPORTED_MODULE_6__["PromoteStudentsPage"]]
      })], PromoteStudentsPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/user-page/promote-students/promote-students.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/log-in/user-page/promote-students/promote-students.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInUserPagePromoteStudentsPromoteStudentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLXBhZ2UvcHJvbW90ZS1zdHVkZW50cy9wcm9tb3RlLXN0dWRlbnRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/log-in/user-page/promote-students/promote-students.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/log-in/user-page/promote-students/promote-students.page.ts ***!
      \****************************************************************************/

    /*! exports provided: PromoteStudentsPage */

    /***/
    function srcAppLogInUserPagePromoteStudentsPromoteStudentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromoteStudentsPage", function () {
        return PromoteStudentsPage;
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


      var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/projects.service */
      "./src/app/projects.service.ts");
      /* harmony import */


      var src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/participants.service */
      "./src/app/participants.service.ts");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/alert.service */
      "./src/app/alert.service.ts");

      var PromoteStudentsPage = /*#__PURE__*/function () {
        function PromoteStudentsPage(activatedRoute, router, projectsService, participantsService, config, alertCtrl, alert) {
          _classCallCheck(this, PromoteStudentsPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.projectsService = projectsService;
          this.participantsService = participantsService;
          this.config = config;
          this.alertCtrl = alertCtrl;
          this.alert = alert;
          this.loadedUser = {
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
            role: 2
          };
          this.leadedProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
            leader_type: '',
            leader_id: 0,
            cost: 0,
            first_day_begin: {
              hours: 0,
              minutes: 0
            },
            first_day_end: {
              hours: 0,
              minutes: 0
            },
            second_day_begin: {
              hours: 0,
              minutes: 0
            },
            second_day_end: {
              hours: 0,
              minutes: 0
            },
            min_grade: 0,
            max_grade: 0,
            min_participants: 0,
            max_participants: 0,
            messages: [],
            participants: [],
            assistant_student_leaders: []
          };
          this.declaredAssistant = {
            id: 0,
            first_name: '',
            last_name: '',
            grade: 0,
            letter: ''
          };
          this.studentNoAssistantsEditByAssistants = '';
        }

        _createClass(PromoteStudentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('promote-students');
            this.studentNoAssistantsEditByAssistants = this.config.get_error('student-no_assistants_edit_by_assistants');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.participantUrl = paramMap.get('ParticipantName');
            });
            this.getProject();
            this.getStudent();
            this.participantsService.update.subscribe(function () {
              return _this.getProject();
            });
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this2 = this;

            this.projectsService.getSelfLeadedProject('students').subscribe(function (data) {
              _this2.leadedProject = data.data;
            });
          }
        }, {
          key: "getStudent",
          value: function getStudent() {
            var _this3 = this;

            this.participantsService.getSelfParticipant().subscribe(function (data) {
              _this3.loadedUser = data.data;
            });
          }
        }, {
          key: "promoteStudent",
          value: function promoteStudent() {
            var _this4 = this;

            this.participantsService.getParticipantID(this.declaredAssistant).subscribe(function (data) {
              if (data.id !== 0) {
                _this4.participantsService.promoteStudent(data.id);
              } else {
                _this4.alertCtrl.create({
                  header: 'Fehler',
                  message: 'Der angegebene Schüler konnte nicht gefunden werden!',
                  buttons: [{
                    text: 'Ok',
                    role: 'cancel'
                  }]
                }).then(function (alertEl) {
                  alertEl.present();
                });
              }
            });
          }
        }, {
          key: "suspendStudent",
          value: function suspendStudent(assistentID) {
            this.participantsService.suspendStudent(assistentID);
          }
        }, {
          key: "quitAssistent",
          value: function quitAssistent() {
            var _this5 = this;

            this.participantsService.quitAssistant().subscribe(function (data) {
              _this5.alert.alert(data.message);

              _this5.router.navigate(['Projekttage/Benutzer/' + _this5.participantUrl]);

              _this5.participantsService.update.emit();
            }, function (error) {
              _this5.alert.error('Kündigung als Assistent fehlgeschlagen!', error.error);
            });
          }
        }]);

        return PromoteStudentsPage;
      }();

      PromoteStudentsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
        }, {
          type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantsService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }];
      };

      PromoteStudentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promote-students',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./promote-students.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/promote-students/promote-students.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./promote-students.page.scss */
        "./src/app/log-in/user-page/promote-students/promote-students.page.scss"))["default"]]
      })], PromoteStudentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-user-page-promote-students-promote-students-module-es5.js.map