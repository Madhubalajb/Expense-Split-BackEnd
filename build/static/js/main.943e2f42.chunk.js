(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),u=(a(79),a(30)),o=a(9),s=a(130),m=a(134),i=a(133),p=a(6),E=a.n(p),d=a(13),b=a(44),f=a(23),h=a(131),v=a(132),g=a(127),w=function(e){return r.a.createElement(h.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(h.a.Body,null,r.a.createElement(v.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(v.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(v.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(g.a,{type:"submit"},"Log In")))))},k=function(e){return r.a.createElement(h.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(h.a.Body,null,r.a.createElement(v.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(v.a.Control,{placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(v.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(v.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(g.a,{type:"submit"},"Sign Up")))))},x=a(20),O=a.n(x),j={login:function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},C={signup:function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},y=null,S={setToken:function(e){y="bearer ".concat(e)},getData:function(){var e=Object(d.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/expenses");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(d.a)(E.a.mark(function e(t){var a,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,O.a.post("/api/expenses",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat("/api/expenses","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(d.a)(E.a.mark(function e(t,a){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat("/api/expenses","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},N=a(135),D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){S.getData().then(function(e){return l(e)})},[]);return r.a.createElement("div",null,a.map(function(e){var t=new Date(e.date),a=e.members.filter(function(e){return!0===e.isChecked}),n=a.length,l=e.amount/n;return n>0?r.a.createElement(N.a,{key:e.id},r.a.createElement("h3",null,"Expense Name - ",e.expense_name),r.a.createElement("p",null,"Amount - ",e.amount),r.a.createElement("p",null,"Date - ","".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())),r.a.createElement("p",null,"By -",e.by_whom),r.a.createElement("p",null,"Members ",a.map(function(e){return e.name})," ",l)):r.a.createElement(N.a,{key:e.id},r.a.createElement("h3",null,"Expense Name - ",e.expense_name),r.a.createElement("p",null,"Amount - ",e.amount),r.a.createElement("p",null,"Date - ","".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())),r.a.createElement("p",null,"By -",e.by_whom),r.a.createElement("p",null,"Members ",e.by_whom," ",l))}))},B=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=function(){return l(!1)},u=Object(n.useState)(!1),s=Object(o.a)(u,2),m=s[0],p=s[1],h=function(){return p(!1)},v=Object(n.useState)(""),g=Object(o.a)(v,2),x=g[0],O=g[1],y=Object(n.useState)(""),N=Object(o.a)(y,2),B=N[0],M=N[1],I=Object(n.useState)(""),q=Object(o.a)(I,2),_=q[0],A=q[1],U=Object(n.useState)([]),T=Object(o.a)(U,2),J=T[0],L=T[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var t=JSON.parse(e);L(t),S.setToken(t.token)}},[]);var H=function(e){return M(e.target.value)},P=function(e){return A(e.target.value)},F=function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.login({username:B,password:_});case 4:a=e.sent,window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(a)),S.setToken(a.token),L(a),M(""),A(""),c(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C.signup({name:x,username:B,password:_});case 4:e.sent,L(""),M(""),A(""),h(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}();return""===J?r.a.createElement("div",null,r.a.createElement(i.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(w,{show:a,Close:c,username:H,pwd:P,login:F}),r.a.createElement(i.a.Link,{onClick:function(){return p(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(k,{show:m,Close:h,name:function(e){return O(e.target.value)},username:H,pwd:P,signup:R})):r.a.createElement(b.a,null,r.a.createElement(b.b,{to:"/user"},r.a.createElement("b",null,J.username)),r.a.createElement(i.a.Link,{onClick:function(){L(""),window.localStorage.removeItem("logged-Expense-Split-User"),S.setToken("")}},r.a.createElement("b",null,"Logout")),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/user"},r.a.createElement(D,null))))},M=function(){return r.a.createElement(m.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(m.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(i.a,{className:"ml-auto"},r.a.createElement(B,null))))},I=a(128),q=a(129),_=a(68),A=function(e){return r.a.createElement(I.a,{className:"split"},r.a.createElement(v.a,{onSubmit:e.addExpense},r.a.createElement(q.a,null,r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement("h4",null,"1) Name your Expense"),r.a.createElement(v.a.Control,{onChange:e.ExpName,value:e.expenseName||"",placeholder:"Expense Name",required:!0}),r.a.createElement(v.a.Control,{onChange:e.date,value:e.dateValue,type:"date",placeholder:"Date",required:!0}))),r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement("h4",null,"2) Add your Group"),e.members.map(function(t,a){return r.a.createElement(q.a,{key:a},r.a.createElement(v.a.Control,{className:"col-sm-9",value:t.name||"",placeholder:"Person Name",onChange:function(t){return e.Member(t,a)},required:!0}),r.a.createElement(g.a,{className:"col-sm-2 minusBtn",variant:"dark",title:"delete member",onClick:function(){return e.rmMember(a)}},r.a.createElement("b",null,"-")))}),r.a.createElement(g.a,{className:"addBtn",variant:"dark",title:"add member",onClick:function(t){return e.addMember(t)}},r.a.createElement("b",null,"+")))),r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement("h4",null,"3) Enter the Expenses"),r.a.createElement(v.a.Control,{onChange:e.Amount,value:e.amount||"",placeholder:"Amount",required:!0}),r.a.createElement(q.a,null,r.a.createElement("b",null,"By whom:")),r.a.createElement(q.a,null,e.members.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(_.a,null,r.a.createElement(v.a.Check,{type:"radio",value:t.name||"",label:t.name,onChange:e.radio})))})),r.a.createElement(q.a,null,r.a.createElement("b",null,"To whom:")),r.a.createElement(q.a,null,e.members.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(_.a,null,r.a.createElement(v.a.Check,{type:"checkbox",value:t.name||"",label:t.name,checked:t.isChecked,onChange:function(){return e.checkbox(a)}})))}))))),r.a.createElement(g.a,{variant:"dark",title:"Split",className:"split_btn",type:"submit"},"Finally, Split It")))},U=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)(""),c=Object(o.a)(l,2),m=c[0],i=c[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),d=E[0],b=E[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),v=h[0],g=h[1],w=Object(n.useState)([{name:null,isChecked:!1}]),k=Object(o.a)(w,2),x=k[0],O=k[1],j=Object(n.useState)(""),C=Object(o.a)(j,2),y=C[0],N=C[1];return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement("center",null,r.a.createElement("p",null,r.a.createElement(s.a,null,"React JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"REST API")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"Node JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"Express")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"mongoDB")),r.a.createElement(A,{ExpName:function(e){return i(e.target.value)},date:function(e){return b(e.target.value)},Amount:function(e){return g(e.target.value)},Member:function(e,t){var a=Object(u.a)(x);a[t].name=e.target.value,O(a)},addExpense:function(e){e.preventDefault();var t={expense_name:m,date:d,members:x,amount:Number(v),by_whom:y};S.addData(t).then(function(e){a(t.concat(e)),i(""),b(""),g(""),O([]),N("")})},addMember:function(){var e=Object(u.a)(x);e.push({name:null,isChecked:!1}),O(e)},rmMember:function(e){var t=Object(u.a)(x);t.splice(e,1),O(t)},members:x,expenseName:m,dateValue:d,amount:v,radio:function(e){return N(e.target.value)},checkbox:function(e){var t=Object(u.a)(x);t[e].isChecked=!t[e].isChecked,O(t)}}),r.a.createElement("footer",{className:"bottom"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")," ",r.a.createElement("br",null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(124);c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(125)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.943e2f42.chunk.js.map