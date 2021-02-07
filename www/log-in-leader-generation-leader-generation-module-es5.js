(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-generation-leader-generation-module"], {
    /***/
    "8yuX":
    /*!********************************************************************!*\
      !*** ./src/app/log-in/leader-generation/leader-generation.page.ts ***!
      \********************************************************************/

    /*! exports provided: LeaderGenerationPage */

    /***/
    function yuX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderGenerationPage", function () {
        return LeaderGenerationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leader_generation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leader-generation.page.html */
      "Xr5Q");
      /* harmony import */


      var _leader_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leader-generation.page.scss */
      "XE+x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/leaders.service */
      "PO/Q");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var LeaderGenerationPage = /*#__PURE__*/function () {
        function LeaderGenerationPage(alertCtrl, leadersService, config) {
          _classCallCheck(this, LeaderGenerationPage);

          this.alertCtrl = alertCtrl;
          this.leadersService = leadersService;
          this.config = config;
          this.subscriptions = [];
          this.signUpData = {
            user_name: '',
            email: '',
            password: '',
            password_confirmation: ''
          };
          this.projectNoun = this.config.app_config.project_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(LeaderGenerationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.text = this.config.get_content('leader-generation');
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
          key: "SignUpAsLeader",
          value: function SignUpAsLeader(form) {
            if (this.signUpData.password === this.signUpData.password_confirmation) {
              this.leadersService.signUpLeader(this.signUpData, form);
            } else {
              this.alertCtrl.create({
                header: 'Fehler',
                message: 'Das bestätigte Passwort entspricht nicht dem anfangs eingegebenen!',
                buttons: [{
                  text: 'Ok',
                  role: 'cancel'
                }]
              }).then(function (alertEl) {
                alertEl.present();
              });
            }
          }
        }]);

        return LeaderGenerationPage;
      }();

      LeaderGenerationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_5__["LeadersService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
        }];
      };

      LeaderGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leader-generation',
        template: _raw_loader_leader_generation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaderGenerationPage);
      /***/
    },

    /***/
    "XE+x":
    /*!**********************************************************************!*\
      !*** ./src/app/log-in/leader-generation/leader-generation.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function XEX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItZ2VuZXJhdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Xr5Q":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-generation/leader-generation.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xr5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Als {{ projectNoun }}leiter registrieren</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <form #signUpLeaderForm=\"ngForm\" name=\"LeaderForm\" (ngSubmit)=\"SignUpAsLeader(signUpLeaderForm)\" class=\"content\">\n    <ion-card color=\"background\">\n      <ion-card-header color=\"background\">\n        <ion-card-title text-wrap>{{ projectNoun }}leiter-Account erstellen</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\" color=\"background\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content color=\"background\">\n        <ion-list>\n          <ion-item color=\"items\">\n            <ion-input name=\"user_name\" [(ngModel)]=\"signUpData.user_name\" required minlength=\"5\" maxlength=\"50\" type=\"text\" placeholder=\"Benutzername\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"email\" [(ngModel)]=\"signUpData.email\" required maxlength=\"50\" type=\"email\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password\" [(ngModel)]=\"signUpData.password\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password_confirmation\" [(ngModel)]=\"signUpData.password_confirmation\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort bestätigen\" color=\"text\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button name=\"submit\" type=\"submit\" [disabled]=\"signUpLeaderForm.invalid\"  class=\"ion-no-margin\" expand=\"block\"color=\"buttons\">Registrieren</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "aa1q":
    /*!**********************************************************************!*\
      !*** ./src/app/log-in/leader-generation/leader-generation.module.ts ***!
      \**********************************************************************/

    /*! exports provided: LeaderGenerationPageModule */

    /***/
    function aa1q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderGenerationPageModule", function () {
        return LeaderGenerationPageModule;
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


      var _leader_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leader-generation.page */
      "8yuX");

      var routes = [{
        path: '',
        component: _leader_generation_page__WEBPACK_IMPORTED_MODULE_6__["LeaderGenerationPage"]
      }];

      var LeaderGenerationPageModule = function LeaderGenerationPageModule() {
        _classCallCheck(this, LeaderGenerationPageModule);
      };

      LeaderGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_leader_generation_page__WEBPACK_IMPORTED_MODULE_6__["LeaderGenerationPage"]]
      })], LeaderGenerationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-leader-generation-leader-generation-module-es5.js.map