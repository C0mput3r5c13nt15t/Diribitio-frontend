(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad"],{

/***/ "ZvwH":
/*!**********************************************!*\
  !*** ./src/app/services/students.service.ts ***!
  \**********************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "r4Kj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







/**
 * This service handles all request to the backend having to do with the students
 */
let StudentsService = class StudentsService {
    constructor(http, auth, alert, config, router) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.router = router;
        /**
         * The update event is emitted after every major successful request
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The url to the backend
         */
        this.backendUrl = this.config.backend_config.url;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    /**
     * Creates a new student account
     * @param signUpData Contains the credentials for the account creation
     * @param form Contains the form to be resetted after the creation
     */
    signUpStudent(signUpData, form) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'students/register', signUpData, options).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.auth.setLoggedIn(true);
                this.router.navigate([this.eventName + '/Anmeldung']);
            }
            this.alert.alert('Dein Account wurde erfolgreich erstellt!');
            this.sendAuthentificationEmail();
            this.update.emit();
            form.reset();
        }, error => {
            this.alert.error('Erstellung des Accounts fehlgeschlagen!', error.error);
        });
    }
    /**
     * Sends the authentification email to the student associated with the provided token
     */
    sendAuthentificationEmail() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'students/email/resend', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
        });
    }
    /**
     * Sends the authentification email to the student associated with the provided token (same as before)
     * @returns RequestObservable
     */
    sendAuthentificationEmailSubscribe() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/email/resend', null, options);
    }
    /**
     * Logs in as student with the given credentials
     * @param loginData Contains the credentials to be used (email and password)
     * @returns RequestObservable
     */
    logInStudent(loginData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/login', loginData, options);
    }
    /**
     * Logs out the student associated with the provided token
     */
    logOutStudent() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/logout', null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Logout fehlgeschlagen!', error.error);
        });
    }
    /**
     * Gets the student associated with the provided token
     * @returns RequestObservable
     */
    getSelfStudent() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/self', options);
    }
    /**
     * Gets the id of an given student
     * @param studentData Contains the student
     * @returns RequestObservable
     */
    getStudentID(studentData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/id', studentData, options);
    }
    /**
     * Gets all names of all students
     * @returns RequestObservable
     */
    getAllStudentNames() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/little_index_students', options);
    }
    /**
     * Gets all students of the given page
     * @param page Contains the number of the page
     * @returns RequestObservable
     */
    getAllStudents(page) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/index_students?page=' + page, options);
    }
    /**
     * Gets all students that are relevant for the search
     * @param searchValue Contains a string value of the search
     * @returns RequestObservable
     */
    getAllSearchedStudents(searchValue) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const sendData = {
            search_value: searchValue
        };
        return this.http.post(this.backendUrl + 'admins/search_index_students', sendData, options);
    }
    /**
     * Gets all friends of the student associated with the provided token
     * @returns RequestObservable
     */
    getFriends() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/friends', options);
    }
    /**
     * Makes the student with the given id a assistant leader in the project of the student associated
     *              with the provided token
     * @param studentID Contains the id of the student to be promoted
     */
    promoteStudent(studentID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + 'students/promote_student/' + studentID, null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Ernennung des Assistenten fehlgeschlagen!', error.error);
        });
    }
    /**
     * Suspends the assistent leader with the given id as assistant leader in the project of the student
     *              associated with the provided token
     * @param assistentID Contains the id of the assistent leader to be suspended
     */
    suspendStudent(assistentID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + 'students/suspend_student/' + assistentID, null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Suspendierung des Assistenten fehlgeschlagen!', error.error);
        });
    }
    /**
     * Removes the assistant leader role of the student associated with the provided token
     * @returns RequestObservable
     */
    quitAssistant() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.put(this.backendUrl + 'students/quit_assistant', null, options);
    }
    /**
     * Updates the student associated with the provided token
     * @param studentData Contains the updated student
     * @param backUrl Contains the url that the user should be navigated to after a successful update
     */
    putSelfStudent(studentData, backUrl) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + 'students/self_update', studentData, options).subscribe(() => {
            this.alert.alert('Der Account wurde erfolgreich aktualisiert!');
            this.router.navigate([this.eventName + '/Schüler/' + backUrl]);
            this.update.emit();
        }, error => {
            this.alert.error('Aktualisierung des Accounts fehlgeschlagen!', error.error);
        });
    }
};
StudentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
StudentsService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
StudentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentsService);



/***/ })

}]);
//# sourceMappingURL=default~log-in-admin-page-admin-students-leaders-admin-students-leaders-module~log-in-log-in-module~~d334e0ad-es2015.js.map