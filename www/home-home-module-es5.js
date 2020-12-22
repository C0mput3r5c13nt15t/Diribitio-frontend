(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Startseite</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" [routerLink]=\"['../../Help']\"><ion-icon name=\"help-circle\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <img class=\"logo_light\" src=\"../../assets/logo/Logo_light.svg\">\n    <img class=\"logo_dark\" src=\"../../assets/logo/Logo_dark.svg\">\n    <ion-card-header>\n      <ion-card-title>{{ welcome.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"welcome.text\">\n      <ion-label color=\"text\">\n        {{ welcome.text }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>Zeitplan</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item color=\"items\" lines=\"none\">\n          ab <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Beginn\" [(ngModel)]=\"schedule.begin\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control\">\n          <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n          <ion-label>Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.begin || currentDate > schedule.control\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>\n          <ion-label color=\"text\">Registrierung und Erstellung der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Anmeldung\" [(ngModel)]=\"schedule.control\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.control && currentDate <= schedule.registration\">\n          <ion-icon slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n          <ion-label>Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.control || currentDate > schedule.registration\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"shield-checkmark\"></ion-icon>\n          <ion-label color=\"text\">Kontrolle und Freigabe der {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Anmeldung\" [(ngModel)]=\"schedule.registration\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.registration && currentDate <= schedule.sort_students\">\n          <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n          <ion-label>Anmeldung für die {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.registration || currentDate > schedule.sort_students\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"log-in\"></ion-icon>\n          <ion-label color=\"text\">Anmeldung für die {{ projectsNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Sortierung\" [(ngModel)]=\"schedule.sort_students\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.sort_students && currentDate <= schedule.exchange\">\n          <ion-icon slot=\"start\" name=\"funnel\"></ion-icon>\n          <ion-label>Sortierung durch den Algorithmus</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.sort_students || currentDate > schedule.exchange\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"funnel\"></ion-icon>\n          <ion-label color=\"text\">Sortierung durch den Algorithmus</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Tausch\" [(ngModel)]=\"schedule.exchange\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.exchange && currentDate <= schedule.projects\">\n          <ion-icon slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n          <ion-label>Tauschphase</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.exchange || currentDate > schedule.projects\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"swap-horizontal\"></ion-icon>\n          <ion-label color=\"text\">Tauschphase</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Projekte\" [(ngModel)]=\"schedule.projects\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n        <ion-item color=\"buttons\" lines=\"none\" *ngIf=\"currentDate > schedule.projects && currentDate <= schedule.end\">\n          <ion-icon slot=\"start\" name=\"flag\"></ion-icon>\n          <ion-label>{{ eventNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\" *ngIf=\"currentDate <= schedule.projects || currentDate > schedule.end\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"flag\"></ion-icon>\n          <ion-label color=\"text\">{{ eventNoun }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          bis<ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Bitte ein Datum wählen\" readonly name=\"Ende\" [(ngModel)]=\"schedule.end\" monthShortNames='Jan, Feb, März, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez' display-timezone=\"utc\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngFor=\"let article of articles\" color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>{{ article.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"article.text\">\n      <ion-label color=\"text\">\n        {{ article.text }}\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
          path: '',
          component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
        }])],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(config, scheduleService) {
          _classCallCheck(this, HomePage);

          this.config = config;
          this.scheduleService = scheduleService;
          this.subscriptions = [];
          /**
           * Contains the time schedule of the application
           */

          this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
          };
          this.welcome = this.config.home.welcome;
          this.articles = this.config.home.articles;
          this.projectsNoun = this.config.app_config.projects_noun;
          this.eventNoun = this.config.app_config.event_name;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');
            this.getSchedule();
            this.subscriptions.push(this.scheduleService.update.subscribe(function () {
              return _this.getSchedule();
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
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map