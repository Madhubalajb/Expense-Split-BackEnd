(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,a,t){e.exports=t(94)},68:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),u=(t(68),t(36)),o=t(23),m=t(103),s=t(102),i=t(7),p=t.n(i),d=t(13),E=t(9),b=t(100),f=t(101),h=t(96),v=function(e){return r.a.createElement(b.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Log In")))))},g=function(e){return r.a.createElement(b.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(f.a.Control,{placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(f.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(h.a,{type:"submit"},"Sign Up")))))},w=t(19),k=t.n(w),x={login:function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},O={signup:function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/users",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},j=function(e){return null===e.msg?null:e.msg},y=null,C={setToken:function(e){y="bearer ".concat(e)},getData:function(){var e=Object(d.a)(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/expenses");case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(d.a)(p.a.mark(function e(a){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:y}},e.next=3,k.a.post("/api/expenses",a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat("/api/expenses","/").concat(a));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(d.a)(p.a.mark(function e(a,t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("".concat("/api/expenses","/").concat(a),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},S=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],l=a[1],c=function(){return l(!1)},o=Object(n.useState)(!1),m=Object(E.a)(o,2),i=m[0],b=m[1],f=function(){return b(!1)},h=Object(n.useState)(""),w=Object(E.a)(h,2),k=w[0],y=w[1],S=Object(n.useState)(""),N=Object(E.a)(S,2),D=N[0],B=N[1],M=Object(n.useState)(""),I=Object(E.a)(M,2),_=I[0],q=I[1],A=Object(n.useState)([]),T=Object(E.a)(A,2),U=T[0],L=T[1],P=Object(n.useState)(""),J=Object(E.a)(P,2),H=J[0],F=J[1],V=function(e){F(e),setTimeout(function(){F("")},3e3)};Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var a=JSON.parse(e);L(a),C.setToken(a.token)}},[]);var R=function(e){return B(e.target.value)},W=function(e){return q(e.target.value)},Y=function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,x.login({username:D,password:_}).catch(function(e){V(r.a.createElement("div",{id:"snackbar"},"".concat(e)))});case 3:t=e.sent,window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(t)),C.setToken(t.token),L(t),B(""),q(""),c();case 10:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,O.signup({name:k,username:D,password:_});case 3:t=e.sent,V(r.a.createElement("div",{id:"snackbar"},"User ".concat(t.name," created"))),L(""),B(""),q(""),f();case 9:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return""===U?r.a.createElement("div",null,r.a.createElement(j,{msg:H}),r.a.createElement(s.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(v,{show:t,Close:c,username:R,pwd:W,login:Y}),r.a.createElement(s.a.Link,{onClick:function(){return b(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(g,{show:i,Close:f,name:function(e){return y(e.target.value)},username:R,pwd:W,signup:z})):r.a.createElement("div",null,r.a.createElement(j,{msg:H}),r.a.createElement(s.a.Link,null,r.a.createElement(u.b,{to:"/user"},r.a.createElement("b",null,U.name))),r.a.createElement(s.a.Link,{onClick:function(){L(""),window.localStorage.removeItem("logged-Expense-Split-User"),C.setToken("")}},r.a.createElement("b",null,"Logout")))},N=function(){return r.a.createElement(m.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(m.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(s.a,{className:"ml-auto"},r.a.createElement(S,null))))},D=t(30),B=t(99),M=t(97),I=t(98),_=t(58),q=t(104),A=function(e){return r.a.createElement(M.a,{className:"split"},r.a.createElement(f.a,{onSubmit:e.addExpense},r.a.createElement(I.a,null,r.a.createElement(_.a,null,r.a.createElement(q.a,null,r.a.createElement("h4",null,"1) Name your Expense"),r.a.createElement(f.a.Control,{onChange:e.ExpName,value:e.expenseName||"",placeholder:"Expense Name",required:!0}),r.a.createElement(f.a.Control,{onChange:e.date,value:e.dateValue,type:"date",placeholder:"Date",required:!0}))),r.a.createElement(_.a,null,r.a.createElement(q.a,null,r.a.createElement("h4",null,"2) Add your Group"),e.members.map(function(a,t){return r.a.createElement(I.a,{key:t},r.a.createElement(f.a.Control,{className:"col-sm-9",value:a.name||"",placeholder:"Person Name",onChange:function(a){return e.Member(a,t)},required:!0}),r.a.createElement(h.a,{className:"col-sm-2 minusBtn",variant:"dark",title:"delete member",onClick:function(){return e.rmMember(t)}},r.a.createElement("b",null,"-")))}),r.a.createElement(h.a,{className:"addBtn",variant:"dark",title:"add member",onClick:function(a){return e.addMember(a)}},r.a.createElement("b",null,"+")))),r.a.createElement(_.a,null,r.a.createElement(q.a,null,r.a.createElement("h4",null,"3) Enter the Expenses"),r.a.createElement(f.a.Control,{onChange:e.Amount,value:e.amt||"",placeholder:"Amount",required:!0}),r.a.createElement(I.a,null,r.a.createElement("b",null,"By whom:")),r.a.createElement(I.a,null,e.members.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(_.a,null,r.a.createElement(f.a.Check,{type:"radio",value:a.name||"",label:a.name,onChange:e.radio})))})),r.a.createElement(I.a,null,r.a.createElement("b",null,"To whom:")),r.a.createElement(I.a,null,e.members.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(_.a,null,r.a.createElement(f.a.Check,{type:"checkbox",value:a.name||"",label:a.name,checked:a.isChecked,onChange:function(){return e.checkbox(t)}})))}))))),r.a.createElement(h.a,{variant:"dark",title:"Split",className:"split_btn",type:"submit"},"Finally, Split It")))},T=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),u=Object(E.a)(c,2),o=u[0],m=u[1],s=Object(n.useState)(""),i=Object(E.a)(s,2),p=i[0],d=i[1],b=Object(n.useState)(""),f=Object(E.a)(b,2),h=f[0],v=f[1],g=Object(n.useState)([{name:null,isChecked:!1}]),w=Object(E.a)(g,2),k=w[0],x=w[1],O=Object(n.useState)(""),y=Object(E.a)(O,2),S=y[0],N=y[1],M=Object(n.useState)(""),I=Object(E.a)(M,2),_=I[0],q=I[1],T=function(e){q(e),setTimeout(function(){q(null)},3e3)};return r.a.createElement("center",null,r.a.createElement(j,{msg:_}),r.a.createElement("p",null,r.a.createElement(B.a,null,"React JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"REST API")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"Node JS")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"Express")," ",r.a.createElement("b",null,"+")," ",r.a.createElement(B.a,null,"mongoDB")),r.a.createElement(A,{ExpName:function(e){return m(e.target.value)},date:function(e){return d(e.target.value)},Amount:function(e){return v(e.target.value)},Member:function(e,a){var t=Object(D.a)(k);t[a].name=e.target.value,x(t)},addExpense:function(e){e.preventDefault();var a={expense_name:o,date:p,members:k,amount:Number(h),by_whom:S};""!==a.expense_name&&""!==a.date&&""!==a.amount&&""!==a.by_whom&&0!==a.members.length&&!0!==isNaN(a.amount)?(console.log(isNaN(a.amount)),C.addData(a).then(function(e){l(t.concat(e)),m(""),d(""),v(""),x([]),N("")}).catch(function(e){T(r.a.createElement("div",{id:"snackbar"},"Validation failed :( ",r.a.createElement("br",null),"Please verify your details"))})):!0===isNaN(a.amount)?T(r.a.createElement("div",{id:"snackbar"},"Please enter a valid Amount :)")):T(r.a.createElement("div",{id:"snackbar"},"Please enter all the details :)"))},addMember:function(){var e=Object(D.a)(k);e.push({name:null,isChecked:!1}),x(e)},rmMember:function(e){var a=Object(D.a)(k);a.splice(e,1),x(a)},members:k,expenseName:o,dateValue:p,amt:h,radio:function(e){return N(e.target.value)},checkbox:function(e){var a=Object(D.a)(k);a[e].isChecked=!a[e].isChecked,x(a)}}),r.a.createElement("footer",{className:"bottom"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")," ",r.a.createElement("br",null)))},U=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)(function(){C.getData().then(function(e){return l(e)})},[]);return r.a.createElement(M.a,null,r.a.createElement(I.a,{className:"row-cols-4"},t.map(function(e){var a=new Date(e.date),t=e.members.filter(function(e){return!0===e.isChecked}),n=t.length,l=e.amount/n;return n>0?r.a.createElement(_.a,null,r.a.createElement(q.a,{key:e.id},r.a.createElement("h5",null,"Expense Name - ",e.expense_name),r.a.createElement("p",null,"Amount - ",e.amount),r.a.createElement("p",null,"Date - ","".concat(a.getDate(),"/").concat(a.getMonth(),"/").concat(a.getFullYear())),r.a.createElement("p",null,"By - ",e.by_whom),r.a.createElement("p",null,"Members ",t.map(function(e){return"".concat(e.name," ").concat(l," ")})))):r.a.createElement(_.a,null,r.a.createElement(q.a,{key:e.id},r.a.createElement("h5",null,"Expense Name - ",e.expense_name),r.a.createElement("p",null,"Amount - ",e.amount),r.a.createElement("p",null,"Date - ","".concat(a.getDate(),"/").concat(a.getMonth(),"/").concat(a.getFullYear())),r.a.createElement("p",null,"By -",e.by_whom),r.a.createElement("p",null,"Members ",e.by_whom," ",e.amount)))})))},L=function(){return r.a.createElement(u.a,null,r.a.createElement(N,null),r.a.createElement(o.a,{exact:!0,path:"/",component:T}),r.a.createElement(o.a,{exact:!0,path:"/user",render:function(){return r.a.createElement(U,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93);c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.d4f29e2c.chunk.js.map