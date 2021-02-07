(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-projects-project-detail-project-detail-module"],{

/***/ "H3vw":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/projects/project-detail/project-detail.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"!!+loadedProject.authorized === true\" class=\"content\">\n    <ion-img *ngIf=\"loadedProject.image != '' && loadedProject.image != null\" src='{{ imageUrl }}{{ loadedProject.image }}'></ion-img>\n    <ion-card-header>\n      <ion-card-title text-wrap>{{ loadedProject.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group color=\"background\">\n        <ion-item color=\"items\" lines=\"none\" class=\"descr\">\n          <ion-text color=\"text\">{{ loadedProject.descr }}</ion-text>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag: {{ loadedProject.first_day_begin }} bis {{ loadedProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag: {{ loadedProject.second_day_begin }} bis {{ loadedProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ loadedProject.min_grade }}. bis {{ loadedProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ loadedProject.min_participants }} bis {{ loadedProject.max_participants }}</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" class=\"content\" *ngIf=\"!!+loadedProject.authorized == false\">\n    <ion-card-content>\n      <ion-text color=\"danger\">Leider ist dieses Projekt noch nicht zugelassen worden!</ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "Pe+c":
/*!**************************************************************************************!*\
  !*** ./src/app/log-in/student-page/projects/project-detail/project-detail.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProjectDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailPageModule", function() { return ProjectDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _project_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-detail.page */ "QuN3");







const routes = [
    {
        path: '',
        component: _project_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailPage"]
    }
];
let ProjectDetailPageModule = class ProjectDetailPageModule {
};
ProjectDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailPage"]]
    })
], ProjectDetailPageModule);



/***/ }),

/***/ "QuN3":
/*!************************************************************************************!*\
  !*** ./src/app/log-in/student-page/projects/project-detail/project-detail.page.ts ***!
  \************************************************************************************/
/*! exports provided: ProjectDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailPage", function() { return ProjectDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-detail.page.html */ "H3vw");
/* harmony import */ var _project_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-detail.page.scss */ "YAtV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");







let ProjectDetailPage = class ProjectDetailPage {
    constructor(activatedRoute, router, projectsService, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projectsService = projectsService;
        this.config = config;
        this.subscriptions = [];
        this.loadedProject = {
            id: 0,
            authorized: 1,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
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
        };
        this.imageUrl = this.config.backend_config.imageUrl;
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ProjectID') || !paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.projectId = Number(paramMap.get('ProjectID'));
            this.studentUrl = paramMap.get('ParticipantName');
        });
        this.projectsService.getProject(this.projectId).subscribe(data => {
            this.loadedProject = data.data;
        });
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
};
ProjectDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
ProjectDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-detail',
        template: _raw_loader_project_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectDetailPage);



/***/ }),

/***/ "YAtV":
/*!**************************************************************************************!*\
  !*** ./src/app/log-in/student-page/projects/project-detail/project-detail.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2plY3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6InByb2plY3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gYXV0bztcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=log-in-student-page-projects-project-detail-project-detail-module-es2015.js.map