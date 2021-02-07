(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "7wo0":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function wo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
      }];

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "ADm/":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function ADm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Uncc":
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /*! exports provided: SettingsPage */

    /***/
    function Uncc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "mzE/");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "ADm/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/settings.service */
      "6nr9");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(settings, config) {
          _classCallCheck(this, SettingsPage);

          this.settings = settings;
          this.config = config;
          this.subscriptions = [];
          this.background = this.config.ui.default_background;
          this.color = this.config.ui.default_color;
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.text1 = this.config.get_content_by_index('settings', 0);
            this.text2 = this.config.get_content_by_index('settings', 1);
            var theme = this.settings.theme;
            var colorAndBackground = theme.split('-', 2);
            this.background = colorAndBackground[0];
            this.color = colorAndBackground[1];
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
          key: "change",
          value: function change() {
            this.settings.change_theme(this.background, this.color);
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsPage);
      /***/
    },

    /***/
    "mzE/":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function mzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Einstellungen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>Theme ändern</ion-card-title>\n      <ion-card-subtitle>Hintergrund</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ text1 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-segment mode=\"md\"color=\"buttons\" [(ngModel)]=\"background\" (ionChange)=\"change()\">\n        <ion-segment-button value=\"dark\">\n          <ion-label color=\"text\">Dunkel</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"light\">\n          <ion-label color=\"text\">Hell</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"auto\">\n          <ion-label color=\"text\">Automatisch</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-card-content>\n    <ion-card-header>\n      <ion-card-subtitle>Vordergrund</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color=\"text\">\n        {{ text2 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-segment mode=\"md\" color=\"buttons\" [(ngModel)]=\"color\" (ionChange)=\"change()\">\n        <ion-segment-button value=\"blue\">\n          <ion-label color=\"text\">Blau</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"pink\">\n          <ion-label color=\"text\">Pink</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"yellow\">\n          <ion-label color=\"text\">Gelb</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"green\">\n          <ion-label color=\"text\">Grün</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map