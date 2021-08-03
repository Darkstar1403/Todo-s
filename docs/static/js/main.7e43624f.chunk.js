(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(8),l=n.n(a),r=n(2),s=(n(14),n(6)),d=n(3),i=n(0),u=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),n=Object(r.a)(t,2),c=n[0],a=n[1];return[c,function(e){var t=e.target;a(Object(d.a)(Object(d.a)({},c),{},Object(s.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),c=Object(r.a)(n,3),a=c[0].description,l=c[1],u=c[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Add ToDo"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.trim().length<=1)){var n={id:(new Date).getTime(),desc:a,done:!1};t(n),u()}},children:[Object(i.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Learn...",autoComplete:"off",value:a,onChange:l}),Object(i.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1 w-100",children:"Add"})]})]})},j=c.a.memo((function(e){var t=e.todo,n=e.index,o=e.handleDelete,c=e.handleToggle;return Object(i.jsxs)("li",{className:"list-group-item",children:[Object(i.jsxs)("p",{className:t.done?"complete overflow-ellipsis":"overflow-ellipsis",onClick:function(){return c(t.id)},children:[n+1,".",t.desc]}),Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){return o(t.id)},children:"Delete"})]},t.id)})),b=c.a.memo((function(e){var t=e.todos,n=e.handleDelete,o=e.handleToggle;return Object(i.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(i.jsx)(j,{todo:e,index:t,handleDelete:n,handleToggle:o},e.id)}))})})),h=n(9),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case"add":return[].concat(Object(h.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{done:!e.done}):e}));default:return e}},O=function(){var e=Object(o.useReducer)(p,[],(function(){return JSON.parse(localStorage.getItem("todos"))||[]})),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var a=Object(o.useCallback)((function(e){c({type:"delete",payload:e})}),[]),l=Object(o.useCallback)((function(e){c({type:"toggle",payload:e})}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["ToDoApp (",n.length,")"]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-12 col-sm-7",children:[Object(i.jsx)("h4",{children:"ToDo's"}),Object(i.jsx)("hr",{}),Object(i.jsx)(b,{todos:n,handleDelete:a,handleToggle:l})]}),Object(i.jsx)("div",{className:"col-12 col-sm-5",children:Object(i.jsx)(u,{handleAddTodo:function(e){c({type:"add",payload:e})}})})]})]})};l.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7e43624f.chunk.js.map