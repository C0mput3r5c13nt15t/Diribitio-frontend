!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7XJi":function(i,o,c){"use strict";c.r(o),c.d(o,"HelpPageModule",function(){return M});var e=c("ofXK"),b=c("3Pt+"),r=c("tyNb"),a=c("TEn/"),l=c("fXoL"),f=c("r4Kj");function u(t,n){if(1&t&&(l.Mb(0,"ion-card-subtitle"),l.pc(1),l.Lb()),2&t){var i=l.Wb(2).$implicit;l.yb(1),l.qc(i.title1)}}function s(t,n){if(1&t&&(l.Mb(0,"ion-label",8),l.pc(1),l.Lb()),2&t){var i=l.Wb(2).$implicit;l.yb(1),l.rc(" ",i.text1," ")}}function p(t,n){if(1&t&&(l.Mb(0,"ion-card-content"),l.oc(1,u,2,1,"ion-card-subtitle",6),l.oc(2,s,2,1,"ion-label",7),l.Lb()),2&t){var i=l.Wb().$implicit;l.yb(1),l.bc("ngIf",i.title1),l.yb(1),l.bc("ngIf",i.text1)}}function d(t,n){if(1&t&&(l.Mb(0,"ion-card-subtitle"),l.pc(1),l.Lb()),2&t){var i=l.Wb(2).$implicit;l.yb(1),l.qc(i.title2)}}function y(t,n){if(1&t&&(l.Mb(0,"ion-label",8),l.pc(1),l.Lb()),2&t){var i=l.Wb(2).$implicit;l.yb(1),l.rc(" ",i.text2," ")}}function g(t,n){if(1&t&&(l.Mb(0,"ion-card-content"),l.oc(1,d,2,1,"ion-card-subtitle",6),l.oc(2,y,2,1,"ion-label",7),l.Lb()),2&t){var i=l.Wb().$implicit;l.yb(1),l.bc("ngIf",i.title2),l.yb(1),l.bc("ngIf",i.text2)}}function h(t,n){if(1&t&&(l.Mb(0,"ion-card",5),l.Mb(1,"ion-card-header"),l.Mb(2,"ion-card-title"),l.pc(3),l.Lb(),l.Lb(),l.oc(4,p,3,2,"ion-card-content",6),l.oc(5,g,3,2,"ion-card-content",6),l.Lb()),2&t){var i=n.$implicit;l.yb(3),l.qc(i.title),l.yb(1),l.bc("ngIf",i.title1||i.text1),l.yb(1),l.bc("ngIf",i.title2||i.text2)}}var m,v,L=[{path:"",component:(m=function(){function i(n){t(this,i),this.config=n,this.subscriptions=[],this.eventName=this.config.app_config.event_name,this.instructions=this.config.help.instructions}var o,c,e;return o=i,(c=[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(t){return t.unsubscribe()})}}])&&n(o.prototype,c),e&&n(o,e),i}(),m.\u0275fac=function(t){return new(t||m)(l.Jb(f.a))},m.\u0275cmp=l.Db({type:m,selectors:[["app-help"]],decls:8,vars:2,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["color","background","class","content",4,"ngFor","ngForOf"],["color","background",1,"content"],[4,"ngIf"],["color","text",4,"ngIf"],["color","text"]],template:function(t,n){1&t&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-button",1),l.Kb(3,"ion-back-button",2),l.Lb(),l.Mb(4,"ion-title"),l.pc(5,"Hilfe"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",3),l.oc(7,h,6,3,"ion-card",4),l.Lb()),2&t&&(l.yb(3),l.cc("defaultHref","",n.eventName,"/Home"),l.yb(4),l.bc("ngForOf",n.instructions))},directives:[a.t,a.R,a.h,a.e,a.f,a.P,a.p,e.i,a.j,a.l,a.n,e.j,a.k,a.m,a.A],styles:[""]}),m)}],M=((v=function n(){t(this,n)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(t){return new(t||v)},imports:[[e.b,b.a,a.S,r.k.forChild(L)]]}),v)}}])}();