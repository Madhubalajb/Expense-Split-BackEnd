(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,a,t){e.exports=t.p+"static/media/reactjs.815bfb21.png"},60:function(e,a,t){e.exports=t.p+"static/media/nodejs.dacb853d.png"},61:function(e,a,t){e.exports=t.p+"static/media/mongodb.3bd34a07.png"},66:function(e,a,t){e.exports=t(97)},71:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),s=(t(71),t(36)),m=t(25),o=t(7),i=t.n(o),u=t(10),d=t(18),p=t(6),E=t(99),f=t(100),h=t(57),b=t(106),v=function(e){var a=e.firstCard,t=e.secondCard,n=e.thirdCard,l=e.finalCard,c=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h4",null,e.expName)),r.a.createElement("div",{className:"flexDisplay blocks"},r.a.createElement("i",{className:"material-icons calendar"},"event"),r.a.createElement("span",null,new Date(e.date).toDateString())))},s=function(){return r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Your Group"),e.members.map(function(e,a){return r.a.createElement("div",{key:a,className:"flexDisplay"},r.a.createElement("i",{className:"material-icons person"},"person"),r.a.createElement("span",null,e.name))}))};return a&&t&&n&&!l?r.a.createElement(b.a,{className:"infoCard"},c(),r.a.createElement("hr",null),s(),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Expenses"),e.expenses.map(function(e,a){var t=e.to_whom.filter(function(e){return!0===e.isChecked});return r.a.createElement("div",{className:"blocks",key:a},r.a.createElement("div",{className:"flexDisplay"},r.a.createElement("i",{className:"material-icons white"},"navigate_next"),r.a.createElement("span",{className:"white"},"Amount -"),r.a.createElement("span",null,e.amount)),r.a.createElement("div",null,r.a.createElement("span",{className:"white"},"By -"),r.a.createElement("span",null,e.by_whom)),r.a.createElement("div",null,r.a.createElement("span",{className:"white"},"To -"),t.map(function(e,a){return r.a.createElement("span",{key:a},e.name)})))}))):a&&t&&!n&&!l?r.a.createElement(b.a,{className:"infoCard"},c(),r.a.createElement("hr",null),s(),r.a.createElement("hr",null),r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"Almost there! one more to go"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"3"),"Add your expenses"))):!a||t||n||l?a&&t&&n&&l?r.a.createElement(b.a,{className:"infoCard"},c(),r.a.createElement("hr",null),s(),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Splitted Expenses"),e.splitted.map(function(e,a){return r.a.createElement("div",{key:a},e.splittedExp.map(function(a,t){return r.a.createElement("div",{key:t,className:"flexDisplay"},r.a.createElement("span",null,e.member),r.a.createElement("div",{className:"flexDisplay",style:{color:"white",paddingLeft:"5px",paddingRight:"5px"}},r.a.createElement("i",{className:"material-icons"},"trending_flat"),r.a.createElement("span",{style:{margin:"auto"}},a.amount)),r.a.createElement("span",null,a.to))}))}))):a||t||n||l?void 0:r.a.createElement(b.a,{className:"infoCard"},r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"Please proceed with the three steps to split your expenses."),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"1"),"Name your thing"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"2"),"Make your group"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"3"),"Add your expenses"))):r.a.createElement(b.a,{className:"infoCard"},c(),r.a.createElement("hr",null),r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"C'mon two more steps to go..."),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"2"),"Make your group"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"3"),"Add your expenses")))},g=t(103),x=t(101),N=function(e){var a=Object(n.useState)(""),t=Object(p.a)(a,2),l=t[0],c=t[1],s=function(a){e.handleRadio(a),function(e){c(e.target.value)}(a)};return r.a.createElement(E.a,{className:"split"},r.a.createElement(g.a,{onSubmit:function(a){a.preventDefault(),e.splitExpenses(),c(""),document.getElementById("expenseForm").reset()},id:"expenseForm"},r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement("center",null,r.a.createElement("h4",{className:"one"},"1")),r.a.createElement(g.a.Control,{onChange:e.handleExpName,placeholder:"C'mon Name it",required:!0}),r.a.createElement(g.a.Control,{onChange:e.handleDate,type:"date",required:!0}),r.a.createElement("center",null,r.a.createElement(x.a,{title:"Name your thing",onClick:e.handleFirst},"Name your thing")))),r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement("center",null,r.a.createElement("h4",{className:"two"},"2")),e.members.map(function(a,t){return r.a.createElement("div",{className:"addPerson",key:t},r.a.createElement(g.a.Control,{placeholder:"Person Name",onChange:function(a){return e.handleMember(a,t)}}),r.a.createElement("i",{className:"material-icons minusBtn",title:"delete member",onClick:function(){return e.removeMember(t)}},"delete"))}),r.a.createElement("center",null,r.a.createElement("i",{className:"material-icons addBtn",title:"add member",onClick:function(a){return e.addMember(a)}},"add_circle")),r.a.createElement("center",null,r.a.createElement(x.a,{title:"form group",onClick:e.handleSecond},"Make your group")))),r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement("center",null,r.a.createElement("h4",{className:"three"},"3")),r.a.createElement(g.a.Control,{onChange:e.handleAmount,placeholder:"Amount"}),r.a.createElement(f.a,{style:{color:"#003B73",fontWeight:600}},"By whom"),r.a.createElement(f.a,null,e.members.map(function(e,a){return r.a.createElement(h.a,{key:a},r.a.createElement(g.a.Check,{type:"radio",checked:l===e.name,value:e.name||"",label:e.name,onChange:function(e){return s(e)}}))})),r.a.createElement(f.a,{style:{color:"#003B73",fontWeight:600}},"To whom"),r.a.createElement(f.a,null,e.to_whom.map(function(a,t){return r.a.createElement(h.a,{key:t},r.a.createElement(g.a.Check,{type:"checkbox",label:a.name,checked:a.isChecked,value:a.name||"",onChange:function(a){return e.handleCheckbox(a,t)}}))})),r.a.createElement("center",null,r.a.createElement("i",{className:"material-icons addBtn",title:"add more expense",onClick:function(a){return e.addExpenseModal(a)}},"add_circle")),r.a.createElement("center",null,r.a.createElement(x.a,{title:"add the expenses",onClick:e.addExpenseToInfoCard},"Add the expenses"))))),r.a.createElement("center",null,r.a.createElement(x.a,{title:"Split the expenses",className:"split_btn",type:"submit"},"Finally, SPLIT"))))},k=function(e){return null===e.msg?null:e.msg},w=t(102),y=function(e){var a=Object(n.useState)(""),t=Object(p.a)(a,2),l=t[0],c=t[1],s=function(a){e.handleRadio(a),function(e){c(e.target.value)}(a)};return r.a.createElement(w.a,{className:"newExpModal",show:e.show,onHide:e.Close},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement("h5",null,"Enter the new Expense details")),r.a.createElement(w.a.Body,null,r.a.createElement(g.a,{onSubmit:e.addExpenseModal},r.a.createElement(g.a.Control,{placeholder:"Amount",onChange:e.handleAmount,value:e.amount||"",required:!0}),r.a.createElement(f.a,{className:"by-to"},"By whom"),r.a.createElement(f.a,null,e.members.map(function(e,a){return r.a.createElement(h.a,{key:a},r.a.createElement(g.a.Check,{type:"radio",checked:l===e.name,value:e.name||"",label:e.name,onChange:function(e){return s(e)}}))})),r.a.createElement(f.a,{className:"by-to"},"To whom"),r.a.createElement(f.a,null,e.to_whom.map(function(a,t){return r.a.createElement(h.a,{key:t},r.a.createElement(g.a.Check,{type:"checkbox",value:a.name||"",label:a.name,checked:a.isChecked,onChange:function(a){return e.handleCheckbox(a,t)}}))})),r.a.createElement("center",null,r.a.createElement(x.a,{type:"submit"},"Add Expense")))))},C=t(20),j=t.n(C),O="/api/expenses",S=null,_={setToken:function(e){S="bearer ".concat(e)},getData:function(){var e=Object(u.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(O);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(u.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:S}},e.next=3,j.a.post(O,a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(u.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:S}},e.next=3,j.a.delete("".concat(O,"/").concat(a),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(u.a)(i.a.mark(function e(a,t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={header:{Authorization:S}},e.next=3,j.a.put("".concat(O,"/").concat(a),t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},T=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(p.a)(c,2),m=s[0],o=s[1],b=Object(n.useState)(""),g=Object(p.a)(b,2),x=g[0],w=g[1],C=Object(n.useState)(""),j=Object(p.a)(C,2),O=j[0],S=j[1],T=Object(n.useState)(""),D=Object(p.a)(T,2),B=D[0],A=D[1],M=Object(n.useState)([{name:null,isChecked:!1},{name:null,isChecked:!1}]),I=Object(p.a)(M,2),G=I[0],P=I[1],U=Object(n.useState)([{name:null},{name:null}]),L=Object(p.a)(U,2),R=L[0],q=L[1],H=Object(n.useState)([]),J=Object(p.a)(H,2),F=J[0],W=J[1],z=Object(n.useState)(!1),Y=Object(p.a)(z,2),V=Y[0],$=Y[1],K=Object(n.useState)(!1),Q=Object(p.a)(K,2),X=Q[0],Z=Q[1],ee=Object(n.useState)(!1),ae=Object(p.a)(ee,2),te=ae[0],ne=ae[1],re=Object(n.useState)(!1),le=Object(p.a)(re,2),ce=le[0],se=le[1],me=Object(n.useState)(!1),oe=Object(p.a)(me,2),ie=oe[0],ue=oe[1],de=Object(n.useState)(!1),pe=Object(p.a)(de,2),Ee=pe[0],fe=pe[1],he=Object(n.useState)([]),be=Object(p.a)(he,2),ve=be[0],ge=be[1],xe=function(){return ne(!0)},Ne=function(){return ue(!1)},ke=function(e){return S(e.target.value)},we=function(e){return A(e.target.value)},ye=function(e,a){var t=Object(d.a)(G);t[a].name=e.target.value,t[a].isChecked=!t[a].isChecked,P(t)},Ce=function(e){l(e),setTimeout(function(){l(null)},3e3)},je=function(){S(""),A("");var e=Object(d.a)(G);P(e.map(function(e){return{name:e.name,isChecked:!1}}))},Oe=function(){var e={amount:Number(O),by_whom:B,to_whom:G};if(0!==e.amount&&""!==e.by_whom&&0!==e.to_whom.length&&!1===isNaN(e.amount)){var a=Object(d.a)(F);a.push(e),W(a),fe(!0),je()}else!0===isNaN(e.amount)?Ce(r.a.createElement("div",{id:"snackbar"},"Please enter a valid Amount")):Ce(r.a.createElement("div",{id:"snackbar"},"Please enter all the Expense details"))},Se=function(e){e.preventDefault(),Oe(),ie?Ne():ue(!0)},_e=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(F).then(function(e){Ee?(xe(),fe(!1)):(Oe(),xe(),fe(!1))}).catch(function(e){Ce(r.a.createElement("div",{id:"snackbar"},"Couldn't split expense"))});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Te=function(e){var a=R.map(function(e){return{member:e.name,splittedExp:[]}});e.map(function(e){var t=e.amount,n=e.by_whom,r=e.to_whom.filter(function(e){return!0===e.isChecked}),l=Math.round(t/r.length*10/10);r.forEach(function(e){var t=a.findIndex(function(a){return a.member===e.name&&a.member!==n});-1!==t&&a[t].splittedExp.push({to:n,amount:l})})}),function(e){e.forEach(function(a,t){var n,r,l={name:a.member,amtToGive:0},c={name:null,amtToGive:0};a.splittedExp.forEach(function(a,s){if(c.name=a.to,l.amtToGive=a.amount,-1!==(n=e.findIndex(function(e){return e.member===c.name}))&&-1!==(r=e[n].splittedExp.findIndex(function(e){return e.to===l.name}))&&(c.amtToGive=e[n].splittedExp[r].amount),0!==c.amtToGive&&l.amtToGive>=c.amtToGive){var m=l.amtToGive-c.amtToGive;0===m?(e[t].splittedExp.splice(s,1),e[n].splittedExp.splice(r,1)):(e[t].splittedExp[s].amount=Math.abs(m),e[n].splittedExp.splice(r,1))}else if(0!==c.amtToGive&&l.amtToGive<c.amtToGive){var o=c.amtToGive-l.amtToGive;e[t].splittedExp.splice(s,1),e[n].splittedExp[r].amount=Math.abs(o)}})}),e=e.filter(function(e){return 0!==e.splittedExp.length}),ge(e)}(a)};return r.a.createElement(E.a,{className:"home"},r.a.createElement(k,{msg:t}),r.a.createElement(y,{show:ie,Close:Ne,addExpenseModal:Se,members:R,to_whom:G,amount:O,handleAmount:ke,handleRadio:we,handleCheckbox:ye}),r.a.createElement(f.a,null,r.a.createElement(h.a,{sm:9},r.a.createElement(N,{handleExpName:function(e){return o(e.target.value)},expName:m,handleDate:function(e){return w(e.target.value)},date:x,to_whom:G,handleMember:function(e,a){var t=Object(d.a)(R);t[a].name=e.target.value,q(t);var n=Object(d.a)(G);n[a].name=e.target.value,P(n)},addMember:function(){var e=Object(d.a)(R);e.push({name:null}),q(e);var a=Object(d.a)(G);a.push({name:null,isChecked:!1}),P(a)},removeMember:function(e){var a=Object(d.a)(R);a.splice(e,1),q(a);var t=Object(d.a)(G);t.splice(e,1),P(t)},members:R,addExpenseModal:Se,splitExpenses:function(){var e={expense_name:m,date:x,members:R,expenses:F,splitted:ve};""!==e.expense_name&&""!==e.date&&0!==e.members.length&&0!==e.expenses.length&&0!==e.splitted.length?_.addData(e).then(function(e){se(!0)}).catch(function(e){Ce(r.a.createElement("div",{id:"snackbar"},"Validation failed, Please verify expense details."))}):Ce(r.a.createElement("div",{id:"snackbar"},"Please enter all the details"))},handleAmount:ke,amount:O,handleRadio:we,handleCheckbox:ye,handleFirst:function(){return $(!0)},handleSecond:function(){return Z(!0)},handleThird:xe,addExpenseToInfoCard:_e})),r.a.createElement(h.a,{sm:3},r.a.createElement(v,{expName:m,date:x,members:R,expenses:F,firstCard:V,secondCard:X,thirdCard:te,finalCard:ce,splitted:ve}))))},D=t(59),B=t.n(D),A=t(60),M=t.n(A),I=t(61),G=t.n(I),P=function(){return r.a.createElement("center",{className:"container"},r.a.createElement("div",null,r.a.createElement("h2",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split"),r.a.createElement("div",{className:"logos"},r.a.createElement("span",{className:"logo react"},r.a.createElement("img",{src:B.a,alt:"Reactjs",title:"React"})),r.a.createElement("span",{className:"plus"},"+"),r.a.createElement("span",{className:"logo node"},r.a.createElement("img",{src:M.a,alt:"Nodejs",title:"Node JS"})),r.a.createElement("span",{className:"plus"},"+"),r.a.createElement("span",{className:"logo mongodb"},r.a.createElement("img",{src:G.a,alt:"Mongodb",title:"mongo DB"}))),r.a.createElement("ol",{className:"stack"},r.a.createElement("li",{className:"tech"},"Express"),r.a.createElement("li",{className:"tech"},"REST API"),r.a.createElement("li",{className:"tech"},"SASS"),r.a.createElement("li",{className:"tech"},"Bootstrap"))),r.a.createElement("p",{className:"footer"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")))},U=t(105),L=t(104),R=function(e){return r.a.createElement(w.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(w.a.Body,null,r.a.createElement(g.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(g.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(x.a,{type:"submit"},"Log In")))))},q=function(e){return r.a.createElement(w.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(w.a.Body,null,r.a.createElement(g.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(g.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(g.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(x.a,{type:"submit"},"Sign Up")))))},H={login:function(){var e=Object(u.a)(i.a.mark(function e(a){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},J={signup:function(){var e=Object(u.a)(i.a.mark(function e(a){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/users",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},F=function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],l=a[1],c=function(){return l(!1)},m=Object(n.useState)(!1),o=Object(p.a)(m,2),d=o[0],E=o[1],f=function(){return E(!1)},h=Object(n.useState)(""),b=Object(p.a)(h,2),v=b[0],g=b[1],x=Object(n.useState)(""),N=Object(p.a)(x,2),w=N[0],y=N[1],C=Object(n.useState)(""),j=Object(p.a)(C,2),O=j[0],S=j[1],T=Object(n.useState)(""),D=Object(p.a)(T,2),B=D[0],A=D[1],M=Object(n.useState)(""),I=Object(p.a)(M,2),G=I[0],P=I[1],U=function(e){P(e),setTimeout(function(){P("")},3e3)},F=function(){y(""),S(""),A(""),c(),f()};Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var a=JSON.parse(e);g(a),_.setToken(a.token)}},[]);var W=function(e){return S(e.target.value)},z=function(e){return A(e.target.value)},Y=function(){var e=Object(u.a)(i.a.mark(function e(a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,H.login({username:O,password:B}).then(function(e){window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(e)),_.setToken(e.token),g(e),F(),U(r.a.createElement("div",{id:"snackbar"},"Hi ",e.username," ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_satisfied")))}).catch(function(e){U(r.a.createElement("div",{id:"snackbar"},"Invalid Username / Password ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_dissatisfied"))),F()});case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark(function e(a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,J.signup({name:w,username:O,password:B}).then(function(e){U(r.a.createElement("div",{id:"snackbar"},"User ",e.name," added ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_satisfied"))),F()}).catch(function(e){U(r.a.createElement("div",{id:"snackbar"},"Something went wrong ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_dissatisfied"))),F()});case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return""===v?r.a.createElement("div",null,r.a.createElement(k,{msg:G}),r.a.createElement(L.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(R,{show:t,Close:c,username:W,pwd:z,login:Y}),r.a.createElement(L.a.Link,{onClick:function(){return E(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(q,{show:d,Close:f,name:function(e){return y(e.target.value)},username:W,pwd:z,signup:V})):r.a.createElement("div",null,r.a.createElement(k,{msg:G}),r.a.createElement(L.a.Link,null,r.a.createElement(s.b,{to:"/user"},r.a.createElement("b",null,v.name))),r.a.createElement(L.a.Link,{onClick:function(){U(r.a.createElement("div",{id:"snackbar"},"Bye ",v.username," ",r.a.createElement("i",{className:"material-icons face"},"sentiment_dissatisfied"))),g(""),window.localStorage.removeItem("logged-Expense-Split-User"),_.setToken("")}},r.a.createElement("b",null,"Logout")))},W=function(){return r.a.createElement(U.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(U.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(U.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(U.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(L.a,{className:"ml-auto"},r.a.createElement(F,null))))},z=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(p.a)(c,2),m=s[0],o=s[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");e&&_.getData().then(function(a){return l(a.filter(function(a){return a.user.id===JSON.parse(e).id}))})},[]);var d=function(e){o(e),setTimeout(function(){o("")},3e3)},v=function(){},g=function(){var e=Object(u.a)(i.a.mark(function e(a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Wanna delete?")){e.next=4;break}return e.next=4,_.deleteData(a.id).then(function(e){l(t.filter(function(e){return e.id!==a.id})),d(r.a.createElement("div",{id:"snackbar"},"Deleted!"))}).catch(function(e){d(r.a.createElement("div",{id:"snackbar"},"Couldn't delete ",a.expense_name))});case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(E.a,{fluid:!0},r.a.createElement(k,{msg:m}),r.a.createElement(f.a,{className:"row-cols-4"},t.map(function(e,a){return r.a.createElement(h.a,null,r.a.createElement(b.a,{className:"infoCard",key:a},r.a.createElement("div",null,r.a.createElement("div",{className:"flexDisplay"},r.a.createElement("h4",null,e.expense_name),r.a.createElement("span",{className:"tools"},r.a.createElement("i",{className:"material-icons edit",title:"Edit",onClick:v},"edit"),r.a.createElement("i",{className:"material-icons delete",title:"delete",onClick:function(){return g(e)}},"delete"))),r.a.createElement("div",{className:"flexDisplay blocks"},r.a.createElement("i",{className:"material-icons calendar"},"event"),r.a.createElement("span",null,new Date(e.date).toDateString()))),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Your Group"),e.members.map(function(e,a){return r.a.createElement("div",{key:a,className:"flexDisplay"},r.a.createElement("i",{className:"material-icons person"},"person"),r.a.createElement("span",null,e.name))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Expenses"),e.expenses.map(function(e,a){var t=e.to_whom.filter(function(e){return!0===e.isChecked});return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"flexDisplay"},r.a.createElement("i",{className:"material-icons white"},"navigate_next"),r.a.createElement("span",{className:"white"},"Amount"),r.a.createElement("span",null,e.amount)),r.a.createElement("div",null,r.a.createElement("span",{className:"white"},"By"),r.a.createElement("span",null,e.by_whom)),r.a.createElement("div",null,r.a.createElement("span",{className:"white"},"To"),t.map(function(e,a){return r.a.createElement("span",{key:a},e.name)})))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Splitted Expenses"),e.splitted.map(function(e,a){return r.a.createElement("div",{key:a},e.splittedExp.map(function(a,t){return r.a.createElement("div",{key:t,className:"flexDisplay"},r.a.createElement("span",null,e.member),r.a.createElement("div",{className:"flexDisplay",style:{color:"white",paddingLeft:"5px",paddingRight:"5px"}},r.a.createElement("i",{className:"material-icons"},"trending_flat"),r.a.createElement("span",{style:{margin:"auto"}},a.amount)),r.a.createElement("span",null,a.to))}))}))))})))},Y=function(){return r.a.createElement(s.a,null,r.a.createElement(W,null),r.a.createElement(m.a,{exact:!0,path:"/",component:T}),r.a.createElement(m.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(m.a,{exact:!0,path:"/user",render:function(){return r.a.createElement(z,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(96);c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.a62a8d4a.chunk.js.map