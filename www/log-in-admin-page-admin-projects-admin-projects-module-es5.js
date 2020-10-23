(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-projects-admin-projects-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-projects.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-projects.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInAdminPageAdminProjectsAdminProjectsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectsNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ projectsNoun }}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item color=\"background\" *ngFor=\"let project of projects\" [routerLink]=\"['./', project.id]\">\n          <ion-avatar [hidden]=\"project.image == null || project.image == ''\" slot=\"start\">\n            <ion-img *ngIf=\"project.image != '' && project.image != null\" [src]='\"http://192.248.186.231:8000/storage/images/\" + project.image'></ion-img>\n          </ion-avatar>\n          <ion-label color=\"text\">\n            <h2>{{ project.title }}</h2>\n            <p *ngIf=\"!!+project.authorized === true\">{{ project.descr }}</p>\n            <ion-text *ngIf=\"!!+project.authorized === false\" color=\"danger\"> (Nicht zugelassen!)</ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-projects/admin-projects.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-projects/admin-projects.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminProjectsPageModule */

    /***/
    function srcAppLogInAdminPageAdminProjectsAdminProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProjectsPageModule", function () {
        return AdminProjectsPageModule;
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


      var _admin_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-projects.page */
      "./src/app/log-in/admin-page/admin-projects/admin-projects.page.ts");

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
    },

    /***/
    "./src/app/log-in/admin-page/admin-projects/admin-projects.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-projects/admin-projects.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInAdminPageAdminProjectsAdminProjectsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9hZG1pbi1wYWdlL2FkbWluLXByb2plY3RzL2FkbWluLXByb2plY3RzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-projects/admin-projects.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-projects/admin-projects.page.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminProjectsPage */

    /***/
    function srcAppLogInAdminPageAdminProjectsAdminProjectsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProjectsPage", function () {
        return AdminProjectsPage;
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


      var src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/projects.service */
      "./src/app/projects.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");

      var AdminProjectsPage = /*#__PURE__*/function () {
        function AdminProjectsPage(projectsService, activatedRoute, config) {
          _classCallCheck(this, AdminProjectsPage);

          this.projectsService = projectsService;
          this.activatedRoute = activatedRoute;
          this.config = config;
        }

        _createClass(AdminProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.projectsNoun = this.config.app_config.projects_noun;
            this.text = this.config.get_content('admin-projects');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              _this.adminUrl = paramMap.get('AdminName');
            });
            this.getProjects();
            this.projectsService.update.subscribe(function () {
              return _this.getProjects();
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
          type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }];
      };

      AdminProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-projects',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-projects.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-projects.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-projects.page.scss */
        "./src/app/log-in/admin-page/admin-projects/admin-projects.page.scss"))["default"]]
      })], AdminProjectsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-projects-admin-projects-module-es5.js.map