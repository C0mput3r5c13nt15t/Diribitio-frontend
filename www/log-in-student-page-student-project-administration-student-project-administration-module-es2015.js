(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-student-project-administration-student-project-administration-module"],{

/***/ "2nuv":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/student-project-administration/student-project-administration.page.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n      <ion-button color=\"buttons\" slot=\"start\">\n        <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n      </ion-button>\n      <ion-title>{{ projectNoun }}</ion-title>\n      <ion-button *ngIf=\" !!+leadedProject.editable == false || currentDate <= this.schedule.control || currentDate > this.schedule.registration\" [disabled]=\"currentDate <= this.schedule.begin || currentDate > this.schedule.control\" color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"currentDate > this.schedule.control && currentDate <= this.schedule.registration && !!+leadedProject.editable == true\" color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content color=\"background\">\n    <ion-card color=\"background\" *ngIf=\"leadedProject.leader_id == null && leadedProject.title == null && leadedProject.authorized == null\" class=\"content\">\n      <ion-card-content>\n        <ion-text color=\"danger\">{{ studentLoadingProject }}</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <ion-card color=\"background\" *ngIf=\"loadedStudent.role === 2\" class=\"content\">\n      <ion-img *ngIf=\"leadedProject.image != '' && leadedProject.image != null\" src='{{ imageUrl }}{{ leadedProject.image }}'></ion-img>\n      <ion-card-header>\n        <ion-card-title text-wrap>{{ leadedProject.title }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item-group>\n          <ion-item color=\"items\" lines=\"none\" class=\"descr\">\n            <ion-text color=\"text\">{{ leadedProject.descr }}</ion-text>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Leiter</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">{{ leadedProject.leader_name }}</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Kosten</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">{{ leadedProject.cost }}€</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Zeitraum</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">1.Tag:  {{ leadedProject.first_day_begin }} bis {{ leadedProject.first_day_end }}</ion-label>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">2.Tag:  {{ leadedProject.second_day_begin }} bis {{ leadedProject.second_day_end }}</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">{{ leadedProject.min_grade }}. bis {{ leadedProject.max_grade }}.Klasse</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">von {{ leadedProject.min_participants }} bis {{ leadedProject.max_participants }}</ion-label>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Notizen</ion-label>\n          </ion-item-divider>\n          <div *ngIf=\"leadedProject.messages.length\">\n            <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of leadedProject.messages\">\n              <ion-card class=\"message\" color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n                  <ion-text color=\"text\">{{ message.message }}</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Teilnehmer</ion-label>\n          </ion-item-divider>\n          <div *ngIf=\"leadedProject.leader_type === 'App\\\\Student' && leadedProject.leader_id == loadedStudent.id\">\n            <ion-item color=\"items\" lines=\"none\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ loadedStudent.first_name }} {{ loadedStudent.last_name }} {{ loadedStudent.grade }}{{ loadedStudent.letter }} (eigener Account)</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <div *ngIf=\"leadedProject.assistant_student_leaders.length\">\n            <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of leadedProject.assistant_student_leaders\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <div *ngIf=\"leadedProject.participants.length\">\n            <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of leadedProject.participants\">\n              <ion-card color=\"background\">\n                <ion-card-content>\n                  <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n                </ion-card-content>\n              </ion-card>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button color=\"buttons\" *ngIf=\"!!+leadedProject.editable == false || currentDate <= this.schedule.control || currentDate > this.schedule.registration\" [disabled]=\"leadedProject.leader_id != loadedStudent.id || currentDate <= this.schedule.begin || currentDate > this.schedule.control\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">{{ projectNoun }} bearbeiten</ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"leadedProject.leader_id == loadedStudent.id && currentDate > this.schedule.control && currentDate <= this.schedule.registration && !!+leadedProject.editable == true\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">{{ projectNoun }} nachbessern</ion-button>\n            <ion-text *ngIf=\"leadedProject.leader_id != loadedStudent.id\" color=\"text\">{{ studentNoProjectEditByAssistants }}</ion-text>\n            <ion-text *ngIf=\"currentDate <= this.schedule.begin && !!+leadedProject.editable == false || currentDate > this.schedule.control && !!+leadedProject.editable == false\" color=\"text\">{{ studentWrongTime }}</ion-text>\n          </div>\n        </ion-item-group>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n");

