(this.webpackJsonpwildfire_tracker=this.webpackJsonpwildfire_tracker||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(9),i=n.n(s),a=(n(19),n(12)),o=n.n(a),l=n(13),j=n(3),d=n.p+"static/media/spinner.e1e435ec.gif",u=n(1),f={width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},b=function(){return Object(u.jsx)("div",{style:f,children:Object(u.jsx)("img",{src:d,alt:"Loading"})})},v=(n(8),n(22),function(e){e.isWildfire;var t=e.selectIsWildfire,n=e.selectIsStorm;return Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)("div",{className:"item-container",children:Object(u.jsx)("a",{className:"nav-brand",href:"/",children:"Wildfire Tracker"})}),Object(u.jsx)("div",{onClick:t,className:"item-container active",children:Object(u.jsx)("p",{className:"nav-item",children:"Wildfires"})}),Object(u.jsx)("div",{className:"item-container",onClick:n,children:Object(u.jsx)("p",{className:"nav-item",children:"Storms"})})]})}),h=function(e){var t=e.eventInfo;return t?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Event Information"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Id: ",t.id]}),Object(u.jsxs)("li",{children:["Title: ",t.title]})]})]}):null},O=(n(23),function(e){var t=e.eventInfo;return Object(u.jsx)("div",{className:"events-bar",children:t&&Object(u.jsx)(h,{eventInfo:t})})}),m=(n(24),n(28)),x=n(31),p=n(29),g=n(30);n(25);var I=function(e){var t=e.eventData;return Object(u.jsxs)(m.a,{className:"map",center:[51.505,-.09],zoom:3,scrollWheelZoom:!0,children:[Object(u.jsx)(x.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"}),t.map((function(e,t){return 8===e.categories[0].id?Object(u.jsx)(p.a,{position:[e.geometries[0].coordinates[1],e.geometries[0].coordinates[0]],children:Object(u.jsx)(g.a,{children:Object(u.jsx)("p",{children:e.title})})},t):null}))]})};var S=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(j.a)(s,2),a=i[0],d=i[1],f=Object(c.useState)(!0),h=Object(j.a)(f,2),m=h[0],x=h[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,r(c),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{style:a?{background:"#fff"}:{background:"#f3f2ef"},className:"App",children:[Object(u.jsx)(v,{isWildfire:m,selectIsWildfire:function(){x(!0)},selectIsStorm:function(){x(!1)}}),a?Object(u.jsx)(b,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(I,{eventData:n})," ",Object(u.jsx)(O,{})]})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.79a34c97.chunk.js.map