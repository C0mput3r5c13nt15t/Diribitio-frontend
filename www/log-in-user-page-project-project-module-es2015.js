(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-project-project-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project/project.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project/project.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ participantUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"chosenProject.leader_id == null && chosenProject.title == null && chosenProject.authorized == null\"  class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ studentLoadingProject }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"!!+chosenProject.authorized === true\" class=\"content\">\n    <ion-img *ngIf=\"chosenProject.image != '' && chosenProject.image != null\" src='{{ imageUrl }}{{ chosenProject.image }}'></ion-img>\n    <ion-card-header>\n      <ion-title>\n        <h1>{{ chosenProject.title }}</h1>\n      </ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-text color=\"text\">{{ chosenProject.descr }}</ion-text>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ chosenProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ chosenProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag: {{ chosenProject.first_day_begin }} bis {{ chosenProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag: {{ chosenProject.second_day_begin }} bis {{ chosenProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ chosenProject.min_grade }}. bis {{ chosenProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ chosenProject.min_participants }} bis {{ chosenProject.max_participants }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\" *ngIf=\"chosenProject.messages.length\">\n          <ion-label color=\"text\">Nachrichten</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"chosenProject.messages.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of chosenProject.messages\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ message.message }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teilnehmer</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"chosenProject.leader && chosenProject.leader_type === 'App\\\\Student'\">\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ chosenProject.leader.first_name }} {{ chosenProject.leader.last_name }} {{ chosenProject.leader.grade }}{{ chosenProject.leader.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"chosenProject.assistant_student_leaders.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let assistant of chosenProject.assistant_student_leaders\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div *ngIf=\"chosenProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of chosenProject.participants\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"!!+chosenProject.authorized == false\"  class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ studentProjectNotAllowed }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/user-page/project/project.module.ts":
/*!************************************************************!*\
  !*** ./src/app/log-in/user-page/project/project.module.ts ***!
  \************************************************************/
/*! exports provided: ProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.page */ "./src/app/log-in/user-page/project/project.page.ts");







const routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]
    }
];
let ProjectPageModule = class ProjectPageModule {
};
ProjectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
    })
], ProjectPageModule);



/***/ }),

/***/ "./src/app/log-in/user-page/project/project.page.scss":
/*!************************************************************!*\
  !*** ./src/app/log-in/user-page/project/project.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL3VzZXItcGFnZS9wcm9qZWN0L3Byb2plY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vdXNlci1wYWdlL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byBhdXRvIGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/log-in/user-page/project/project.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/log-in/user-page/project/project.page.ts ***!
  \**********************************************************/
/*! exports provided: ProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPage", function() { return ProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");





let ProjectPage = class ProjectPage {
    constructor(activatedRoute, router, projectsService, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projectsService = projectsService;
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
            role: 1
        };
        this.chosenProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
            leader_type: '',
            leader_id: 0,
            messages: [],
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
            participants: [],
            assistant_student_leaders: []
        };
        this.imageUrl = this.config.backend_config.imageUrl;
        this.projectNoun = this.config.app_config.project_noun;
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.studentLoadingProject = this.config.get_error('student_loading_project');
        this.studentProjectNotAllowed = this.config.get_error('student_project_not_allowed');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
        });
        this.getProject();
    }
    getProject() {
        this.projectsService.getSelfProject().subscribe(data => {
            this.chosenProject = data.data;
        });
    }
};
ProjectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
ProjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./project.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/project/project.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./project.page.scss */ "./src/app/log-in/user-page/project/project.page.scss")).default]
    })
], ProjectPage);



/***/ })

}]);
//# sourceMappingURL=log-in-user-page-project-project-module-es2015.js.map