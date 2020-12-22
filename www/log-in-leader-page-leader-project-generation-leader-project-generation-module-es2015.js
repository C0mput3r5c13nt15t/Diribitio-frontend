(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-project-generation-leader-project-generation-module"],{

/***/ "FHDN":
/*!**************************************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-project-generation/leader-project-generation.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: LeaderProjectGenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderProjectGenerationPageModule", function() { return LeaderProjectGenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leader_project_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leader-project-generation.page */ "pwoe");







const routes = [
    {
        path: '',
        component: _leader_project_generation_page__WEBPACK_IMPORTED_MODULE_6__["LeaderProjectGenerationPage"]
    }
];
let LeaderProjectGenerationPageModule = class LeaderProjectGenerationPageModule {
};
LeaderProjectGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_leader_project_generation_page__WEBPACK_IMPORTED_MODULE_6__["LeaderProjectGenerationPage"]]
    })
], LeaderProjectGenerationPageModule);



/***/ }),

/***/ "dwu4":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-project-generation/leader-project-generation.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n      <ion-button color=\"buttons\" slot=\"start\">\n        <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/{{ projectNoun}}leiter/{{ leaderUrl }}\"></ion-back-button>\n      </ion-button>\n      <ion-title>{{ projectNoun }} erstellen</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content color=\"background\">\n    <ion-card color=\"background\"class=\"content\">\n      <ion-card-header>\n        <ion-card-title>{{ projectNoun }} erstellen</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"text\">\n        <ion-label color=\"text\">\n          {{ text }}\n        </ion-label>\n      </ion-card-content>\n      <ion-card-content>\n        <form #form=\"ngForm\" name=\"ProjectForm\" (ngSubmit)=\"create()\">\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ projectNoun }}leiter</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required name=\"ProjectLeader\" [(ngModel)]=\"newProject.leader_name\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ projectNoun }}name</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required name=\"ProjectName\" [(ngModel)]=\"newProject.title\" required type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">{{ projectNoun }}beschreibung</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-textarea required type=\"text\" name=\"ProjectDescr\" [(ngModel)]=\"newProject.descr\" rows=\"7\"></ion-textarea>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Titelbild</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" name=\"ProjectImage\" (change)=\"changeFile($event)\" accept=\".png, .jpg\" type=\"file\"></ion-input>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Kosten</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required name=\"ProjectCost\" [(ngModel)]=\"newProject.cost\" required type=\"number\"></ion-input>€\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">1.Tag</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">von</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectFirstTimeBeginn\" [(ngModel)]=\"newProject.first_day_begin\" type=\"time\"></ion-input>\n          </ion-item> \n          <ion-item color=\"items\">\n            <ion-label color=\"text\">bis</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectFirstTimeEnd\" [(ngModel)]=\"newProject.first_day_end\" type=\"time\"></ion-input>\n          </ion-item> \n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">2.Tag</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">von</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectSecondTimeBeginn\" [(ngModel)]=\"newProject.second_day_begin\" type=\"time\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">bis</ion-label><ion-input display-format=\"hh:mm\" color=\"text\" required name=\"ProjectSecondTimeEnd\" [(ngModel)]=\"newProject.second_day_end\" type=\"time\"></ion-input>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">von</ion-label>\n            <ion-select required [selectedText]=\"newProject.min_grade\" name=\"ProjectMinClass\" [(ngModel)]=\"newProject.min_grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\" lines=\"none\">\n            <ion-label color=\"text\">bis</ion-label>\n            <ion-select required [selectedText]=\"newProject.max_grade\" name=\"ProjectMaxClass\" [(ngModel)]=\"newProject.max_grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item-divider color=\"background\">\n            <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n          </ion-item-divider>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">von</ion-label><ion-input color=\"text\" required name=\"ProjectMinParticipants\" [(ngModel)]=\"newProject.min_participants\" required type=\"number\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">bis</ion-label><ion-input color=\"text\" required name=\"ProjectMaxParticipants\" [(ngModel)]=\"newProject.max_participants\" required type=\"number\"></ion-input>\n          </ion-item>\n          <div class=\"ion-padding\">\n            <ion-button color=\"buttons\"  [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">{{ projectNoun }} erstellen</ion-button>\n          </div>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n  ");

/***/ }),

/***/ "pwoe":
/*!************************************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-project-generation/leader-project-generation.page.ts ***!
  \************************************************************************************************/
/*! exports provided: LeaderProjectGenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderProjectGenerationPage", function() { return LeaderProjectGenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leader_project_generation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leader-project-generation.page.html */ "dwu4");
/* harmony import */ var _leader_project_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leader-project-generation.page.scss */ "yFST");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");








let LeaderProjectGenerationPage = class LeaderProjectGenerationPage {
    constructor(activatedRoute, router, projectsService, alert, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projectsService = projectsService;
        this.alert = alert;
        this.config = config;
        this.subscriptions = [];
        this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0,
        };
        this.newProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: null,
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
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text = this.config.get_content('leader-project-generation');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('LeaderName')) {
                this.router.navigate(['']);
                return;
            }
            this.leaderUrl = paramMap.get('LeaderName');
        });
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    changeFile(event) {
        const file = event.target.files[0];
        if (file) {
            this.image = file;
        }
    }
    create() {
        this.projectsService.createProject('leaders', this.newProject, this.image).subscribe(data => {
            this.alert.alert(data.message);
            this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + this.leaderUrl]);
            this.projectsService.update.emit();
        }, error => {
            this.alert.error('Erstellung des Projektes fehlgeschlagen!', error.error);
        });
    }
};
LeaderProjectGenerationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }
];
LeaderProjectGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-generation',
        template: _raw_loader_leader_project_generation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_project_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaderProjectGenerationPage);



/***/ }),

/***/ "yFST":
/*!**************************************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-project-generation/leader-project-generation.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItcHJvamVjdC1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=log-in-leader-page-leader-project-generation-leader-project-generation-module-es2015.js.map