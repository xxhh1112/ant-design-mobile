(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[128],{"0m3q":function(e,t,a){"use strict";a("NS8C")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("q2e5"),l=a("0gua"),r=a("NS8C"),c=a.n(r),o=a("lhV8"),m=a("UFL0");a("8zZG"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,i=void 0===r||r,u=Object(m["useCopy"])(),d=Object(l["a"])(u,2),s=d[0],E=d[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,o=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},i&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),l.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("q2e5"),a("NS8C"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("q2e5"),l=a("NS8C"),r=a.n(l);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},P0G4:function(e,t,a){},Suj0:function(e,t,a){"use strict";var n=a("NS8C"),l=a.n(n),r=a("q3Yw"),c=a.n(r);a("P0G4");function o(e,t){return s(e)||d(e,t)||i(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){o=!0,l=m}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=o(r,2),i=m[0],u=m[1],d=Object(n["useState"])(!1),s=o(d,2),E=s[0],v=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},TAbJ:function(e,t,a){"use strict"},"Tz/q":function(e,t,a){"use strict";a.r(t);var n=a("NS8C"),l=a.n(n),r=a("UFL0"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia"),a("0m3q"),a("Suj0")),m=l.a.memo((e=>{var t=e.demos,a=t["slider-demo1"].component,n=t["slider-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"slider-\u6ed1\u52a8\u8f93\u5165\u6761"},l.a.createElement(r["AnchorLink"],{to:"#slider-\u6ed1\u52a8\u8f93\u5165\u6761","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Slider \u6ed1\u52a8\u8f93\u5165\u6761"),l.a.createElement("p",null,"\u6ed1\u52a8\u578b\u8f93\u5165\u5668\uff0c\u5c55\u793a\u5f53\u524d\u503c\u548c\u53ef\u9009\u8303\u56f4\u3002"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("p",null,"\u5f53\u7528\u6237\u9700\u8981\u5728\u6570\u503c\u533a\u95f4/\u81ea\u5b9a\u4e49\u533a\u95f4\u5185\u8fdb\u884c\u9009\u62e9\u65f6\uff0c\u53ef\u4e3a\u8fde\u7eed\u6216\u79bb\u6563\u503c\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(c["default"],t["slider-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement(c["default"],t["slider-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"slider"},l.a.createElement(r["AnchorLink"],{to:"#slider","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Slider"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"number | [number, number]")),l.a.createElement("td",null,l.a.createElement("code",null,"range ? [0, 0] : 0"))),l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"\u6ed1\u5757\u7684\u56fe\u6807"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"marks"),l.a.createElement("td",null,"\u523b\u5ea6\u6807\u8bb0"),l.a.createElement("td",null,l.a.createElement("code",null,"{"," [key: number]: React.ReactNode ","}")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"max"),l.a.createElement("td",null,"\u6700\u5927\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"100"))),l.a.createElement("tr",null,l.a.createElement("td",null,"min"),l.a.createElement("td",null,"\u6700\u5c0f\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"0"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onAfterChange"),l.a.createElement("td",null,"\u4e0e ",l.a.createElement("code",null,"touchend")," \u89e6\u53d1\u65f6\u673a\u4e00\u81f4\uff0c\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: number | [number, number]) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"\u62d6\u62fd\u6ed1\u5757\u65f6\u89e6\u53d1\uff0c\u5e76\u628a\u5f53\u524d\u62d6\u62fd\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: number | [number, number]) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"popover"),l.a.createElement("td",null,"\u662f\u5426\u5728\u62d6\u52a8\u65f6\u663e\u793a\u60ac\u6d6e\u63d0\u793a\uff0c\u652f\u6301\u4f20\u5165\u51fd\u6570\u81ea\u5b9a\u4e49\u6e32\u67d3\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean | ((value: number) => ReactNode)")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"residentPopover"),l.a.createElement("td",null,l.a.createElement("code",null,"popover")," \u662f\u5426\u5e38\u9a7b\u663e\u793a\uff0c",l.a.createElement("code",null,"popover")," \u5b58\u5728\u65f6\u751f\u6548"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean ")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"range"),l.a.createElement("td",null,"\u662f\u5426\u4e3a\u53cc\u6ed1\u5757"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"step"),l.a.createElement("td",null,"\u6b65\u8ddd\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e ",l.a.createElement("code",null,"0"),"\uff0c\u5e76\u4e14 ",l.a.createElement("code",null,"(max - min)")," \u53ef\u88ab ",l.a.createElement("code",null,"step")," \u6574\u9664\u3002\u5f53 ",l.a.createElement("code",null,"marks")," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\uff0c",l.a.createElement("code",null,"step")," \u7684\u914d\u7f6e\u5931\u6548"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"ticks"),l.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u523b\u5ea6"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"\u5f53\u524d\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"number | [number, number]")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"css-\u53d8\u91cf"},l.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"--fill-color"),l.a.createElement("td",null,"\u586b\u5145\u989c\u8272"),l.a.createElement("td",null,l.a.createElement("code",null,"var(--adm-color-primary)"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:a})}},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return _}));var n=a("NS8C"),l=a.n(n),r=a("0gua"),c=a("/7QA"),o=a("9kvl"),m=a("UFL0"),i=a("WxlZ"),u=a.n(i),d="https://codesandbox.io/api/v1/sandboxes/define";function s(e){return u.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function E(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},l={},c=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(a),m="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(r["a"])(e,2),a=t[0],n=t[1].version;l[a]=n})),l["react-dom"]||(l["react-dom"]=l.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[m]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(c.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var i=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(r["a"])(e,2),a=t[0],l=t[1],c=l.tsx,m=l.jsx,u=l.content,d={content:c||m||u};n["_"===a?o:a]=d,i=i||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),i&&(l["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:m,dependencies:l,devDependencies:t?{typescript:"^3"}:{}},null,2)},s({files:n})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=Object(n["useState"])(),l=Object(r["a"])(a,2),c=l[0],o=l[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=E(e);function l(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,l("parameters",n),l("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),o((()=>()=>a.submit())),()=>a.remove()}}),[e]),c}var h=a("Bjia");a("YWOM");function p(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var f=e=>{var t,a=Object(n["useRef"])(null),i=Object(n["useContext"])(m["context"]),u=i.locale,d=Object(m["useLocaleProps"])(u,e),s=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(d.identifier),E=1===Object.keys(d.sources).length,f=v(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(m["useMotions"])(d.motions||[],a.current),g=Object(r["a"])(b,2),y=g[0],w=g[1],O=Object(m["useCopy"])(),j=Object(r["a"])(O,2),_=j[0],k=j[1],x=Object(n["useState"])("_"),N=Object(r["a"])(x,2),C=N[0],S=N[1],L=Object(n["useState"])(p(C,d.sources[C])),A=Object(r["a"])(L,2),M=A[0],Z=A[1],P=d.sources[C][M]||d.sources[C].content,V=Object(m["useTSPlaygroundUrl"])(u,P),T=Object(m["usePrefersColor"])(),z=Object(r["a"])(T,1);z[0];function I(e){S(e),Z(p(e,d.sources[e]))}return l.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",s?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&l.a.createElement(m["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),f&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:f}),d.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:w,onClick:()=>y()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>_(P)}),"tsx"===M&&l.a.createElement(m["Link"],{target:"_blank",to:V},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!E&&l.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:I},Object.keys(d.sources).map((e=>l.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(p(e,d.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(h["a"],{code:P,lang:M,showCopy:!1}))))},b=f,g=(a("oeoJ"),a("VOOF")),y=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(r["a"])(a,2),i=o[0],u=o[1],d=Object(m["usePrefersColor"])(),s=Object(r["a"])(d,1),E=s[0],v=Object(n["useContext"])(m["context"]),h=v.config.mode;return Object(n["useEffect"])((()=>{u(Math.random())}),[E]),Object(n["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{u(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":h},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:i}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>u(Math.random())},w),l.a.createElement(c["Popover"],{content:l.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,O)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},j)))}),w=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),O=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),j=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),_="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(m["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(b,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(y,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("NS8C"),l=a.n(n),r=a("eqKt"),c=a.n(r),o=e=>l.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:c.a.content},l.a.createElement("div",{className:c.a.title},e.title),l.a.createElement("div",{className:c.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var n=a("0gua"),l=a("NS8C"),r=a.n(l),c=a("UFL0"),o=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(c["context"]),t=e.locale,a=Object(l["useState"])(!1),m=Object(n["a"])(a,2),i=m[0],u=m[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:i,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);