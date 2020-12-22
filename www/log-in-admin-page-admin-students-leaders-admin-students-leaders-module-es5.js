(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-students-leaders-admin-students-leaders-module"], {
    /***/
    "CqKw":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CqKw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Schüler und {{ projectNoun }}leiter verwalten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>Schüler</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text1\">\n      <ion-label color=\"text\">\n        {{ text1 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-button slot=\"start\" color=\"buttons\" (click)=\"refresh()\"><ion-icon color=\"text\" name=\"refresh\"></ion-icon></ion-button>\n        <ion-button slot=\"start\" color=\"buttons\" (click)=\"search()\"><ion-icon color=\"text\" name=\"search\"></ion-icon></ion-button>\n        <ion-input color=\"text\" (keypress)=\"eventHandler($event.keyCode)\" placeholder=\"Vorname Nachname Klasse\" type=\"text\" [(ngModel)]=\"searchValue\" name=\"Serch\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n    <ion-card-content color=\"background\">\n      <ion-grid *ngIf=\"searchStudents\">\n        <ion-row>\n          <ion-col><h2>Benutzername</h2></ion-col>\n          <ion-col><h2>Schüler</h2></ion-col>\n          <ion-col><h2>Wünsche</h2></ion-col>\n          <ion-col><h2>Freunde</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"background\" *ngFor=\"let participant of searchStudents\" id=\"participant.ID\">\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.user_name }}\n            </ion-label>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\">(Leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}\n            </ion-label>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\">(Leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_wish_title }}<br>\n              {{ participant.second_wish_title }}<br>\n              {{ participant.third_wish_title }}\n            </ion-label>\n          </ion-col>\n          <ion-col color=\"text\">\n            <ion-label color=\"text\">\n              {{ participant.first_friend_name }}<br>\n              {{ participant.second_friend_name }}<br>\n              {{ participant.third_friend_name }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <a *ngIf=\"participant.project_id != 0 && participant.project_title != 'fehlerhaftes Projekt'\" routerLink='../../{{ projectsNoun }}/{{participant.project_id}}'>{{ participant.project_title }}</a>\n            <a *ngIf=\"participant.project_id == 0\">kein {{ projectNoun }}</a>\n            <a *ngIf=\"participant.project_title == 'fehlerhaftes Projekt'\">{{ projectNoun }} ist fehlerhaft</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid *ngIf=\"!searchStudents\">\n        <ion-row>\n          <ion-col><h2>Benutzername</h2></ion-col>\n          <ion-col><h2>Schüler</h2></ion-col>\n          <ion-col><h2>Wünsche</h2></ion-col>\n          <ion-col><h2>Freunde</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"background\" *ngFor=\"let participant of loadedStudents\" id=\"participant.ID\">\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.user_name }}\n            </ion-label>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\">(Leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}\n            </ion-label>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\"> ({{ projectNoun }}leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_wish_title }}<br>\n              {{ participant.second_wish_title }}<br>\n              {{ participant.third_wish_title }}\n            </ion-label>\n          </ion-col>\n          <ion-col color=\"text\">\n            <ion-label color=\"text\">\n              {{ participant.first_friend_name }}<br>\n              {{ participant.second_friend_name }}<br>\n              {{ participant.third_friend_name }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <a *ngIf=\"participant.project_id != 0 && participant.project_title != 'fehlerhaftes Projekt'\" routerLink='../../{{ projectsNoun }}/{{participant.project_id}}'>{{ participant.project_title }}</a>\n            <a *ngIf=\"participant.project_id == 0\">kein {{ projectNoun }}</a>\n            <a *ngIf=\"participant.project_title == 'fehlerhaftes Projekt'\">{{ projectNoun }} ist fehlerhaft</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngIf=\"page < lastPage && !searchStudents\" class=\"ion-padding\">\n        <ion-button color=\"buttons\" (click)=\"getMoreStudents()\" expand=\"block\" class=\"ion-no-margin\">Weiter Schüler laden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ projectNoun }}leiter\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text2\">\n      <ion-label color=\"text\">\n        {{ text2 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col><h2>{{ projectNoun }}leiter</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"items\" lines=\"none\" *ngFor=\"let leader of loadedLeaders\">\n          <ion-col>\n            <ion-label color=\"text\">{{ leader.user_name }}</ion-label>\n          </ion-col>\n          <ion-col>\n            <a color=\"buttons\" *ngIf=\"leader.project_id != 0\" routerLink='../../{{ projectsNoun }}/{{ leader.project_id }}'>{{ leader.project_title }}</a>\n            <ion-icon color=\"danger\" name=\"trash\" *ngIf=\"leader.project_id == 0\" (click)=\"deleteLeader(leader.id)\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Schüler sortieren\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text3\">\n      <ion-label color=\"text\">\n        {{ text3 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <div class=\"ion-padding\" *ngIf=\"!sorted\">\n        <ion-button color=\"buttons\" [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" (click)=\"createSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Sortiervorschlag erstellen</ion-button>\n      </div>\n      <div class=\"ion-padding\" *ngIf=\"sorted\">\n        <ion-button color=\"buttons\" [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" (click)=\"createSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Neuen Sortiervorschlag erstellen</ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" (click)=\"requestSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >aktuellen Sortiervorschlag ansehen</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\" *ngIf=\"sortedProjects.length\">\n    <ion-card-header>\n      <ion-card-title>\n        Vorschlag für Einsortierung der Schüler\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text4\">\n      <ion-label color=\"text\">\n        {{ text4 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-card color=\"background\" *ngFor=\"let project of sortedProjects\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-label *ngIf=\"project.participants.length < project.min_participants\" color=\"danger\">{{ project.title }} (Zu wenige Teilnehmer)</ion-label>\n            <ion-label *ngIf=\"project.participants.length > project.max_participants\" color=\"danger\">{{ project.title }} (Zu viele Teilnehmer)</ion-label>\n            <ion-label *ngIf=\"project.participants.length >= project.min_participants && project.participants.length <= project.max_participants\">{{ project.title }}</ion-label>\n          </ion-card-title>\n          <ion-card-subtitle>\n            <ion-label color=\"text\">{{ project.min_grade }}. bis {{ project.max_grade }}.Klasse | {{ project.min_participants }} bis {{ project.max_participants }} Teilnehmer | {{ project.leader_name }}</ion-label>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <div *ngIf=\"project.leader && project.leader_type === 'App\\\\Student'\">\n            <ion-item color=\"items\">\n              <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ project.leader.first_name }} {{ project.leader.last_name }} {{ project.leader.grade }}{{ project.leader.letter }}</ion-text>\n            </ion-item>\n          </div>\n          <div *ngIf=\"project.assistant_student_leaders.length\">\n            <ion-item color=\"items\" *ngFor=\"let assistant of project.assistant_student_leaders\">\n              <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n            </ion-item>\n          </div>\n          <div *ngIf=\"project.participants.length\">\n            <ion-item color=\"items\" *ngFor=\"let participant of project.participants\">\n              <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              <ion-select slot=\"end\" name=\"ParticipantProject\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\" (ionChange)=\"moveParticipant($event)\"> \n                <ion-select-option *ngFor=\"let newProject of sortedProjects\" [value]=\"[participant, project.id, newProject.id]\">{{ newProject.title }} ({{ newProject.min_grade }}. - {{ newProject.max_grade }}.Klasse)</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n    <div class=\"ion-padding\">\n      <ion-button color=\"buttons\" (click)=\"editSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Änderungen speichern</ion-button>\n    </div>\n    <div class=\"ion-padding\">\n      <ion-button color=\"buttons\" [disabled]=\"!sorted\" (click)=\"applySortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Vorschlag anwenden</ion-button>\n    </div>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "SMJN":
    /*!*****************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.ts ***!
      \*****************************************************************************************/

    /*! exports provided: AdminStudentsLeadersPage */

    /***/
    function SMJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPage", function () {
        return AdminStudentsLeadersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_students_leaders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-students-leaders.page.html */
      "CqKw");
      /* harmony import */


      var _admin_students_leaders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-students-leaders.page.scss */
      "qB/M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/students.service */
      "ZvwH");
      /* harmony import */


      var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/leaders.service */
      "PO/Q");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/admins.service */
      "uVPj");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/config.service */
      "r4Kj");
      /* harmony import */


      var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/schedule.service */
      "OeS+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AdminStudentsLeadersPage = /*#__PURE__*/function () {
        function AdminStudentsLeadersPage(studentsService, scheduleService, leadersService, projectsService, activatedRoute, alertCtrl, adminsService, alert, config) {
          _classCallCheck(this, AdminStudentsLeadersPage);

          this.studentsService = studentsService;
          this.scheduleService = scheduleService;
          this.leadersService = leadersService;
          this.projectsService = projectsService;
          this.activatedRoute = activatedRoute;
          this.alertCtrl = alertCtrl;
          this.adminsService = adminsService;
          this.alert = alert;
          this.config = config;
          this.subscriptions = [];
          this.loadedProjects = [];
          this.loadedParticipantsNames = [];
          this.sortedProjects = [];
          this.loadedStudents = [];
          this.loadedLeaders = [];
          this.sorted = false;
          /**
           * Contains the time schedule of the application
           */

          this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en')
          };
          this.text1 = this.config.get_content_by_index('admin-students-leaders', 0);
          this.text2 = this.config.get_content_by_index('admin-students-leaders', 1);
          this.text3 = this.config.get_content_by_index('admin-students-leaders', 2);
          this.text4 = this.config.get_content_by_index('admin-students-leaders', 3);
          this.page = 1;
          this.lastPage = 1;
          this.projectNoun = this.config.app_config.project_noun;
          this.projectsNoun = this.config.app_config.projects_noun;
          /**
           * Conatins the name of the event that the application is used for
           */

          this.eventName = this.config.app_config.event_name;
        }

        _createClass(AdminStudentsLeadersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              _this.adminUrl = paramMap.get('AdminName');
            });
            this.load();
            this.subscriptions.push(this.studentsService.update.subscribe(function () {
              return _this.load();
            }), this.leadersService.update.subscribe(function () {
              return _this.load();
            }), this.projectsService.update.subscribe(function () {
              return _this.load();
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
          key: "load",
          value: function load() {
            var _this2 = this;

            this.alert.loading(2000);
            this.page = 1;
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this2.schedule = data.data;
            });
            this.getProjects();
            this.getAllStudentNames();

            if (this.currentDate > this.schedule.sort_students && this.currentDate <= this.schedule.exchange) {
              this.requestSortingProposal();
            }
          }
        }, {
          key: "eventHandler",
          value: function eventHandler(keyCode) {
            if (keyCode === 13) {
              this.search();
            }
          }
        }, {
          key: "search",
          value: function search() {
            var _this3 = this;

            // tslint:disable-next-line: triple-equals
            if (this.searchValue == '') {
              this.searchStudents = null;
              return;
            }

            this.studentsService.getAllSearchedStudents(this.searchValue).subscribe(function (data) {
              _this3.searchStudents = [];
              data.data.forEach(function (student) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var stu;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          stu = {
                            id: 0,
                            user_name: '',
                            first_name: '',
                            last_name: '',
                            grade: 1,
                            letter: '',
                            first_friend: 0,
                            first_friend_name: '',
                            second_friend: 0,
                            second_friend_name: '',
                            third_friend: 0,
                            third_friend_name: '',
                            first_wish: 0,
                            first_wish_title: '',
                            second_wish: 0,
                            second_wish_title: '',
                            third_wish: 0,
                            third_wish_title: '',
                            project_id: 0,
                            project_title: 'kein Projekt',
                            role: 1
                          };
                          stu.id = student.id;
                          stu.user_name = student.user_name;
                          stu.first_name = student.first_name;
                          stu.last_name = student.last_name;
                          stu.grade = student.grade;
                          stu.letter = student.letter;
                          stu.first_friend = student.first_friend;
                          stu.second_friend = student.second_friend;
                          stu.third_friend = student.third_friend;
                          stu.first_wish = student.first_wish;
                          stu.second_wish = student.second_wish;
                          stu.third_wish = student.third_wish;
                          stu.project_id = student.project_id;
                          stu.role = student.role;
                          stu.first_friend_name = this.getParticipantName(stu.first_friend);
                          stu.second_friend_name = this.getParticipantName(stu.second_friend);
                          stu.third_friend_name = this.getParticipantName(stu.third_friend);
                          stu.first_wish_title = this.getProjectTitle(stu.first_wish);
                          stu.second_wish_title = this.getProjectTitle(stu.second_wish);
                          stu.third_wish_title = this.getProjectTitle(stu.third_wish);
                          stu.project_title = this.getProjectTitle(stu.project_id);
                          this.searchStudents.push(stu);

                        case 23:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.page = 1;
            this.getProjects();
            this.getAllStudentNames();
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this4 = this;

            this.projectsService.getAllProjects().subscribe(function (data) {
              _this4.loadedProjects = data.data;

              _this4.getStudents();

              _this4.getLeaders();
            });
          }
        }, {
          key: "getAllStudentNames",
          value: function getAllStudentNames() {
            var _this5 = this;

            this.studentsService.getAllStudentNames().subscribe(function (data) {
              _this5.loadedParticipantsNames = data.data;
            });
          }
        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this6 = this;

            this.loadedStudents = [];
            this.studentsService.getAllStudents(this.page).subscribe(function (data) {
              _this6.lastPage = data.meta.last_page;
              data.data.forEach(function (student) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var stu;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          stu = {
                            id: 0,
                            user_name: '',
                            first_name: '',
                            last_name: '',
                            grade: 1,
                            letter: '',
                            first_friend: 0,
                            first_friend_name: '',
                            second_friend: 0,
                            second_friend_name: '',
                            third_friend: 0,
                            third_friend_name: '',
                            first_wish: 0,
                            first_wish_title: '',
                            second_wish: 0,
                            second_wish_title: '',
                            third_wish: 0,
                            third_wish_title: '',
                            project_id: 0,
                            project_title: 'kein Projekt',
                            role: 1
                          };
                          stu.id = student.id;
                          stu.user_name = student.user_name;
                          stu.first_name = student.first_name;
                          stu.last_name = student.last_name;
                          stu.grade = student.grade;
                          stu.letter = student.letter;
                          stu.first_friend = student.first_friend;
                          stu.second_friend = student.second_friend;
                          stu.third_friend = student.third_friend;
                          stu.first_wish = student.first_wish;
                          stu.second_wish = student.second_wish;
                          stu.third_wish = student.third_wish;
                          stu.project_id = student.project_id;
                          stu.role = student.role;
                          stu.first_friend_name = this.getParticipantName(stu.first_friend);
                          stu.second_friend_name = this.getParticipantName(stu.second_friend);
                          stu.third_friend_name = this.getParticipantName(stu.third_friend);
                          stu.first_wish_title = this.getProjectTitle(stu.first_wish);
                          stu.second_wish_title = this.getProjectTitle(stu.second_wish);
                          stu.third_wish_title = this.getProjectTitle(stu.third_wish);
                          stu.project_title = this.getProjectTitle(stu.project_id); // await this.getWishNames(stu.first_wish, stu.second_wish, stu.third_wish, stu);
                          // await this.getFriendsNames(stu.first_friend, stu.second_friend, stu.third_friend, stu);

                          this.loadedStudents.push(stu);

                        case 23:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            });
          }
        }, {
          key: "getMoreStudents",
          value: function getMoreStudents() {
            var _this7 = this;

            this.alert.loading(2000);
            this.page += 1;
            this.studentsService.getAllStudents(this.page).subscribe(function (data) {
              data.data.forEach(function (student) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var stu;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          stu = {
                            id: 0,
                            user_name: '',
                            first_name: '',
                            last_name: '',
                            grade: 1,
                            letter: '',
                            first_friend: 0,
                            first_friend_name: '',
                            second_friend: 0,
                            second_friend_name: '',
                            third_friend: 0,
                            third_friend_name: '',
                            first_wish: 0,
                            first_wish_title: '',
                            second_wish: 0,
                            second_wish_title: '',
                            third_wish: 0,
                            third_wish_title: '',
                            project_id: 0,
                            project_title: 'kein Projekt',
                            role: 1
                          };
                          stu.id = student.id;
                          stu.user_name = student.user_name;
                          stu.first_name = student.first_name;
                          stu.last_name = student.last_name;
                          stu.grade = student.grade;
                          stu.letter = student.letter;
                          stu.first_friend = student.first_friend;
                          stu.second_friend = student.second_friend;
                          stu.third_friend = student.third_friend;
                          stu.first_wish = student.first_wish;
                          stu.second_wish = student.second_wish;
                          stu.third_wish = student.third_wish;
                          stu.project_id = student.project_id;
                          stu.role = student.role;
                          stu.first_friend_name = this.getParticipantName(stu.first_friend);
                          stu.second_friend_name = this.getParticipantName(stu.second_friend);
                          stu.third_friend_name = this.getParticipantName(stu.third_friend);
                          stu.first_wish_title = this.getProjectTitle(stu.first_wish);
                          stu.second_wish_title = this.getProjectTitle(stu.second_wish);
                          stu.third_wish_title = this.getProjectTitle(stu.third_wish);
                          stu.project_title = this.getProjectTitle(stu.project_id);
                          this.loadedStudents.push(stu);

                        case 23:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });
            });
          }
        }, {
          key: "getLeaders",
          value: function getLeaders() {
            var _this8 = this;

            this.loadedLeaders = [];
            this.leadersService.getAllLeaders().subscribe(function (data) {
              data.data.forEach(function (leader) {
                var lea = {
                  id: 0,
                  user_name: '',
                  email: '',
                  project_id: 0,
                  project_title: 'kein Projekt'
                };
                lea.id = leader.id;
                lea.user_name = leader.user_name;
                lea.email = leader.email;
                lea.project_id = leader.project_id;
                lea.project_title = _this8.getProjectTitle(lea.project_id);

                _this8.loadedLeaders.push(lea);
              });
            });
          }
        }, {
          key: "getProjectTitle",
          value: function getProjectTitle(projectID) {
            if (projectID !== 0 && this.loadedProjects) {
              var searchedProject = this.loadedProjects.filter(function (project) {
                return project.id === projectID;
              });

              if (searchedProject[0] != null) {
                return searchedProject[0].title;
              } else {
                return 'fehlerhaftes Projekt';
              }
            } else {
              return 'kein Projekt';
            }
          }
        }, {
          key: "getParticipantName",
          value: function getParticipantName(participantID) {
            if (participantID !== 0 && this.loadedParticipantsNames) {
              var searchedParticipant = this.loadedParticipantsNames.filter(function (participant) {
                return participant.id === participantID;
              });

              if (searchedParticipant[0] != null) {
                return searchedParticipant[0].first_name + ' ' + searchedParticipant[0].last_name;
              } else {
                return 'fehlerhafter Freund';
              }
            } else {
              return '';
            }
          }
        }, {
          key: "deleteLeader",
          value: function deleteLeader(leaderID) {
            var _this9 = this;

            this.alertCtrl.create({
              header: 'Sind sie sicher?',
              message: 'Wollen sie diesen Projektleiter wirklich unwiederruflich löschen?',
              buttons: [{
                text: 'Abbrechen',
                role: 'cancel'
              }, {
                text: 'Löschen',
                handler: function handler() {
                  _this9.leadersService.deleteLeader(leaderID);
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }, {
          key: "createSortingProposal",
          value: function createSortingProposal() {
            var _this10 = this;

            this.adminsService.createSortingProposal().subscribe(function (data) {
              _this10.alert.alert(data.message);

              _this10.sorted = true;
              _this10.sortedProjects = data.data; // tslint:disable-next-line: no-shadowed-variable
            }, function (error) {
              _this10.alert.error('Sortierung der Schüler fehlgeschlagen.', error.error);
            });
          }
        }, {
          key: "requestSortingProposal",
          value: function requestSortingProposal() {
            var _this11 = this;

            this.adminsService.requestSortingProposal().subscribe(function (data) {
              _this11.sortedProjects = data.data;
              _this11.sorted = true; // tslint:disable-next-line: no-shadowed-variable
            }, function (error) {
              _this11.alert.error('Es konnte kein Sortiervorschlag gefunden werden.', error.error);
            });
          }
        }, {
          key: "moveParticipant",
          value: function moveParticipant(event) {
            var participant = event.detail.value[0];
            var oldProjectId = event.detail.value[1];
            var newProjectId = event.detail.value[2];

            if (oldProjectId !== 0 && this.sortedProjects) {
              var searchedProject = this.sortedProjects.filter(function (project) {
                return project.id === oldProjectId;
              });

              if (searchedProject[0] != null) {
                var oldProject = searchedProject[0];
                var index = oldProject.participants.indexOf(participant);

                if (index !== -1) {
                  oldProject.participants.splice(index, 1);
                }
              }
            }

            if (newProjectId !== 0 && this.sortedProjects) {
              var _searchedProject = this.sortedProjects.filter(function (project) {
                return project.id === newProjectId;
              });

              if (_searchedProject[0] != null) {
                var newProject = _searchedProject[0];

                if (participant) {
                  newProject.participants.push(participant);
                }
              }
            }
          }
        }, {
          key: "editSortingProposal",
          value: function editSortingProposal() {
            var newProposal = {
              data: this.sortedProjects
            };
            this.adminsService.editSortingProposal(newProposal); // this.requestSortingProposal();

            this.sorted = true;
          }
        }, {
          key: "applySortingProposal",
          value: function applySortingProposal() {
            var _this12 = this;

            if (this.sorted === true) {
              this.alertCtrl.create({
                header: 'Sind sie sicher?',
                message: 'Wollen sie die vorgeschlagene Konfiguration wirklich anwenden?',
                buttons: [{
                  text: 'Abbrechen',
                  role: 'cancel'
                }, {
                  text: 'Anwenden',
                  handler: function handler() {
                    _this12.adminsService.applySortingProposal();

                    _this12.sorted = false;

                    _this12.refresh();
                  }
                }]
              }).then(function (alertEl) {
                alertEl.present();
              });
            }
          }
        }]);

        return AdminStudentsLeadersPage;
      }();

      AdminStudentsLeadersPage.ctorParameters = function () {
        return [{
          type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__["StudentsService"]
        }, {
          type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"]
        }, {
          type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_6__["LeadersService"]
        }, {
          type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_9__["AdminsService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"]
        }];
      };

      AdminStudentsLeadersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-students-leaders',
        template: _raw_loader_admin_students_leaders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_students_leaders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminStudentsLeadersPage);
      /***/
    },

    /***/
    "ZReS":
    /*!*******************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: AdminStudentsLeadersPageModule */

    /***/
    function ZReS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPageModule", function () {
        return AdminStudentsLeadersPageModule;
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


      var _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-students-leaders.page */
      "SMJN");

      var routes = [{
        path: '',
        component: _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__["AdminStudentsLeadersPage"]
      }];

      var AdminStudentsLeadersPageModule = function AdminStudentsLeadersPageModule() {
        _classCallCheck(this, AdminStudentsLeadersPageModule);
      };

      AdminStudentsLeadersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__["AdminStudentsLeadersPage"]]
      })], AdminStudentsLeadersPageModule);
      /***/
    },

    /***/
    "qB/M":
    /*!*******************************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function qBM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".height {\n  min-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tc3R1ZGVudHMtbGVhZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLXN0dWRlbnRzLWxlYWRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlaWdodCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-students-leaders-admin-students-leaders-module-es5.js.map