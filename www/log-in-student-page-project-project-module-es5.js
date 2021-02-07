(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-project-project-module"], {
    /***/
    "7kPR":
    /*!***************************************************************!*\
      !*** ./src/app/log-in/student-page/project/project.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function kPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJwcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "8EwC":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/project/project.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"chosenProject.leader_id == null && chosenProject.title == null && chosenProject.authorized == null\"  class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ studentLoadingProject }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"!!+chosenProject.authorized === true\" class=\"content\">\n    <ion-img *ngIf=\"chosenProject.image != '' && chosenProject.image != null\" src='{{ imageUrl }}{{ chosenProject.image }}'></ion-img>\n    <ion-card-header>\n      <ion-card-title text-wrap>{{ chosenProject.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group>\n        <ion-item color=\"items\" lines=\"none\" class=\"descr\">\n          <ion-text color=\"text\">{{ chosenProject.descr }}</ion-text>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ chosenProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ chosenProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag: {{ chosenProject.first_day_begin }} bis {{ chosenProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag: {{ chosenProject.second_day_begin }} bis {{ chosenProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ chosenProject.min_grade }}. bis {{ chosenProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ chosenProject.min_participants }} bis {{ chosenProject.max_participants }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\" *ngIf=\"chosenProject.messages.length\">\n          <ion-label color=\"text\">Notizen</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"chosenProject.messages.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of chosenProject.messages\">\n            <ion-card class=\"message\" color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n                <ion-text color=\"text\">{{ message.message }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teilnehmer</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"chosenProject.leader && chosenProject.leader_type === 'App\\\\Student'\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ chosenProject.leader.first_name }} {{ chosenProject.leader.last_name }} {{ chosenProject.leader.grade }}{{ chosenProject.leader.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"chosenProject.assistant_student_leaders.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of chosenProject.assistant_student_leaders\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"chosenProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of chosenProject.participants\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"!!+chosenProject.authorized == false\"  class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ studentProjectNotAllowed }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "ZITW":
    /*!***************************************************************!*\
      !*** ./src/app/log-in/student-page/project/project.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProjectPageModule */

    /***/
    function ZITW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function () {
        return ProjectPageModule;
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


      var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project.page */
      "hkEE");

      var routes = [{
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]
      }];

      var ProjectPageModule = function ProjectPageModule() {
        _classCallCheck(this, ProjectPageModule);
      };

      ProjectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
      })], ProjectPageModule);
      /***/
    },

    /***/
    "hkEE":
    /*!*************************************************************!*\
      !*** ./src/app/log-in/student-page/project/project.page.ts ***!
      \*************************************************************/

    /*! exports provided: ProjectPage */

    /***/
    function hkEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectPage", function () {
        return ProjectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_project_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./project.page.html */
      "8EwC");
      /* harmony import */


      var _project_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project.page.scss */
      "7kPR");
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

      var ProjectPage = /*#__PURE__*/function () {
        function ProjectPage(activatedRoute, router, projectsService, config) {
          _classCallCheck(this, ProjectPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.projectsService = projectsService;
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
            role: 1
          };
          this.chosenProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
            leader_type: '',
            leader_id: 0,
            messages: [],
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
            participants: [],
            assistant_student_leaders: []
          };
          this.imageUrl = this.config.backend_config.imageUrl;
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(ProjectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.studentLoadingProject = this.config.get_error('student-loading_project');
            this.studentProjectNotAllowed = this.config.get_error('student-project_not_allowed');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }
            });
            this.getProject();
            this.subscriptions.push(this.projectsService.update.subscribe(function () {
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
        }, {
          key: "getProject",
          value: function getProject() {
            var _this2 = this;

            this.projectsService.getSelfProject().subscribe(function (data) {
              _this2.chosenProject = data.data;
            });
          }
        }]);

        return ProjectPage;
      }();

      ProjectPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
        }];
      };

      ProjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project',
        template: _raw_loader_project_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjectPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-student-page-project-project-module-es5.js.map