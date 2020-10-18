(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imprint-data-protection-imprint-data-protection-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/imprint-data-protection/imprint-data-protection.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imprint-data-protection/imprint-data-protection.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImprintDataProtectionImprintDataProtectionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Impressum und Datenschutzerklärung</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card *ngIf=\"contacts.length\" color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Impressum\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngFor=\"let contact of contacts\">\n        <ion-card-subtitle>{{ contact.name }}</ion-card-subtitle>\n        <ion-label *ngIf=\"contact.adress\" color=\"text\">\n          Adresse: {{ contact.adress }}<br>\n        </ion-label>\n        <ion-label *ngIf=\"contact.link\" color=\"text\">\n          offizielle Webseite: <a [href]=\"contact.link\">{{ contact.link }}</a><br>\n        </ion-label>\n        <ion-label *ngIf=\"contact.email\" color=\"text\">\n          E-Mail: {{ contact.email }}<br>\n        </ion-label>\n        <ion-label *ngIf=\"contact.phone\" color=\"text\">\n          Telefonnummer: {{ contact.phone }}<br>\n        </ion-label>\n        <br>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Datenschutz\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ dataProtection }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        AGBs\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ conditions }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/imprint-data-protection/imprint-data-protection-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/imprint-data-protection/imprint-data-protection-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ImprintDataProtectionPageRoutingModule */

    /***/
    function srcAppImprintDataProtectionImprintDataProtectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprintDataProtectionPageRoutingModule", function () {
        return ImprintDataProtectionPageRoutingModule;
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


      var _imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./imprint-data-protection.page */
      "./src/app/imprint-data-protection/imprint-data-protection.page.ts");

      var routes = [{
        path: '',
        component: _imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_3__["ImprintDataProtectionPage"]
      }];

      var ImprintDataProtectionPageRoutingModule = function ImprintDataProtectionPageRoutingModule() {
        _classCallCheck(this, ImprintDataProtectionPageRoutingModule);
      };

      ImprintDataProtectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImprintDataProtectionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/imprint-data-protection/imprint-data-protection.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/imprint-data-protection/imprint-data-protection.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ImprintDataProtectionPageModule */

    /***/
    function srcAppImprintDataProtectionImprintDataProtectionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprintDataProtectionPageModule", function () {
        return ImprintDataProtectionPageModule;
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


      var _imprint_data_protection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./imprint-data-protection-routing.module */
      "./src/app/imprint-data-protection/imprint-data-protection-routing.module.ts");
      /* harmony import */


      var _imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./imprint-data-protection.page */
      "./src/app/imprint-data-protection/imprint-data-protection.page.ts");

      var ImprintDataProtectionPageModule = function ImprintDataProtectionPageModule() {
        _classCallCheck(this, ImprintDataProtectionPageModule);
      };

      ImprintDataProtectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imprint_data_protection_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImprintDataProtectionPageRoutingModule"]],
        declarations: [_imprint_data_protection_page__WEBPACK_IMPORTED_MODULE_6__["ImprintDataProtectionPage"]]
      })], ImprintDataProtectionPageModule);
      /***/
    },

    /***/
    "./src/app/imprint-data-protection/imprint-data-protection.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/imprint-data-protection/imprint-data-protection.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImprintDataProtectionImprintDataProtectionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcHJpbnQtZGF0YS1wcm90ZWN0aW9uL2ltcHJpbnQtZGF0YS1wcm90ZWN0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/imprint-data-protection/imprint-data-protection.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/imprint-data-protection/imprint-data-protection.page.ts ***!
      \*************************************************************************/

    /*! exports provided: ImprintDataProtectionPage */

    /***/
    function srcAppImprintDataProtectionImprintDataProtectionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprintDataProtectionPage", function () {
        return ImprintDataProtectionPage;
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


      var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config.service */
      "./src/app/config.service.ts");

      var ImprintDataProtectionPage = /*#__PURE__*/function () {
        function ImprintDataProtectionPage(config) {
          _classCallCheck(this, ImprintDataProtectionPage);

          this.config = config;
          this.contacts = [];
          this.conditions = '';
          this.dataProtection = '';
          this.contents = [];
        }

        _createClass(ImprintDataProtectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contacts = this.config.imprint.contacts;
            this.conditions = this.config.conditions.full_conditions;
            this.dataProtection = this.config.data_protection.data_protection;
          }
        }]);

        return ImprintDataProtectionPage;
      }();

      ImprintDataProtectionPage.ctorParameters = function () {
        return [{
          type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
        }];
      };

      ImprintDataProtectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imprint-data-protection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./imprint-data-protection.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/imprint-data-protection/imprint-data-protection.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./imprint-data-protection.page.scss */
        "./src/app/imprint-data-protection/imprint-data-protection.page.scss"))["default"]]
      })], ImprintDataProtectionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=imprint-data-protection-imprint-data-protection-module-es5.js.map