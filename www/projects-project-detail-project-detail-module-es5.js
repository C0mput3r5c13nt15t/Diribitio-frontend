(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-project-detail-project-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project-detail/project-detail.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project-detail/project-detail.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectDetailProjectDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Projekte\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"color=\"background\" *ngIf=\"!!+loadedProject.authorized === true\" class=\"content\">\n    <ion-img *ngIf=\"loadedProject.image != '' && loadedProject.image != null\" [src]='\"http://fama-4/storage/images/\" + loadedProject.image'></ion-img>\n    <ion-card-header>\n      <ion-title>\n        <h1>{{ loadedProject.title }}</h1>\n      </ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group color=\"background\">\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-text color=\"text\">{{ loadedProject.descr }}\n          </ion-text>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag: {{ loadedProject.first_day_begin }} bis {{ loadedProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag: {{ loadedProject.second_day_begin }} bis {{ loadedProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.min_grade }}. bis {{ loadedProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ loadedProject.min_participants }} bis {{ loadedProject.max_participants }}</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\" *ngIf=\"!!+loadedProject.authorized == false\">\n    <ion-card-content>\n      <ion-text color=\"danger\">Leider ist dieses Projekt noch nicht zugelassen worden!</ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/projects/project-detail/project-detail.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/projects/project-detail/project-detail.module.ts ***!
      \******************************************************************/

    /*! exports provided: ProjectDetailPageModule */

    /***/
    function srcAppProjectsProjectDetailProjectDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailPageModule", function () {
        return ProjectDetailPageModule;
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


      var _project_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project-detail.page */
      "./src/app/projects/project-detail/project-detail.page.ts");

      var routes = [{
        path: '',
        component: _project_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailPage"]
      }];

      var ProjectDetailPageModule = function ProjectDetailPageModule() {
        _classCallCheck(this, ProjectDetailPageModule);
      };

      ProjectDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailPage"]]
      })], ProjectDetailPageModule);
      /***/
    },

    /***/
    "./src/app/projects/project-detail/project-detail.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/projects/project-detail/project-detail.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProjectsProjectDetailProjectDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0LWRldGFpbC9wcm9qZWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byBhdXRvIGF1dG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/projects/project-detail/project-detail.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/projects/project-detail/project-detail.page.ts ***!
      \****************************************************************/

    /*! exports provided: ProjectDetailPage */

    /***/
    function srcAppProjectsProjectDetailProjectDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailPage", function () {
        return ProjectDetailPage;
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


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/projects.service */
      "./src/app/projects.service.ts");

      var ProjectDetailPage = /*#__PURE__*/function () {
        function ProjectDetailPage(activatedRoute, router, projectsService, config) {
          _classCallCheck(this, ProjectDetailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.projectsService = projectsService;
          this.config = config;
          this.loadedProject = {
            id: 0,
            authorized: 1,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
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
            participants: []
          };
          this.projectNoun = 'Projekt';
        }

        _createClass(ProjectDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.projectNoun = this.config.app_config.project_noun;
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ProjectID')) {
                _this.router.navigate(['']);

                return;
              }

              var ProjectID = paramMap.get('ProjectID');

              _this.projectsService.getProject(ProjectID).subscribe(function (data) {
                _this.loadedProject = data.data;
              });
            });
          }
        }]);

        return ProjectDetailPage;
      }();

      ProjectDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      ProjectDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./project-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project-detail/project-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./project-detail.page.scss */
        "./src/app/projects/project-detail/project-detail.page.scss"))["default"]]
      })], ProjectDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects-project-detail-project-detail-module-es5.js.map