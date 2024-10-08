(function(){"use strict";var t={9068:function(t,e,n){var o=n(3751),s=n(641);const i={class:"todo-app"};function a(t,e,n,o,a,d){const r=(0,s.g2)("TodoInput"),u=(0,s.g2)("TodoList");return(0,s.uX)(),(0,s.CE)("div",i,[e[0]||(e[0]=(0,s.Lk)("h1",null,"ToDo List",-1)),(0,s.bF)(r,{onAddTask:d.addTask},null,8,["onAddTask"]),(0,s.bF)(u,{tasks:a.tasks,onRemoveTask:d.removeTask,onToggleTask:d.toggleTask,onEditTask:d.editTask},null,8,["tasks","onRemoveTask","onToggleTask","onEditTask"])])}n(4114);const d={class:"todo-input"};function r(t,e,n,i,a,r){return(0,s.uX)(),(0,s.CE)("div",d,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.newTask=t),onKeyup:e[1]||(e[1]=(0,o.jR)(((...t)=>r.submitTask&&r.submitTask(...t)),["enter"])),placeholder:"Enter a new task"},null,544),[[o.Jo,a.newTask]]),(0,s.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>r.submitTask&&r.submitTask(...t))},"Add Task")])}var u={data(){return{newTask:""}},methods:{submitTask(){this.newTask.trim()&&(this.$emit("add-task",this.newTask.trim()),this.newTask="")}}},l=n(6262);const c=(0,l.A)(u,[["render",r],["__scopeId","data-v-52a8495c"]]);var k=c,p=n(33);const f={class:"todo-list"},m=["onUpdate:modelValue","onChange"],v=["onDblclick"],T=["onClick"],h={key:0},g=["onUpdate:modelValue","onKeyup"],b=["onClick"];function w(t,e,n,i,a,d){return(0,s.uX)(),(0,s.CE)("div",f,[(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.tasks,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id},[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":t=>e.completed=t,onChange:n=>t.$emit("toggle-task",e.id)},null,40,m),[[o.lH,e.completed]]),(0,s.Lk)("span",{class:(0,p.C4)({completed:e.completed}),onDblclick:t=>d.editMode(e)},(0,p.v_)(e.text),43,v),(0,s.Lk)("button",{onClick:n=>t.$emit("remove-task",e.id)},"Delete",8,T),e.editing?((0,s.uX)(),(0,s.CE)("div",h,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t=>e.editingText=t,onKeyup:(0,o.jR)((t=>d.saveEdit(e)),["enter"])},null,40,g),[[o.Jo,e.editingText]]),(0,s.Lk)("button",{onClick:t=>d.saveEdit(e)},"Save",8,b)])):(0,s.Q3)("",!0)])))),128))])])}var C={props:["tasks"],methods:{editMode(t){t.editing=!0,t.editingText=t.text},saveEdit(t){t.editingText.trim()&&(this.$emit("edit-task",t.id,t.editingText.trim()),t.editing=!1)}}};const x=(0,l.A)(C,[["render",w],["__scopeId","data-v-aacb44ac"]]);var y=x,E={name:"App",components:{TodoInput:k,TodoList:y},data(){return{tasks:[]}},mounted(){const t=localStorage.getItem("tasks");t&&(this.tasks=JSON.parse(t))},watch:{tasks:{handler(t){localStorage.setItem("tasks",JSON.stringify(t))},deep:!0}},methods:{addTask(t){this.tasks.push({id:Date.now(),text:t,completed:!1})},removeTask(t){this.tasks=this.tasks.filter((e=>e.id!==t))},toggleTask(t){const e=this.tasks.find((e=>e.id===t));e&&(e.completed=!e.completed)},editTask(t,e){const n=this.tasks.find((e=>e.id===t));n&&(n.text=e)}}};const O=(0,l.A)(E,[["render",a],["__scopeId","data-v-fa0c9dc2"]]);var L=O;(0,o.Ef)(L).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],s=t[l][1],i=t[l][2];for(var d=!0,r=0;r<o.length;r++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(d=!1,i<a&&(a=i));if(d){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,s,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,a=o[0],d=o[1],r=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(s in d)n.o(d,s)&&(n.m[s]=d[s]);if(r)var l=r(n)}for(e&&e(o);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkvue_todo_list"]=self["webpackChunkvue_todo_list"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9068)}));o=n.O(o)})();
//# sourceMappingURL=app.50cc3ba6.js.map