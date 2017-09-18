webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {


function setupController() {
  function loadTextNode (id, text) {
    var newtext = document.createTextNode(text),
        initialDisplayNode = document.getElementById(id);
        initialDisplayNode.appendChild(newtext)
    return id;
  }

//TODO replace arrays with object for consistent length
  function initialNodeGenerator(loader, ids, text) {
    for (var i = 0;i<ids.length;i++) {

      loader(ids[i], text[i]);
    }
  }
  function emptyHtml(arrayHtmlToEmpty) {
    for(var i in arrayHtmlToEmpty) {
      document.getElementById(arrayHtmlToEmpty[i]).innerHTML = "";
    }
  }
  function emptyStringGenerator(ids) {
    var emptyStrings = [];
    for (var i in ids) {
      emptyStrings.push("");
    }
    return emptyStrings;
  }
  function clearForSwapping(ids){
    this.nodeSwapper(this.loadTextNode, ids, this.emptyStringGenerator(ids))
  }
  function nodeSwapper(loader, ids, text) {
    this.emptyHtml(ids);
    for (var i = 0;i<ids.length;i++) {
      loader(ids[i], text[i]);
    }
  }
  return {loadTextNode, initialNodeGenerator, emptyStringGenerator, emptyHtml, clearForSwapping, nodeSwapper}
}

module.exports = setupController();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

 module.exports = ['responseDisplayHeaders', 'responseDisplayJSON', 'responseDisplayXML'];


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themes_style_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themes_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__themes_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_fetchApi_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_setupController_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_setupController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__controllers_setupController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_prism_prism_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_prism_prism_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_prism_prism_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initialStrings_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initialStrings_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__initialStrings_js__);





// import ajaxController from './controllers/ajaxController.js';






document.body.onload = __WEBPACK_IMPORTED_MODULE_2__controllers_setupController_js___default.a.initialNodeGenerator(__WEBPACK_IMPORTED_MODULE_2__controllers_setupController_js___default.a.loadTextNode, __WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js___default.a, __WEBPACK_IMPORTED_MODULE_5__initialStrings_js___default.a);

var url, format;
var el = document.getElementById("format-selection");
el.addEventListener("change", function() {
  format = this.value
  url = '/advertisers/?format=' + format;

  __WEBPACK_IMPORTED_MODULE_2__controllers_setupController_js___default.a.clearForSwapping(__WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js___default.a);
  Object(__WEBPACK_IMPORTED_MODULE_1__api_fetchApi_js__["a" /* getObject */])(url).then(function(response) {
      global.document.getElementById(__WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js___default.a[0]).innerHTML = formatHeaders(response)
      return response.text()
    }).then(function(result) {
        formatResponse(result)
    }).then(function(result) {
      __WEBPACK_IMPORTED_MODULE_3__lib_prism_prism_js___default.a.highlightAll()
    });
});

function formatResponse(result) {
  var id;
  if (format === 'json') {
    id = 1;
  }
  else if (format === 'xml') {
    id = 2;
  }
  var node = global.document.getElementById(__WEBPACK_IMPORTED_MODULE_4__idsToBeSwapped_js___default.a[id]);
  node.innerHTML = document.createTextNode("")
    node.replaceChild(
      document.createTextNode(result),
    node.lastChild
    ).innerHTML = result;
  return node.innerHTML;
}

function formatHeaders(response) {
  //mocking for expediency
  var display = `HTTP ${response.status} ${response.statusText}, \n`
  var headers = {
    Vary: "Accept",
    Allow: "GET, POST, HEAD, OPTIONS",
    "Content-Type": response.headers.get("Content-Type")
  };

  for (var pair in response.headers.entries()) {
    headers[pair[0]] = pair[1];
  }

  for (var i in headers) {
    display += `${i}: ${headers[i]} \n`
  }
  return display;
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "body {\n   background-image: url(" + __webpack_require__(9) + ");\n}\n\n.navbar {\n  background: black;\n  color: grey;\n  font-family: Helvetica,Arial,sans-serif;\n\n  border-top: 5px solid maroon;\n\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n\n  min-height: 50px;\n  margin-bottom: 20px;\n  z-index: 999;\n\n}\n\n.navbar-logo {\n  margin-left: 50px;\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n\n.version {\n    font-size: 70%;\n}\n\n.selector {\n  margin-right: 50px;\n  margin-top: 25px;\n  float: right;\n  height: 30px;\n}\n\n.select-format {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n\n  height: 40px;\n  width: 80px;\n  color: white;\n  background-color: royalblue;\n  border: 1px solid transparent;\n  border-color: darkblue;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0;\n    transition: opacity 1s;\n}\n\n.tooltip .tooltiptext::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n}\n\n.container {\n  font-family: Arial,sans-serif;\n\n    width: 1170px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-top: 100px;\n    margin-right: auto;\n    margin-left: 50px;\n}\n\n.content-header {\n  display: inline-block;\n  text-align: center;\n}\n\n.request-info {\n  margin-bottom: 20px;\n}\n\n.request {\n  border-radius: 6px;\n  background-color: ghostwhite;\n  border: 1px solid lightgrey;\n  line-height: 30px;\n}\n\n.method {\n  font-weight: bold;\n  position: relative;\n  padding-left: 10px;\n}\n\n.codeBlock {\n  background: transparent;\n  background-color: rgba(0,0,0,1);\n}\n\n.language-http {\n  text-transform: capitalize;\n}\n\npre {\n  border-radius: 25px;\n  background-color: ghostwhite;\n  line-height: 30px;\n  background-color: transparent!important;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.png";

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = getObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_setupController_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_setupController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__controllers_setupController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idsToBeSwapped_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idsToBeSwapped_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__idsToBeSwapped_js__);






function getObject(url) {
  return get(url);
}

//private functions
function get(url) {
  return fetch(url).then(function(response) {
  if(response.ok) {
    return response;
  }
  throw new Error(response.status + " " + response.statusText);
}).catch(function(er) {
  onError(er)
});
}

function onSuccess(response) {
  return response;
}

function onError(error) {
  __WEBPACK_IMPORTED_MODULE_1__controllers_setupController_js___default.a.clearForSwapping(__WEBPACK_IMPORTED_MODULE_2__idsToBeSwapped_js___default.a);
  global.document.getElementById(__WEBPACK_IMPORTED_MODULE_2__idsToBeSwapped_js___default.a[0]).innerHTML = error;
}

