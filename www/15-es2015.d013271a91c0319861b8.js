(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{oKxh:function(e,n,a){"use strict";a.r(n),a.d(n,"AdminExchangeDetailPageModule",function(){return f});var t=a("ofXK"),i=a("3Pt+"),c=a("tyNb"),r=a("TEn/"),o=a("fXoL"),s=a("hQbD"),d=a("CoJz"),b=a("r4Kj");function h(e,n){if(1&e&&(o.Mb(0,"ion-card-header"),o.Mb(1,"ion-card-title"),o.pc(2),o.Lb(),o.Lb()),2&e){const e=o.Wb();o.yb(2),o.uc("Tauschanfrage von ",e.loadedExchange.sender.first_name," ",e.loadedExchange.sender.last_name," und ",e.loadedExchange.receiver.first_name," ",e.loadedExchange.receiver.last_name,"")}}function l(e,n){if(1&e&&(o.Mb(0,"ion-label",14),o.pc(1),o.Lb()),2&e){const e=o.Wb(2);o.yb(1),o.tc("",e.loadedExchange.receiver.first_name," ",e.loadedExchange.receiver.last_name," erf\xfcllt NICHT die ",e.projectNoun,"bedingungen!")}}function g(e,n){if(1&e&&(o.Mb(0,"ion-label",14),o.pc(1),o.Lb()),2&e){const e=o.Wb(2);o.yb(1),o.tc("",e.loadedExchange.sender.first_name," ",e.loadedExchange.sender.last_name," erf\xfcllt NICHT die ",e.projectNoun,"bedingungen!")}}function u(e,n){if(1&e&&(o.Mb(0,"ion-item-group"),o.Mb(1,"ion-item-divider",5),o.Mb(2,"ion-label",11),o.pc(3),o.Lb(),o.Lb(),o.Mb(4,"ion-item",12),o.pc(5),o.Lb(),o.Mb(6,"ion-item",12),o.pc(7),o.Lb(),o.Mb(8,"ion-item",12),o.oc(9,l,2,3,"ion-label",13),o.Lb(),o.Mb(10,"ion-item-divider",5),o.Mb(11,"ion-label",11),o.pc(12),o.Lb(),o.Lb(),o.Mb(13,"ion-item",12),o.pc(14),o.Lb(),o.Mb(15,"ion-item",12),o.pc(16),o.Lb(),o.Mb(17,"ion-item",12),o.oc(18,g,2,3,"ion-label",13),o.Lb(),o.Lb()),2&e){const e=o.Wb();o.yb(3),o.sc("",e.loadedExchange.sender.first_name," ",e.loadedExchange.sender.last_name," (Ersteller/in der Anfrage)"),o.yb(2),o.sc(" Klasse: ",e.loadedExchange.sender.grade,"",e.loadedExchange.sender.letter," "),o.yb(2),o.uc(" ",e.projectNoun,": ",e.firstProjectName," (",e.firstMinGrade,".Klasse bis ",e.firstMaxGrade,".Klasse) "),o.yb(2),o.bc("ngIf",e.loadedExchange.receiver.grade>e.firstMaxGrade||e.loadedExchange.receiver.grade<e.firstMinGrade),o.yb(3),o.sc("",e.loadedExchange.receiver.first_name," ",e.loadedExchange.receiver.last_name," (Empf\xe4nger/in)"),o.yb(2),o.sc(" Klasse: ",e.loadedExchange.receiver.grade,"",e.loadedExchange.receiver.letter," "),o.yb(2),o.uc(" ",e.projectNoun,": ",e.secondProjectName," (",e.secondMinGrade,".Klasse bis ",e.secondMaxGrade,".Klasse) "),o.yb(2),o.bc("ngIf",e.loadedExchange.sender.grade>e.secondMaxGrade||e.loadedExchange.sender.grade<e.secondMinGrade)}}const x=[{path:"",component:(()=>{class e{constructor(e,n,a,t,i,c){this.activatedRoute=e,this.router=n,this.exchangesService=a,this.projectService=t,this.alertCtrl=i,this.config=c,this.subscriptions=[],this.loadedExchange={id:0,sender_id:0,receiver_id:0,confirmed:0,accomplished:0,sender:null,receiver:null},this.firstProjectName="",this.firstMinGrade=0,this.firstMaxGrade=0,this.secondProjectName="",this.secondMinGrade=0,this.secondMaxGrade=0,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{e.has("ExchangeID")?(this.adminUrl=e.get("AdminName"),this.exchangeId=Number(e.get("ExchangeID"))):this.router.navigate([""])}),this.getExchange(),this.subscriptions.push(this.exchangesService.update.subscribe(()=>this.getExchange()))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getExchange(){this.exchangesService.getExchange(this.exchangeId).subscribe(e=>{this.loadedExchange=e.data,this.projectService.getProject(this.loadedExchange.sender.project_id).subscribe(e=>{this.firstProjectName=e.data.title,this.firstMinGrade=e.data.min_grade,this.firstMaxGrade=e.data.max_grade}),this.projectService.getProject(this.loadedExchange.receiver.project_id).subscribe(e=>{this.secondProjectName=e.data.title,this.secondMinGrade=e.data.min_grade,this.secondMaxGrade=e.data.max_grade})})}deleteExchange(){this.alertCtrl.create({header:"Bist du sicher?",message:"Wollen sie diesen Tausch wirklich unwiederruflich l\xf6schen?",buttons:[{text:"Abbrechen",role:"cancel"},{text:"L\xf6schen",handler:()=>{this.exchangesService.deleteExchange(this.loadedExchange.id),this.router.navigate([this.eventName+"/Admin/"+this.adminUrl+"/Tauschanfragen"])}}]}).then(e=>{e.present()})}carryOutExchange(){this.exchangesService.carryOutExchange(this.loadedExchange.id),this.router.navigate([this.eventName+"/Admin/"+this.adminUrl+"/Tauschanfragen"])}}return e.\u0275fac=function(n){return new(n||e)(o.Jb(c.a),o.Jb(c.g),o.Jb(s.a),o.Jb(d.a),o.Jb(r.a),o.Jb(b.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-admin-exchange-detail"]],decls:20,vars:4,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","buttons","color","danger","slot","end",3,"click"],["name","trash"],["color","background"],["color","background",1,"content"],[4,"ngIf"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"click"],["color","buttons","expand","block","color","buttons","color","danger","slot","end",1,"ion-no-margin",3,"click"],["color","text"],["color","items","lines","none"],["color","danger",4,"ngIf"],["color","danger"]],template:function(e,n){1&e&&(o.Mb(0,"ion-header"),o.Mb(1,"ion-toolbar",0),o.Mb(2,"ion-button",1),o.Kb(3,"ion-back-button",2),o.Lb(),o.Mb(4,"ion-title"),o.pc(5,"Tauschanfrage"),o.Lb(),o.Mb(6,"ion-button",3),o.Ub("click",function(){return n.deleteExchange()}),o.Kb(7,"ion-icon",4),o.Lb(),o.Lb(),o.Lb(),o.Mb(8,"ion-content",5),o.Mb(9,"ion-card",6),o.oc(10,h,3,4,"ion-card-header",7),o.Mb(11,"ion-card-content"),o.Mb(12,"form"),o.oc(13,u,19,18,"ion-item-group",7),o.Mb(14,"div",8),o.Mb(15,"ion-button",9),o.Ub("click",function(){return n.carryOutExchange()}),o.pc(16,"Tausch best\xe4tigen"),o.Lb(),o.Lb(),o.Mb(17,"div",8),o.Mb(18,"ion-button",10),o.Ub("click",function(){return n.deleteExchange()}),o.pc(19,"Tauschanfrage l\xf6schen"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&e&&(o.yb(3),o.dc("defaultHref","",n.eventName,"/Admin/",n.adminUrl,"/Tauschanfragen"),o.yb(7),o.bc("ngIf",n.loadedExchange.sender&&n.loadedExchange.receiver),o.yb(3),o.bc("ngIf",n.loadedExchange.sender&&n.loadedExchange.receiver))},directives:[r.t,r.R,r.h,r.e,r.f,r.P,r.u,r.p,r.j,t.j,r.k,i.k,i.g,i.h,r.l,r.n,r.z,r.y,r.A,r.x],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(n){return new(n||e)},imports:[[t.b,i.a,r.S,c.k.forChild(x)]]}),e})()}}]);