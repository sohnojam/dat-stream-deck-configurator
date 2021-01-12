(this["webpackJsonpdat-stream-deck-configurator"]=this["webpackJsonpdat-stream-deck-configurator"]||[]).push([[0],[,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),l=a(13),i=a.n(l),r=(a(19),a(2)),d={controller:{initStateName:"init"},interface:{},states:[{name:"init",color:"#ffffff",keys:[{label:"C",keyData:{key:{name:"c"},ch:"c"},name:"Connect",actions:[{type:"connect",startStateName:"main"}]},{label:"X",keyData:{key:{name:"x"},ch:"x"},name:"Exit",actions:[{type:"exit"}]}]},{name:"main",color:"#ff0000",keys:[{label:"Backspace",keyData:{key:{name:"backspace"}},name:"Exit",actions:[{type:"exit"}]}]}]};var o=function e(t,a){var s=t||{},c=a||{};return Object.keys(s).length===Object.keys(c).length&&Object.keys(s).every((function(t){return typeof s[t]===typeof c[t]&&("object"===typeof s[t]?e(s[t],c[t]):s[t]===c[t])}))},j=a(3);var b=function(e){var t=[];return e.states.forEach((function(e){e.keys.forEach((function(a){var s=t.findIndex((function(e){return e.label===a.label}));-1!==s?t[s].states.push({state:e.name,color:e.color,name:a.name,actions:a.actions,keyData:a.keyData}):t.push(Object(j.a)(Object(j.a)({},a),{},{states:[{state:e.name,color:e.color,name:a.name,actions:a.actions,keyData:a.keyData}]}))}))})),t};var y=function(e){return e.states.map((function(e){return{name:e.name,color:e.color,keys:e.keys.length}}))};a(10);var u=function(){return Object(s.jsxs)("div",{className:"header-nametag-container",children:[Object(s.jsx)("div",{className:"header-nametag-line1",children:Object(s.jsx)("span",{children:"dat-stream-deck"})}),Object(s.jsx)("div",{className:"header-nametag-line2",children:Object(s.jsx)("span",{children:"configurator"})})]})};var m=function(){return Object(s.jsxs)("div",{className:"header-versiontag-container",children:[Object(s.jsx)("div",{className:"header-versiontag-line1",children:Object(s.jsx)("span",{children:"v. 0.1.0"})}),Object(s.jsx)("div",{className:"header-versiontag-line2",children:Object(s.jsx)("span",{children:"github.com/sohnojam"})})]})};var f=function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"header-container",children:[Object(s.jsx)(u,{}),Object(s.jsx)(m,{})]})})};a(20),a(4);var O=function(e){var t=e.newConfig,a=e.loadConfig,c=e.saveConfig,n=e.editInterface;return Object(s.jsxs)("div",{className:"states-c1",children:[Object(s.jsx)("div",{className:"states-file-button",onClick:function(){return t()},children:Object(s.jsx)("span",{children:"New config"})}),Object(s.jsxs)("label",{className:"states-file-button",children:[Object(s.jsx)("input",{className:"states-file-input-hidden",type:"file",accept:"file_extension,.json",onChange:function(e){return a(e.target.files&&e.target.files.length&&e.target.files[0]||null)}}),Object(s.jsx)("span",{children:"Load config"})]}),Object(s.jsx)("div",{className:"states-file-button",onClick:function(){return c()},children:Object(s.jsx)("span",{children:"Save config"})}),Object(s.jsx)("div",{className:"states-file-button",onClick:function(){return n()},children:Object(s.jsx)("span",{children:"Edit interface"})})]})};var h=function(){return Object(s.jsx)("div",{className:"states-c2-empty"})};var x=function(e){var t=e.interfaceConfig,a=e.states,l=e.saveInterface,i=e.cancel,d=Object(c.useState)(t&&t.interface&&t.interface.type||""),o=Object(r.a)(d,2),j=o[0],b=o[1],y=Object(c.useState)(t&&t.interface&&t.interface.type?"OBSS"===t.interface.type?t.interface.address&&t.interface.address.split(":").length>1?t.interface.address.split(":")[0]:"":"SLOBS"===t.interface.type&&t.interface.address&&t.interface.address.split(":").length>1?t.interface.address.split(":")[0].replace("http://",""):"":""),u=Object(r.a)(y,2),m=u[0],f=u[1],O=Object(c.useState)(t&&t.interface&&t.interface.type?"OBSS"===t.interface.type?t.interface.address&&t.interface.address.split(":").length>1?t.interface.address.split(":")[1]:"":"SLOBS"===t.interface.type&&t.interface.address&&t.interface.address.split(":").length>1?t.interface.address.split(":")[1].replace("/api",""):"":""),h=Object(r.a)(O,2),x=h[0],S=h[1],v=Object(c.useState)(t&&t.interface&&t.interface.type&&"OBSS"===t.interface.type&&t.interface.password||""),k=Object(r.a)(v,2),p=k[0],g=k[1],K=Object(c.useState)(t&&t.interface&&t.interface.type&&"SLOBS"===t.interface.type&&t.interface.token||""),N=Object(r.a)(K,2),C=N[0],w=N[1],D=Object(c.useState)(t&&t.startStateName||""),A=Object(r.a)(D,2),F=A[0],T=A[1];return Object(s.jsx)("div",{className:"states-c2",children:Object(s.jsxs)("div",{className:"states-edit-form",children:[Object(s.jsx)("div",{className:"states-edit-form-header",children:Object(s.jsx)("div",{className:"states-edit-form-header-cancel",onClick:function(){return i()},children:Object(s.jsx)("span",{children:"Cancel"})})}),Object(s.jsx)("span",{className:"states-edit-form-label",children:"Type"}),Object(s.jsxs)("select",{className:"states-edit-form-input-text",onChange:function(e){return t=e.target.value,void b(t);var t},value:j,children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"Select interface type"},"0"),Object(s.jsx)("option",{value:"OBSS",children:"OBS Studio"},"1"),Object(s.jsx)("option",{value:"SLOBS",children:"Streamlabs OBS"},"2")]}),Object(s.jsx)("span",{className:"states-edit-form-label",children:"Address (Local IP)"}),Object(s.jsx)("input",{className:"states-edit-form-input-text",type:"text",value:m,onChange:function(e){return t=e.target.value,void f(t);var t}}),Object(s.jsx)("span",{className:"states-edit-form-label",children:"Port"}),Object(s.jsx)("input",{className:"states-edit-form-input-text",type:"text",value:x,onChange:function(e){return t=e.target.value,void S(t);var t}}),"OBSS"===j?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"states-edit-form-label",children:"Password"}),Object(s.jsx)("input",{className:"states-edit-form-input-text",type:"password",value:p,onChange:function(e){return t=e.target.value,void g(t);var t}})]}):"SLOBS"===j?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"states-edit-form-label",children:"Token"}),Object(s.jsx)("input",{className:"states-edit-form-input-text",type:"password",value:C,onChange:function(e){return t=e.target.value,void w(t);var t}})]}):null,Object(s.jsx)("span",{className:"states-edit-form-label",children:"Start state"}),Object(s.jsxs)("select",{className:"states-edit-form-input-text",value:F,onChange:function(e){return t=e.target.value,void T(t);var t},children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"Select start state"},"0"),a.map((function(e,t){return Object(s.jsx)("option",{value:e.name,children:e.name},t+1)}))]}),Object(s.jsx)("div",{className:"states-edit-form-footer",children:Object(s.jsx)("div",{className:"states-edit-form-footer-button",onClick:function(){l({type:j,address:"OBSS"===j?"".concat(m,":").concat(x):"SLOBS"===j?"http://".concat(m,":").concat(x,"/api"):"",password:"OBSS"===j?p:void 0,token:"SLOBS"===j?C:void 0},F)},children:Object(s.jsx)("span",{children:"Save"})})})]})})};var S=function(e){var t=e.states,a=e.selectedState,n=e.saveState,l=e.cancel,i=Object(c.useState)(a?t.find((function(e){return e.name===a})).name:""),d=Object(r.a)(i,2),o=d[0],j=d[1],b=Object(c.useState)(a?"custom":""),y=Object(r.a)(b,2),u=y[0],m=y[1],f=Object(c.useState)(a?t.find((function(e){return e.name===a})).color:""),O=Object(r.a)(f,2),h=O[0],x=O[1];return Object(s.jsx)("div",{className:"states-c2",children:Object(s.jsxs)("div",{className:"states-edit-form",children:[Object(s.jsx)("div",{className:"states-edit-form-header",children:Object(s.jsx)("div",{className:"states-edit-form-header-cancel",onClick:function(){return l()},children:Object(s.jsx)("span",{children:"Cancel"})})}),Object(s.jsx)("span",{className:"states-edit-form-label",children:"Name"}),Object(s.jsx)("input",{className:"states-edit-form-input-text",type:"text",disabled:!!a,value:o,onChange:function(e){return t=e.target.value,void j(t);var t}}),Object(s.jsx)("span",{className:"states-edit-form-label",children:"Color"}),Object(s.jsxs)("select",{className:"states-edit-form-input-text",onChange:function(e){return t=e.target.value,void m(t);var t},value:u,children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"Select a color"},"0"),Object(s.jsx)("option",{value:"#ffffff",children:"White"},"1"),Object(s.jsx)("option",{value:"#000000",children:"Black"},"2"),Object(s.jsx)("option",{value:"#ff0000",children:"Red"},"3"),Object(s.jsx)("option",{value:"#00ff00",children:"Green"},"4"),Object(s.jsx)("option",{value:"#0000ff",children:"Blue"},"5"),Object(s.jsx)("option",{value:"#ffff00",children:"Yellow"},"6"),Object(s.jsx)("option",{value:"#ff00ff",children:"Magenta"},"7"),Object(s.jsx)("option",{value:"#00ffff",children:"Cyan"},"8"),Object(s.jsx)("option",{value:"custom",children:"Custom color"},"9")]}),Object(s.jsx)("span",{className:"states-edit-form-label",children:"Custom color"}),Object(s.jsx)("input",{className:"states-edit-form-input-text",type:"text",disabled:"custom"!==u,value:h,onChange:function(e){return t=e.target.value,void x(t.length>0&&"#"!==t[0]?"#":t);var t}}),Object(s.jsx)("div",{className:"states-edit-form-footer",children:Object(s.jsx)("div",{className:"states-edit-form-footer-button",onClick:function(){n({name:o,color:"custom"===u?h:u})},children:Object(s.jsx)("span",{children:"Save"})})})]})})};var v=function(e){var t=e.states,a=e.selectedState,c=e.setSelectedState,n=e.editState,l=e.removeState;return Object(s.jsxs)("div",{className:"states-c3",children:[t.map((function(e,n){return Object(s.jsxs)("div",{className:"states-list-item".concat(e.name===a?" states-list-item-selected":""),onClick:function(){return c(a===e.name?null:e.name)},children:[Object(s.jsxs)("div",{className:"states-list-item-label",children:[Object(s.jsx)("div",{className:"states-list-item-circle",style:{backgroundColor:e.color,boxShadow:"0 0 4px 0 ".concat(e.color)}}),Object(s.jsx)("span",{className:"states-list-item-name",style:{color:e.color},children:e.name})]}),Object(s.jsx)("div",{className:"states-list-item-remove",onClick:function(){return l(t.findIndex((function(e){return e.name===a})))},children:"X"})]},"state".concat(n))})),Object(s.jsx)("div",{className:"states-list-bottom",children:Object(s.jsx)("div",{className:"states-list-button",onClick:function(){return n()},children:Object(s.jsx)("span",{children:a?"Edit state":"New state"})})})]})};var k=function(e){var t=e.newConfig,a=e.loadConfig,n=e.saveConfig,l=e.interfaceConfig,i=e.modifyInterface,d=e.states,o=e.selectedState,j=e.setSelectedState,b=e.addState,y=e.modifyState,u=e.removeState,m=Object(c.useState)(!1),f=Object(r.a)(m,2),k=f[0],p=f[1];return Object(s.jsxs)("div",{className:"states-container",children:[Object(s.jsx)(O,{newConfig:t,loadConfig:a,saveConfig:n,editInterface:function(){return"state"===k?window.confirm("This will discard any changes made to the state. Are you sure you want to do this?")&&p("interface"):p("interface")}}),"state"===k?Object(s.jsx)(S,{states:d,selectedState:o,saveState:function(e){o?window.confirm("This will overwrite the state. Are you sure you want to do this?")&&(y(o,e),p("")):(b(e),p(""))},cancel:function(){return window.confirm("This will discard any changes made to the state. Are you sure you want to do this?")&&p("")}}):"interface"===k?Object(s.jsx)(x,{interfaceConfig:l,states:d,saveInterface:function(e,t){i(e,t),p("")},cancel:function(){return window.confirm("This will discard any changes made to the interface. Are you sure you want to do this?")&&p("")}}):Object(s.jsx)(h,{}),Object(s.jsx)(v,{states:d,selectedState:o,setSelectedState:j,editState:function(){return"interface"===k?window.confirm("This will discard any changes made to the interface. Are you sure you want to do this?")&&p("state"):p("state")},removeState:function(e){window.confirm("This will permanently delete the state. Any Switch State actions pointing to this state will cease to work. Are you sure you want to do this?")&&u(e)}})]})};a(11);var p=function(e){var t=e.special,a=e.label,c=e.keyData,n=e.keys,l=e.selectedState,i=e.selectedKey,r=e.setSelectedKey,d=n.find((function(e){return e.label===a})),o=[];return d&&(o=l?d.states.filter((function(e){return e.state===l})):d.states),Object(s.jsxs)("div",{className:"key".concat(i&&a===i.label?" key-selected":"").concat(t?" ".concat(t):""),onClick:function(){return r({label:a,keyData:c})},children:[Object(s.jsx)("div",{className:"key-label",children:a}),Object(s.jsx)("div",{className:"key-state-container",children:d?o.map((function(e,t){return Object(s.jsx)("div",{className:"key-state-circle",style:{backgroundColor:e.color||"#000000",boxShadow:"0 0 3px 0 ".concat(e.color||"#000000")}},"key".concat(a,"s").concat(t))})):null})]})};var g=function(e){var t=e.length;return Object(s.jsx)("div",{style:{gridColumn:"span ".concat(t)}})};var K=function(e){var t=e.keys,a=e.selectedState,c=e.selectedKey,n=e.setSelectedKey;return Object(s.jsxs)("div",{className:"keyboard",children:[Object(s.jsx)(p,{label:"Esc",keyData:{key:{name:"escape"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"5"}),Object(s.jsx)(p,{label:"F1",keyData:{key:{name:"f1"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F2",keyData:{key:{name:"f2"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F3",keyData:{key:{name:"f3"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F4",keyData:{key:{name:"f4"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"3"}),Object(s.jsx)(p,{label:"F5",keyData:{key:{name:"f5"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F6",keyData:{key:{name:"f6"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F7",keyData:{key:{name:"f7"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F8",keyData:{key:{name:"f8"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"3"}),Object(s.jsx)(p,{label:"F9",keyData:{key:{name:"f9"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F10",keyData:{key:{name:"f10"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F11",keyData:{key:{name:"f11"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F12",keyData:{key:{name:"f12"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"~",keyData:{ch:"`"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"1",keyData:{ch:"1"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"2",keyData:{ch:"2"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"3",keyData:{ch:"3"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"4",keyData:{ch:"4"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"5",keyData:{ch:"5"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"6",keyData:{ch:"6"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"7",keyData:{ch:"7"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"8",keyData:{ch:"8"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"9",keyData:{ch:"9"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"0",keyData:{ch:"0"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"-",keyData:{ch:"-"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"=",keyData:{ch:"="},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"Backspace",special:"back",keyData:{key:{name:"backspace"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"Tab",special:"tab",keyData:{key:{name:"tab"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"Q",keyData:{ch:"q",key:{name:"q"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"W",keyData:{ch:"w",key:{name:"w"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"E",keyData:{ch:"e",key:{name:"e"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"R",keyData:{ch:"r",key:{name:"r"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"T",keyData:{ch:"t",key:{name:"t"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"Y",keyData:{ch:"y",key:{name:"y"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"U",keyData:{ch:"u",key:{name:"u"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"I",keyData:{ch:"i",key:{name:"i"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"O",keyData:{ch:"o",key:{name:"o"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"P",keyData:{ch:"p",key:{name:"p"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"[",keyData:{ch:"["},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"]",keyData:{ch:"]"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"\\",special:"or",keyData:{ch:"\\"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"10"}),Object(s.jsx)(p,{label:"A",keyData:{ch:"a",key:{name:"a"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"S",keyData:{ch:"s",key:{name:"s"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"D",keyData:{ch:"d",key:{name:"d"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"F",keyData:{ch:"f",key:{name:"f"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"G",keyData:{ch:"g",key:{name:"g"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"H",keyData:{ch:"h",key:{name:"h"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"J",keyData:{ch:"j",key:{name:"j"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"K",keyData:{ch:"k",key:{name:"k"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"L",keyData:{ch:"l",key:{name:"l"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:";",keyData:{ch:";"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"'",keyData:{ch:"'"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"Enter",special:"enter",keyData:{key:{name:"return"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"13"}),Object(s.jsx)(p,{label:"Z",keyData:{ch:"z",key:{name:"z"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"X",keyData:{ch:"x",key:{name:"x"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"C",keyData:{ch:"c",key:{name:"c"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"V",keyData:{ch:"v",key:{name:"v"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"B",keyData:{ch:"b",key:{name:"b"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"N",keyData:{ch:"n",key:{name:"n"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"M",keyData:{ch:"m",key:{name:"m"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:",",keyData:{ch:","},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:".",keyData:{ch:"."},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(p,{label:"/",keyData:{ch:"/"},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"13"}),Object(s.jsx)(g,{length:"6"}),Object(s.jsx)(g,{length:"6"}),Object(s.jsx)(g,{length:"6"}),Object(s.jsx)(p,{label:"Space",special:"space",keyData:{key:{name:"space"}},keys:t,selectedState:a,selectedKey:c,setSelectedKey:n}),Object(s.jsx)(g,{length:"6"}),Object(s.jsx)(g,{length:"6"}),Object(s.jsx)(g,{length:"6"}),Object(s.jsx)(g,{length:"6"})]})};a(5);var N=function(e){var t=e.selectedKey,a=e.assignment,c=e.editAssignment;return Object(s.jsxs)("div",{className:"selected-assignment-container",onClick:function(){return c()},children:[Object(s.jsxs)("div",{className:"selected-assignment-header",children:[Object(s.jsx)("div",{className:"selected-assignment-header-circle",style:{backgroundColor:a.color||"#000000",boxShadow:"0 0 5px 0 ".concat(a.color||"#000000")}}),Object(s.jsxs)("div",{className:"selected-assignment-header-text",style:{color:a.color||"#000000"},children:[Object(s.jsx)("span",{className:"selected-assignment-header-text-line1",children:a.name||"Assignment"}),Object(s.jsxs)("span",{className:"selected-assignment-header-text-line2",children:[a.state||"State"," - ",t.label]})]})]}),Object(s.jsx)("div",{className:"selected-assignment-actions",children:a.actions.map((function(e,c){return Object(s.jsx)("div",{className:"selected-assignment-actions-line",children:Object(s.jsx)("span",{className:"selected-assignment-actions-type",style:{color:a.color||"#000000"},children:e.type})},"".concat(t.label,"assign").concat(a.state,"act").concat(c))}))})]})};var C=function(e){var t=e.newAssignment;return Object(s.jsx)("div",{className:"selected-newassignment-container",onClick:function(){return t()},children:"Add new"})},w=a(12);a(7);var D=function(e){var t=e.states,a=e.name,c=e.onChangeNameInput,n=e.state,l=e.onChangeStateInput,i=e.disableStateInput;return e.color,Object(s.jsxs)("div",{className:"edit-assignment-form-body-c1",children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Assignment name"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return c(e.target.value)},value:a||""}),Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"State"}),Object(s.jsxs)("select",{className:"edit-assignment-form-input-text",onChange:function(e){return l(e.target.value)},value:n||"",disabled:i,children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"Select a state"}),t.map((function(e,t){return Object(s.jsx)("option",{value:e.name,children:e.name},"optionstate".concat(t))}))]})]})};var A=function(e){var t=e.actions,a=e.createAction,c=e.removeAction;return Object(s.jsxs)("div",{className:"edit-assignment-form-body-c2",children:[Object(s.jsx)("div",{className:"edit-assignment-action-list-container",children:t.map((function(e,t){return Object(s.jsxs)("div",{className:"edit-assignment-action-list-item",children:[Object(s.jsx)("span",{className:"edit-assignment-action-list-item-type",children:e.type}),Object.keys(e).filter((function(e){return"type"!==e})).map((function(t,a){return Object(s.jsx)("span",{className:"edit-assignment-action-list-item-arg",children:e[t]},"actionarg".concat(a))})),Object(s.jsx)("span",{onClick:function(){return c(t)},className:"edit-assignment-action-list-item-remove",children:"X"})]},"actionlist".concat(t))}))}),Object(s.jsx)("div",{className:"edit-assignment-action-list-bottom",children:Object(s.jsx)("div",{className:"edit-assignment-action-list-button",onClick:function(){return a()},children:Object(s.jsx)("span",{className:"edit-assignment-action-list-button-label",children:"Add action"})})})]})};var F=function(e){var t=e.addAction,a=e.cancelCreateAction,l=Object(c.useState)({type:""}),i=Object(r.a)(l,2),d=i[0],o=i[1];return Object(s.jsxs)("div",{className:"edit-assignment-form-body-c2",children:[Object.keys(d).map((function(e,t){return Object(s.jsx)(n.a.Fragment,{children:"type"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Action type"}),Object(s.jsxs)("select",{className:"edit-assignment-form-input-text",onChange:function(e){return function(e){switch(e){case"connect":o({type:"connect",startStateName:""});break;case"switchScene":o({type:"switchScene",sceneName:""});break;case"returnToStoredScene":o({type:"returnToStoredScene"});break;case"setSourceMute":o({type:"setSourceMute",sourceName:"",mute:!1});break;case"setSourceVisibility":o({type:"setSourceVisibility",sceneName:"",sourceName:"",visible:!0});break;case"setTransition":o({type:"setTransition",transitionName:""});break;case"setTransitionDuration":o({type:"setTransitionDuration",transitionDuration:0});break;case"switchState":o({type:"switchState",stateName:""});break;case"storeCurrentScene":o({type:"storeCurrentScene"});break;case"dropStoredScene":o({type:"dropStoredScene"});break;case"exit":o({type:"exit"})}}(e.target.value)},value:d[e],children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"Select action type"},"0"),Object(s.jsx)("option",{value:"connect",children:"Connect"},"1"),Object(s.jsx)("option",{value:"switchScene",children:"Switch scene"},"2"),Object(s.jsx)("option",{value:"returnToStoredScene",children:"Return to stored scene"},"3"),Object(s.jsx)("option",{value:"setSourceMute",children:"Set source mute"},"4"),Object(s.jsx)("option",{value:"setSourceVisibility",children:"Set source visibility"},"5"),Object(s.jsx)("option",{value:"setTransition",children:"Set transition"},"6"),Object(s.jsx)("option",{value:"setTransitionDuration",children:"Set transition duration"},"7"),Object(s.jsx)("option",{value:"switchState",children:"Switch state"},"8"),Object(s.jsx)("option",{value:"storeCurrentScene",children:"Store current scene"},"9"),Object(s.jsx)("option",{value:"dropStoredScene",children:"Drop stored scene"},"10"),Object(s.jsx)("option",{value:"exit",children:"Exit"},"11")]})]}):"startStateName"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Start state"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{startStateName:e.target.value}))},value:d[e]})]}):"sceneName"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Scene name"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{sceneName:e.target.value}))},value:d[e]})]}):"sourceName"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Source name"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{sourceName:e.target.value}))},value:d[e]})]}):"mute"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Set to"}),Object(s.jsxs)("select",{className:"edit-assignment-form-input-text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{mute:e.target.value}))},value:d[e],children:[Object(s.jsx)("option",{value:!0,children:"Muted"},"0"),Object(s.jsx)("option",{value:!1,children:"Unmuted"},"1")]})]}):"visible"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Set to"}),Object(s.jsxs)("select",{className:"edit-assignment-form-input-text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{visible:e.target.value}))},value:d[e],children:[Object(s.jsx)("option",{value:!0,children:"Visible"},"0"),Object(s.jsx)("option",{value:!1,children:"Invisible"},"1")]})]}):"transitionName"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Transition name"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{transitionName:e.target.value}))},value:d[e]})]}):"transitionDuration"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"Transition duration (ms)"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return Number(e.target.value)&&o(Object(j.a)(Object(j.a)({},d),{},{transitionDuration:Number(e.target.value)}))},value:String(d[e])})]}):"stateName"===e?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("span",{className:"edit-assignment-form-label",children:"State name"}),Object(s.jsx)("input",{className:"edit-assignment-form-input-text",type:"text",onChange:function(e){return o(Object(j.a)(Object(j.a)({},d),{},{stateName:e.target.value}))},value:d[e]})]}):null})})),Object(s.jsxs)("div",{className:"edit-assignment-create-bottom",children:[Object(s.jsx)("div",{className:"edit-assignment-create-button",onClick:function(){return t(d)},children:Object(s.jsx)("span",{children:"Confirm"})}),Object(s.jsx)("div",{className:"edit-assignment-create-cancel",onClick:function(){return a()},children:Object(s.jsx)("span",{children:"Cancel"})})]})]})};var T=function(e){var t=e.states,a=e.selectedState,n=e.selectedKey,l=e.currentAssignment,i=e.cancelEditAssignment,d=e.addKey,o=e.modifyKey,j=e.removeKey,b=Object(c.useState)(l?l.name:""),y=Object(r.a)(b,2),u=y[0],m=y[1],f=Object(c.useState)(l?l.state:""),O=Object(r.a)(f,2),h=O[0],x=O[1],S=Object(c.useState)(l?l.color:a?t.find((function(e){return e.name===a})).color:""),v=Object(r.a)(S,2),k=v[0],p=v[1],g=Object(c.useState)(l?l.actions:[]),K=Object(r.a)(g,2),N=K[0],C=K[1],T=Object(c.useState)(!1),I=Object(r.a)(T,2),B=I[0],E=I[1];return Object(s.jsxs)("div",{className:"edit-assignment-form",children:[Object(s.jsxs)("div",{className:"edit-assignment-form-header",children:[Object(s.jsx)("span",{className:"edit-assignment-form-header-key",style:{color:k||"#a0a0a0"},children:l&&l.name?l.name+" ("+n.label+")":n.label}),Object(s.jsx)("div",{className:"edit-assignment-form-header-cancel",onClick:function(){return window.confirm("This will discard any changes made to the assignment. Are you sure you want to do this?")&&i()},children:Object(s.jsx)("span",{children:"Cancel"})})]}),Object(s.jsxs)("div",{className:"edit-assignment-form-body",children:[Object(s.jsx)(D,{states:t,name:u,onChangeNameInput:function(e){m(e)},state:h,onChangeStateInput:function(e){x(e),p(t.find((function(t){return t.name===e})).color)},disableStateInput:!!l,color:k}),B?Object(s.jsx)(F,{addAction:function(e){C([].concat(Object(w.a)(N),[e])),E(!1)},cancelCreateAction:function(){return E(!1)}}):Object(s.jsx)(A,{actions:N,createAction:function(){return E(!0)},removeAction:function(e){var t=Object(w.a)(N);t.splice(e,1),C(t)}})]}),Object(s.jsxs)("div",{className:"edit-assignment-form-footer",children:[Object(s.jsx)("div",{className:"edit-assignment-form-footer-button",onClick:function(){l?window.confirm("This will overwrite the previous assignment to this key on this state. Are you sure you want to do this?")&&(o(h,n,{name:u,state:h,color:k,actions:N}),i()):(d(h,n,{name:u,state:h,color:k,actions:N}),i())},children:Object(s.jsx)("span",{children:"Save"})}),Object(s.jsx)("div",{className:"edit-assignment-form-footer-remove",onClick:function(){window.confirm("This will permanently delete the assignment to this key on this state. Are you sure you want to do this?")&&(j(h,n),i())},children:Object(s.jsx)("span",{children:"Delete"})})]})]})};var I=function(e){var t=e.states,a=e.selectedState,c=e.selectedKey,n=e.currentAssignment,l=e.cancelEditAssignment,i=e.addKey,r=e.modifyKey,d=e.removeKey;return Object(s.jsx)("div",{className:"selected-editassignment-container",children:Object(s.jsx)(T,{states:t,selectedState:a,selectedKey:c,currentAssignment:n,cancelEditAssignment:l,addKey:i,modifyKey:r,removeKey:d})})};var B=function(){return Object(s.jsx)("div",{className:"selected-noselection",children:Object(s.jsx)("span",{children:"Select a key"})})};var E=function(e){var t=e.states,a=e.selectedState,n=e.selectedKey,l=e.selectedKeyStates,i=e.addKey,d=e.modifyKey,o=e.removeKey,j=Object(c.useState)(null),b=Object(r.a)(j,2),y=b[0],u=b[1];Object(c.useEffect)((function(){(y&&!n||y&&n.label!==y.selectedKey.label)&&u(null)}));var m=function(e,t){u({selectedKey:e,currentAssignment:t})},f=t.filter((function(e){return!l.map((function(e){return e.state})).includes(e.name)}));return Object(s.jsx)("div",{className:"selected-container",children:n?y?Object(s.jsx)(I,{states:f,selectedState:a,selectedKey:y.selectedKey,currentAssignment:y.currentAssignment,cancelEditAssignment:function(){u(null)},addKey:i,modifyKey:d,removeKey:o}):Object(s.jsxs)("div",{className:"selected-assignments-container",children:[l.map((function(e,t){return Object(s.jsx)(N,{selectedKey:n,assignment:e,editAssignment:function(){return m(n,e)}},"assign".concat(t))})),Object(s.jsx)(C,{newAssignment:function(){return m(n,null)}})]}):Object(s.jsx)(B,{})})};var L=function(e){var t=e.newConfig,a=e.loadConfig,c=e.saveConfig,n=e.interfaceConfig,l=e.modifyInterface,i=e.states,r=e.selectedState,d=e.setSelectedState,o=e.addState,j=e.modifyState,b=e.removeState,y=e.keys,u=e.selectedKey,m=e.selectedKeyStates,f=e.setSelectedKey,O=e.addKey,h=e.modifyKey,x=e.removeKey;return Object(s.jsx)("div",{className:"body",children:Object(s.jsxs)("div",{className:"body-container",children:[Object(s.jsx)(k,{newConfig:t,loadConfig:a,saveConfig:c,interfaceConfig:n,modifyInterface:l,states:i,selectedState:r,setSelectedState:d,addState:o,modifyState:j,removeState:b}),Object(s.jsx)(K,{keys:y,selectedState:r,selectedKey:u,setSelectedKey:f}),Object(s.jsx)(E,{states:i,selectedState:r,selectedKey:u,selectedKeyStates:m,addKey:O,modifyKey:h,removeKey:x})]})})};var M=function(){var e=Object(c.useState)(d),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(!1),i=Object(r.a)(l,2),j=i[0],u=i[1],m=Object(c.useState)(null),O=Object(r.a)(m,2),h=O[0],x=O[1],S=Object(c.useState)(null),v=Object(r.a)(S,2),k=v[0],p=v[1],g=function(e){var t=new FileReader;t.readAsText(e,"UTF-8"),t.onload=function(e){try{var t=JSON.parse(e.target.result);n(t)}catch(e){console.error(e)}}},K=y(a),N=b(a);return Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{}),Object(s.jsx)(L,{newConfig:function(){j?window.confirm("There are unsaved changes in your configuration. Are you sure you want to do this?")&&window.location.reload():window.location.reload()},loadConfig:function(e){j?window.confirm("There are unsaved changes in your configuration. Are you sure you want to do this?")&&g(e):g(e)},saveConfig:function(){var e=document.createElement("a"),t=new Blob([JSON.stringify(a)],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="myFile.json",document.body.appendChild(e),e.click(),u(!1)},interfaceConfig:{interface:a.interface,startStateName:a.startStateName},modifyInterface:function(e,t){var s=Object.assign({},a);s.interface=e,s.startStateName=t,n(s),u(!0)},states:K,selectedState:h,setSelectedState:x,addState:function(e){var t=Object.assign({},a);t.states.push({name:e.name,color:e.color,keys:[]}),n(t),u(!0)},modifyState:function(e,t){var s=Object.assign({},a),c=s.states.findIndex((function(t){return t.name===e}));s.states[c]={name:t.name,color:t.color,keys:s.states[c].keys},n(s),u(!0)},removeState:function(e){var t=Object.assign({},a);t.states.splice(e,1),n(t),u(!0),x(null)},keys:N,selectedKey:k,selectedKeyStates:function(e,t){if(t&&t.label){var a=e.find((function(e){return e.label===t.label}));if(a&&a.states)return a.states}return[]}(N,k),setSelectedKey:function(e){o(e,k)?p(null):p(e)},addKey:function(e,t,s){var c=Object.assign({},a),l=c.states.findIndex((function(t){return t.name===e}));c.states[l].keys.push({label:t.label,keyData:t.keyData,name:s.name,actions:s.actions}),n(c),u(!0)},modifyKey:function(e,t,s){var c=Object.assign({},a),l=c.states.findIndex((function(t){return t.name===e})),i=c.states[l].keys.findIndex((function(e){return e.label===t.label}));c.states[l].keys[i]={label:t.label,keyData:t.keyData,name:s.name,actions:s.actions},n(c),u(!0)},removeKey:function(e,t){var s=Object.assign({},a),c=s.states.findIndex((function(t){return t.name===e})),l=s.states[c].keys.findIndex((function(e){return e.label===t.label}));s.states[c].keys.splice(l,1),n(s),u(!0)}})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),P()}],[[21,1,2]]]);
//# sourceMappingURL=main.5c678300.chunk.js.map