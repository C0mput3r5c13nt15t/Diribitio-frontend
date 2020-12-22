(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-student-page-registration-registration-module"],{

/***/ "1i7b":
/*!*************************************************************************!*\
  !*** ./src/app/log-in/student-page/registration/registration.module.ts ***!
  \*************************************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "MWms");







const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]
    }
];
let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "2//l":
/*!*************************************************************************!*\
  !*** ./src/app/log-in/student-page/registration/registration.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "MWms":
/*!***********************************************************************!*\
  !*** ./src/app/log-in/student-page/registration/registration.page.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration.page.html */ "R2i6");
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.page.scss */ "2//l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/students.service */ "ZvwH");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");









let RegistrationPage = class RegistrationPage {
    constructor(projectsService, studentsService, activatedRoute, router, alertCtrl, config) {
        this.projectsService = projectsService;
        this.studentsService = studentsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.subscriptions = [];
        this.loadedProjects = [];
        this.possibleProjects = [];
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
            role: 1
        };
        this.appendFriend = {
            id: 0,
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
        };
        this.friendsList = [];
        this.definiteArticle = this.config.definite_article;
        this.indefiniteArticle = this.config.indefinite_article.toLowerCase();
        this.projectsNoun = this.config.app_config.projects_noun;
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text = this.config.get_content('user-registration');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.studentUrl = paramMap.get('ParticipantName');
        });
        this.getProjects();
        this.getStudent();
        this.subscriptions.push(this.projectsService.update.subscribe(() => this.getProjects()), this.studentsService.update.subscribe(() => this.getStudent()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getStudent() {
        this.studentsService.getSelfStudent().subscribe(data => {
            this.loadedStudent = data.data;
            this.lowestGrade = +data.data.grade;
            this.highestGrade = +data.data.grade;
            this.friendsList = [];
            this.studentsService.getFriends().subscribe(friendData => {
                this.friendsList = friendData.data;
                this.friendsList.forEach((friend) => {
                    if (+friend.grade <= this.lowestGrade) {
                        this.lowestGrade = +friend.grade;
                    }
                    if (+friend.grade >= this.highestGrade) {
                        this.highestGrade = +friend.grade;
                    }
                    this.filterProjects();
                });
            });
        });
    }
    userChanges() {
        this.lowestGrade = +this.loadedStudent.grade;
        this.highestGrade = +this.loadedStudent.grade;
        this.friendsList.forEach((friend) => {
            if (+friend.grade <= this.lowestGrade) {
                this.lowestGrade = +friend.grade;
            }
            if (+friend.grade >= this.highestGrade) {
                this.highestGrade = +friend.grade;
            }
        });
        this.filterProjects();
    }
    getProjects() {
        this.projectsService.getAllProjects().subscribe(data => {
            this.loadedProjects = data.data;
        });
    }
    validateProject(project) {
        if (this.lowestGrade >= +project.min_grade) {
            if (+project.max_grade >= this.highestGrade) {
                if (project.id !== this.loadedStudent.project_id) {
                    if (project.authorized) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    filterProjects() {
        this.possibleProjects = [];
        // console.log(this.lowestGrade);
        this.loadedProjects.forEach(project => {
            if (this.validateProject(project)) {
                // console.log(project.max_grade);
                this.possibleProjects.push(project);
            }
        });
    }
    appendFriendFunction() {
        this.studentsService.getStudentID(this.appendFriend).subscribe(data => {
            // tslint:disable-next-line: triple-equals
            if (data.id != 0) {
                this.appendFriend.id = data.id;
                if (this.friendsList.length < 3 && !this.friendsList.some(e => e.id === data.id)) {
                    this.friendsList.push(JSON.parse(JSON.stringify(this.appendFriend)));
                    console.log(this.friendsList);
                    if (+this.appendFriend.grade <= this.lowestGrade) {
                        this.lowestGrade = +this.appendFriend.grade;
                    }
                    if (+this.appendFriend.grade >= this.highestGrade) {
                        this.highestGrade = +this.appendFriend.grade;
                    }
                }
                this.filterProjects();
            }
            else {
                this.alertCtrl.create({
                    header: 'Fehler',
                    message: 'Der angegebene Schüler konnte nicht gefunden werden!',
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel',
                        }]
                }).then(alertEl => {
                    alertEl.present();
                });
            }
        });
    }
    removeFriendFunction(friend) {
        this.friendsList.splice(this.friendsList.indexOf(friend), 1);
        this.lowestGrade = +this.loadedStudent.grade;
        this.highestGrade = +this.loadedStudent.grade;
        this.friendsList.forEach(stillfriend => {
            if (+stillfriend.grade < this.lowestGrade) {
                this.lowestGrade = +stillfriend.grade;
            }
            if (+stillfriend.grade > this.highestGrade) {
                this.highestGrade = +stillfriend.grade;
            }
        });
        this.filterProjects();
    }
    registrate() {
        // tslint:disable-next-line: triple-equals
        if (this.loadedStudent.first_wish != this.loadedStudent.project_id && this.loadedStudent.second_wish != this.loadedStudent.project_id && this.loadedStudent.third_wish != this.loadedStudent.project_id) {
            if (this.loadedStudent.first_wish !== this.loadedStudent.second_wish && this.loadedStudent.first_wish !== this.loadedStudent.third_wish && this.loadedStudent.second_wish !== this.loadedStudent.third_wish) {
                if (this.friendsList.length === 3) {
                    this.loadedStudent.first_friend = this.friendsList[0].id;
                    this.loadedStudent.second_friend = this.friendsList[1].id;
                    this.loadedStudent.third_friend = this.friendsList[2].id;
                    this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
                }
                else if (this.friendsList.length === 2) {
                    this.loadedStudent.first_friend = this.friendsList[0].id;
                    this.loadedStudent.second_friend = this.friendsList[1].id;
                    this.loadedStudent.third_friend = 0;
                    this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
                }
                else if (this.friendsList.length === 1) {
                    this.loadedStudent.first_friend = this.friendsList[0].id;
                    this.loadedStudent.second_friend = 0;
                    this.loadedStudent.third_friend = 0;
                    this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
                }
                else {
                    this.loadedStudent.first_friend = 0;
                    this.loadedStudent.second_friend = 0;
                    this.loadedStudent.third_friend = 0;
                    this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
                }
            }
            else {
                this.alertCtrl.create({
                    header: 'Fehler',
                    message: 'Du must drei verschiedene Projektwünsche angeben!',
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel',
                        }]
                }).then(alertEl => {
                    alertEl.present();
                });
            }
        }
        else {
            this.alertCtrl.create({
                header: 'Fehler',
                message: 'Du kannst nicht an deinem eigenen Projekt teilnehmen!',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                    }]
            }).then(alertEl => {
                alertEl.present();
            });
        }
    }
};
RegistrationPage.ctorParameters = () => [
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] },
    { type: src_app_services_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrationPage);



