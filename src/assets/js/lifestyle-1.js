/*! lifestyle-1.js | Huro | Css ninja 2020-2021 */
"use strict";$(document).ready((function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,e=window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame;window.onload=function(){!function(n,i){var s=Math.sqrt,o=Math.cos,r=Math.sin;function a(t){this[1]={1:t[0],2:t[1],3:t[2]},this[2]={1:t[3],2:t[4],3:t[5]},this[3]={1:t[6],2:t[7],3:t[8]}}var u=a.prototype;function c(t,e,n){this.x=t,this.y=e,this.z=n||0}a.Rotation=function(t,e){var n=r(t),i=o(t),s=1-i,u=e.x*e.y,c=e.x*e.z,f=e.y*e.z,l=e.x*e.x,d=e.y*e.y,m=e.z*e.z;return new a([i+l*s,u*s-e.z*n,c*s+e.y*n,u*s+e.z*n,i+d*s,f*s-e.x*n,c*s-e.y*n,f*s+e.x*n,i+m*s])},u.mul_v=function(t){var e,n=[];for(e=1;e<=3;++e)n[e-1]=t[0]*this[e][1]+t[1]*this[e][2]+t[2]*this[e][3];return n},a.rotate_pts=function(t,e){for(var n=e.length;n--;)e[n]=t.mul_v(e[n]);return e};var f=c.prototype;f.length=function(){var t=this.x*this.x,e=this.y*this.y,n=this.z*this.z;return s(t+e+n)},f.cross=function(t){return new c(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},f.normalized=function(){var t=this.length();return new c(this.x/t,this.y/t,this.z/t)};var l,d={radius_x:100,radius_y:100,radius_z:100,radius_stop:.2,scale_max:1,scale_min:.5,scale_steps:50,opacity_max:1,opacity_min:.5,opacity_steps:20};if(i)for(l in d)i[l]||(i[l]=d[l]);else i=d;var m,p=document.getElementById(n),y=(b=p,b.getBoundingClientRect?function(t){var e=t.getBoundingClientRect(),n=document.body,i=document.documentElement,s=window.pageYOffset||i.scrollTop||n.scrollTop,o=window.pageXOffset||i.scrollLeft||n.scrollLeft,r=i.clientTop||n.clientTop||0,a=i.clientLeft||n.clientLeft||0,u=e.top+s-r,c=e.left+o-a;return{top:0|u,left:0|c}}(b):function(t){for(var e=0,n=0;t;)e+=parseInt(t.offsetTop),n+=parseInt(t.offsetLeft),t=t.offsetParent;return{top:e,left:n}}(b)),h=p.offsetWidth,_=p.offsetHeight,w=s(h*h+_*_)/2,v=p.querySelectorAll(".cloud-element"),z=v.length,x=function(t,e,n,i){var a,u,c,f,l=[],d=Math.PI*(3-s(5)),m=2/t;for(a=0;a<t;++a)c=s(1-(u=a*m-1+m/2)*u),f=a*d,l.push([o(f)*c*e,u*n,r(f)*c*i]);return l}(z,i.radius_x,i.radius_y,i.radius_z),g={step:(i.scale_max-i.scale_min)/i.scale_steps,z_step:2*i.radius_z/i.scale_steps,arr:new Array(z)},A={step:(i.opacity_max-i.opacity_min)/i.opacity_steps,z_step:2*i.radius_z/i.opacity_steps,arr:new Array(z)},R={x:i.radius_stop*i.radius_x,y:i.radius_stop*i.radius_y},q=new c(0,0,1),F=0,T=0;var b;function L(t,e,n){var s,o,r=-i.radius_z;for(s=0;s<z;++s)for(o=0;o<=e;++o)if(x[s][2]<=r+o*t.z_step){t.arr[s]=n+o*t.step;break}}function M(t){return"scale("+g.arr[t]+")"}function C(t){var e=v[t].offsetWidth/2,n=v[t].offsetHeight/2,i=_/2;return"translate3d("+(h/2+x[t][0]-e|0)+"px,"+(i+x[t][1]-n|0)+"px,"+x[t][0]+"px)"}function E(t,e){var n=v[t];n.style.webkitTransform=e,n.style.mozTransform=e,n.style.msTransform=e,n.style.oTransform=e,n.style.transform=e}function I(t){v[t].style.opacity=A.arr[t]}function k(){var t=z;for(L(g,i.scale_steps,i.scale_min),L(A,i.opacity_steps,i.opacity_min);t--;)E(t,C(t)+" "+M(t)),I(t)}function B(){F=Math.PI*T/90}function P(){var t;F&&(t=a.Rotation(F,q),x=a.rotate_pts(t,x))}function H(){m=t(H),P(),k()}function O(){m=t(O),T>.01?(T*=.96,B()):e(m),P(),k()}(function(){var t=z;for(p.style.overflow="hidden";t--;)v[t].style.position="absolute"})(),p.addEventListener("mousemove",(function(t){var e=t||window.event,n=e.clientX-y.left-h/2,i=e.clientY-y.top-_/2,s=new c(n,i,0);T=Math.abs(n)<R.x&&Math.abs(i)<R.y?0:s.length()/w,B(),q=s.cross(new c(0,0,1)).normalized()}),!1),p.addEventListener("mouseleave",(function(){e(m),O()}),!1),p.addEventListener("mouseenter",(function(){e(m),H()}),!1),k()}("cl",{radius_x:200,radius_y:200,radius_z:200,radius_stop:.3})}}));