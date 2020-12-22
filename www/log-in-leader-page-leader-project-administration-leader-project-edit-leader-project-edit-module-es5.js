(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-project-administration-leader-project-edit-leader-project-edit-module"], {
    /***/
    "6QVp":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-project-administration/leader-project-edit/leader-project-edit.page.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QVp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/{{ projectNoun }}leiter/{{ leaderUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }} bearbeiten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ProjectForm\" (ngSubmit)=\"submit()\" #Formular>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectLeader\" [(ngModel)]=\"editProject.leader_name\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}name</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectName\" [(ngModel)]=\"editProject.title\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}beschreibung</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-textarea required type=\"text\" name=\"ProjectDescr\" [(ngModel)]=\"editProject.descr\" rows=\"7\"></ion-textarea>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectCost\" [(ngModel)]=\"editProject.cost\" required type=\"number\"></ion-input>€\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">1.Tag</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectFirstTimeBegin\" [(ngModel)]=\"editProject.first_day_begin\" type=\"time\"></ion-input>\n        </ion-item> \n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectFirstTimeEnd\" [(ngModel)]=\"editProject.first_day_end\" type=\"time\"></ion-input>\n        </ion-item> \n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">2.Tag</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input display-format=\"HH:mm\" color=\"text\" required name=\"ProjectSecondTimeBeginn\" [(ngModel)]=\"editProject.second_day_begin\" type=\"time\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectSecondTimeEnd\" [(ngModel)]=\"editProject.second_day_end\" type=\"time\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von</ion-label>\n          <ion-select required name=\"ProjectMinClass\" [(ngModel)]=\"editProject.min_grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">bis</ion-label>\n          <ion-select required name=\"ProjectMaxClass\" [(ngModel)]=\"editProject.max_grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n            <ion-select-option selected value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectMinParticipants\" [(ngModel)]=\"editProject.min_participants\" required type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectMaxParticipants\" [(ngModel)]=\"editProject.max_participants\" required type=\"number\"></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Änderungen speichern</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n  ";
      /***/
    },

    /***/
    "eXB2":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/log-in/leader-page/leader-project-administration/leader-project-edit/leader-project-edit.module.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: LeaderProjectEditPageModule */

    /***/
    function eXB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderProjectEditPageModule", function () {
        return LeaderProjectEditPageModule;
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


      var _leader_project_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leader-project-edit.page */
      "fsIS");

      var routes = [{
        path: '',
        component: _leader_project_edit_page__WEBPACK_IMPORTED_MODULE_6__["LeaderProjectEditPage"]
      }];

      var LeaderProjectEditPageModule = function LeaderProjectEditPageModule() {
        _classCallCheck(this, LeaderProjectEditPageModule);
      };

      LeaderProjectEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_leader_project_edit_page__WEBPACK_IMPORTED_MODULE_6__["LeaderProjectEditPage"]]
      })], LeaderProjectEditPageModule);
      /***/
    },

    /***/
    "fsIS":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/log-in/leader-page/leader-project-administration/leader-project-edit/leader-project-edit.page.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: LeaderProjectEditPage */

    /***/
    function fsIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderProjectEditPage", function () {
        return LeaderProjectEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leader_project_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leader-project-edit.page.html */
      "6QVp");
      /* harmony import */


      var _leader_project_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leader-project-edit.page.scss */
      "pA5e");
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


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");

      var LeaderProjectEditPage = /*#__PURE__*/function () {
        function LeaderProjectEditPage(activatedRoute, router, projectsService, scheduleService, config) {
          _classCallCheck(this, LeaderProjectEditPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.projectsService = projectsService;
          this.scheduleService = scheduleService;
          this.config = config;
          this.subscriptions = [];
          this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0
          };
          this.editProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: null,
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
            begin: null,
            control: null,
            registration: null,
            sort_students: null,
            exchange: null,
            projects: null,
            end: null
          };
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(LeaderProjectEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('LeaderName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.leaderUrl = paramMap.get('LeaderName');
            });
            this.getSchedule();
            this.getProject();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }), this.projectsService.update.subscribe(function () {
              return _this.getProject();
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

            this.projectsService.getSelfLeadedProject('leaders').subscribe(function (data) {
              _this3.editProject = data.data;
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
              this.projectsService.touchUpProject('leaders', this.editProject, this.leaderUrl);
            } else {
              this.projectsService.putProject('leaders', this.editProject, this.leaderUrl);
            }
          }
        }]);

        return LeaderProjectEditPage;
      }();

      LeaderProjectEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
        }];
      };

      LeaderProjectEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-edit',
        template: _raw_loader_leader_project_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_project_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaderProjectEditPage);
      /***/
    },

    /***/
    "pA5e":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/log-in/leader-page/leader-project-administration/leader-project-edit/leader-project-edit.page.scss ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pA5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItcHJvamVjdC1lZGl0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-leader-page-leader-project-administration-leader-project-edit-leader-project-edit-module-es5.js.map