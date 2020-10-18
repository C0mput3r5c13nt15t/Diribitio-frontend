(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-project-administration-project-administration-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project-administration/project-administration.page.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project-administration/project-administration.page.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInUserPageProjectAdministrationProjectAdministrationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n      <ion-button color=\"buttons\" slot=\"start\">\n        <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Benutzer/{{ participantUrl }}\"></ion-back-button>\n      </ion-button>\n      <ion-title>{{ projectNoun }}</ion-title>\n      <ion-button color=\"buttons\" [routerLink]=\"['./Projekt bearbeiten']\" slot=\"end\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content color=\"background\">\n    <ion-card color=\"background\" *ngIf=\"leadedProject.leader_id == null && leadedProject.title == null && leadedProject.authorized == null\" class=\"content\">\n      <ion-card-content>\n        <ion-text color=\"danger\">{{ studentLoadingProject }}</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <ion-card color=\"background\" *ngIf=\"loadedUser.role === 2\" class=\"content\">\n      <ion-img *ngIf=\"leadedProject.image != '' && leadedProject.image != null\" [src]='\"http://fama-4/storage/images/\" + leadedProject.image'></ion-img>\n      <ion-card-header>\n        <ion-title>\n          <h1>{{ leadedProject.title }}</h1>\n        </ion-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item-group>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-text color=\"text\">{{ leadedProject.descr }}</ion-text>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Leiter</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">{{ leadedProject.leader_name }}</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Kosten</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">{{ leadedProject.cost }}€</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Zeitraum</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">1.Tag:  {{ leadedProject.first_day_begin }} bis {{ leadedProject.first_day_end }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">2.Tag:  {{ leadedProject.second_day_begin }} bis {{ leadedProject.second_day_end }}</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">{{ leadedProject.min_grade }}. bis {{ leadedProject.max_grade }}.Klasse</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">von {{ leadedProject.min_participants }} bis {{ leadedProject.max_participants }}</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Nachrichten</ion-label>\n          </ion-item-divider>\n          <div *ngIf=\"leadedProject.messages.length\">\n            <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of leadedProject.messages\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\">{{ message.message }}</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Teilnehmer</ion-label>\n          </ion-item-divider>\n          <div *ngIf=\"leadedProject.leader_type === 'App\\\\Student' && leadedProject.leader_id == loadedUser.id\">\n            <ion-item color=\"items\" lines=\"none\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ loadedUser.first_name }} {{ loadedUser.last_name }} {{ loadedUser.grade }}{{ loadedUser.letter }} (eigener Account)</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <div *ngIf=\"leadedProject.assistant_student_leaders.length\">\n            <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of leadedProject.assistant_student_leaders\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <div *ngIf=\"leadedProject.participants.length\">\n            <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of leadedProject.participants\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button color=\"buttons\" *ngIf=\"!!+leadedProject.editable == false || currentDate <= this.schedule.control || currentDate > this.schedule.registration\" [disabled]=\"leadedProject.leader_id != loadedUser.id || currentDate <= this.schedule.begin || currentDate > this.schedule.control\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" [routerLink]=\"['./Projekt bearbeiten']\" slot=\"end\">{{ projectNoun }} bearbeiten</ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"leadedProject.leader_id == loadedUser.id && currentDate > this.schedule.control && currentDate <= this.schedule.registration && !!+leadedProject.editable == true\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" [routerLink]=\"['./Projekt bearbeiten']\" slot=\"end\">{{ projectNoun }} nachbessern</ion-button>\n            <ion-text *ngIf=\"leadedProject.leader_id != loadedUser.id\" color=\"text\">{{ studentNoProjectEditByAssistants }}</ion-text>\n            <ion-text *ngIf=\"currentDate <= this.schedule.begin && !!+leadedProject.editable == false || currentDate > this.schedule.control && !!+leadedProject.editable == false\" color=\"text\">{{ studentWrongTime }}</ion-text>\n          </div>\n        </ion-item-group>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/user-page/project-administration/project-administration.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/log-in/user-page/project-administration/project-administration.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: ProjectAdministrationPageModule */

    /***/
    function srcAppLogInUserPageProjectAdministrationProjectAdministrationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectAdministrationPageModule", function () {
        return ProjectAdministrationPageModule;
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


      var _project_administration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project-administration.page */
      "./src/app/log-in/user-page/project-administration/project-administration.page.ts");

      var routes = [{
        path: '',
        component: _project_administration_page__WEBPACK_IMPORTED_MODULE_6__["ProjectAdministrationPage"]
      }];

      var ProjectAdministrationPageModule = function ProjectAdministrationPageModule() {
        _classCallCheck(this, ProjectAdministrationPageModule);
      };

      ProjectAdministrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_project_administration_page__WEBPACK_IMPORTED_MODULE_6__["ProjectAdministrationPage"]]
      })], ProjectAdministrationPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/user-page/project-administration/project-administration.page.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/log-in/user-page/project-administration/project-administration.page.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInUserPageProjectAdministrationProjectAdministrationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL3VzZXItcGFnZS9wcm9qZWN0LWFkbWluaXN0cmF0aW9uL3Byb2plY3QtYWRtaW5pc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vdXNlci1wYWdlL3Byb2plY3QtYWRtaW5pc3RyYXRpb24vcHJvamVjdC1hZG1pbmlzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byBhdXRvIGF1dG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/log-in/user-page/project-administration/project-administration.page.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/log-in/user-page/project-administration/project-administration.page.ts ***!
      \****************************************************************************************/

    /*! exports provided: ProjectAdministrationPage */

    /***/
    function srcAppLogInUserPageProjectAdministrationProjectAdministrationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectAdministrationPage", function () {
        return ProjectAdministrationPage;
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


      var src_app_participants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/participants.service */
      "./src/app/participants.service.ts");
      /* harmony import */


      var src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/projects.service */
      "./src/app/projects.service.ts");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/schedule.service */
      "./src/app/schedule.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ProjectAdministrationPage = /*#__PURE__*/function () {
        function ProjectAdministrationPage(activatedRoute, router, projectsService, scheduleService, participantsService, config) {
          _classCallCheck(this, ProjectAdministrationPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.projectsService = projectsService;
          this.scheduleService = scheduleService;
          this.participantsService = participantsService;
          this.config = config;
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
        }

        _createClass(ProjectAdministrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.projectNoun = this.config.app_config.project_noun;
            this.studentNoProjectEditByAssistants = this.config.get_error('student-no_project_edit_by_assistants');
            this.studentLoadingProject = this.config.get_error('student-loading_project');
            this.studentWrongTime = this.config.get_error('student-wrong_time');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.participantUrl = paramMap.get('ParticipantName');
            });
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this.schedule = data.data;
            });
            this.getProject();
            this.getStudent();
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
        }]);

        return ProjectAdministrationPage;
      }();

      ProjectAdministrationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }, {
          type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"]
        }, {
          type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantsService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      };

      ProjectAdministrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-administration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./project-administration.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project-administration/project-administration.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./project-administration.page.scss */
        "./src/app/log-in/user-page/project-administration/project-administration.page.scss"))["default"]]
      })], ProjectAdministrationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-user-page-project-administration-project-administration-module-es5.js.map