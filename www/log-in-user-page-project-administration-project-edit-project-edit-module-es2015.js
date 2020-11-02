(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-project-administration-project-edit-project-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ participantUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }} bearbeiten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ProjectForm\" (ngSubmit)=\"submit()\" #Formular>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectLeader\" [(ngModel)]=\"editProject.leader_name\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}name</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectName\" [(ngModel)]=\"editProject.title\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">{{ projectNoun }}beschreibung</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-textarea required type=\"text\" name=\"ProjectDescr\" [(ngModel)]=\"editProject.descr\" rows=\"7\"></ion-textarea>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-input color=\"text\" required name=\"ProjectCost\" [(ngModel)]=\"editProject.cost\" required type=\"number\"></ion-input>€\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">1.Tag</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectFirstTimeBeginn\" [(ngModel)]=\"editProject.first_day_begin\" type=\"time\"></ion-input>\n        </ion-item> \n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectFirstTimeEnd\" [(ngModel)]=\"editProject.first_day_end\" type=\"time\"></ion-input>\n        </ion-item> \n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">2.Tag</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectSecondTimeBeginn\" [(ngModel)]=\"editProject.second_day_begin\" type=\"time\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectSecondTimeEnd\" [(ngModel)]=\"editProject.second_day_end\" type=\"time\"></ion-input>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von</ion-label>\n          <ion-select required name=\"ProjectMinClass\" [(ngModel)]=\"editProject.min_grade\">\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">bis</ion-label>\n          <ion-select required name=\"ProjectMaxClass\" [(ngModel)]=\"editProject.max_grade\">\n            <ion-select-option selected value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"7\">7</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"9\">9</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectMinParticipants\" [(ngModel)]=\"editProject.min_participants\" required type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item color=\"items\">\n          <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectMaxParticipants\" [(ngModel)]=\"editProject.max_participants\" required type=\"number\"></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid || editProject.leader_id != loadedUser.id\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Änderungen speichern</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/user-page/project-administration/project-edit/project-edit.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/log-in/user-page/project-administration/project-edit/project-edit.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProjectEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditPageModule", function() { return ProjectEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _project_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-edit.page */ "./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.ts");







const routes = [
    {
        path: '',
        component: _project_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProjectEditPage"]
    }
];
let ProjectEditPageModule = class ProjectEditPageModule {
};
ProjectEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_project_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProjectEditPage"]]
    })
], ProjectEditPageModule);



/***/ }),

/***/ "./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  -moz-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL3VzZXItcGFnZS9wcm9qZWN0LWFkbWluaXN0cmF0aW9uL3Byb2plY3QtZWRpdC9wcm9qZWN0LWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLXBhZ2UvcHJvamVjdC1hZG1pbmlzdHJhdGlvbi9wcm9qZWN0LWVkaXQvcHJvamVjdC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dCB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditPage", function() { return ProjectEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/participants.service */ "./src/app/participants.service.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");








let ProjectEditPage = class ProjectEditPage {
    constructor(activatedRoute, router, projectsService, scheduleService, participantsService, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projectsService = projectsService;
        this.scheduleService = scheduleService;
        this.participantsService = participantsService;
        this.config = config;
        this.loadedUser = {
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
        this.editProject = {
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
            participants: []
        };
        this.schedule = {
            id: 1,
            begin: null,
            control: null,
            registration: null,
            sort_students: null,
            exchange: null,
            projects: null,
            end: null
        };
        this.projectNoun = this.config.app_config.project_noun;
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.participantUrl = paramMap.get('ParticipantName');
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getProject();
        this.getStudent();
    }
    getProject() {
        this.projectsService.getSelfLeadedProject('students').subscribe(data => {
            this.editProject = data.data;
        });
    }
    getStudent() {
        this.participantsService.getSelfParticipant().subscribe(data => {
            this.loadedUser = data.data;
        });
    }
    changeFile(event) {
        const file = event.target.files[0];
        if (file) {
            this.image = file;
        }
    }
    submit() {
        if (this.currentDate > this.schedule.control && this.currentDate <= this.schedule.registration) {
            this.projectsService.touchUpProject('students', this.editProject, this.participantUrl);
        }
        else {
            this.projectsService.putProject('students', this.editProject, this.participantUrl);
        }
    }
};
ProjectEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"] },
    { type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantsService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
ProjectEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./project-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./project-edit.page.scss */ "./src/app/log-in/user-page/project-administration/project-edit/project-edit.page.scss")).default]
    })
], ProjectEditPage);



/***/ })

}]);
//# sourceMappingURL=log-in-user-page-project-administration-project-edit-project-edit-module-es2015.js.map