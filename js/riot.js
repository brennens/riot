(function(e){var t={version:"v2.0.15",settings:{}},n=h();t.observable=function(e){e=e||{};var t={},n=0;e.on=function(r,i){if(typeof i=="function"){i._id=typeof i._id=="undefined"?n++:i._id;r.replace(/\S+/g,function(e,n){(t[e]=t[e]||[]).push(i);i.typed=n>0})}return e};e.off=function(n,r){if(n=="*")t={};else{n.replace(/\S+/g,function(e){if(r){var n=t[e];for(var i=0,o;o=n&&n[i];++i){if(o._id==r._id){n.splice(i,1);i--}}}else{t[e]=[]}})}return e};e.one=function(t,n){function r(){e.off(t,r);n.apply(e,arguments)}return e.on(t,r)};e.trigger=function(n){var r=[].slice.call(arguments,1),i=t[n]||[];for(var o=0,u;u=i[o];++o){if(!u.busy){u.busy=1;u.apply(e,u.typed?[n].concat(r):r);if(i[o]!==u){o--}u.busy=0}}if(t.all&&n!="all"){e.trigger.apply(e,["all",n].concat(r))}return e};return e};(function(e,t,n){if(!n)return;var r=n.location,i=e.observable(),o=n,u=false,a;function f(){return r.href.split("#")[1]||""}function c(e){return e.split("/")}function s(e){if(e.type)e=f();if(e!=a){i.trigger.apply(null,["H"].concat(c(e)));a=e}}var l=e.route=function(e){if(e[0]){r.hash=e;s(e)}else{i.on("H",e)}};l.exec=function(e){e.apply(null,c(f()))};l.parser=function(e){c=e};l.stop=function(){if(!u)return;o.removeEventListener?o.removeEventListener(t,s,false):o.detachEvent("on"+t,s);i.off("*");u=false};l.start=function(){if(u)return;o.addEventListener?o.addEventListener(t,s,false):o.attachEvent("on"+t,s);u=true};l.start()})(t,"hashchange",e);var r=function(e,n,r){return function(i){n=t.settings.brackets||e;if(r!=n)r=n.split(" ");return i&&i.test?n==e?i:RegExp(i.source.replace(/\{/g,r[0].replace(/(?=.)/g,"\\")).replace(/\}/g,r[1].replace(/(?=.)/g,"\\")),i.global?"g":""):r[i]}}("{ }");var i=function(){var t={},n=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(e,n){return e&&(t[e]=t[e]||i(e))(n)};function i(e,t){e=(e||r(0)+r(1)).replace(r(/\\{/g),"￰").replace(r(/\\}/g),"￱");t=a(e,f(e,r(/{/),r(/}/)));return new Function("d","return "+(!t[0]&&!t[2]&&!t[3]?o(t[1]):"["+t.map(function(e,t){return t%2?o(e,true):'"'+e.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")').replace(/\uFFF0/g,r(0)).replace(/\uFFF1/g,r(1))+";")}function o(e,t){e=e.replace(/\n/g," ").replace(r(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),"");return/^\s*[\w- "']+ *:/.test(e)?"["+f(e,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(e){return e.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(e,t,n){return n.replace(/[^&|=!><]+/g,u)+'?"'+t+'":"",'})}).join("")+'].join(" ").trim()':u(e,t)}function u(t,r){t=t.trim();return!t?"":"(function(v){try{v="+(t.replace(n,function(t,n,r){return r?"(d."+r+"===undefined?"+(typeof e=="undefined"?"global.":"window.")+r+":d."+r+")":t})||"x")+"}finally{return "+(r===true?'!v&&v!==0?"":v':"v")+"}}).call(d)"}function a(e,t){var n=[];t.map(function(t,r){r=e.indexOf(t);n.push(e.slice(0,r),t);e=e.slice(r+t.length)});return n.concat(e)}function f(e,t,n){var r,i=0,o=[],u=new RegExp("("+t.source+")|("+n.source+")","g");e.replace(u,function(t,n,u,a){if(!i&&n)r=a;i+=n?1:-1;if(!i&&u!=null)o.push(e.slice(r,a+u.length))});return o}}();function o(e){var t={val:e},n=e.split(/\s+in\s+/);if(n[1]){t.val=r(0)+n[1];n=n[0].slice(r(0).length).trim().split(/,\s*/);t.key=n[0];t.pos=n[1]}return t}function u(e,t,n){var r={};r[e.key]=t;if(e.pos)r[e.pos]=n;return r}function a(e,t,n){g(e,"each");var r=e.outerHTML,a=e.previousSibling,f=e.parentNode,c=[],l=[],p;n=o(n);function d(e,t,n){c.splice(e,0,t);l.splice(e,0,n)}t.one("update",function(){f.removeChild(e)}).one("premount",function(){if(f.stub)f=t.root}).on("update",function(){var e=i(n.val,t);if(!e)return;if(!Array.isArray(e)){var o=JSON.stringify(e);if(o==p)return;p=o;m(l,function(e){e.unmount()});c=[];l=[];e=Object.keys(e).map(function(t){return u(n,t,e[t])})}m(c,function(t){if(t instanceof Object){if(e.indexOf(t)>-1){return}}else{var n=T(e,t),r=T(c,t);if(n.length>=r.length){return}}var i=c.indexOf(t),o=l[i];if(o){o.unmount();c.splice(i,1);l.splice(i,1);return false}});var g=[].indexOf.call(f.childNodes,a)+1;m(e,function(i,o){var a=e.indexOf(i,o),m=c.indexOf(i,o);a<0&&(a=e.lastIndexOf(i,o));m<0&&(m=c.lastIndexOf(i,o));if(!(i instanceof Object)){var v=T(e,i),h=T(c,i);if(v.length>h.length){m=-1}}var b=f.childNodes;if(m<0){if(!p&&n.key)var y=u(n,i,a);var w=new s({tmpl:r},{before:b[g+a],parent:t,root:f,item:y||i});w.mount();d(a,i,w);return true}if(n.pos&&l[m][n.pos]!=a){l[m].one("update",function(e){e[n.pos]=a});l[m].update()}if(a!=m){f.insertBefore(b[g+m],b[g+(a>m?a+1:a)]);return d(a,c.splice(m,1)[0],l.splice(m,1)[0])}});c=e.slice()})}function f(e,t,n){w(e,function(e){if(e.nodeType==1){if(e.parentNode&&e.parentNode.isLoop)e.isLoop=1;if(e.getAttribute("each"))e.isLoop=1;var r=A(e);if(r&&!e.isLoop){var i=new s(r,{root:e,parent:t},e.innerHTML),o=r.name,u=t,a;while(!A(u.root)){if(!u.parent)break;u=u.parent}i.parent=u;a=u.tags[o];if(a){if(!Array.isArray(a))u.tags[o]=[a];u.tags[o].push(i)}else{u.tags[o]=i}e.innerHTML="";n.push(i)}m(e.attributes,function(n){if(/^(name|id)$/.test(n.name))t[n.value]=e})}})}function c(e,t,n){function i(e,t,i){if(t.indexOf(r(0))>=0){var o={dom:e,expr:t};n.push(v(o,i))}}w(e,function(e){var n=e.nodeType;if(n==3&&e.parentNode.tagName!="STYLE")i(e,e.nodeValue);if(n!=1)return;var r=e.getAttribute("each");if(r){a(e,t,r);return false}m(e.attributes,function(t){var n=t.name,r=n.split("__")[1];i(e,t.value,{attr:r||n,bool:r});if(r){g(e,n);return false}});if(A(e))return false})}function s(e,n,r){var o=t.observable(this),u=k(n.opts)||{},a=y(e.tmpl),s=n.parent,l=[],p=[],g=n.root,h=n.item,b=e.fn,w=g.tagName.toLowerCase(),L={},O;if(b&&g._tag){g._tag.unmount(true)}g._tag=this;this._id=~~((new Date).getTime()*Math.random());v(this,{parent:s,root:g,opts:u,tags:{}},h);m(g.attributes,function(e){L[e.name]=e.value});if(a.innerHTML&&!/select/.test(w))a.innerHTML=x(a.innerHTML,r);function T(){m(Object.keys(L),function(e){u[e]=i(L[e],s||o)})}this.update=function(e,t){v(o,e,h);T();o.trigger("update",h);d(l,o,h);o.trigger("updated")};this.mount=function(){T();b&&b.call(o,u);C(true);c(a,o,l);if(!o.parent)o.update();o.trigger("premount");if(b){while(a.firstChild)g.appendChild(a.firstChild)}else{O=a.firstChild;g.insertBefore(O,n.before||null)}if(g.stub)o.root=g=s.root;o.trigger("mount")};this.unmount=function(e){var t=b?g:O,n=t.parentNode;if(n){if(s){if(Array.isArray(s.tags[w])){m(s.tags[w],function(e,t){if(e._id==o._id)s.tags[w].splice(t,1)})}else delete s.tags[w]}else{while(t.firstChild)t.removeChild(t.firstChild)}if(!e)n.removeChild(t)}o.trigger("unmount");C();o.off("*");g._tag=null};function C(e){m(p,function(t){t[e?"mount":"unmount"]()});if(s){var t=e?"on":"off";s[t]("update",o.update)[t]("unmount",o.unmount)}}f(a,this,p)}function l(t,n,r,i,o){r[t]=function(t){t=t||e.event;t.which=t.which||t.charCode||t.keyCode;t.target=t.target||t.srcElement;t.currentTarget=r;t.item=o;if(n.call(i,t)!==true&&!/radio|check/.test(r.type)){t.preventDefault&&t.preventDefault();t.returnValue=false}var u=o?i.parent:i;u.update()}}function p(e,t,n){if(e){e.insertBefore(n,t);e.removeChild(t)}}function d(e,t,n){m(e,function(e,r){var o=e.dom,u=e.attr,a=i(e.expr,t),f=e.dom.parentNode;if(a==null)a="";if(f&&f.tagName=="TEXTAREA")a=a.replace(/riot-/g,"");if(e.value===a)return;e.value=a;if(!u)return o.nodeValue=a;g(o,u);if(typeof a=="function"){l(u,a,o,t,n)}else if(u=="if"){var c=e.stub;if(a){c&&p(c.parentNode,c,o)}else{c=e.stub=c||document.createTextNode("");p(o.parentNode,o,c)}}else if(/^(show|hide)$/.test(u)){if(u=="hide")a=!a;o.style.display=a?"":"none"}else if(u=="value"){o.value=a}else if(u.slice(0,5)=="riot-"){u=u.slice(5);a?o.setAttribute(u,a):g(o,u)}else{if(e.bool){o[u]=a;if(!a)return;a=u}if(typeof a!="object")o.setAttribute(u,a)}})}function m(e,t){for(var n=0,r=(e||[]).length,i;n<r;n++){i=e[n];if(i!=null&&t(i,n)===false)n--}return e}function g(e,t){e.removeAttribute(t)}function v(e,t,n){t&&m(Object.keys(t),function(n){e[n]=t[n]});return n?v(e,n):e}function h(){if(e){var t=navigator.userAgent;var n=t.indexOf("MSIE ");if(n>0){return parseInt(t.substring(n+5,t.indexOf(".",n)),10)}else{return 0}}}function b(e,t){var n=document.createElement("option"),r=/value=[\"'](.+?)[\"']/,i=/selected=[\"'](.+?)[\"']/,o=t.match(r),u=t.match(i);n.innerHTML=t;if(o){n.value=o[1]}if(u){n.setAttribute("riot-selected",u[1])}e.appendChild(n)}function y(e){var t=e.trim().slice(1,3).toLowerCase(),r=/td|th/.test(t)?"tr":t=="tr"?"tbody":"div",i=document.createElement(r);i.stub=true;if(t==="op"&&n&&n<10){b(i,e)}else{i.innerHTML=e}return i}function w(e,t){if(e){if(t(e)===false)w(e.nextSibling,t);else{e=e.firstChild;while(e){w(e,t);e=e.nextSibling}}}}function x(e,t){return e.replace(/<(yield)\/?>(<\/\1>)?/gim,t||"")}function L(e,t){t=t||document;return t.querySelectorAll(e)}function O(e,t){return e.filter(function(e){return t.indexOf(e)<0})}function T(e,t){return e.filter(function(e){return e===t})}function k(e){function t(){}t.prototype=e;return new t}var C=[],E={};function A(e){return E[e.getAttribute("riot-tag")||e.tagName.toLowerCase()]}function j(e){var t=document.createElement("style");t.innerHTML=e;document.head.appendChild(t)}function N(e,t,n){var r=E[t],i=e.innerHTML;e.innerHTML="";if(r&&e)r=new s(r,{root:e,opts:n},i);if(r&&r.mount){r.mount();C.push(r);return r.on("unmount",function(){C.splice(C.indexOf(r),1)})}}t.tag=function(e,t,n,r){if(typeof n=="function")r=n;else if(n)j(n);E[e]={name:e,tmpl:t,fn:r};return e};t.mount=function(e,t,n){var r,i=function(e){e=Object.keys(E).join(", ");e.split(",").map(function(t){e+=', *[riot-tag="'+t.trim()+'"]'});return e},o=[];if(typeof t=="object"){n=t;t=0}if(typeof e=="string"){if(e=="*"){e=i(e)}r=L(e)}else r=e;if(t=="*"){t=i(e);if(r.tagName){r=L(t,r)}else{var u=[];m(r,function(e){u=L(t,e)});r=u}t=0}function a(e){var r=t||e.getAttribute("riot-tag")||e.tagName.toLowerCase(),i=N(e,r,n);if(i)o.push(i)}if(r.tagName)a(e);else m(r,a);return o};t.update=function(){return m(C,function(e){e.update()})};t.mountTo=t.mount;(function(e){var n=("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,"+"defaultchecked,defaultmuted,defaultselected,defer,disabled,draggable,enabled,formnovalidate,hidden,"+"indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,"+"pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,spellcheck,translate,truespeed,"+"typemustmatch,visible").split(",");var r="area,base,br,col,command,embed,hr,img,input,keygen,link,meta,param,source,track,wbr".split(",");var i=["style","src","d"];var o={jade:C};var u={coffeescript:x,none:k,cs:x,es6:L,typescript:O,livescript:T,ls:T};var a=/^<([\w\-]+)>(.*)<\/\1>/gim,f=/=({[^}]+})([\s\/\>])/g,c=/([\w\-]+)=(["'])([^\2]+?)\2/g,s=/{\s*([^}]+)\s*}/g,l=/^<([\w\-]+)>([^\x00]*[\w\/}"']>$)?([^\x00]*?)^<\/\1>/gim,p=/<script(\s+type=['"]?([^>'"]+)['"]?)?>([^\x00]*?)<\/script>/gm,d=/<style(\s+type=['"]?([^>'"]+)['"]?|\s+scoped)?>([^\x00]*?)<\/style>/gm,m=/(^|\}|\{)\s*([^\{\}]+)\s*(?=\{)/g,g=/\/\*[^\x00]*?\*\//gm,v=/<!--.*?-->/g,h=/<([\w\-]+)([^>]*)\/\s*>/g,b=/^\s*\/\/.*$/gm,y=/\/\*[^\x00]*?\*\//gm;function w(e,o,u){var a=t.util.brackets;e=e.replace(a(f),'="$1"$2');e=o.whitespace?e.replace(/\n/g,"\\n"):e.replace(/\s+/g," ");e=e.trim().replace(v,"");e=e.replace(c,function(e,t,r,o){if(o.indexOf(a(0))>=0){t=t.toLowerCase();if(i.indexOf(t)>=0)t="riot-"+t;else if(n.indexOf(t)>=0)t="__"+t}return t+'="'+o+'"'});if(o.expr){e=e.replace(a(s),function(e,t){var n=j(t,o,u).trim().replace(/\r?\n|\r/g,"").trim();if(n.slice(-1)==";")n=n.slice(0,-1);return a(0)+n+a(1)})}e=e.replace(h,function(e,t,n){var i="<"+t+(n?" "+n.trim():"")+">";if(r.indexOf(t.toLowerCase())==-1)i+="</"+t+">";return i});e=e.replace(/'/g,"\\'");e=e.replace(a(/\\{|\\}/g),"\\$&");if(o.compact)e=e.replace(/> </g,"><");return e}function x(e){if(typeof exports==="undefined"){return CoffeeScript.compile(e,{bare:true})}return require("coffee-script").compile(e,{bare:true})}function L(e){if(typeof exports==="undefined"){return babel.transform(e,{blacklist:["useStrict"]}).code}return require("babel").transform(e,{blacklist:["useStrict"]}).code}function O(e){return require("typescript-simple")(e)}function T(e){return require("LiveScript").compile(e,{bare:true,header:false})}function k(e){return e}function C(e){return require("jade").render(e,{pretty:true})}function E(e){e=e.replace(b,"").replace(y,"");var t=e.split("\n"),n="";t.forEach(function(e,r){var i=e.trim();if(i[0]!="}"&&i.indexOf("(")>0&&i.indexOf("function")==-1){var o=/[{}]/.exec(i.slice(-1)),u=o&&/(\s+)([\w]+)\s*\(([\w,\s]*)\)\s*\{/.exec(e);if(u&&!/^(if|while|switch|for)$/.test(u[2])){t[r]=u[1]+"this."+u[2]+" = function("+u[3]+") {";if(o[0]=="}"){t[r]+=" "+i.slice(u[0].length-1,-1)+"}.bind(this)"}else{n=u[1]}}}if(e.slice(0,n.length+1)==n+"}"){t[r]=n+"}.bind(this);";n=""}});return t.join("\n")}function A(e,t){return t.replace(g,"").replace(m,function(t,n,r){return n+" "+r.split(/\s*,\s*/g).map(function(t){return t[0]=="@"?t:e+" "+t.replace(/:scope\s*/,"")}).join(",")}).trim()}function j(e,t,n){var r=t.parser||(n?u[n]:E);if(!r)throw new Error('Parser not found "'+n+'"');return r(e,t)}function N(e,t){var n=o[e];if(!n)throw new Error('Template parser not found "'+e+'"');return n(t)}function _(e,t,n){if(n=="scoped-css")e=A(t,e);return e.replace(/\s+/g," ").replace(/\\/g,"\\\\").replace(/'/g,"\\'").trim()}function H(e,t,n,r){return"riot.tag('"+e+"', '"+t+"'"+(n?", '"+n+"'":"")+", function(opts) {"+r+"\n});"}function M(e,n){n=n||{};if(n.brackets)t.settings.brackets=n.brackets;if(n.template)e=N(n.template,e);e=e.replace(a,function(e,t,r){return H(t,w(r,n),"","")});return e.replace(l,function(e,t,r,i){r=r||"";var o=n.type;if(!i.trim()){r=r.replace(p,function(e,t,n,r){if(n)o=n.replace("text/","");i=r;return""})}var u="css",a="";r=r.replace(d,function(e,t,n,r){if(t&&"scoped"==t.trim())u="scoped-css";else if(n)u=n.replace("text/","");a=r;return""});return H(t,w(r,n,o),_(a,t,u),j(i,n,o))})}if(!e){this.riot=require(process.env.RIOT||"../riot");return module.exports={compile:M,html:w,style:_,js:j}}var S=e.document,$,q;function F(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==4&&n.status==200)t(n.responseText)};n.open("GET",e,true);n.send("")}function I(e){var t=/[ \t]+/.exec(e);if(t)e=e.replace(new RegExp("^"+t[0],"gm"),"");return e}function R(e){var t=S.createElement("script"),n=S.documentElement;t.text=M(e);n.appendChild(t);n.removeChild(t)}function B(e){var t=S.querySelectorAll('script[type="riot/tag"]'),n=t.length;[].map.call(t,function(t){var r=t.getAttribute("src");function i(t){R(t);n--;if(!n){$.trigger("ready");q=true;e&&e()}}return r?F(r,i):i(I(t.innerHTML))})}t.compile=function(e,n){if(typeof e=="string"){if(e.trim()[0]=="<"){var r=I(M(e));if(!n)R(r);return r}else{return F(e,function(e){var t=I(M(e));R(t);n&&n(t,e)})}}if(typeof e!="function")e=undefined;if(q)return e&&e();if($){e&&$.on("ready",e)}else{$=t.observable();B(e)}};var D=t.mount;t.mount=function(e,n,r){var i;t.compile(function(){i=D(e,n,r)});return i};t.mountTo=t.mount})(typeof e!="undefined"?e:undefined);t.util={brackets:r,tmpl:i};if(typeof exports==="object")module.exports=t;else if(typeof define==="function"&&define.amd)define(function(){return t});else e.riot=t})(typeof window!="undefined"?window:undefined);