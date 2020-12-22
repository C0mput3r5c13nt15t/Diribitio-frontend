(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-student-messages-student-messages-module"], {
    /***/
    "V6Bk":
    /*!*********************************************************************************!*\
      !*** ./src/app/log-in/student-page/student-messages/student-messages.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: StudentMessagesPageModule */

    /***/
    function V6Bk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentMessagesPageModule", function () {
        return StudentMessagesPageModule;
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


      var _student_messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-messages.page */
      "bAnB");

      var routes = [{
        path: '',
        component: _student_messages_page__WEBPACK_IMPORTED_MODULE_6__["StudentMessagesPage"]
      }];

      var StudentMessagesPageModule = function StudentMessagesPageModule() {
        _classCallCheck(this, StudentMessagesPageModule);
      };

      StudentMessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_student_messages_page__WEBPACK_IMPORTED_MODULE_6__["StudentMessagesPage"]]
      })], StudentMessagesPageModule);
      /***/
    },

    /***/
    "bAnB":
    /*!*******************************************************************************!*\
      !*** ./src/app/log-in/student-page/student-messages/student-messages.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: StudentMessagesPage */

    /***/
    function bAnB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentMessagesPage", function () {
        return StudentMessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_student_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./student-messages.page.html */
      "kxSg");
      /* harmony import */


      var _student_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./student-messages.page.scss */
      "lbl6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/messages.service */
      "Hzbo");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/students.service */
      "ZvwH");

      var StudentMessagesPage = /*#__PURE__*/function () {
        function StudentMessagesPage(activatedRoute, router, alert, projectsService, studentsService, messagesService, config) {
          _classCallCheck(this, StudentMessagesPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.alert = alert;
          this.projectsService = projectsService;
          this.studentsService = studentsService;
          this.messagesService = messagesService;
          this.config = config;
          this.subscriptions = [];
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
          this.loadedStudent = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
            exchange_id: 0,
            exchange_requests: [],
            first_friend: 0,
            second_friend: 0,
            third_friend: 0,
            first_wish: 0,
            second_wish: 0,
            third_wish: 0,
            project_id: 0,
            role: 2
          };
          this.newMessage = {
            project_id: 0,
            message: ''
          };
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(StudentMessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('ParticipantName')) {
                _this.router.navigate(['']);

                return;
              }

              _this.studentUrl = paramMap.get('ParticipantName');
            });
            this.getProject();
            this.getStudent();
            this.subscriptions.push(this.messagesService.update.subscribe(function () {
              return _this.getProject();
            }), this.messagesService.update.subscribe(function () {
              return _this.getStudent();
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
        }, {
          key: "getStudent",
          value: function getStudent() {
            var _this2 = this;

            this.studentsService.getSelfStudent().subscribe(function (data) {
              _this2.loadedStudent = data.data;
            });
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this3 = this;

            this.projectsService.getSelfLeadedProject('students').subscribe(function (data) {
              _this3.leadedProject = data.data;
            });
          }
        }, {
          key: "send",
          value: function send(message) {
            var _this4 = this;

            if (message.valid === true) {
              this.messagesService.createMessage('students', this.newMessage).subscribe(function (data) {
                _this4.messagesService.update.emit();

                _this4.leadedProject.messages.push(data.data);
              }, function (error) {
                _this4.alert.error('Versandt der Nachricht fehlgeschlagen!', error.error);
              });
              message.reset();
            }
          }
        }, {
          key: "delete",
          value: function _delete(message) {
            this.leadedProject.messages = this.leadedProject.messages.filter(function (filterMessage) {
              return message.id !== filterMessage.id;
            });
            this.messagesService.deleteMessage('students', message.id);
          }
        }]);

        return StudentMessagesPage;
      }();

      StudentMessagesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"]
        }, {
          type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_9__["StudentsService"]
        }, {
          type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]
        }];
      };

      StudentMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_student_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StudentMessagesPage);
      /***/
    },

    /***/
    "kxSg":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/student-messages/student-messages.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kxSg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Nachrichten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-list class=\"content\" *ngIf=\"leadedProject.messages.length\">\n    <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of leadedProject.messages\">\n      <ion-buttons slot=\"end\" (click)=\"delete(message)\" *ngIf=\"message.sender_name == loadedStudent.user_name\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n      <ion-card class=\"message sended_message\" slot=\"end\" color=\"background\" *ngIf=\"message.sender_name == loadedStudent.user_name\">\n        <ion-card-content>\n          <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n          <ion-text color=\"text\">{{ message.message }}</ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class=\"message\" slot=\"start\" color=\"background\" *ngIf=\"message.sender_name != loadedStudent.user_name\">\n        <ion-card-content>\n          <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n          <ion-text color=\"text\">{{ message.message }}</ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-buttons slot=\"start\" (click)=\"delete(message)\" *ngIf=\"message.sender_name != loadedStudent.user_name\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n    </ion-item>\n  </ion-list>\n  <ion-card color=\"background\"name=\"MessageBox\" class=\"content\">\n    <form id=\"Formular\" #form=\"ngForm\" name=\"MessageForm\" (ngSubmit)=\"send(form)\">\n      <ion-item color=\"items\">\n        <ion-input color=\"text\" required name=\"MessageText\" [(ngModel)]=\"newMessage.message\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" [disabled]=\"form.invalid\" type=\"submit\" expand=\"block\" class=\"ion-no-margin\"><ion-label><ion-icon name=\"send\"></ion-icon> Nachricht senden</ion-label></ion-button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "lbl6":
    /*!*********************************************************************************!*\
      !*** ./src/app/log-in/student-page/student-messages/student-messages.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function lbl6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LW1lc3NhZ2VzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-student-page-student-messages-student-messages-module-es5.js.map