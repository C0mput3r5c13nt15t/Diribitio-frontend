!function(){function e(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,i){var a=t.apply(n,r);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"2bER":function(e,n,r){"use strict";r.r(n),r.d(n,"startInputShims",function(){return f});var o=r("gHap"),i=new WeakMap,a=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;i.has(e)!==n&&(n?c(e,t,r):s(e,t))},u=function(e){return e===e.getRootNode().activeElement},c=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),i.set(e,o);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},s=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur]",l=function(e,t){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}},f=function(e){var n=document,r=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),f=e.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,m=new WeakMap,h=function(){var e=t(regeneratorRuntime.mark(function e(n){var s,d,l,f,v,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.componentOnReady,!e.t0){e.next=4;break}return e.next=4,n.componentOnReady();case 4:s=n.shadowRoot||n,d=s.querySelector("input")||s.querySelector("textarea"),l=n.closest("ion-content"),f=l?null:n.closest("ion-footer"),d&&(l&&c&&!p.has(n)&&(v=function(e,t,n){if(!n||!t)return function(){};var r=function(n){u(t)&&a(e,t,n)},o=function(){return a(e,t,!1)},i=function(){return r(!0)},c=function(){return r(!1)};return n.addEventListener("ionScrollStart",i),n.addEventListener("ionScrollEnd",c),t.addEventListener("blur",o),function(){n.removeEventListener("ionScrollStart",i),n.removeEventListener("ionScrollEnd",c),t.addEventListener("ionBlur",o)}}(n,d,l),p.set(n,v)),(l||f)&&i&&!m.has(n)&&(h=function(e,n,r,i,c){var s,d=function(e){s=Object(o.k)(e)},l=function(d){if(s){var l,f=Object(o.k)(d);(function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>36}return!1})(0,s,f)||u(n)||(d.preventDefault(),d.stopPropagation(),(l=t(regeneratorRuntime.mark(function e(n,r,o,i,u){var c,s,d,l,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o||i){e.next=2;break}return e.abrupt("return");case 2:if(c=function(e,t,n){return function(e,t,n,r){var o=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,r-n)-i,s=u-o,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,o-a),f=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(o-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(n,o||i,u),!(o&&Math.abs(c.scrollAmount)<4)){e.next=7;break}r.focus(),e.next=16;break;case 7:if(a(n,r,!0,c.inputSafeY),r.focus(),"undefined"==typeof window){e.next=16;break}if(d=function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==s&&clearTimeout(s),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",d),e.t0=o,!e.t0){e.next=7;break}return e.next=7,o.scrollByPoint(0,c.scrollAmount,c.scrollDuration);case 7:a(n,r,!1,c.inputSafeY),r.focus();case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),l=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",d)},!o){e.next=15;break}return e.next=12,o.getScrollElement();case 12:if(f=e.sent,!(c.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)){e.next=15;break}return e.abrupt("return",("password"===r.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",d),void(s=setTimeout(d,1e3))));case 15:d();case 16:case"end":return e.stop()}},e)})),function(e,t,n,r,o){return l.apply(this,arguments)})(e,n,r,i,c))}};return e.addEventListener("touchstart",d,!0),e.addEventListener("touchend",l,!0),function(){e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",l,!0)}}(n,d,l,f,r),m.set(n,h)));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();s&&function(){var e=!0,t=!1,n=document;n.addEventListener("ionScrollStart",function(){t=!0}),n.addEventListener("focusin",function(){e=!0},!0),n.addEventListener("touchend",function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(d)){var i=r.target;i!==o&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout(function(){e||o.blur()},50)))}}},!1)}(),f&&function(e){var t=document;t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(e){l(e.target,0)})}(r);for(var w=0,g=v;w<g.length;w++){var E=g[w];h(E)}n.addEventListener("ionInputDidLoad",function(e){h(e.detail)}),n.addEventListener("ionInputDidUnload",function(e){!function(e){if(c){var t=p.get(e);t&&t(),p.delete(e)}if(i){var n=m.get(e);n&&n(),m.delete(e)}}(e.detail)})}}}])}();