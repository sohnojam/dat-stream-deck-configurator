(this["webpackJsonpdat-stream-deck-configurator"]=this["webpackJsonpdat-stream-deck-configurator"]||[]).push([[0],[,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),l=c.n(a),n=c(8),y=c.n(n),d=(c(15),c(2)),j={controller:{initStateName:"init"},interface:{},states:[{name:"init",color:"#ffffff",keys:[{label:"C",keyData:{key:{name:"c"},ch:"c"},name:"Connect",actions:[{type:"connect",startStateName:"main"}]},{label:"X",keyData:{key:{name:"x"},ch:"x"},name:"Exit",actions:[{type:"exit"}]}]},{name:"main",color:"#ff0000",keys:[{label:"Backspace",keyData:{key:{name:"backspace"}},name:"Exit",actions:[{type:"exit"}]}]}]};var b=function e(t,c){var s=t||{},a=c||{};return Object.keys(s).length===Object.keys(a).length&&Object.keys(s).every((function(t){return typeof s[t]===typeof a[t]&&("object"===typeof s[t]?e(s[t],a[t]):s[t]===a[t])}))},r=c(7);var i=function(e){var t=[];return e.states.forEach((function(e){e.keys.forEach((function(c){var s=t.findIndex((function(e){return e.label===c.label}));-1!==s?t[s].states.push({state:e.name,color:e.color,name:c.name,actions:c.actions}):t.push(Object(r.a)(Object(r.a)({},c),{},{states:[{state:e.name,color:e.color,name:c.name,actions:c.actions}]}))}))})),t};var k=function(e){return e.states.map((function(e){return{name:e.name,color:e.color,keys:e.keys.length}}))};c(5);var o=function(){return Object(s.jsxs)("div",{className:"header-nametag-container",children:[Object(s.jsx)("div",{className:"header-nametag-line1",children:Object(s.jsx)("span",{children:"dat-stream-deck"})}),Object(s.jsx)("div",{className:"header-nametag-line2",children:Object(s.jsx)("span",{children:"configurator"})})]})};var S=function(){return Object(s.jsxs)("div",{className:"header-versiontag-container",children:[Object(s.jsx)("div",{className:"header-versiontag-line1",children:Object(s.jsx)("span",{children:"v. 0.1.0"})}),Object(s.jsx)("div",{className:"header-versiontag-line2",children:Object(s.jsx)("span",{children:"github.com/sohnojam"})})]})};var K=function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"header-container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(S,{})]})})};c(16),c(17);var m=function(){return Object(s.jsx)("div",{className:"states-container",children:"State management and New/Load/Save buttons will go here"})};c(6);var O=function(e){var t=e.special,c=e.label,a=e.keyData,l=e.keys,n=e.selectedState,y=e.selectedKey,d=e.setSelectedKey,j=l.find((function(e){return e.label===c})),b=[];return j&&(b=n?j.states.filter((function(e){return e.state===n})):j.states),Object(s.jsxs)("div",{className:"key".concat(y&&c===y.label?" key-selected":"").concat(t?" ".concat(t):""),onClick:function(){return d({label:c,keyData:a})},children:[Object(s.jsx)("div",{className:"key-label",children:c}),Object(s.jsx)("div",{className:"key-state-container",children:j?b.map((function(e,t){return Object(s.jsx)("div",{className:"key-state-circle",style:{backgroundColor:e.color||"#000000",boxShadow:"0 0 3px 0 ".concat(e.color||"#000000")}},"key".concat(c,"s").concat(t))})):null})]})};var x=function(e){var t=e.length;return Object(s.jsx)("div",{style:{gridColumn:"span ".concat(t)}})};var u=function(e){var t=e.keys,c=e.selectedState,a=e.selectedKey,l=e.setSelectedKey;return Object(s.jsxs)("div",{className:"keyboard",children:[Object(s.jsx)(O,{label:"Esc",keyData:{key:{name:"escape"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"5"}),Object(s.jsx)(O,{label:"F1",keyData:{key:{name:"f1"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F2",keyData:{key:{name:"f2"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F3",keyData:{key:{name:"f3"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F4",keyData:{key:{name:"f4"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"3"}),Object(s.jsx)(O,{label:"F5",keyData:{key:{name:"f5"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F6",keyData:{key:{name:"f6"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F7",keyData:{key:{name:"f7"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F8",keyData:{key:{name:"f8"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"3"}),Object(s.jsx)(O,{label:"F9",keyData:{key:{name:"f9"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F10",keyData:{key:{name:"f10"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F11",keyData:{key:{name:"f11"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F12",keyData:{key:{name:"f12"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"~",keyData:{ch:"`"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"1",keyData:{ch:"1"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"2",keyData:{ch:"2"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"3",keyData:{ch:"3"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"4",keyData:{ch:"4"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"5",keyData:{ch:"5"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"6",keyData:{ch:"6"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"7",keyData:{ch:"7"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"8",keyData:{ch:"8"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"9",keyData:{ch:"9"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"0",keyData:{ch:"0"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"-",keyData:{ch:"-"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"=",keyData:{ch:"="},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"Backspace",special:"back",keyData:{key:{name:"backspace"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"Tab",special:"tab",keyData:{key:{name:"tab"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"Q",keyData:{ch:"q",key:{name:"q"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"W",keyData:{ch:"w",key:{name:"w"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"E",keyData:{ch:"e",key:{name:"e"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"R",keyData:{ch:"r",key:{name:"r"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"T",keyData:{ch:"t",key:{name:"t"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"Y",keyData:{ch:"y",key:{name:"y"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"U",keyData:{ch:"u",key:{name:"u"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"I",keyData:{ch:"i",key:{name:"i"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"O",keyData:{ch:"o",key:{name:"o"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"P",keyData:{ch:"p",key:{name:"p"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"[",keyData:{ch:"["},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"]",keyData:{ch:"]"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"\\",special:"or",keyData:{ch:"\\"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"10"}),Object(s.jsx)(O,{label:"A",keyData:{ch:"a",key:{name:"a"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"S",keyData:{ch:"s",key:{name:"s"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"D",keyData:{ch:"d",key:{name:"d"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"F",keyData:{ch:"f",key:{name:"f"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"G",keyData:{ch:"g",key:{name:"g"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"H",keyData:{ch:"h",key:{name:"h"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"J",keyData:{ch:"j",key:{name:"j"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"K",keyData:{ch:"k",key:{name:"k"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"L",keyData:{ch:"l",key:{name:"l"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:";",keyData:{ch:";"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"'",keyData:{ch:"'"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"Enter",special:"enter",keyData:{key:{name:"return"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"13"}),Object(s.jsx)(O,{label:"Z",keyData:{ch:"z",key:{name:"z"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"X",keyData:{ch:"x",key:{name:"x"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"C",keyData:{ch:"c",key:{name:"c"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"V",keyData:{ch:"v",key:{name:"v"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"B",keyData:{ch:"b",key:{name:"b"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"N",keyData:{ch:"n",key:{name:"n"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"M",keyData:{ch:"m",key:{name:"m"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:",",keyData:{ch:","},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:".",keyData:{ch:"."},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(O,{label:"/",keyData:{ch:"/"},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"13"}),Object(s.jsx)(x,{length:"6"}),Object(s.jsx)(x,{length:"6"}),Object(s.jsx)(x,{length:"6"}),Object(s.jsx)(O,{label:"Space",special:"space",keyData:{key:{name:"space"}},keys:t,selectedState:c,selectedKey:a,setSelectedKey:l}),Object(s.jsx)(x,{length:"6"}),Object(s.jsx)(x,{length:"6"}),Object(s.jsx)(x,{length:"6"}),Object(s.jsx)(x,{length:"6"})]})};c(3);var h=function(e){var t=e.selectedKey,c=e.assignment,a=e.editAssignment;return Object(s.jsxs)("div",{className:"selected-assignment-container",onClick:function(){return a()},children:[Object(s.jsxs)("div",{className:"selected-assignment-header",children:[Object(s.jsx)("div",{className:"selected-assignment-header-circle",style:{backgroundColor:c.color||"#000000",boxShadow:"0 0 5px 0 ".concat(c.color||"#000000")}}),Object(s.jsxs)("div",{className:"selected-assignment-header-text",style:{color:c.color||"#000000"},children:[Object(s.jsx)("span",{className:"selected-assignment-header-text-line1",children:c.name||"Assignment"}),Object(s.jsxs)("span",{className:"selected-assignment-header-text-line2",children:[c.state||"State"," - ",t.label]})]})]}),Object(s.jsx)("div",{className:"selected-assignment-actions",children:c.actions.map((function(e,a){return Object(s.jsx)("div",{className:"selected-assignment-actions-line",children:Object(s.jsx)("span",{className:"selected-assignment-actions-type",style:{color:c.color||"#000000"},children:e.type})},"".concat(t.label,"assign").concat(c.state,"act").concat(a))}))})]})};var f=function(e){var t=e.newAssignment;return Object(s.jsx)("div",{className:"selected-newassignment-container",onClick:function(){return t()},children:"Add new"})},v=c(9);var D=function(e){return Object(v.a)(e),Object(s.jsx)("div",{className:"selected-editassignment-container"})};var g=function(){return Object(s.jsx)("div",{className:"selected-noselection",children:Object(s.jsx)("span",{children:"Select a key"})})};var p=function(e){e.states,e.selectedState;var t=e.selectedKey,c=e.selectedKeyStates,l=(e.addKey,e.modifyKey,e.removeKey,Object(a.useState)(null)),n=Object(d.a)(l,2),y=n[0],j=n[1];Object(a.useEffect)((function(){(y&&!t||y&&t.label!==y.selectedKey.label)&&j(null)}));var b=function(e,t){j({selectedKey:e,currentAssignment:t})};return Object(s.jsx)("div",{className:"selected-container",children:t?y?Object(s.jsx)(D,{selectedKey:y.selectedKey,currentAssignment:y.currentAssignment,cancelEditAssignment:function(){j(null)}}):Object(s.jsxs)("div",{className:"selected-assignments-container",children:[c.map((function(e,c){return Object(s.jsx)(h,{selectedKey:t,assignment:e,editAssignment:function(){return b(t,e)}},"assign".concat(c))})),Object(s.jsx)(f,{newAssignment:function(){return b(t,{actions:[],name:"",state:null,color:""})}})]}):Object(s.jsx)(g,{})})};var N=function(e){var t=e.states,c=e.selectedState,a=e.setSelectedState,l=e.addState,n=e.modifyState,y=e.removeState,d=e.keys,j=e.selectedKey,b=e.selectedKeyStates,r=e.setSelectedKey,i=e.addKey,k=e.modifyKey,o=e.removeKey;return Object(s.jsx)("div",{className:"body",children:Object(s.jsxs)("div",{className:"body-container",children:[Object(s.jsx)(m,{states:t,selectedState:c,setSelectedState:a,addState:l,modifyState:n,removeState:y}),Object(s.jsx)(u,{keys:d,selectedState:c,selectedKey:j,setSelectedKey:r}),Object(s.jsx)(p,{states:t,selectedState:c,selectedKey:j,selectedKeyStates:b,addKey:i,modifyKey:k,removeKey:o})]})})};var F=function(){var e=Object(a.useState)(j),t=Object(d.a)(e,2),c=t[0],l=(t[1],Object(a.useState)(!1)),n=Object(d.a)(l,2),y=(n[0],n[1],Object(a.useState)(null)),r=Object(d.a)(y,2),o=r[0],S=r[1],m=Object(a.useState)(null),O=Object(d.a)(m,2),x=O[0],u=O[1],h=k(c),f=i(c);return Object(s.jsxs)("div",{children:[Object(s.jsx)(K,{}),Object(s.jsx)(N,{newConfig:function(){return null},loadConfig:function(){return null},saveConfig:function(){return null},states:h,selectedState:o,setSelectedState:S,addState:function(){return null},modifyState:function(){return null},removeState:function(){return null},keys:f,selectedKey:x,selectedKeyStates:function(e,t){if(t&&t.label){var c=e.find((function(e){return e.label===t.label}));if(c&&c.states)return c.states}return[]}(f,x),setSelectedKey:function(e){b(e,x)?u(null):u(e)},addKey:function(){return null},modifyKey:function(){return null},removeKey:function(){return null}})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),l(e),n(e)}))};y.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),C()}],[[18,1,2]]]);
//# sourceMappingURL=main.967508d3.chunk.js.map