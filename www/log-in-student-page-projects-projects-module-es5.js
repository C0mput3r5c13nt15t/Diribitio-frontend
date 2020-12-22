(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-projects-projects-module"], {
    /***/
    "9lI5":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/projects/projects.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lI5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectsNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>{{ projectsNoun }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"currentDate <= schedule.registration\">\n      <ion-card color=\"background\">\n        <ion-card-header>\n          <ion-title color=\"danger\">\n            Zu früh\n          </ion-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-text color=\"text\">Die {{ projectsNoun }} werden hier erst nach dem {{ schedule.registration }} ausgestellt.</ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"currentDate > schedule.registration\">\n      <ion-list *ngIf=\"projects\">\n        <div *ngFor=\"let project of projects\">\n          <ion-item color=\"background\" *ngIf=\"!!+project.authorized\" [routerLink]=\"['./', project.id]\">\n            <ion-avatar [hidden]=\"project.image == '' || project.image == null\" slot=\"start\">\n              <ion-img *ngIf=\"project.image != '' && project.image != null\" src='{{ imageUrl }}{{ project.image }}'></ion-img>\n            </ion-avatar>\n            <ion-label color=\"text\">\n              <h2>{{ project.title }}</h2>\n              <ion-text color=\"text\" *ngIf=\"!!+project.authorized === true\">{{ project.descr }}</ion-text>\n              <ion-text *ngIf=\"!!+project.authorized === false\" color=\"danger\"> (Nicht zugelassen!)</ion-text>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "GoqE":
    /*!*****************************************************************!*\
      !*** ./src/app/log-in/student-page/projects/projects.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProjectsPageModule */

    /***/
    function GoqE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function () {
        return ProjectsPageModule;
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


      var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projects.page */
      "jO+d");

      var routes = [{
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]
      }];

      var ProjectsPageModule = function ProjectsPageModule() {
        _classCallCheck(this, ProjectsPageModule);
      };

      ProjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
      })], ProjectsPageModule);
      /***/
    },

    /***/
    "PEPk":
    /*!*****************************************************************!*\
      !*** ./src/app/log-in/student-page/projects/projects.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function PEPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "jO+d":
    /*!***************************************************************!*\
      !*** ./src/app/log-in/student-page/projects/projects.page.ts ***!
      \***************************************************************/

    /*! exports provided: ProjectsPage */

    /***/
    function jOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsPage", function () {
        return ProjectsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./projects.page.html */
      "9lI5");
      /* harmony import */


      var _projects_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projects.page.scss */
      "PEPk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProjectsPage = /*#__PURE__*/function () {
        function ProjectsPage(projectsService, config, activatedRoute, router, scheduleService) {
          _classCallCheck(this, ProjectsPage);

          this.projectsService = projectsService;
          this.config = config;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.scheduleService = scheduleService;
          this.subscriptions = [];
          /**
           * Contains the time schedule of the application
           */

          this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
          };
          this.imageUrl = this.config.backend_config.imageUrl;
          this.projectsNoun = this.config.app_config.projects_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(ProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('projects');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.studentUrl = paramMap.get('ParticipantName');
            });
            this.getSchedule();
            this.getProjects();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }), this.projectsService.update.subscribe(function () {
              return _this.getProjects();
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
          key: "getProjects",
          value: function getProjects() {
            var _this3 = this;

            this.projectsService.getAllProjects().subscribe(function (data) {
              _this3.projects = data.data;
            });
          }
        }]);

        return ProjectsPage;
      }();

      ProjectsPage.ctorParameters = function () {
        return [{
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"]
        }];
      };

      ProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjectsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-student-page-projects-projects-module-es5.js.map