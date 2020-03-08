(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,a,t){e.exports=t(94)},68:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),u=(t(68),t(60)),o=t(23),s=t(103),m=t(102),i=t(7),p=t.n(i),d=t(13),E=t(9),b=t(100),f=t(101),h=t(96),v=function(e){return r.a.createElement(b.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Log In")))))},g=function(e){return r.a.createElement(b.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(f.a.Control,{placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Sign Up")))))},w=t(19),k=t.n(w),x={login:function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},O={signup:function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/users",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},j=null,C={setToken:function(e){j="bearer ".concat(e)},getData:function(){var e=Object(d.a)(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/expenses");case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(d.a)(p.a.mark(function e(a){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:j}},e.next=3,k.a.post("/api/expenses",a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat("/api/expenses","/").concat(a));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(d.a)(p.a.mark(function e(a,t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("".concat("/api/expenses","/").concat(a),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},S=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],l=a[1],c=function(){return l(!1)},u=Object(n.useState)(!1),o=Object(E.a)(u,2),s=o[0],i=o[1],b=function(){return i(!1)},f=Object(n.useState)(""),h=Object(E.a)(f,2),w=h[0],k=h[1],j=Object(n.useState)(""),S=Object(E.a)(j,2),y=S[0],N=S[1],B=Object(n.useState)(""),I=Object(E.a)(B,2),D=I[0],q=I[1],M=Object(n.useState)([]),U=Object(E.a)(M,2),L=U[0],T=U[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var a=JSON.parse(e);T(a),C.setToken(a.token)}},[]);var A=function(e){return N(e.target.value)},J=function(e){return q(e.target.value)},H=function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,x.login({username:y,password:D});case 4:t=e.sent,window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(t)),C.setToken(t.token),T(t),N(""),q(""),c(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(a){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(p.a.mark(function e(a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,O.signup({name:w,username:y,password:D});case 4:e.sent,T(""),N(""),q(""),b(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}();return""===L?r.a.createElement("div",null,r.a.createElement(m.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(v,{show:t,Close:c,username:A,pwd:J,login:H}),r.a.createElement(m.a.Link,{onClick:function(){return i(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(g,{show:s,Close:b,name:function(e){return k(e.target.value)},username:A,pwd:J,signup:P})):r.a.createElement("div",null,r.a.createElement(m.a.Link,{href:"/user"},r.a.createElement("b",null,L.username)),r.a.createElement(m.a.Link,{onClick:function(){T(""),window.localStorage.removeItem("logged-Expense-Split-User"),C.setToken("")}},r.a.createElement("b",null,"Logout")))},y=function(){return r.a.createElement(s.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(s.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"ml-auto"},r.a.createElement(S,null))))},N=t(30),B=t(99),I=t(97),D=t(98),q=t(57),M=t(104),U=function(e){return r.a.createElement(I.a,{className:"split"},r.a.createElement(f.a,{onSubmit:e.addExpense},r.a.createElement(D.a,null,r.a.createElement(q.a,null,r.a.createElement(M.a,null,r.a.createElement("h4",null,"1) Name your Expense"),r.a.createElement(f.a.Control,{onChange:e.ExpName,value:e.expenseName||"",placeholder:"Expense Name",required:!0}),r.a.createElement(f.a.Control,{onChange:e.date,value:e.dateValue,type:"date",placeholder:"Date",required:!0}))),r.a.createElement(q.a,null,r.a.createElement(M.a,null,r.a.createElement("h4",null,"2) Add your Group"),e.members.map(function(a,t){return r.a.createElement(D.a,{key:t},r.a.createElement(f.a.Control,{className:"col-sm-9",value:a.name||"",placeholder:"Person Name",onChange:function(a){return e.Member(a,t)},required:!0}),r.a.createElement(h.a,{className:"col-sm-2 minusBtn",variant:"dark",title:"delete member",onClick:function(){return e.rmMember(t)}},r.a.createElement("b",null,"-")))}),r.a.createElement(h.a,{className:"addBtn",variant:"dark",title:"add member",onClick:function(a){return e.addMember(a)}},r.a.createElement("b",null,"+")))),r.a.createElement(q.a,null,r.a.createElement(M.a,null,r.a.createElement("h4",null,"3) Enter the Expenses"),r.a.createElement(f.a.Control,{onChange:e.Amount,value:e.amount||"",placeholder:"Amount",required:!0}),r.a.createElement(D.a,null,r.a.createElement("b",null,"By whom:")),r.a.createElement(D.a,null,e.members.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(q.a,null,r.a.createElement(f.a.Check,{type:"radio",value:a.name||"",label:a.name,onChange:e.radio})))})),r.a.createElement(D.a,null,r.a.createElement("b",null,"To whom:")),r.a.createElement(D.a,null,e.members.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(q.a,null,r.a.createElement(f.a.Check,{type:"checkbox",value:a.name||"",label:a.name,checked:a.isChecked,onChange:function(){return e.checkbox(t)}})))}))))),r.a.createElement(h.a,{variant:"dark",title:"Split",className:"split_btn",type:"submit"},"Finally, Split It")))},L=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(""),c=Object(E.a)(l,2),u=c[0],o=c[1],s=Object(n.useState)(""),m=Object(E.a)(s,2),i=m[0],p=m[1],d=Object(n.useState)(""),b=Object(E.a)(d,2),f=b[0],h=b[1],v=Object(n.useState)([{name:null,isChecked:!1}]),g=Object(E.a)(v,2),w=g[0],k=g[1],x=Object(n.useState)(""),O=Object(E.a)(x,2),j=O[0],S=O[1];return r.a.createElement("center",null,r.a.createElement("p",null,r.a.createElement(B.a,null,"React JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"REST API")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"Node JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"Express")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"mongoDB")),r.a.createElement(U,{ExpName:function(e){return o(e.target.value)},date:function(e){return p(e.target.value)},Amount:function(e){return h(e.target.value)},Member:function(e,a){var t=Object(N.a)(w);t[a].name=e.target.value,k(t)},addExpense:function(e){e.preventDefault();var a={expense_name:u,date:i,members:w,amount:Number(f),by_whom:j};C.addData(a).then(function(e){t(a.concat(e)),o(""),p(""),h(""),k([]),S("")})},addMember:function(){var e=Object(N.a)(w);e.push({name:null,isChecked:!1}),k(e)},rmMember:function(e){var a=Object(N.a)(w);a.splice(e,1),k(a)},members:w,expenseName:u,dateValue:i,amount:f,radio:function(e){return S(e.target.value)},checkbox:function(e){var a=Object(N.a)(w);a[e].isChecked=!a[e].isChecked,k(a)}}),r.a.createElement("footer",{className:"bottom"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")," ",r.a.createElement("br",null)))},T=function(){return r.a.createElement(u.a,null,r.a.createElement(y,null),r.a.createElement(o.a,{exact:!0,path:"/",component:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93);c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.69ea758d.chunk.js.map