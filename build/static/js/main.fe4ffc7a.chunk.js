(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),u=(t(69),t(27)),o=t(9),s=t(120),m=t(124),i=t(123),p=t(5),d=t.n(p),E=t(11),b=t(122),f=t(121),h=t(117),v=function(e){return r.a.createElement(b.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Log In")))))},g=function(e){return r.a.createElement(b.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(f.a.Control,{placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Sign Up")))))},w=t(18),k=t.n(w),x={login:function(){var e=Object(E.a)(d.a.mark(function e(a){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},O={signup:function(){var e=Object(E.a)(d.a.mark(function e(a){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/users",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},j=null,C={setToken:function(e){j="bearer ".concat(e)},getData:function(){var e=Object(E.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/expenses");case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(E.a)(d.a.mark(function e(a){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:j}},e.next=3,k.a.post("/api/expenses",a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(E.a)(d.a.mark(function e(a){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat("/api/expenses","/").concat(a));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(E.a)(d.a.mark(function e(a,t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("".concat("/api/expenses","/").concat(a),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},S=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],c=function(){return l(!1)},u=Object(n.useState)(!1),s=Object(o.a)(u,2),m=s[0],p=s[1],b=function(){return p(!1)},f=Object(n.useState)(""),h=Object(o.a)(f,2),w=h[0],k=h[1],j=Object(n.useState)(""),S=Object(o.a)(j,2),y=S[0],N=S[1],B=Object(n.useState)(""),D=Object(o.a)(B,2),I=D[0],q=D[1],M=Object(n.useState)([]),U=Object(o.a)(M,2),L=U[0],T=U[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var a=JSON.parse(e);T(a),C.setToken(a.token)}},[]);var A=function(e){return N(e.target.value)},J=function(e){return q(e.target.value)},_=function(){var e=Object(E.a)(d.a.mark(function e(a){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,x.login({username:y,password:I});case 4:t=e.sent,window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(t)),C.setToken(t.token),T(t),N(""),q(""),c(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(a){return e.apply(this,arguments)}}(),H=function(){var e=Object(E.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,O.signup({name:w,username:y,password:I});case 4:e.sent,T(""),N(""),q(""),b(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}();return""===L?r.a.createElement("div",null,r.a.createElement(i.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(v,{show:t,Close:c,username:A,pwd:J,login:_}),r.a.createElement(i.a.Link,{onClick:function(){return p(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(g,{show:m,Close:b,name:function(e){return k(e.target.value)},username:A,pwd:J,signup:H})):r.a.createElement("div",null,r.a.createElement(i.a.Link,null,r.a.createElement("b",null,L.username)),r.a.createElement(i.a.Link,{onClick:function(){T(""),window.localStorage.removeItem("logged-Expense-Split-User"),C.setToken("")}},r.a.createElement("b",null,"Logout")))},y=function(){return r.a.createElement(m.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(m.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(i.a,{className:"ml-auto"},r.a.createElement(S,null))))},N=t(118),B=t(119),D=t(59),I=t(125),q=function(e){return r.a.createElement(N.a,{className:"split"},r.a.createElement(f.a,{onSubmit:e.addExpense},r.a.createElement(B.a,null,r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement("h4",null,"1) Name your Expense"),r.a.createElement(f.a.Control,{onChange:e.ExpName,value:e.expenseName||"",placeholder:"Expense Name",required:!0}),r.a.createElement(f.a.Control,{onChange:e.date,value:e.dateValue,type:"date",placeholder:"Date",required:!0}))),r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement("h4",null,"2) Add your Group"),e.members.map(function(a,t){return r.a.createElement(B.a,{key:t},r.a.createElement(f.a.Control,{className:"col-sm-9",value:a.name||"",placeholder:"Person Name",onChange:function(a){return e.Member(a,t)},required:!0}),r.a.createElement(h.a,{className:"col-sm-2 minusBtn",variant:"dark",title:"delete member",onClick:function(){return e.rmMember(t)}},r.a.createElement("b",null,"-")))}),r.a.createElement(h.a,{className:"addBtn",variant:"dark",title:"add member",onClick:function(a){return e.addMember(a)}},r.a.createElement("b",null,"+")))),r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement("h4",null,"3) Enter the Expenses"),r.a.createElement(f.a.Control,{onChange:e.Amount,value:e.amount||"",placeholder:"Amount",required:!0}),r.a.createElement(B.a,null,r.a.createElement("b",null,"By whom:")),r.a.createElement(B.a,null,e.members.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(D.a,null,r.a.createElement(f.a.Check,{type:"radio",value:a.name||"",label:a.name,onChange:e.radio})))})),r.a.createElement(B.a,null,r.a.createElement("b",null,"To whom:")),r.a.createElement(B.a,null,e.members.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(D.a,null,r.a.createElement(f.a.Check,{type:"checkbox",value:a.name||"",label:a.name,checked:a.isChecked,onChange:function(){return e.checkbox(t)}})))}))))),r.a.createElement(h.a,{variant:"dark",title:"Split",className:"split_btn",type:"submit"},"Finally, Split It")))},M=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)(function(){C.getData().then(function(e){return l(e)})},[]);return r.a.createElement("div",null,function(e){e.map(function(e){return r.a.createElement(I.a,null,r.a.createElement("h3",null,e.expense_name),r.a.createElement("p",null,e.amount),r.a.createElement("p",null,e.date),r.a.createElement("p",null,e.by_whom),r.a.createElement("p",null,e.members[0].name))})}(t))},U=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(""),c=Object(o.a)(l,2),m=c[0],i=c[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),E=d[0],b=d[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),v=h[0],g=h[1],w=Object(n.useState)([{name:null,isChecked:!1}]),k=Object(o.a)(w,2),x=k[0],O=k[1],j=Object(n.useState)(""),S=Object(o.a)(j,2),N=S[0],B=S[1];return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("center",null,r.a.createElement("p",null,r.a.createElement(s.a,null,"React JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"REST API")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"Node JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"Express")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(s.a,null,"mongoDB")),r.a.createElement(q,{ExpName:function(e){return i(e.target.value)},date:function(e){return b(e.target.value)},Amount:function(e){return g(e.target.value)},Member:function(e,a){var t=Object(u.a)(x);t[a].name=e.target.value,O(t)},addExpense:function(e){e.preventDefault();var a={id:a.length+1,expense_name:m,date:E,members:x,amount:Number(v),by_whom:N};C.addData(a).then(function(e){t(a.concat(e)),i(""),b(""),g(""),O([]),B("")})},addMember:function(){var e=Object(u.a)(x);e.push({name:null,isChecked:!1}),O(e)},rmMember:function(e){var a=Object(u.a)(x);a.splice(e,1),O(a)},members:x,expenseName:m,dateValue:E,amount:v,radio:function(e){return B(e.target.value)},checkbox:function(e){var a=Object(u.a)(x);a[e].isChecked=!a[e].isChecked,O(a)}}),r.a.createElement(M,null),r.a.createElement("footer",{className:"bottom"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")," ",r.a.createElement("br",null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(114);c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,a,t){e.exports=t(115)},69:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.fe4ffc7a.chunk.js.map