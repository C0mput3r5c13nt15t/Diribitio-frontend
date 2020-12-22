(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module"], {
    /***/
    "71nB":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-button color=\"buttons\" slot=\"start\">\n        <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}/Tauschanfragen\"></ion-back-button>\n      </ion-button>\n    <ion-title>Tauschanfrage</ion-title>\n    <ion-button color=\"buttons\" color=\"danger\" slot=\"end\" (click)=\"deleteExchange()\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header *ngIf=\"loadedExchange.sender && loadedExchange.receiver\">\n      <ion-card-title>Tauschanfrage von {{ loadedExchange.sender.first_name }} {{ loadedExchange.sender.last_name }} und {{ loadedExchange.receiver.first_name }} {{ loadedExchange.receiver.last_name }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form>\n        <ion-item-group *ngIf=\"loadedExchange.sender && loadedExchange.receiver\">\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ loadedExchange.sender.first_name }} {{ loadedExchange.sender.last_name }} (Ersteller/in der Anfrage)</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            Klasse: {{ loadedExchange.sender.grade }}{{ loadedExchange.sender.letter }}\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            {{ projectNoun }}: {{ firstProjectName }} ({{ firstMinGrade }}.Klasse bis {{ firstMaxGrade }}.Klasse)\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label *ngIf=\"loadedExchange.receiver.grade > firstMaxGrade || loadedExchange.receiver.grade < firstMinGrade\" color=\"danger\">{{ loadedExchange.receiver.first_name }} {{ loadedExchange.receiver.last_name }} erfüllt NICHT die {{ projectNoun }}bedingungen!</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ loadedExchange.receiver.first_name }} {{ loadedExchange.receiver.last_name }} (Empfänger/in)</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            Klasse: {{ loadedExchange.receiver.grade }}{{ loadedExchange.receiver.letter }}\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            {{ projectNoun }}: {{ secondProjectName }} ({{ secondMinGrade }}.Klasse bis {{ secondMaxGrade }}.Klasse)\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label *ngIf=\"loadedExchange.sender.grade > secondMaxGrade || loadedExchange.sender.grade < secondMinGrade\" color=\"danger\">{{ loadedExchange.sender.first_name }} {{ loadedExchange.sender.last_name }} erfüllt NICHT die {{ projectNoun }}bedingungen!</ion-label>\n          </ion-item>\n        </ion-item-group>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" (click)=\"carryOutExchange()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Tausch bestätigen</ion-button>\n        </div>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" color=\"danger\" slot=\"end\" (click)=\"deleteExchange()\">Tauschanfrage löschen</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "e2/T":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AdminExchangeDetailPage */

    /***/
    function e2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminExchangeDetailPage", function () {
        return AdminExchangeDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_exchange_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-exchange-detail.page.html */
      "71nB");
      /* harmony import */


      var _admin_exchange_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-exchange-detail.page.scss */
      "vv22");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_exchanges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/exchanges.service */
      "hQbD");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var AdminExchangeDetailPage = /*#__PURE__*/function () {
        function AdminExchangeDetailPage(activatedRoute, router, exchangesService, projectService, alertCtrl, config) {
          _classCallCheck(this, AdminExchangeDetailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.exchangesService = exchangesService;
          this.projectService = projectService;
          this.alertCtrl = alertCtrl;
          this.config = config;
          this.subscriptions = [];
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
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(AdminExchangeDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ExchangeID')) {
                _this.router.navigate(['']);

                return;
              }

              _this.adminUrl = paramMap.get('AdminName');
              _this.exchangeId = Number(paramMap.get('ExchangeID'));
            });
            this.getExchange();
            this.subscriptions.push(this.exchangesService.update.subscribe(function () {
              return _this.getExchange();
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
          key: "getExchange",
          value: function getExchange() {
            var _this2 = this;

            this.exchangesService.getExchange(this.exchangeId).subscribe(function (data) {
              _this2.loadedExchange = data.data;

              _this2.projectService.getProject(_this2.loadedExchange.sender.project_id).subscribe(function (projectData) {
                _this2.firstProjectName = projectData.data.title;
                _this2.firstMinGrade = projectData.data.min_grade;
                _this2.firstMaxGrade = projectData.data.max_grade;
              });

              _this2.projectService.getProject(_this2.loadedExchange.receiver.project_id).subscribe(function (projectData) {
                _this2.secondProjectName = projectData.data.title;
                _this2.secondMinGrade = projectData.data.min_grade;
                _this2.secondMaxGrade = projectData.data.max_grade;
              });
            });
          }
        }, {
          key: "deleteExchange",
          value: function deleteExchange() {
            var _this3 = this;

            this.alertCtrl.create({
              header: 'Bist du sicher?',
              message: 'Wollen sie diesen Tausch wirklich unwiederruflich löschen?',
              buttons: [{
                text: 'Abbrechen',
                role: 'cancel'
              }, {
                text: 'Löschen',
                handler: function handler() {
                  _this3.exchangesService.deleteExchange(_this3.loadedExchange.id);

                  _this3.router.navigate([_this3.eventName + '/Admin/' + _this3.adminUrl + '/Tauschanfragen']);
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
            this.router.navigate([this.eventName + '/Admin/' + this.adminUrl + '/Tauschanfragen']);
          }
        }]);

        return AdminExchangeDetailPage;
      }();

      AdminExchangeDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_exchanges_service__WEBPACK_IMPORTED_MODULE_5__["ExchangesService"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]
        }];
      };

      AdminExchangeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-exchange-detail',
        template: _raw_loader_admin_exchange_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_exchange_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminExchangeDetailPage);
      /***/
    },

    /***/
    "oKxh":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AdminExchangeDetailPageModule */

    /***/
    function oKxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminExchangeDetailPageModule", function () {
        return AdminExchangeDetailPageModule;
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


      var _admin_exchange_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-exchange-detail.page */
      "e2/T");

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
    "vv22":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.page.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vv22(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1leGNoYW5nZS1kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module-es5.js.map