/***/ }),

/***/ "dGRD":
/*!*************************************************************************************************************!*\
  !*** ./src/app/log-in/student-page/student-project-administration/student-project-administration.page.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R1ZGVudC1wcm9qZWN0LWFkbWluaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6InN0dWRlbnQtcHJvamVjdC1hZG1pbmlzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byBhdXRvIGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "sWDz":
/*!*************************************************************************************************************!*\
  !*** ./src/app/log-in/student-page/student-project-administration/student-project-administration.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StudentProjectAdministrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProjectAdministrationPageModule", function() { return StudentProjectAdministrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _student_project_administration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-project-administration.page */ "vCRR");







const routes = [
    {
        path: '',
        component: _student_project_administration_page__WEBPACK_IMPORTED_MODULE_6__["StudentProjectAdministrationPage"]
    }
];
let StudentProjectAdministrationPageModule = class StudentProjectAdministrationPageModule {
};
StudentProjectAdministrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_student_project_administration_page__WEBPACK_IMPORTED_MODULE_6__["StudentProjectAdministrationPage"]]
    })
], StudentProjectAdministrationPageModule);



/***/ }),

/***/ "vCRR":
/*!***********************************************************************************************************!*\
  !*** ./src/app/log-in/student-page/student-project-administration/student-project-administration.page.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentProjectAdministrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProjectAdministrationPage", function() { return StudentProjectAdministrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_student_project_administration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-project-administration.page.html */ "2nuv");
/* harmony import */ var _student_project_administration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-project-administration.page.scss */ "dGRD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/students.service */ "ZvwH");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










let StudentProjectAdministrationPage = class StudentProjectAdministrationPage {
    constructor(activatedRoute, router, projectsService, scheduleService, studentsService, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projectsService = projectsService;
        this.scheduleService = scheduleService;
        this.studentsService = studentsService;
        this.config = config;
        this.subscriptions = [];
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
        this.leadedProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
            leader_type: '',
            leader_id: 0,
            cost: 0,
            first_day_begin: {
                hours: 0,
                minutes: 0,
            },
            first_day_end: {
                hours: 0,
                minutes: 0,
            },
            second_day_begin: {
                hours: 0,
                minutes: 0,
            },
            second_day_end: {
                hours: 0,
                minutes: 0,
            },
            min_grade: 0,
            max_grade: 0,
            min_participants: 0,
            max_participants: 0,
            messages: [],
            participants: [],
            assistant_student_leaders: []
        };
        /**
         * Contains the time schedule of the application
         */
        this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en')
        };
        this.imageUrl = this.config.backend_config.imageUrl;
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.projectNoun = this.config.app_config.project_noun;
        this.studentNoProjectEditByAssistants = this.config.get_error('student-no_project_edit_by_assistants');
        this.studentLoadingProject = this.config.get_error('student-loading_project');
        this.studentWrongTime = this.config.get_error('student-wrong_time');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.studentUrl = paramMap.get('ParticipantName');
        });
        this.getSchedule();
        this.getProject();
        this.getStudent();
        this.subscriptions.push(this.scheduleService.update.subscribe(() => this.getSchedule()), this.projectsService.update.subscribe(() => this.getProject()), this.studentsService.update.subscribe(() => this.getStudent()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    /**
     * Gets the current time schedule for the application and sets the schedule value
     */
    getSchedule() {
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
    getProject() {
        this.projectsService.getSelfLeadedProject('students').subscribe(data => {
            this.leadedProject = data.data;
        });
    }
    getStudent() {
        this.studentsService.getSelfStudent().subscribe(data => {
            this.loadedStudent = data.data;
        });
    }
};
StudentProjectAdministrationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"] },
    { type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_5__["StudentsService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }
];
StudentProjectAdministrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-administration',
        template: _raw_loader_student_project_administration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_project_administration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentProjectAdministrationPage);



/***/ })

}]);
//# sourceMappingURL=log-in-student-page-student-project-administration-student-project-administration-module-es2015.js.map