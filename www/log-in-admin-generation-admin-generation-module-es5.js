(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-generation-admin-generation-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-generation/admin-generation.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-generation/admin-generation.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInAdminGenerationAdminGenerationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Anmeldung\"></ion-back-button>\n    </ion-button>\n    <ion-title>Als Administrator registrieren</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <form #signUpAdminForm=\"ngForm\" name=\"LeaderForm\" (ngSubmit)=\"signUpAsAdmin(signUpAdminForm)\" class=\"content\">\n    <ion-card color=\"background\">\n      <ion-card-header color=\"background\">\n        <ion-title>Admin-Account erstellen</ion-title>\n      </ion-card-header>\n      <ion-card-content color=\"background\">\n        <ion-label color=\"text\">\n          {{ explanation }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content color=\"background\">\n        <ion-list>\n          <ion-item color=\"items\">\n            <ion-input name=\"user_name\" [(ngModel)]=\"signUpData.user_name\" required minlength=\"5\" maxlength=\"50\" type=\"text\" placeholder=\"Benutzername\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"email\" [(ngModel)]=\"signUpData.email\" required maxlength=\"50\" type=\"email\" placeholder=\"E-Mail\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password\" [(ngModel)]=\"signUpData.password\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort\" color=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input name=\"password_confirmation\" [(ngModel)]=\"signUpData.password_confirmation\" required minlength=\"8\" type=\"password\" placeholder=\"Passwort bestätigen\" color=\"text\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button name=\"submit\" type=\"submit\" [disabled]=\"signUpAdminForm.invalid\"  class=\"ion-no-margin\" expand=\"block\"color=\"buttons\">Registrieren</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/admin-generation/admin-generation-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/log-in/admin-generation/admin-generation-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AdminGenerationPageRoutingModule */

    /***/
    function srcAppLogInAdminGenerationAdminGenerationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGenerationPageRoutingModule", function () {
        return AdminGenerationPageRoutingModule;
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


      var _admin_generation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-generation.page */
      "./src/app/log-in/admin-generation/admin-generation.page.ts");

      var routes = [{
        path: '',
        component: _admin_generation_page__WEBPACK_IMPORTED_MODULE_3__["AdminGenerationPage"]
      }];

      var AdminGenerationPageRoutingModule = function AdminGenerationPageRoutingModule() {
        _classCallCheck(this, AdminGenerationPageRoutingModule);
      };

      AdminGenerationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminGenerationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-generation/admin-generation.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/log-in/admin-generation/admin-generation.module.ts ***!
      \********************************************************************/

    /*! exports provided: AdminGenerationPageModule */

    /***/
    function srcAppLogInAdminGenerationAdminGenerationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGenerationPageModule", function () {
        return AdminGenerationPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _admin_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-generation-routing.module */
      "./src/app/log-in/admin-generation/admin-generation-routing.module.ts");
      /* harmony import */


      var _admin_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-generation.page */
      "./src/app/log-in/admin-generation/admin-generation.page.ts");

      var AdminGenerationPageModule = function AdminGenerationPageModule() {
        _classCallCheck(this, AdminGenerationPageModule);
      };

      AdminGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminGenerationPageRoutingModule"]],
        declarations: [_admin_generation_page__WEBPACK_IMPORTED_MODULE_6__["AdminGenerationPage"]]
      })], AdminGenerationPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-generation/admin-generation.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/log-in/admin-generation/admin-generation.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInAdminGenerationAdminGenerationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9hZG1pbi1nZW5lcmF0aW9uL2FkbWluLWdlbmVyYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/log-in/admin-generation/admin-generation.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/log-in/admin-generation/admin-generation.page.ts ***!
      \******************************************************************/

    /*! exports provided: AdminGenerationPage */

    /***/
    function srcAppLogInAdminGenerationAdminGenerationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGenerationPage", function () {
        return AdminGenerationPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var src_app_admins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/admins.service */
      "./src/app/admins.service.ts");

      var AdminGenerationPage = /*#__PURE__*/function () {
        function AdminGenerationPage(alertCtrl, router, adminsService, config) {
          _classCallCheck(this, AdminGenerationPage);

          this.alertCtrl = alertCtrl;
          this.router = router;
          this.adminsService = adminsService;
          this.config = config;
          this.signUpData = {
            user_name: '',
            email: '',
            password: '',
            password_confirmation: ''
          };
          this.explanation = '';
        }

        _createClass(AdminGenerationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.explanation = this.config.get_content('admin-generation');
          }
        }, {
          key: "signUpAsAdmin",
          value: function signUpAsAdmin(form) {
            if (this.signUpData.password === this.signUpData.password_confirmation) {
              this.adminsService.signUpAdmin(this.signUpData);
              form.reset();
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

        return AdminGenerationPage;
      }();

      AdminGenerationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_admins_service__WEBPACK_IMPORTED_MODULE_5__["AdminsService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }];
      };

      AdminGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-generation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-generation.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-generation/admin-generation.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-generation.page.scss */
        "./src/app/log-in/admin-generation/admin-generation.page.scss"))["default"]]
      })], AdminGenerationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-generation-admin-generation-module-es5.js.map