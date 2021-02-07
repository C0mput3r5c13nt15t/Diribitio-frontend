(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-verify-email-verify-email-module"], {
    /***/
    "6BxV":
    /*!************************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function BxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "QRSX":
    /*!************************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email.module.ts ***!
      \************************************************************/

    /*! exports provided: VerifyEmailPageModule */

    /***/
    function QRSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function () {
        return VerifyEmailPageModule;
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


      var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify-email.page */
      "t5V0");

      var routes = [{
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]
      }];

      var VerifyEmailPageModule = function VerifyEmailPageModule() {
        _classCallCheck(this, VerifyEmailPageModule);
      };

      VerifyEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
      })], VerifyEmailPageModule);
      /***/
    },

    /***/
    "U8EI":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/verify-email/verify-email.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U8EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>{{ title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ descr }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "t5V0":
    /*!**********************************************************!*\
      !*** ./src/app/log-in/verify-email/verify-email.page.ts ***!
      \**********************************************************/

    /*! exports provided: VerifyEmailPage */

    /***/
    function t5V0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function () {
        return VerifyEmailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verify-email.page.html */
      "U8EI");
      /* harmony import */


      var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verify-email.page.scss */
      "6BxV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var VerifyEmailPage = /*#__PURE__*/function () {
        function VerifyEmailPage(activatedRoute, router, config) {
          _classCallCheck(this, VerifyEmailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.config = config;
          this.subscriptions = [];
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
                  _this.contents = _this.config.get_mail_status_descr('email-verification', Number(_this.activatedRoute.snapshot.paramMap.get('Status')));
                  _this.title = _this.contents.title;
                  _this.descr = _this.contents.descr;
                } catch (_a) {
                  _this.title = 'Es gab einen Fehler.';
                  _this.descr = _this.mailStatusNotfound;
                }
              }
            });
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
        }]);

        return VerifyEmailPage;
      }();

      VerifyEmailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      };

      VerifyEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-email',
        template: _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerifyEmailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-verify-email-verify-email-module-es5.js.map