(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"], {
    /***/
    "7XJi":
    /*!*************************************!*\
      !*** ./src/app/help/help.module.ts ***!
      \*************************************/

    /*! exports provided: HelpPageModule */

    /***/
    function XJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
        return HelpPageModule;
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


      var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./help.page */
      "DZkv");

      var routes = [{
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]
      }];

      var HelpPageModule = function HelpPageModule() {
        _classCallCheck(this, HelpPageModule);
      };

      HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
      })], HelpPageModule);
      /***/
    },

    /***/
    "BX3c":
    /*!*************************************!*\
      !*** ./src/app/help/help.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function BX3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DZkv":
    /*!***********************************!*\
      !*** ./src/app/help/help.page.ts ***!
      \***********************************/

    /*! exports provided: HelpPage */

    /***/
    function DZkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
        return HelpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./help.page.html */
      "uL5U");
      /* harmony import */


      var _help_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./help.page.scss */
      "BX3c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var HelpPage = /*#__PURE__*/function () {
        function HelpPage(config) {
          _classCallCheck(this, HelpPage);

          this.config = config;
          this.subscriptions = [];
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
          /**
           * Contains the instructions for using the application
           */

          this.instructions = this.config.help.instructions;
        }

        _createClass(HelpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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

        return HelpPage;
      }();

      HelpPage.ctorParameters = function () {
        return [{
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }];
      };

      HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-help',
        template: _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_help_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HelpPage);
      /***/
    },

    /***/
    "uL5U":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function uL5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Home\"></ion-back-button>\n    </ion-button>\n    <ion-title>Hilfe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\" *ngFor=\"let instruction of instructions\">\n    <ion-card-header>\n      <ion-card-title>{{ instruction.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"instruction.title1 || instruction.text1\">\n      <ion-card-subtitle *ngIf=\"instruction.title1\">{{ instruction.title1 }}</ion-card-subtitle>\n      <ion-label *ngIf=\"instruction.text1\" color=\"text\">\n        {{ instruction.text1 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"instruction.title2 || instruction.text2\">\n      <ion-card-subtitle *ngIf=\"instruction.title2\">{{ instruction.title2 }}</ion-card-subtitle>\n      <ion-label *ngIf=\"instruction.text2\" color=\"text\">\n        {{ instruction.text2 }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=help-help-module-es5.js.map