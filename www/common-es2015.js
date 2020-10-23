(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




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

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
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

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
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

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
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

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
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

/***/ "./src/app/admins.service.ts":
/*!***********************************!*\
  !*** ./src/app/admins.service.ts ***!
  \***********************************/
/*! exports provided: AdminsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsService", function() { return AdminsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let AdminsService = class AdminsService {
    constructor(http, auth, alert, config, router) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.router = router;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    // Request having to do with the Admin itself
    signUpAdmin(signUpData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/register', signUpData, options).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.auth.setLoggedIn(true);
                this.router.navigate(['Projekttage/Anmeldung']);
            }
            this.alert.alert('Dein Account wurde erfolgreich erstellt!');
            this.sendAuthentificationEmail();
            this.update.emit();
        }, error => {
            this.alert.error('Accounterstellung fehlgeschlagen!', error.error);
        });
    }
    sendAuthentificationEmail() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/email/resend', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
        });
    }
    sendAuthentificationEmailSubscribe() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/email/resend', null, options);
    }
    logInAdmin(loginData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/login', loginData, options);
    }
    logOutAdmin() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/logout', null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate(['Projekttage/Anmeldung']);
        }, error => {
            this.alert.error('Logout fehlgeschlagen!', error.error);
        });
    }
    getSelfAdmin() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/self', options);
    }
    getAdmin(adminID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/' + adminID, options);
    }
    // Request having to do with the signUp Tokens for Students
    getAllTokens() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'sign_up_tokens', options);
    }
    createTokens(count) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const sendData = {
            count
        };
        return this.http.post(this.backendUrl + 'sign_up_tokens', sendData, options);
    }
    deleteAllTokens() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.delete(this.backendUrl + 'sign_up_tokens', options);
    }
    // Request having to do with the SignUpEmails
    getAllSignUpEmails() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'sign_up_emails', options);
    }
    createSignUpEmail(emailData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'sign_up_emails', emailData, options);
    }
    deleteSignUpEmail(emailID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.delete(this.backendUrl + 'sign_up_emails/' + emailID, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Entfernen der E-mail fehlgeschlagen!', error.error);
        });
    }
    // Request having to do with the Sorting of the Studnets
    createSortingProposal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'admins/create_sorting_proposal', null, options);
    }
    requestSortingProposal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/request_sorting_proposal', options);
    }
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
    applySortingProposal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'admins/apply_sorting_proposal', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
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



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let AuthenticationService = class AuthenticationService {
    constructor(http, router, config, alert) {
        this.http = http;
        this.router = router;
        this.config = config;
        this.alert = alert;
        this.LoggedIn = false;
        this.JWT = '';
        this.backendUrl = this.config.backend_config.url;
    }
    get jwt() {
        return this.JWT;
    }
    set_jwt(Jwt) {
        this.JWT = Jwt;
        localStorage.setItem('jwt', this.jwt);
    }
    async_set_jwt(Jwt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.JWT = Jwt;
            localStorage.setItem('jwt', this.jwt);
        });
    }
    get isLoggedIn() {
        return this.LoggedIn;
    }
    setLoggedIn(value) {
        this.LoggedIn = value;
        if (value === false) {
            localStorage.removeItem('jwt');
        }
    }
    check_jwt(jwt) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'auth/refresh', null, options);
    }
    forgotPassword(forgotPasswordData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.JWT,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'auth/password/email', forgotPasswordData, options).subscribe(data => {
            this.alert.alert(data.message);
            this.router.navigate(['Projekttage/Anmeldung']);
        }, error => {
            this.alert.error('Die E-Mail konnte nicht versandt werden.', error.error);
        });
    }
    resetPassword(resetPasswordData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'auth/password/reset', resetPasswordData, options);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/exchanges.service.ts":
/*!**************************************!*\
  !*** ./src/app/exchanges.service.ts ***!
  \**************************************/
/*! exports provided: ExchangesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesService", function() { return ExchangesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");






let ExchangesService = class ExchangesService {
    constructor(http, auth, alert, config) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    getAllExchangesForParticipant() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/exchange_requests', options);
    }
    getAllexchanges() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/index_exchanges', options);
    }
    getExchange(exchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/exchange/' + exchangeID, options);
    }
    confirmExchange(exchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.put(this.backendUrl + 'students/confirm_exchange/' + exchangeID, null, options);
    }
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
    createExchange(receiverId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const sendData = {
            receiver_id: receiverId
        };
        return this.http.post(this.backendUrl + 'students/store_exchange', sendData, options);
    }
    deleteSelfExchange() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.delete(this.backendUrl + 'students/destroy_exchange', options);
    }
    deleteExchange(ExchangeID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + 'admins/destroy_exchange/' + ExchangeID, options).subscribe(data => {
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

/***/ "./src/app/leaders.service.ts":
/*!************************************!*\
  !*** ./src/app/leaders.service.ts ***!
  \************************************/
/*! exports provided: LeadersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadersService", function() { return LeadersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let LeadersService = class LeadersService {
    constructor(http, auth, alert, config, router) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.router = router;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    signUpLeader(signUpData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'leaders/register', signUpData, options).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.auth.setLoggedIn(true);
                this.router.navigate(['Projekttage/Anmeldung']);
            }
            this.alert.alert('Dein Account wurde erfolgreich erstellt!');
            this.sendAuthentificationEmail();
            this.update.emit();
        }, error => {
            this.alert.error('Accounterstellung fehlgeschlagen!', error.error);
        });
    }
    sendAuthentificationEmail() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'leaders/email/resend', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
        });
    }
    sendAuthentificationEmailSubscribe() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'leaders/email/resend', null, options);
    }
    logInLeader(loginData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'leaders/login', loginData, options);
    }
    logOutLeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'leaders/logout', null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate(['Projekttage/Anmeldung']);
        }, error => {
            this.alert.error('Logout fehlgeschlagen!', error.error);
        });
    }
    getSelfLeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        // tslint:disable-next-line: max-line-length
        return this.http.get(this.backendUrl + 'leaders/self', options);
    }
    getAllLeaders() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/index_leaders', options);
    }
    deleteLeader(LeaderID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        // tslint:disable-next-line: max-line-length
        this.http.delete(this.backendUrl + 'admins/destroy_leader/' + LeaderID, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Löschung des Projektleiters fehlgeschlagen!', error.error);
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

/***/ "./src/app/messages.service.ts":
/*!*************************************!*\
  !*** ./src/app/messages.service.ts ***!
  \*************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");






let MessagesService = class MessagesService {
    constructor(http, auth, alert, config) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    createMessage(baseUrl = 'students', messageData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        // tslint:disable-next-line: max-line-length
        return this.http.post(this.backendUrl + baseUrl + '/store_leaded_project_message', messageData, options);
    }
    deleteMessage(baseUrl = 'students', messageID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        // tslint:disable-next-line: max-line-length
        return this.http.delete(this.backendUrl + baseUrl + '/destroy_leaded_project_message/' + messageID, options).subscribe(() => {
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

/***/ "./src/app/participants.service.ts":
/*!*****************************************!*\
  !*** ./src/app/participants.service.ts ***!
  \*****************************************/
/*! exports provided: ParticipantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsService", function() { return ParticipantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ParticipantsService = class ParticipantsService {
    constructor(http, auth, alert, config, router) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.router = router;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    signUpParticipant(signUpData, form) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        // tslint:disable-next-line: max-line-length
        this.http.post(this.backendUrl + 'students/register', signUpData, options).subscribe(data => {
            if (data.token) {
                this.auth.set_jwt(data.token);
                this.auth.setLoggedIn(true);
                this.router.navigate(['Projekttage/Anmeldung']);
            }
            this.alert.alert('Dein Account wurde erfolgreich erstellt!');
            this.sendAuthentificationEmail();
            this.update.emit();
            form.reset();
        }, error => {
            this.alert.error('Accounterstellung fehlgeschlagen!', error.error);
        });
    }
    sendAuthentificationEmail() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        this.http.post(this.backendUrl + 'students/email/resend', null, options).subscribe(data => {
            this.alert.alert(data.message);
        }, error => {
            this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
        });
    }
    sendAuthentificationEmailSubscribe() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/email/resend', null, options);
    }
    logInParticipant(loginData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/login', loginData, options);
    }
    logOutParticipant() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/logout', null, options).subscribe(data => {
            this.alert.alert(data.message);
            this.auth.setLoggedIn(false);
            this.router.navigate(['Projekttage/Anmeldung']);
        }, error => {
            this.alert.error('Logout fehlgeschlagen!', error.error);
        });
    }
    getSelfParticipant() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/self', options);
    }
    getParticipantID(participantData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.post(this.backendUrl + 'students/id', participantData, options);
    }
    getAllParticipantNames() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/little_index_students', options);
    }
    getAllStudents(page) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/index_students?page=' + page, options);
    }
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
    getFriends() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/friends', options);
    }
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
    quitAssistant() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.put(this.backendUrl + 'students/quit_assistant', null, options);
    }
    putSelfParticipant(participantData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + 'students/self_update', participantData, options).subscribe(() => {
            this.alert.alert('Erfolgreich registriert!');
            this.update.emit();
        }, error => {
            this.alert.error('Aktualisierung des Accounts fehlgeschlagen!', error.error);
        });
    }
};
ParticipantsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ParticipantsService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ParticipantsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParticipantsService);



/***/ }),

