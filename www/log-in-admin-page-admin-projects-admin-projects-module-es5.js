(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-projects-admin-projects-module"], {
    /***/
    "Br4j":
    /*!*************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-projects/admin-projects.page.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminProjectsPage */

    /***/
    function Br4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProjectsPage", function () {
        return AdminProjectsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_projects_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-projects.page.html */
      "alGA");
      /* harmony import */


      var _admin_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-projects.page.scss */
      "Y4CC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var AdminProjectsPage = /*#__PURE__*/function () {
        function AdminProjectsPage(projectsService, activatedRoute, config) {
          _classCallCheck(this, AdminProjectsPage);

          this.projectsService = projectsService;
          this.activatedRoute = activatedRoute;
          this.config = config;
          this.subscriptions = [];
          this.imageUrl = this.config.backend_config.imageUrl;
          this.projectsNoun = this.config.app_config.projects_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(AdminProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('admin-projects');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              _this.adminUrl = paramMap.get('AdminName');
            });
            this.getProjects();
            this.subscriptions.push(this.projectsService.update.subscribe(function () {
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
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this2 = this;

            this.projectsService.getAllProjects().subscribe(function (data) {
              _this2.projects = data.data;
            });
          }
        }]);

        return AdminProjectsPage;
      }();

      AdminProjectsPage.ctorParameters = function () {
        return [{
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
        }];
      };

      AdminProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-projects',
        template: _raw_loader_admin_projects_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminProjectsPage);
      /***/
    },

    /***/
    "Y4CC":
    /*!***************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-projects/admin-projects.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Y4CC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9qZWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "alGA":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-projects.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function alGA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectsNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>{{ projectsNoun }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item color=\"background\" *ngFor=\"let project of projects\" [routerLink]=\"['./', project.id]\">\n          <ion-avatar [hidden]=\"project.image == null || project.image == ''\" slot=\"start\">\n            <ion-img *ngIf=\"project.image != '' && project.image != null\" src='{{ imageUrl }}{{ project.image }}'></ion-img>\n          </ion-avatar>\n          <ion-label color=\"text\">\n            <h2>{{ project.title }}</h2>\n            <p *ngIf=\"!!+project.authorized === true\">{{ project.descr }}</p>\n            <ion-text *ngIf=\"!!+project.authorized === false\" color=\"danger\"> (Nicht zugelassen!)</ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "gH7Q":
    /*!***************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-projects/admin-projects.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminProjectsPageModule */

    /***/
    function gH7Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProjectsPageModule", function () {
        return AdminProjectsPageModule;
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


      var _admin_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-projects.page */
      "Br4j");

      var routes = [{
        path: '',
        component: _admin_projects_page__WEBPACK_IMPORTED_MODULE_6__["AdminProjectsPage"]
      }];

      var AdminProjectsPageModule = function AdminProjectsPageModule() {
        _classCallCheck(this, AdminProjectsPageModule);
      };

      AdminProjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_projects_page__WEBPACK_IMPORTED_MODULE_6__["AdminProjectsPage"]]
      })], AdminProjectsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-projects-admin-projects-module-es5.js.map