(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var c=t(5),a=t(0),i=t.n(a),o=t(18),r=t.n(o),l=(t(25),t(26),t(11)),s=t(16),u=t(13),d=t(34),j=t(35),m=t(38),g=t(37),h=t(19),f=t(36);var b=function(e,n){var t=Object(a.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(c){return console.log(c),n}})),c=Object(u.a)(t,2),i=c[0],o=c[1];return[i,function(n){try{var t=n instanceof Function?n(i):n;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(c){console.log(c)}}]};function O(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(g.a.Row,{className:"mb-2 col-xs-12 col-lg-12",children:[Object(c.jsx)(h.a,{className:"col-xs-6 col-lg-6",style:{minWidth:"100px"},placeholder:"Bitte gebe einen Eintrag ein",onChange:function(n){return e.changeName(n.target.value,e.id)},value:e.name}),Object(c.jsx)(h.a,{className:"col-xs-6 col-lg-3",placeholder:"Bitte gebe die Menge ein",onChange:function(n){return e.changeAmount(n.target.value,e.id)},value:e.amount}),Object(c.jsx)(j.a.Append,{className:"col-xs-12 col-lg-3",children:Object(c.jsx)(m.a,{className:"w-20",variant:"danger",onClick:function(){return e.deleteMethod(e.id)},children:"L\xf6schen"})})]})})}var p=function(){var e=b("shoppinglist",[{id:0,name:"",amount:1,isDone:!1}]),n=Object(u.a)(e,2),t=n[0],a=n[1];function i(e){a(t.filter((function(n){return n.id!==e})))}var o=function(e,n){a(t.map((function(t){return t.id===n?Object(l.a)(Object(l.a)({},t),{},{name:e}):t})))},r=function(e,n){a(t.map((function(t){return t.id===n?Object(l.a)(Object(l.a)({},t),{},{amount:e}):t})))};return Object(c.jsxs)(d.a,{className:"d-flex align-items-center flex-column",children:[Object(c.jsx)("h1",{children:"Shopping List"}),Object(c.jsx)(j.a,{className:"d-flex align-items-center flex-column",children:t.map((function(e){return Object(c.jsx)(O,{name:e.name,deleteMethod:i,amount:e.amount,changeName:o,changeAmount:r,id:e.id})}))}),Object(c.jsx)(m.a,{onClick:function(){a([].concat(Object(s.a)(t),[{id:0!==t.length?Math.max.apply(Math,Object(s.a)(t.map((function(e){return e.id}))))+1:0,name:"",amount:1,isDone:!1}]))},children:Object(c.jsx)(f.a,{})})]})};var x=function(){return Object(c.jsx)(p,{})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),i(e),o(e)}))};t(30);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.ae330759.chunk.js.map