/***/ "./src/app/projects.service.ts":
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ProjectsService = class ProjectsService {
    constructor(http, auth, alert, config, router) {
        this.http = http;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.router = router;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    getAllProjects() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'projects', options);
    }
    getProject(projectID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'projects/' + projectID, options);
    }
    getLittleProject(projectID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'projects/show_little/' + projectID, options);
    }
    getProjectAdmin(projectID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'admins/project/' + projectID, options);
    }
    getSelfProject() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'students/project', options);
    }
    getSelfLeadedProject(baseUrl = 'students') {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        return this.http.get(this.backendUrl + baseUrl + '/leaded_project', options);
    }
    createProject(baseUrl = 'students', projectData, image = null) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const formData = new FormData();
        formData.append('title', projectData.title);
        formData.append('image', image);
        formData.append('descr', projectData.descr);
        formData.append('leader_name', projectData.leader_name);
        formData.append('cost', projectData.cost);
        formData.append('first_day_begin', projectData.first_day_begin);
        formData.append('first_day_end', projectData.first_day_end);
        formData.append('second_day_begin', projectData.second_day_begin);
        formData.append('second_day_end', projectData.second_day_end);
        formData.append('min_grade', projectData.min_grade);
        formData.append('max_grade', projectData.max_grade);
        formData.append('min_participants', projectData.min_participants);
        formData.append('max_participants', projectData.max_participants);
        return this.http.post(this.backendUrl + baseUrl + '/store_project', formData, options);
    }
    toogleAuthorizedProject(projectID, authorized) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const sendData = {
            authorized
        };
        this.http.put(this.backendUrl + 'admins/toogle_authorized/' + projectID, sendData, options).subscribe(data => {
            if (data) {
                this.alert.alert(data.message);
            }
            this.update.emit();
        }, error => {
            this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
        });
    }
    toogleEditableProject(projectID, editable) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        const sendData = {
            editable
        };
        return this.http.put(this.backendUrl + 'admins/toogle_editable/' + projectID, sendData, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
        });
    }
    putProject(baseUrl = 'students', projectData, backUrl) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + baseUrl + '/update_project', projectData, options).subscribe(data => {
            this.alert.alert(data.message);
            if (baseUrl === 'students') {
                this.router.navigate(['Projekttage/Benutzer/' + backUrl]);
            }
            else {
                this.router.navigate(['Projekttage/Projektleiter/' + backUrl]);
            }
            this.update.emit();
        }, error => {
            this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
        });
    }
    touchUpProject(baseUrl = 'students', projectData, backUrl) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.put(this.backendUrl + baseUrl + '/touch_up_project', projectData, options).subscribe(data => {
            this.alert.alert(data.message);
            if (baseUrl === 'students') {
                this.router.navigate(['Projekttage/Benutzer/' + backUrl]);
            }
            else {
                this.router.navigate(['Projekttage/Projektleiter/' + backUrl]);
            }
            this.update.emit();
        }, error => {
            this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
        });
    }
    deleteProject(projectID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.auth.jwt,
        });
        const options = { headers };
        this.http.delete(this.backendUrl + 'admins/destroy_project/' + projectID, options).subscribe(data => {
            this.alert.alert(data.message);
            this.update.emit();
        }, error => {
            this.alert.error('Löschen des Projektes fehlgeschlagen!', error.error);
        });
    }
};
ProjectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ProjectsService.propDecorators = {
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectsService);



/***/ }),

/***/ "./src/app/schedule.service.ts":
/*!*************************************!*\
  !*** ./src/app/schedule.service.ts ***!
  \*************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");





let ScheduleService = class ScheduleService {
    constructor(http, auth, config) {
        this.http = http;
        this.auth = auth;
        this.config = config;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backendUrl = this.config.backend_config.url;
    }
    getSchedule() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = { headers };
        return this.http.get(this.backendUrl + 'schedule/1', options);
    }
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



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map