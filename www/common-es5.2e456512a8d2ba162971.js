!function(){function t(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(i,a){var o=e.apply(n,r);function s(e){t(o,i,a,s,u,"next",e)}function u(e){t(o,i,a,s,u,"throw",e)}s(void 0)})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return s});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},a=function(){r.selectionStart()},o=function(){r.selectionChanged()},s=function(){r.selectionEnd()},u=function(t){r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,i=t*r-t+"ms",a=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},CoJz:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("3LUQ"),c=r("r4Kj"),h=r("tyNb"),l=function(){var t=function(){function t(e,r,i,o,s){n(this,t),this.http=e,this.auth=r,this.alert=i,this.config=o,this.router=s,this.update=new a.o,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}return i(t,[{key:"getAllProjects",value:function(){var t=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:t})}},{key:"getProject",value:function(t){var e=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+t,{headers:e})}},{key:"getLittleProject",value:function(t){var e=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+t,{headers:e})}},{key:"getProjectAdmin",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+t,{headers:e})}},{key:"getSelfProject",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:t})}},{key:"getSelfLeadedProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+t+"/leaded_project",{headers:e})}},{key:"createProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={headers:new o.c({Authorization:"Bearer "+this.auth.jwt})},i=new FormData;return i.append("title",e.title),i.append("image",n),i.append("descr",e.descr),i.append("leader_name",e.leader_name),i.append("cost",e.cost),i.append("first_day_begin",e.first_day_begin),i.append("first_day_end",e.first_day_end),i.append("second_day_begin",e.second_day_begin),i.append("second_day_end",e.second_day_end),i.append("min_grade",e.min_grade),i.append("max_grade",e.max_grade),i.append("min_participants",e.min_participants),i.append("max_participants",e.max_participants),this.http.post(this.backendUrl+t+"/store_project",i,r)}},{key:"toogleAuthorizedProject",value:function(t,e){var n=this,r=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+t,{authorized:e},{headers:r}).subscribe(function(t){t&&n.alert.alert(t.message),n.update.emit()},function(t){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}},{key:"toogleEditableProject",value:function(t,e){var n=this,r=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_editable/"+t,{editable:e},{headers:r}).subscribe(function(t){n.alert.alert(t.message),n.update.emit()},function(t){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}},{key:"putProject",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=new o.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+e+"/update_project",n,{headers:i}).subscribe(function(n){t.alert.alert(n.message),t.router.navigate("students"===e?[t.eventName+"/Sch\xfcler/"+r]:[t.eventName+"/"+t.projectNoun+"leiter/"+r]),t.update.emit()},function(e){t.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}},{key:"touchUpProject",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=new o.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+e+"/touch_up_project",n,{headers:i}).subscribe(function(n){t.alert.alert(n.message),t.router.navigate("students"===e?[t.eventName+"/Sch\xfcler/"+r]:[t.eventName+"/"+t.projectNoun+"leiter/"+r]),t.update.emit()},function(e){t.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}},{key:"deleteProject",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+t,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("L\xf6schung des Projektes fehlgeschlagen!",t.error)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a),a.Qb(c.a),a.Qb(h.g))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Hzbo:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("3LUQ"),c=r("r4Kj"),h=function(){var t=function(){function t(e,r,i,o){n(this,t),this.http=e,this.auth=r,this.alert=i,this.config=o,this.update=new a.o,this.backendUrl=this.config.backend_config.url}return i(t,[{key:"createMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",e=arguments.length>1?arguments[1]:void 0,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+t+"/store_leaded_project_message",e,{headers:n})}},{key:"deleteMessage",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+e+"/destroy_leaded_project_message/"+n,{headers:r}).subscribe(function(){t.update.emit()},function(e){t.alert.error("L\xf6schung der Nachricht fehlgeschlagen!",e.error)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a),a.Qb(c.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},NqGI:function(t,n,r){"use strict";r.d(n,"a",function(){return i}),r.d(n,"b",function(){return a});var i=function(){var t=e(regeneratorRuntime.mark(function t(e,n,r,i,a){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,a,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach(function(t){return o.classList.add(t)}),a&&Object.assign(o,a),n.appendChild(o),t.t0=o.componentOnReady,!t.t0){t.next=12;break}return t.next=12,o.componentOnReady();case 12:return t.abrupt("return",o);case 13:case"end":return t.stop()}},t)}));return function(e,n,r,i,a){return t.apply(this,arguments)}}(),a=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"OeS+":function(t,e,r){"use strict";r.d(e,"a",function(){return c});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("r4Kj"),c=function(){var t=function(){function t(e,r,i){n(this,t),this.http=e,this.auth=r,this.config=i,this.update=new a.o,this.backendUrl=this.config.backend_config.url}return i(t,[{key:"getSchedule",value:function(){var t=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"schedule/1",{headers:t})}},{key:"putSchedule",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/update_schedule",t,{headers:e})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"PO/Q":function(t,e,r){"use strict";r.d(e,"a",function(){return l});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("3LUQ"),c=r("r4Kj"),h=r("tyNb"),l=function(){var t=function(){function t(e,r,i,o,s){n(this,t),this.http=e,this.auth=r,this.alert=i,this.config=o,this.router=s,this.update=new a.o,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}return i(t,[{key:"signUpLeader",value:function(t,e){var n=this,r=new o.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"leaders/register",t,{headers:r}).subscribe(function(t){t.token&&(n.auth.set_jwt(t.token),n.auth.setLoggedIn(!0),n.router.navigate([n.eventName+"/Anmeldung"])),n.alert.alert("Dein Account wurde erfolgreich erstellt!"),n.sendAuthentificationEmail(),n.update.emit(),e.reset()},function(t){n.alert.error("Erstellung des Accounts fehlgeschlagen!",t.error)})}},{key:"sendAuthentificationEmail",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"leaders/email/resend",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message)},function(e){t.alert.error("Versandt der Verifizierungs E-Mail fehlgeschlagen!",e.error)})}},{key:"sendAuthentificationEmailSubscribe",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"leaders/email/resend",null,{headers:t})}},{key:"logInLeader",value:function(t){var e=new o.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"leaders/login",t,{headers:e})}},{key:"logOutLeader",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"leaders/logout",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message),t.auth.setLoggedIn(!1),t.router.navigate([t.eventName+"/Anmeldung"])},function(e){t.alert.error("Logout fehlgeschlagen!",e.error)})}},{key:"getSelfLeader",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"leaders/self",{headers:t})}},{key:"getAllLeaders",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/index_leaders",{headers:t})}},{key:"deleteLeader",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_leader/"+t,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("L\xf6schung des "+e.projectNoun+"leiters fehlgeschlagen!",t.error)})}},{key:"destroySelfLeader",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"leaders/self_destroy",{headers:e}).subscribe(function(e){t.alert.alert(e.message),t.auth.setLoggedIn(!1),t.router.navigate([t.eventName+"/Anmeldung"])},function(e){t.alert.error("L\xf6schung ihres Accounts fehlgeschlagen!",e.error)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a),a.Qb(c.a),a.Qb(h.g))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"U/uv":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("sxy2"),i=n("ItpF"),a=n("2c9M"),o=function(t,e){var n,o,s=function(t,r,i){if("undefined"!=typeof document){var a=document.elementFromPoint(t,r);a&&e(a)?a!==n&&(c(),u(a,i)):c()}},u=function(t,e){n=t,o||(o=n);var i=n;Object(r.g)(function(){return i.classList.add("ion-activated")}),e()},c=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(r.g)(function(){return e.classList.remove("ion-activated")}),t&&o!==n&&n.click(),n=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return s(t.currentX,t.currentY,a.a)},onMove:function(t){return s(t.currentX,t.currentY,a.b)},onEnd:function(){c(!0),Object(a.e)(),o=void 0}})}},ZvwH:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("3LUQ"),c=r("r4Kj"),h=r("tyNb"),l=function(){var t=function(){function t(e,r,i,o,s){n(this,t),this.http=e,this.auth=r,this.alert=i,this.config=o,this.router=s,this.update=new a.o,this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}return i(t,[{key:"signUpStudent",value:function(t,e){var n=this,r=new o.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"students/register",t,{headers:r}).subscribe(function(t){t.token&&(n.auth.set_jwt(t.token),n.auth.setLoggedIn(!0),n.router.navigate([n.eventName+"/Anmeldung"])),n.alert.alert("Dein Account wurde erfolgreich erstellt!"),n.sendAuthentificationEmail(),n.update.emit(),e.reset()},function(t){n.alert.error("Erstellung des Accounts fehlgeschlagen!",t.error)})}},{key:"sendAuthentificationEmail",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"students/email/resend",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message)},function(e){t.alert.error("Versandt der Verifizierungs E-Mail fehlgeschlagen!",e.error)})}},{key:"sendAuthentificationEmailSubscribe",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/email/resend",null,{headers:t})}},{key:"logInStudent",value:function(t){var e=new o.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"students/login",t,{headers:e})}},{key:"logOutStudent",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/logout",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message),t.auth.setLoggedIn(!1),t.router.navigate([t.eventName+"/Anmeldung"])},function(e){t.alert.error("Logout fehlgeschlagen!",e.error)})}},{key:"getSelfStudent",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/self",{headers:t})}},{key:"getStudentID",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/id",t,{headers:e})}},{key:"getAllStudentNames",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/little_index_students",{headers:t})}},{key:"getAllStudents",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/index_students?page="+t,{headers:e})}},{key:"getAllSearchedStudents",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/search_index_students",{search_value:t},{headers:e})}},{key:"getFriends",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/friends",{headers:t})}},{key:"promoteStudent",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/promote_student/"+t,null,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("Ernennung des Assistenten fehlgeschlagen!",t.error)})}},{key:"suspendStudent",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/suspend_student/"+t,null,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("Suspendierung des Assistenten fehlgeschlagen!",t.error)})}},{key:"quitAssistant",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"students/quit_assistant",null,{headers:t})}},{key:"putSelfStudent",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/self_update",t,{headers:n}).subscribe(function(){e.alert.alert("Der Account wurde erfolgreich aktualisiert!"),e.update.emit()},function(t){e.alert.error("Aktualisierung des Accounts fehlgeschlagen!",t.error)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a),a.Qb(c.a),a.Qb(h.g))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},hQbD:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("3LUQ"),c=r("r4Kj"),h=function(){var t=function(){function t(e,r,i,o){n(this,t),this.http=e,this.auth=r,this.alert=i,this.config=o,this.update=new a.o,this.backendUrl=this.config.backend_config.url}return i(t,[{key:"getAllExchangesForParticipant",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/exchange_requests",{headers:t})}},{key:"getAllexchanges",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/index_exchanges",{headers:t})}},{key:"getExchange",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/exchange/"+t,{headers:e})}},{key:"confirmExchange",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"students/confirm_exchange/"+t,null,{headers:e})}},{key:"carryOutExchange",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/accomplish_exchange/"+t,null,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("Durchf\xfchrung des Tausches fehlgeschlagen!",t.error)})}},{key:"createExchange",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/store_exchange",{receiver_id:t},{headers:e})}},{key:"deleteSelfExchange",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.delete(this.backendUrl+"students/destroy_exchange",{headers:t})}},{key:"deleteExchange",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_exchange/"+t,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("L\xf6schung der Tauschanfrage fehlgeschlagen!",t.error)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a),a.Qb(c.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},sPtc:function(t,n,r){"use strict";r.d(n,"a",function(){return a}),r.d(n,"b",function(){return o}),r.d(n,"c",function(){return i}),r.d(n,"d",function(){return u});var i=function(t,e){return null!==e.closest(t)},a=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((i=!0,(r="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n),e):e;var n,r,i},o=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},s=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=e(regeneratorRuntime.mark(function t(e,n,r,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||s.test(e)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),a.push(e,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(e,n,r,i){return t.apply(this,arguments)}}()},uVPj:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var a=r("fXoL"),o=r("tk/3"),s=r("ej43"),u=r("3LUQ"),c=r("r4Kj"),h=r("tyNb"),l=function(){var t=function(){function t(e,r,i,o,s){n(this,t),this.http=e,this.auth=r,this.alert=i,this.config=o,this.router=s,this.update=new a.o,this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}return i(t,[{key:"signUpAdmin",value:function(t,e){var n=this,r=new o.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"admins/register",t,{headers:r}).subscribe(function(t){t.token&&(n.auth.set_jwt(t.token),n.auth.setLoggedIn(!0),n.router.navigate([n.eventName+"/Anmeldung"])),n.alert.alert("Dein Account wurde erfolgreich erstellt!"),n.sendAuthentificationEmail(),n.update.emit(),e.reset()},function(t){n.alert.error("Erstellung des Accounts fehlgeschlagen!",t.error)})}},{key:"sendAuthentificationEmail",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/email/resend",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message)},function(e){t.alert.error("Versandt der Verifizierungs E-Mail fehlgeschlagen!",e.error)})}},{key:"sendAuthentificationEmailSubscribe",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/email/resend",null,{headers:t})}},{key:"logInAdmin",value:function(t){var e=new o.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"admins/login",t,{headers:e})}},{key:"logOutAdmin",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/logout",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message),t.auth.setLoggedIn(!1),t.router.navigate([t.eventName+"/Anmeldung"])},function(e){t.alert.error("Logout fehlgeschlagen!",e.error)})}},{key:"getSelfAdmin",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/self",{headers:t})}},{key:"getAllSignUpEmails",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"sign_up_emails",{headers:t})}},{key:"createSignUpEmail",value:function(t){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"sign_up_emails",t,{headers:e})}},{key:"deleteSignUpEmail",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"sign_up_emails/"+t,{headers:n}).subscribe(function(t){e.alert.alert(t.message),e.update.emit()},function(t){e.alert.error("Sperrung der E-Mail fehlgeschlagen!",t.error)})}},{key:"createSortingProposal",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/create_sorting_proposal",null,{headers:t})}},{key:"requestSortingProposal",value:function(){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/request_sorting_proposal",{headers:t})}},{key:"editSortingProposal",value:function(t){var e=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/edit_sorting_proposal",t,{headers:n}).subscribe(function(t){e.alert.alert(t.message)},function(t){e.alert.error("Erstellung eines Backups fehlgeschlagen!",t.error)})}},{key:"applySortingProposal",value:function(){var t=this,e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/apply_sorting_proposal",null,{headers:e}).subscribe(function(e){t.alert.alert(e.message)},function(e){t.alert.error("Anwendung des Sortiervorschlags fehlgeschlagen!",e.error)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Qb(o.a),a.Qb(s.a),a.Qb(u.a),a.Qb(c.a),a.Qb(h.g))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();