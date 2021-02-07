(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-students-leaders-admin-students-leaders-module"],{

/***/ "CqKw":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Schüler und {{ projectNoun }}leiter verwalten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" class=\"content\">\n    <ion-card-header>\n      <ion-card-title>Schüler</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text1\">\n      <ion-label color=\"text\">\n        {{ text1 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card color=\"background\">\n      <ion-card-header>\n        <ion-card-title>\n          <ion-label color=\"buttons\" text-wrap>Schüler suchen</ion-label>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text2\">\n        <ion-label color=\"text\">\n          {{ text2 }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-input (keypress)=\"search()\" color=\"text\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"searchStudent.email\" name=\"SerchEmail\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-input (keypress)=\"search()\" color=\"text\" placeholder=\"Vorname\" type=\"text\" [(ngModel)]=\"searchStudent.first_name\" name=\"SerchFirstName\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-input (keypress)=\"search()\" color=\"text\" placeholder=\"Nachname\" type=\"text\" [(ngModel)]=\"searchStudent.last_name\" name=\"SeatchLastName\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-input (keypress)=\"search()\" color=\"text\" placeholder=\"Klasse\" type=\"text\" [(ngModel)]=\"searchStudent.class\" name=\"SerchClass\"></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button expand=\"block\" class=\"ion-no-margin\" color=\"buttons\" (click)=\"search()\"><ion-icon name=\"search\"></ion-icon></ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" class=\"ion-no-margin\" color=\"buttons\" (click)=\"refresh()\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n    </div>\n    <ion-card-content color=\"background\">\n      <ion-grid *ngIf=\"searchStudents\">\n        <ion-row>\n          <ion-col><h2>E-Mail</h2></ion-col>\n          <ion-col><h2>Schüler</h2></ion-col>\n          <ion-col><h2>Wünsche</h2></ion-col>\n          <ion-col><h2>Freunde</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"background\" *ngFor=\"let participant of searchStudents\" id=\"participant.ID\">\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.email }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}\n            </ion-label>\n            <br>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\"> ({{ projectNoun }}leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_wish_title }}<br>\n              {{ participant.second_wish_title }}<br>\n              {{ participant.third_wish_title }}\n            </ion-label>\n          </ion-col>\n          <ion-col color=\"text\">\n            <ion-label color=\"text\">\n              {{ participant.first_friend_name }}<br>\n              {{ participant.second_friend_name }}<br>\n              {{ participant.third_friend_name }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <a *ngIf=\"participant.project_id != 0 && participant.project_title != 'fehlerhaftes Projekt'\" routerLink='../../{{ projectsNoun }}/{{participant.project_id}}'>{{ participant.project_title }}</a>\n            <a *ngIf=\"participant.project_id == 0\">kein {{ projectNoun }}</a>\n            <a *ngIf=\"participant.project_title == 'fehlerhaftes Projekt'\">{{ projectNoun }} ist fehlerhaft</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid *ngIf=\"!searchStudents\">\n        <ion-row class=\"ion-justify-content-around\">\n          <ion-col><h2>E-Mail</h2></ion-col>\n          <ion-col><h2>Schüler</h2></ion-col>\n          <ion-col><h2>Wünsche</h2></ion-col>\n          <ion-col><h2>Freunde</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-around\" color=\"background\" *ngFor=\"let participant of loadedStudents\" id=\"participant.ID\">\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.email }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}\n            </ion-label>\n            <br>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\"> ({{ projectNoun }}leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_wish_title }}<br>\n              {{ participant.second_wish_title }}<br>\n              {{ participant.third_wish_title }}\n            </ion-label>\n          </ion-col>\n          <ion-col color=\"text\">\n            <ion-label color=\"text\">\n              {{ participant.first_friend_name }}<br>\n              {{ participant.second_friend_name }}<br>\n              {{ participant.third_friend_name }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <a *ngIf=\"participant.project_id != 0 && participant.project_title != 'fehlerhaftes Projekt'\" routerLink='../../{{ projectsNoun }}/{{participant.project_id}}'>{{ participant.project_title }}</a>\n            <a *ngIf=\"participant.project_id == 0\">kein {{ projectNoun }}</a>\n            <a *ngIf=\"participant.project_title == 'fehlerhaftes Projekt'\">{{ projectNoun }} ist fehlerhaft</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngIf=\"page < lastPage && !searchStudents\" class=\"ion-padding\">\n        <ion-button color=\"buttons\" (click)=\"getMoreStudents()\" expand=\"block\" class=\"ion-no-margin\">Weiter Schüler laden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ projectNoun }}leiter\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text3\">\n      <ion-label color=\"text\">\n        {{ text3 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col><h2>E-Mail</h2></ion-col>\n          <ion-col><h2>{{ projectNoun }}leiter</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"items\" lines=\"none\" *ngFor=\"let leader of loadedLeaders\">\n          <ion-col>\n            <ion-label text-wrap color=\"text\">{{ leader.email }}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">{{ leader.user_name }}</ion-label>\n          </ion-col>\n          <ion-col>\n            <a color=\"buttons\" *ngIf=\"leader.project_id != 0\" routerLink='../../{{ projectsNoun }}/{{ leader.project_id }}'>{{ leader.project_title }}</a>\n            <ion-icon color=\"danger\" name=\"trash\" *ngIf=\"leader.project_id == 0\" (click)=\"deleteLeader(leader.id)\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Schüler sortieren\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text4\">\n      <ion-label color=\"text\">\n        {{ text4 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <div class=\"ion-padding\" *ngIf=\"!sorted\">\n        <ion-button color=\"buttons\" [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" (click)=\"createSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Sortiervorschlag erstellen</ion-button>\n      </div>\n      <div class=\"ion-padding\" *ngIf=\"sorted\">\n        <ion-button color=\"buttons\" [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" (click)=\"createSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Neuen Sortiervorschlag erstellen</ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" (click)=\"requestSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >aktuellen Sortiervorschlag ansehen</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Vorschlag für Einsortierung der Schüler\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text5\">\n      <ion-label color=\"text\">\n        {{ text5 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"sortedProjects.length\">\n      <ion-card color=\"background\" *ngFor=\"let project of sortedProjects\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-label *ngIf=\"project.participants.length < project.min_participants\" color=\"danger\">{{ project.title }} (Zu wenige Teilnehmer)</ion-label>\n            <ion-label *ngIf=\"project.participants.length > project.max_participants\" color=\"danger\">{{ project.title }} (Zu viele Teilnehmer)</ion-label>\n            <ion-label *ngIf=\"project.participants.length >= project.min_participants && project.participants.length <= project.max_participants\">{{ project.title }}</ion-label>\n          </ion-card-title>\n          <ion-card-subtitle>\n            <ion-label color=\"text\">{{ project.min_grade }}. bis {{ project.max_grade }}.Klasse | {{ project.min_participants }} bis {{ project.max_participants }} Teilnehmer | {{ project.leader_name }}</ion-label>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <div *ngIf=\"project.leader && project.leader_type === 'App\\\\Student'\">\n            <ion-item color=\"items\">\n              <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ project.leader.first_name }} {{ project.leader.last_name }} {{ project.leader.grade }}{{ project.leader.letter }}</ion-text>\n            </ion-item>\n          </div>\n          <div *ngIf=\"project.assistant_student_leaders.length\">\n            <ion-item color=\"items\" *ngFor=\"let assistant of project.assistant_student_leaders\">\n              <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n            </ion-item>\n          </div>\n          <div *ngIf=\"project.participants.length\">\n            <ion-item color=\"items\" *ngFor=\"let participant of project.participants\">\n              <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              <ion-select slot=\"end\" name=\"ParticipantProject\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\" (ionChange)=\"moveParticipant($event)\"> \n                <ion-select-option *ngFor=\"let newProject of sortedProjects\" [value]=\"[participant, project.id, newProject.id]\">{{ newProject.title }} ({{ newProject.min_grade }}. - {{ newProject.max_grade }}.Klasse)</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n    <div class=\"ion-padding\">\n      <ion-button color=\"buttons\" (click)=\"editSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Änderungen speichern</ion-button>\n    </div>\n    <div class=\"ion-padding\">\n      <ion-button color=\"buttons\" [disabled]=\"!sorted\" (click)=\"applySortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Vorschlag anwenden</ion-button>\n    </div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "SMJN":
/*!*****************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdminStudentsLeadersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPage", function() { return AdminStudentsLeadersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_students_leaders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-students-leaders.page.html */ "CqKw");
/* harmony import */ var _admin_students_leaders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-students-leaders.page.scss */ "qB/M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/students.service */ "ZvwH");
/* harmony import */ var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/leaders.service */ "PO/Q");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/admins.service */ "uVPj");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");














