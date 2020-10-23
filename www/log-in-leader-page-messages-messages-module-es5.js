(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-messages-messages-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/messages/messages.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/messages/messages.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInLeaderPageMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Benutzer/{{ leaderUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Nachrichten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-list class=\"content\" *ngIf=\"leadedProject.messages.length\">\n    <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of leadedProject.messages\">\n      <ion-card color=\"background\">\n        <ion-card-content>\n          <ion-text color=\"text\">{{ message.message }}</ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-buttons (click)=\"delete(message)\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n    </ion-item>\n  </ion-list>\n  <ion-card color=\"background\"name=\"MessageBox\" class=\"content\">\n    <form id=\"Formular\" #form=\"ngForm\" name=\"MessageForm\" (ngSubmit)=\"send(form)\">\n      <ion-item color=\"items\">\n        <ion-input color=\"text\" required name=\"MessageText\" [(ngModel)]=\"newMessage.message\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" [disabled]=\"form.invalid\" type=\"submit\" expand=\"block\" class=\"ion-no-margin\"><ion-label><ion-icon name=\"send\"></ion-icon>Nachricht senden</ion-label></ion-button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n  \n";
      /***/
    },

    /***/
    "./src/app/log-in/leader-page/messages/messages.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/log-in/leader-page/messages/messages.module.ts ***!
      \****************************************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function srcAppLogInLeaderPageMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/log-in/leader-page/messages/messages.page.ts");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
      }];

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/leader-page/messages/messages.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/log-in/leader-page/messages/messages.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInLeaderPageMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9sZWFkZXItcGFnZS9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/log-in/leader-page/messages/messages.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/log-in/leader-page/messages/messages.page.ts ***!
      \**************************************************************/

    /*! exports provided: MessagesPage */

    /***/
    function srcAppLogInLeaderPageMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
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


      var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/projects.service */
      "./src/app/projects.service.ts");
      /* harmony import */


      var src_app_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/messages.service */
      "./src/app/messages.service.ts");
      /* harmony import */


      var src_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/alert.service */
      "./src/app/alert.service.ts");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(activatedRoute, router, alert, projectsService, messagesService) {
          _classCallCheck(this, MessagesPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.alert = alert;
          this.projectsService = projectsService;
          this.messagesService = messagesService;
          this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0
          };
          this.leadedProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
            leader_id: 0,
            cost: 0,
            first_day_begin: {
              hours: 0,
              minutes: 0
            },
            first_day_end: {
              hours: 0,
              minutes: 0
            },
            second_day_begin: {
              hours: 0,
              minutes: 0
            },
            second_day_end: {
              hours: 0,
              minutes: 0
            },
            min_grade: 0,
            max_grade: 0,
            min_participants: 0,
            max_participants: 0,
            messages: [],
            participants: []
          };
          this.newMessage = {
            message: ''
          };
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('LeaderName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.leaderUrl = paramMap.get('LeaderName');
            });
            this.getProject();
            this.messagesService.update.subscribe(function () {
              return _this.getProject();
            });
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this2 = this;

            this.projectsService.getSelfLeadedProject('leaders').subscribe(function (data) {
              _this2.leadedProject = data.data;
            });
          }
        }, {
          key: "send",
          value: function send(message) {
            var _this3 = this;

            if (message.valid === true) {
              this.messagesService.createMessage('leaders', this.newMessage).subscribe(function (data) {
                _this3.messagesService.update.emit();

                _this3.leadedProject.messages.push(data.data);
              }, function (error) {
                _this3.alert.error('Versandt der Nachricht fehlgeschlagen!', error.error);
              });
              message.reset();
            }
          }
        }, {
          key: "delete",
          value: function _delete(Message) {
            this.leadedProject.messages = this.leadedProject.messages.filter(function (message) {
              return message.id !== Message.id;
            });
            this.messagesService.deleteMessage('leaders', Message.id);
          }
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
        }, {
          type: src_app_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]
        }];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/messages/messages.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages.page.scss */
        "./src/app/log-in/leader-page/messages/messages.page.scss"))["default"]]
      })], MessagesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-leader-page-messages-messages-module-es5.js.map