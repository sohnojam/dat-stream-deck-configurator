(this["webpackJsonpdat-stream-deck-configurator"]=this["webpackJsonpdat-stream-deck-configurator"]||[]).push([[0],[,,,,function(e,t,c){},function(e,t,c){},,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),l=c.n(s),y=c(7),n=c.n(y),d=(c(13),c(2)),j={controller:{initStateName:"init"},interface:{},states:[{name:"init",color:"#ffffff",keys:[{label:"C",keyData:{key:{name:"c"},ch:"c"},name:"Connect",actions:[{type:"connect",startStateName:"main"}]},{label:"X",keyData:{key:{name:"x"},ch:"x"},name:"Exit",actions:[{type:"exit"}]}]},{name:"main",color:"#ff0000",keys:[{label:"Backspace",keyData:{key:{name:"backspace"}},name:"Exit",actions:[{type:"exit"}]}]}]};var b=function e(t,c){var a=t||{},s=c||{};return Object.keys(a).length===Object.keys(s).length&&Object.keys(a).every((function(t){return typeof a[t]===typeof s[t]&&("object"===typeof a[t]?e(a[t],s[t]):a[t]===s[t])}))},k=c(6);var r=function(e){var t=[];return e.states.forEach((function(e){e.keys.forEach((function(c){var a=t.findIndex((function(e){return e.label===c.label}));-1!==a?t[a].states.push({name:e.name,color:e.color}):t.push(Object(k.a)(Object(k.a)({},c),{},{states:[{name:e.name,color:e.color}]}))}))})),t};var S=function(e){return e.states.map((function(e){return{name:e.name,color:e.color,keys:e.keys.length}}))};c(4);var i=function(){return Object(a.jsxs)("div",{className:"header-nametag-container",children:[Object(a.jsx)("div",{className:"header-nametag-line1",children:Object(a.jsx)("span",{children:"dat-stream-deck"})}),Object(a.jsx)("div",{className:"header-nametag-line2",children:Object(a.jsx)("span",{children:"configurator"})})]})};var K=function(){return Object(a.jsxs)("div",{className:"header-versiontag-container",children:[Object(a.jsx)("div",{className:"header-versiontag-line1",children:Object(a.jsx)("span",{children:"v. 0.1.0"})}),Object(a.jsx)("div",{className:"header-versiontag-line2",children:Object(a.jsx)("span",{children:"github.com/sohnojam"})})]})};var o=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)(i,{}),Object(a.jsx)(K,{})]})})};c(14),c(15);var O=function(){return Object(a.jsx)("div",{className:"states-container",children:"State management and New/Load/Save buttons will go here"})};c(5);var x=function(e){var t=e.special,c=e.label,s=e.keyData,l=e.keys,y=e.selectedState,n=e.selectedKey,d=e.setSelectedKey,j=l.find((function(e){return e.label===c})),b=[];return j&&(b=y?j.states.filter((function(e){return e.name===y})):j.states),Object(a.jsxs)("div",{className:"key".concat(n&&c===n.label?" key-selected":"").concat(t?" ".concat(t):""),onClick:function(){return d({label:c,keyData:s})},children:[Object(a.jsx)("div",{className:"key-label",children:c}),Object(a.jsx)("div",{className:"key-state-container",children:j?b.map((function(e,t){return Object(a.jsx)("div",{className:"key-state-circle",style:{backgroundColor:e.color||"#000000",boxShadow:"0 0 3px 0 ".concat(e.color||"#000000")}},"key".concat(c,"s").concat(t))})):null})]})};var h=function(e){var t=e.length;return Object(a.jsx)("div",{style:{gridColumn:"span ".concat(t)}})};var m=function(e){var t=e.keys,c=e.selectedState,s=e.selectedKey,l=e.setSelectedKey;return Object(a.jsxs)("div",{className:"keyboard",children:[Object(a.jsx)(x,{label:"Esc",keyData:{key:{name:"escape"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"5"}),Object(a.jsx)(x,{label:"F1",keyData:{key:{name:"f1"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F2",keyData:{key:{name:"f2"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F3",keyData:{key:{name:"f3"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F4",keyData:{key:{name:"f4"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"3"}),Object(a.jsx)(x,{label:"F5",keyData:{key:{name:"f5"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F6",keyData:{key:{name:"f6"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F7",keyData:{key:{name:"f7"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F8",keyData:{key:{name:"f8"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"3"}),Object(a.jsx)(x,{label:"F9",keyData:{key:{name:"f9"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F10",keyData:{key:{name:"f10"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F11",keyData:{key:{name:"f11"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F12",keyData:{key:{name:"f12"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"~",keyData:{ch:"`"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"1",keyData:{ch:"1"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"2",keyData:{ch:"2"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"3",keyData:{ch:"3"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"4",keyData:{ch:"4"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"5",keyData:{ch:"5"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"6",keyData:{ch:"6"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"7",keyData:{ch:"7"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"8",keyData:{ch:"8"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"9",keyData:{ch:"9"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"0",keyData:{ch:"0"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"-",keyData:{ch:"-"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"=",keyData:{ch:"="},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"Backspace",special:"back",keyData:{key:{name:"backspace"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"Tab",special:"tab",keyData:{key:{name:"tab"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"Q",keyData:{ch:"q",key:{name:"q"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"W",keyData:{ch:"w",key:{name:"w"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"E",keyData:{ch:"e",key:{name:"e"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"R",keyData:{ch:"r",key:{name:"r"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"T",keyData:{ch:"t",key:{name:"t"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"Y",keyData:{ch:"y",key:{name:"y"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"U",keyData:{ch:"u",key:{name:"u"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"I",keyData:{ch:"i",key:{name:"i"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"O",keyData:{ch:"o",key:{name:"o"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"P",keyData:{ch:"p",key:{name:"p"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"[",keyData:{ch:"["},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"]",keyData:{ch:"]"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"\\",special:"or",keyData:{ch:"\\"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"10"}),Object(a.jsx)(x,{label:"A",keyData:{ch:"a",key:{name:"a"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"S",keyData:{ch:"s",key:{name:"s"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"D",keyData:{ch:"d",key:{name:"d"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"F",keyData:{ch:"f",key:{name:"f"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"G",keyData:{ch:"g",key:{name:"g"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"H",keyData:{ch:"h",key:{name:"h"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"J",keyData:{ch:"j",key:{name:"j"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"K",keyData:{ch:"k",key:{name:"k"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"L",keyData:{ch:"l",key:{name:"l"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:";",keyData:{ch:";"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"'",keyData:{ch:"'"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"Enter",special:"enter",keyData:{key:{name:"return"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"13"}),Object(a.jsx)(x,{label:"Z",keyData:{ch:"z",key:{name:"z"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"X",keyData:{ch:"x",key:{name:"x"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"C",keyData:{ch:"c",key:{name:"c"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"V",keyData:{ch:"v",key:{name:"v"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"B",keyData:{ch:"b",key:{name:"b"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"N",keyData:{ch:"n",key:{name:"n"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"M",keyData:{ch:"m",key:{name:"m"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:",",keyData:{ch:","},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:".",keyData:{ch:"."},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(x,{label:"/",keyData:{ch:"/"},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"13"}),Object(a.jsx)(h,{length:"6"}),Object(a.jsx)(h,{length:"6"}),Object(a.jsx)(h,{length:"6"}),Object(a.jsx)(x,{label:"Space",special:"space",keyData:{key:{name:"space"}},keys:t,selectedState:c,selectedKey:s,setSelectedKey:l}),Object(a.jsx)(h,{length:"6"}),Object(a.jsx)(h,{length:"6"}),Object(a.jsx)(h,{length:"6"}),Object(a.jsx)(h,{length:"6"})]})};c(16);var u=function(){return Object(a.jsx)("div",{className:"selected-container",children:"Information about the selected key will go here"})};var f=function(e){var t=e.states,c=e.selectedState,s=e.setSelectedState,l=e.addState,y=e.modifyState,n=e.removeState,d=e.keys,j=e.selectedKey,b=e.setSelectedKey,k=e.addKey,r=e.modifyKey,S=e.removeKey;return Object(a.jsx)("div",{className:"body",children:Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsx)(O,{states:t,selectedState:c,setSelectedState:s,addState:l,modifyState:y,removeState:n}),Object(a.jsx)(m,{keys:d,selectedState:c,selectedKey:j,setSelectedKey:b}),Object(a.jsx)(u,{selectedKey:j,addKey:k,modifyKey:r,removeKey:S})]})})};var D=function(){var e=Object(s.useState)(j),t=Object(d.a)(e,2),c=t[0],l=(t[1],Object(s.useState)(!1)),y=Object(d.a)(l,2),n=(y[0],y[1],Object(s.useState)(null)),k=Object(d.a)(n,2),i=k[0],K=k[1],O=Object(s.useState)(null),x=Object(d.a)(O,2),h=x[0],m=x[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{}),Object(a.jsx)(f,{newConfig:function(){return null},loadConfig:function(){return null},saveConfig:function(){return null},states:S(c),selectedState:i,setSelectedState:K,addState:function(){return null},modifyState:function(){return null},removeState:function(){return null},keys:r(c),selectedKey:h,setSelectedKey:function(e){b(e,h)?m(null):m(e)},addKey:function(){return null},modifyKey:function(){return null},removeKey:function(){return null}})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,y=t.getTTFB;c(e),a(e),s(e),l(e),y(e)}))};n.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.5707c815.chunk.js.map