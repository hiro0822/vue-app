(function(e){function t(t){for(var n,s,a=t[0],d=t[1],c=t[2],u=0,p=[];u<a.length;u++)s=a[u],i[s]&&p.push(i[s][0]),i[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,a=1;a<o.length;a++){var d=o[a];0!==i[d]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],s=(o("c796"),o("2877")),a={},d=Object(s["a"])(a,i,r,!1,null,null,null),c=d.exports,l=o("8c4f"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v("todoList")]),o("Todo"),o("h1",[e._v("DoneList")]),o("done-todo")],1)},p=[],m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo"},[e._l(e.Todos,function(t){return o("div",{key:t.id,staticClass:"todolist"},[o("div",[o("div",[e._v("\n        "+e._s(t.name)+"\n      ")]),o("div",[e._v("\n        "+e._s(t.description)+"\n      ")]),o("div",[o("button",{on:{click:function(o){e.openModal(t)}}},[e._v("Edit")])]),o("div",[o("button",{on:{click:function(o){e.deleteTodo(t)}}},[e._v("Delete")])]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isComplete,expression:"todo.isComplete"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isComplete)?e._i(t.isComplete,null)>-1:t.isComplete},on:{change:[function(o){var n=t.isComplete,i=o.target,r=!!i.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);i.checked?a<0&&e.$set(t,"isComplete",n.concat([s])):a>-1&&e.$set(t,"isComplete",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"isComplete",r)},function(o){e.editTodo(t)}]}}),o("label",{attrs:{for:"checkbox"}},[e._v("Done")])])])])}),o("div",{staticClass:"createTodo"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.createTodo(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.name,expression:"newTodo.name"}],attrs:{type:"text"},domProps:{value:e.newTodo.name},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"name",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.description,expression:"newTodo.description"}],attrs:{type:"text"},domProps:{value:e.newTodo.description},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"description",t.target.value)}}}),o("button",{attrs:{type:"submit",name:"button"}},[e._v("Create")])])])],2)},f=[],v=o("cebc"),h=o("2f62"),T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editTodo"},[o("div",{attrs:{id:"inline"}},[o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.editTodo(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.name,expression:"todo.name"}],attrs:{type:"text"},domProps:{value:e.todo.name},on:{input:function(t){t.target.composing||e.$set(e.todo,"name",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.description,expression:"todo.description"}],attrs:{type:"text"},domProps:{value:e.todo.description},on:{input:function(t){t.target.composing||e.$set(e.todo,"description",t.target.value)}}}),o("button",{attrs:{type:"submit",name:"button"},on:{click:e.closeModal}},[e._v("Submit")])]),o("button",{on:{click:e.closeModal}},[e._v("xlose")])])])])},b=[],g=(o("7f7f"),{name:"editModal",props:["Todo"],data:function(){return{todo:{id:this.Todo.id,name:this.Todo.name,description:this.Todo.description,isComplete:this.Todo.isComplete}}},methods:{editTodo:function(){this.$store.dispatch("todos/editTodo",this.todo),this.$modal.hide("editTodo")},closeModal:function(){this.$emit("close")}}}),w=g,C=Object(s["a"])(w,T,b,!1,null,"e181830e",null),_=C.exports,y={name:"Todo",data:function(){return{newTodo:{name:"",description:""}}},computed:Object(v["a"])({},Object(h["b"])("todos",{Todos:"Todos"})),methods:{createTodo:function(){this.newTodo&&this.$store.dispatch("todos/createTodo",this.newTodo),this.newTodo={}},openModal:function(e){this.$modal.show(_,{Todo:e})},deleteTodo:function(e){this.$store.dispatch("todos/deleteTodo",e)},editTodo:function(e){this.$store.dispatch("todos/editTodo",e)}},mounted:function(){this.$store.dispatch("todos/getAllTodos")}},x=y,k=Object(s["a"])(x,m,f,!1,null,"93ee0d14",null),$=k.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"doneTodo"},e._l(e.DoneTodos,function(t){return o("div",{key:t.id,staticClass:"todolist"},[o("div",[o("div",[e._v("\n        "+e._s(t.name)+"\n      ")]),o("div",[e._v("\n        "+e._s(t.description)+"\n      ")]),o("div",[o("button",{on:{click:function(o){e.deleteTodo(t)}}},[e._v("Delete")])]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isComplete,expression:"doneTodo.isComplete"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isComplete)?e._i(t.isComplete,null)>-1:t.isComplete},on:{change:[function(o){var n=t.isComplete,i=o.target,r=!!i.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);i.checked?a<0&&e.$set(t,"isComplete",n.concat([s])):a>-1&&e.$set(t,"isComplete",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"isComplete",r)},function(o){e.editTodo(t)}]}}),o("label",{attrs:{for:"checkbox"}},[e._v("Done")])])])])}),0)},O=[],A={name:"DoneTodo",computed:Object(v["a"])({},Object(h["b"])("todos",{DoneTodos:"DoneTodos"})),methods:{deleteTodo:function(e){this.$store.dispatch("todos/deleteTodo",e)},editTodo:function(e){this.$store.dispatch("todos/editTodo",e)}}},D=A,P=Object(s["a"])(D,j,O,!1,null,"24666118",null),M=P.exports,R={name:"home",components:{Todo:$,DoneTodo:M}},N=R,E=Object(s["a"])(N,u,p,!1,null,null,null),S=E.exports;n["a"].use(l["a"]);var F=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S}]}),J=(o("96cf"),o("3b8d")),L=(o("ac6a"),o("bc3a")),q=o.n(L),B="http://localhost:8080/todos",z={allTodos:[]},G={Todos:function(e){var t=e.allTodos.filter(function(e){return 0==e.isComplete});return t},DoneTodos:function(e){var t=e.allTodos.filter(function(e){return 1==e.isComplete});return t}},H={setTodos:function(e,t){t.forEach(function(t){var o={id:t._id,name:t.name,description:t.description,isComplete:t.isComplete};e.allTodos.push(o)})},editTodo:function(e,t){e.allTodos.some(function(o,n){if(o.id==t.id)return e.allTodos[n].name=t.name,e.allTodos[n].description=t.description,void(e.allTodos[n].isComplete=t.isComplete)})},createTodo:function(e,t){var o={id:t.id,name:t.name,description:t.description,isComplete:t.isComplete};e.allTodos.push(o)},deleteTodo:function(e,t){e.allTodos.some(function(o,n){o.id!=t.id||e.allTodos.splice(n,1)})}},I={getAllTodos:function(){var e=Object(J["a"])(regeneratorRuntime.mark(function e(t){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,q.a.get(B+"/").then(function(e){o("setTodos",e.data)});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),editTodo:function(){var e=Object(J["a"])(regeneratorRuntime.mark(function e(t,o){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,i={name:o.name,description:o.description,isComplete:o.isComplete},e.next=4,q.a.post(B+"/update/"+o.id,i).then(function(e){n("editTodo",{id:e.data._id,name:e.data.name,description:e.data.description,isComplete:e.data.isComplete})});case 4:case"end":return e.stop()}},e,this)}));function t(t,o){return e.apply(this,arguments)}return t}(),createTodo:function(){var e=Object(J["a"])(regeneratorRuntime.mark(function e(t,o){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,console.log(z.allTodos),i={name:o.name,description:o.description,isComplete:!1},e.next=5,q.a.post(B+"/add",i).then(function(e){n("createTodo",{id:e.data._id,name:e.data.name,description:e.data.description,isComplete:e.data.isComplete})});case 5:case"end":return e.stop()}},e,this)}));function t(t,o){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(J["a"])(regeneratorRuntime.mark(function e(t,o){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,q.a.get(B+"/delete/"+o.id).then(function(e){n("deleteTodo",{id:e.data._id,name:e.data.name,description:e.data.description,isComplete:e.data.isComplete})});case 3:case"end":return e.stop()}},e,this)}));function t(t,o){return e.apply(this,arguments)}return t}(),changeComplete:function(){var e=Object(J["a"])(regeneratorRuntime.mark(function e(t,o){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,i={name:o.name,description:o.description,isComplete:!0},console.log(i,"storeのなかで"),e.next=5,q.a.post(B+"/update/"+o.id,i).then(function(e){n("editTodo",{id:e.data._id,name:e.data.name,description:e.data.description,isComplete:e.data.isComplete})});case 5:case"end":return e.stop()}},e,this)}));function t(t,o){return e.apply(this,arguments)}return t}()},K={namespaced:!0,state:z,getters:G,mutations:H,actions:I};n["a"].use(h["a"]);var Q=new h["a"].Store({modules:{todos:K}}),U=o("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var V=o("a7fe"),W=o.n(V),X=o("d0a7"),Y=o.n(X),Z=o("1881"),ee=o.n(Z);n["a"].config.productionTip=!1,n["a"].use(ee.a,{dynamic:!0,injectModalsContainer:!0}),n["a"].use(W.a,q.a),n["a"].use(Y.a),new n["a"]({router:F,store:Q,render:function(e){return e(c)}}).$mount("#app")},c796:function(e,t,o){"use strict";var n=o("dd6b"),i=o.n(n);i.a},dd6b:function(e,t,o){}});
//# sourceMappingURL=app.c73cea7e.js.map