/***/ }),

/***/ "R2i6":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/student-page/registration/registration.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Schüler/{{ studentUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Anmeldung</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-card-title>Für {{ projectsNoun }} Anmelden</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"registrate()\">\n        <ion-list>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required [(ngModel)]=\"loadedStudent.first_name\" name=\"ParticipantFirstName\" placeholder=\"Vorname\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required [(ngModel)]=\"loadedStudent.last_name\" name=\"ParticipantLastName\" placeholder=\"Nachname\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n            <ion-select [selectedText]=\"loadedStudent.grade\" required name=\"ParticipantGrade\" (ionChange)=\"userChanges()\" [(ngModel)]=\"loadedStudent.grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-radio-group required name=\"ParticipantClass\" [(ngModel)]=\"loadedStudent.letter\">\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">A </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">B </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">C </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">D </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-item>\n        </ion-list>\n\n        <ion-card color=\"background\" *ngIf=\"loadedStudent.project_id == 0\">\n          <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"appendFriendFunction()\">\n            <ion-item color=\"items\">\n              <ion-input color=\"text\" type=\"text\" placeholder=\"Vorname\" [(ngModel)]=\"appendFriend.first_name\" name=\"ExchangeSecondFirstName\"></ion-input>\n            </ion-item>\n            <ion-item color=\"items\">\n              <ion-input color=\"text\" type=\"text\" placeholder=\"Nachname\" [(ngModel)]=\"appendFriend.last_name\" name=\"ExchangeSecondLastName\"></ion-input>\n            </ion-item>\n            <ion-item color=\"items\">\n              <ion-label color=\"text\">Klassenstufe</ion-label>\n              <ion-select [selectedText]=\"appendFriend.grade\" name=\"ParticipantGrade\" [(ngModel)]=\"appendFriend.grade\" cancelText=\"Abbrechen\" doneText=\"Ok\">\n                <ion-select-option value=\"5\">5</ion-select-option>\n                <ion-select-option value=\"6\">6</ion-select-option>\n                <ion-select-option value=\"7\">7</ion-select-option>\n                <ion-select-option value=\"8\">8</ion-select-option>\n                <ion-select-option value=\"9\">9</ion-select-option>\n                <ion-select-option value=\"10\">10</ion-select-option>\n                <ion-select-option value=\"11\">11</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item color=\"items\">\n              <ion-radio-group color=\"buttons\" name=\"ParticipantClass\" [(ngModel)]=\"appendFriend.letter\">\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">A </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n                </ion-item>\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">B </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n                </ion-item>\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">C </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n                </ion-item>\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">D </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-item>\n            <div class=\"ion-padding\">\n              <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Als Freund hinzufügen</ion-button>\n            </div>\n          </form>\n        </ion-card>\n\n        <ion-list>\n          <ion-title color=\"background\">Freunde</ion-title>\n          <ion-item color=\"items\" *ngIf=\"loadedStudent.project_id == 0 || loadedStudent.project_id == null\">\n            <ion-list>\n              <ion-item color=\"items\" lines=\"none\" *ngFor=\"let friend of friendsList\">\n                {{ friend.first_name }} {{ friend.last_name }} {{ friend.grade }}{{ friend.letter }}\n                <ion-button color=\"buttons\" slot=\"end\" (click)=\"removeFriendFunction(friend)\"><ion-icon color=\"text\" name=\"close\"></ion-icon></ion-button>\n              </ion-item>\n            </ion-list>\n          </ion-item>\n          <ion-item color=\"items\" *ngIf=\"loadedStudent.project_id == 0 && loadedStudent.role === 1 || loadedStudent.project_id == null && loadedStudent.role === 1\">\n            <ion-label color=\"text\">\n              {{ definiteArticle }} {{ projectNoun }} muss die Klassenstufen {{ lowestGrade }} bis {{ highestGrade }} erlauben.\n            </ion-label>\n          </ion-item>\n          <ion-item color=\"background\" *ngIf=\"loadedStudent.project_id != 0 && loadedStudent.project_id != null || loadedStudent.role === 2\">\n            <ion-label color=\"danger\">\n              Du kanst leider keine Freunde auswählen, da du selbst {{ indefiniteArticle }} {{ projectNoun }} erstellt hast.\n            </ion-label>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">1. Wunsch</ion-label>\n            <ion-select required placeholder=\"1. Wunsch\" name=\"ParticipantFirstWish\" [(ngModel)]=\"loadedStudent.first_wish\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\"> \n              <ion-select-option *ngFor=\"let project of possibleProjects\" [value]=\"project.id\">{{ project.title }} ({{ project.min_grade }}. - {{ project.max_grade }}.Klasse)</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">2. Wunsch</ion-label>\n            <ion-select required placeholder=\"2. Wunsch\" name=\"ParticipantSecondWish\" [(ngModel)]=\"loadedStudent.second_wish\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\">\n              <ion-select-option *ngFor=\"let project of possibleProjects\" [value]=\"project.id\">{{ project.title }} ({{ project.min_grade }}. - {{ project.max_grade }}.Klasse)</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">3. Wunsch</ion-label>\n            <ion-select required placeholder=\"3. Wunsch\" name=\"ParticipantThirdWish\" [(ngModel)]=\"loadedStudent.third_wish\" okText=\"Auswählen\" cancelText=\"Abbrechen\">\n              <ion-select-option *ngFor=\"let project of possibleProjects\" [value]=\"project.id\">{{ project.title }} ({{ project.min_grade }}. - {{ project.max_grade }}.Klasse)</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Anmelden</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=log-in-student-page-registration-registration-module-es2015.js.map