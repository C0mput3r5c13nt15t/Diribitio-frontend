(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-page-module"], {
    /***/
    "FfgO":
    /*!**********************************************************!*\
      !*** ./src/app/log-in/leader-page/leader-page.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function FfgO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "MUgI":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-page.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MUgI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Projektleiter</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\" text-wrap>Willkommen {{ loadedLeader.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>   \n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedLeader.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedLeader.project_id == 0\" routerLink='./{{ projectNoun }} erstellen'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>{{ projectNoun }} erstellen\n        </ion-item>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"loadedLeader.project_id != 0\" routerLink='./{{ projectNoun }} verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>{{ projectNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedLeader.email_verified_at == null\" color=\"items\" *ngIf=\"loadedLeader.project_id != 0\" [routerLink]=\"['./Nachricht senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Nachricht senden\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\" *ngIf=\"currentDate > schedule.control && currentDate <= schedule.end &&loadedLeader.project_id == 0\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"deleteAccount()\">Account löschen</ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "XF5o":
    /*!**********************************************************!*\
      !*** ./src/app/log-in/leader-page/leader-page.module.ts ***!
      \**********************************************************/

    /*! exports provided: LeaderPagePageModule */

    /***/
    function XF5o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderPagePageModule", function () {
        return LeaderPagePageModule;
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


      var _leader_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leader-page.page */
      "ywBW");

      var routes = [{
        path: '',
        component: _leader_page_page__WEBPACK_IMPORTED_MODULE_6__["LeaderPagePage"]
      }];

      var LeaderPagePageModule = function LeaderPagePageModule() {
        _classCallCheck(this, LeaderPagePageModule);
      };

      LeaderPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_leader_page_page__WEBPACK_IMPORTED_MODULE_6__["LeaderPagePage"]]
      })], LeaderPagePageModule);
      /***/
    },

    /***/
    "ywBW":
    /*!********************************************************!*\
      !*** ./src/app/log-in/leader-page/leader-page.page.ts ***!
      \********************************************************/

    /*! exports provided: LeaderPagePage */

    /***/
    function ywBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderPagePage", function () {
        return LeaderPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leader_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leader-page.page.html */
      "MUgI");
      /* harmony import */


      var _leader_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leader-page.page.scss */
      "FfgO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/leaders.service */
      "PO/Q");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");

      var LeaderPagePage = /*#__PURE__*/function () {
        function LeaderPagePage(activatedRoute, router, leadersService, projectsService, scheduleService, config, alert) {
          _classCallCheck(this, LeaderPagePage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.leadersService = leadersService;
          this.projectsService = projectsService;
          this.scheduleService = scheduleService;
          this.config = config;
          this.alert = alert;
          this.subscriptions = [];
          this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0
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
          this.buttonPressed = true;
          this.projectNoun = this.config.app_config.project_noun;
        }

        _createClass(LeaderPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('leader-page');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('LeaderName')) {
                _this.router.navigate(['']);

                return;
              }
            });
            this.getSchedule();
            this.getLeader();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
            }), this.leadersService.update.subscribe(function () {
              return _this.getLeader();
            }), this.projectsService.update.subscribe(function () {
              return _this.getLeader();
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
          key: "getLeader",
          value: function getLeader() {
            var _this3 = this;

            this.leadersService.getSelfLeader().subscribe(function (data) {
              _this3.loadedLeader = data.data;

              if (_this3.loadedLeader.email_verified_at == null) {
                _this3.buttonPressed = false;
              }
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this4 = this;

            this.getLeader();
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this4.schedule = data.data;
            });
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            var _this5 = this;

            this.leadersService.sendAuthentificationEmailSubscribe().subscribe(function (data) {
              _this5.alert.alert(data.message);

              _this5.buttonPressed = true;
            }, function (error) {
              _this5.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.leadersService.logOutLeader();
          }
        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            this.leadersService.destroySelfLeader();
          }
        }]);

        return LeaderPagePage;
      }();

      LeaderPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_5__["LeadersService"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
        }];
      };

      LeaderPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leader-page',
        template: _raw_loader_leader_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaderPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-leader-page-leader-page-module-es5.js.map