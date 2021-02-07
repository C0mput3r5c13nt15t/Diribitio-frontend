(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "Hzbo":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "r4Kj");






/**
 * This service handles all request to the backend having to do with the messages
 */
let MessagesService = class MessagesService {
    constructor(http, auth, alert, config) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        /**
         * The update event is emitted after every major successful request
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The url to the backend
         */
        this.backendUrl = this.config.backend_config.url;
    }
    /**
     * Creates a new message for a project
     * @param baseUrl Contains for which type of user accout this request is (students or leaders)
     * @param messageData Contains the message
     * @returns RequestObservable
     */
    createMessage(baseUrl = 'students', messageData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + baseUrl + '/store_leaded_project_message', messageData, options);
    }
    /**
     * Deletes the message with the given id from a project
     * @param baseUrl Contains for which type of user accout this request is (students or leaders)
     * @param messageID Contains the id of the message to be deleted
     * @returns RequestObservable
     */
    deleteMessage(baseUrl = 'students', messageID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + baseUrl + '/destroy_leaded_project_message/' + messageID, options).subscribe(() => {
            this.update.emit();
        }, error => {
            this.alert.error('Löschung der Nachricht fehlgeschlagen!', error.error);
        });
    }
};
MessagesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
MessagesService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
MessagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessagesService);



/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "OeS+":
/*!**********************************************!*\
  !*** ./src/app/services/schedule.service.ts ***!
  \**********************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "r4Kj");





/**
 * This service handles all request to the backend having to do with the shedule
 */
let ScheduleService = class ScheduleService {
    constructor(http, auth, config) {
        this.http = http;
        this.auth = auth;
        this.config = config;
        /**
         * The update event is emitted after every major successful request
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The url to the backend
         */
        this.backendUrl = this.config.backend_config.url;
    }
    /**
     * Gets the current schedule
     * @returns RequestObservable
     */
    getSchedule() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'schedule/1', options);
    }
    /**
     * Updates the current schedule
     * @param schedule Contains the new schedule
     * @returns RequestObservable
     */
    putSchedule(schedule) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.put(this.backendUrl + 'admins/update_schedule', schedule, options);
    }
};
ScheduleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
ScheduleService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ScheduleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScheduleService);



/***/ }),

/***/ "PO/Q":
/*!*********************************************!*\
  !*** ./src/app/services/leaders.service.ts ***!
  \*********************************************/
/*! exports provided: LeadersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadersService", function() { return LeadersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "r4Kj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







/**
 * This service handles all request to the backend having to do with the leaders
 */
let LeadersService = class LeadersService {
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
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    /**
     * Creates a new leader account
     * @param signUpData Contains the credentials for the account creation
     * @param form Contains the form to be resetted after the creation
     */
    signUpLeader(signUpData, form) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'leaders/register', signUpData, options).subscribe(data => {
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
     * Sends the authentification email to the leader associated with the provided token
     */
    sendAuthentificationEmail() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'leaders/email/resend', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
        });
    }
    /**
     * Sends the authentification email to the leader associated with the provided token (same as before)
     * @returns RequestObservable
     */
    sendAuthentificationEmailSubscribe() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'leaders/email/resend', null, options);
    }
    /**
     * Logs in as leader with the given credentials
     * @param loginData Contains the credentials to be used (email and password)
     * @returns RequestObservable
     */
    logInLeader(loginData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'leaders/login', loginData, options);
    }
    /**
     * Logs out the leader associated with the provided token
     */
    logOutLeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'leaders/logout', null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Logout fehlgeschlagen!', error.error);
        });
    }
    /**
     * Gets the leader associated with the provided token
     * @returns RequestObservable
     */
    getSelfLeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'leaders/self', options);
    }
    /**
     * Gets all leaders
     * @returns RequestObservable
     */
    getAllLeaders() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/index_leaders', options);
    }
    /**
     * Deletes the leader with the given id
     * @param leaderID Contains the id of the leader to be deleted
     */
    deleteLeader(leaderID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + 'admins/destroy_leader/' + leaderID, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Löschung des ' + this.projectNoun + 'leiters fehlgeschlagen!', error.error);
        });
    }
    /**
     * Deletes the leader associated with the provided token
     */
    destroySelfLeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + 'leaders/self_destroy', options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Löschung Ihres Accounts fehlgeschlagen!', error.error);
        });
    }
};
LeadersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LeadersService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
LeadersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LeadersService);



/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "hQbD":
/*!***********************************************!*\
  !*** ./src/app/services/exchanges.service.ts ***!
  \***********************************************/
/*! exports provided: ExchangesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesService", function() { return ExchangesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "r4Kj");






/**
 * This service handles all request to the backend having to do with the exchanges
 */
