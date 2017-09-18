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
/* 4 */,
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

 module.exports = ['responseDisplayHeaders', 'responseDisplayJSON', 'responseDisplayXML'];


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themes_style_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themes_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__themes_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_prism_prism_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_prism_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_prism_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_fetchApi_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_ajaxController_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_ajaxController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__controllers_ajaxController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_setupController_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_setupController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__controllers_setupController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_prism_prism_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_prism_prism_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__lib_prism_prism_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__idsToBeSwapped_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__idsToBeSwapped_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__idsToBeSwapped_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__initialStrings_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__initialStrings_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__initialStrings_js__);












document.body.onload = __WEBPACK_IMPORTED_MODULE_4__controllers_setupController_js___default.a.initialNodeGenerator(__WEBPACK_IMPORTED_MODULE_4__controllers_setupController_js___default.a.loadTextNode, __WEBPACK_IMPORTED_MODULE_6__idsToBeSwapped_js___default.a, __WEBPACK_IMPORTED_MODULE_7__initialStrings_js___default.a);

var url, params;
var el = document.getElementById("format-selection");
el.addEventListener("change", function() {
  url = '/advertisers/response.' + this.value
  __WEBPACK_IMPORTED_MODULE_3__controllers_ajaxController_js___default.a.renderObject(url, __WEBPACK_IMPORTED_MODULE_5__lib_prism_prism_js___default.a.highlightAll);
});

// url = '/advertisers/?format=api+json'
// url = '/advertisers/?format=api+xml'
url = '/advertisers/response.json'

//switch to fetch

Object(__WEBPACK_IMPORTED_MODULE_2__api_fetchApi_js__["a" /* getObject */])(url).then(function(result) {

  console.log(result.json())

  global.document.getElementById('test').innerHTML = result.json();
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "body {\n   background-image: url(" + __webpack_require__(10) + ");\n}\n\n.navbar {\n  background: black;\n  color: grey;\n  font-family: Helvetica,Arial,sans-serif;\n\n  border-top: 5px solid maroon;\n\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n\n  min-height: 50px;\n  margin-bottom: 20px;\n  z-index: 999;\n\n}\n\n.navbar-logo {\n  margin-left: 50px;\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n\n.version {\n    font-size: 70%;\n}\n\n.selector {\n  margin-right: 50px;\n  margin-top: 25px;\n  float: right;\n  height: 30px;\n}\n\n.select-format {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n\n  height: 40px;\n  width: 80px;\n  color: white;\n  background-color: royalblue;\n  border: 1px solid transparent;\n  border-color: darkblue;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0;\n    transition: opacity 1s;\n}\n\n.tooltip .tooltiptext::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n}\n\n.container {\n  font-family: Arial,sans-serif;\n\n    width: 1170px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-top: 100px;\n    margin-right: auto;\n    margin-left: 50px;\n}\n\n.content-header {\n  display: inline-block;\n  text-align: center;\n}\n\n.request-info {\n  margin-bottom: 20px;\n}\n\n.request {\n  border-radius: 6px;\n  background-color: ghostwhite;\n  border: 1px solid lightgrey;\n  line-height: 30px;\n}\n\n.method {\n  font-weight: bold;\n  position: relative;\n  padding-left: 10px;\n}\n\n.codeBlock {\n  background: transparent;\n  background-color: rgba(0,0,0,1);\n}\n\n.language-http {\n  text-transform: capitalize;\n}\n\npre {\n  border-radius: 25px;\n  background-color: ghostwhite;\n  line-height: 30px;\n  background-color: transparent!important;\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.png";

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);


function getObject(url) {
  return get(url);
}

//private functions
function get(url) {
  return fetch(url).then(onSuccess, onError)
}

function onSuccess(response) {
  return response;
}

function onError(error) {
  return error;
}


//Only handle get from api handle more complex actions in future deployments


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

//display ids
var setupController = __webpack_require__(5);
var idsToBeSwapped = __webpack_require__(6);
var xmlResponse = 'responseDisplayXML';
var jsonResponse = 'responseDisplayJSON';
var headersResponse = 'responseDisplayHeaders';

function ajaxController() {
  function load (url, callback, syntaxHighlighting) {
    var httpRequest;
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        // Process the server response here.
        if (httpRequest.readyState < 4) {
          return;
        }
        //Error handling
        if (httpRequest.status < 200 || httpRequest.status >= 300) {
          alert("There was a problem processing your request.")
          var errorMessage = `Error: ${httpRequest.status} ${httpRequest.statusText}`;
          document.getElementById(idsToBeSwapped[0]).innerHTML = errorMessage;
          return httpRequest;
        }
        // all is well
        if (httpRequest.readyState === 4) {
          var responseId = "", last = url.length-1;
          if (url[last] === 'l') { responseId = xmlResponse }
          else if (url[last] === 'n') { responseId = jsonResponse }

          var headersId = headersResponse;
          callback(httpRequest, url, headersId, responseId, syntaxHighlighting);
        }
    };

    console.log(typeof httpRequest)
    httpRequest.open('GET', url, true);
    httpRequest.send();

    return httpRequest;
  }
// run replaceObject on an instance of a request
  function replaceObject(httpRequest, url, headersId, responseId, syntaxHighlighting) {
    var responseToBeFormatted = httpRequest.responseText;
    var headers = `HTTP ${httpRequest.status} ${httpRequest.statusText}\n`;
    headers += (httpRequest.getAllResponseHeaders());
    //set headers
    document.getElementById(headersId)
      .replaceChild(
        document.createTextNode(headers),
        document.getElementById(headersId)
        .lastChild).innerHTML = headers;
    //set response
    document.getElementById(responseId)
      .replaceChild(
        document.createTextNode(responseToBeFormatted),
        document.getElementById(responseId).lastChild
      ).innerHTML = responseToBeFormatted;
      //highlight response
      if (syntaxHighlighting) {
        syntaxHighlighting();
      }
    }

    function renderObject (url, syntaxHighlighting) {
      setupController.clearForSwapping(idsToBeSwapped);
      this.load(url, this.replaceObject, syntaxHighlighting);
    }
  return {load, replaceObject, renderObject}
}

module.exports = ajaxController();


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

module.exports = ['Please select a format from the dropdown menu', "", ""];


