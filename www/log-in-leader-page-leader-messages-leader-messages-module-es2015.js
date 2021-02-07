(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-messages-leader-messages-module"],{

/***/ "0zAt":
/*!******************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-messages/leader-messages.module.ts ***!
  \******************************************************************************/
/*! exports provided: LeaderMessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderMessagesPageModule", function() { return LeaderMessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leader_messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leader-messages.page */ "3p8a");







const routes = [
    {
        path: '',
        component: _leader_messages_page__WEBPACK_IMPORTED_MODULE_6__["LeaderMessagesPage"]
    }
];
let LeaderMessagesPageModule = class LeaderMessagesPageModule {
};
LeaderMessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_leader_messages_page__WEBPACK_IMPORTED_MODULE_6__["LeaderMessagesPage"]]
    })
], LeaderMessagesPageModule);



/***/ }),

/***/ "3p8a":
/*!****************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-messages/leader-messages.page.ts ***!
  \****************************************************************************/
/*! exports provided: LeaderMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderMessagesPage", function() { return LeaderMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leader-messages.page.html */ "FhyL");
/* harmony import */ var _leader_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leader-messages.page.scss */ "LXWF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/messages.service */ "Hzbo");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/leaders.service */ "PO/Q");










let LeaderMessagesPage = class LeaderMessagesPage {
    constructor(activatedRoute, router, alert, projectsService, leadersService, messagesService, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alert = alert;
        this.projectsService = projectsService;
        this.leadersService = leadersService;
        this.messagesService = messagesService;
        this.config = config;
        this.subscriptions = [];
        this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0,
        };
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
        this.newMessage = {
            message: ''
        };
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('LeaderName')) {
                this.router.navigate(['']);
                return;
            }
            this.leaderUrl = paramMap.get('LeaderName');
        });
        this.getProject();
        this.getLeader();
        this.subscriptions.push(this.messagesService.update.subscribe(() => this.getProject()), this.messagesService.update.subscribe(() => this.getLeader()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getLeader() {
        this.leadersService.getSelfLeader().subscribe(data => {
            this.loadedLeader = data.data;
        });
    }
    getProject() {
        this.projectsService.getSelfLeadedProject('leaders').subscribe(data => {
            this.leadedProject = data.data;
        });
    }
    send(message) {
        if (message.valid === true) {
            this.messagesService.createMessage('leaders', this.newMessage).subscribe(data => {
                this.messagesService.update.emit();
                this.leadedProject.messages.push(data.data);
            }, error => {
                this.alert.error('Versandt der Nachricht fehlgeschlagen!', error.error);
            });
            message.reset();
        }
    }
    delete(Message) {
        this.leadedProject.messages = this.leadedProject.messages.filter(message => {
            return message.id !== Message.id;
        });
        this.messagesService.deleteMessage('leaders', Message.id);
    }
};
LeaderMessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: src_app_services_leaders_service__WEBPACK_IMPORTED_MODULE_9__["LeadersService"] },
    { type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
];
LeaderMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_leader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaderMessagesPage);



/***/ }),

/***/ "FhyL":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-messages/leader-messages.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/{{ projectNoun }}leiter/{{ leaderUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Notizen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-list class=\"content\" *ngIf=\"leadedProject.messages.length\">\n    <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of leadedProject.messages\">\n      <ion-buttons slot=\"end\" (click)=\"delete(message)\" *ngIf=\"message.sender_name == loadedLeader.user_name\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n      <ion-card class=\"message sended_message\" slot=\"end\" color=\"background\" *ngIf=\"message.sender_name == loadedLeader.user_name\">\n        <ion-card-content>\n          <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n          <ion-text color=\"text\">{{ message.message }}</ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class=\"message\" slot=\"start\" color=\"background\" *ngIf=\"message.sender_name != loadedLeader.user_name\">\n        <ion-card-content>\n          <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n          <ion-text color=\"text\">{{ message.message }}</ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-buttons slot=\"start\" (click)=\"delete(message)\" *ngIf=\"message.sender_name != loadedLeader.user_name\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n    </ion-item>\n  </ion-list>\n  <ion-card color=\"background\"name=\"MessageBox\" class=\"content\">\n    <form id=\"Formular\" #form=\"ngForm\" name=\"MessageForm\" (ngSubmit)=\"send(form)\">\n      <ion-item color=\"items\">\n        <ion-input color=\"text\" required name=\"MessageText\" [(ngModel)]=\"newMessage.message\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" [disabled]=\"form.invalid\" type=\"submit\" expand=\"block\" class=\"ion-no-margin\"><ion-label><ion-icon name=\"duplicate\"></ion-icon> Notiz an das Projekt anheften</ion-label></ion-button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n  \n");

/***/ }),

/***/ "LXWF":
/*!******************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-messages/leader-messages.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItbWVzc2FnZXMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=log-in-leader-page-leader-messages-leader-messages-module-es2015.js.map