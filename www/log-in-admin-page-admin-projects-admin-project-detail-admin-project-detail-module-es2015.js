(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module"],{

/***/ "7RvP":
/*!******************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdminProjectDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectDetailPageModule", function() { return AdminProjectDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_project_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-project-detail.page */ "fwlB");







const routes = [
    {
        path: '',
        component: _admin_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["AdminProjectDetailPage"]
    }
];
let AdminProjectDetailPageModule = class AdminProjectDetailPageModule {
};
AdminProjectDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["AdminProjectDetailPage"]]
    })
], AdminProjectDetailPageModule);



/***/ }),

/***/ "JPTK":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}/{{ projectsNoun }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n    <ion-button [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\" color=\"danger\" slot=\"end\" (click)=\"deleteProject()\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-img *ngIf=\"loadedProject.image != '' && loadedProject.image != null\" src='{{ imageUrl }}{{ loadedProject.image }}'></ion-img>\n    <ion-card-header>\n      <ion-card-title text-wrap>{{ loadedProject.title }}</ion-card-title>\n      <ion-card-subtitle>\n        <ion-label color=\"text\">Erstellt am {{ loadedProject.created_at | date: 'dd.MM.yyyy' }} | Zuletzt aktualisiert am {{ loadedProject.updated_at | date: 'dd.MM.yyyy' }}</ion-label>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group>\n        <ion-item color=\"items\" lines=\"none\" class=\"descr\">\n          <ion-label color=\"text\">{{ loadedProject.descr }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag:  {{ loadedProject.first_day_begin }} bis {{ loadedProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag:  {{ loadedProject.second_day_begin }} bis {{ loadedProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.min_grade }}. bis {{ loadedProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ loadedProject.min_participants }} bis {{ loadedProject.max_participants }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\" *ngIf=\"loadedProject.messages.length\">\n          <ion-label color=\"text\">Notizen</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.messages.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of loadedProject.messages\">\n            <ion-card class=\"message\" color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n                <ion-text color=\"text\">{{ message.message }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\" *ngIf=\"loadedProject.leader\">\n          <ion-label color=\"text\">Projektleiter</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.leader && loadedProject.leader_type === 'App\\\\Student'\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ loadedProject.leader.first_name }} {{ loadedProject.leader.last_name }} {{ loadedProject.leader.grade }}{{ loadedProject.leader.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"loadedProject.leader && loadedProject.leader_type === 'App\\\\Leader'\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ loadedProject.leader.user_name }} {{ loadedProject.leader.email }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\" *ngIf=\"loadedProject.assistant_student_leaders.length\">\n          <ion-label color=\"text\">Assistenten</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.assistant_student_leaders.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of loadedProject.assistant_student_leaders\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teilnehmer</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of loadedProject.participants\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"!loadedProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"danger\">keine Teilnehmer</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Administration</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">Zugelassen</ion-label><ion-toggle [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration || !!+loadedProject.editable == true\"  color=\"buttons\" [(ngModel)]=\"!!+loadedProject.authorized\" (ionChange)=\"authorizedChanged()\">Aktiviert</ion-toggle>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">Bearbeitbar</ion-label><ion-toggle [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\"  color=\"buttons\" [(ngModel)]=\"!!+loadedProject.editable\" (ionChange)=\"editableChanged()\">Aktiviert</ion-toggle>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\" expand=\"block\" class=\"ion-no-margin\" color=\"danger\" slot=\"end\" (click)=\"deleteProject()\">{{ projectNoun }} löschen</ion-button>\n          <ion-label *ngIf=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\" color=\"text\">\n            {{ adminWrongTime }}\n          </ion-label>\n        </div>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "ViP9":
/*!******************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkbWluLXByb2plY3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLXByb2plY3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "fwlB":
/*!****************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdminProjectDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectDetailPage", function() { return AdminProjectDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_project_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-project-detail.page.html */ "JPTK");
/* harmony import */ var _admin_project_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-project-detail.page.scss */ "ViP9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");










let AdminProjectDetailPage = class AdminProjectDetailPage {
    constructor(activatedRoute, router, scheduleService, projectsService, alertCtrl, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.scheduleService = scheduleService;
        this.projectsService = projectsService;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.subscriptions = [];
        this.loadedProject = {
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
            leader: null,
            assistant_student_leaders: []
        };
        this.loadedStudentLeader = {
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
        /**
         * Contains the time schedule of the application
         */
        this.schedule = {
            id: 1,
            begin: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            control: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            sort_students: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            exchange: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            projects: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en')
        };
        this.imageUrl = this.config.backend_config.imageUrl;
        this.projectNoun = this.config.app_config.project_noun;
        this.projectsNoun = this.config.app_config.projects_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.adminWrongTime = this.config.get_error('admin-wrong_time');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ProjectID')) {
                this.router.navigate(['']);
                return;
            }
            this.adminUrl = paramMap.get('AdminName');
            this.projectId = Number(paramMap.get('ProjectID'));
        });
        this.getSchedule();
        this.getProject();
        this.subscriptions.push(this.scheduleService.update.subscribe(() => this.getSchedule()), this.projectsService.update.subscribe(() => this.getProject()));
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
        this.projectsService.getProjectAdmin(this.projectId).subscribe(data => {
            if (!data.data) {
                this.router.navigate([this.eventName + '/Admin/' + this.adminUrl]);
            }
            else {
                this.loadedProject = data.data;
            }
        });
    }
    authorizedChanged() {
        if (this.currentDate > this.schedule.control && this.currentDate <= this.schedule.registration) {
            this.projectsService.toogleAuthorizedProject(this.loadedProject.id, Boolean(this.loadedProject.authorized));
        }
    }
    editableChanged() {
        this.projectsService.toogleEditableProject(this.loadedProject.id, Boolean(this.loadedProject.editable));
    }
    deleteProject() {
        this.alertCtrl.create({
            header: 'Sind Sie sicher?',
            message: 'Wollen Sie dieses Projekt wirklich unwiederruflich löschen?',
            buttons: [{
                    text: 'Abbrechen',
                    role: 'cancel',
                }, {
                    text: 'Löschen',
                    handler: () => {
                        this.projectsService.deleteProject(this.loadedProject.id);
                        this.router.navigate([this.eventName + '/Admin/' + this.adminUrl + '/' + this.projectsNoun]);
                    }
                }]
        }).then(alertEl => {
            alertEl.present();
        });
    }
};
AdminProjectDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }
];
AdminProjectDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-project-detail',
        template: _raw_loader_admin_project_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_project_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminProjectDetailPage);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module-es2015.js.map