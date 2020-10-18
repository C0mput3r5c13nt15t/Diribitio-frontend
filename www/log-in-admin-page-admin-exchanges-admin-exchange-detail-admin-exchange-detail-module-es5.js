(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.html":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInAdminPageAdminExchangesAdminExchangeDetailAdminExchangeDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-button color=\"buttons\" slot=\"start\">\n        <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Admin/{{ adminUrl }}/Tauschanfragen\"></ion-back-button>\n      </ion-button>\n    <ion-title>Tauschanfrage</ion-title>\n    <ion-button color=\"buttons\" color=\"danger\" slot=\"end\" (click)=\"deleteExchange()\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header *ngIf=\"loadedExchange.sender && loadedExchange.receiver\">\n      <ion-card-title>Tauschanfrage von {{ loadedExchange.sender.first_name }} {{ loadedExchange.sender.last_name }} und {{ loadedExchange.receiver.first_name }} {{ loadedExchange.receiver.last_name }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form>\n        <ion-item-group *ngIf=\"loadedExchange.sender && loadedExchange.receiver\">\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ loadedExchange.sender.first_name }} {{ loadedExchange.sender.last_name }} (Ersteller/in der Anfrage)</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            Klasse: {{ loadedExchange.sender.grade }}{{ loadedExchange.sender.letter }}\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            {{ projectNoun }}: {{ firstProjectName }} ({{ firstMinGrade }}.Klasse bis {{ firstMaxGrade }}.Klasse)\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label *ngIf=\"loadedExchange.receiver.grade > firstMaxGrade || loadedExchange.receiver.grade < firstMinGrade\" color=\"danger\">{{ loadedExchange.receiver.first_name }} {{ loadedExchange.receiver.last_name }} erfüllt NICHT die Projektbedingungen!</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ loadedExchange.receiver.first_name }} {{ loadedExchange.receiver.last_name }} (Empfänger/in)</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            Klasse: {{ loadedExchange.receiver.grade }}{{ loadedExchange.receiver.letter }}\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            {{ projectNoun }}: {{ secondProjectName }} ({{ secondMinGrade }}.Klasse bis {{ secondMaxGrade }}.Klasse)\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label *ngIf=\"loadedExchange.sender.grade > secondMaxGrade || loadedExchange.sender.grade < secondMinGrade\" color=\"danger\">{{ loadedExchange.sender.first_name }} {{ loadedExchange.sender.last_name }} erfüllt NICHT die Projektbedingungen!</ion-label>\n          </ion-item>\n        </ion-item-group>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" (click)=\"carryOutExchange()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Tausch bestätigen</ion-button>\n        </div>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" color=\"danger\" slot=\"end\" (click)=\"deleteExchange()\">Tauschanfrage löschen</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AdminExchangeDetailPageModule */

    /***/
    function srcAppLogInAdminPageAdminExchangesAdminExchangeDetailAdminExchangeDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminExchangeDetailPageModule", function () {
        return AdminExchangeDetailPageModule;
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


      var _admin_exchange_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-exchange-detail.page */
      "./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.ts");

      var routes = [{
        path: '',
        component: _admin_exchange_detail_page__WEBPACK_IMPORTED_MODULE_6__["AdminExchangeDetailPage"]
      }];

      var AdminExchangeDetailPageModule = function AdminExchangeDetailPageModule() {
        _classCallCheck(this, AdminExchangeDetailPageModule);
      };

      AdminExchangeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_exchange_detail_page__WEBPACK_IMPORTED_MODULE_6__["AdminExchangeDetailPage"]]
      })], AdminExchangeDetailPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.scss":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInAdminPageAdminExchangesAdminExchangeDetailAdminExchangeDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9hZG1pbi1wYWdlL2FkbWluLWV4Y2hhbmdlcy9hZG1pbi1leGNoYW5nZS1kZXRhaWwvYWRtaW4tZXhjaGFuZ2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AdminExchangeDetailPage */

    /***/
    function srcAppLogInAdminPageAdminExchangesAdminExchangeDetailAdminExchangeDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminExchangeDetailPage", function () {
        return AdminExchangeDetailPage;
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


      var src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/exchanges.service */
      "./src/app/exchanges.service.ts");
      /* harmony import */


      var src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/projects.service */
      "./src/app/projects.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");

      var AdminExchangeDetailPage = /*#__PURE__*/function () {
        function AdminExchangeDetailPage(activatedRoute, router, exchangesService, projectService, alertCtrl, config) {
          _classCallCheck(this, AdminExchangeDetailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.exchangesService = exchangesService;
          this.projectService = projectService;
          this.alertCtrl = alertCtrl;
          this.config = config;
          this.loadedExchange = {
            id: 0,
            sender_id: 0,
            receiver_id: 0,
            confirmed: 0,
            accomplished: 0,
            sender: null,
            receiver: null
          };
          this.firstProjectName = '';
          this.firstMinGrade = 0;
          this.firstMaxGrade = 0;
          this.secondProjectName = '';
          this.secondMinGrade = 0;
          this.secondMaxGrade = 0;
        }

        _createClass(AdminExchangeDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.projectNoun = this.config.app_config.projects_noun;
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ExchangeID')) {
                _this.router.navigate(['']);

                return;
              }

              _this.adminUrl = paramMap.get('AdminName');
              var ExchangeID = paramMap.get('ExchangeID');

              _this.exchangesService.getExchange(ExchangeID).subscribe(function (data) {
                _this.loadedExchange = data.data;

                _this.projectService.getProject(_this.loadedExchange.sender.project_id).subscribe(function (projectData) {
                  _this.firstProjectName = projectData.data.title;
                  _this.firstMinGrade = projectData.data.min_grade;
                  _this.firstMaxGrade = projectData.data.max_grade;
                });

                _this.projectService.getProject(_this.loadedExchange.receiver.project_id).subscribe(function (projectData) {
                  _this.secondProjectName = projectData.data.title;
                  _this.secondMinGrade = projectData.data.min_grade;
                  _this.secondMaxGrade = projectData.data.max_grade;
                });
              });
            });
          }
        }, {
          key: "deleteExchange",
          value: function deleteExchange() {
            var _this2 = this;

            this.alertCtrl.create({
              header: 'Bist du sicher?',
              message: 'Wollen sie diesen Tausch wirklich unwiederruflich löschen?',
              buttons: [{
                text: 'Abbrechen',
                role: 'cancel'
              }, {
                text: 'Löschen',
                handler: function handler() {
                  _this2.exchangesService.deleteExchange(_this2.loadedExchange.id);

                  _this2.router.navigate(['Projekttage/Admin/' + _this2.adminUrl + '/Tauschanfragen']);
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }, {
          key: "carryOutExchange",
          value: function carryOutExchange() {
            this.exchangesService.carryOutExchange(this.loadedExchange.id);
            this.router.navigate(['Projekttage/Admin/' + this.adminUrl + '/Tauschanfragen']);
          }
        }]);

        return AdminExchangeDetailPage;
      }();

      AdminExchangeDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_3__["ExchangesService"]
        }, {
          type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
        }];
      };

      AdminExchangeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-exchange-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-exchange-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-exchange-detail.page.scss */
        "./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.scss"))["default"]]
      })], AdminExchangeDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module-es5.js.map