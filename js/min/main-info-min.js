$(window).load(function(){"use strict";setTimeout(function(){$("#preloader").velocity({opacity:"0",complete:function(){$("#loading").velocity("fadeOut",{duration:1e3,easing:[.7,0,.3,1]})}})},1e3),setTimeout(function(){$(".global-overlay").velocity({translateX:"100%",opacity:"1"},{duration:1e3,easing:[.7,0,.3,1]}),$(".map-container").addClass("fadeInRight").removeClass("opacity-0")},1e3),setTimeout(function(){$("#left-side").velocity({opacity:"1",complete:function(){setTimeout(function(){$(".text-intro").each(function(t){!function(e){setTimeout(function(){$(e).addClass("animated-middle fadeInUp").removeClass("opacity-0")},150*t+150)}(this)})},0)}},{duration:1e3,easing:[.7,0,.3,1]})},1600)}),$(document).ready(function(){"use strict";function t(){e?($("body").addClass("scroll-touch"),$("a#go-contact").on("click",function(){event.preventDefault();var t="#"+this.getAttribute("data-target");$("html, body").animate({scrollTop:$(t).offset().top-60},500)})):$("body").mCustomScrollbar({scrollInertia:150,axis:"y"})}$("a#go-contact").on("click",function(){setTimeout(function(){$("#mcs_container").mCustomScrollbar("scrollTo","#get-contact",{scrollInertia:500,callbacks:!1})},350)}),$(function(){$("body").bind("mousewheel",function(t){t.preventDefault();var e=this.scrollTop;this.scrollTop=e+t.deltaY*t.deltaFactor*-1})});var e=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);t(),window.matchMedia("(min-width: 1025px)").matches&&$(function(){$("[data-toggle='tooltip']").tooltip()}),$("#notifyMe").notifyMe(),function(){var t=document.querySelector("[data-dialog]"),e=document.getElementById(t.getAttribute("data-dialog")),n=new DialogFx(e);t.addEventListener("click",n.toggle.bind(n))}(),function(t){for(var e=function(t){for(var e=t.childNodes,n=e.length,i=[],o,a,r,l,c=0;c<n;c++)o=e[c],1===o.nodeType&&(a=o.children[0],r=a.getAttribute("data-size").split("x"),l={src:a.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},o.children.length>1&&(l.title=o.children[1].innerHTML),a.children.length>0&&(l.msrc=a.children[0].getAttribute("src")),l.el=o,i.push(l));return i},n=function t(e,n){return e&&(n(e)?e:t(e.parentNode,n))},i=function(t){t=t||window.event,t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.target||t.srcElement,i=n(e,function(t){return t.tagName&&"FIGURE"===t.tagName.toUpperCase()});if(i){for(var o=i.parentNode,r=i.parentNode.childNodes,l=r.length,c=0,d,u=0;u<l;u++)if(1===r[u].nodeType){if(r[u]===i){d=c;break}c++}return d>=0&&a(d,o),!1}},o=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var n=t.split("&"),i=0;i<n.length;i++)if(n[i]){var o=n[i].split("=");o.length<2||(e[o[0]]=o[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e},a=function(t,n,i,o){var a=document.querySelectorAll(".pswp")[0],r,l,c;if(c=e(n),l={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=c[t].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,i=e.getBoundingClientRect();return{x:i.left,y:i.top+n,w:i.width}}},o)if(l.galleryPIDs){for(var d=0;d<c.length;d++)if(c[d].pid===t){l.index=d;break}}else l.index=parseInt(t,10)-1;else l.index=parseInt(t,10);isNaN(l.index)||(i&&(l.showAnimationDuration=0),r=new PhotoSwipe(a,PhotoSwipeUI_Default,c,l),r.init())},r=document.querySelectorAll(t),l=0,c=r.length;l<c;l++)r[l].setAttribute("data-pswp-uid",l+1),r[l].onclick=i;var d=o();d.pid&&d.gid&&a(d.pid,r[d.gid-1],!0,!0)}(".my-gallery")});