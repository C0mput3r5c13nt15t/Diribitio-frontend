(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2a+d":function(e,t,n){"use strict";n.r(t),n.d(t,"LeaderProjectAdministrationPageModule",function(){return v});var o=n("ofXK"),i=n("3Pt+"),c=n("tyNb"),r=n("TEn/"),b=n("fXoL"),a=n("OeS+"),d=n("CoJz"),s=n("r4Kj");function l(e,t){if(1&e&&(b.Mb(0,"ion-button",7),b.Kb(1,"ion-icon",8),b.Lb()),2&e){const e=b.Wb();b.cc("routerLink","./",e.projectNoun," bearbeiten"),b.bc("disabled",e.currentDate<=e.schedule.begin||e.currentDate>e.schedule.control)}}function u(e,t){if(1&e&&(b.Mb(0,"ion-button",9),b.Kb(1,"ion-icon",8),b.Lb()),2&e){const e=b.Wb();b.cc("routerLink","./",e.projectNoun," bearbeiten")}}function g(e,t){if(1&e&&(b.Mb(0,"ion-card",10),b.Mb(1,"ion-card-content"),b.Mb(2,"ion-text",11),b.pc(3),b.Lb(),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(3),b.qc(e.leaderLoadingProject)}}function p(e,t){if(1&e&&b.Kb(0,"ion-img",21),2&e){const e=b.Wb(2);b.dc("src","",e.imageUrl,"",e.leadedProject.image,"")}}function m(e,t){if(1&e&&(b.Mb(0,"ion-item",15),b.Mb(1,"ion-card",23),b.Mb(2,"ion-card-content"),b.Mb(3,"ion-text",24),b.pc(4),b.Lb(),b.Kb(5,"br"),b.Mb(6,"ion-text",14),b.pc(7),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){const e=t.$implicit;b.yb(4),b.qc(e.sender_name),b.yb(3),b.qc(e.message)}}function L(e,t){if(1&e&&(b.Mb(0,"div"),b.oc(1,m,8,2,"ion-item",22),b.Lb()),2&e){const e=b.Wb(2);b.yb(1),b.bc("ngForOf",e.leadedProject.messages)}}function f(e,t){if(1&e&&(b.Mb(0,"ion-item",15),b.Mb(1,"ion-card",5),b.Mb(2,"ion-card-content"),b.Mb(3,"ion-text",14),b.pc(4),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){const e=t.$implicit;b.yb(4),b.uc("",e.first_name," ",e.last_name," ",e.grade,"",e.letter,"")}}function h(e,t){if(1&e&&(b.Mb(0,"div"),b.oc(1,f,5,4,"ion-item",22),b.Lb()),2&e){const e=b.Wb(2);b.yb(1),b.bc("ngForOf",e.leadedProject.participants)}}function M(e,t){if(1&e&&(b.Mb(0,"ion-button",25),b.pc(1),b.Lb()),2&e){const e=b.Wb(2);b.cc("routerLink","./",e.projectNoun," bearbeiten"),b.bc("disabled",e.currentDate<=e.schedule.begin||e.currentDate>e.schedule.control),b.yb(1),b.rc("",e.projectNoun," bearbeiten")}}function j(e,t){if(1&e&&(b.Mb(0,"ion-button",26),b.pc(1),b.Lb()),2&e){const e=b.Wb(2);b.cc("routerLink","./",e.projectNoun," bearbeiten"),b.yb(1),b.rc("",e.projectNoun," nachbessern")}}function y(e,t){if(1&e&&(b.Mb(0,"ion-text",14),b.pc(1),b.Lb()),2&e){const e=b.Wb(2);b.yb(1),b.qc(e.leaderWrongTime)}}function _(e,t){if(1&e&&(b.Mb(0,"ion-card",10),b.oc(1,p,1,2,"ion-img",12),b.Mb(2,"ion-card-header"),b.Mb(3,"ion-card-title"),b.pc(4),b.Lb(),b.Lb(),b.Mb(5,"ion-card-content"),b.Mb(6,"ion-item-group"),b.Mb(7,"ion-item",13),b.Mb(8,"ion-text",14),b.pc(9),b.Lb(),b.Lb(),b.Mb(10,"ion-item-divider",5),b.Mb(11,"ion-label",14),b.pc(12,"Leiter"),b.Lb(),b.Lb(),b.Mb(13,"ion-item",15),b.Mb(14,"ion-label",14),b.pc(15),b.Lb(),b.Lb(),b.Mb(16,"ion-item-divider",5),b.Mb(17,"ion-label",14),b.pc(18,"Kosten"),b.Lb(),b.Lb(),b.Mb(19,"ion-item",15),b.Mb(20,"ion-label",14),b.pc(21),b.Lb(),b.Lb(),b.Mb(22,"ion-item-divider",5),b.Mb(23,"ion-label",14),b.pc(24,"Zeitraum"),b.Lb(),b.Lb(),b.Mb(25,"ion-item",15),b.Mb(26,"ion-label",14),b.pc(27),b.Lb(),b.Lb(),b.Mb(28,"ion-item",15),b.Mb(29,"ion-label",14),b.pc(30),b.Lb(),b.Lb(),b.Mb(31,"ion-item-divider",5),b.Mb(32,"ion-label",14),b.pc(33,"Klassenstufe"),b.Lb(),b.Lb(),b.Mb(34,"ion-item",15),b.Mb(35,"ion-label",14),b.pc(36),b.Lb(),b.Lb(),b.Mb(37,"ion-item-divider",5),b.Mb(38,"ion-label",14),b.pc(39,"Teinehmeranzahl"),b.Lb(),b.Lb(),b.Mb(40,"ion-item",15),b.Mb(41,"ion-label",14),b.pc(42),b.Lb(),b.Lb(),b.Mb(43,"ion-item-divider",5),b.Mb(44,"ion-label",14),b.pc(45,"Nachrichten"),b.Lb(),b.Lb(),b.oc(46,L,2,1,"div",16),b.Mb(47,"ion-item-divider",5),b.Mb(48,"ion-label",14),b.pc(49,"Teilnehmer"),b.Lb(),b.Lb(),b.oc(50,h,2,1,"div",16),b.Mb(51,"div",17),b.oc(52,M,2,3,"ion-button",18),b.oc(53,j,2,2,"ion-button",19),b.oc(54,y,2,1,"ion-text",20),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){const e=b.Wb();b.yb(1),b.bc("ngIf",""!=e.leadedProject.image&&null!=e.leadedProject.image),b.yb(3),b.qc(e.leadedProject.title),b.yb(5),b.qc(e.leadedProject.descr),b.yb(6),b.qc(e.leadedProject.leader_name),b.yb(6),b.rc("",e.leadedProject.cost,"\u20ac"),b.yb(6),b.sc("1.Tag: ",e.leadedProject.first_day_begin," bis ",e.leadedProject.first_day_end,""),b.yb(3),b.sc("2.Tag: ",e.leadedProject.second_day_begin," bis ",e.leadedProject.second_day_end,""),b.yb(6),b.sc("",e.leadedProject.min_grade,". bis ",e.leadedProject.max_grade,".Klasse"),b.yb(6),b.sc("von ",e.leadedProject.min_participants," bis ",e.leadedProject.max_participants,""),b.yb(4),b.bc("ngIf",e.leadedProject.messages.length),b.yb(4),b.bc("ngIf",e.leadedProject.participants.length),b.yb(2),b.bc("ngIf",0==!!(e.leadedProject.editable-0)||e.currentDate<=e.schedule.control||e.currentDate>e.schedule.registration),b.yb(1),b.bc("ngIf",e.currentDate>e.schedule.control&&e.currentDate<=e.schedule.registration&&1==!!(e.leadedProject.editable-0)),b.yb(1),b.bc("ngIf",e.currentDate<=e.schedule.begin&&0==!!(e.leadedProject.editable-0)||e.currentDate>e.schedule.control&&0==!!(e.leadedProject.editable-0))}}const P=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i){this.activatedRoute=e,this.router=t,this.scheduleService=n,this.projectsService=o,this.config=i,this.subscriptions=[],this.loadedLeader={id:0,user_name:"",email:"",password:"",project_id:0},this.leadedProject={id:0,authorized:0,editable:0,title:"",image:"",descr:"",leader_name:"",leader_id:0,cost:0,first_day_begin:{hours:0,minutes:0},first_day_end:{hours:0,minutes:0},second_day_begin:{hours:0,minutes:0},second_day_end:{hours:0,minutes:0},min_grade:0,max_grade:0,min_participants:0,max_participants:0,messages:[],participants:[]},this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.imageUrl=this.config.backend_config.imageUrl,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.leaderLoadingProject=this.config.get_error("leader-loading_project"),this.leaderWrongTime=this.config.get_error("leader-wrong_time"),this.currentDate=Object(o.n)(new Date,"yyyy-MM-dd","en"),this.activatedRoute.paramMap.subscribe(e=>{e.has("LeaderName")?this.leaderUrl=e.get("LeaderName"):this.router.navigate([""])}),this.scheduleService.getSchedule().subscribe(e=>{this.schedule=e.data}),this.getProject(),this.subscriptions.push(this.projectsService.update.subscribe(()=>this.getProject()))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getProject(){this.projectsService.getSelfLeadedProject("leaders").subscribe(e=>{this.leadedProject=e.data})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(c.a),b.Jb(c.g),b.Jb(a.a),b.Jb(d.a),b.Jb(s.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-project-administration"]],decls:11,vars:8,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","buttons","slot","end",3,"disabled","routerLink",4,"ngIf"],["color","buttons","slot","end",3,"routerLink",4,"ngIf"],["color","background"],["color","background","class","content",4,"ngIf"],["color","buttons","slot","end",3,"disabled","routerLink"],["name","create"],["color","buttons","slot","end",3,"routerLink"],["color","background",1,"content"],["color","danger"],[3,"src",4,"ngIf"],["color","items","lines","none",1,"descr"],["color","text"],["color","items","lines","none"],[4,"ngIf"],[1,"ion-padding"],["color","buttons","expand","block","class","ion-no-margin","color","buttons","slot","end",3,"disabled","routerLink",4,"ngIf"],["color","buttons","expand","block","class","ion-no-margin","color","buttons","slot","end",3,"routerLink",4,"ngIf"],["color","text",4,"ngIf"],[3,"src"],["color","items","lines","none",4,"ngFor","ngForOf"],["color","background",1,"message"],["color","buttons"],["color","buttons","expand","block","color","buttons","slot","end",1,"ion-no-margin",3,"disabled","routerLink"],["color","buttons","expand","block","color","buttons","slot","end",1,"ion-no-margin",3,"routerLink"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-button",1),b.Kb(3,"ion-back-button",2),b.Lb(),b.Mb(4,"ion-title"),b.pc(5),b.Lb(),b.oc(6,l,2,2,"ion-button",3),b.oc(7,u,2,1,"ion-button",4),b.Lb(),b.Lb(),b.Mb(8,"ion-content",5),b.oc(9,g,4,1,"ion-card",6),b.oc(10,_,55,18,"ion-card",6),b.Lb()),2&e&&(b.yb(3),b.ec("defaultHref","",t.eventName,"/",t.projectNoun,"leiter/",t.leaderUrl,""),b.yb(2),b.qc(t.projectNoun),b.yb(1),b.bc("ngIf",0==!!(t.leadedProject.editable-0)||t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration),b.yb(1),b.bc("ngIf",t.currentDate>t.schedule.control&&t.currentDate<=t.schedule.registration&&1==!!(t.leadedProject.editable-0)),b.yb(2),b.bc("ngIf",null==t.leadedProject.leader_id&&null==t.leadedProject.title&&null==t.leadedProject.authorized),b.yb(1),b.bc("ngIf",null!=!!(t.loadedLeader.project_id-0)))},directives:[r.t,r.R,r.h,r.e,r.f,r.P,o.j,r.p,r.Y,c.h,r.u,r.j,r.k,r.N,r.l,r.n,r.z,r.x,r.y,r.A,r.v,o.i],styles:["img[_ngcontent-%COMP%]{width:auto;margin:10px auto auto}"]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[o.b,i.a,r.S,c.k.forChild(P)]]}),e})()}}]);