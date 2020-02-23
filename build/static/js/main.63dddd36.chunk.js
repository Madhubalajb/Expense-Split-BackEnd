(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){e.exports=a(97)},56:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),u=(a(56),a(22)),o=a(8),s=a(101),i=a(99),m=a(103),p=a(100),d=a(47),E=a(105),b=a(104),f=function(e){return r.a.createElement(i.a,{className:"split"},r.a.createElement(m.a,{onSubmit:e.addExpense},r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h4",null,"1. Name your Expense"),r.a.createElement(m.a.Control,{onChange:e.ExpName,placeholder:"Expense Name",required:!0}),r.a.createElement(m.a.Control,{onChange:e.date,type:"date",placeholder:"Date",required:!0}))),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h4",null,"2. Add your group"),e.members.map(function(t,a){return r.a.createElement(p.a,{key:a},r.a.createElement(m.a.Control,{className:"col-sm-9",value:t.name||"",placeholder:"Person Name",onChange:function(t){return e.Member(t,a)},required:!0}),r.a.createElement(b.a,{className:"col-sm-2 minusBtn",variant:"dark",title:"delete member",onClick:function(){return e.rmMember(a)}},r.a.createElement("b",null,"-")))}),r.a.createElement(b.a,{variant:"dark",title:"add member",onClick:function(t){return e.addMember(t)}},r.a.createElement("b",null,"+")))),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h4",null,"3. Enter the Expense"),r.a.createElement(m.a.Control,{onChange:e.Amount,placeholder:"Amount",required:!0}),r.a.createElement(p.a,null,r.a.createElement("b",null,"By whom:")),r.a.createElement(p.a,null,e.members.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(d.a,null,r.a.createElement(m.a.Check,{type:"radio",value:t.name||"",label:t.name,onChange:e.radio})))})),r.a.createElement(p.a,null,r.a.createElement("b",null,"To whom:")),r.a.createElement(p.a,null,e.members.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(d.a,null,r.a.createElement(m.a.Check,{type:"checkbox",value:t.name||"",label:t.name,checked:t.isChecked,onChange:function(t){return e.checkbox(t,a)}})))}))))),r.a.createElement(b.a,{variant:"dark",title:"Split",className:"split_btn",type:"submit"},"Finally, Split It")))},h=function(e){return r.a.createElement("div",null)},v=a(102),g=function(e){return r.a.createElement(v.a,null,r.a.createElement(v.a.Header,{closeButton:!0},e.expense_name),r.a.createElement(v.a.Body,null,"Date: ",e.date,"Amount spent: ",e.amount))},w=a(5),k=a.n(w),j=a(11),x=function(e){return r.a.createElement(v.a,{show:e.show,onHide:e.Close},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(v.a.Body,null,r.a.createElement(m.a,{onSubmit:e.login},r.a.createElement(m.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(m.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement(b.a,{type:"submit"},"Log In"))))},O=function(e){return r.a.createElement(v.a,{show:e.show,onHide:e.Close},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(v.a.Body,null,r.a.createElement(m.a,{onSubmit:e.signup},r.a.createElement(m.a.Control,{placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(m.a.Control,{placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(m.a.Control,{placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement(b.a,{type:"submit"},"Sign Up"))))},C=a(15),y=a.n(C),S={login:function(){var e=Object(j.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N={signup:function(){var e=Object(j.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/signup",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},B=null,D={setToken:function(e){B="bearer ".concat(e)},getData:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/expenses");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(j.a)(k.a.mark(function e(t){var a,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:B}},e.next=3,y.a.post("/api/expenses",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(j.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("".concat("/api/expenses","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(j.a)(k.a.mark(function e(t,a){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.put("".concat("/api/expenses","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},q=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),s=u[0],i=u[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),d=p[0],E=p[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),v=h[0],g=h[1],w=Object(n.useState)(""),C=Object(o.a)(w,2),y=C[0],B=C[1],q=Object(n.useState)([]),A=Object(o.a)(q,2),I=(A[0],A[1]),M=function(e){return g(e.target.value)},J=function(e){return B(e.target.value)},U=function(){var e=Object(j.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,S.login({username:v,password:y});case 4:a=e.sent,window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(a)),D.setToken(a.token),I(a),g(""),B(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,N.signup({name:d,username:v,password:y});case 4:e.sent,I(""),g(""),B(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(b.a,{onClick:function(){return c(!0)}},"log In"),r.a.createElement(x,{show:a,Close:function(){return c(!1)},username:M,pwd:J,login:U}),r.a.createElement(b.a,{onClick:function(){return i(!0)}},"Sign Up"),r.a.createElement(O,{show:s,Close:function(){return i(!1)},name:function(e){return E(e.target.value)},username:M,pwd:J,signup:H}))},A=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],p=i[1],d=Object(n.useState)(""),E=Object(o.a)(d,2),b=E[0],v=E[1],w=Object(n.useState)(""),k=Object(o.a)(w,2),j=k[0],x=k[1],O=Object(n.useState)([{name:null,isChecked:!1}]),C=Object(o.a)(O,2),y=C[0],S=C[1],N=Object(n.useState)(""),B=Object(o.a)(N,2),A=B[0],I=B[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"login-btns"},r.a.createElement(q,null)),r.a.createElement("center",null,r.a.createElement("h2",null,"Expense / Split"),r.a.createElement("p",null,r.a.createElement(s.a,null,"React JS")," + ",r.a.createElement(s.a,null,"REST API")," + ",r.a.createElement(s.a,null,"Node JS")," + ",r.a.createElement(s.a,null,"Express")," + ",r.a.createElement(s.a,null,"MongoDB")),r.a.createElement(f,{ExpName:function(e){return p(e.target.value)},date:function(e){return v(e.target.value)},Amount:function(e){return x(e.target.value)},Member:function(e,t){var a=Object(u.a)(y);a[t].name=e.target.value,S(a)},addExpense:function(e){e.preventDefault();var t={id:a.length+1,expense_name:m,date:b,members:y,amount:Number(j),by_whom:A};D.addData(t).then(function(e){c(a.concat(e)),p(""),v(""),x(""),S([]),I("")})},addMember:function(){var e=Object(u.a)(y);e.push({name:null,isChecked:!1}),S(e)},rmMember:function(e){var t=Object(u.a)(y);t.splice(e,1),S(t)},members:y,radio:function(e){return I(e.target.value)},checkbox:function(e){var t=Object(u.a)(y);t[e].isChecked=!t[e].isChecked,S(t)}}),r.a.createElement(h,null),r.a.createElement(g,{dummy:a[0]}),r.a.createElement("p",{className:"bottom"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")," ",r.a.createElement("br",null),"On live since July 2019")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96);l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.63dddd36.chunk.js.map