//Only handle get from api handle more complex actions in future deployments

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+http+json */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},matchGrammar:function(e,t,a,r,i,l,o){var s=n.Token;for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==o)return;var g=a[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){h.lastIndex=0;var _=h.exec(w),P=1;if(!_&&m&&b!=t.length-1){if(h.lastIndex=k,_=h.exec(e),!_)break;for(var A=_.index+(d?_[1].length:0),j=_.index+_[0].length,x=b,O=k,S=t.length;S>x&&(j>O||!t[x].type&&!t[x-1].greedy);++x)O+=t[x].length,A>=O&&(++b,k=O);if(t[b]instanceof s||t[x-1].greedy)continue;P=x-b,w=e.slice(k,O),_.index-=k}if(_){d&&(p=_[1].length);var A=_.index+p,_=_[0].slice(p),j=A+_.length,N=w.slice(0,A),C=w.slice(j),E=[b,P];N&&(++b,k+=N.length,E.push(N));var I=new s(u,f?n.tokenize(_,f):_,y,_,m);if(E.push(I),C&&E.push(C),Array.prototype.splice.apply(t,E),1!=P&&n.matchGrammar(e,t,a,b,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","header-name",options)};
Prism.languages.json={property:/"(?:\\.|[^\\"])*"(?=\s*:)/gi,string:/"(?!:)(?:\\.|[^\\"])*"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = ['Please select a format from the dropdown menu', "", ""];


/***/ })
],[6]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zZXR1cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lkc1RvQmVTd2FwcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL3N0eWxlLmNzcz82MDk5Iiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9mZXRjaEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcHJpc20vcHJpc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxTdHJpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixhQUFhOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOzs7Ozs7O0FDeENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFHa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQixHQUFHLG9CQUFvQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixFQUFFLElBQUksV0FBVztBQUNuQztBQUNBO0FBQ0E7Ozs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsK0JBQWdDLDJEQUFxRSxHQUFHLGFBQWEsc0JBQXNCLGdCQUFnQiw0Q0FBNEMsbUNBQW1DLGtCQUFrQixvQkFBb0IsWUFBWSxXQUFXLHVCQUF1Qix3QkFBd0IsaUJBQWlCLEtBQUssa0JBQWtCLHNCQUFzQixnQkFBZ0IsdUJBQXVCLG9CQUFvQixzQkFBc0IsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGVBQWUsdUJBQXVCLHFCQUFxQixpQkFBaUIsaUJBQWlCLEdBQUcsb0JBQW9CLHVCQUF1QiwwQkFBMEIsdUJBQXVCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLGdDQUFnQyxrQ0FBa0MsMkJBQTJCLHVCQUF1QixvQkFBb0Isb0JBQW9CLEdBQUcsY0FBYyx5QkFBeUIsNEJBQTRCLHNDQUFzQyxHQUFHLDJCQUEyQix5QkFBeUIsbUJBQW1CLDhCQUE4QixrQkFBa0IseUJBQXlCLHlCQUF5QixxQkFBcUIseUJBQXlCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLHlCQUF5QixpQkFBaUIsNkJBQTZCLEdBQUcsa0NBQWtDLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGdCQUFnQix3QkFBd0Isd0JBQXdCLDBCQUEwQiw2REFBNkQsR0FBRyxpQ0FBaUMsMEJBQTBCLGlCQUFpQixHQUFHLGdCQUFnQixrQ0FBa0Msc0JBQXNCLDBCQUEwQix5QkFBeUIsd0JBQXdCLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsMEJBQTBCLHVCQUF1QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1QixpQ0FBaUMsZ0NBQWdDLHNCQUFzQixHQUFHLGFBQWEsc0JBQXNCLHVCQUF1Qix1QkFBdUIsR0FBRyxnQkFBZ0IsNEJBQTRCLG9DQUFvQyxHQUFHLG9CQUFvQiwrQkFBK0IsR0FBRyxTQUFTLHdCQUF3QixpQ0FBaUMsc0JBQXNCLDRDQUE0QyxHQUFHOztBQUV2OEU7Ozs7Ozs7QUNQQSwwRDs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMvQkE7QUFDQSw0SEFBNEgsa0JBQWtCLG9EQUFvRCw2Q0FBNkMsbUJBQW1CLHdJQUF3SSxxQkFBcUIsMEJBQTBCLGtCQUFrQixzRUFBc0UsbUJBQW1CLCtDQUErQyxVQUFVLFNBQVMsbUJBQW1CLHFCQUFxQixVQUFVLHNCQUFzQiw4REFBOEQsU0FBUyxxQ0FBcUMsdUJBQXVCLEVBQUUsVUFBVSxZQUFZLHFCQUFxQixtQ0FBbUMseUJBQXlCLFNBQVMsZ0NBQWdDLGlCQUFpQixXQUFXLHdCQUF3QixlQUFlLGdEQUFnRCxTQUFTLFNBQVMsdUNBQXVDLHdEQUF3RCxVQUFVLGlEQUFpRCw0QkFBNEIsU0FBUyx1QkFBdUIsUUFBUSxzUkFBc1IsV0FBVyw0QkFBNEIsT0FBTyx3SEFBd0gscUNBQXFDLGtFQUFrRSxTQUFTLHlDQUF5QyxrQ0FBa0MsZ0JBQWdCLHdCQUF3QixnQkFBZ0IsbVFBQW1RLHVCQUF1Qix1Q0FBdUMsOE1BQThNLHNEQUFzRCw2QkFBNkIsd0JBQXdCLDhLQUE4SywrQkFBK0Isa0RBQWtELEdBQUcsNk1BQTZNLDJCQUEyQixzQkFBc0IsdUNBQXVDLHNDQUFzQyxjQUFjLDZDQUE2QyxlQUFlLFdBQVcsaUNBQWlDLFlBQVksV0FBVyxLQUFLLGtFQUFrRSx5QkFBeUIsZ0RBQWdELHlDQUF5QyxlQUFlLGdCQUFnQixXQUFXLG9CQUFvQixXQUFXLDRCQUE0QixzQkFBc0IsY0FBYyxvQkFBb0IseUJBQXlCLHNDQUFzQyw2RUFBNkUsdUNBQXVDLG1DQUFtQyw0Q0FBNEMsZ0NBQWdDLE1BQU0sbUJBQW1CLGlGQUFpRiwrQkFBK0IseUNBQXlDLHlHQUF5RyxvQkFBb0Isd0JBQXdCLG1CQUFtQixNQUFNLHlCQUF5QixjQUFjLHNDQUFzQyxRQUFRLE1BQU0sbUJBQW1CLGtCQUFrQiwyQkFBMkIsbUJBQW1CLHFCQUFxQiw2QkFBNkIsU0FBUyxRQUFRLCtCQUErQixzRkFBc0YsK0JBQStCLCtCQUErQixxREFBcUQsMEJBQTBCLFdBQVcsT0FBTyxnR0FBZ0csc0JBQXNCLGdFQUFnRSx1REFBdUQsd0NBQXdDLHNCQUFzQixnREFBZ0Qsd0RBQXdELE9BQU8sWUFBWSw2RkFBNkYsNkZBQTZGLGtFQUFrRSxvRUFBb0UsOEJBQThCLDJGQUEyRixnU0FBZ1MsR0FBRztBQUN4NEwsd0JBQXdCLHFIQUFxSCx3SEFBd0gsS0FBSyxrQ0FBa0MsOENBQThDLGVBQWUsa0RBQWtELHNCQUFzQixpQ0FBaUMsNEJBQTRCLDRCQUE0QixvQkFBb0IsS0FBSyxHQUFHLGdJQUFnSSwrREFBK0QsUUFBUTtBQUM3dUIscUJBQXFCLG1DQUFtQyxzQkFBc0IsU0FBUyxhQUFhLGdCQUFnQixrRkFBa0YsRUFBRSxPQUFPLEdBQUcsV0FBVyxXQUFXLGdFQUFnRSxpSEFBaUgsSUFBSSxvSkFBb0osT0FBTyxpSEFBaUgsc0RBQXNELGNBQWMsdUNBQXVDLGFBQWEsOERBQThELG1EQUFtRCwwQ0FBMEMsdUJBQXVCO0FBQ245Qix1QkFBdUIsVUFBVSx3REFBd0QsRUFBRSx5Q0FBeUMsVUFBVSxpRUFBaUUsZUFBZSxxSUFBcUksdUJBQXVCLDBUQUEwVCxJQUFJO0FBQ3hyQiwyREFBMkQsNGtCQUE0a0IsRUFBRSxFQUFFLHVEQUF1RCxPQUFPLHNFQUFzRSxJQUFJLGtCQUFrQiwrQkFBK0Isc0RBQXNELG1CQUFtQixrREFBa0QsZUFBZSxhQUFhLEdBQUcsSUFBSSxVQUFVLDZCQUE2QixjQUFjLEdBQUcsdUJBQXVCLGtDQUFrQyxvQkFBb0IsdUVBQXVFLFFBQVEsaUlBQWlJO0FBQ3Z6QyxzQkFBc0IsZ0JBQWdCLHVHQUF1RyxvRkFBb0Ysb0JBQW9CLHVDQUF1QyxVQUFVLGlEQUFpRCxnQkFBZ0IsMkNBQTJDLG1CQUFtQiw2SkFBNkosb0VBQW9FLGVBQWUsc0JBQXNCLGdGQUFnRixFQUFFLHNDQUFzQyxpQ0FBaUM7QUFDcDBCLHNCQUFzQixzSkFBc0osS0FBSyxzRUFBc0U7Ozs7Ozs7O0FDUHZQIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5mdW5jdGlvbiBzZXR1cENvbnRyb2xsZXIoKSB7XG4gIGZ1bmN0aW9uIGxvYWRUZXh0Tm9kZSAoaWQsIHRleHQpIHtcbiAgICB2YXIgbmV3dGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICBpbml0aWFsRGlzcGxheU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGluaXRpYWxEaXNwbGF5Tm9kZS5hcHBlbmRDaGlsZChuZXd0ZXh0KVxuICAgIHJldHVybiBpZDtcbiAgfVxuXG4vL1RPRE8gcmVwbGFjZSBhcnJheXMgd2l0aCBvYmplY3QgZm9yIGNvbnNpc3RlbnQgbGVuZ3RoXG4gIGZ1bmN0aW9uIGluaXRpYWxOb2RlR2VuZXJhdG9yKGxvYWRlciwgaWRzLCB0ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7aTxpZHMubGVuZ3RoO2krKykge1xuXG4gICAgICBsb2FkZXIoaWRzW2ldLCB0ZXh0W2ldKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZW1wdHlIdG1sKGFycmF5SHRtbFRvRW1wdHkpIHtcbiAgICBmb3IodmFyIGkgaW4gYXJyYXlIdG1sVG9FbXB0eSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJyYXlIdG1sVG9FbXB0eVtpXSkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZW1wdHlTdHJpbmdHZW5lcmF0b3IoaWRzKSB7XG4gICAgdmFyIGVtcHR5U3RyaW5ncyA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4gaWRzKSB7XG4gICAgICBlbXB0eVN0cmluZ3MucHVzaChcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5U3RyaW5ncztcbiAgfVxuICBmdW5jdGlvbiBjbGVhckZvclN3YXBwaW5nKGlkcyl7XG4gICAgdGhpcy5ub2RlU3dhcHBlcih0aGlzLmxvYWRUZXh0Tm9kZSwgaWRzLCB0aGlzLmVtcHR5U3RyaW5nR2VuZXJhdG9yKGlkcykpXG4gIH1cbiAgZnVuY3Rpb24gbm9kZVN3YXBwZXIobG9hZGVyLCBpZHMsIHRleHQpIHtcbiAgICB0aGlzLmVtcHR5SHRtbChpZHMpO1xuICAgIGZvciAodmFyIGkgPSAwO2k8aWRzLmxlbmd0aDtpKyspIHtcbiAgICAgIGxvYWRlcihpZHNbaV0sIHRleHRbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge2xvYWRUZXh0Tm9kZSwgaW5pdGlhbE5vZGVHZW5lcmF0b3IsIGVtcHR5U3RyaW5nR2VuZXJhdG9yLCBlbXB0eUh0bWwsIGNsZWFyRm9yU3dhcHBpbmcsIG5vZGVTd2FwcGVyfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwQ29udHJvbGxlcigpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udHJvbGxlcnMvc2V0dXBDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiBtb2R1bGUuZXhwb3J0cyA9IFsncmVzcG9uc2VEaXNwbGF5SGVhZGVycycsICdyZXNwb25zZURpc3BsYXlKU09OJywgJ3Jlc3BvbnNlRGlzcGxheVhNTCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWRzVG9CZVN3YXBwZWQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL3RoZW1lcy9zdHlsZS5jc3MnO1xuXG5cbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICcuL2FwaS9mZXRjaEFwaS5qcyc7XG5cbi8vIGltcG9ydCBhamF4Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2FqYXhDb250cm9sbGVyLmpzJztcbmltcG9ydCBzZXR1cENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9zZXR1cENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFByaXNtIGZyb20gJy4uL2xpYi9wcmlzbS9wcmlzbS5qcyc7XG5cbmltcG9ydCBpZHNUb0JlU3dhcHBlZCBmcm9tICcuL2lkc1RvQmVTd2FwcGVkLmpzJztcbmltcG9ydCBpbml0aWFsU3RyaW5ncyBmcm9tICcuL2luaXRpYWxTdHJpbmdzLmpzJztcblxuZG9jdW1lbnQuYm9keS5vbmxvYWQgPSBzZXR1cENvbnRyb2xsZXIuaW5pdGlhbE5vZGVHZW5lcmF0b3Ioc2V0dXBDb250cm9sbGVyLmxvYWRUZXh0Tm9kZSwgaWRzVG9CZVN3YXBwZWQsIGluaXRpYWxTdHJpbmdzKTtcblxudmFyIHVybCwgZm9ybWF0O1xudmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtYXQtc2VsZWN0aW9uXCIpO1xuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgZm9ybWF0ID0gdGhpcy52YWx1ZVxuICB1cmwgPSAnL2FkdmVydGlzZXJzLz9mb3JtYXQ9JyArIGZvcm1hdDtcblxuICBzZXR1cENvbnRyb2xsZXIuY2xlYXJGb3JTd2FwcGluZyhpZHNUb0JlU3dhcHBlZCk7XG4gIGdldE9iamVjdCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHNUb0JlU3dhcHBlZFswXSkuaW5uZXJIVE1MID0gZm9ybWF0SGVhZGVycyhyZXNwb25zZSlcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICBmb3JtYXRSZXNwb25zZShyZXN1bHQpXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpXG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gZm9ybWF0UmVzcG9uc2UocmVzdWx0KSB7XG4gIHZhciBpZDtcbiAgaWYgKGZvcm1hdCA9PT0gJ2pzb24nKSB7XG4gICAgaWQgPSAxO1xuICB9XG4gIGVsc2UgaWYgKGZvcm1hdCA9PT0gJ3htbCcpIHtcbiAgICBpZCA9IDI7XG4gIH1cbiAgdmFyIG5vZGUgPSBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzVG9CZVN3YXBwZWRbaWRdKTtcbiAgbm9kZS5pbm5lckhUTUwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKVxuICAgIG5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzdWx0KSxcbiAgICBub2RlLmxhc3RDaGlsZFxuICAgICkuaW5uZXJIVE1MID0gcmVzdWx0O1xuICByZXR1cm4gbm9kZS5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcnMocmVzcG9uc2UpIHtcbiAgLy9tb2NraW5nIGZvciBleHBlZGllbmN5XG4gIHZhciBkaXNwbGF5ID0gYEhUVFAgJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH0sIFxcbmBcbiAgdmFyIGhlYWRlcnMgPSB7XG4gICAgVmFyeTogXCJBY2NlcHRcIixcbiAgICBBbGxvdzogXCJHRVQsIFBPU1QsIEhFQUQsIE9QVElPTlNcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKVxuICB9O1xuXG4gIGZvciAodmFyIHBhaXIgaW4gcmVzcG9uc2UuaGVhZGVycy5lbnRyaWVzKCkpIHtcbiAgICBoZWFkZXJzW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgaW4gaGVhZGVycykge1xuICAgIGRpc3BsYXkgKz0gYCR7aX06ICR7aGVhZGVyc1tpXX0gXFxuYFxuICB9XG4gIHJldHVybiBkaXNwbGF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RoZW1lcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSArIFwiKTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcblxcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIG1hcm9vbjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgei1pbmRleDogOTk5O1xcblxcbn1cXG5cXG4ubmF2YmFyLWxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udmVyc2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogNzAlO1xcbn1cXG5cXG4uc2VsZWN0b3Ige1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNlbGVjdC1mb3JtYXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b29sdGlwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3R0b206IDEyNSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCxzYW5zLXNlcmlmO1xcblxcbiAgICB3aWR0aDogMTE3MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVxdWVzdC1pbmZvIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZXF1ZXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLm1ldGhvZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmNvZGVCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMSk7XFxufVxcblxcbi5sYW5ndWFnZS1odHRwIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5wcmUge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy90aGVtZXMvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJhY2tncm91bmQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL2JhY2tncm91bmQucG5nXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnd2hhdHdnLWZldGNoJztcbmltcG9ydCBzZXR1cENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvc2V0dXBDb250cm9sbGVyLmpzJztcbmltcG9ydCBpZHNUb0JlU3dhcHBlZCBmcm9tICcuLi9pZHNUb0JlU3dhcHBlZC5qcyc7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KHVybCkge1xuICByZXR1cm4gZ2V0KHVybCk7XG59XG5cbi8vcHJpdmF0ZSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICBpZihyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbn0pLmNhdGNoKGZ1bmN0aW9uKGVyKSB7XG4gIG9uRXJyb3IoZXIpXG59KTtcbn1cblxuZnVuY3Rpb24gb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICBzZXR1cENvbnRyb2xsZXIuY2xlYXJGb3JTd2FwcGluZyhpZHNUb0JlU3dhcHBlZCk7XG4gIGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHNUb0JlU3dhcHBlZFswXSkuaW5uZXJIVE1MID0gZXJyb3I7XG59XG5cbi8vT25seSBoYW5kbGUgZ2V0IGZyb20gYXBpIGhhbmRsZSBtb3JlIGNvbXBsZXggYWN0aW9ucyBpbiBmdXR1cmUgZGVwbG95bWVudHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwaS9mZXRjaEFwaS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogaHR0cDovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWw/dGhlbWVzPXByaXNtJmxhbmd1YWdlcz1tYXJrdXArY3NzK2NsaWtlK2phdmFzY3JpcHQraHR0cCtqc29uICovXG52YXIgX3NlbGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlJiZzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGU/c2VsZjp7fSxQcmlzbT1mdW5jdGlvbigpe3ZhciBlPS9cXGJsYW5nKD86dWFnZSk/LShcXHcrKVxcYi9pLHQ9MCxuPV9zZWxmLlByaXNtPXttYW51YWw6X3NlbGYuUHJpc20mJl9zZWxmLlByaXNtLm1hbnVhbCx1dGlsOntlbmNvZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBhP25ldyBhKGUudHlwZSxuLnV0aWwuZW5jb2RlKGUuY29udGVudCksZS5hbGlhcyk6XCJBcnJheVwiPT09bi51dGlsLnR5cGUoZSk/ZS5tYXAobi51dGlsLmVuY29kZSk6ZS5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLnJlcGxhY2UoL1xcdTAwYTAvZyxcIiBcIil9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5tYXRjaCgvXFxbb2JqZWN0IChcXHcrKVxcXS8pWzFdfSxvYmpJZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX2lkfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9faWRcIix7dmFsdWU6Kyt0fSksZS5fX2lkfSxjbG9uZTpmdW5jdGlvbihlKXt2YXIgdD1uLnV0aWwudHlwZShlKTtzd2l0Y2godCl7Y2FzZVwiT2JqZWN0XCI6dmFyIGE9e307Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKGFbcl09bi51dGlsLmNsb25lKGVbcl0pKTtyZXR1cm4gYTtjYXNlXCJBcnJheVwiOnJldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbi51dGlsLmNsb25lKGUpfSl9cmV0dXJuIGV9fSxsYW5ndWFnZXM6e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBhPW4udXRpbC5jbG9uZShuLmxhbmd1YWdlc1tlXSk7Zm9yKHZhciByIGluIHQpYVtyXT10W3JdO3JldHVybiBhfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSx0LGEscil7cj1yfHxuLmxhbmd1YWdlczt2YXIgaT1yW2VdO2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpe2E9YXJndW1lbnRzWzFdO2Zvcih2YXIgbCBpbiBhKWEuaGFzT3duUHJvcGVydHkobCkmJihpW2xdPWFbbF0pO3JldHVybiBpfXZhciBvPXt9O2Zvcih2YXIgcyBpbiBpKWlmKGkuaGFzT3duUHJvcGVydHkocykpe2lmKHM9PXQpZm9yKHZhciBsIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShsKSYmKG9bbF09YVtsXSk7b1tzXT1pW3NdfXJldHVybiBuLmxhbmd1YWdlcy5ERlMobi5sYW5ndWFnZXMsZnVuY3Rpb24odCxuKXtuPT09cltlXSYmdCE9ZSYmKHRoaXNbdF09byl9KSxyW2VdPW99LERGUzpmdW5jdGlvbihlLHQsYSxyKXtyPXJ8fHt9O2Zvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJih0LmNhbGwoZSxpLGVbaV0sYXx8aSksXCJPYmplY3RcIiE9PW4udXRpbC50eXBlKGVbaV0pfHxyW24udXRpbC5vYmpJZChlW2ldKV0/XCJBcnJheVwiIT09bi51dGlsLnR5cGUoZVtpXSl8fHJbbi51dGlsLm9iaklkKGVbaV0pXXx8KHJbbi51dGlsLm9iaklkKGVbaV0pXT0hMCxuLmxhbmd1YWdlcy5ERlMoZVtpXSx0LGkscikpOihyW24udXRpbC5vYmpJZChlW2ldKV09ITAsbi5sYW5ndWFnZXMuREZTKGVbaV0sdCxudWxsLHIpKSl9fSxwbHVnaW5zOnt9LGhpZ2hsaWdodEFsbDpmdW5jdGlvbihlLHQpe3ZhciBhPXtjYWxsYmFjazp0LHNlbGVjdG9yOidjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSd9O24uaG9va3MucnVuKFwiYmVmb3JlLWhpZ2hsaWdodGFsbFwiLGEpO2Zvcih2YXIgcixpPWEuZWxlbWVudHN8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5zZWxlY3RvciksbD0wO3I9aVtsKytdOyluLmhpZ2hsaWdodEVsZW1lbnQocixlPT09ITAsYS5jYWxsYmFjayl9LGhpZ2hsaWdodEVsZW1lbnQ6ZnVuY3Rpb24odCxhLHIpe2Zvcih2YXIgaSxsLG89dDtvJiYhZS50ZXN0KG8uY2xhc3NOYW1lKTspbz1vLnBhcmVudE5vZGU7byYmKGk9KG8uY2xhc3NOYW1lLm1hdGNoKGUpfHxbLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGw9bi5sYW5ndWFnZXNbaV0pLHQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UoZSxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpK1wiIGxhbmd1YWdlLVwiK2ksbz10LnBhcmVudE5vZGUsL3ByZS9pLnRlc3Qoby5ub2RlTmFtZSkmJihvLmNsYXNzTmFtZT1vLmNsYXNzTmFtZS5yZXBsYWNlKGUsXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKStcIiBsYW5ndWFnZS1cIitpKTt2YXIgcz10LnRleHRDb250ZW50LHU9e2VsZW1lbnQ6dCxsYW5ndWFnZTppLGdyYW1tYXI6bCxjb2RlOnN9O2lmKG4uaG9va3MucnVuKFwiYmVmb3JlLXNhbml0eS1jaGVja1wiLHUpLCF1LmNvZGV8fCF1LmdyYW1tYXIpcmV0dXJuIHUuY29kZSYmKG4uaG9va3MucnVuKFwiYmVmb3JlLWhpZ2hsaWdodFwiLHUpLHUuZWxlbWVudC50ZXh0Q29udGVudD11LmNvZGUsbi5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIix1KSksbi5ob29rcy5ydW4oXCJjb21wbGV0ZVwiLHUpLHZvaWQgMDtpZihuLmhvb2tzLnJ1bihcImJlZm9yZS1oaWdobGlnaHRcIix1KSxhJiZfc2VsZi5Xb3JrZXIpe3ZhciBnPW5ldyBXb3JrZXIobi5maWxlbmFtZSk7Zy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dS5oaWdobGlnaHRlZENvZGU9ZS5kYXRhLG4uaG9va3MucnVuKFwiYmVmb3JlLWluc2VydFwiLHUpLHUuZWxlbWVudC5pbm5lckhUTUw9dS5oaWdobGlnaHRlZENvZGUsciYmci5jYWxsKHUuZWxlbWVudCksbi5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIix1KSxuLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsdSl9LGcucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe2xhbmd1YWdlOnUubGFuZ3VhZ2UsY29kZTp1LmNvZGUsaW1tZWRpYXRlQ2xvc2U6ITB9KSl9ZWxzZSB1LmhpZ2hsaWdodGVkQ29kZT1uLmhpZ2hsaWdodCh1LmNvZGUsdS5ncmFtbWFyLHUubGFuZ3VhZ2UpLG4uaG9va3MucnVuKFwiYmVmb3JlLWluc2VydFwiLHUpLHUuZWxlbWVudC5pbm5lckhUTUw9dS5oaWdobGlnaHRlZENvZGUsciYmci5jYWxsKHQpLG4uaG9va3MucnVuKFwiYWZ0ZXItaGlnaGxpZ2h0XCIsdSksbi5ob29rcy5ydW4oXCJjb21wbGV0ZVwiLHUpfSxoaWdobGlnaHQ6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPW4udG9rZW5pemUoZSx0KTtyZXR1cm4gYS5zdHJpbmdpZnkobi51dGlsLmVuY29kZShpKSxyKX0sbWF0Y2hHcmFtbWFyOmZ1bmN0aW9uKGUsdCxhLHIsaSxsLG8pe3ZhciBzPW4uVG9rZW47Zm9yKHZhciB1IGluIGEpaWYoYS5oYXNPd25Qcm9wZXJ0eSh1KSYmYVt1XSl7aWYodT09bylyZXR1cm47dmFyIGc9YVt1XTtnPVwiQXJyYXlcIj09PW4udXRpbC50eXBlKGcpP2c6W2ddO2Zvcih2YXIgYz0wO2M8Zy5sZW5ndGg7KytjKXt2YXIgaD1nW2NdLGY9aC5pbnNpZGUsZD0hIWgubG9va2JlaGluZCxtPSEhaC5ncmVlZHkscD0wLHk9aC5hbGlhcztpZihtJiYhaC5wYXR0ZXJuLmdsb2JhbCl7dmFyIHY9aC5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXV5XSokLylbMF07aC5wYXR0ZXJuPVJlZ0V4cChoLnBhdHRlcm4uc291cmNlLHYrXCJnXCIpfWg9aC5wYXR0ZXJufHxoO2Zvcih2YXIgYj1yLGs9aTtiPHQubGVuZ3RoO2srPXRbYl0ubGVuZ3RoLCsrYil7dmFyIHc9dFtiXTtpZih0Lmxlbmd0aD5lLmxlbmd0aClyZXR1cm47aWYoISh3IGluc3RhbmNlb2Ygcykpe2gubGFzdEluZGV4PTA7dmFyIF89aC5leGVjKHcpLFA9MTtpZighXyYmbSYmYiE9dC5sZW5ndGgtMSl7aWYoaC5sYXN0SW5kZXg9ayxfPWguZXhlYyhlKSwhXylicmVhaztmb3IodmFyIEE9Xy5pbmRleCsoZD9fWzFdLmxlbmd0aDowKSxqPV8uaW5kZXgrX1swXS5sZW5ndGgseD1iLE89ayxTPXQubGVuZ3RoO1M+eCYmKGo+T3x8IXRbeF0udHlwZSYmIXRbeC0xXS5ncmVlZHkpOysreClPKz10W3hdLmxlbmd0aCxBPj1PJiYoKytiLGs9Tyk7aWYodFtiXWluc3RhbmNlb2Ygc3x8dFt4LTFdLmdyZWVkeSljb250aW51ZTtQPXgtYix3PWUuc2xpY2UoayxPKSxfLmluZGV4LT1rfWlmKF8pe2QmJihwPV9bMV0ubGVuZ3RoKTt2YXIgQT1fLmluZGV4K3AsXz1fWzBdLnNsaWNlKHApLGo9QStfLmxlbmd0aCxOPXcuc2xpY2UoMCxBKSxDPXcuc2xpY2UoaiksRT1bYixQXTtOJiYoKytiLGsrPU4ubGVuZ3RoLEUucHVzaChOKSk7dmFyIEk9bmV3IHModSxmP24udG9rZW5pemUoXyxmKTpfLHksXyxtKTtpZihFLnB1c2goSSksQyYmRS5wdXNoKEMpLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodCxFKSwxIT1QJiZuLm1hdGNoR3JhbW1hcihlLHQsYSxiLGssITAsdSksbClicmVha31lbHNlIGlmKGwpYnJlYWt9fX19fSx0b2tlbml6ZTpmdW5jdGlvbihlLHQpe3ZhciBhPVtlXSxyPXQucmVzdDtpZihyKXtmb3IodmFyIGkgaW4gcil0W2ldPXJbaV07ZGVsZXRlIHQucmVzdH1yZXR1cm4gbi5tYXRjaEdyYW1tYXIoZSxhLHQsMCwwLCExKSxhfSxob29rczp7YWxsOnt9LGFkZDpmdW5jdGlvbihlLHQpe3ZhciBhPW4uaG9va3MuYWxsO2FbZV09YVtlXXx8W10sYVtlXS5wdXNoKHQpfSxydW46ZnVuY3Rpb24oZSx0KXt2YXIgYT1uLmhvb2tzLmFsbFtlXTtpZihhJiZhLmxlbmd0aClmb3IodmFyIHIsaT0wO3I9YVtpKytdOylyKHQpfX19LGE9bi5Ub2tlbj1mdW5jdGlvbihlLHQsbixhLHIpe3RoaXMudHlwZT1lLHRoaXMuY29udGVudD10LHRoaXMuYWxpYXM9bix0aGlzLmxlbmd0aD0wfChhfHxcIlwiKS5sZW5ndGgsdGhpcy5ncmVlZHk9ISFyfTtpZihhLnN0cmluZ2lmeT1mdW5jdGlvbihlLHQscil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoXCJBcnJheVwiPT09bi51dGlsLnR5cGUoZSkpcmV0dXJuIGUubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBhLnN0cmluZ2lmeShuLHQsZSl9KS5qb2luKFwiXCIpO3ZhciBpPXt0eXBlOmUudHlwZSxjb250ZW50OmEuc3RyaW5naWZ5KGUuY29udGVudCx0LHIpLHRhZzpcInNwYW5cIixjbGFzc2VzOltcInRva2VuXCIsZS50eXBlXSxhdHRyaWJ1dGVzOnt9LGxhbmd1YWdlOnQscGFyZW50OnJ9O2lmKFwiY29tbWVudFwiPT1pLnR5cGUmJihpLmF0dHJpYnV0ZXMuc3BlbGxjaGVjaz1cInRydWVcIiksZS5hbGlhcyl7dmFyIGw9XCJBcnJheVwiPT09bi51dGlsLnR5cGUoZS5hbGlhcyk/ZS5hbGlhczpbZS5hbGlhc107QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoaS5jbGFzc2VzLGwpfW4uaG9va3MucnVuKFwid3JhcFwiLGkpO3ZhciBvPU9iamVjdC5rZXlzKGkuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlKyc9XCInKyhpLmF0dHJpYnV0ZXNbZV18fFwiXCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIikrJ1wiJ30pLmpvaW4oXCIgXCIpO3JldHVyblwiPFwiK2kudGFnKycgY2xhc3M9XCInK2kuY2xhc3Nlcy5qb2luKFwiIFwiKSsnXCInKyhvP1wiIFwiK286XCJcIikrXCI+XCIraS5jb250ZW50K1wiPC9cIitpLnRhZytcIj5cIn0sIV9zZWxmLmRvY3VtZW50KXJldHVybiBfc2VsZi5hZGRFdmVudExpc3RlbmVyPyhfc2VsZi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGUpe3ZhciB0PUpTT04ucGFyc2UoZS5kYXRhKSxhPXQubGFuZ3VhZ2Uscj10LmNvZGUsaT10LmltbWVkaWF0ZUNsb3NlO19zZWxmLnBvc3RNZXNzYWdlKG4uaGlnaGxpZ2h0KHIsbi5sYW5ndWFnZXNbYV0sYSkpLGkmJl9zZWxmLmNsb3NlKCl9LCExKSxfc2VsZi5QcmlzbSk6X3NlbGYuUHJpc207dmFyIHI9ZG9jdW1lbnQuY3VycmVudFNjcmlwdHx8W10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucG9wKCk7cmV0dXJuIHImJihuLmZpbGVuYW1lPXIuc3JjLG4ubWFudWFsfHxyLmhhc0F0dHJpYnV0ZShcImRhdGEtbWFudWFsXCIpfHwoXCJsb2FkaW5nXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShuLmhpZ2hsaWdodEFsbCk6d2luZG93LnNldFRpbWVvdXQobi5oaWdobGlnaHRBbGwsMTYpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsbi5oaWdobGlnaHRBbGwpKSksX3NlbGYuUHJpc219KCk7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1QcmlzbSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmKGdsb2JhbC5QcmlzbT1QcmlzbSk7XG5QcmlzbS5sYW5ndWFnZXMubWFya3VwPXtjb21tZW50Oi88IS0tW1xcc1xcU10qPy0tPi8scHJvbG9nOi88XFw/W1xcc1xcU10rP1xcPz4vLGRvY3R5cGU6LzwhRE9DVFlQRVtcXHNcXFNdKz8+L2ksY2RhdGE6LzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XV0+L2ksdGFnOntwYXR0ZXJuOi88XFwvPyg/IVxcZClbXlxccz5cXC89JDxdKyg/OlxccytbXlxccz5cXC89XSsoPzo9KD86KFwifCcpKD86XFxcXFxcMXxcXFxcPyg/IVxcMSlbXFxzXFxTXSkqXFwxfFteXFxzJ1wiPj1dKykpPykqXFxzKlxcLz8+L2ksaW5zaWRlOnt0YWc6e3BhdHRlcm46L148XFwvP1teXFxzPlxcL10rL2ksaW5zaWRlOntwdW5jdHVhdGlvbjovXjxcXC8/LyxuYW1lc3BhY2U6L15bXlxccz5cXC86XSs6L319LFwiYXR0ci12YWx1ZVwiOntwYXR0ZXJuOi89KD86KCd8XCIpW1xcc1xcU10qPyhcXDEpfFteXFxzPl0rKS9pLGluc2lkZTp7cHVuY3R1YXRpb246L1s9PlwiJ10vfX0scHVuY3R1YXRpb246L1xcLz8+LyxcImF0dHItbmFtZVwiOntwYXR0ZXJuOi9bXlxccz5cXC9dKy8saW5zaWRlOntuYW1lc3BhY2U6L15bXlxccz5cXC86XSs6L319fX0sZW50aXR5Oi8mIz9bXFxkYS16XXsxLDh9Oy9pfSxQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5pbnNpZGVbXCJhdHRyLXZhbHVlXCJdLmluc2lkZS5lbnRpdHk9UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC5lbnRpdHksUHJpc20uaG9va3MuYWRkKFwid3JhcFwiLGZ1bmN0aW9uKGEpe1wiZW50aXR5XCI9PT1hLnR5cGUmJihhLmF0dHJpYnV0ZXMudGl0bGU9YS5jb250ZW50LnJlcGxhY2UoLyZhbXA7LyxcIiZcIikpfSksUHJpc20ubGFuZ3VhZ2VzLnhtbD1QcmlzbS5sYW5ndWFnZXMubWFya3VwLFByaXNtLmxhbmd1YWdlcy5odG1sPVByaXNtLmxhbmd1YWdlcy5tYXJrdXAsUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbD1QcmlzbS5sYW5ndWFnZXMubWFya3VwLFByaXNtLmxhbmd1YWdlcy5zdmc9UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5jc3M9e2NvbW1lbnQ6L1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLGF0cnVsZTp7cGF0dGVybjovQFtcXHctXSs/Lio/KDt8KD89XFxzKlxceykpL2ksaW5zaWRlOntydWxlOi9AW1xcdy1dKy99fSx1cmw6L3VybFxcKCg/OihbXCInXSkoXFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMXwuKj8pXFwpL2ksc2VsZWN0b3I6L1teXFx7XFx9XFxzXVteXFx7XFx9O10qPyg/PVxccypcXHspLyxzdHJpbmc6e3BhdHRlcm46LyhcInwnKShcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxncmVlZHk6ITB9LHByb3BlcnR5Oi8oXFxifFxcQilbXFx3LV0rKD89XFxzKjopL2ksaW1wb3J0YW50Oi9cXEIhaW1wb3J0YW50XFxiL2ksXCJmdW5jdGlvblwiOi9bLWEtejAtOV0rKD89XFwoKS9pLHB1bmN0dWF0aW9uOi9bKCl7fTs6XS99LFByaXNtLmxhbmd1YWdlcy5jc3MuYXRydWxlLmluc2lkZS5yZXN0PVByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLmNzcyksUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCYmKFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJtYXJrdXBcIixcInRhZ1wiLHtzdHlsZTp7cGF0dGVybjovKDxzdHlsZVtcXHNcXFNdKj8+KVtcXHNcXFNdKj8oPz08XFwvc3R5bGU+KS9pLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOlByaXNtLmxhbmd1YWdlcy5jc3MsYWxpYXM6XCJsYW5ndWFnZS1jc3NcIn19KSxQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiaW5zaWRlXCIsXCJhdHRyLXZhbHVlXCIse1wic3R5bGUtYXR0clwiOntwYXR0ZXJuOi9cXHMqc3R5bGU9KFwifCcpLio/XFwxL2ksaW5zaWRlOntcImF0dHItbmFtZVwiOntwYXR0ZXJuOi9eXFxzKnN0eWxlL2ksaW5zaWRlOlByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZX0scHVuY3R1YXRpb246L15cXHMqPVxccypbJ1wiXXxbJ1wiXVxccyokLyxcImF0dHItdmFsdWVcIjp7cGF0dGVybjovLisvaSxpbnNpZGU6UHJpc20ubGFuZ3VhZ2VzLmNzc319LGFsaWFzOlwibGFuZ3VhZ2UtY3NzXCJ9fSxQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZykpO1xuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlPXtjb21tZW50Olt7cGF0dGVybjovKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxsb29rYmVoaW5kOiEwfSx7cGF0dGVybjovKF58W15cXFxcOl0pXFwvXFwvLiovLGxvb2tiZWhpbmQ6ITB9XSxzdHJpbmc6e3BhdHRlcm46LyhbXCInXSkoXFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sZ3JlZWR5OiEwfSxcImNsYXNzLW5hbWVcIjp7cGF0dGVybjovKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbYS16MC05X1xcLlxcXFxdKy9pLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntwdW5jdHVhdGlvbjovKFxcLnxcXFxcKS99fSxrZXl3b3JkOi9cXGIoaWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcImJvb2xlYW5cIjovXFxiKHRydWV8ZmFsc2UpXFxiLyxcImZ1bmN0aW9uXCI6L1thLXowLTlfXSsoPz1cXCgpL2ksbnVtYmVyOi9cXGItPyg/OjB4W1xcZGEtZl0rfFxcZCpcXC4/XFxkKyg/OmVbKy1dP1xcZCspPylcXGIvaSxvcGVyYXRvcjovLS0/fFxcK1xcKz98IT0/PT98PD0/fD49P3w9PT89P3wmJj98XFx8XFx8P3xcXD98XFwqfFxcL3x+fFxcXnwlLyxwdW5jdHVhdGlvbjovW3t9W1xcXTsoKSwuOl0vfTtcblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0PVByaXNtLmxhbmd1YWdlcy5leHRlbmQoXCJjbGlrZVwiLHtrZXl3b3JkOi9cXGIoYXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLG51bWJlcjovXFxiLT8oMFt4WF1bXFxkQS1GYS1mXSt8MFtiQl1bMDFdK3wwW29PXVswLTddK3xcXGQqXFwuP1xcZCsoW0VlXVsrLV0/XFxkKyk/fE5hTnxJbmZpbml0eSlcXGIvLFwiZnVuY3Rpb25cIjovW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSooPz1cXCgpL2ksb3BlcmF0b3I6Ly1bLT1dP3xcXCtbKz1dP3whPT89P3w8PD89P3w+Pj8+Pz0/fD0oPzo9PT98Pik/fCZbJj1dP3xcXHxbfD1dP3xcXCpcXCo/PT98XFwvPT98fnxcXF49P3wlPT98XFw/fFxcLnszfS99KSxQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiamF2YXNjcmlwdFwiLFwia2V5d29yZFwiLHtyZWdleDp7cGF0dGVybjovKF58W15cXC9dKVxcLyg/IVxcLykoXFxbW15cXF1cXHJcXG5dK118XFxcXC58W15cXC9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1XXswLDV9KD89XFxzKigkfFtcXHJcXG4sLjt9KV0pKS8sbG9va2JlaGluZDohMCxncmVlZHk6ITB9fSksUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcImphdmFzY3JpcHRcIixcInN0cmluZ1wiLHtcInRlbXBsYXRlLXN0cmluZ1wiOntwYXR0ZXJuOi9gKD86XFxcXFxcXFx8XFxcXD9bXlxcXFxdKSo/YC8sZ3JlZWR5OiEwLGluc2lkZTp7aW50ZXJwb2xhdGlvbjp7cGF0dGVybjovXFwkXFx7W159XStcXH0vLGluc2lkZTp7XCJpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uXCI6e3BhdHRlcm46L15cXCRcXHt8XFx9JC8sYWxpYXM6XCJwdW5jdHVhdGlvblwifSxyZXN0OlByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0fX0sc3RyaW5nOi9bXFxzXFxTXSsvfX19KSxQcmlzbS5sYW5ndWFnZXMubWFya3VwJiZQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwibWFya3VwXCIsXCJ0YWdcIix7c2NyaXB0OntwYXR0ZXJuOi8oPHNjcmlwdFtcXHNcXFNdKj8+KVtcXHNcXFNdKj8oPz08XFwvc2NyaXB0PikvaSxsb29rYmVoaW5kOiEwLGluc2lkZTpQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCxhbGlhczpcImxhbmd1YWdlLWphdmFzY3JpcHRcIn19KSxQcmlzbS5sYW5ndWFnZXMuanM9UHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5QcmlzbS5sYW5ndWFnZXMuaHR0cD17XCJyZXF1ZXN0LWxpbmVcIjp7cGF0dGVybjovXihQT1NUfEdFVHxQVVR8REVMRVRFfE9QVElPTlN8UEFUQ0h8VFJBQ0V8Q09OTkVDVClcXGJcXHNodHRwcz86XFwvXFwvXFxTK1xcc0hUVFBcXC9bMC05Ll0rL20saW5zaWRlOntwcm9wZXJ0eTovXihQT1NUfEdFVHxQVVR8REVMRVRFfE9QVElPTlN8UEFUQ0h8VFJBQ0V8Q09OTkVDVClcXGIvLFwiYXR0ci1uYW1lXCI6LzpcXHcrL319LFwicmVzcG9uc2Utc3RhdHVzXCI6e3BhdHRlcm46L15IVFRQXFwvMS5bMDFdIFxcZCsuKi9tLGluc2lkZTp7cHJvcGVydHk6e3BhdHRlcm46LyheSFRUUFxcLzEuWzAxXSApXFxkKy4qL2ksbG9va2JlaGluZDohMH19fSxcImhlYWRlci1uYW1lXCI6e3BhdHRlcm46L15bXFx3LV0rOig/PS4pL20sYWxpYXM6XCJrZXl3b3JkXCJ9fTt2YXIgaHR0cExhbmd1YWdlcz17XCJhcHBsaWNhdGlvbi9qc29uXCI6UHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQsXCJhcHBsaWNhdGlvbi94bWxcIjpQcmlzbS5sYW5ndWFnZXMubWFya3VwLFwidGV4dC94bWxcIjpQcmlzbS5sYW5ndWFnZXMubWFya3VwLFwidGV4dC9odG1sXCI6UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cH07Zm9yKHZhciBjb250ZW50VHlwZSBpbiBodHRwTGFuZ3VhZ2VzKWlmKGh0dHBMYW5ndWFnZXNbY29udGVudFR5cGVdKXt2YXIgb3B0aW9ucz17fTtvcHRpb25zW2NvbnRlbnRUeXBlXT17cGF0dGVybjpuZXcgUmVnRXhwKFwiKGNvbnRlbnQtdHlwZTpcXFxccypcIitjb250ZW50VHlwZStcIltcXFxcd1xcXFxXXSo/KSg/OlxcXFxyP1xcXFxufFxcXFxyKXsyfVtcXFxcd1xcXFxXXSpcIixcImlcIiksbG9va2JlaGluZDohMCxpbnNpZGU6e3Jlc3Q6aHR0cExhbmd1YWdlc1tjb250ZW50VHlwZV19fSxQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiaHR0cFwiLFwiaGVhZGVyLW5hbWVcIixvcHRpb25zKX07XG5QcmlzbS5sYW5ndWFnZXMuanNvbj17cHJvcGVydHk6L1wiKD86XFxcXC58W15cXFxcXCJdKSpcIig/PVxccyo6KS9naSxzdHJpbmc6L1wiKD8hOikoPzpcXFxcLnxbXlxcXFxcIl0pKlwiKD8hOikvZyxudW1iZXI6L1xcYi0/KDB4W1xcZEEtRmEtZl0rfFxcZCpcXC4/XFxkKyhbRWVdWystXT9cXGQrKT8pXFxiL2cscHVuY3R1YXRpb246L1t7fVtcXF0pOyxdL2csb3BlcmF0b3I6LzovZyxcImJvb2xlYW5cIjovXFxiKHRydWV8ZmFsc2UpXFxiL2dpLFwibnVsbFwiOi9cXGJudWxsXFxiL2dpfSxQcmlzbS5sYW5ndWFnZXMuanNvbnA9UHJpc20ubGFuZ3VhZ2VzLmpzb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9wcmlzbS9wcmlzbS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbJ1BsZWFzZSBzZWxlY3QgYSBmb3JtYXQgZnJvbSB0aGUgZHJvcGRvd24gbWVudScsIFwiXCIsIFwiXCJdO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5pdGlhbFN0cmluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=