(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,a){e.exports=a(94)},68:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),u=(a(68),a(36)),o=a(23),m=a(103),s=a(102),i=a(7),p=a.n(i),E=a(13),d=a(9),b=a(100),f=a(101),h=a(96),v=function(e){return r.a.createElement(b.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Log In")))))},g=function(e){return r.a.createElement(b.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(f.a.Control,{placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Sign Up")))))},w=a(19),k=a.n(w),x={login:function(){var e=Object(E.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},O={signup:function(){var e=Object(E.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},j=null,C={setToken:function(e){j="bearer ".concat(e)},getData:function(){var e=Object(E.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/expenses");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(E.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:j}},e.next=3,k.a.post("/api/expenses",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(E.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat("/api/expenses","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(E.a)(p.a.mark(function e(t,a){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("".concat("/api/expenses","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},y=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],c=function(){return l(!1)},o=Object(n.useState)(!1),m=Object(d.a)(o,2),i=m[0],b=m[1],f=function(){return b(!1)},h=Object(n.useState)(""),w=Object(d.a)(h,2),k=w[0],j=w[1],y=Object(n.useState)(""),S=Object(d.a)(y,2),N=S[0],D=S[1],B=Object(n.useState)(""),M=Object(d.a)(B,2),I=M[0],q=M[1],_=Object(n.useState)([]),A=Object(d.a)(_,2),U=A[0],L=A[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var t=JSON.parse(e);L(t),C.setToken(t.token)}},[]);var T=function(e){return D(e.target.value)},J=function(e){return q(e.target.value)},H=function(){var e=Object(E.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.login({username:N,password:I});case 4:a=e.sent,window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(a)),C.setToken(a.token),L(a),D(""),q(""),c(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(E.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.signup({name:k,username:N,password:I});case 4:e.sent,L(""),D(""),q(""),f(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}();return""===U?r.a.createElement("div",null,r.a.createElement(s.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(v,{show:a,Close:c,username:T,pwd:J,login:H}),r.a.createElement(s.a.Link,{onClick:function(){return b(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(g,{show:i,Close:f,name:function(e){return j(e.target.value)},username:T,pwd:J,signup:P})):r.a.createElement("div",null,r.a.createElement(s.a.Link,null,r.a.createElement(u.b,{to:"/user"},r.a.createElement("b",null,U.username))),r.a.createElement(s.a.Link,{onClick:function(){L(""),window.localStorage.removeItem("logged-Expense-Split-User"),C.setToken("")}},r.a.createElement("b",null,"Logout")))},S=function(){return r.a.createElement(m.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(m.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(s.a,{className:"ml-auto"},r.a.createElement(y,null))))},N=a(30),D=a(99),B=a(97),M=a(98),I=a(58),q=a(104),_=function(e){return r.a.createElement(B.a,{className:"split"},r.a.createElement(f.a,{onSubmit:e.addExpense},r.a.createElement(M.a,null,r.a.createElement(I.a,null,r.a.createElement(q.a,null,r.a.createElement("h4",null,"1) Name your Expense"),r.a.createElement(f.a.Control,{onChange:e.ExpName,value:e.expenseName||"",placeholder:"Expense Name",required:!0}),r.a.createElement(f.a.Control,{onChange:e.date,value:e.dateValue,type:"date",placeholder:"Date",required:!0}))),r.a.createElement(I.a,null,r.a.createElement(q.a,null,r.a.createElement("h4",null,"2) Add your Group"),e.members.map(function(t,a){return r.a.createElement(M.a,{key:a},r.a.createElement(f.a.Control,{className:"col-sm-9",value:t.name||"",placeholder:"Person Name",onChange:function(t){return e.Member(t,a)},required:!0}),r.a.createElement(h.a,{className:"col-sm-2 minusBtn",variant:"dark",title:"delete member",onClick:function(){return e.rmMember(a)}},r.a.createElement("b",null,"-")))}),r.a.createElement(h.a,{className:"addBtn",variant:"dark",title:"add member",onClick:function(t){return e.addMember(t)}},r.a.createElement("b",null,"+")))),r.a.createElement(I.a,null,r.a.createElement(q.a,null,r.a.createElement("h4",null,"3) Enter the Expenses"),r.a.createElement(f.a.Control,{onChange:e.Amount,value:e.amount||"",placeholder:"Amount",required:!0}),r.a.createElement(M.a,null,r.a.createElement("b",null,"By whom:")),r.a.createElement(M.a,null,e.members.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(I.a,null,r.a.createElement(f.a.Check,{type:"radio",value:t.name||"",label:t.name,onChange:e.radio})))})),r.a.createElement(M.a,null,r.a.createElement("b",null,"To whom:")),r.a.createElement(M.a,null,e.members.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(I.a,null,r.a.createElement(f.a.Check,{type:"checkbox",value:t.name||"",label:t.name,checked:t.isChecked,onChange:function(){return e.checkbox(a)}})))}))))),r.a.createElement(h.a,{variant:"dark",title:"Split",className:"split_btn",type:"submit"},"Finally, Split It")))},A=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)(""),c=Object(d.a)(l,2),u=c[0],o=c[1],m=Object(n.useState)(""),s=Object(d.a)(m,2),i=s[0],p=s[1],E=Object(n.useState)(""),b=Object(d.a)(E,2),f=b[0],h=b[1],v=Object(n.useState)([{name:null,isChecked:!1}]),g=Object(d.a)(v,2),w=g[0],k=g[1],x=Object(n.useState)(""),O=Object(d.a)(x,2),j=O[0],y=O[1];return r.a.createElement("center",null,r.a.createElement("p",null,r.a.createElement(D.a,null,"React JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(D.a,null,"REST API")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(D.a,null,"Node JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(D.a,null,"Express")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(D.a,null,"mongoDB")),r.a.createElement(_,{ExpName:function(e){return o(e.target.value)},date:function(e){return p(e.target.value)},Amount:function(e){return h(e.target.value)},Member:function(e,t){var a=Object(N.a)(w);a[t].name=e.target.value,k(a)},addExpense:function(e){e.preventDefault();var t={expense_name:u,date:i,members:w,amount:Number(f),by_whom:j};C.addData(t).then(function(e){a(t.concat(e)),o(""),p(""),h(""),k([]),y("")})},addMember:function(){var e=Object(N.a)(w);e.push({name:null,isChecked:!1}),k(e)},rmMember:function(e){var t=Object(N.a)(w);t.splice(e,1),k(t)},members:w,expenseName:u,dateValue:i,amount:f,radio:function(e){return y(e.target.value)},checkbox:function(e){var t=Object(N.a)(w);t[e].isChecked=!t[e].isChecked,k(t)}}),r.a.createElement("footer",{className:"bottom"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")," ",r.a.createElement("br",null)))},U=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){C.getData().then(function(e){return l(e)})},[]);return r.a.createElement(B.a,null,r.a.createElement(M.a,null,a.map(function(e){var t=new Date(e.date),a=e.members.filter(function(e){return!0===e.isChecked}),n=a.length,l=e.amount/n;return n>0?r.a.createElement(I.a,null,r.a.createElement(q.a,{key:e.id},r.a.createElement("h5",null,"Expense Name - ",e.expense_name),r.a.createElement("p",null,"Amount - ",e.amount),r.a.createElement("p",null,"Date - ","".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())),r.a.createElement("p",null,"By - ",e.by_whom),r.a.createElement("p",null,"Members ",a.map(function(e){return"".concat(e.name," ").concat(l," ")})))):r.a.createElement(I.a,null,r.a.createElement(q.a,{key:e.id},r.a.createElement("h5",null,"Expense Name - ",e.expense_name),r.a.createElement("p",null,"Amount - ",e.amount),r.a.createElement("p",null,"Date - ","".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())),r.a.createElement("p",null,"By -",e.by_whom),r.a.createElement("p",null,"Members ",e.by_whom," ",e.amount)))})))},L=function(){return r.a.createElement(u.a,null,r.a.createElement(S,null),r.a.createElement(o.a,{exact:!0,path:"/",component:A}),r.a.createElement(o.a,{exact:!0,path:"/user",render:function(){return r.a.createElement(U,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(93);c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.923ed67e.chunk.js.map