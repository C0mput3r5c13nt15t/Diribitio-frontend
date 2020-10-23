(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Admin/{{ adminUrl }}/Projekte\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n    <ion-button color=\"danger\" slot=\"end\" (click)=\"deleteProject()\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-img *ngIf=\"loadedProject.image != '' && loadedProject.image != null\" [src]='\"http://192.248.186.231:8000/storage/images/\" + loadedProject.image'></ion-img>\n    <ion-card-header>\n      <ion-title>\n        <h1>{{ loadedProject.title }}</h1>\n      </ion-title>\n      <ion-card-subtitle>\n        <ion-label color=\"text\">Erstellt am {{ loadedProject.created_at | date: 'dd.MM.yyyy' }} | Zuletzt aktualisiert am {{ loadedProject.updated_at | date: 'dd.MM.yyyy' }}</ion-label>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.descr }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag:  {{ loadedProject.first_day_begin }} bis {{ loadedProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag:  {{ loadedProject.second_day_begin }} bis {{ loadedProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.min_grade }}. bis {{ loadedProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ loadedProject.min_participants }} bis {{ loadedProject.max_participants }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\" *ngIf=\"loadedProject.messages.length\">\n          <ion-label color=\"text\">Nachrichten</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.messages.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of loadedProject.messages\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ message.message }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\" *ngIf=\"loadedProject.leader\">\n          <ion-label color=\"text\">Projektleiter</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.leader && loadedProject.leader_type === 'App\\\\Student'\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ loadedProject.leader.first_name }} {{ loadedProject.leader.last_name }} {{ loadedProject.leader.grade }}{{ loadedProject.leader.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"loadedProject.leader && loadedProject.leader_type === 'App\\\\Leader'\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ loadedProject.leader.user_name }} {{ loadedProject.leader.email }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\" *ngIf=\"loadedProject.assistant_student_leaders.length\">\n          <ion-label color=\"text\">Assistenten</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.assistant_student_leaders.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of loadedProject.assistant_student_leaders\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teilnehmer</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"loadedProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of loadedProject.participants\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"!loadedProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"danger\">keine Teilnehmer</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Administration</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">Zugelassen</ion-label><ion-toggle [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration || !!+loadedProject.editable == true\"  color=\"buttons\" [(ngModel)]=\"!!+loadedProject.authorized\" (ionChange)=\"authorizedChanged()\">Aktiviert</ion-toggle>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">Bearbeitbar</ion-label><ion-toggle [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\"  color=\"buttons\" [(ngModel)]=\"!!+loadedProject.editable\" (ionChange)=\"editableChanged()\">Aktiviert</ion-toggle>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button [disabled]=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\" expand=\"block\" class=\"ion-no-margin\" color=\"danger\" slot=\"end\" (click)=\"deleteProject()\">{{ projectNoun }} löschen</ion-button>\n          <ion-label *ngIf=\"currentDate <= this.schedule.control || currentDate > this.schedule.registration\" color=\"text\">\n            {{ adminWrongTime }}\n          </ion-label>\n        </div>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdminProjectDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectDetailPageModule", function() { return AdminProjectDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_project_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-project-detail.page */ "./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.ts");







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

/***/ "./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2FkbWluLXBhZ2UvYWRtaW4tcHJvamVjdHMvYWRtaW4tcHJvamVjdC1kZXRhaWwvYWRtaW4tcHJvamVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vYWRtaW4tcGFnZS9hZG1pbi1wcm9qZWN0cy9hZG1pbi1wcm9qZWN0LWRldGFpbC9hZG1pbi1wcm9qZWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byBhdXRvIGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdminProjectDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectDetailPage", function() { return AdminProjectDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");








let AdminProjectDetailPage = class AdminProjectDetailPage {
    constructor(activatedRoute, router, scheduleService, projectsService, alertCtrl, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.scheduleService = scheduleService;
        this.projectsService = projectsService;
        this.alertCtrl = alertCtrl;
        this.config = config;
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
    }
    ngOnInit() {
        this.projectNoun = this.config.app_config.project_noun;
        this.adminWrongTime = this.config.get_error('admin-wrong_time');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ProjectID')) {
                this.router.navigate(['']);
                return;
            }
            this.adminUrl = paramMap.get('AdminName');
            this.projectId = paramMap.get('ProjectID');
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getProject(this.projectId);
        this.projectsService.update.subscribe(() => this.getProject(this.projectId));
    }
    getProject(ProjectID) {
        this.projectsService.getProjectAdmin(ProjectID).subscribe(data => {
            this.loadedProject = data.data;
        });
    }
    authorizedChanged() {
        this.projectsService.toogleAuthorizedProject(this.loadedProject.id, this.loadedProject.authorized);
    }
    editableChanged() {
        this.projectsService.toogleEditableProject(this.loadedProject.id, this.loadedProject.editable);
    }
    deleteProject() {
        this.alertCtrl.create({
            header: 'Sind sie sicher?',
            message: 'Wollen sie dieses Projekt wirklich unwiederruflich löschen?',
            buttons: [{
                    text: 'Abbrechen',
                    role: 'cancel',
                }, {
                    text: 'Löschen',
                    handler: () => {
                        this.projectsService.deleteProject(this.loadedProject.id);
                        this.router.navigate(['Projekttage/Admin/' + this.adminUrl + '/Projekte']);
                    }
                }]
        }).then(alertEl => {
            alertEl.present();
        });
    }
};
AdminProjectDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }
];
AdminProjectDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-project-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-project-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-project-detail.page.scss */ "./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.page.scss")).default]
    })
], AdminProjectDetailPage);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module-es2015.js.map