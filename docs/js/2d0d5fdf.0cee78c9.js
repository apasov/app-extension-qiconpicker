(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d5fdf"],{"713b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{attrs:{view:"HHh LpR fFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),e.$q.screen.width>500?r("q-toolbar-title",[e._v("\n        QIconPicker\n        "),e.$q.screen.width<1077?r("q-tooltip",[e._v("\n          QIconPicker\n        ")]):e._e()],1):e._e(),r("div",[e._v("Quasar v"+e._s(e.$q.version))]),r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1)],1)],1),r("q-drawer",{attrs:{bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("q-list",[r("q-item-label",{attrs:{header:""}},[e._v("Essential Links")])],1),r("essential-links")],1),r("q-drawer",{attrs:{side:"right",bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[r("q-scroll-area",{staticClass:"fit"},[r("q-list",{attrs:{dense:""}},e._l(e.toc,function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(r){return e.scrollTo(t.id)}}},[t.level>1?r("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),r("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)}),1)],1)],1),r("q-page-container",[r("router-view")],1)],1)},o=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),a=r.n(i),c=r("2f62"),l=r("0831");function s(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){a()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var f={name:"MyLayout",components:{"essential-links":function(){return r.e("2d0cc070").then(r.bind(null,"4bd0"))}},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},beforeDestroy:function(){clearTimeout(this.scrollTimer)},computed:u({},Object(c["b"])({toc:"common/toc"})),mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout(function(){e.scrollTo(t)},200)}},methods:{scrollTo:function(e){this.activeToc=e;var t=document.getElementById(e);clearTimeout(this.scrollTimer),t&&this.scrollPage(t)},scrollPage:function(e){var t=this,r=l["a"].getScrollTarget(e),n=e.offsetTop-e.scrollHeight;this.scrollingPage=!0,this.scrollTimer=setTimeout(function(){t.scrollingPage=!1},510),l["a"].setScrollPosition(r,n,500)}}},d=f,p=r("2877"),b=Object(p["a"])(d,n,o,!1,null,null,null);t["default"]=b.exports}}]);