!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"4SHV":function(t,o,r){"use strict";r.r(o),r.d(o,"ResetPasswordPageModule",function(){return f});var s=r("ofXK"),a=r("3Pt+"),i=r("tyNb"),d=r("TEn/"),b=r("fXoL"),c=r("r4Kj"),u=r("ej43"),l=r("3LUQ");function m(e,n){if(1&e&&(b.Mb(0,"ion-card-content"),b.Mb(1,"ion-label",19),b.pc(2),b.Lb(),b.Lb()),2&e){var t=b.Wb();b.yb(2),b.rc(" ",t.text," ")}}var p,g,M=[{path:"",component:(p=function(){function t(n,o,r,s,a){e(this,t),this.activatedRoute=n,this.router=o,this.config=r,this.auth=s,this.alert=a,this.subscriptions=[],this.formType="student",this.resetPasswordStudent={token:"",email:"",user_type:"students",password:"",password_confirmation:""},this.resetPasswordLeader={token:"",email:"",user_type:"leaders",password:"",password_confirmation:""},this.resetPasswordAdmin={token:"",email:"",user_type:"admins",password:"",password_confirmation:""},this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}var o,r,s;return o=t,(r=[{key:"ngOnInit",value:function(){var e=this;this.text=this.config.get_content("reset-password"),this.activatedRoute.paramMap.subscribe(function(n){n.has("ResetToken")?(e.resetPasswordAdmin.token=e.activatedRoute.snapshot.paramMap.get("ResetToken"),e.resetPasswordLeader.token=e.activatedRoute.snapshot.paramMap.get("ResetToken"),e.resetPasswordStudent.token=e.activatedRoute.snapshot.paramMap.get("ResetToken")):e.router.navigate([e.eventName+"/Anmeldung"])})}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})}},{key:"eventHandler",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"students",t=arguments.length>2?arguments[2]:void 0;13===e&&("students"===n?this.resetStudentPassword(t):"leaders"===n?this.resetLeaderPassword(t):"admins"===n&&this.resetAdminPassword(t))}},{key:"nextInput",value:function(e,n){13===e&&n.setFocus()}},{key:"resetStudentPassword",value:function(e){var n=this;this.auth.resetPassword(this.resetPasswordStudent).subscribe(function(t){n.alert.alert(t.message),e.reset(),n.router.navigate([n.eventName+"/Anmeldung"])},function(e){n.alert.error("Zur\xfccksetzen des Passworts fehlgeschalgen!",e.error)})}},{key:"resetLeaderPassword",value:function(e){var n=this;this.auth.resetPassword(this.resetPasswordLeader).subscribe(function(t){n.alert.alert(t.message),e.reset(),n.router.navigate([n.eventName+"/Anmeldung"])},function(e){n.alert.error("Zur\xfccksetzen des Passworts fehlgeschalgen!",e.error)})}},{key:"resetAdminPassword",value:function(e){var n=this;this.auth.resetPassword(this.resetPasswordAdmin).subscribe(function(t){n.alert.alert(t.message),e.reset(),n.router.navigate([n.eventName+"/Anmeldung"])},function(e){n.alert.error("Zur\xfccksetzen des Passworts fehlgeschalgen!",e.error)})}}])&&n(o.prototype,r),s&&n(o,s),t}(),p.\u0275fac=function(e){return new(e||p)(b.Jb(i.a),b.Jb(i.g),b.Jb(c.a),b.Jb(u.a),b.Jb(l.a))},p.\u0275cmp=b.Db({type:p,selectors:[["app-reset-password"]],decls:74,vars:20,consts:[["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["color","background",1,"content"],[4,"ngIf"],["color","buttons",3,"ngModel","ngModelChange"],["value","student"],["value","leader"],["value","admin"],["name","LogInForm",1,"content",3,"hidden","ngSubmit"],["studentResetPassword","ngForm"],["color","items"],["color","text","name","email","placeholder","E-Mail","required","","type","text",3,"ngModel","ngModelChange"],["color","text","minlength","8","name","password","required","","placeholder","Passwort","type","password",3,"ngModel","ngModelChange"],["color","text","minlength","8","name","password_confirmation","required","","placeholder","Passwort best\xe4tigen","type","password",3,"ngModel","ngModelChange"],[1,"ion-padding"],["name","login","type","submit","expand","block","color","buttons",1,"ion-no-margin",3,"disabled"],["leaderResetPassword","ngForm"],["adminResetPassword","ngForm"],["color","text"]],template:function(e,n){if(1&e){var t=b.Nb();b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-button",0),b.Kb(3,"ion-back-button",1),b.Lb(),b.Mb(4,"ion-title"),b.pc(5,"Passwort \xe4ndern"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",2),b.Mb(7,"ion-card",3),b.Mb(8,"ion-card-header",2),b.Mb(9,"ion-card-title"),b.pc(10,"Passwort \xe4ndern"),b.Lb(),b.Lb(),b.oc(11,m,3,1,"ion-card-content",4),b.Mb(12,"ion-card-content"),b.Mb(13,"ion-segment",5),b.Ub("ngModelChange",function(e){return n.formType=e}),b.Mb(14,"ion-segment-button",6),b.Mb(15,"ion-label"),b.pc(16,"Sch\xfcler"),b.Lb(),b.Lb(),b.Mb(17,"ion-segment-button",7),b.Mb(18,"ion-label"),b.pc(19),b.Lb(),b.Lb(),b.Mb(20,"ion-segment-button",8),b.Mb(21,"ion-label"),b.pc(22,"Admin"),b.Lb(),b.Lb(),b.Lb(),b.Mb(23,"form",9,10),b.Ub("ngSubmit",function(){b.lc(t);var e=b.jc(24);return n.resetStudentPassword(e)}),b.Mb(25,"ion-card",2),b.Mb(26,"ion-card-header"),b.Mb(27,"ion-card-title"),b.pc(28,"Sch\xfcler"),b.Lb(),b.Lb(),b.Mb(29,"ion-card-content"),b.Mb(30,"ion-list"),b.Mb(31,"ion-item",11),b.Mb(32,"ion-input",12),b.Ub("ngModelChange",function(e){return n.resetPasswordStudent.email=e}),b.Lb(),b.Lb(),b.Mb(33,"ion-item",11),b.Mb(34,"ion-input",13),b.Ub("ngModelChange",function(e){return n.resetPasswordStudent.password=e}),b.Lb(),b.Lb(),b.Mb(35,"ion-item",11),b.Mb(36,"ion-input",14),b.Ub("ngModelChange",function(e){return n.resetPasswordStudent.password_confirmation=e}),b.Lb(),b.Lb(),b.Lb(),b.Mb(37,"div",15),b.Mb(38,"ion-button",16),b.pc(39,"Passwort \xe4ndern"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(40,"form",9,17),b.Ub("ngSubmit",function(){b.lc(t);var e=b.jc(41);return n.resetLeaderPassword(e)}),b.Mb(42,"ion-card",2),b.Mb(43,"ion-card-header"),b.Mb(44,"ion-card-title"),b.pc(45),b.Lb(),b.Lb(),b.Mb(46,"ion-card-content"),b.Mb(47,"ion-list"),b.Mb(48,"ion-item",11),b.Mb(49,"ion-input",12),b.Ub("ngModelChange",function(e){return n.resetPasswordLeader.email=e}),b.Lb(),b.Lb(),b.Mb(50,"ion-item",11),b.Mb(51,"ion-input",13),b.Ub("ngModelChange",function(e){return n.resetPasswordLeader.password=e}),b.Lb(),b.Lb(),b.Mb(52,"ion-item",11),b.Mb(53,"ion-input",14),b.Ub("ngModelChange",function(e){return n.resetPasswordLeader.password_confirmation=e}),b.Lb(),b.Lb(),b.Lb(),b.Mb(54,"div",15),b.Mb(55,"ion-button",16),b.pc(56,"Passwort \xe4ndern"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(57,"form",9,18),b.Ub("ngSubmit",function(){b.lc(t);var e=b.jc(58);return n.resetAdminPassword(e)}),b.Mb(59,"ion-card",2),b.Mb(60,"ion-card-header"),b.Mb(61,"ion-card-title"),b.pc(62,"Admins"),b.Lb(),b.Lb(),b.Mb(63,"ion-card-content"),b.Mb(64,"ion-list"),b.Mb(65,"ion-item",11),b.Mb(66,"ion-input",12),b.Ub("ngModelChange",function(e){return n.resetPasswordAdmin.email=e}),b.Lb(),b.Lb(),b.Mb(67,"ion-item",11),b.Mb(68,"ion-input",13),b.Ub("ngModelChange",function(e){return n.resetPasswordAdmin.password=e}),b.Lb(),b.Lb(),b.Mb(69,"ion-item",11),b.Mb(70,"ion-input",14),b.Ub("ngModelChange",function(e){return n.resetPasswordAdmin.password_confirmation=e}),b.Lb(),b.Lb(),b.Lb(),b.Mb(71,"div",15),b.Mb(72,"ion-button",16),b.pc(73,"Passwort \xe4ndern"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&e){var o=b.jc(24),r=b.jc(41),s=b.jc(58);b.yb(3),b.cc("defaultHref","",n.eventName,"/Anmeldung"),b.yb(8),b.bc("ngIf",n.text),b.yb(2),b.bc("ngModel",n.formType),b.yb(6),b.rc("",n.projectNoun,"leiter"),b.yb(4),b.bc("hidden","student"!=n.formType),b.yb(9),b.bc("ngModel",n.resetPasswordStudent.email),b.yb(2),b.bc("ngModel",n.resetPasswordStudent.password),b.yb(2),b.bc("ngModel",n.resetPasswordStudent.password_confirmation),b.yb(2),b.bc("disabled",o.invalid),b.yb(2),b.bc("hidden","leader"!=n.formType),b.yb(5),b.rc("",n.projectNoun,"leiter"),b.yb(4),b.bc("ngModel",n.resetPasswordLeader.email),b.yb(2),b.bc("ngModel",n.resetPasswordLeader.password),b.yb(2),b.bc("ngModel",n.resetPasswordLeader.password_confirmation),b.yb(2),b.bc("disabled",r.invalid),b.yb(2),b.bc("hidden","admin"!=n.formType),b.yb(9),b.bc("ngModel",n.resetPasswordAdmin.email),b.yb(2),b.bc("ngModel",n.resetPasswordAdmin.password),b.yb(2),b.bc("ngModel",n.resetPasswordAdmin.password_confirmation),b.yb(2),b.bc("disabled",s.invalid)}},directives:[d.t,d.R,d.h,d.e,d.f,d.P,d.p,d.j,d.l,d.n,s.j,d.k,d.G,d.Z,a.f,a.i,d.H,d.A,a.k,a.g,a.h,d.B,d.x,d.w,d.ab,a.j,a.c],styles:[""]}),p)}],f=((g=function n(){e(this,n)}).\u0275mod=b.Hb({type:g}),g.\u0275inj=b.Gb({factory:function(e){return new(e||g)},imports:[[s.b,a.a,d.S,i.k.forChild(M)]]}),g)}}])}();