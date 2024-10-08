(function(){"use strict";var t={2914:function(t,e,n){var o=n(5130),i=n(6768);const s={class:"todo-app"};function a(t,e,n,o,a,d){const r=(0,i.g2)("TodoInput"),u=(0,i.g2)("TodoList");return(0,i.uX)(),(0,i.CE)("div",s,[e[0]||(e[0]=(0,i.Lk)("h1",null,"ToDo List",-1)),(0,i.bF)(r,{onAddTask:d.addTask},null,8,["onAddTask"]),(0,i.bF)(u,{tasks:a.tasks,onRemoveTask:d.removeTask,onToggleTask:d.toggleTask,onEditTask:d.editTask},null,8,["tasks","onRemoveTask","onToggleTask","onEditTask"])])}n(4114);const d={class:"todo-input"};function r(t,e,n,s,a,r){return(0,i.uX)(),(0,i.CE)("div",d,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.newTask=t),onKeyup:e[1]||(e[1]=(0,o.jR)(((...t)=>r.submitTask&&r.submitTask(...t)),["enter"])),placeholder:"Enter a new task",maxlength:"150"},null,544),[[o.Jo,a.newTask]]),(0,i.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>r.submitTask&&r.submitTask(...t))},"Add Task")])}var u={data(){return{newTask:""}},methods:{submitTask(){this.newTask.trim()&&(this.$emit("add-task",this.newTask.trim()),this.newTask="")}}},c=n(1241);const l=(0,c.A)(u,[["render",r],["__scopeId","data-v-348acc09"]]);var k=l,f=n(4232);const p=["checked","onChange"],h=["onDblclick"],v=["onUpdate:modelValue","onBlur","onKeyup"],g={class:"button-group"},T=["onClick"],m=["onClick"],b=["onClick"];function E(t,e,n,s,a,d){return(0,i.uX)(),(0,i.CE)("div",{class:"todo-list",onClick:e[1]||(e[1]=(...t)=>d.cancelEdit&&d.cancelEdit(...t))},[(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.tasks,(n=>((0,i.uX)(),(0,i.CE)("li",{key:n.id,onClick:e[0]||(e[0]=(0,o.D$)((()=>{}),["stop"]))},[(0,i.Lk)("input",{type:"checkbox",checked:n.completed,onChange:e=>t.$emit("toggle-task",n.id)},null,40,p),n.editing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:1,"onUpdate:modelValue":t=>n.editingText=t,onBlur:t=>d.saveEdit(n),onKeyup:(0,o.jR)((t=>d.saveEdit(n)),["enter"]),class:"edit-input",style:(0,f.Tr)({width:`${n.text.length+1}ch`}),maxlength:"150",ref_for:!0,ref:"editableInput"},null,44,v)),[[o.Jo,n.editingText]]):((0,i.uX)(),(0,i.CE)("span",{key:0,class:(0,f.C4)({completed:n.completed}),onDblclick:t=>d.editMode(n)},(0,f.v_)(n.text),43,h)),(0,i.Lk)("div",g,[n.editing?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("button",{key:0,onClick:t=>d.editMode(n),class:"btn edit-btn"},"Edit",8,T)),n.editing?((0,i.uX)(),(0,i.CE)("button",{key:1,onClick:t=>d.saveEdit(n),class:"btn save-btn"},"Save",8,m)):(0,i.Q3)("",!0),(0,i.Lk)("button",{onClick:e=>t.$emit("remove-task",n.id),class:"btn delete-btn"},"Del",8,b)])])))),128))])])}var C={props:["tasks"],methods:{editMode(t){this.tasks.forEach((e=>{e!==t&&(e.editing=!1)})),t.editing=!0,t.editingText=t.text,this.$nextTick((()=>{const t=this.$refs.editableInput;t&&t.length?t[0].focus():t?.focus()}))},saveEdit(t){t.editingText.trim()&&this.$emit("edit-task",t.id,t.editingText.trim()),t.editing=!1},cancelEdit(){this.tasks.forEach((t=>{t.editing&&(t.editing=!1)}))}}};const x=(0,c.A)(C,[["render",E],["__scopeId","data-v-568f9b25"]]);var y=x,w={name:"App",components:{TodoInput:k,TodoList:y},data(){return{tasks:[]}},mounted(){const t=localStorage.getItem("tasks");t&&(this.tasks=JSON.parse(t))},watch:{tasks:{handler(t){localStorage.setItem("tasks",JSON.stringify(t))},deep:!0}},methods:{addTask(t){this.tasks.push({id:Date.now(),text:t,completed:!1})},removeTask(t){this.tasks=this.tasks.filter((e=>e.id!==t))},toggleTask(t){const e=this.tasks.find((e=>e.id===t));e&&(e.completed=!e.completed)},editTask(t,e){const n=this.tasks.find((e=>e.id===t));n&&(n.text=e)}}};const _=(0,c.A)(w,[["render",a],["__scopeId","data-v-68f1c5e5"]]);var O=_;(0,o.Ef)(O).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,s){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],s=t[c][2];for(var d=!0,r=0;r<o.length;r++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(d=!1,s<a&&(a=s));if(d){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,a=o[0],d=o[1],r=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in d)n.o(d,i)&&(n.m[i]=d[i]);if(r)var c=r(n)}for(e&&e(o);u<a.length;u++)s=a[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunkvue_todo_list"]=self["webpackChunkvue_todo_list"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2914)}));o=n.O(o)})();
//# sourceMappingURL=app.854d48ae.js.map