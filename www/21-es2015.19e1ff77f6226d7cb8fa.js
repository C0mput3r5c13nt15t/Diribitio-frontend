(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{qLtw:function(e,n,t){"use strict";t.r(n),t.d(n,"AdminSchedulePageModule",function(){return k});var o=t("ofXK"),i=t("3Pt+"),c=t("tyNb"),r=t("TEn/"),b=t("fXoL"),l=t("OeS+"),a=t("3LUQ"),s=t("r4Kj");function u(e,n){if(1&e&&(b.Mb(0,"ion-card-content"),b.Mb(1,"ion-label",20),b.pc(2),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(2),b.rc(" ",e.text," ")}}function d(e,n){if(1&e&&(b.Mb(0,"ion-item",21),b.Kb(1,"ion-icon",22),b.Mb(2,"ion-label"),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.rc("Registrierung und Erstellung der ",e.projectsNoun,"")}}function h(e,n){if(1&e&&(b.Mb(0,"ion-item",8),b.Kb(1,"ion-icon",23),b.Mb(2,"ion-label",20),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.rc("Registrierung und Erstellung der ",e.projectsNoun,"")}}function g(e,n){if(1&e&&(b.Mb(0,"ion-item",21),b.Kb(1,"ion-icon",24),b.Mb(2,"ion-label"),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.rc("Kontrolle und Freigabe der ",e.projectsNoun,"")}}function m(e,n){if(1&e&&(b.Mb(0,"ion-item",8),b.Kb(1,"ion-icon",25),b.Mb(2,"ion-label",20),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.rc("Kontrolle und Freigabe der ",e.projectsNoun,"")}}function p(e,n){if(1&e&&(b.Mb(0,"ion-item",21),b.Kb(1,"ion-icon",26),b.Mb(2,"ion-label"),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.rc("Anmeldung f\xfcr die ",e.projectsNoun,"")}}function M(e,n){if(1&e&&(b.Mb(0,"ion-item",8),b.Kb(1,"ion-icon",27),b.Mb(2,"ion-label",20),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.rc("Anmeldung f\xfcr die ",e.projectsNoun,"")}}function f(e,n){1&e&&(b.Mb(0,"ion-item",21),b.Kb(1,"ion-icon",28),b.Mb(2,"ion-label"),b.pc(3,"Sortierung durch den Algorithmus"),b.Lb(),b.Lb())}function L(e,n){1&e&&(b.Mb(0,"ion-item",8),b.Kb(1,"ion-icon",29),b.Mb(2,"ion-label",20),b.pc(3,"Sortierung durch den Algorithmus"),b.Lb(),b.Lb())}function y(e,n){1&e&&(b.Mb(0,"ion-item",21),b.Kb(1,"ion-icon",30),b.Mb(2,"ion-label"),b.pc(3,"Tauschphase"),b.Lb(),b.Lb())}function D(e,n){1&e&&(b.Mb(0,"ion-item",8),b.Kb(1,"ion-icon",31),b.Mb(2,"ion-label",20),b.pc(3,"Tauschphase"),b.Lb(),b.Lb())}function S(e,n){if(1&e&&(b.Mb(0,"ion-item",21),b.Kb(1,"ion-icon",32),b.Mb(2,"ion-label"),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.qc(e.eventName)}}function x(e,n){if(1&e&&(b.Mb(0,"ion-item",8),b.Kb(1,"ion-icon",33),b.Mb(2,"ion-label",20),b.pc(3),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.qc(e.eventName)}}const A=[{path:"",component:(()=>{class e{constructor(e,n,t,o,i){this.activatedRoute=e,this.scheduleService=n,this.router=t,this.alert=o,this.config=i,this.subscriptions=[],this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.text=this.config.get_content("admin-schedule"),this.currentDate=Object(o.n)(new Date,"yyyy-MM-dd","en"),this.activatedRoute.paramMap.subscribe(e=>{this.adminUrl=e.get("AdminName")}),this.getSchedule(),this.subscriptions.push(this.scheduleService.update.subscribe(()=>this.getSchedule()))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getSchedule(){this.scheduleService.getSchedule().subscribe(e=>{this.schedule=e.data})}mangaeSchedule(){this.scheduleService.putSchedule(this.schedule).subscribe(e=>{this.alert.alert(e.message),this.scheduleService.update.emit(),this.router.navigate([this.eventName+"/Admin/"+this.adminUrl])},e=>{this.alert.error("Aktualisierung des Zeitplans fehlgeschlagen!",e.error)})}}return e.\u0275fac=function(n){return new(n||e)(b.Jb(c.a),b.Jb(l.a),b.Jb(c.g),b.Jb(a.a),b.Jb(s.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-admin-schedule"]],decls:52,vars:23,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["name","ParticipantForm",3,"ngSubmit"],["form","ngForm"],["color","background",1,"content"],[4,"ngIf"],["color","items","lines","none"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Beginn","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["color","buttons","lines","none",4,"ngIf"],["color","items","lines","none",4,"ngIf"],["placeholder","Bitte ein Datum w\xe4hlen","name","Kontrolle","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Anmeldung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Sortierung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Tausch","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Projekte","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Ende","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"disabled"],["color","text"],["color","buttons","lines","none"],["slot","start","name","create"],["color","text","slot","start","name","create"],["slot","start","name","shield-checkmark"],["color","text","slot","start","name","shield-checkmark"],["slot","start","name","log-in"],["color","text","slot","start","name","log-in"],["slot","start","name","funnel"],["color","text","slot","start","name","funnel"],["slot","start","name","swap-horizontal"],["color","text","slot","start","name","swap-horizontal"],["slot","start","name","flag"],["color","text","slot","start","name","flag"]],template:function(e,n){if(1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-button",1),b.Kb(3,"ion-back-button",2),b.Lb(),b.Mb(4,"ion-title"),b.pc(5,"Zeitplan verwalten"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",3),b.Mb(7,"form",4,5),b.Ub("ngSubmit",function(){return n.mangaeSchedule()}),b.Mb(9,"ion-card",6),b.Mb(10,"ion-card-header"),b.Mb(11,"ion-card-title"),b.pc(12,"Zeitplan"),b.Lb(),b.Lb(),b.oc(13,u,3,1,"ion-card-content",7),b.Mb(14,"ion-card-content"),b.Mb(15,"ion-list"),b.Mb(16,"ion-item",8),b.pc(17," ab "),b.Mb(18,"ion-datetime",9),b.Ub("ngModelChange",function(e){return n.schedule.begin=e}),b.Lb(),b.Lb(),b.oc(19,d,4,1,"ion-item",10),b.oc(20,h,4,1,"ion-item",11),b.Mb(21,"ion-item",8),b.pc(22," bis "),b.Mb(23,"ion-datetime",12),b.Ub("ngModelChange",function(e){return n.schedule.control=e}),b.Lb(),b.Lb(),b.oc(24,g,4,1,"ion-item",10),b.oc(25,m,4,1,"ion-item",11),b.Mb(26,"ion-item",8),b.pc(27," bis "),b.Mb(28,"ion-datetime",13),b.Ub("ngModelChange",function(e){return n.schedule.registration=e}),b.Lb(),b.Lb(),b.oc(29,p,4,1,"ion-item",10),b.oc(30,M,4,1,"ion-item",11),b.Mb(31,"ion-item",8),b.pc(32," bis "),b.Mb(33,"ion-datetime",14),b.Ub("ngModelChange",function(e){return n.schedule.sort_students=e}),b.Lb(),b.Lb(),b.oc(34,f,4,0,"ion-item",10),b.oc(35,L,4,0,"ion-item",11),b.Mb(36,"ion-item",8),b.pc(37," bis "),b.Mb(38,"ion-datetime",15),b.Ub("ngModelChange",function(e){return n.schedule.exchange=e}),b.Lb(),b.Lb(),b.oc(39,y,4,0,"ion-item",10),b.oc(40,D,4,0,"ion-item",11),b.Mb(41,"ion-item",8),b.pc(42," bis "),b.Mb(43,"ion-datetime",16),b.Ub("ngModelChange",function(e){return n.schedule.projects=e}),b.Lb(),b.Lb(),b.oc(44,S,4,1,"ion-item",10),b.oc(45,x,4,1,"ion-item",11),b.Mb(46,"ion-item",8),b.pc(47," bis"),b.Mb(48,"ion-datetime",17),b.Ub("ngModelChange",function(e){return n.schedule.end=e}),b.Lb(),b.Lb(),b.Lb(),b.Mb(49,"div",18),b.Mb(50,"ion-button",19),b.pc(51,"Zeitplan best\xe4tigen"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){const e=b.jc(8);b.yb(3),b.dc("defaultHref","",n.eventName,"/Admin/",n.adminUrl,""),b.yb(10),b.bc("ngIf",n.text),b.yb(5),b.bc("ngModel",n.schedule.begin),b.yb(1),b.bc("ngIf",n.currentDate>n.schedule.begin&&n.currentDate<=n.schedule.control),b.yb(1),b.bc("ngIf",n.currentDate<=n.schedule.begin||n.currentDate>n.schedule.control),b.yb(3),b.bc("ngModel",n.schedule.control),b.yb(1),b.bc("ngIf",n.currentDate>n.schedule.control&&n.currentDate<=n.schedule.registration),b.yb(1),b.bc("ngIf",n.currentDate<=n.schedule.control||n.currentDate>n.schedule.registration),b.yb(3),b.bc("ngModel",n.schedule.registration),b.yb(1),b.bc("ngIf",n.currentDate>n.schedule.registration&&n.currentDate<=n.schedule.sort_students),b.yb(1),b.bc("ngIf",n.currentDate<=n.schedule.registration||n.currentDate>n.schedule.sort_students),b.yb(3),b.bc("ngModel",n.schedule.sort_students),b.yb(1),b.bc("ngIf",n.currentDate>n.schedule.sort_students&&n.currentDate<=n.schedule.exchange),b.yb(1),b.bc("ngIf",n.currentDate<=n.schedule.sort_students||n.currentDate>n.schedule.exchange),b.yb(3),b.bc("ngModel",n.schedule.exchange),b.yb(1),b.bc("ngIf",n.currentDate>n.schedule.exchange&&n.currentDate<=n.schedule.projects),b.yb(1),b.bc("ngIf",n.currentDate<=n.schedule.exchange||n.currentDate>n.schedule.projects),b.yb(3),b.bc("ngModel",n.schedule.projects),b.yb(1),b.bc("ngIf",n.currentDate>n.schedule.projects&&n.currentDate<=n.schedule.end),b.yb(1),b.bc("ngIf",n.currentDate<=n.schedule.projects||n.currentDate>n.schedule.end),b.yb(3),b.bc("ngModel",n.schedule.end),b.yb(2),b.bc("disabled",e.invalid)}},directives:[r.t,r.R,r.h,r.e,r.f,r.P,r.p,i.k,i.g,i.h,r.j,r.l,r.n,o.j,r.k,r.B,r.x,r.q,r.Z,i.j,i.f,i.i,r.A,r.u],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(n){return new(n||e)},imports:[[o.b,i.a,r.S,c.k.forChild(A)]]}),e})()}}]);