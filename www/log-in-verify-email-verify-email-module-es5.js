(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-verify-email-verify-email-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/verify-email/verify-email.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/verify-email/verify-email.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInVerifyEmailVerifyEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>{{ title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ descr }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/verify-email/verify-email-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: VerifyEmailPageRoutingModule */

    /***/
    function srcAppLogInVerifyEmailVerifyEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function () {
        return VerifyEmailPageRoutingModule;
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


      var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify-email.page */
      "./src/app/log-in/verify-email/verify-email.page.ts");

      var routes = [{
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
      }];

      var VerifyEmailPageRoutingModule = function VerifyEmailPageRoutingModule() {
        _classCallCheck(this, VerifyEmailPageRoutingModule);
      };

      VerifyEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyEmailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/log-in/verify-email/verify-email.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email.module.ts ***!
      \************************************************************/

    /*! exports provided: VerifyEmailPageModule */

    /***/
    function srcAppLogInVerifyEmailVerifyEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function () {
        return VerifyEmailPageModule;
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


      var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verify-email-routing.module */
      "./src/app/log-in/verify-email/verify-email-routing.module.ts");
      /* harmony import */


      var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify-email.page */
      "./src/app/log-in/verify-email/verify-email.page.ts");

      var VerifyEmailPageModule = function VerifyEmailPageModule() {
        _classCallCheck(this, VerifyEmailPageModule);
      };

      VerifyEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPageRoutingModule"]],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
      })], VerifyEmailPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/verify-email/verify-email.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInVerifyEmailVerifyEmailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/log-in/verify-email/verify-email.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email.page.ts ***!
      \**********************************************************/

    /*! exports provided: VerifyEmailPage */

    /***/
    function srcAppLogInVerifyEmailVerifyEmailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function () {
        return VerifyEmailPage;
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

      var VerifyEmailPage = /*#__PURE__*/function () {
        function VerifyEmailPage(activatedRoute, router, config) {
          _classCallCheck(this, VerifyEmailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.config = config;
          this.status = 200;
          this.title = '';
          this.descr = '';
        }

        _createClass(VerifyEmailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.mailStatusNotfound = this.config.get_error('mail_status_not_found');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('Status')) {
                _this.router.navigate(['']);

                return;
              } else {
                try {
                  // tslint:disable-next-line: max-line-length
                  _this.contents = _this.config.get_mail_status_descr('email-verification', _this.activatedRoute.snapshot.paramMap.get('Status').toString());
                  _this.title = _this.contents.title;
                  _this.descr = _this.contents.descr;
                } catch (_a) {
                  _this.title = 'Es gab einen Fehler.';
                  _this.descr = _this.mailStatusNotfound;
                }
              }
            });
          }
        }]);

        return VerifyEmailPage;
      }();

      VerifyEmailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      VerifyEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verify-email.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/verify-email/verify-email.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verify-email.page.scss */
        "./src/app/log-in/verify-email/verify-email.page.scss"))["default"]]
      })], VerifyEmailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-verify-email-verify-email-module-es5.js.map