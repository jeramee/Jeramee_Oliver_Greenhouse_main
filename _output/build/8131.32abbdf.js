"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8131],{68131:(e,t,o)=>{o.r(t),o.d(t,{main:()=>f});var r=o(63109),s=o(27189),l=o(27476);const a=Promise.all([o.e(1473),o.e(2048),o.e(6891)]).then(o.bind(o,74044)),n=[o.e(2442).then(o.t.bind(o,4196,23)),o.e(8419).then(o.t.bind(o,18419,23)),o.e(6213).then(o.t.bind(o,92813,23))],i=["@jupyterlab/apputils-extension:workspaces","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:resolver","@jupyterlab/docmanager-extension:download","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/help-extension:about"];async function c(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}async function f(){await a;const e=[],t=[],f=[],h=[],p=[],u=[],y=JSON.parse(l.PageConfig.getOption("federated_extensions")),b=new Set;function*x(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)l.PageConfig.Extension.isDisabled(e.id)||i.includes(e.id)||i.includes(e.id.split(":")[0])||(yield e)}y.forEach((e=>{e.liteExtension?u.push(c(e.name,e.extension)):(e.extension&&(b.add(e.name),t.push(c(e.name,e.extension))),e.mimeExtension&&(b.add(e.name),f.push(c(e.name,e.mimeExtension))),e.style&&h.push(c(e.name,e.style)))}));const j=[];if(!b.has("@jupyterlab/json-extension"))try{let e=o(11585);for(let t of x(e))j.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/javascript-extension"))try{let e=o(22746);for(let t of x(e))j.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/pdf-extension"))try{let e=o(60758);for(let t of x(e))j.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/vega5-extension"))try{let e=o(45825);for(let t of x(e))j.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlite/iframe-extension"))try{let e=o(76502);for(let t of x(e))j.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(f)).forEach((e=>{if("fulfilled"===e.status)for(let t of x(e.value))j.push(t);else console.error(e.reason)})),!b.has("@jupyterlab/application-extension"))try{let t=o(22345);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/apputils-extension"))try{let t=o(59595);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/celltags-extension"))try{let t=o(60741);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/cell-toolbar-extension"))try{let t=o(52577);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/codemirror-extension"))try{let t=o(2048);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/completer-extension"))try{let t=o(69020);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/console-extension"))try{let t=o(69683);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/csvviewer-extension"))try{let t=o(52731);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/docmanager-extension"))try{let t=o(64531);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/documentsearch-extension"))try{let t=o(2012);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/filebrowser-extension"))try{let t=o(71152);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/fileeditor-extension"))try{let t=o(53630);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/help-extension"))try{let t=o(30418);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/htmlviewer-extension"))try{let t=o(3774);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/imageviewer-extension"))try{let t=o(84033);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/inspector-extension"))try{let t=o(65528);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/launcher-extension"))try{let t=o(64456);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/logconsole-extension"))try{let t=o(57476);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/mainmenu-extension"))try{let t=o(98188);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/markdownviewer-extension"))try{let t=o(18091);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/mathjax2-extension"))try{let t=o(63880);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/notebook-extension"))try{let t=o(61402);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/rendermime-extension"))try{let t=o(52246);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/running-extension"))try{let t=o(28545);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/settingeditor-extension"))try{let t=o(76064);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/shortcuts-extension"))try{let t=o(72099);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/statusbar-extension"))try{let t=o(2073);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/theme-dark-extension"))try{let t=o(49939);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/theme-light-extension"))try{let t=o(83585);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/toc-extension"))try{let t=o(74849);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/tooltip-extension"))try{let t=o(70948);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/translation-extension"))try{let t=o(35803);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/ui-components-extension"))try{let t=o(74606);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlite/application-extension"))try{let t=o(85679);for(let o of x(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of x(t.value))e.push(o);else console.error(t.reason)})),(await Promise.all(n)).forEach((e=>{for(let t of x(e))p.push(t)})),(await Promise.allSettled(u)).forEach((e=>{if("fulfilled"===e.status)for(let t of x(e.value))p.push(t);else console.error(e.reason)})),(await Promise.allSettled(h)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const d=new s.JupyterLiteServer({});d.registerPluginModules(p),await d.start();const{serviceManager:m}=d,w=new r.JupyterLab({mimeExtensions:j,serviceManager:m,disabled:i});w.name=l.PageConfig.getOption("appName")||"JupyterLite",w.registerPluginModules(e),"true"===(l.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=w),await w.start(),await w.restored}}}]);
//# sourceMappingURL=8131.32abbdf.js.map