let AdminStudentsLeadersPage = class AdminStudentsLeadersPage {
    constructor(studentsService, scheduleService, leadersService, projectsService, activatedRoute, alertCtrl, adminsService, alert, config) {
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
        this.searchStudent = {
            email: '',
            first_name: '',
            last_name: '',
            class: ''
        };
        this.text1 = this.config.get_content_by_index('admin-students-leaders', 0);
        this.text2 = this.config.get_content_by_index('admin-students-leaders', 1);
        this.text3 = this.config.get_content_by_index('admin-students-leaders', 2);
        this.text4 = this.config.get_content_by_index('admin-students-leaders', 3);
        this.text5 = this.config.get_content_by_index('admin-students-leaders', 4);
        this.page = 1;
        this.lastPage = 1;
        this.projectNoun = this.config.app_config.project_noun;
        this.projectsNoun = this.config.app_config.projects_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.adminUrl = paramMap.get('AdminName');
        });
        this.load();
        this.subscriptions.push(this.studentsService.update.subscribe(() => this.load()), this.leadersService.update.subscribe(() => this.load()), this.projectsService.update.subscribe(() => this.load()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    load() {
        this.alert.loading(2000);
        this.page = 1;
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getProjects();
        this.getAllStudentNames();
        if (this.currentDate > this.schedule.sort_students && this.currentDate <= this.schedule.exchange) {
            this.requestSortingProposal();
        }
    }
    eventHandler(keyCode) {
        if (keyCode === 13) {
            this.search();
        }
    }
    search() {
        // tslint:disable-next-line: triple-equals
        if (this.searchStudent.email == '' && this.searchStudent.first_name == '' && this.searchStudent.last_name == '' && this.searchStudent.class == '') {
            this.searchStudents = null;
            return;
        }
        this.studentsService.getAllSearchedStudents(this.searchStudent).subscribe(data => {
            this.searchStudents = [];
            data.data.forEach((student) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const stu = {
                    id: 0,
                    email: '',
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
                stu.email = student.email;
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
            }));
        });
    }
    refresh() {
        this.page = 1;
        this.getProjects();
        this.getAllStudentNames();
    }
    getProjects() {
        this.projectsService.getAllProjects().subscribe(data => {
            this.loadedProjects = data.data;
            this.getStudents();
            this.getLeaders();
        });
    }
    getAllStudentNames() {
        this.studentsService.getAllStudentNames().subscribe(data => {
            this.loadedParticipantsNames = data.data;
        });
    }
    getStudents() {
        this.loadedStudents = [];
        this.studentsService.getAllStudents(this.page).subscribe(data => {
            this.lastPage = data.meta.last_page;
            data.data.forEach((student) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const stu = {
                    id: 0,
                    email: '',
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
                stu.email = student.email;
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
                // await this.getWishNames(stu.first_wish, stu.second_wish, stu.third_wish, stu);
                // await this.getFriendsNames(stu.first_friend, stu.second_friend, stu.third_friend, stu);
                this.loadedStudents.push(stu);
            }));
        });
    }
    getMoreStudents() {
        this.alert.loading(2000);
        this.page += 1;
        this.studentsService.getAllStudents(this.page).subscribe(data => {
            data.data.forEach((student) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const stu = {
                    id: 0,
                    email: '',
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
                stu.email = student.email;
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
            }));
        });
    }
    getLeaders() {
        this.loadedLeaders = [];
        this.leadersService.getAllLeaders().subscribe(data => {
            data.data.forEach(leader => {
                const lea = {
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
                lea.project_title = this.getProjectTitle(lea.project_id);
                this.loadedLeaders.push(lea);
            });
        });
    }
    getProjectTitle(projectID) {
        if (projectID !== 0 && this.loadedProjects) {
            const searchedProject = this.loadedProjects.filter(project => project.id === projectID);
            if (searchedProject[0] != null) {
                return searchedProject[0].title;
            }
            else {
                return 'fehlerhaftes Projekt';
            }
        }
        else {
            return 'kein Projekt';
        }
    }
    getParticipantName(participantID) {
        if (participantID !== 0 && this.loadedParticipantsNames) {
            const searchedParticipant = this.loadedParticipantsNames.filter(participant => participant.id === participantID);
            if (searchedParticipant[0] != null) {
                return searchedParticipant[0].first_name + ' ' + searchedParticipant[0].last_name;
            }
            else {
                return 'fehlerhafter Freund';
            }
        }
        else {
            return '';
        }
    }
    deleteLeader(leaderID) {
        this.alertCtrl.create({
            header: 'Sind Sie sicher?',
            message: 'Wollen Sie diesen Projektleiter wirklich unwiederruflich löschen?',
            buttons: [{
                    text: 'Abbrechen',
                    role: 'cancel',
                }, {
                    text: 'Löschen',
                    handler: () => {
                        this.leadersService.deleteLeader(leaderID);
                    }
                }]
        }).then(alertEl => {
            alertEl.present();
        });
    }
    createSortingProposal() {
        this.adminsService.createSortingProposal().subscribe(data => {
            this.alert.alert(data.message);
            this.sorted = true;
            this.sortedProjects = data.data;
            // tslint:disable-next-line: no-shadowed-variable
        }, error => {
            this.alert.error('Sortierung der Schüler fehlgeschlagen.', error.error);
        });
    }
    requestSortingProposal() {
        this.adminsService.requestSortingProposal().subscribe(data => {
            this.sortedProjects = data.data;
            this.sorted = true;
            // tslint:disable-next-line: no-shadowed-variable
        }, error => {
            this.alert.error('Es konnte kein Sortiervorschlag gefunden werden.', error.error);
        });
    }
    moveParticipant(event) {
        const participant = event.detail.value[0];
        const oldProjectId = event.detail.value[1];
        const newProjectId = event.detail.value[2];
        if (oldProjectId !== 0 && this.sortedProjects) {
            const searchedProject = this.sortedProjects.filter(project => project.id === oldProjectId);
            if (searchedProject[0] != null) {
                const oldProject = searchedProject[0];
                const index = oldProject.participants.indexOf(participant);
                if (index !== -1) {
                    oldProject.participants.splice(index, 1);
                }
            }
        }
        if (newProjectId !== 0 && this.sortedProjects) {
            const searchedProject = this.sortedProjects.filter(project => project.id === newProjectId);
            if (searchedProject[0] != null) {
                const newProject = searchedProject[0];
                if (participant) {
                    newProject.participants.push(participant);
                }
            }
        }
    }
    editSortingProposal() {
        const newProposal = {
            data: this.sortedProjects
        };
        this.adminsService.editSortingProposal(newProposal);
        // this.requestSortingProposal();
        this.sorted = true;
    }
    applySortingProposal() {
        if (this.sorted === true) {
            this.alertCtrl.create({
                header: 'Sind Sie sicher?',
                message: 'Wollen Sie die vorgeschlagene Konfiguration wirklich anwenden?',
                buttons: [{
                        text: 'Abbrechen',
                        role: 'cancel'
                    }, {
                        text: 'Anwenden',
                        handler: () => {
                            this.adminsService.applySortingProposal();
                            this.sorted = false;
                            this.refresh();
                        }
                    }]
            }).then(alertEl => {
                alertEl.present();
            });
        }
    }
};
AdminStudentsLeadersPage.ctorParameters = () => [
    { type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__["StudentsService"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"] },
    { type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_6__["LeadersService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: src_app_services_admins_service__WEBPACK_IMPORTED_MODULE_9__["AdminsService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"] }
];
AdminStudentsLeadersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-students-leaders',
        template: _raw_loader_admin_students_leaders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_students_leaders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminStudentsLeadersPage);



/***/ }),

/***/ "ZReS":
/*!*******************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AdminStudentsLeadersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPageModule", function() { return AdminStudentsLeadersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-students-leaders.page */ "SMJN");







const routes = [
    {
        path: '',
        component: _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__["AdminStudentsLeadersPage"]
    }
];
let AdminStudentsLeadersPageModule = class AdminStudentsLeadersPageModule {
};
AdminStudentsLeadersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__["AdminStudentsLeadersPage"]]
    })
], AdminStudentsLeadersPageModule);



/***/ }),

/***/ "qB/M":
/*!*******************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".height {\n  min-height: 500px;\n}\n\nion-col {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tc3R1ZGVudHMtbGVhZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLXN0dWRlbnRzLWxlYWRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlaWdodCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-students-leaders-admin-students-leaders-module-es2015.js.map