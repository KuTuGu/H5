webpackJsonp([1],{BZvf:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("MVMM"),i=n("zO6J"),p={template:'<div class = "pos">\n                    <div v-for = "(item, index) in this.pictures" :key = "index" class = "pic" v-bind:class = "{tran: item.back}" v-mouse = "qrCode" v-click = "jump">\n                        \x3c!-- 内联图片对齐问题会导致间隙，改为块级元素 --\x3e\n                        <img v-bind:src = "item.path.split(\' \')[0]" class = "block" v-bind:class = "{mask: item.mask}" />\n                        <img v-bind:src = "item.path.split(\' \')[1]" class = "block" />\n                    </div>\n                    <div v-bind:class = "{towards: pre}" class = "link">\n                        \x3c!--子元素覆盖住图片，保证悬浮在任何地方都触发链接--\x3e\n                        <div class = "prompt">\n                            <p class = "title">扫二维码查看完整H5</p>\n                        </div>\n                    </div>\n                </div>',data:function(){return{pre:!0,links:["http://h5.muxixyz.com/freshman","http://h5.muxixyz.com/freshman2017","http://h5.muxixyz.com/dogs","http://h5.muxixyz.com/ccnubox"]}},directives:{mouse:{inserted:function(t,a,n){if(!(window.screen.width<window.screen.height))for(var s=document.getElementsByClassName("pic"),i=document.getElementsByClassName("link")[0],p=s.length,c=0;c<p;c++)s[c].onmouseover=function(t){return function(){var n=s[t],p=window.getComputedStyle(n),c=parseInt(p.width),e=parseInt(p.height),o=n.offsetLeft,h=n.offsetTop;if("continue.png"!==n.childNodes[0].src.split("/").pop()){a.value(t,n,i);i.style.top=h+e/2-c/2-40+"px",i.style.left=o+"px"}}}(c)}},click:{inserted:function(t,a,n){if(!(window.screen.width>window.screen.height))for(var s=document.getElementsByClassName("pic"),i=s.length,p=0;p<i;p++)s[p].onclick=function(t){return function(){var n=s[t];"continue.png"!==n.childNodes[0].src.split("/").pop()&&a.value(n.childNodes[2].src)}}(p)}}},methods:{qrCode:function(t,a,n){var s=this.pictures[t].path;this.pre=!1,this.pictures[t].path=this.pathes[t],this.pictures[t].mask=!0;var i=this;a.onmouseleave=function(){i.pre=!0,i.pictures[t].mask=!1,i.pictures[t].path=s},n.onmouseover=function(){i.pre=!1,i.pictures[t].mask=!0,i.pictures[t].path=i.pathes[t]},n.onmouseleave=function(){i.pre=!0,i.pictures[t].mask=!1,i.pictures[t].path=s}},jump:function(t){var a=t.split("/").pop().split(".")[0],n=a[a.length-1]-1;window.location.href=this.links[n]}}},c={all:s.a.extend({name:"all",data:function(){var t=[{path:"/static/top1.png /static/low1.png",back:!1,mask:!1},{path:"/static/top2.png /static/low2.png",back:!1,mask:!1},{path:"/static/top3.png /static/low3.png",back:!1,mask:!1},{path:"/static/top4.png /static/low4.png",back:!1,mask:!1},{path:"/static/top4.png /static/low4.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}];return window.screen.width<window.screen.height&&(t=[{path:"/static/top1.png /static/down1.png",back:!1,mask:!1},{path:"/static/top2.png /static/down2.png",back:!1,mask:!1},{path:"/static/top3.png /static/down3.png",back:!1,mask:!1},{path:"/static/top4.png /static/down4.png",back:!1,mask:!1},{path:"/static/top4.png /static/down4.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}]),{pathes:["/static/top1.png /static/down1.png","/static/top2.png /static/down2.png","/static/top3.png /static/down3.png","/static/top4.png /static/down4.png","/static/top4.png /static/down4.png"],pictures:t}},mixins:[p]}),festival:s.a.extend({name:"festival",data:function(){var t=[{path:"/static/top3.png /static/low3.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}];return window.screen.width<window.screen.height&&(t=[{path:"/static/top3.png /static/down3.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}]),{pathes:["/static/top3.png /static/down3.png"],pictures:t}},mixins:[p]}),activity:s.a.extend({name:"activity",data:function(){var t=[{path:"/static/top4.png /static/low4.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}];return window.screen.width<window.screen.height&&(t=[{path:"/static/top4.png /static/down4.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}]),{pathes:["/static/top4.png /static/down4.png"],pictures:t}},mixins:[p]}),hiring:s.a.extend({name:"hiring",data:function(){var t=[{path:"/static/top1.png /static/low1.png",back:!1,mask:!1},{path:"/static/top2.png /static/low2.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}];return window.screen.width<window.screen.height&&(t=[{path:"/static/top1.png /static/down1.png",back:!1,mask:!1},{path:"/static/top2.png /static/down2.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}]),{pathes:["/static/top1.png /static/down1.png","/static/top2.png /static/down2.png"],pictures:t}},mixins:[p]}),other:s.a.extend({name:"other",data:function(){var t=[{path:"/static/top4.png /static/low4.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}];return window.screen.width<window.screen.height&&(t=[{path:"/static/top4.png /static/down4.png",back:!1,mask:!1},{path:"/static/continue.png ",back:!1,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1},{path:"/static/top1.png /static/low1.png",back:!0,mask:!1}]),{pathes:["/static/top4.png /static/down4.png"],pictures:t}},mixins:[p]})},e=n("Z0/y")(c,null,!1,null,null,null).exports;s.a.use(i.a);var o={name:"app",data:function(){return{pc:!0,category:[{name:"全部",path:"all"},{name:"招新",path:"hiring"},{name:"节日",path:"festival"},{name:"活动",path:"activity"},{name:"其他",path:"other"}]}},created:function(){window.screen.width<window.screen.height&&(this.pc=!1)},router:new i.a({mode:"history",routes:[{path:"/",name:"all",component:e.all},{path:"/components/hiring",name:"hiring",component:e.hiring},{path:"/components/festival",name:"festival",component:e.festival},{path:"/components/activity",name:"activity",component:e.activity},{path:"/components/other",name:"other",component:e.other}]})},h={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[t.pc?t._e():n("div",{staticClass:"flag"},[t._v("木犀H5")]),t._v(" "),n("div",{staticClass:"navigation",class:{side:!t.pc}},t._l(this.category,function(a,s){return n("router-link",{key:s,staticClass:"select",class:{linkW:!t.pc},attrs:{to:{name:a.path},exact:""}},[t._v(t._s(a.name))])})),t._v(" "),n("div",{staticClass:"present"},[n("router-view")],1),t._v(" "),n("div",{staticClass:"footer"},[t._v("Hello from Wuhan © 2014-2018 Muxistudio")])])},staticRenderFns:[]};var r=n("Z0/y")(o,h,!1,function(t){n("j1GD")},null,null).exports;n("BZvf");s.a.config.productionTip=!1,new s.a({el:"#app",render:function(t){return t(r)}})},j1GD:function(t,a){}},["NHnr"]);