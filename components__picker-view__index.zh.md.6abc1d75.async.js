(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{"0m3q":function(e,t,a){"use strict";a("NS8C")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("q2e5"),l=a("0gua"),c=a("NS8C"),r=a.n(c),i=a("lhV8"),o=a("UFL0");a("8zZG"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,m=void 0===c||c,d=Object(o["useCopy"])(),u=Object(l["a"])(d,2),s=u[0],E=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(i["a"],Object(n["a"])({},i["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},m&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),l.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",i({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("q2e5"),a("NS8C"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("q2e5"),l=a("NS8C"),c=a.n(l);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},P0G4:function(e,t,a){},Suj0:function(e,t,a){"use strict";var n=a("NS8C"),l=a.n(n),c=a("q3Yw"),r=a.n(c);a("P0G4");function i(e,t){return s(e)||u(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,c=[],r=!0,i=!1;try{for(a=a.call(e);!(r=(n=a.next()).done);r=!0)if(c.push(n.value),t&&c.length===t)break}catch(o){i=!0,l=o}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw l}}return c}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),c=Object(n["useState"])(!1),o=i(c,2),m=o[0],d=o[1],u=Object(n["useState"])(!1),s=i(u,2),E=s[0],p=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=r()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return N}));var n=a("NS8C"),l=a.n(n),c=a("0gua"),r=a("/7QA"),i=a("9kvl"),o=a("UFL0"),m=a("WxlZ"),d=a.n(m),u="https://codesandbox.io/api/v1/sandboxes/define";function s(e){return d.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function E(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},l={},r=Object.values(e.dependencies).filter((e=>e.css)),i="app".concat(a),o="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],n=t[1].version;l[a]=n})),l["react-dom"]||(l["react-dom"]=l.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[o]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(r.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var m=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],l=t[1],r=l.tsx,o=l.jsx,d=l.content,u={content:r||o||d};n["_"===a?i:a]=u,m=m||u.content.includes("from 'demos'"),u.content=u.content.replace("from 'demos'","from './demos-util'")})),m&&(l["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:o,dependencies:l,devDependencies:t?{typescript:"^3"}:{}},null,2)},s({files:n})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,a=Object(n["useState"])(),l=Object(c["a"])(a,2),r=l[0],i=l[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=E(e);function l(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,l("parameters",n),l("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),i((()=>()=>a.submit())),()=>a.remove()}}),[e]),r}var h=a("Bjia");a("YWOM");function v(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var k=e=>{var t,a=Object(n["useRef"])(null),m=Object(n["useContext"])(o["context"]),d=m.locale,u=Object(o["useLocaleProps"])(d,e),s=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(u.identifier),E=1===Object.keys(u.sources).length,k=p(null!==(t=u.hideActions)&&void 0!==t&&t.includes("CSB")?null:u),f=Object(o["useMotions"])(u.motions||[],a.current),b=Object(c["a"])(f,2),w=b[0],g=b[1],y=Object(o["useCopy"])(),x=Object(c["a"])(y,2),N=x[0],P=x[1],O=Object(n["useState"])("_"),j=Object(c["a"])(O,2),C=j[0],_=j[1],L=Object(n["useState"])(v(C,u.sources[C])),V=Object(c["a"])(L,2),A=V[0],S=V[1],D=u.sources[C][A]||u.sources[C].content,M=Object(o["useTSPlaygroundUrl"])(d,D),I=Object(o["usePrefersColor"])(),Z=Object(c["a"])(I,1);Z[0];function z(e){_(e),S(v(e,u.sources[e]))}return l.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",s?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&l.a.createElement(o["AnchorLink"],{to:"#".concat(u.identifier)},u.title),u.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},u.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),k&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),u.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:g,onClick:()=>w()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":P,onClick:()=>N(D)}),"tsx"===A&&l.a.createElement(o["Link"],{target:"_blank",to:M},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!E&&l.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:z},Object.keys(u.sources).map((e=>l.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(v(e,u.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(h["a"],{code:D,lang:A,showCopy:!1}))))},f=k,b=(a("oeoJ"),a("VOOF")),w=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),i=Object(c["a"])(a,2),m=i[0],d=i[1],u=Object(o["usePrefersColor"])(),s=Object(c["a"])(u,1),E=s[0],p=Object(n["useContext"])(o["context"]),h=p.config.mode;return Object(n["useEffect"])((()=>{d(Math.random())}),[E]),Object(n["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{d(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":h},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:m}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>d(Math.random())},g),l.a.createElement(r["Popover"],{content:l.a.createElement(b["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,y)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},x)))}),g=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),y=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),x=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),N="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(f,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(w,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("NS8C"),l=a.n(n),c=a("eqKt"),r=a.n(c),i=e=>l.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:r.a.content},l.a.createElement("div",{className:r.a.title},e.title),l.a.createElement("div",{className:r.a.description},e.description)));t["a"]=i},mVOg:function(e,t,a){"use strict";var n=a("0gua"),l=a("NS8C"),c=a.n(l),r=a("UFL0"),i=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(r["context"]),t=e.locale,a=Object(l["useState"])(!1),o=Object(n["a"])(a,2),m=o[0],d=o[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(i["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:m,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},nnhr:function(e,t,a){"use strict";a.r(t);var n=a("NS8C"),l=a.n(n),c=a("UFL0"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),i=(a("gKi5"),a("Bjia")),o=(a("0m3q"),a("Suj0")),m=l.a.memo((e=>{var t=e.demos,a=t["picker-view-demo1"].component,n=t["cascade-picker-view-demo1"].component,m=t["date-picker-view-demo1"].component,d=t["date-picker-view-demo3"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"pickerview-\u9009\u62e9\u5668\u89c6\u56fe"},l.a.createElement(c["AnchorLink"],{to:"#pickerview-\u9009\u62e9\u5668\u89c6\u56fe","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"PickerView \u9009\u62e9\u5668\u89c6\u56fe"),l.a.createElement("p",null,"PickerView \u7cfb\u5217\u4e00\u5171\u5305\u62ec\u4e86\u4e09\u4e2a\u7ec4\u4ef6\uff1a",l.a.createElement(c["AnchorLink"],{to:"#pickerview"},"PickerView"),"\u3001",l.a.createElement(c["AnchorLink"],{to:"#cascadepickerview"},"CascadePickerView"),"\u3001",l.a.createElement(c["AnchorLink"],{to:"#datepickerview"},"DatePickerView"),"\u3002"),l.a.createElement("h2",{id:"pickerview"},l.a.createElement(c["AnchorLink"],{to:"#pickerview","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"PickerView"),l.a.createElement("p",null,"PickerView \u662f ",l.a.createElement(c["AnchorLink"],{to:"/zh/components/picker/#picker"},"Picker")," \u7684\u5185\u5bb9\u533a\u57df\u3002"),l.a.createElement("h3",{id:"\u793a\u4f8b"},l.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(r["default"],t["picker-view-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"columns"),l.a.createElement("td",null,"\u914d\u7f6e\u6bcf\u4e00\u5217\u7684\u9009\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerValue[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))),l.a.createElement("tr",null,l.a.createElement("td",null,"mouseWheel"),l.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u901a\u8fc7\u9f20\u6807\u6eda\u8f6e\u8fdb\u884c\u9009\u62e9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"\u9009\u9879\u6539\u53d8\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: PickerValue[], extend: PickerValueExtend) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"renderLabel"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6bcf\u5217\u5c55\u793a\u7684\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"(item: PickerColumnItem) => ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"(item) => item.label"))),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerValue[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"loading"),l.a.createElement("td",null,"\u662f\u5426\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"loadingContent"),l.a.createElement("td",null,"\u52a0\u8f7d\u72b6\u6001\u4e0b\u5c55\u793a\u7684\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u8f6c\u5708\u52a0\u8f7d\u4e2d\u7684\u52a0\u8f7d\u6548\u679c"))))),l.a.createElement("p",null,"\u5173\u4e8e ",l.a.createElement("code",null,"PickerColumnItem")," ",l.a.createElement("code",null,"PickerColumn")," ",l.a.createElement("code",null,"PickerValue")," ",l.a.createElement("code",null,"PickerValueExtend")," \u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003 ",l.a.createElement(c["Link"],{to:"/zh/components/picker"},"Picker")," \u7684\u6587\u6863\u3002"),l.a.createElement("h3",{id:"css-\u53d8\u91cf"},l.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"--height"),l.a.createElement("td",null,"\u6574\u4f53\u7684\u9ad8\u5ea6"),l.a.createElement("td",null,l.a.createElement("code",null,"240px"))),l.a.createElement("tr",null,l.a.createElement("td",null,"--item-font-size"),l.a.createElement("td",null,"\u9009\u9879\u7684\u5b57\u53f7"),l.a.createElement("td",null,l.a.createElement("code",null,"16px"))),l.a.createElement("tr",null,l.a.createElement("td",null,"--item-height"),l.a.createElement("td",null,"\u9009\u9879\u7684\u9ad8\u5ea6\uff0c\u4ec5\u652f\u6301 px rem \u548c vw \u5355\u4f4d"),l.a.createElement("td",null,l.a.createElement("code",null,"34px"))))),l.a.createElement("h2",{id:"cascadepickerview"},l.a.createElement(c["AnchorLink"],{to:"#cascadepickerview","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CascadePickerView"),l.a.createElement("p",null,"CascadePickerView \u662f ",l.a.createElement(c["AnchorLink"],{to:"/zh/components/picker/#cascadepicker"},"CascadePicker")," \u7684\u5185\u5bb9\u533a\u57df\u3002"),l.a.createElement("h3",{id:"\u793a\u4f8b-1"},l.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(r["default"],t["cascade-picker-view-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u5c5e\u6027-1"},l.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u6811\u5f62\u7684\u9009\u9879\u6570\u636e"),l.a.createElement("td",null,l.a.createElement("code",null,"CascadePickerOption[]")),l.a.createElement("td",null,"-")))),l.a.createElement("p",null,"\u5173\u4e8e ",l.a.createElement("code",null,"CascadePickerOption")," \u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003 ",l.a.createElement(c["AnchorLink"],{to:"/zh/components/picker/#cascadepicker"},"CascadePicker")," \u7684\u6587\u6863\u3002"),l.a.createElement("p",null,"\u5176\u4ed6\u5c5e\u6027\u540c ",l.a.createElement(c["AnchorLink"],{to:"#pickerview"},"PickerView"),"\uff0c\u4f46\u4e0d\u652f\u6301 ",l.a.createElement("code",null,"columns"),"\u3002"),l.a.createElement("h3",{id:"css-\u53d8\u91cf-1"},l.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),l.a.createElement("p",null,"\u540c ",l.a.createElement("code",null,"PickerView"),"\u3002"),l.a.createElement("h2",{id:"datepickerview"},l.a.createElement(c["AnchorLink"],{to:"#datepickerview","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"DatePickerView"),l.a.createElement("p",null,"DatePickerView \u662f ",l.a.createElement(c["AnchorLink"],{to:"/zh/components/picker/#datepicker"},"DatePicker")," \u7684\u5185\u5bb9\u533a\u57df\u3002"),l.a.createElement("h3",{id:"\u793a\u4f8b-2"},l.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(r["default"],t["date-picker-view-demo1"].previewerProps,l.a.createElement(m,null)),l.a.createElement(r["default"],t["date-picker-view-demo3"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u5c5e\u6027-2"},l.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(i["a"],{code:"type PickerDate = Date & {\n  tillNow?: boolean\n}",lang:"typescript"}),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("th",null,"\u7248\u672c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerDate")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"filter"),l.a.createElement("td",null,"\u8fc7\u6ee4\u53ef\u4f9b\u9009\u62e9\u7684\u65f6\u95f4"),l.a.createElement("td",null,l.a.createElement("code",null,"DatePickerFilter")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"max"),l.a.createElement("td",null,"\u6700\u5927\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerDate")),l.a.createElement("td",null,"\u5341\u5e74\u540e"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"min"),l.a.createElement("td",null,"\u6700\u5c0f\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerDate")),l.a.createElement("td",null,"\u5341\u5e74\u524d"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"mouseWheel"),l.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u901a\u8fc7\u9f20\u6807\u6eda\u8f6e\u8fdb\u884c\u9009\u62e9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"\u9009\u9879\u6539\u53d8\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: PickerDate) => void")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"precision"),l.a.createElement("td",null,"\u7cbe\u5ea6"),l.a.createElement("td",null,l.a.createElement("code",null,"'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'week' | 'week-day'")),l.a.createElement("td",null,l.a.createElement("code",null,"'day'")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"renderLabel"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6e32\u67d3\u6bcf\u5217\u5c55\u793a\u7684\u5185\u5bb9\u3002\u5176\u4e2d ",l.a.createElement("code",null,"type")," \u53c2\u6570\u4e3a ",l.a.createElement("code",null,"precision")," \u4e2d\u7684\u4efb\u610f\u503c\uff0c",l.a.createElement("code",null,"data")," \u53c2\u6570\u4e3a\u9ed8\u8ba4\u6e32\u67d3\u7684\u6570\u5b57"),l.a.createElement("td",null,l.a.createElement("code",null,"(type: string, data: number) => ReactNode")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"PickerDate")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"loading"),l.a.createElement("td",null,"\u662f\u5426\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"loadingContent"),l.a.createElement("td",null,"\u52a0\u8f7d\u72b6\u6001\u4e0b\u5c55\u793a\u7684\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u8f6c\u5708\u52a0\u8f7d\u4e2d\u7684\u52a0\u8f7d\u6548\u679c")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"tillNow"),l.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u201c\u81f3\u4eca\u201d"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,"-"),l.a.createElement("td",null,"5.32.0")))),l.a.createElement("p",null,"\u5173\u4e8e ",l.a.createElement("code",null,"DatePickerFilter")," \u7684\u7c7b\u578b\u5b9a\u4e49\u548c\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003 ",l.a.createElement(c["AnchorLink"],{to:"/zh/components/picker#datepicker"},"DatePicker")," \u7684\u6587\u6863\u3002"),l.a.createElement("h3",{id:"css-\u53d8\u91cf-2"},l.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf-2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),l.a.createElement("p",null,"\u540c ",l.a.createElement("code",null,"PickerView"),"\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:a})}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);