/***/ })
],[7]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zZXR1cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lkc1RvQmVTd2FwcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL3N0eWxlLmNzcz82MDk5Iiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9mZXRjaEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvYWpheENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ByaXNtL3ByaXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsU3RyaW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7Ozs7Ozs7QUN4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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LFFBQVE7QUFDN3VCLHFCQUFxQixtQ0FBbUMsc0JBQXNCLFNBQVMsYUFBYSxnQkFBZ0Isa0ZBQWtGLEVBQUUsT0FBTyxHQUFHLFdBQVcsV0FBVyxnRUFBZ0UsaUhBQWlILElBQUksb0pBQW9KLE9BQU8saUhBQWlILHNEQUFzRCxjQUFjLHVDQUF1QyxhQUFhLDhEQUE4RCxtREFBbUQsMENBQTBDLHVCQUF1QjtBQUNuOUIsdUJBQXVCLFVBQVUsd0RBQXdELEVBQUUseUNBQXlDLFVBQVUsaUVBQWlFLGVBQWUscUlBQXFJLHVCQUF1QiwwVEFBMFQsSUFBSTtBQUN4ckIsMkRBQTJELDRrQkFBNGtCLEVBQUUsRUFBRSx1REFBdUQsT0FBTyxzRUFBc0UsSUFBSSxrQkFBa0IsK0JBQStCLHNEQUFzRCxtQkFBbUIsa0RBQWtELGVBQWUsYUFBYSxHQUFHLElBQUksVUFBVSw2QkFBNkIsY0FBYyxHQUFHLHVCQUF1QixrQ0FBa0Msb0JBQW9CLHVFQUF1RSxRQUFRLGlJQUFpSTtBQUN2ekMsc0JBQXNCLGdCQUFnQix1R0FBdUcsb0ZBQW9GLG9CQUFvQix1Q0FBdUMsVUFBVSxpREFBaUQsZ0JBQWdCLDJDQUEyQyxtQkFBbUIsNkpBQTZKLG9FQUFvRSxlQUFlLHNCQUFzQixnRkFBZ0YsRUFBRSxzQ0FBc0MsaUNBQWlDO0FBQ3AwQixzQkFBc0Isc0pBQXNKLEtBQUssc0VBQXNFOzs7Ozs7OztBQ1B2UCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZnVuY3Rpb24gc2V0dXBDb250cm9sbGVyKCkge1xuICBmdW5jdGlvbiBsb2FkVGV4dE5vZGUgKGlkLCB0ZXh0KSB7XG4gICAgdmFyIG5ld3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgaW5pdGlhbERpc3BsYXlOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpbml0aWFsRGlzcGxheU5vZGUuYXBwZW5kQ2hpbGQobmV3dGV4dClcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuLy9UT0RPIHJlcGxhY2UgYXJyYXlzIHdpdGggb2JqZWN0IGZvciBjb25zaXN0ZW50IGxlbmd0aFxuICBmdW5jdGlvbiBpbml0aWFsTm9kZUdlbmVyYXRvcihsb2FkZXIsIGlkcywgdGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwO2k8aWRzLmxlbmd0aDtpKyspIHtcblxuICAgICAgbG9hZGVyKGlkc1tpXSwgdGV4dFtpXSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGVtcHR5SHRtbChhcnJheUh0bWxUb0VtcHR5KSB7XG4gICAgZm9yKHZhciBpIGluIGFycmF5SHRtbFRvRW1wdHkpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFycmF5SHRtbFRvRW1wdHlbaV0pLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGVtcHR5U3RyaW5nR2VuZXJhdG9yKGlkcykge1xuICAgIHZhciBlbXB0eVN0cmluZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpIGluIGlkcykge1xuICAgICAgZW1wdHlTdHJpbmdzLnB1c2goXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBlbXB0eVN0cmluZ3M7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJGb3JTd2FwcGluZyhpZHMpe1xuICAgIHRoaXMubm9kZVN3YXBwZXIodGhpcy5sb2FkVGV4dE5vZGUsIGlkcywgdGhpcy5lbXB0eVN0cmluZ0dlbmVyYXRvcihpZHMpKVxuICB9XG4gIGZ1bmN0aW9uIG5vZGVTd2FwcGVyKGxvYWRlciwgaWRzLCB0ZXh0KSB7XG4gICAgdGhpcy5lbXB0eUh0bWwoaWRzKTtcbiAgICBmb3IgKHZhciBpID0gMDtpPGlkcy5sZW5ndGg7aSsrKSB7XG4gICAgICBsb2FkZXIoaWRzW2ldLCB0ZXh0W2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtsb2FkVGV4dE5vZGUsIGluaXRpYWxOb2RlR2VuZXJhdG9yLCBlbXB0eVN0cmluZ0dlbmVyYXRvciwgZW1wdHlIdG1sLCBjbGVhckZvclN3YXBwaW5nLCBub2RlU3dhcHBlcn1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cENvbnRyb2xsZXIoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXJzL3NldHVwQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIgbW9kdWxlLmV4cG9ydHMgPSBbJ3Jlc3BvbnNlRGlzcGxheUhlYWRlcnMnLCAncmVzcG9uc2VEaXNwbGF5SlNPTicsICdyZXNwb25zZURpc3BsYXlYTUwnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lkc1RvQmVTd2FwcGVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi90aGVtZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vbGliL3ByaXNtL3ByaXNtLmNzcydcblxuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJy4vYXBpL2ZldGNoQXBpLmpzJztcblxuaW1wb3J0IGFqYXhDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvYWpheENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHNldHVwQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3NldHVwQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgUHJpc20gZnJvbSAnLi4vbGliL3ByaXNtL3ByaXNtLmpzJztcblxuaW1wb3J0IGlkc1RvQmVTd2FwcGVkIGZyb20gJy4vaWRzVG9CZVN3YXBwZWQuanMnO1xuaW1wb3J0IGluaXRpYWxTdHJpbmdzIGZyb20gJy4vaW5pdGlhbFN0cmluZ3MuanMnO1xuXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IHNldHVwQ29udHJvbGxlci5pbml0aWFsTm9kZUdlbmVyYXRvcihzZXR1cENvbnRyb2xsZXIubG9hZFRleHROb2RlLCBpZHNUb0JlU3dhcHBlZCwgaW5pdGlhbFN0cmluZ3MpO1xuXG52YXIgdXJsLCBwYXJhbXM7XG52YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1hdC1zZWxlY3Rpb25cIik7XG5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICB1cmwgPSAnL2FkdmVydGlzZXJzL3Jlc3BvbnNlLicgKyB0aGlzLnZhbHVlXG4gIGFqYXhDb250cm9sbGVyLnJlbmRlck9iamVjdCh1cmwsIFByaXNtLmhpZ2hsaWdodEFsbCk7XG59KTtcblxuLy8gdXJsID0gJy9hZHZlcnRpc2Vycy8/Zm9ybWF0PWFwaStqc29uJ1xuLy8gdXJsID0gJy9hZHZlcnRpc2Vycy8/Zm9ybWF0PWFwaSt4bWwnXG51cmwgPSAnL2FkdmVydGlzZXJzL3Jlc3BvbnNlLmpzb24nXG5cbi8vc3dpdGNoIHRvIGZldGNoXG5cbmdldE9iamVjdCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgY29uc29sZS5sb2cocmVzdWx0Lmpzb24oKSlcblxuICBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKS5pbm5lckhUTUwgPSByZXN1bHQuanNvbigpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGhlbWVzL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2JhY2tncm91bmQucG5nXCIpICsgXCIpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuXFxuICBib3JkZXItdG9wOiA1cHggc29saWQgbWFyb29uO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcblxcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB6LWluZGV4OiA5OTk7XFxuXFxufVxcblxcbi5uYXZiYXItbG9nbyB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMTVweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi52ZXJzaW9uIHtcXG4gICAgZm9udC1zaXplOiA3MCU7XFxufVxcblxcbi5zZWxlY3RvciB7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0LWZvcm1hdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvdHRvbTogMTI1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLHNhbnMtc2VyaWY7XFxuXFxuICAgIHdpZHRoOiAxMTcwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXF1ZXN0LWluZm8ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlcXVlc3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubWV0aG9kIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY29kZUJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwxKTtcXG59XFxuXFxuLmxhbmd1YWdlLWh0dHAge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbnByZSB7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL3RoZW1lcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmFja2dyb3VuZC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvYmFja2dyb3VuZC5wbmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnd2hhdHdnLWZldGNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdCh1cmwpIHtcbiAgcmV0dXJuIGdldCh1cmwpO1xufVxuXG4vL3ByaXZhdGUgZnVuY3Rpb25zXG5mdW5jdGlvbiBnZXQodXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKVxufVxuXG5mdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5mdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gIHJldHVybiBlcnJvcjtcbn1cblxuXG4vL09ubHkgaGFuZGxlIGdldCBmcm9tIGFwaSBoYW5kbGUgbW9yZSBjb21wbGV4IGFjdGlvbnMgaW4gZnV0dXJlIGRlcGxveW1lbnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcGkvZmV0Y2hBcGkuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vZGlzcGxheSBpZHNcbnZhciBzZXR1cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3NldHVwQ29udHJvbGxlci5qcycpO1xudmFyIGlkc1RvQmVTd2FwcGVkID0gcmVxdWlyZSgnLi4vaWRzVG9CZVN3YXBwZWQuanMnKTtcbnZhciB4bWxSZXNwb25zZSA9ICdyZXNwb25zZURpc3BsYXlYTUwnO1xudmFyIGpzb25SZXNwb25zZSA9ICdyZXNwb25zZURpc3BsYXlKU09OJztcbnZhciBoZWFkZXJzUmVzcG9uc2UgPSAncmVzcG9uc2VEaXNwbGF5SGVhZGVycyc7XG5cbmZ1bmN0aW9uIGFqYXhDb250cm9sbGVyKCkge1xuICBmdW5jdGlvbiBsb2FkICh1cmwsIGNhbGxiYWNrLCBzeW50YXhIaWdobGlnaHRpbmcpIHtcbiAgICB2YXIgaHR0cFJlcXVlc3Q7XG4gICAgaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBQcm9jZXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaGVyZS5cbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPCA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vRXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnN0YXR1cyA8IDIwMCB8fCBodHRwUmVxdWVzdC5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LlwiKVxuICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7aHR0cFJlcXVlc3Quc3RhdHVzfSAke2h0dHBSZXF1ZXN0LnN0YXR1c1RleHR9YDtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHNUb0JlU3dhcHBlZFswXSkuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgIHJldHVybiBodHRwUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbGwgaXMgd2VsbFxuICAgICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIHZhciByZXNwb25zZUlkID0gXCJcIiwgbGFzdCA9IHVybC5sZW5ndGgtMTtcbiAgICAgICAgICBpZiAodXJsW2xhc3RdID09PSAnbCcpIHsgcmVzcG9uc2VJZCA9IHhtbFJlc3BvbnNlIH1cbiAgICAgICAgICBlbHNlIGlmICh1cmxbbGFzdF0gPT09ICduJykgeyByZXNwb25zZUlkID0ganNvblJlc3BvbnNlIH1cblxuICAgICAgICAgIHZhciBoZWFkZXJzSWQgPSBoZWFkZXJzUmVzcG9uc2U7XG4gICAgICAgICAgY2FsbGJhY2soaHR0cFJlcXVlc3QsIHVybCwgaGVhZGVyc0lkLCByZXNwb25zZUlkLCBzeW50YXhIaWdobGlnaHRpbmcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBodHRwUmVxdWVzdClcbiAgICBodHRwUmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIGh0dHBSZXF1ZXN0LnNlbmQoKTtcblxuICAgIHJldHVybiBodHRwUmVxdWVzdDtcbiAgfVxuLy8gcnVuIHJlcGxhY2VPYmplY3Qgb24gYW4gaW5zdGFuY2Ugb2YgYSByZXF1ZXN0XG4gIGZ1bmN0aW9uIHJlcGxhY2VPYmplY3QoaHR0cFJlcXVlc3QsIHVybCwgaGVhZGVyc0lkLCByZXNwb25zZUlkLCBzeW50YXhIaWdobGlnaHRpbmcpIHtcbiAgICB2YXIgcmVzcG9uc2VUb0JlRm9ybWF0dGVkID0gaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0O1xuICAgIHZhciBoZWFkZXJzID0gYEhUVFAgJHtodHRwUmVxdWVzdC5zdGF0dXN9ICR7aHR0cFJlcXVlc3Quc3RhdHVzVGV4dH1cXG5gO1xuICAgIGhlYWRlcnMgKz0gKGh0dHBSZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgICAvL3NldCBoZWFkZXJzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGVhZGVyc0lkKVxuICAgICAgLnJlcGxhY2VDaGlsZChcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGVhZGVycyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlYWRlcnNJZClcbiAgICAgICAgLmxhc3RDaGlsZCkuaW5uZXJIVE1MID0gaGVhZGVycztcbiAgICAvL3NldCByZXNwb25zZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc3BvbnNlSWQpXG4gICAgICAucmVwbGFjZUNoaWxkKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXNwb25zZVRvQmVGb3JtYXR0ZWQpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXNwb25zZUlkKS5sYXN0Q2hpbGRcbiAgICAgICkuaW5uZXJIVE1MID0gcmVzcG9uc2VUb0JlRm9ybWF0dGVkO1xuICAgICAgLy9oaWdobGlnaHQgcmVzcG9uc2VcbiAgICAgIGlmIChzeW50YXhIaWdobGlnaHRpbmcpIHtcbiAgICAgICAgc3ludGF4SGlnaGxpZ2h0aW5nKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyT2JqZWN0ICh1cmwsIHN5bnRheEhpZ2hsaWdodGluZykge1xuICAgICAgc2V0dXBDb250cm9sbGVyLmNsZWFyRm9yU3dhcHBpbmcoaWRzVG9CZVN3YXBwZWQpO1xuICAgICAgdGhpcy5sb2FkKHVybCwgdGhpcy5yZXBsYWNlT2JqZWN0LCBzeW50YXhIaWdobGlnaHRpbmcpO1xuICAgIH1cbiAgcmV0dXJuIHtsb2FkLCByZXBsYWNlT2JqZWN0LCByZW5kZXJPYmplY3R9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWpheENvbnRyb2xsZXIoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXJzL2FqYXhDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBodHRwOi8vcHJpc21qcy5jb20vZG93bmxvYWQuaHRtbD90aGVtZXM9cHJpc20mbGFuZ3VhZ2VzPW1hcmt1cCtjc3MrY2xpa2UramF2YXNjcmlwdCtodHRwK2pzb24gKi9cbnZhciBfc2VsZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUmJnNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZT9zZWxmOnt9LFByaXNtPWZ1bmN0aW9uKCl7dmFyIGU9L1xcYmxhbmcoPzp1YWdlKT8tKFxcdyspXFxiL2ksdD0wLG49X3NlbGYuUHJpc209e21hbnVhbDpfc2VsZi5QcmlzbSYmX3NlbGYuUHJpc20ubWFudWFsLHV0aWw6e2VuY29kZTpmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIGE/bmV3IGEoZS50eXBlLG4udXRpbC5lbmNvZGUoZS5jb250ZW50KSxlLmFsaWFzKTpcIkFycmF5XCI9PT1uLnV0aWwudHlwZShlKT9lLm1hcChuLnV0aWwuZW5jb2RlKTplLnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvXFx1MDBhMC9nLFwiIFwiKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLm1hdGNoKC9cXFtvYmplY3QgKFxcdyspXFxdLylbMV19LG9iaklkOmZ1bmN0aW9uKGUpe3JldHVybiBlLl9faWR8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19pZFwiLHt2YWx1ZTorK3R9KSxlLl9faWR9LGNsb25lOmZ1bmN0aW9uKGUpe3ZhciB0PW4udXRpbC50eXBlKGUpO3N3aXRjaCh0KXtjYXNlXCJPYmplY3RcIjp2YXIgYT17fTtmb3IodmFyIHIgaW4gZSllLmhhc093blByb3BlcnR5KHIpJiYoYVtyXT1uLnV0aWwuY2xvbmUoZVtyXSkpO3JldHVybiBhO2Nhc2VcIkFycmF5XCI6cmV0dXJuIGUubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBuLnV0aWwuY2xvbmUoZSl9KX1yZXR1cm4gZX19LGxhbmd1YWdlczp7ZXh0ZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIGE9bi51dGlsLmNsb25lKG4ubGFuZ3VhZ2VzW2VdKTtmb3IodmFyIHIgaW4gdClhW3JdPXRbcl07cmV0dXJuIGF9LGluc2VydEJlZm9yZTpmdW5jdGlvbihlLHQsYSxyKXtyPXJ8fG4ubGFuZ3VhZ2VzO3ZhciBpPXJbZV07aWYoMj09YXJndW1lbnRzLmxlbmd0aCl7YT1hcmd1bWVudHNbMV07Zm9yKHZhciBsIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShsKSYmKGlbbF09YVtsXSk7cmV0dXJuIGl9dmFyIG89e307Zm9yKHZhciBzIGluIGkpaWYoaS5oYXNPd25Qcm9wZXJ0eShzKSl7aWYocz09dClmb3IodmFyIGwgaW4gYSlhLmhhc093blByb3BlcnR5KGwpJiYob1tsXT1hW2xdKTtvW3NdPWlbc119cmV0dXJuIG4ubGFuZ3VhZ2VzLkRGUyhuLmxhbmd1YWdlcyxmdW5jdGlvbih0LG4pe249PT1yW2VdJiZ0IT1lJiYodGhpc1t0XT1vKX0pLHJbZV09b30sREZTOmZ1bmN0aW9uKGUsdCxhLHIpe3I9cnx8e307Zm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHQuY2FsbChlLGksZVtpXSxhfHxpKSxcIk9iamVjdFwiIT09bi51dGlsLnR5cGUoZVtpXSl8fHJbbi51dGlsLm9iaklkKGVbaV0pXT9cIkFycmF5XCIhPT1uLnV0aWwudHlwZShlW2ldKXx8cltuLnV0aWwub2JqSWQoZVtpXSldfHwocltuLnV0aWwub2JqSWQoZVtpXSldPSEwLG4ubGFuZ3VhZ2VzLkRGUyhlW2ldLHQsaSxyKSk6KHJbbi51dGlsLm9iaklkKGVbaV0pXT0hMCxuLmxhbmd1YWdlcy5ERlMoZVtpXSx0LG51bGwscikpKX19LHBsdWdpbnM6e30saGlnaGxpZ2h0QWxsOmZ1bmN0aW9uKGUsdCl7dmFyIGE9e2NhbGxiYWNrOnQsc2VsZWN0b3I6J2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ307bi5ob29rcy5ydW4oXCJiZWZvcmUtaGlnaGxpZ2h0YWxsXCIsYSk7Zm9yKHZhciByLGk9YS5lbGVtZW50c3x8ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLnNlbGVjdG9yKSxsPTA7cj1pW2wrK107KW4uaGlnaGxpZ2h0RWxlbWVudChyLGU9PT0hMCxhLmNhbGxiYWNrKX0saGlnaGxpZ2h0RWxlbWVudDpmdW5jdGlvbih0LGEscil7Zm9yKHZhciBpLGwsbz10O28mJiFlLnRlc3Qoby5jbGFzc05hbWUpOylvPW8ucGFyZW50Tm9kZTtvJiYoaT0oby5jbGFzc05hbWUubWF0Y2goZSl8fFssXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksbD1uLmxhbmd1YWdlc1tpXSksdC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShlLFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikrXCIgbGFuZ3VhZ2UtXCIraSxvPXQucGFyZW50Tm9kZSwvcHJlL2kudGVzdChvLm5vZGVOYW1lKSYmKG8uY2xhc3NOYW1lPW8uY2xhc3NOYW1lLnJlcGxhY2UoZSxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpK1wiIGxhbmd1YWdlLVwiK2kpO3ZhciBzPXQudGV4dENvbnRlbnQsdT17ZWxlbWVudDp0LGxhbmd1YWdlOmksZ3JhbW1hcjpsLGNvZGU6c307aWYobi5ob29rcy5ydW4oXCJiZWZvcmUtc2FuaXR5LWNoZWNrXCIsdSksIXUuY29kZXx8IXUuZ3JhbW1hcilyZXR1cm4gdS5jb2RlJiYobi5ob29rcy5ydW4oXCJiZWZvcmUtaGlnaGxpZ2h0XCIsdSksdS5lbGVtZW50LnRleHRDb250ZW50PXUuY29kZSxuLmhvb2tzLnJ1bihcImFmdGVyLWhpZ2hsaWdodFwiLHUpKSxuLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsdSksdm9pZCAwO2lmKG4uaG9va3MucnVuKFwiYmVmb3JlLWhpZ2hsaWdodFwiLHUpLGEmJl9zZWxmLldvcmtlcil7dmFyIGc9bmV3IFdvcmtlcihuLmZpbGVuYW1lKTtnLm9ubWVzc2FnZT1mdW5jdGlvbihlKXt1LmhpZ2hsaWdodGVkQ29kZT1lLmRhdGEsbi5ob29rcy5ydW4oXCJiZWZvcmUtaW5zZXJ0XCIsdSksdS5lbGVtZW50LmlubmVySFRNTD11LmhpZ2hsaWdodGVkQ29kZSxyJiZyLmNhbGwodS5lbGVtZW50KSxuLmhvb2tzLnJ1bihcImFmdGVyLWhpZ2hsaWdodFwiLHUpLG4uaG9va3MucnVuKFwiY29tcGxldGVcIix1KX0sZy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7bGFuZ3VhZ2U6dS5sYW5ndWFnZSxjb2RlOnUuY29kZSxpbW1lZGlhdGVDbG9zZTohMH0pKX1lbHNlIHUuaGlnaGxpZ2h0ZWRDb2RlPW4uaGlnaGxpZ2h0KHUuY29kZSx1LmdyYW1tYXIsdS5sYW5ndWFnZSksbi5ob29rcy5ydW4oXCJiZWZvcmUtaW5zZXJ0XCIsdSksdS5lbGVtZW50LmlubmVySFRNTD11LmhpZ2hsaWdodGVkQ29kZSxyJiZyLmNhbGwodCksbi5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIix1KSxuLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsdSl9LGhpZ2hsaWdodDpmdW5jdGlvbihlLHQscil7dmFyIGk9bi50b2tlbml6ZShlLHQpO3JldHVybiBhLnN0cmluZ2lmeShuLnV0aWwuZW5jb2RlKGkpLHIpfSxtYXRjaEdyYW1tYXI6ZnVuY3Rpb24oZSx0LGEscixpLGwsbyl7dmFyIHM9bi5Ub2tlbjtmb3IodmFyIHUgaW4gYSlpZihhLmhhc093blByb3BlcnR5KHUpJiZhW3VdKXtpZih1PT1vKXJldHVybjt2YXIgZz1hW3VdO2c9XCJBcnJheVwiPT09bi51dGlsLnR5cGUoZyk/ZzpbZ107Zm9yKHZhciBjPTA7YzxnLmxlbmd0aDsrK2Mpe3ZhciBoPWdbY10sZj1oLmluc2lkZSxkPSEhaC5sb29rYmVoaW5kLG09ISFoLmdyZWVkeSxwPTAseT1oLmFsaWFzO2lmKG0mJiFoLnBhdHRlcm4uZ2xvYmFsKXt2YXIgdj1oLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltdXldKiQvKVswXTtoLnBhdHRlcm49UmVnRXhwKGgucGF0dGVybi5zb3VyY2UsditcImdcIil9aD1oLnBhdHRlcm58fGg7Zm9yKHZhciBiPXIsaz1pO2I8dC5sZW5ndGg7ays9dFtiXS5sZW5ndGgsKytiKXt2YXIgdz10W2JdO2lmKHQubGVuZ3RoPmUubGVuZ3RoKXJldHVybjtpZighKHcgaW5zdGFuY2VvZiBzKSl7aC5sYXN0SW5kZXg9MDt2YXIgXz1oLmV4ZWModyksUD0xO2lmKCFfJiZtJiZiIT10Lmxlbmd0aC0xKXtpZihoLmxhc3RJbmRleD1rLF89aC5leGVjKGUpLCFfKWJyZWFrO2Zvcih2YXIgQT1fLmluZGV4KyhkP19bMV0ubGVuZ3RoOjApLGo9Xy5pbmRleCtfWzBdLmxlbmd0aCx4PWIsTz1rLFM9dC5sZW5ndGg7Uz54JiYoaj5PfHwhdFt4XS50eXBlJiYhdFt4LTFdLmdyZWVkeSk7Kyt4KU8rPXRbeF0ubGVuZ3RoLEE+PU8mJigrK2Isaz1PKTtpZih0W2JdaW5zdGFuY2VvZiBzfHx0W3gtMV0uZ3JlZWR5KWNvbnRpbnVlO1A9eC1iLHc9ZS5zbGljZShrLE8pLF8uaW5kZXgtPWt9aWYoXyl7ZCYmKHA9X1sxXS5sZW5ndGgpO3ZhciBBPV8uaW5kZXgrcCxfPV9bMF0uc2xpY2UocCksaj1BK18ubGVuZ3RoLE49dy5zbGljZSgwLEEpLEM9dy5zbGljZShqKSxFPVtiLFBdO04mJigrK2Isays9Ti5sZW5ndGgsRS5wdXNoKE4pKTt2YXIgST1uZXcgcyh1LGY/bi50b2tlbml6ZShfLGYpOl8seSxfLG0pO2lmKEUucHVzaChJKSxDJiZFLnB1c2goQyksQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseSh0LEUpLDEhPVAmJm4ubWF0Y2hHcmFtbWFyKGUsdCxhLGIsaywhMCx1KSxsKWJyZWFrfWVsc2UgaWYobClicmVha319fX19LHRva2VuaXplOmZ1bmN0aW9uKGUsdCl7dmFyIGE9W2VdLHI9dC5yZXN0O2lmKHIpe2Zvcih2YXIgaSBpbiByKXRbaV09cltpXTtkZWxldGUgdC5yZXN0fXJldHVybiBuLm1hdGNoR3JhbW1hcihlLGEsdCwwLDAsITEpLGF9LGhvb2tzOnthbGw6e30sYWRkOmZ1bmN0aW9uKGUsdCl7dmFyIGE9bi5ob29rcy5hbGw7YVtlXT1hW2VdfHxbXSxhW2VdLnB1c2godCl9LHJ1bjpmdW5jdGlvbihlLHQpe3ZhciBhPW4uaG9va3MuYWxsW2VdO2lmKGEmJmEubGVuZ3RoKWZvcih2YXIgcixpPTA7cj1hW2krK107KXIodCl9fX0sYT1uLlRva2VuPWZ1bmN0aW9uKGUsdCxuLGEscil7dGhpcy50eXBlPWUsdGhpcy5jb250ZW50PXQsdGhpcy5hbGlhcz1uLHRoaXMubGVuZ3RoPTB8KGF8fFwiXCIpLmxlbmd0aCx0aGlzLmdyZWVkeT0hIXJ9O2lmKGEuc3RyaW5naWZ5PWZ1bmN0aW9uKGUsdCxyKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihcIkFycmF5XCI9PT1uLnV0aWwudHlwZShlKSlyZXR1cm4gZS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGEuc3RyaW5naWZ5KG4sdCxlKX0pLmpvaW4oXCJcIik7dmFyIGk9e3R5cGU6ZS50eXBlLGNvbnRlbnQ6YS5zdHJpbmdpZnkoZS5jb250ZW50LHQsciksdGFnOlwic3BhblwiLGNsYXNzZXM6W1widG9rZW5cIixlLnR5cGVdLGF0dHJpYnV0ZXM6e30sbGFuZ3VhZ2U6dCxwYXJlbnQ6cn07aWYoXCJjb21tZW50XCI9PWkudHlwZSYmKGkuYXR0cmlidXRlcy5zcGVsbGNoZWNrPVwidHJ1ZVwiKSxlLmFsaWFzKXt2YXIgbD1cIkFycmF5XCI9PT1uLnV0aWwudHlwZShlLmFsaWFzKT9lLmFsaWFzOltlLmFsaWFzXTtBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShpLmNsYXNzZXMsbCl9bi5ob29rcy5ydW4oXCJ3cmFwXCIsaSk7dmFyIG89T2JqZWN0LmtleXMoaS5hdHRyaWJ1dGVzKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUrJz1cIicrKGkuYXR0cmlidXRlc1tlXXx8XCJcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKSsnXCInfSkuam9pbihcIiBcIik7cmV0dXJuXCI8XCIraS50YWcrJyBjbGFzcz1cIicraS5jbGFzc2VzLmpvaW4oXCIgXCIpKydcIicrKG8/XCIgXCIrbzpcIlwiKStcIj5cIitpLmNvbnRlbnQrXCI8L1wiK2kudGFnK1wiPlwifSwhX3NlbGYuZG9jdW1lbnQpcmV0dXJuIF9zZWxmLmFkZEV2ZW50TGlzdGVuZXI/KF9zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9SlNPTi5wYXJzZShlLmRhdGEpLGE9dC5sYW5ndWFnZSxyPXQuY29kZSxpPXQuaW1tZWRpYXRlQ2xvc2U7X3NlbGYucG9zdE1lc3NhZ2Uobi5oaWdobGlnaHQocixuLmxhbmd1YWdlc1thXSxhKSksaSYmX3NlbGYuY2xvc2UoKX0sITEpLF9zZWxmLlByaXNtKTpfc2VsZi5QcmlzbTt2YXIgcj1kb2N1bWVudC5jdXJyZW50U2NyaXB0fHxbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpKS5wb3AoKTtyZXR1cm4gciYmKG4uZmlsZW5hbWU9ci5zcmMsbi5tYW51YWx8fHIuaGFzQXR0cmlidXRlKFwiZGF0YS1tYW51YWxcIil8fChcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG4uaGlnaGxpZ2h0QWxsKTp3aW5kb3cuc2V0VGltZW91dChuLmhpZ2hsaWdodEFsbCwxNik6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixuLmhpZ2hsaWdodEFsbCkpKSxfc2VsZi5QcmlzbX0oKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPVByaXNtKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiYoZ2xvYmFsLlByaXNtPVByaXNtKTtcblByaXNtLmxhbmd1YWdlcy5tYXJrdXA9e2NvbW1lbnQ6LzwhLS1bXFxzXFxTXSo/LS0+Lyxwcm9sb2c6LzxcXD9bXFxzXFxTXSs/XFw/Pi8sZG9jdHlwZTovPCFET0NUWVBFW1xcc1xcU10rPz4vaSxjZGF0YTovPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSx0YWc6e3BhdHRlcm46LzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPF0rKD86XFxzK1teXFxzPlxcLz1dKyg/Oj0oPzooXCJ8JykoPzpcXFxcXFwxfFxcXFw/KD8hXFwxKVtcXHNcXFNdKSpcXDF8W15cXHMnXCI+PV0rKSk/KSpcXHMqXFwvPz4vaSxpbnNpZGU6e3RhZzp7cGF0dGVybjovXjxcXC8/W15cXHM+XFwvXSsvaSxpbnNpZGU6e3B1bmN0dWF0aW9uOi9ePFxcLz8vLG5hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX0sXCJhdHRyLXZhbHVlXCI6e3BhdHRlcm46Lz0oPzooJ3xcIilbXFxzXFxTXSo/KFxcMSl8W15cXHM+XSspL2ksaW5zaWRlOntwdW5jdHVhdGlvbjovWz0+XCInXS99fSxwdW5jdHVhdGlvbjovXFwvPz4vLFwiYXR0ci1uYW1lXCI6e3BhdHRlcm46L1teXFxzPlxcL10rLyxpbnNpZGU6e25hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX19fSxlbnRpdHk6LyYjP1tcXGRhLXpdezEsOH07L2l9LFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZVtcImF0dHItdmFsdWVcIl0uaW5zaWRlLmVudGl0eT1QcmlzbS5sYW5ndWFnZXMubWFya3VwLmVudGl0eSxQcmlzbS5ob29rcy5hZGQoXCJ3cmFwXCIsZnVuY3Rpb24oYSl7XCJlbnRpdHlcIj09PWEudHlwZSYmKGEuYXR0cmlidXRlcy50aXRsZT1hLmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLFwiJlwiKSl9KSxQcmlzbS5sYW5ndWFnZXMueG1sPVByaXNtLmxhbmd1YWdlcy5tYXJrdXAsUHJpc20ubGFuZ3VhZ2VzLmh0bWw9UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCxQcmlzbS5sYW5ndWFnZXMubWF0aG1sPVByaXNtLmxhbmd1YWdlcy5tYXJrdXAsUHJpc20ubGFuZ3VhZ2VzLnN2Zz1QcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLmNzcz17Y29tbWVudDovXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sYXRydWxlOntwYXR0ZXJuOi9AW1xcdy1dKz8uKj8oO3woPz1cXHMqXFx7KSkvaSxpbnNpZGU6e3J1bGU6L0BbXFx3LV0rL319LHVybDovdXJsXFwoKD86KFtcIiddKShcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxfC4qPylcXCkvaSxzZWxlY3RvcjovW15cXHtcXH1cXHNdW15cXHtcXH07XSo/KD89XFxzKlxceykvLHN0cmluZzp7cGF0dGVybjovKFwifCcpKFxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLGdyZWVkeTohMH0scHJvcGVydHk6LyhcXGJ8XFxCKVtcXHctXSsoPz1cXHMqOikvaSxpbXBvcnRhbnQ6L1xcQiFpbXBvcnRhbnRcXGIvaSxcImZ1bmN0aW9uXCI6L1stYS16MC05XSsoPz1cXCgpL2kscHVuY3R1YXRpb246L1soKXt9OzpdL30sUHJpc20ubGFuZ3VhZ2VzLmNzcy5hdHJ1bGUuaW5zaWRlLnJlc3Q9UHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMuY3NzKSxQcmlzbS5sYW5ndWFnZXMubWFya3VwJiYoUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcIm1hcmt1cFwiLFwidGFnXCIse3N0eWxlOntwYXR0ZXJuOi8oPHN0eWxlW1xcc1xcU10qPz4pW1xcc1xcU10qPyg/PTxcXC9zdHlsZT4pL2ksbG9va2JlaGluZDohMCxpbnNpZGU6UHJpc20ubGFuZ3VhZ2VzLmNzcyxhbGlhczpcImxhbmd1YWdlLWNzc1wifX0pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJpbnNpZGVcIixcImF0dHItdmFsdWVcIix7XCJzdHlsZS1hdHRyXCI6e3BhdHRlcm46L1xccypzdHlsZT0oXCJ8JykuKj9cXDEvaSxpbnNpZGU6e1wiYXR0ci1uYW1lXCI6e3BhdHRlcm46L15cXHMqc3R5bGUvaSxpbnNpZGU6UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlfSxwdW5jdHVhdGlvbjovXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFwiYXR0ci12YWx1ZVwiOntwYXR0ZXJuOi8uKy9pLGluc2lkZTpQcmlzbS5sYW5ndWFnZXMuY3NzfX0sYWxpYXM6XCJsYW5ndWFnZS1jc3NcIn19LFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnKSk7XG5QcmlzbS5sYW5ndWFnZXMuY2xpa2U9e2NvbW1lbnQ6W3twYXR0ZXJuOi8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLGxvb2tiZWhpbmQ6ITB9LHtwYXR0ZXJuOi8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sbG9va2JlaGluZDohMH1dLHN0cmluZzp7cGF0dGVybjovKFtcIiddKShcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxncmVlZHk6ITB9LFwiY2xhc3MtbmFtZVwiOntwYXR0ZXJuOi8oKD86XFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrKXwoPzpjYXRjaFxccytcXCgpKVthLXowLTlfXFwuXFxcXF0rL2ksbG9va2JlaGluZDohMCxpbnNpZGU6e3B1bmN0dWF0aW9uOi8oXFwufFxcXFwpL319LGtleXdvcmQ6L1xcYihpZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLFwiYm9vbGVhblwiOi9cXGIodHJ1ZXxmYWxzZSlcXGIvLFwiZnVuY3Rpb25cIjovW2EtejAtOV9dKyg/PVxcKCkvaSxudW1iZXI6L1xcYi0/KD86MHhbXFxkYS1mXSt8XFxkKlxcLj9cXGQrKD86ZVsrLV0/XFxkKyk/KVxcYi9pLG9wZXJhdG9yOi8tLT98XFwrXFwrP3whPT89P3w8PT98Pj0/fD09Pz0/fCYmP3xcXHxcXHw/fFxcP3xcXCp8XFwvfH58XFxefCUvLHB1bmN0dWF0aW9uOi9be31bXFxdOygpLC46XS99O1xuUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ9UHJpc20ubGFuZ3VhZ2VzLmV4dGVuZChcImNsaWtlXCIse2tleXdvcmQ6L1xcYihhc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sbnVtYmVyOi9cXGItPygwW3hYXVtcXGRBLUZhLWZdK3wwW2JCXVswMV0rfDBbb09dWzAtN10rfFxcZCpcXC4/XFxkKyhbRWVdWystXT9cXGQrKT98TmFOfEluZmluaXR5KVxcYi8sXCJmdW5jdGlvblwiOi9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKig/PVxcKCkvaSxvcGVyYXRvcjovLVstPV0/fFxcK1srPV0/fCE9Pz0/fDw8Pz0/fD4+Pz4/PT98PSg/Oj09P3w+KT98JlsmPV0/fFxcfFt8PV0/fFxcKlxcKj89P3xcXC89P3x+fFxcXj0/fCU9P3xcXD98XFwuezN9L30pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJqYXZhc2NyaXB0XCIsXCJrZXl3b3JkXCIse3JlZ2V4OntwYXR0ZXJuOi8oXnxbXlxcL10pXFwvKD8hXFwvKShcXFtbXlxcXVxcclxcbl0rXXxcXFxcLnxbXlxcL1xcXFxcXFtcXHJcXG5dKStcXC9bZ2lteXVdezAsNX0oPz1cXHMqKCR8W1xcclxcbiwuO30pXSkpLyxsb29rYmVoaW5kOiEwLGdyZWVkeTohMH19KSxQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiamF2YXNjcmlwdFwiLFwic3RyaW5nXCIse1widGVtcGxhdGUtc3RyaW5nXCI6e3BhdHRlcm46L2AoPzpcXFxcXFxcXHxcXFxcP1teXFxcXF0pKj9gLyxncmVlZHk6ITAsaW5zaWRlOntpbnRlcnBvbGF0aW9uOntwYXR0ZXJuOi9cXCRcXHtbXn1dK1xcfS8saW5zaWRlOntcImludGVycG9sYXRpb24tcHVuY3R1YXRpb25cIjp7cGF0dGVybjovXlxcJFxce3xcXH0kLyxhbGlhczpcInB1bmN0dWF0aW9uXCJ9LHJlc3Q6UHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHR9fSxzdHJpbmc6L1tcXHNcXFNdKy99fX0pLFByaXNtLmxhbmd1YWdlcy5tYXJrdXAmJlByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJtYXJrdXBcIixcInRhZ1wiLHtzY3JpcHQ6e3BhdHRlcm46Lyg8c2NyaXB0W1xcc1xcU10qPz4pW1xcc1xcU10qPyg/PTxcXC9zY3JpcHQ+KS9pLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOlByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0LGFsaWFzOlwibGFuZ3VhZ2UtamF2YXNjcmlwdFwifX0pLFByaXNtLmxhbmd1YWdlcy5qcz1QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdDtcblByaXNtLmxhbmd1YWdlcy5odHRwPXtcInJlcXVlc3QtbGluZVwiOntwYXR0ZXJuOi9eKFBPU1R8R0VUfFBVVHxERUxFVEV8T1BUSU9OU3xQQVRDSHxUUkFDRXxDT05ORUNUKVxcYlxcc2h0dHBzPzpcXC9cXC9cXFMrXFxzSFRUUFxcL1swLTkuXSsvbSxpbnNpZGU6e3Byb3BlcnR5Oi9eKFBPU1R8R0VUfFBVVHxERUxFVEV8T1BUSU9OU3xQQVRDSHxUUkFDRXxDT05ORUNUKVxcYi8sXCJhdHRyLW5hbWVcIjovOlxcdysvfX0sXCJyZXNwb25zZS1zdGF0dXNcIjp7cGF0dGVybjovXkhUVFBcXC8xLlswMV0gXFxkKy4qL20saW5zaWRlOntwcm9wZXJ0eTp7cGF0dGVybjovKF5IVFRQXFwvMS5bMDFdIClcXGQrLiovaSxsb29rYmVoaW5kOiEwfX19LFwiaGVhZGVyLW5hbWVcIjp7cGF0dGVybjovXltcXHctXSs6KD89LikvbSxhbGlhczpcImtleXdvcmRcIn19O3ZhciBodHRwTGFuZ3VhZ2VzPXtcImFwcGxpY2F0aW9uL2pzb25cIjpQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCxcImFwcGxpY2F0aW9uL3htbFwiOlByaXNtLmxhbmd1YWdlcy5tYXJrdXAsXCJ0ZXh0L3htbFwiOlByaXNtLmxhbmd1YWdlcy5tYXJrdXAsXCJ0ZXh0L2h0bWxcIjpQcmlzbS5sYW5ndWFnZXMubWFya3VwfTtmb3IodmFyIGNvbnRlbnRUeXBlIGluIGh0dHBMYW5ndWFnZXMpaWYoaHR0cExhbmd1YWdlc1tjb250ZW50VHlwZV0pe3ZhciBvcHRpb25zPXt9O29wdGlvbnNbY29udGVudFR5cGVdPXtwYXR0ZXJuOm5ldyBSZWdFeHAoXCIoY29udGVudC10eXBlOlxcXFxzKlwiK2NvbnRlbnRUeXBlK1wiW1xcXFx3XFxcXFddKj8pKD86XFxcXHI/XFxcXG58XFxcXHIpezJ9W1xcXFx3XFxcXFddKlwiLFwiaVwiKSxsb29rYmVoaW5kOiEwLGluc2lkZTp7cmVzdDpodHRwTGFuZ3VhZ2VzW2NvbnRlbnRUeXBlXX19LFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJodHRwXCIsXCJoZWFkZXItbmFtZVwiLG9wdGlvbnMpfTtcblByaXNtLmxhbmd1YWdlcy5qc29uPXtwcm9wZXJ0eTovXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiKD89XFxzKjopL2dpLHN0cmluZzovXCIoPyE6KSg/OlxcXFwufFteXFxcXFwiXSkqXCIoPyE6KS9nLG51bWJlcjovXFxiLT8oMHhbXFxkQS1GYS1mXSt8XFxkKlxcLj9cXGQrKFtFZV1bKy1dP1xcZCspPylcXGIvZyxwdW5jdHVhdGlvbjovW3t9W1xcXSk7LF0vZyxvcGVyYXRvcjovOi9nLFwiYm9vbGVhblwiOi9cXGIodHJ1ZXxmYWxzZSlcXGIvZ2ksXCJudWxsXCI6L1xcYm51bGxcXGIvZ2l9LFByaXNtLmxhbmd1YWdlcy5qc29ucD1QcmlzbS5sYW5ndWFnZXMuanNvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ByaXNtL3ByaXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFsnUGxlYXNlIHNlbGVjdCBhIGZvcm1hdCBmcm9tIHRoZSBkcm9wZG93biBtZW51JywgXCJcIiwgXCJcIl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbml0aWFsU3RyaW5ncy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==