let ExchangesService = class ExchangesService {
    constructor(http, auth, alert, config) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        /**
         * The update event is emitted after every major successful request
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The url to the backend
         */
        this.backendUrl = this.config.backend_config.url;
    }
    /**
     * Gets all exchange requests for the student associated with the provided toke
     * @returns Requestobservable
     */
    getAllExchangesForParticipant() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/exchange_requests', options);
    }
    /**
     * Gets all exchanges
     * @returns Requestobservable
     */
    getAllexchanges() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/index_exchanges', options);
    }
    /**
     * Gets the exchage with the given id
     * @param exchangeID Contains the id of the exchange
     * @returns RequestObservable
     */
    getExchange(exchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/exchange/' + exchangeID, options);
    }
    /**
     * Confirms the exchage with the given id
     * @param exchangeID Contains the id of the exchange
     * @returns RequestObservable
     */
    confirmExchange(exchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.put(this.backendUrl + 'students/confirm_exchange/' + exchangeID, null, options);
    }
    /**
     * Carries out the exchage with the given id
     * @param exchangeID Contains the id of the exchange
     */
    carryOutExchange(exchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + 'admins/accomplish_exchange/' + exchangeID, null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Durchführung des Tausches fehlgeschlagen!', error.error);
        });
    }
    /**
     * Creates an exchage request to the student with the given id
     * @param receiverID Contains the id of the recieving student
     * @returns RequestObservable
     */
    createExchange(receiverID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const sendData = {
            receiver_id: receiverID
        };
        return this.http.post(this.backendUrl + 'students/store_exchange', sendData, options);
    }
    /**
     * Deletes the current exchange of the student associated with the provided toke
     * @returns RequestObservable
     */
    deleteSelfExchange() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.delete(this.backendUrl + 'students/destroy_exchange', options);
    }
    /**
     * Deletes the exchage with the given id
     * @param exchangeID Contains the id of the exchage
     */
    deleteExchange(exchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + 'admins/destroy_exchange/' + exchangeID, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
        });
    }
};
ExchangesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
ExchangesService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ExchangesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExchangesService);



/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "uVPj":
/*!********************************************!*\
  !*** ./src/app/services/admins.service.ts ***!
  \********************************************/
/*! exports provided: AdminsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsService", function() { return AdminsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "r4Kj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







/**
 * This service handles all request to the backend having to do with the admins
 */
let AdminsService = class AdminsService {
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
     * Creates a new admin account
     * @param signUpData Contains the credentials for the account creation
     * @param form Contains the form to be resetted after the creation
     */
    signUpAdmin(signUpData, form) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/register', signUpData, options).subscribe(data => {
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
     * Sends the authentification email to the admin associated with the provided token
     */
    sendAuthentificationEmail() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/email/resend', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
        });
    }
    /**
     * Sends the authentification email to the admin associated with the provided token (same as before)
     * @returns RequestObservable
     */
    sendAuthentificationEmailSubscribe() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/email/resend', null, options);
    }
    /**
     * Logs in as admin with the given credentials
     * @param loginData Contains the credentials to be used (email and password)
     * @returns RequestObservable
     */
    logInAdmin(loginData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/login', loginData, options);
    }
    /**
     * Logs out the admin associated with the provided token
     */
    logOutAdmin() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/logout', null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate([this.eventName + '/Anmeldung']);
        }, error => {
            this.alert.error('Logout fehlgeschlagen!', error.error);
        });
    }
    /**
     * Gets the admin associated with the provided token
     * @returns RequestObservable
     */
    getSelfAdmin() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/self', options);
    }
    /**
     * Gets all emails that are allowed for the creation of admin accounts
     * @returns RequestObservable
     */
    getAllSignUpEmails() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'sign_up_emails', options);
    }
    /**
     * Authorizes a new email to be used for the creation of an admin account
     * @param emailData Contains the email to be authorized
     * @returns RequestObservable
     */
    createSignUpEmail(emailData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'sign_up_emails', emailData, options);
    }
    /**
     * Forbids the furter use of an email that was previously allowed for the creation of an admin account
     * @param emailID Contains the id of the email to be forbidden
     */
    deleteSignUpEmail(emailID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + 'sign_up_emails/' + emailID, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Sperrung der E-Mail fehlgeschlagen!', error.error);
        });
    }
    /**
     * Creates a sorting proposal
     * @returns RequestObservable
     */
    createSortingProposal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/create_sorting_proposal', null, options);
    }
    /**
     * Gets the current sorting proposal
     * @returns RequestObservable
     */
    requestSortingProposal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/request_sorting_proposal', options);
    }
    /**
     * Updates the current sorting proposal
     * @returns RequestObservable
     */
    editSortingProposal(sortingProposal) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/edit_sorting_proposal', sortingProposal, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
        });
    }
    /**
     * Applies the current sorting proposal to the actual database
     * @returns MessageString
     */
    applySortingProposal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/apply_sorting_proposal', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Anwendung des Sortiervorschlags fehlgeschlagen!', error.error);
        });
    }
};
AdminsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AdminsService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AdminsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminsService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map