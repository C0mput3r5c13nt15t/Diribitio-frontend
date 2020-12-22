(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-student-project-administration-student-project-edit-student-project-edit-module"], {
    /***/
    "2gVb":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/student-project-administration/student-project-edit/student-project-edit.page.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gVb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }} bearbeiten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ProjectForm\" (ngSubmit)=\"submit()\" #Formular>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectLeader\" [(ngModel)]=\"editProject.leader_name\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}name</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectName\" [(ngModel)]=\"editProject.title\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}beschreibung</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-textarea required type=\"text\" name=\"ProjectDescr\" [(ngModel)]=\"editProject.descr\" rows=\"7\"></ion-textarea>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectCost\" [(ngModel)]=\"editProject.cost\" required type=\"number\"></ion-input>€\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">1.Tag</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectFirstTimeBeginn\" [(ngModel)]=\"editProject.first_day_begin\" type=\"time\"></ion-input>\n        </ion-item> \n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectFirstTimeEnd\" [(ngModel)]=\"editProject.first_day_end\" type=\"time\"></ion-input>\n        </ion-item> \n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">2.Tag</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectSecondTimeBeginn\" [(ngModel)]=\"editProject.second_day_begin\" type=\"time\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectSecondTimeEnd\" [(ngModel)]=\"editProject.second_day_end\" type=\"time\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von</ion-label>\n          <ion-select required name=\"ProjectMinClass\" [(ngModel)]=\"editProject.min_grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">bis</ion-label>\n          <ion-select required name=\"ProjectMaxClass\" [(ngModel)]=\"editProject.max_grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n            <ion-select-option selected value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectMinParticipants\" [(ngModel)]=\"editProject.min_participants\" required type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectMaxParticipants\" [(ngModel)]=\"editProject.max_participants\" required type=\"number\"></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid || editProject.leader_id != loadedStudent.id\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Änderungen speichern</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "5z/F":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/log-in/student-page/student-project-administration/student-project-edit/student-project-edit.page.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input {\n  -moz-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0dWRlbnQtcHJvamVjdC1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FBQUoiLCJmaWxlIjoic3R1ZGVudC1wcm9qZWN0LWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlucHV0IHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "Ls5q":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/log-in/student-page/student-project-administration/student-project-edit/student-project-edit.page.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: StudentProjectEditPage */

    /***/
    function Ls5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentProjectEditPage", function () {
        return StudentProjectEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_student_project_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./student-project-edit.page.html */
      "2gVb");
      /* harmony import */


      var _student_project_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./student-project-edit.page.scss */
      "5z/F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/students.service */
      "ZvwH");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");

      var StudentProjectEditPage = /*#__PURE__*/function () {
        function StudentProjectEditPage(activatedRoute, router, projectsService, scheduleService, studentsService, config) {
          _classCallCheck(this, StudentProjectEditPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.projectsService = projectsService;
          this.scheduleService = scheduleService;
          this.studentsService = studentsService;
          this.config = config;
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
            role: 2
          };
          this.editProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
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
            participants: []
          };
          /**
           * Contains the time schedule of the application
           */

          this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en')
          };
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(StudentProjectEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.studentUrl = paramMap.get('ParticipantName');
            });
            this.getSchedule();
            this.getProject();
            this.getStudent();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }), this.projectsService.update.subscribe(function () {
              return _this.getProject();
            }), this.studentsService.update.subscribe(function () {
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
          key: "getProject",
          value: function getProject() {
            var _this3 = this;

            this.projectsService.getSelfLeadedProject('students').subscribe(function (data) {
              _this3.editProject = data.data;
            });
          }
        }, {
          key: "getStudent",
          value: function getStudent() {
            var _this4 = this;

            this.studentsService.getSelfStudent().subscribe(function (data) {
              _this4.loadedStudent = data.data;
            });
          }
        }, {
          key: "changeFile",
          value: function changeFile(event) {
            var file = event.target.files[0];

            if (file) {
              this.image = file;
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.currentDate > this.schedule.control && this.currentDate <= this.schedule.registration) {
              this.projectsService.touchUpProject('students', this.editProject, this.studentUrl);
            } else {
              this.projectsService.putProject('students', this.editProject, this.studentUrl);
            }
          }
        }]);

        return StudentProjectEditPage;
      }();

      StudentProjectEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_9__["ScheduleService"]
        }, {
          type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
        }];
      };

      StudentProjectEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-edit',
        template: _raw_loader_student_project_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_project_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StudentProjectEditPage);
      /***/
    },

    /***/
    "eHwU":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/log-in/student-page/student-project-administration/student-project-edit/student-project-edit.module.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: StudentProjectEditPageModule */

    /***/
    function eHwU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentProjectEditPageModule", function () {
        return StudentProjectEditPageModule;
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


      var _student_project_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-project-edit.page */
      "Ls5q");

      var routes = [{
        path: '',
        component: _student_project_edit_page__WEBPACK_IMPORTED_MODULE_6__["StudentProjectEditPage"]
      }];

      var StudentProjectEditPageModule = function StudentProjectEditPageModule() {
        _classCallCheck(this, StudentProjectEditPageModule);
      };

      StudentProjectEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_student_project_edit_page__WEBPACK_IMPORTED_MODULE_6__["StudentProjectEditPage"]]
      })], StudentProjectEditPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-student-page-student-project-administration-student-project-edit-student-project-edit-module-es5.js.map