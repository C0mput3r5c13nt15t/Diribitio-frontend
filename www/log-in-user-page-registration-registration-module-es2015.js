(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/registration/registration.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/registration/registration.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Benutzer/{{ participantUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Anmeldung</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header color=\"background\">\n      <ion-title>Für {{ projectsNoun }} Anmelden</ion-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"registrate()\">\n        <ion-list>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required [(ngModel)]=\"loadedUser.first_name\" name=\"ParticipantFirstName\" placeholder=\"Vorname\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-input color=\"text\" required [(ngModel)]=\"loadedUser.last_name\" name=\"ParticipantLastName\" placeholder=\"Nachname\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">Klassenstufe</ion-label>\n            <ion-select [selectedText]=\"loadedUser.grade\" required name=\"ParticipantGrade\" (ionChange)=\"userChanges()\" [(ngModel)]=\"loadedUser.grade\">\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-radio-group required name=\"ParticipantClass\" [(ngModel)]=\"loadedUser.letter\">\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">A </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">B </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">C </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n              </ion-item>\n              <ion-item color=\"items\" lines=\"none\">\n                <ion-label color=\"text\">D </ion-label>\n                <ion-radio color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-item>\n        </ion-list>\n\n        <ion-card color=\"background\" *ngIf=\"loadedUser.project_id == 0\">\n          <form #form=\"ngForm\" name=\"ParticipantForm\" (ngSubmit)=\"appendFriendFunction()\">\n            <ion-item color=\"items\">\n              <ion-input color=\"text\" type=\"text\" placeholder=\"Vorname\" [(ngModel)]=\"appendFriend.first_name\" name=\"ExchangeSecondFirstName\"></ion-input>\n            </ion-item>\n            <ion-item color=\"items\">\n              <ion-input color=\"text\" type=\"text\" placeholder=\"Nachname\" [(ngModel)]=\"appendFriend.last_name\" name=\"ExchangeSecondLastName\"></ion-input>\n            </ion-item>\n            <ion-item color=\"items\">\n              <ion-label color=\"text\">Klassenstufe</ion-label>\n              <ion-select [selectedText]=\"appendFriend.grade\" name=\"ParticipantGrade\" [(ngModel)]=\"appendFriend.grade\">\n                <ion-select-option value=\"5\">5</ion-select-option>\n                <ion-select-option value=\"6\">6</ion-select-option>\n                <ion-select-option value=\"7\">7</ion-select-option>\n                <ion-select-option value=\"8\">8</ion-select-option>\n                <ion-select-option value=\"9\">9</ion-select-option>\n                <ion-select-option value=\"10\">10</ion-select-option>\n                <ion-select-option value=\"11\">11</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item color=\"items\">\n              <ion-radio-group color=\"buttons\" name=\"ParticipantClass\" [(ngModel)]=\"appendFriend.letter\">\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">A </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"a\"></ion-radio>\n                </ion-item>\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">B </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"b\"></ion-radio>\n                </ion-item>\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">C </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"c\"></ion-radio>\n                </ion-item>\n                <ion-item color=\"items\" lines=\"none\">\n                  <ion-label color=\"text\">D </ion-label>\n                  <ion-radio color=\"text\" slot=\"start\" value=\"d\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-item>\n            <div class=\"ion-padding\">\n              <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Als Freund hinzufügen</ion-button>\n            </div>\n          </form>\n        </ion-card>\n\n        <ion-list>\n          <ion-title color=\"background\">Freunde</ion-title>\n          <ion-item color=\"items\" *ngIf=\"loadedUser.project_id == 0 || loadedUser.project_id == null\">\n            <ion-list>\n              <ion-item color=\"items\" lines=\"none\" *ngFor=\"let friend of friendsList\">\n                {{ friend.first_name }} {{ friend.last_name }} {{ friend.grade }}{{ friend.letter }}\n                <ion-button color=\"buttons\" slot=\"end\" (click)=\"removeFriendFunction(friend)\"><ion-icon color=\"text\" name=\"close\"></ion-icon></ion-button>\n              </ion-item>\n            </ion-list>\n          </ion-item>\n          <ion-item color=\"items\" *ngIf=\"loadedUser.project_id == 0 && loadedUser.role === 1 || loadedUser.project_id == null && loadedUser.role === 1\">\n            <ion-label color=\"text\">\n              {{ definiteArticle }} {{ projectNoun }} muss die Klassenstufen {{ lowestGrade }} bis {{ highestGrade }} erlauben.\n            </ion-label>\n          </ion-item>\n          <ion-item color=\"background\" *ngIf=\"loadedUser.project_id != 0 && loadedUser.project_id != null || loadedUser.role === 2\">\n            <ion-label color=\"danger\">\n              Du kanst leider keine Freunde auswählen, da du selbst {{ indefiniteArticle }} {{ projectNoun }} erstellt hast.\n            </ion-label>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">1. Wunsch</ion-label>\n            <ion-select required placeholder=\"1. Wunsch\" name=\"ParticipantFirstWish\" [(ngModel)]=\"loadedUser.first_wish\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\"> \n              <ion-select-option *ngFor=\"let project of possibleProjects\" [value]=\"project.id\">{{ project.title }} ({{ project.min_grade }}. - {{ project.max_grade }}.Klasse)</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">2. Wunsch</ion-label>\n            <ion-select required placeholder=\"2. Wunsch\" name=\"ParticipantSecondWish\" [(ngModel)]=\"loadedUser.second_wish\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\">\n              <ion-select-option *ngFor=\"let project of possibleProjects\" [value]=\"project.id\">{{ project.title }} ({{ project.min_grade }}. - {{ project.max_grade }}.Klasse)</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item color=\"items\">\n            <ion-label color=\"text\">3. Wunsch</ion-label>\n            <ion-select required placeholder=\"3. Wunsch\" name=\"ParticipantThirdWish\" [(ngModel)]=\"loadedUser.third_wish\" okText=\"Auswählen\" cancelText=\"Abbrechen\">\n              <ion-select-option *ngFor=\"let project of possibleProjects\" [value]=\"project.id\">{{ project.title }} ({{ project.min_grade }}. - {{ project.max_grade }}.Klasse)</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Anmelden</ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/user-page/registration/registration.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/log-in/user-page/registration/registration.module.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/log-in/user-page/registration/registration.page.ts");







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

/***/ "./src/app/log-in/user-page/registration/registration.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/log-in/user-page/registration/registration.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLXBhZ2UvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/log-in/user-page/registration/registration.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/log-in/user-page/registration/registration.page.ts ***!
  \********************************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/participants.service */ "./src/app/participants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");







let RegistrationPage = class RegistrationPage {
    constructor(projectsService, participantsService, activatedRoute, router, alertCtrl, config) {
        this.projectsService = projectsService;
        this.participantsService = participantsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.loadedProjects = [];
        this.possibleProjects = [];
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
        this.appendFriend = {
            id: 0,
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
        };
        this.friendsList = [];
    }
    ngOnInit() {
        this.definiteArticle = this.config.definite_article;
        this.indefiniteArticle = this.config.indefinite_article.toLowerCase();
        this.projectsNoun = this.config.app_config.projects_noun;
        this.projectNoun = this.config.app_config.project_noun;
        this.text = this.config.get_content('user-registration');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
            this.participantUrl = paramMap.get('ParticipantName');
        });
        this.getProjects();
        this.projectsService.update.subscribe(() => this.getProjects());
        this.getUser();
        this.participantsService.update.subscribe(() => this.getUser());
    }
    ionViewWillEnter() {
        this.getUser();
    }
    getUser() {
        this.participantsService.getSelfParticipant().subscribe(data => {
            this.loadedUser = data.data;
            this.lowestGrade = +data.data.grade;
            this.highestGrade = +data.data.grade;
            this.friendsList = [];
            this.participantsService.getFriends().subscribe(friendData => {
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
        this.lowestGrade = +this.loadedUser.grade;
        this.highestGrade = +this.loadedUser.grade;
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
        // tslint:disable-next-line: max-line-length
        if (this.lowestGrade >= +project.min_grade) {
            if (+project.max_grade >= this.highestGrade) {
                if (project.id !== this.loadedUser.project_id) {
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
        this.participantsService.getParticipantID(this.appendFriend).subscribe(data => {
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
        this.lowestGrade = +this.loadedUser.grade;
        this.highestGrade = +this.loadedUser.grade;
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
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
        if (this.loadedUser.first_wish != this.loadedUser.project_id && this.loadedUser.second_wish != this.loadedUser.project_id && this.loadedUser.third_wish != this.loadedUser.project_id) {
            // tslint:disable-next-line: max-line-length
            if (this.loadedUser.first_wish !== this.loadedUser.second_wish && this.loadedUser.first_wish !== this.loadedUser.third_wish && this.loadedUser.second_wish !== this.loadedUser.third_wish) {
                if (this.friendsList.length === 3) {
                    this.loadedUser.first_friend = this.friendsList[0].id;
                    this.loadedUser.second_friend = this.friendsList[1].id;
                    this.loadedUser.third_friend = this.friendsList[2].id;
                    this.participantsService.putSelfParticipant(this.loadedUser);
                    this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
                }
                else if (this.friendsList.length === 2) {
                    this.loadedUser.first_friend = this.friendsList[0].id;
                    this.loadedUser.second_friend = this.friendsList[1].id;
                    this.loadedUser.third_friend = 0;
                    this.participantsService.putSelfParticipant(this.loadedUser);
                    this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
                }
                else if (this.friendsList.length === 1) {
                    this.loadedUser.first_friend = this.friendsList[0].id;
                    this.loadedUser.second_friend = 0;
                    this.loadedUser.third_friend = 0;
                    this.participantsService.putSelfParticipant(this.loadedUser);
                    this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
                }
                else {
                    this.loadedUser.first_friend = 0;
                    this.loadedUser.second_friend = 0;
                    this.loadedUser.third_friend = 0;
                    this.participantsService.putSelfParticipant(this.loadedUser);
                    this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
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
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
    { type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/registration/registration.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registration.page.scss */ "./src/app/log-in/user-page/registration/registration.page.scss")).default]
    })
], RegistrationPage);



/***/ })

}]);
//# sourceMappingURL=log-in-user-page-registration-registration-module-es2015.js.map