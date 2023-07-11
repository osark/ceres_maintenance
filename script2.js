/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/**
 * For jQuery versions less than 3.5.0, this replaces the jQuery.htmlPrefilter()
 * function with one that fixes these security vulnerabilities while also
 * retaining the pre-3.5.0 behavior where it's safe to do so.
 * - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11022
 * - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11023
 */

(function (jQuery) {

  // No backport is needed if we're already on jQuery 3.5 or higher.
  var versionParts = jQuery.fn.jquery.split('.');
  var majorVersion = parseInt(versionParts[0]);
  var minorVersion = parseInt(versionParts[1]);
  if ( (majorVersion > 3) || (majorVersion === 3 && minorVersion >= 5) ) {
    return;
  }

  // Prior to jQuery 3.5, jQuery converted XHTML-style self-closing tags to
  // their XML equivalent: e.g., "<div />" to "<div></div>". This is
  // problematic for several reasons, including that it's vulnerable to XSS
  // attacks. However, since this was jQuery's behavior for many years, many
  // Drupal modules and jQuery plugins may be relying on it. Therefore, we
  // preserve that behavior, but for a limited set of tags only, that we believe
  // to not be vulnerable. This is the set of HTML tags that satisfy all of the
  // following conditions:
  // - In DOMPurify's list of HTML tags. If an HTML tag isn't safe enough to
  //   appear in that list, then we don't want to mess with it here either.
  //   @see https://github.com/cure53/DOMPurify/blob/2.0.11/dist/purify.js#L128
  // - A normal element (not a void, template, text, or foreign element).
  //   @see https://html.spec.whatwg.org/multipage/syntax.html#elements-2
  // - An element that is still defined by the current HTML specification
  //   (not a deprecated element), because we do not want to rely on how
  //   browsers parse deprecated elements.
  //   @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  // - Not 'html', 'head', or 'body', because this pseudo-XHTML expansion is
  //   designed for fragments, not entire documents.
  // - Not 'colgroup', because due to an idiosyncrasy of jQuery's original
  //   regular expression, it didn't match on colgroup, and we don't want to
  //   introduce a behavior change for that.
  var selfClosingTagsToReplace = [
    'a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo',
    'blockquote', 'button', 'canvas', 'caption', 'cite', 'code', 'data',
    'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em',
    'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3',
    'h4', 'h5', 'h6', 'header', 'hgroup', 'i', 'ins', 'kbd', 'label', 'legend',
    'li', 'main', 'map', 'mark', 'menu', 'meter', 'nav', 'ol', 'optgroup',
    'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt',
    'ruby', 's', 'samp', 'section', 'select', 'small', 'source', 'span',
    'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th',
    'thead', 'time', 'tr', 'u', 'ul', 'var', 'video'
  ];

  // Define regular expressions for <TAG/> and <TAG ATTRIBUTES/>. Doing this as
  // two expressions makes it easier to target <a/> without also targeting
  // every tag that starts with "a".
  var xhtmlRegExpGroup = '(' + selfClosingTagsToReplace.join('|') + ')';
  var whitespace = '[\\x20\\t\\r\\n\\f]';
  var rxhtmlTagWithoutSpaceOrAttributes = new RegExp('<' + xhtmlRegExpGroup + '\\/>', 'gi');
  var rxhtmlTagWithSpaceAndMaybeAttributes = new RegExp('<' + xhtmlRegExpGroup + '(' + whitespace + '[^>]*)\\/>', 'gi');

  // jQuery 3.5 also fixed a vulnerability for when </select> appears within
  // an <option> or <optgroup>, but it did that in local code that we can't
  // backport directly. Instead, we filter such cases out. To do so, we need to
  // determine when jQuery would otherwise invoke the vulnerable code, which it
  // uses this regular expression to determine.
  // @see https://github.com/jquery/jquery/blob/3.4.1/dist/jquery.js#L4716
  var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

  jQuery.extend({
    htmlPrefilter: function (html) {
      // This is how jQuery determines the first tag in the HTML.
      // @see https://github.com/jquery/jquery/blob/3.4.1/dist/jquery.js#L4815
      var tag = ( rtagName.exec( html ) || [ "", "" ] )[ 1 ].toLowerCase();

      // It is not valid HTML for <option> or <optgroup> to have <select> as
      // either a descendant or sibling, and attempts to inject one can cause
      // XSS on jQuery versions before 3.5. Since this is invalid HTML and a
      // possible XSS attack, reject the entire string.
      // @see https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11023
      if ((tag === 'option' || tag === 'optgroup') && html.match(/<\/?select/i)) {
        html = '';
      }

      // Retain jQuery 3.4's conversion of pseudo-XHTML, but for only the
      // tags in the `selfClosingTagsToReplace` list defined above.
      // @see https://github.com/jquery/jquery/blob/3.4.1/dist/jquery.js#L5979
      // @see https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11022
      html = html.replace(rxhtmlTagWithoutSpaceOrAttributes, "<$1></$1>");
      html = html.replace(rxhtmlTagWithSpaceAndMaybeAttributes, "<$1$2></$1>");

      return html;
    }
  });

})(jQuery);
;
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
 * @file
 * eu_cookie_compliance.js
 *
 * Defines the behavior of the eu cookie compliance banner.
 *
 * Statuses:
 *  null: not yet agreed (or withdrawn), show popup
 *  0: Disagreed
 *  1: Agreed, show thank you banner
 *  2: Agreed
 */

(function ($, Drupal, drupalSettings) {

  'use strict';
  var euCookieComplianceBlockCookies;

  Drupal.behaviors.euCookieCompliancePopup = {
    attach: function (context) {
      $('body').once('eu-cookie-compliance').each(function () {
        // If configured, check JSON callback to determine if in EU.
        if (drupalSettings.eu_cookie_compliance.popup_eu_only_js) {
          if (Drupal.eu_cookie_compliance.showBanner()) {
            var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'eu-cookie-compliance-check';
            var data = {};
            $.getJSON(url, data, function (data) {
              // If in the EU, show the compliance banner.
              if (data.in_eu) {
                Drupal.eu_cookie_compliance.execute();
              }

              // If not in EU, set an agreed cookie automatically.
              else {
                Drupal.eu_cookie_compliance.setStatus(2);
              }
            });
          }
        }

        // Otherwise, fallback to standard behavior which is to render the banner.
        else {
          Drupal.eu_cookie_compliance.execute();
        }
      });
    },
  };

  Drupal.eu_cookie_compliance = {};

  Drupal.eu_cookie_compliance.execute = function () {
    try {
      if (!drupalSettings.eu_cookie_compliance.popup_enabled) {
        return;
      }

      if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
        return;
      }

      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
      if ((status === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || status === null || (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup)) {
        if (!drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
          // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
          if (window.matchMedia('(max-width: ' + drupalSettings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && drupalSettings.eu_cookie_compliance.use_mobile_message) {
            Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.mobile_popup_html_info, (status !== null));
          } else {
            Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_info, (status !== null));
          }
          Drupal.eu_cookie_compliance.initPopup();
        }
      }
      if (status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
        // Thank you banner.
        Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_agreed);
        Drupal.eu_cookie_compliance.attachHideEvents();
      } else if (status === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
        if (!drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
          Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
        }
        Drupal.eu_cookie_compliance.attachWithdrawEvents();
      }
    }
    catch (e) {
    }
  };

  Drupal.eu_cookie_compliance.initPopup = function() {
    Drupal.eu_cookie_compliance.attachAgreeEvents();

    if (drupalSettings.eu_cookie_compliance.method === 'categories') {
      var categories_checked = [];

      if (Drupal.eu_cookie_compliance.getCurrentStatus() === null) {
        if (drupalSettings.eu_cookie_compliance.select_all_categories_by_default) {
          categories_checked = drupalSettings.eu_cookie_compliance.cookie_categories;
        }
      }
      else {
        categories_checked = Drupal.eu_cookie_compliance.getAcceptedCategories();
      }
      Drupal.eu_cookie_compliance.setPreferenceCheckboxes(categories_checked);
      Drupal.eu_cookie_compliance.attachSavePreferencesEvents();
    }

    if (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
      Drupal.eu_cookie_compliance.attachWithdrawEvents();
      var currentStatus = Drupal.eu_cookie_compliance.getCurrentStatus();
      if (currentStatus === 1 || currentStatus === 2) {
        $('.eu-cookie-withdraw-button').show();
      }
    }
  }

  Drupal.eu_cookie_compliance.createWithdrawBanner = function (html) {
    var $html = $('<div></div>').html(html);
    var $banner = $('.eu-cookie-withdraw-banner', $html);
    $html.attr('id', 'sliding-popup');
    $html.addClass('eu-cookie-withdraw-wrapper');

    if (!drupalSettings.eu_cookie_compliance.popup_use_bare_css) {
      $banner.height(drupalSettings.eu_cookie_compliance.popup_height)
          .width(drupalSettings.eu_cookie_compliance.popup_width);
    }
    $html.hide();
    var height = 0;
    if (drupalSettings.eu_cookie_compliance.popup_position) {
      $html.prependTo('body');
      height = $html.outerHeight();

      $html.show()
          .addClass('sliding-popup-top')
          .addClass('clearfix')
        .css({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + height) : -1 * height });
      // For some reason, the tab outerHeight is -10 if we don't use a timeout
      // function to reveal the tab.
      setTimeout(function () {
        var height = $html.outerHeight();

        $html.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + height) : -1 * height }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
          $html.trigger('eu_cookie_compliance_popup_open');
        });
      }.bind($html), 0);
    } else {
      if (drupalSettings.eu_cookie_compliance.better_support_for_screen_readers) {
        $html.prependTo('body');
      } else {
        $html.appendTo('body');
      }
      height = $html.outerHeight();
      $html.show()
          .addClass('sliding-popup-bottom')
          .css({ bottom: -1 * height });
      // For some reason, the tab outerHeight is -10 if we don't use a timeout
      // function to reveal the tab.
      setTimeout(function () {
        var height = $html.outerHeight();

        $html.animate({ bottom: -1 * (height) }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
          $html.trigger('eu_cookie_compliance_popup_open');
        });
      }.bind($html), 0);
    }
  };

  Drupal.eu_cookie_compliance.toggleWithdrawBanner = function () {
    var $wrapper = $('#sliding-popup');
    var $tab = $('.eu-cookie-withdraw-tab');
    var topBottom = (drupalSettings.eu_cookie_compliance.popup_position ? 'top' : 'bottom');
    var height = $wrapper.outerHeight();
    var $bannerIsShowing = drupalSettings.eu_cookie_compliance.popup_position ? parseInt($wrapper.css('top')) === (!drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top'))) : 0) : parseInt($wrapper.css('bottom')) === 0;
    if (drupalSettings.eu_cookie_compliance.popup_position) {
      if ($bannerIsShowing) {
        $wrapper.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + height) : -1 * height}, drupalSettings.eu_cookie_compliance.popup_delay);
      }
      else {
        $wrapper.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top'))) : 0}, drupalSettings.eu_cookie_compliance.popup_delay);
      }
    }
    else {
      if ($bannerIsShowing) {
        $wrapper.animate({'bottom' : -1 * (height)}, drupalSettings.eu_cookie_compliance.popup_delay);
      }
      else {
        $wrapper.animate({'bottom' : 0}, drupalSettings.eu_cookie_compliance.popup_delay);
      }
    }
  };

  Drupal.eu_cookie_compliance.createPopup = function (html, closed) {
    // This fixes a problem with jQuery 1.9.
    var popup = $('<div></div>').html(html);
    popup.attr('id', 'sliding-popup');
    if (!drupalSettings.eu_cookie_compliance.popup_use_bare_css) {
      popup.height(drupalSettings.eu_cookie_compliance.popup_height)
          .width(drupalSettings.eu_cookie_compliance.popup_width);
    }

    popup.hide();
    var height = 0;
    if (drupalSettings.eu_cookie_compliance.popup_position) {
      popup.prependTo('body');
      height = popup.outerHeight();
      popup.show()
        .addClass('sliding-popup-top clearfix')
        .css({ top: -1 * height });
      if (closed !== true) {
        popup.animate({top: 0}, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
          popup.trigger('eu_cookie_compliance_popup_open');
        });
      }
    } else {
      if (drupalSettings.eu_cookie_compliance.better_support_for_screen_readers) {
        popup.prependTo('body');
      } else {
        popup.appendTo('body');
      }

      height = popup.outerHeight();
      popup.show()
        .addClass('sliding-popup-bottom')
        .css({bottom: -1 * height});
      if (closed !== true) {
        popup.animate({bottom: 0}, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
          popup.trigger('eu_cookie_compliance_popup_open');
        });
      }
    }
  };

  Drupal.eu_cookie_compliance.attachAgreeEvents = function () {
    var clickingConfirms = drupalSettings.eu_cookie_compliance.popup_clicking_confirmation;
    var scrollConfirms = drupalSettings.eu_cookie_compliance.popup_scrolling_confirmation;

    if (drupalSettings.eu_cookie_compliance.method === 'categories' && drupalSettings.eu_cookie_compliance.enable_save_preferences_button) {
        // The agree button becomes an agree to all categories button when the 'save preferences' button is present.
        $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAllAction);
    }
    else {
        $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);
    }
    $('.decline-button').click(Drupal.eu_cookie_compliance.declineAction);

    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').not('.popup-content *').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
    }

    if (scrollConfirms) {
      var alreadyScrolled = false;
      var scrollHandler = function () {
        if (alreadyScrolled) {
          Drupal.eu_cookie_compliance.acceptAction();
          $(window).off('scroll', scrollHandler);
        } else {
          alreadyScrolled = true;
        }
      };

      $(window).bind('scroll', scrollHandler);
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.attachSavePreferencesEvents = function () {
    $('.eu-cookie-compliance-save-preferences-button').click(Drupal.eu_cookie_compliance.savePreferencesAction);
  };

  Drupal.eu_cookie_compliance.attachHideEvents = function () {
    var popupHideAgreed = drupalSettings.eu_cookie_compliance.popup_hide_agreed;
    var clickingConfirms = drupalSettings.eu_cookie_compliance.popup_clicking_confirmation;
    $('.hide-popup-button').click(function () {
          Drupal.eu_cookie_compliance.changeStatus(2);
        }
    );
    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
    }

    if (popupHideAgreed) {
      $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function () {
        Drupal.eu_cookie_compliance.changeStatus(2);
      });
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.attachWithdrawEvents = function () {
    $('.eu-cookie-withdraw-button').click(Drupal.eu_cookie_compliance.withdrawAction);
    $('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner);
  };

  Drupal.eu_cookie_compliance.acceptAction = function () {
    var agreedEnabled = drupalSettings.eu_cookie_compliance.popup_agreed_enabled;
    var nextStatus = 1;
    if (!agreedEnabled) {
      Drupal.eu_cookie_compliance.setStatus(1);
      nextStatus = 2;
    }

    if (!euCookieComplianceHasLoadedScripts && typeof euCookieComplianceLoadScripts === "function") {
      euCookieComplianceLoadScripts();
    }

    if (typeof euCookieComplianceBlockCookies !== 'undefined') {
      clearInterval(euCookieComplianceBlockCookies);
    }

    if (drupalSettings.eu_cookie_compliance.method === 'categories') {
      // Select Checked categories.
      var categories = $("#eu-cookie-compliance-categories input:checkbox:checked").map(function(){
        return $(this).val();
      }).get();
      Drupal.eu_cookie_compliance.setAcceptedCategories(categories);
      // Load scripts for all categories.
      Drupal.eu_cookie_compliance.loadCategoryScripts(categories);
    }

    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
  };

  Drupal.eu_cookie_compliance.acceptAllAction = function () {
    var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories;
    Drupal.eu_cookie_compliance.setPreferenceCheckboxes(allCategories);
    Drupal.eu_cookie_compliance.acceptAction();
  }

  Drupal.eu_cookie_compliance.savePreferencesAction = function () {
    var categories = $("#eu-cookie-compliance-categories input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    var agreedEnabled = drupalSettings.eu_cookie_compliance.popup_agreed_enabled;
    var nextStatus = 1;
    if (!agreedEnabled) {
      Drupal.eu_cookie_compliance.setStatus(1);
      nextStatus = 2;
    }

    Drupal.eu_cookie_compliance.setAcceptedCategories(categories);
    if (!euCookieComplianceHasLoadedScripts && typeof euCookieComplianceLoadScripts === "function") {
      euCookieComplianceLoadScripts();
    }
    Drupal.eu_cookie_compliance.loadCategoryScripts(categories);
    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
  };

  Drupal.eu_cookie_compliance.loadCategoryScripts = function(categories) {
    for (var cat in categories) {
      if (euCookieComplianceHasLoadedScriptsForCategory[cat] !== true && typeof euCookieComplianceLoadScripts === "function") {
        euCookieComplianceLoadScripts(categories[cat]);
        euCookieComplianceHasLoadedScriptsForCategory[cat] = true;
      }
    }
  }

  Drupal.eu_cookie_compliance.declineAction = function () {
    Drupal.eu_cookie_compliance.setStatus(0);
    var popup = $('#sliding-popup');
    if (popup.hasClass('sliding-popup-top')) {
      popup.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + popup.outerHeight()) : popup.outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
        popup.hide();
      }).trigger('eu_cookie_compliance_popup_close');
    }
    else {
      popup.animate({ bottom: popup.outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
        popup.hide();
      }).trigger('eu_cookie_compliance_popup_close');
    }
  };

  Drupal.eu_cookie_compliance.withdrawAction = function () {
    Drupal.eu_cookie_compliance.setStatus(0);
    Drupal.eu_cookie_compliance.setAcceptedCategories([]);
    location.reload();
  };

  Drupal.eu_cookie_compliance.moreInfoAction = function () {
    if (drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup) {
      Drupal.eu_cookie_compliance.setStatus(0);
      if (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
        $('#sliding-popup .eu-cookie-compliance-banner').trigger('eu_cookie_compliance_popup_close').hide();
      }
      else {
        $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
      }
    } else {
      if (drupalSettings.eu_cookie_compliance.popup_link_new_window) {
        window.open(drupalSettings.eu_cookie_compliance.popup_link);
      } else {
        window.location.href = drupalSettings.eu_cookie_compliance.popup_link;
      }
    }
  };

  Drupal.eu_cookie_compliance.getCurrentStatus = function () {
    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name;
    var value = $.cookie(cookieName);
    value = parseInt(value);
    if (isNaN(value)) {
      value = null;
    }

    return value;
  };

  Drupal.eu_cookie_compliance.setPreferenceCheckboxes = function (categories) {
    for (var i in categories) {
      $("#eu-cookie-compliance-categories input:checkbox[value='" + categories[i] + "']").prop("checked", true);
    }
  }

  Drupal.eu_cookie_compliance.getAcceptedCategories = function () {
    var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories;
    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories';
    var value = $.cookie(cookieName);
    var selectedCategories = [];

    if (value !== null && typeof value !== 'undefined') {
      value = JSON.parse(value);
      selectedCategories = value;
    }

    if (Drupal.eu_cookie_compliance.fix_first_cookie_category && !$.inArray(allCategories[0], selectedCategories)) {
      selectedCategories.push(allCategories[0]);
    }

    return selectedCategories;
  };

  Drupal.eu_cookie_compliance.changeStatus = function (value) {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    var reloadPage = drupalSettings.eu_cookie_compliance.reload_page;
    if (status === value) {
      return;
    }

    if (drupalSettings.eu_cookie_compliance.popup_position) {
      $('.sliding-popup-top').animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + $('#sliding-popup').outerHeight()) : $('#sliding-popup').outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, function () {
        if (value === 1 && status === null && !reloadPage) {
          $('.sliding-popup-top').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.popup_html_agreed).animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top'))) : 0 }, drupalSettings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        } else if (status === 1 && !(drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup)) {
          $('.sliding-popup-top').not('.eu-cookie-withdraw-wrapper').trigger('eu_cookie_compliance_popup_close').remove();
        }
        Drupal.eu_cookie_compliance.showWithdrawBanner(value);
      });
    } else {
      $('.sliding-popup-bottom').animate({ bottom: $('#sliding-popup').outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, function () {
        if (value === 1 && status === null && !reloadPage) {
          $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.popup_html_agreed).animate({ bottom: 0 }, drupalSettings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        } else if (status === 1) {
          if (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
            // Restore popup content.
            if (window.matchMedia('(max-width: ' + drupalSettings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && drupalSettings.eu_cookie_compliance.use_mobile_message) {
              $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.mobile_popup_html_info);
            } else {
              $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.popup_html_info);
            }
            Drupal.eu_cookie_compliance.initPopup();
          }
          else {
            $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').trigger('eu_cookie_compliance_popup_close').remove();
          }
        }
        Drupal.eu_cookie_compliance.showWithdrawBanner(value);
      });
    }

    if (drupalSettings.eu_cookie_compliance.reload_page) {
      location.reload();
    }

    Drupal.eu_cookie_compliance.setStatus(value);
  };

  Drupal.eu_cookie_compliance.showWithdrawBanner = function (value) {
    if (value === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
      if (!drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
        Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
      }
      Drupal.eu_cookie_compliance.attachWithdrawEvents();
    }
  };

  Drupal.eu_cookie_compliance.setStatus = function (status) {
    var date = new Date();
    var domain = drupalSettings.eu_cookie_compliance.domain ? drupalSettings.eu_cookie_compliance.domain : '';
    var path = drupalSettings.eu_cookie_compliance.domain_all_sites ? '/' : drupalSettings.path.baseUrl;
    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name;
    if (path.length > 1) {
      var pathEnd = path.length - 1;
      if (path.lastIndexOf('/') === pathEnd) {
        path = path.substring(0, pathEnd);
      }
    }

    var cookie_session = parseInt(drupalSettings.eu_cookie_compliance.cookie_session);
    if (cookie_session) {
      $.cookie(cookieName, status, { path: path, domain: domain, secure: true });
    } else {
      var lifetime = parseInt(drupalSettings.eu_cookie_compliance.cookie_lifetime);
      date.setDate(date.getDate() + lifetime);
      $.cookie(cookieName, status, { expires: date, path: path, domain: domain, secure: true });
    }
    $(document).trigger('eu_cookie_compliance.changeStatus', [status]);

    // Store consent if applicable.
    if (drupalSettings.eu_cookie_compliance.store_consent && ((status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) || (status === 2  && !drupalSettings.eu_cookie_compliance.popup_agreed_enabled))) {
      var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'eu-cookie-compliance/store_consent/banner';
      $.post(url, {}, function (data) { });
    }
  };

  Drupal.eu_cookie_compliance.setAcceptedCategories = function (categories) {
    var date = new Date();
    var domain = drupalSettings.eu_cookie_compliance.domain ? drupalSettings.eu_cookie_compliance.domain : '';
    var path = drupalSettings.eu_cookie_compliance.domain_all_sites ? '/' : drupalSettings.path.baseUrl;
    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories';
    if (path.length > 1) {
      var pathEnd = path.length - 1;
      if (path.lastIndexOf('/') === pathEnd) {
        path = path.substring(0, pathEnd);
      }
    }
    var categoriesString = JSON.stringify(categories);
    var cookie_session = parseInt(drupalSettings.eu_cookie_compliance.cookie_session);
    if (cookie_session) {
      $.cookie(cookieName, categoriesString, { path: path, domain: domain, secure: true });
    } else {
      var lifetime = parseInt(drupalSettings.eu_cookie_compliance.cookie_lifetime);
      date.setDate(date.getDate() + lifetime);
      $.cookie(cookieName, categoriesString, { expires: date, path: path, domain: domain, secure: true });
    }
    $(document).trigger('eu_cookie_compliance.changePreferences', [categories]);

    // TODO: Store categories with consent if applicable?
  };

  Drupal.eu_cookie_compliance.hasAgreed = function (category) {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    var agreed = (status === 1 || status === 2);

    if(category !== undefined && agreed) {
      agreed = Drupal.eu_cookie_compliance.hasAgreedWithCategory(category);
    }

    return agreed;
  };

  Drupal.eu_cookie_compliance.hasAgreedWithCategory = function(category) {
    var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories;
    var agreedCategories = Drupal.eu_cookie_compliance.getAcceptedCategories();

    if (drupalSettings.eu_cookie_compliance.fix_first_cookie_category && category === allCategories[0]) {
      return true;
    }

    return $.inArray(category, agreedCategories) !== -1;
  };

  Drupal.eu_cookie_compliance.showBanner = function () {
    var showBanner = false;
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if ((status === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || status === null) {
      if (!drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
        showBanner = true;
      }
    } else if (status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
      showBanner = true;
    }

    return showBanner;
  };

  Drupal.eu_cookie_compliance.cookiesEnabled = function () {
    var cookieEnabled = (navigator.cookieEnabled);
    if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
      $.cookie('testcookie', 'testcookie', { expires: 100 });
      cookieEnabled = ($.cookie('testcookie').indexOf('testcookie') !== -1);
    }

    return (cookieEnabled);
  };

  Drupal.eu_cookie_compliance.isWhitelisted = function (cookieName) {
    // Skip the PHP session cookie.
    if (cookieName.indexOf('SESS') === 0 || cookieName.indexOf('SSESS') === 0) {
      return true;
    }
    // Split the white-listed cookies.
    var euCookieComplianceWhitelist = drupalSettings.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);

    // Add the EU Cookie Compliance cookie.
    euCookieComplianceWhitelist.push((typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name);
    euCookieComplianceWhitelist.push((typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories');

    // Check if the cookie is white-listed.
    for (var item in euCookieComplianceWhitelist) {
      if (cookieName === euCookieComplianceWhitelist[item]) {
        return true;
      }
      // Handle cookie names that are prefixed with a category.
      if (drupalSettings.eu_cookie_compliance.method === 'categories') {
        var separatorPos = euCookieComplianceWhitelist[item].indexOf(":");
        if (separatorPos !== -1) {
          var category = euCookieComplianceWhitelist[item].substr(0, separatorPos);
          var wlCookieName = euCookieComplianceWhitelist[item].substr(separatorPos + 1);

          if (wlCookieName === cookieName && Drupal.eu_cookie_compliance.hasAgreedWithCategory(category)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  // Load blocked scripts if the user has agreed to being tracked.
  var euCookieComplianceHasLoadedScripts = false;
  var euCookieComplianceHasLoadedScriptsForCategory = [];
  $(function () {
    if (Drupal.eu_cookie_compliance.hasAgreed()
        || (Drupal.eu_cookie_compliance.getCurrentStatus() === null && drupalSettings.eu_cookie_compliance.method !== 'opt_in' && drupalSettings.eu_cookie_compliance.method !== 'categories')
    ) {
      if (typeof euCookieComplianceLoadScripts === "function") {
        euCookieComplianceLoadScripts();
      }
      euCookieComplianceHasLoadedScripts = true;

      if (drupalSettings.eu_cookie_compliance.method === 'categories') {
        var acceptedCategories = Drupal.eu_cookie_compliance.getAcceptedCategories();
        Drupal.eu_cookie_compliance.loadCategoryScripts(acceptedCategories);
      }
    }
  });

  // Block cookies when the user hasn't agreed.
  if ((drupalSettings.eu_cookie_compliance.method === 'opt_in' && (Drupal.eu_cookie_compliance.getCurrentStatus() === null  || !Drupal.eu_cookie_compliance.hasAgreed()))
      || (drupalSettings.eu_cookie_compliance.method === 'opt_out' && !Drupal.eu_cookie_compliance.hasAgreed() && Drupal.eu_cookie_compliance.getCurrentStatus() !== null)
      || (drupalSettings.eu_cookie_compliance.method === 'categories')
  ) {
    var euCookieComplianceBlockCookies = setInterval(function () {
      // Load all cookies from jQuery.
      var cookies = $.cookie();

      // Check each cookie and try to remove it if it's not white-listed.
      for (var i in cookies) {
        var remove = true;
        var hostname = window.location.hostname;
        var cookieRemoved = false;
        var index = 0;

        remove = !Drupal.eu_cookie_compliance.isWhitelisted(i);

        // Remove the cookie if it's not white-listed.
        if (remove) {
          while (!cookieRemoved && hostname !== '') {
            // Attempt to remove.
            cookieRemoved = $.removeCookie(i, { domain: '.' + hostname, path: '/' });
            if (!cookieRemoved) {
              cookieRemoved = $.removeCookie(i, { domain: hostname, path: '/' });
            }

            index = hostname.indexOf('.');

            // We can be on a sub-domain, so keep checking the main domain as well.
            hostname = (index === -1) ? '' : hostname.substring(index + 1);
          }

          // Some jQuery Cookie versions don't remove cookies well.  Try again
          // using plain js.
          if (!cookieRemoved) {
            document.cookie = i + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
          }
        }
      }
    }, 5000);
  }

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @namespace
 */
(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.bootstrap = {
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Extends a Bootstrap plugin constructor.
   *
   * @param {string} id
   *   A Bootstrap plugin identifier located in $.fn.
   * @param {function} [callback]
   *   A callback to extend the plugin constructor.
   *
   * @return {function|boolean}
   *   The Bootstrap plugin or FALSE if the plugin does not exist.
   */
  Drupal.bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if the plugin does not exist.
    if (!$.fn[id] || !$.fn[id].Constructor) return false;

    // Extend the plugin if a callback was provided.
    if ($.isFunction(callback)) {
      var ret = callback.apply($.fn[id].Constructor, [this.settings]);
      if ($.isPlainObject(ret)) {
        $.extend(true, $.fn[id].Constructor, ret);
      }
    }

    // Add a jQuery UI like option getter/setter method.
    if ($.fn[id].Constructor.prototype.option === void(0)) {
      $.fn[id].Constructor.prototype.option = this.option;
    }

    return $.fn[id].Constructor;
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {string} id
   *   A Bootstrap plugin identifier located in $.fn.
   * @param {function} [callback]
   *   A callback to replace the jQuery plugin definition. The callback must
   *   return a function that is used to construct a jQuery plugin.
   *
   * @return {function|boolean}
   *   The Bootstrap jQuery plugin definition or FALSE if the plugin does not
   *   exist.
   */
  Drupal.bootstrap.replacePlugin = function (id, callback) {
    // Immediately return if plugin does not exist or not a valid callback.
    if (!$.fn[id] || !$.fn[id].Constructor || !$.isFunction(callback)) return false;
    var constructor = $.fn[id].Constructor;

    var plugin = callback.apply(constructor);
    if ($.isFunction(plugin)) {
      plugin.Constructor = constructor;

      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
      $.fn[id] = plugin;
    }
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Drupal.bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a pretty complete modern implementation. If things are quite
   * working the way you intend (in older browsers), you may wish to use the
   * jQuery.simulate plugin. If it's available, this method will defer to it.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement} element
   *   A DOM element to dispatch event on.
   * @param {String} type
   *   The type of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   */
  Drupal.bootstrap.simulate = function (element, type, options) {
    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return;
    }
    var event;
    var ctor;
    for (var name in Drupal.bootstrap.eventMap) {
      if (Drupal.bootstrap.eventMap[name].test(type)) {
        ctor = name;
        break;
      }
    }
    if (!ctor) {
      throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
    }
    var opts = {bubbles: true, cancelable: true};
    if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
      $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
    }
    if (ctor === 'MouseEvent') {
      $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
    }
    if (options) {
      $.extend(opts, options);
    }
    if (typeof window[ctor] === 'function') {
      event = new window[ctor](type, opts);
      element.dispatchEvent(event);
    }
    else if (document.createEvent) {
      event = document.createEvent(ctor);
      event.initEvent(type, opts.bubbles, opts.cancelable);
      element.dispatchEvent(event);
    }
    else if (typeof element.fireEvent === 'function') {
      event = $.extend(document.createEventObject(), opts);
      element.fireEvent('on' + type, event);
    }
    else if (typeof element[type]) {
      element[type]();
    }
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   *
   * @todo This isn't fully working since Bootstrap plugins don't allow
   * methods to return values.
   */
  Drupal.bootstrap.option = function (key, value) {
    var options = key;
    var parts, curOption, i;

    // Don't return a reference to the internal hash.
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Handle a specific option.
    if (typeof key === "string") {
      // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      parts = key.split(".");
      key = parts.shift();
      if (parts.length) {
        curOption = options[key] = $.extend({}, this.options[key]);
        for (i = 0; i < parts.length - 1; i++) {
          curOption[parts[i]] = curOption[parts[i]] || {};
          curOption = curOption[parts[i]];
        }
        key = parts.pop();
        if (arguments.length === 1) {
          return curOption[key] === undefined ? null : curOption[key];
        }
        curOption[key] = value;
      }
      else {
        if (arguments.length === 1) {
          return this.options[key] === undefined ? null : this.options[key];
        }
        options[key] = value;
      }
    }

    // Set the new option(s).
    for (key in options) {
      if (!options.hasOwnProperty(key)) continue;
      this.options[key] = options[key];
    }
    return this;
  };

})(window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * Class to help modify attributes.
   *
   * @param {object} object
   *   An object to initialize attributes with.
   *
   * @constructor
   */
  var Attributes = function (object) {
    this.data = object && _.isObject(object) && _.clone(object) || {};
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @returns {string}
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    for (name in this.data) {
      if (!this.data.hasOwnProperty(name)) continue;
      value = this.data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var classes = this.getClasses();
    value = [].concat(classes, value);
    this.set('class', _.uniq(value));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @returns {Object}
   */
  Attributes.prototype.getData = function () {
    return _.clone(this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    var classes = [].concat(this.get('class', []));
    return _.uniq(classes);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} name
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (name) {
    name = [].concat(name);
    var classes = this.getClasses();
    var found = false;
    _.each(name, function (value) { if (_.indexOf(classes, value) !== -1) found = true; });
    return found;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {object} values
   *   An associative key/value array.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (values, recursive) {
    values = values instanceof Attributes ? values.getData() : values;
    if (recursive === void(0) || recursive) {
      this.data = $.extend(true, {}, this.data, values);
    }
    else {
      $.extend(this.data, values);
    }
    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (value) {
    this.set('class', _.without(this.getClasses(), [].concat(value)));
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(oldValue, classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    this.data[name] = value;
    return this;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} object
   *   An object to initialize attributes with.
   *
   * @returns {Attributes}
   *
   * @global
   *
   * @constructor
   */
  window.Attributes = function (object) {
    return object instanceof Attributes ? object : new Attributes(object);
  };

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme.bootstrapIcon('refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }
      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
 * @file
 * Extends methods from core/misc/progress.js.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div class="progress-wrapper" aria-live="polite">' +
             '<div class="message"></div>'+
             '<div id ="' + id + '" class="progress progress-striped active">' +
               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
                 '<span class="percentage"></span>' +
               '</div>' +
             '</div>' +
             '<div class="progress-label"></div>' +
           '</div>';
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     * @param {string} message
     * @param {string} label
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', percentage);
        $(this.element).find('.percentage').html(percentage + '%');
      }
      if (message) {
        // Remove the unnecessary whitespace at the end of the message.
        message = message.replace(/<br\/>&nbsp;|\s*$/, '');

        $('.message', this.element).html(message);
      }
      if (label) {
        $('.progress-label', this.element).html(label);
      }
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     */
    displayError: function (string) {
      var error = $('<div class="alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">&times;</a><h4>' + Drupal.t('Error message') + '</h4></div>').append(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/gim;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
 * @file
 * Extends methods from core/misc/ajax.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Attempts to find the closest glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   *
   * @returns {jQuery}
   *   A jQuery object.
   */
  Drupal.Ajax.prototype.findGlyphicon = function (element) {
    return $(element).closest('.form-item').find('.ajax-progress.glyphicon')
  };

  /**
   * Starts the spinning of the glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   * @param {string} [message]
   *   An optional message to display (tooltip) for the progress.
   *
   * @returns {jQuery}
   *   A jQuery object.
   */
  Drupal.Ajax.prototype.glyphiconStart = function (element, message) {
    var $glyphicon = this.findGlyphicon(element);
    if ($glyphicon[0]) {
      $glyphicon.addClass('glyphicon-spin');

      // Add any message as a tooltip to the glyphicon.
      if (drupalSettings.bootstrap.tooltip_enabled) {
        $glyphicon
          .removeAttr('data-toggle')
          .removeAttr('data-original-title')
          .removeAttr('title')
          .tooltip('destroy')
        ;

        if (message) {
          $glyphicon.attr('data-toggle', 'tooltip').attr('title', message).tooltip();
        }
      }

      // Append a message for screen readers.
      if (message) {
        $glyphicon.parent().append('<div class="sr-only message">' + message + '</div>');
      }
    }
    return $glyphicon;
  };

  /**
   * Stop the spinning of a glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   */
  Drupal.Ajax.prototype.glyphiconStop = function (element) {
    var $glyphicon = this.findGlyphicon(element);
    if ($glyphicon[0]) {
      $glyphicon.removeClass('glyphicon-spin');
      if (drupalSettings.bootstrap.tooltip_enabled) {
        $glyphicon
          .removeAttr('data-toggle')
          .removeAttr('data-original-title')
          .removeAttr('title')
          .tooltip('destroy')
        ;
      }
    }
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    var $element = $(this.element);

    // Find an existing glyphicon progress indicator.
    var $glyphicon = this.glyphiconStart($element, this.progress.message);
    if ($glyphicon[0]) {
      this.progress.element = $glyphicon.parent();
      this.progress.glyphicon = true;
      return;
    }

    // Otherwise, add a glyphicon throbber after the element.
    if (!this.progress.element) {
      this.progress.element = $(Drupal.theme('ajaxThrobber'));
    }
    if (this.progress.message) {
      this.progress.element.after('<div class="message">' + this.progress.message + '</div>');
    }

    // If element is an input DOM element type (not :input), append after.
    if ($element.is('input')) {
      $element.after(this.progress.element);
    }
    // Otherwise append the throbber inside the element.
    else {
      $element.append(this.progress.element);
    }
  };


  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   * @param {number} status
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    if (this.progress.element) {

      // Stop a glyphicon throbber.
      if (this.progress.glyphicon) {
        this.glyphiconStop(this.progress.element);
      }
      // Remove the progress element.
      else {
        this.progress.element.remove();
      }

      // Remove any message set.
      this.progress.element.parent().find('.message').remove();
    }

    // --------------------------------------------------------
    // Everything below is from core/misc/ajax.js.
    // --------------------------------------------------------

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

})(jQuery, this, Drupal, drupalSettings);
;
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.affix"),a="object"==typeof e&&e;o||n.data("bs.affix",o=new i(this,a)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var o=this.$target.scrollTop(),a=this.$element.offset(),s=this.$target.height();if(null!=i&&"top"==this.affixed)return o<i&&"top";if("bottom"==this.affixed)return null!=i?!(o+this.unpin<=a.top)&&"bottom":!(o+s<=t-n)&&"bottom";var r=null==this.affixed,l=r?o:a.top,d=r?s:e;return null!=i&&o<=i?"top":null!=n&&l+d>=t-n&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,o=n.top,a=n.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(a=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof a&&(a=n.bottom(this.$element));var r=this.getState(s,e,o,a);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),d=t.Event(l+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:s-e-a})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})}var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function i(){s.detach().trigger("closed.bs.alert").remove()}var o=t(this),a=o.attr("data-target");a||(a=o.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,""));var s=t("#"===a?[]:a);e&&e.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),+function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),a=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!o&&a.toggle&&/show|hide/.test(e)&&(a.toggle=!1),o||i.data("bs.collapse",o=new n(this,a)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.7",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var a=t.Event("show.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),e||o.data("bs.collapse",null));var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var o=t(n);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o=t(this);o.attr("data-target")||n.preventDefault();var a=e(o),s=a.data("bs.collapse"),r=s?"toggle":o.data();i.call(a,r)})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(o).remove(),t(a).each(function(){var n=t(this),o=e(n),a={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",a)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",a)))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new s(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",a='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.7",s.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var a=e(o),s=a.hasClass("open");if(i(),!s){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(a.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},s.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=e(n),s=o.hasClass("open");if(!s&&27!=i.which||s&&27==i.which)return 27==i.which&&o.find(a).trigger("focus"),n.trigger("click");var r=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+r);if(l.length){var d=l.index(i.target);38==i.which&&d>0&&d--,40==i.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,s.prototype.toggle).on("keydown.bs.dropdown.data-api",a,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,n){return this.each(function(){var o=t(this),a=o.data("bs.modal"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);a||o.data("bs.modal",a=new i(this,s)),"string"==typeof e?a[e](n):s.show&&a.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var a=t.Event("shown.bs.modal",{relatedTarget:e});o?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(a)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(a)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var a=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),a&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;a?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):s()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),o=n.attr("href"),a=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=a.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},a.data(),n.data());n.is("a")&&i.preventDefault(),a.one("show.bs.modal",function(t){t.isDefaultPrevented()||a.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(a,s,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tooltip"),a="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||n.data("bs.tooltip",o=new i(this,a)),"string"==typeof e&&o[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),a=o.length;a--;){var s=o[a];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var r="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),!i.isInStateTrue())return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var o=this,a=this.tip(),s=this.getUID(this.type);this.setContent(),a.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&a.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,d=l.test(r);d&&(r=r.replace(l,"")||"top"),a.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?a.appendTo(this.options.container):a.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),h=a[0].offsetWidth,u=a[0].offsetHeight;if(d){var p=r,f=this.getPosition(this.$viewport);r="bottom"==r&&c.bottom+u>f.bottom?"top":"top"==r&&c.top-u<f.top?"bottom":"right"==r&&c.right+h>f.width?"left":"left"==r&&c.left-h<f.left?"right":r,a.removeClass(p).addClass(r)}var m=this.getCalculatedOffset(r,c,h,u);this.applyPlacement(m,r);var v=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?a.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var n=this.tip(),o=n[0].offsetWidth,a=n[0].offsetHeight,s=parseInt(n.css("margin-top"),10),r=parseInt(n.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(r)&&(r=0),e.top+=s,e.left+=r,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,d=n[0].offsetHeight;"top"==i&&d!=a&&(e.top=e.top+a-d);var c=this.getViewportAdjustedDelta(i,e,l,d);c.left?e.left+=c.left:e.top+=c.top;var h=/top|bottom/.test(i),u=h?2*c.left-o+l:2*c.top-a+d,p=h?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(u,n[0][p],h)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function n(){"in"!=o.hoverState&&a.detach(),o.$element&&o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,a=t(this.$tip),s=t.Event("hide.bs."+this.type);if(this.$element.trigger(s),!s.isDefaultPrevented())return a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],n="BODY"==i.tagName,o=i.getBoundingClientRect();null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var a=window.SVGElement&&i instanceof window.SVGElement,s=n?{top:0,left:0}:a?null:e.offset(),r={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},o,r,l,s)},i.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,n){var o={top:0,left:0};if(!this.$viewport)return o;var a=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-a-s.scroll,l=e.top+a-s.scroll+n;r<s.top?o.top=s.top-r:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var d=e.left-a,c=e.left+a+i;d<s.left?o.left=s.left-d:c>s.right&&(o.left=s.left+s.width-c)}return o},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var n=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.popover"),a="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||n.data("bs.popover",o=new i(this,a)),"string"==typeof e&&o[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.7",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var n=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery),+function(t){"use strict";function e(i,n){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var n=t(this),o=n.data("bs.scrollspy"),a="object"==typeof i&&i;o||n.data("bs.scrollspy",o=new e(this,a)),"string"==typeof i&&o[i]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),o=e.data("target")||e.attr("href"),a=/^#./.test(o)&&t(o);return a&&a.length&&a.is(":visible")&&[[a[i]().top+n,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),o=this.offsets,a=this.targets,s=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return s!=(t=a[a.length-1])&&this.activate(t);if(s&&e<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)s!=a[t]&&e>=o[t]&&(void 0===o[t+1]||e<o[t+1])&&this.activate(a[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new i(this)),"string"==typeof e&&o[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a"),a=t.Event("hide.bs.tab",{relatedTarget:e[0]}),s=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(a),e.trigger(s),!s.isDefaultPrevented()&&!a.isDefaultPrevented()){var r=t(n);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},i.prototype.activate=function(e,n,o){function a(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var s=n.find("> .active"),r=o&&t.support.transition&&(s.length&&s.hasClass("fade")||!!n.find("> .fade").length);s.length&&r?s.one("bsTransitionEnd",a).emulateTransitionEnd(i.TRANSITION_DURATION):a(),s.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var o=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var o=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery);var ResponsiveBootstrapToolkit=function(t){var e={detectionDivs:{bootstrap:{xs:t('<div class="device-xs visible-xs visible-xs-block"></div>'),sm:t('<div class="device-sm visible-sm visible-sm-block"></div>'),md:t('<div class="device-md visible-md visible-md-block"></div>'),lg:t('<div class="device-lg visible-lg visible-lg-block"></div>')},foundation:{small:t('<div class="device-xs show-for-small-only"></div>'),medium:t('<div class="device-sm show-for-medium-only"></div>'),large:t('<div class="device-md show-for-large-only"></div>'),xlarge:t('<div class="device-lg show-for-xlarge-only"></div>')}},applyDetectionDivs:function(){t(document).ready(function(){t.each(i.breakpoints,function(t){i.breakpoints[t].appendTo(".responsive-bootstrap-toolkit")})})},isAnExpression:function(t){return"<"==t.charAt(0)||">"==t.charAt(0)},splitExpression:function(t){var e=t.charAt(0),i="="==t.charAt(1),n=1+(i?1:0),o=t.slice(n);return{operator:e,orEqual:i,breakpointName:o}},isAnyActive:function(e){var n=!1;return t.each(e,function(t,e){return i.breakpoints[e].is(":visible")?(n=!0,!1):void 0}),n},isMatchingExpression:function(t){var n=e.splitExpression(t),o=Object.keys(i.breakpoints),a=o.indexOf(n.breakpointName);if(-1!==a){var s=0,r=0;"<"==n.operator&&(s=0,r=n.orEqual?++a:a),">"==n.operator&&(s=n.orEqual?a:++a,r=void 0);var l=o.slice(s,r);return e.isAnyActive(l)}}},i={interval:300,framework:null,
breakpoints:null,is:function(t){return e.isAnExpression(t)?e.isMatchingExpression(t):i.breakpoints[t]&&i.breakpoints[t].is(":visible")},use:function(t,n){i.framework=t.toLowerCase(),"bootstrap"===i.framework||"foundation"===i.framework?i.breakpoints=e.detectionDivs[i.framework]:i.breakpoints=n,e.applyDetectionDivs()},current:function(){var e="unrecognized";return t.each(i.breakpoints,function(t){i.is(t)&&(e=t)}),e},changed:function(t,e){var n;return function(){clearTimeout(n),n=setTimeout(function(){t()},e||i.interval)}}};return t(document).ready(function(){t('<div class="responsive-bootstrap-toolkit"></div>').appendTo("body")}),null===i.framework&&i.use("bootstrap"),i}(jQuery);"undefined"!=typeof module&&module.exports&&(module.exports=ResponsiveBootstrapToolkit),function(t){"use strict";function e(e){var i=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return t.each(i,function(){e=e?e.replace(this.re,this.ch):""}),e}function i(e){var i=arguments,n=e;[].shift.apply(i);var o,a=this.each(function(){var e=t(this);if(e.is("select")){var a=e.data("selectpicker"),s="object"==typeof n&&n;if(a){if(s)for(var r in s)s.hasOwnProperty(r)&&(a.options[r]=s[r])}else{var l=t.extend({},h.DEFAULTS,t.fn.selectpicker.defaults||{},e.data(),s);l.template=t.extend({},h.DEFAULTS.template,t.fn.selectpicker.defaults?t.fn.selectpicker.defaults.template:{},e.data().template,s.template),e.data("selectpicker",a=new h(this,l))}"string"==typeof n&&(o=a[n]instanceof Function?a[n].apply(a,i):a.options[n])}});return"undefined"!=typeof o?o:a}String.prototype.includes||!function(){var t={}.toString,e=function(){try{var t={},e=Object.defineProperty,i=e(t,t,t)&&e}catch(n){}return i}(),i="".indexOf,n=function(e){if(null==this)throw new TypeError;var n=String(this);if(e&&"[object RegExp]"==t.call(e))throw new TypeError;var o=n.length,a=String(e),s=a.length,r=arguments.length>1?arguments[1]:void 0,l=r?Number(r):0;l!=l&&(l=0);var d=Math.min(Math.max(l,0),o);return!(s+d>o)&&i.call(n,a,l)!=-1};e?e(String.prototype,"includes",{value:n,configurable:!0,writable:!0}):String.prototype.includes=n}(),String.prototype.startsWith||!function(){var t=function(){try{var t={},e=Object.defineProperty,i=e(t,t,t)&&e}catch(n){}return i}(),e={}.toString,i=function(t){if(null==this)throw new TypeError;var i=String(this);if(t&&"[object RegExp]"==e.call(t))throw new TypeError;var n=i.length,o=String(t),a=o.length,s=arguments.length>1?arguments[1]:void 0,r=s?Number(s):0;r!=r&&(r=0);var l=Math.min(Math.max(r,0),n);if(a+l>n)return!1;for(var d=-1;++d<a;)if(i.charCodeAt(l+d)!=o.charCodeAt(d))return!1;return!0};t?t(String.prototype,"startsWith",{value:i,configurable:!0,writable:!0}):String.prototype.startsWith=i}(),Object.keys||(Object.keys=function(t,e,i){i=[];for(e in t)i.hasOwnProperty.call(t,e)&&i.push(e);return i});var n={useDefault:!1,_set:t.valHooks.select.set};t.valHooks.select.set=function(e,i){return i&&!n.useDefault&&t(e).data("selected",!0),n._set.apply(this,arguments)};var o=null,a=function(){try{return new Event("change"),!0}catch(t){return!1}}();t.fn.triggerNative=function(t){var e,i=this[0];i.dispatchEvent?(a?e=new Event(t,{bubbles:!0}):(e=document.createEvent("Event"),e.initEvent(t,!0,!1)),i.dispatchEvent(e)):i.fireEvent?(e=document.createEventObject(),e.eventType=t,i.fireEvent("on"+t,e)):this.trigger(t)},t.expr.pseudos.icontains=function(e,i,n){var o=t(e).find("a"),a=(o.data("tokens")||o.text()).toString().toUpperCase();return a.includes(n[3].toUpperCase())},t.expr.pseudos.ibegins=function(e,i,n){var o=t(e).find("a"),a=(o.data("tokens")||o.text()).toString().toUpperCase();return a.startsWith(n[3].toUpperCase())},t.expr.pseudos.aicontains=function(e,i,n){var o=t(e).find("a"),a=(o.data("tokens")||o.data("normalizedText")||o.text()).toString().toUpperCase();return a.includes(n[3].toUpperCase())},t.expr.pseudos.aibegins=function(e,i,n){var o=t(e).find("a"),a=(o.data("tokens")||o.data("normalizedText")||o.text()).toString().toUpperCase();return a.startsWith(n[3].toUpperCase())};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},r={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"},l=function(t){var e=function(e){return t[e]},i="(?:"+Object.keys(t).join("|")+")",n=RegExp(i),o=RegExp(i,"g");return function(t){return t=null==t?"":""+t,n.test(t)?t.replace(o,e):t}},d=l(s),c=l(r),h=function(e,i){n.useDefault||(t.valHooks.select.set=n._set,n.useDefault=!0),this.$element=t(e),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=i,null===this.options.title&&(this.options.title=this.$element.attr("title"));var o=this.options.windowPadding;"number"==typeof o&&(this.options.windowPadding=[o,o,o,o]),this.val=h.prototype.val,this.render=h.prototype.render,this.refresh=h.prototype.refresh,this.setStyle=h.prototype.setStyle,this.selectAll=h.prototype.selectAll,this.deselectAll=h.prototype.deselectAll,this.destroy=h.prototype.destroy,this.remove=h.prototype.remove,this.show=h.prototype.show,this.hide=h.prototype.hide,this.init()};h.VERSION="1.12.4",h.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(t,e){return 1==t?"{0} item selected":"{0} items selected"},maxOptionsText:function(t,e){return[1==t?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==e?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},h.prototype={constructor:h,init:function(){var e=this,i=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight===!0&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof i&&(this.$button.attr("data-id",i),t('label[for="'+i+'"]').click(function(t){t.preventDefault(),e.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(t){e.$menuInner.attr("aria-expanded",!1),e.$element.trigger("hide.bs.select",t)},"hidden.bs.dropdown":function(t){e.$element.trigger("hidden.bs.select",t)},"show.bs.dropdown":function(t){e.$menuInner.attr("aria-expanded",!0),e.$element.trigger("show.bs.select",t)},"shown.bs.dropdown":function(t){e.$element.trigger("shown.bs.select",t)}}),e.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){e.$button.addClass("bs-invalid"),e.$element.on({"focus.bs.select":function(){e.$button.focus(),e.$element.off("focus.bs.select")},"shown.bs.select":function(){e.$element.val(e.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&e.$button.removeClass("bs-invalid"),e.$element.off("rendered.bs.select")}}),e.$button.on("blur.bs.select",function(){e.$element.focus().blur(),e.$button.off("blur.bs.select")})}),setTimeout(function(){e.$element.trigger("loaded.bs.select")})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",i=this.$element.parent().hasClass("input-group")?" input-group-btn":"",n=this.autofocus?" autofocus":"",o=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",a=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+d(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",s=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",r=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",l='<div class="btn-group bootstrap-select'+e+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+n+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+o+a+s+'<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>'+r+"</div></div>";return t(l)},createView:function(){var t=this.createDropdown(),e=this.createLi();return t.find("ul")[0].innerHTML=e,t},reloadLi:function(){var t=this.createLi();this.$menuInner[0].innerHTML=t},createLi:function(){var i=this,n=[],o=0,a=document.createElement("option"),s=-1,r=function(t,e,i,n){return"<li"+("undefined"!=typeof i&&""!==i?' class="'+i+'"':"")+("undefined"!=typeof e&&null!==e?' data-original-index="'+e+'"':"")+("undefined"!=typeof n&&null!==n?'data-optgroup="'+n+'"':"")+">"+t+"</li>"},l=function(n,o,a,s){return'<a tabindex="0"'+("undefined"!=typeof o?' class="'+o+'"':"")+(a?' style="'+a+'"':"")+(i.options.liveSearchNormalize?' data-normalized-text="'+e(d(t(n).html()))+'"':"")+("undefined"!=typeof s||null!==s?' data-tokens="'+s+'"':"")+' role="option">'+n+'<span class="'+i.options.iconBase+" "+i.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(s--,!this.$element.find(".bs-title-option").length)){var c=this.$element[0];a.className="bs-title-option",a.innerHTML=this.options.title,a.value="",c.insertBefore(a,c.firstChild);var h=t(c.options[c.selectedIndex]);void 0===h.attr("selected")&&void 0===this.$element.data("selected")&&(a.selected=!0)}var u=this.$element.find("option");return u.each(function(e){var a=t(this);if(s++,!a.hasClass("bs-title-option")){var c,h=this.className||"",p=d(this.style.cssText),f=a.data("content")?a.data("content"):a.html(),m=a.data("tokens")?a.data("tokens"):null,v="undefined"!=typeof a.data("subtext")?'<small class="text-muted">'+a.data("subtext")+"</small>":"",g="undefined"!=typeof a.data("icon")?'<span class="'+i.options.iconBase+" "+a.data("icon")+'"></span> ':"",b=a.parent(),w="OPTGROUP"===b[0].tagName,y=w&&b[0].disabled,x=this.disabled||y;if(""!==g&&x&&(g="<span>"+g+"</span>"),i.options.hideDisabled&&(x&&!w||y))return c=a.data("prevHiddenIndex"),a.next().data("prevHiddenIndex",void 0!==c?c:e),void s--;if(a.data("content")||(f=g+'<span class="text">'+f+v+"</span>"),w&&a.data("divider")!==!0){if(i.options.hideDisabled&&x){if(void 0===b.data("allOptionsDisabled")){var C=b.children();b.data("allOptionsDisabled",C.filter(":disabled").length===C.length)}if(b.data("allOptionsDisabled"))return void s--}var S=" "+b[0].className||"";if(0===a.index()){o+=1;var T=b[0].label,k="undefined"!=typeof b.data("subtext")?'<small class="text-muted">'+b.data("subtext")+"</small>":"",_=b.data("icon")?'<span class="'+i.options.iconBase+" "+b.data("icon")+'"></span> ':"";T=_+'<span class="text">'+d(T)+k+"</span>",0!==e&&n.length>0&&(s++,n.push(r("",null,"divider",o+"div"))),s++,n.push(r(T,null,"dropdown-header"+S,o))}if(i.options.hideDisabled&&x)return void s--;n.push(r(l(f,"opt "+h+S,p,m),e,"",o))}else if(a.data("divider")===!0)n.push(r("",e,"divider"));else if(a.data("hidden")===!0)c=a.data("prevHiddenIndex"),a.next().data("prevHiddenIndex",void 0!==c?c:e),n.push(r(l(f,h,p,m),e,"hidden is-hidden"));else{var $=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName;if(!$&&i.options.hideDisabled&&(c=a.data("prevHiddenIndex"),void 0!==c)){var E=u.eq(c)[0].previousElementSibling;E&&"OPTGROUP"===E.tagName&&!E.disabled&&($=!0)}$&&(s++,n.push(r("",null,"divider",o+"div"))),n.push(r(l(f,h,p,m),e))}i.liObj[e]=s}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),n.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(e){var i,n=this,o=this.$element.find("option");e!==!1&&o.each(function(t){var e=n.findLis().eq(n.liObj[t]);n.setDisabled(t,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,e),n.setSelected(t,this.selected,e)}),this.togglePlaceholder(),this.tabIndex();var a=o.map(function(){if(this.selected){if(n.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var e,i=t(this),o=i.data("icon")&&n.options.showIcon?'<i class="'+n.options.iconBase+" "+i.data("icon")+'"></i> ':"";return e=n.options.showSubtext&&i.data("subtext")&&!n.multiple?' <small class="text-muted">'+i.data("subtext")+"</small>":"","undefined"!=typeof i.attr("title")?i.attr("title"):i.data("content")&&n.options.showContent?i.data("content").toString():o+i.html()+e}}).toArray(),s=this.multiple?a.join(this.options.multipleSeparator):a[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var r=this.options.selectedTextFormat.split(">");if(r.length>1&&a.length>r[1]||1==r.length&&a.length>=2){i=this.options.hideDisabled?", [disabled]":"";var l=o.not('[data-divider="true"], [data-hidden="true"]'+i).length,d="function"==typeof this.options.countSelectedText?this.options.countSelectedText(a.length,l):this.options.countSelectedText;s=d.replace("{0}",a.length.toString()).replace("{1}",l.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(s=this.options.title),s||(s="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",c(t.trim(s.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(s),this.$element.trigger("rendered.bs.select")},setStyle:function(t,e){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var i=t?t:this.options.style;"add"==e?this.$button.addClass(i):"remove"==e?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(e){if(e||this.options.size!==!1&&!this.sizeInfo){var i=document.createElement("div"),n=document.createElement("div"),o=document.createElement("ul"),a=document.createElement("li"),s=document.createElement("li"),r=document.createElement("a"),l=document.createElement("span"),d=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,c=this.options.liveSearch?document.createElement("div"):null,h=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,u=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(l.className="text",i.className=this.$menu[0].parentNode.className+" open",n.className="dropdown-menu open",o.className="dropdown-menu inner",a.className="divider",l.appendChild(document.createTextNode("Inner text")),r.appendChild(l),s.appendChild(r),o.appendChild(s),o.appendChild(a),d&&n.appendChild(d),c){var p=document.createElement("input");c.className="bs-searchbox",p.className="form-control",c.appendChild(p),n.appendChild(c)}h&&n.appendChild(h),n.appendChild(o),u&&n.appendChild(u),i.appendChild(n),document.body.appendChild(i);var f=r.offsetHeight,m=d?d.offsetHeight:0,v=c?c.offsetHeight:0,g=h?h.offsetHeight:0,b=u?u.offsetHeight:0,w=t(a).outerHeight(!0),y="function"==typeof getComputedStyle&&getComputedStyle(n),x=y?null:t(n),C={vert:parseInt(y?y.paddingTop:x.css("paddingTop"))+parseInt(y?y.paddingBottom:x.css("paddingBottom"))+parseInt(y?y.borderTopWidth:x.css("borderTopWidth"))+parseInt(y?y.borderBottomWidth:x.css("borderBottomWidth")),horiz:parseInt(y?y.paddingLeft:x.css("paddingLeft"))+parseInt(y?y.paddingRight:x.css("paddingRight"))+parseInt(y?y.borderLeftWidth:x.css("borderLeftWidth"))+parseInt(y?y.borderRightWidth:x.css("borderRightWidth"))},S={vert:C.vert+parseInt(y?y.marginTop:x.css("marginTop"))+parseInt(y?y.marginBottom:x.css("marginBottom"))+2,horiz:C.horiz+parseInt(y?y.marginLeft:x.css("marginLeft"))+parseInt(y?y.marginRight:x.css("marginRight"))+2};document.body.removeChild(i),this.sizeInfo={liHeight:f,headerHeight:m,searchHeight:v,actionsHeight:g,doneButtonHeight:b,dividerHeight:w,menuPadding:C,menuExtras:S}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var e,i,n,o,a,s,r,l,d=this,c=this.$menu,h=this.$menuInner,u=t(window),p=this.$newElement[0].offsetHeight,f=this.$newElement[0].offsetWidth,m=this.sizeInfo.liHeight,v=this.sizeInfo.headerHeight,g=this.sizeInfo.searchHeight,b=this.sizeInfo.actionsHeight,w=this.sizeInfo.doneButtonHeight,y=this.sizeInfo.dividerHeight,x=this.sizeInfo.menuPadding,C=this.sizeInfo.menuExtras,S=this.options.hideDisabled?".disabled":"",T=function(){var e,i=d.$newElement.offset(),n=t(d.options.container);d.options.container&&!n.is("body")?(e=n.offset(),e.top+=parseInt(n.css("borderTopWidth")),e.left+=parseInt(n.css("borderLeftWidth"))):e={top:0,left:0};var o=d.options.windowPadding;a=i.top-e.top-u.scrollTop(),s=u.height()-a-p-e.top-o[2],r=i.left-e.left-u.scrollLeft(),l=u.width()-r-f-e.left-o[1],a-=o[0],r-=o[3]};if(T(),"auto"===this.options.size){var k=function(){var u,p=function(e,i){return function(n){return i?n.classList?n.classList.contains(e):t(n).hasClass(e):!(n.classList?n.classList.contains(e):t(n).hasClass(e))}},y=d.$menuInner[0].getElementsByTagName("li"),S=Array.prototype.filter?Array.prototype.filter.call(y,p("hidden",!1)):d.$lis.not(".hidden"),k=Array.prototype.filter?Array.prototype.filter.call(S,p("dropdown-header",!0)):S.filter(".dropdown-header");T(),e=s-C.vert,i=l-C.horiz,d.options.container?(c.data("height")||c.data("height",c.height()),n=c.data("height"),c.data("width")||c.data("width",c.width()),o=c.data("width")):(n=c.height(),o=c.width()),d.options.dropupAuto&&d.$newElement.toggleClass("dropup",a>s&&e-C.vert<n),d.$newElement.hasClass("dropup")&&(e=a-C.vert),"auto"===d.options.dropdownAlignRight&&c.toggleClass("dropdown-menu-right",r>l&&i-C.horiz<o-f),u=S.length+k.length>3?3*m+C.vert-2:0,c.css({"max-height":e+"px",overflow:"hidden","min-height":u+v+g+b+w+"px"}),h.css({"max-height":e-v-g-b-w-x.vert+"px","overflow-y":"auto","min-height":Math.max(u-x.vert,0)+"px"})};k(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",k),u.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",k)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(S).length>this.options.size){var _=this.$lis.not(".divider").not(S).children().slice(0,this.options.size).last().parent().index(),$=this.$lis.slice(0,_+1).filter(".divider").length;e=m*this.options.size+$*y+x.vert,d.options.container?(c.data("height")||c.data("height",c.height()),n=c.data("height")):n=c.height(),d.options.dropupAuto&&this.$newElement.toggleClass("dropup",a>s&&e-C.vert<n),c.css({"max-height":e+v+g+b+w+"px",overflow:"hidden","min-height":""}),h.css({"max-height":e-x.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var t=this.$menu.parent().clone().appendTo("body"),e=this.options.container?this.$newElement.clone().appendTo("body"):t,i=t.children(".dropdown-menu").outerWidth(),n=e.css("width","auto").children("button").outerWidth();t.remove(),e.remove(),this.$newElement.css("width",Math.max(i,n)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=t('<div class="bs-container" />');var e,i,n,o=this,a=t(this.options.container),s=function(t){o.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",t.hasClass("dropup")),e=t.offset(),a.is("body")?i={top:0,left:0}:(i=a.offset(),i.top+=parseInt(a.css("borderTopWidth"))-a.scrollTop(),i.left+=parseInt(a.css("borderLeftWidth"))-a.scrollLeft()),n=t.hasClass("dropup")?0:t[0].offsetHeight,o.$bsContainer.css({top:e.top-i.top+n,left:e.left-i.left,width:t[0].offsetWidth})};this.$button.on("click",function(){var e=t(this);o.isDisabled()||(s(o.$newElement),o.$bsContainer.appendTo(o.options.container).toggleClass("open",!e.hasClass("open")).append(o.$menu))}),t(window).on("resize scroll",function(){s(o.$newElement)}),this.$element.on("hide.bs.select",function(){o.$menu.data("height",o.$menu.height()),o.$bsContainer.detach()})},setSelected:function(t,e,i){i||(this.togglePlaceholder(),i=this.findLis().eq(this.liObj[t])),i.toggleClass("selected",e).find("a").attr("aria-selected",e)},setDisabled:function(t,e,i){i||(i=this.findLis().eq(this.liObj[t])),e?i.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var t=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),this.$button.attr("tabindex")!=-1||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!t.isDisabled()})},togglePlaceholder:function(){var t=this.$element.val();this.$button.toggleClass("bs-placeholder",null===t||""===t||t.constructor===Array&&0===t.length)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&this.$element.attr("tabindex")!==-98&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var e=this,i=t(document);i.data("spaceSelect",!1),this.$button.on("keyup",function(t){/(32)/.test(t.keyCode.toString(10))&&i.data("spaceSelect")&&(t.preventDefault(),i.data("spaceSelect",!1))}),this.$button.on("click",function(){e.setSize()}),this.$element.on("shown.bs.select",function(){if(e.options.liveSearch||e.multiple){if(!e.multiple){var t=e.liObj[e.$element[0].selectedIndex];if("number"!=typeof t||e.options.size===!1)return;var i=e.$lis.eq(t)[0].offsetTop-e.$menuInner[0].offsetTop;i=i-e.$menuInner[0].offsetHeight/2+e.sizeInfo.liHeight/2,e.$menuInner[0].scrollTop=i}}else e.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(i){var n=t(this),a=n.parent().data("originalIndex"),s=e.$element.val(),r=e.$element.prop("selectedIndex"),l=!0;if(e.multiple&&1!==e.options.maxOptions&&i.stopPropagation(),i.preventDefault(),!e.isDisabled()&&!n.parent().hasClass("disabled")){var d=e.$element.find("option"),c=d.eq(a),h=c.prop("selected"),u=c.parent("optgroup"),p=e.options.maxOptions,f=u.data("maxOptions")||!1;if(e.multiple){if(c.prop("selected",!h),e.setSelected(a,!h),n.blur(),p!==!1||f!==!1){var m=p<d.filter(":selected").length,v=f<u.find("option:selected").length;if(p&&m||f&&v)if(p&&1==p)d.prop("selected",!1),c.prop("selected",!0),e.$menuInner.find(".selected").removeClass("selected"),e.setSelected(a,!0);else if(f&&1==f){u.find("option:selected").prop("selected",!1),c.prop("selected",!0);var g=n.parent().data("optgroup");e.$menuInner.find('[data-optgroup="'+g+'"]').removeClass("selected"),e.setSelected(a,!0)}else{var b="string"==typeof e.options.maxOptionsText?[e.options.maxOptionsText,e.options.maxOptionsText]:e.options.maxOptionsText,w="function"==typeof b?b(p,f):b,y=w[0].replace("{n}",p),x=w[1].replace("{n}",f),C=t('<div class="notify"></div>');w[2]&&(y=y.replace("{var}",w[2][p>1?0:1]),x=x.replace("{var}",w[2][f>1?0:1])),c.prop("selected",!1),e.$menu.append(C),p&&m&&(C.append(t("<div>"+y+"</div>")),l=!1,e.$element.trigger("maxReached.bs.select")),f&&v&&(C.append(t("<div>"+x+"</div>")),l=!1,e.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){e.setSelected(a,!1)},10),C.delay(750).fadeOut(300,function(){t(this).remove()})}}}else d.prop("selected",!1),c.prop("selected",!0),e.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected",!1),e.setSelected(a,!0);!e.multiple||e.multiple&&1===e.options.maxOptions?e.$button.focus():e.options.liveSearch&&e.$searchbox.focus(),l&&(s!=e.$element.val()&&e.multiple||r!=e.$element.prop("selectedIndex")&&!e.multiple)&&(o=[a,c.prop("selected"),h],e.$element.triggerNative("change"))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(i){i.currentTarget==this&&(i.preventDefault(),i.stopPropagation(),e.options.liveSearch&&!t(i.target).hasClass("close")?e.$searchbox.focus():e.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(t){t.preventDefault(),t.stopPropagation(),e.options.liveSearch?e.$searchbox.focus():e.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){e.$button.click()}),this.$searchbox.on("click",function(t){t.stopPropagation()}),this.$menu.on("click",".actions-btn",function(i){e.options.liveSearch?e.$searchbox.focus():e.$button.focus(),i.preventDefault(),i.stopPropagation(),t(this).hasClass("bs-select-all")?e.selectAll():e.deselectAll()}),this.$element.change(function(){e.render(!1),e.$element.trigger("changed.bs.select",o),o=null})},liveSearchListener:function(){var i=this,n=t('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){i.$menuInner.find(".active").removeClass("active"),i.$searchbox.val()&&(i.$searchbox.val(""),i.$lis.not(".is-hidden").removeClass("hidden"),n.parent().length&&n.remove()),i.multiple||i.$menuInner.find(".selected").addClass("active"),setTimeout(function(){i.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(t){t.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(i.$lis.not(".is-hidden").removeClass("hidden"),i.$lis.filter(".active").removeClass("active"),n.remove(),i.$searchbox.val()){var o,a=i.$lis.not(".is-hidden, .divider, .dropdown-header");if(o=i.options.liveSearchNormalize?a.not(":a"+i._searchStyle()+'("'+e(i.$searchbox.val())+'")'):a.not(":"+i._searchStyle()+'("'+i.$searchbox.val()+'")'),o.length===a.length)n.html(i.options.noneResultsText.replace("{0}",'"'+d(i.$searchbox.val())+'"')),i.$menuInner.append(n),i.$lis.addClass("hidden");else{o.addClass("hidden");var s,r=i.$lis.not(".hidden");r.each(function(e){var i=t(this);i.hasClass("divider")?void 0===s?i.addClass("hidden"):(s&&s.addClass("hidden"),s=i):i.hasClass("dropdown-header")&&r.eq(e+1).data("optgroup")!==i.data("optgroup")?i.addClass("hidden"):s=null}),s&&s.addClass("hidden"),a.not(".hidden").first().addClass("active"),i.$menuInner.scrollTop(0)}}})},_searchStyle:function(){var t={begins:"ibegins",startsWith:"ibegins"};return t[this.options.liveSearchStyle]||"icontains"},val:function(t){return"undefined"!=typeof t?(this.$element.val(t),this.render(),this.$element):this.$element.val()},changeAll:function(e){if(this.multiple){"undefined"==typeof e&&(e=!0),this.findLis();var i=this.$element.find("option"),n=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),o=n.length,a=[];if(e){if(n.filter(".selected").length===n.length)return}else if(0===n.filter(".selected").length)return;n.toggleClass("selected",e);for(var s=0;s<o;s++){var r=n[s].getAttribute("data-original-index");a[a.length]=i.eq(r)[0]}t(a).prop("selected",e),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(t){t=t||window.event,t&&t.stopPropagation(),this.$button.trigger("click")},keydown:function(e){var i,n,o,a,s=t(this),r=s.is("input")?s.parent().parent():s.parent(),l=r.data("this"),d=":not(.disabled, .hidden, .dropdown-header, .divider)",c={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(a=l.$newElement.hasClass("open"),!a&&(e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105||e.keyCode>=65&&e.keyCode<=90))return l.options.container?l.$button.trigger("click"):(l.setSize(),l.$menu.parent().addClass("open"),a=!0),void l.$searchbox.focus();if(l.options.liveSearch&&/(^9$|27)/.test(e.keyCode.toString(10))&&a&&(e.preventDefault(),e.stopPropagation(),l.$menuInner.click(),l.$button.focus()),/(38|40)/.test(e.keyCode.toString(10))){if(i=l.$lis.filter(d),!i.length)return;n=l.options.liveSearch?i.index(i.filter(".active")):i.index(i.find("a").filter(":focus").parent()),o=l.$menuInner.data("prevIndex"),38==e.keyCode?(!l.options.liveSearch&&n!=o||n==-1||n--,n<0&&(n+=i.length)):40==e.keyCode&&((l.options.liveSearch||n==o)&&n++,n%=i.length),l.$menuInner.data("prevIndex",n),l.options.liveSearch?(e.preventDefault(),s.hasClass("dropdown-toggle")||(i.removeClass("active").eq(n).addClass("active").children("a").focus(),s.focus())):i.eq(n).children("a").focus()}else if(!s.is("input")){var h,u,p=[];i=l.$lis.filter(d),i.each(function(i){t.trim(t(this).children("a").text().toLowerCase()).substring(0,1)==c[e.keyCode]&&p.push(i)}),h=t(document).data("keycount"),h++,t(document).data("keycount",h),u=t.trim(t(":focus").text().toLowerCase()).substring(0,1),u!=c[e.keyCode]?(h=1,t(document).data("keycount",h)):h>=p.length&&(t(document).data("keycount",0),h>p.length&&(h=1)),i.eq(p[h-1]).children("a").focus()}if((/(13|32)/.test(e.keyCode.toString(10))||/(^9$)/.test(e.keyCode.toString(10))&&l.options.selectOnTab)&&a){if(/(32)/.test(e.keyCode.toString(10))||e.preventDefault(),l.options.liveSearch)/(32)/.test(e.keyCode.toString(10))||(l.$menuInner.find(".active a").click(),
s.focus());else{var f=t(":focus");f.click(),f.focus(),e.preventDefault(),t(document).data("spaceSelect",!0)}t(document).data("keycount",0)}(/(^9$|27)/.test(e.keyCode.toString(10))&&a&&(l.multiple||l.options.liveSearch)||/(27)/.test(e.keyCode.toString(10))&&!a)&&(l.$menu.parent().removeClass("open"),l.options.container&&l.$newElement.removeClass("open"),l.$button.focus())},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var u=t.fn.selectpicker;t.fn.selectpicker=i,t.fn.selectpicker.Constructor=h,t.fn.selectpicker.noConflict=function(){return t.fn.selectpicker=u,this},t(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',h.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(t){t.stopPropagation()}),t(window).on("load.bs.select.data-api",function(){t(".selectpicker").each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),function(t,e){function i(t,e,i){var n=t.children(),o=!1;t.empty();for(var s=0,r=n.length;s<r;s++){var l=n.eq(s);if(t.append(l),i&&t.append(i),a(t,e)){l.remove(),o=!0;break}i&&i.detach()}return o}function n(e,i,s,r,l){var d=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",h="script, .dotdotdot-keep";return e.contents().detach().each(function(){var u=this,p=t(u);if("undefined"==typeof u)return!0;if(p.is(h))e.append(p);else{if(d)return!0;e.append(p),!l||p.is(r.after)||p.find(r.after).length||e[e.is(c)?"after":"append"](l),a(s,r)&&(d=3==u.nodeType?o(p,i,s,r,l):n(p,i,s,r,l)),d||l&&l.detach()}}),i.addClass("is-truncated"),d}function o(e,i,n,o,r){var c=e[0];if(!c)return!1;var u=d(c),p=u.indexOf(" ")!==-1?" ":"　",f="letter"==o.wrap?"":p,m=u.split(f),v=-1,g=-1,b=0,w=m.length-1;for(o.fallbackToLetter&&0==b&&0==w&&(f="",m=u.split(f),w=m.length-1);b<=w&&(0!=b||0!=w);){var y=Math.floor((b+w)/2);if(y==g)break;g=y,l(c,m.slice(0,g+1).join(f)+o.ellipsis),n.children().each(function(){t(this).toggle().toggle()}),a(n,o)?(w=g,o.fallbackToLetter&&0==b&&0==w&&(f="",m=m[0].split(f),v=-1,g=-1,b=0,w=m.length-1)):(v=g,b=g)}if(v==-1||1==m.length&&0==m[0].length){var x=e.parent();e.detach();var C=r&&r.closest(x).length?r.length:0;if(x.contents().length>C?c=h(x.contents().eq(-1-C),i):(c=h(x,i,!0),C||x.detach()),c&&(u=s(d(c),o),l(c,u),C&&r)){var S=r.parent();t(c).parent().append(r),t.trim(S.html())||S.remove()}}else u=s(m.slice(0,v+1).join(f),o),l(c,u);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function s(e,i){for(;t.inArray(e.slice(-1),i.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),i.lastCharacter.noEllipsis)<0&&(e+=i.ellipsis),e}function r(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function d(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function h(e,i,n){var o,a=e&&e[0];if(a){if(!n){if(3===a.nodeType)return a;if(t.trim(e.text()))return h(e.contents().last(),i)}for(o=c(a);!o;){if(e=e.parent(),e.is(i)||!e.length)return!1;o=c(e[0])}if(o)return h(t(o),i)}return!1}function u(e,i){return!!e&&("string"==typeof e?(e=t(e,i),!!e.length&&e):!!e.jquery&&e)}function p(t){for(var e=t.innerHeight(),i=["paddingTop","paddingBottom"],n=0,o=i.length;n<o;n++){var a=parseInt(t.css(i[n]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this,s=o.contents();o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,r){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=p(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof r&&(("string"==typeof r||"nodeType"in r&&1===r.nodeType)&&(r=t("<div />").append(r).contents()),r instanceof t&&(s=r)),m=o.wrapInner('<div class="dotdotdot" />').children(),m.contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,h=!1;return d.afterElement&&(c=d.afterElement.clone(!0),c.show(),d.afterElement.detach()),a(m,l)&&(h="children"==l.wrap?i(m,l,c):n(m,o,m,l,c)),m.replaceWith(m.contents()),m=null,t.isFunction(l.callback)&&l.callback.call(o[0],h,s),d.isTruncated=h,h}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],d.isTruncated),d.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s),s}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(s).attr("style",o.data("dotdotdot-style")||"").removeClass("is-truncated").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),i=e.width(),n=e.height();e.bind("resize.dot"+d.dotId,function(){i==e.width()&&n==e.height()&&l.windowResizeFix||(i=e.width(),n=e.height(),h&&clearInterval(h),h=setTimeout(function(){o.trigger("update.dot")},100))})}else c=r(o),h=setInterval(function(){if(o.is(":visible")){var t=r(o);c.width==t.width&&c.height==t.height||(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+d.dotId),h&&clearInterval(h),o};var l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),d={},c={},h=null,m=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),d.afterElement=u(l.after,o),d.isTruncated=!1,d.dotId=f++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var f=1,m=t.fn.html;t.fn.html=function(i){return i!=e&&!t.isFunction(i)&&this.data("dotdotdot")?this.trigger("update",[i]):m.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(i){return i!=e&&!t.isFunction(i)&&this.data("dotdotdot")?(i=t("<div />").text(i).html(),this.trigger("update",[i])):v.apply(this,arguments)}}}(jQuery),jQuery(document).ready(function(t){t(".dot-ellipsis").each(function(){var e=t(this).hasClass("dot-resize-update"),i=t(this).hasClass("dot-timer-update"),n=0,o=t(this).attr("class").split(/\s+/);t.each(o,function(t,e){var i=e.match(/^dot-height-(\d+)$/);null!==i&&(n=Number(i[1]))});var a=new Object;i&&(a.watch=!0),e&&(a.watch="window"),n>0&&(a.height=n),t(this).dotdotdot(a)})}),jQuery(window).on("load",function(){jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t:t(jQuery,window,document)}(function(t){!function(e){var i="function"==typeof define&&define.amd,n="undefined"!=typeof module&&module.exports,o="https:"==document.location.protocol?"https:":"http:",a="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";i||(n?require("jquery-mousewheel")(t):t.event.special.mousewheel||t("head").append(decodeURI("%3Cscript src="+o+"//"+a+"%3E%3C/script%3E"))),e()}(function(){var e,i="mCustomScrollbar",n="mCS",o=".mCustomScrollbar",a={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},s=0,r={},l=window.attachEvent&&!window.addEventListener?1:0,d=!1,c=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],h={init:function(e){var e=t.extend(!0,{},a,e),i=u.call(this);if(e.live){var l=e.liveSelector||this.selector||o,d=t(l);if("off"===e.live)return void f(l);r[l]=setTimeout(function(){d.mCustomScrollbar(e),"once"===e.live&&d.length&&f(l)},500)}else f(l);return e.setWidth=e.set_width?e.set_width:e.setWidth,e.setHeight=e.set_height?e.set_height:e.setHeight,e.axis=e.horizontalScroll?"x":m(e.axis),e.scrollInertia=e.scrollInertia>0&&e.scrollInertia<17?17:e.scrollInertia,"object"!=typeof e.mouseWheel&&1==e.mouseWheel&&(e.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),e.mouseWheel.scrollAmount=e.mouseWheelPixels?e.mouseWheelPixels:e.mouseWheel.scrollAmount,e.mouseWheel.normalizeDelta=e.advanced.normalizeMouseWheelDelta?e.advanced.normalizeMouseWheelDelta:e.mouseWheel.normalizeDelta,e.scrollButtons.scrollType=v(e.scrollButtons.scrollType),p(e),t(i).each(function(){var i=t(this);if(!i.data(n)){i.data(n,{idx:++s,opt:e,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:i.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var o=i.data(n),a=o.opt,r=i.data("mcs-axis"),l=i.data("mcs-scrollbar-position"),d=i.data("mcs-theme");r&&(a.axis=r),l&&(a.scrollbarPosition=l),d&&(a.theme=d,p(a)),g.call(this),o&&a.callbacks.onCreate&&"function"==typeof a.callbacks.onCreate&&a.callbacks.onCreate.call(this),t("#mCSB_"+o.idx+"_container img:not(."+c[2]+")").addClass(c[2]),h.update.call(null,i)}})},update:function(e,i){var o=e||u.call(this);return t(o).each(function(){var e=t(this);if(e.data(n)){var o=e.data(n),a=o.opt,s=t("#mCSB_"+o.idx+"_container"),r=t("#mCSB_"+o.idx),l=[t("#mCSB_"+o.idx+"_dragger_vertical"),t("#mCSB_"+o.idx+"_dragger_horizontal")];if(!s.length)return;o.tweenRunning&&V(e),i&&o&&a.callbacks.onBeforeUpdate&&"function"==typeof a.callbacks.onBeforeUpdate&&a.callbacks.onBeforeUpdate.call(this),e.hasClass(c[3])&&e.removeClass(c[3]),e.hasClass(c[4])&&e.removeClass(c[4]),r.css("max-height","none"),r.height()!==e.height()&&r.css("max-height",e.height()),w.call(this),"y"===a.axis||a.advanced.autoExpandHorizontalScroll||s.css("width",b(s)),o.overflowed=T.call(this),E.call(this),a.autoDraggerLength&&x.call(this),C.call(this),_.call(this);var d=[Math.abs(s[0].offsetTop),Math.abs(s[0].offsetLeft)];"x"!==a.axis&&(o.overflowed[0]?l[0].height()>l[0].parent().height()?k.call(this):(G(e,d[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(k.call(this),"y"===a.axis?$.call(this):"yx"===a.axis&&o.overflowed[1]&&G(e,d[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==a.axis&&(o.overflowed[1]?l[1].width()>l[1].parent().width()?k.call(this):(G(e,d[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(k.call(this),"x"===a.axis?$.call(this):"yx"===a.axis&&o.overflowed[0]&&G(e,d[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),i&&o&&(2===i&&a.callbacks.onImageLoad&&"function"==typeof a.callbacks.onImageLoad?a.callbacks.onImageLoad.call(this):3===i&&a.callbacks.onSelectorChange&&"function"==typeof a.callbacks.onSelectorChange?a.callbacks.onSelectorChange.call(this):a.callbacks.onUpdate&&"function"==typeof a.callbacks.onUpdate&&a.callbacks.onUpdate.call(this)),Q.call(this)}})},scrollTo:function(e,i){if("undefined"!=typeof e&&null!=e){var o=u.call(this);return t(o).each(function(){var o=t(this);if(o.data(n)){var a=o.data(n),s=a.opt,r={trigger:"external",scrollInertia:s.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},l=t.extend(!0,{},r,i),d=q.call(this,e),c=l.scrollInertia>0&&l.scrollInertia<17?17:l.scrollInertia;d[0]=F.call(this,d[0],"y"),d[1]=F.call(this,d[1],"x"),l.moveDragger&&(d[0]*=a.scrollRatio.y,d[1]*=a.scrollRatio.x),l.dur=ot()?0:c,setTimeout(function(){null!==d[0]&&"undefined"!=typeof d[0]&&"x"!==s.axis&&a.overflowed[0]&&(l.dir="y",l.overwrite="all",G(o,d[0].toString(),l)),null!==d[1]&&"undefined"!=typeof d[1]&&"y"!==s.axis&&a.overflowed[1]&&(l.dir="x",l.overwrite="none",G(o,d[1].toString(),l))},l.timeout)}})}},stop:function(){var e=u.call(this);return t(e).each(function(){var e=t(this);e.data(n)&&V(e)})},disable:function(e){var i=u.call(this);return t(i).each(function(){var i=t(this);if(i.data(n)){i.data(n);Q.call(this,"remove"),$.call(this),e&&k.call(this),E.call(this,!0),i.addClass(c[3])}})},destroy:function(){var e=u.call(this);return t(e).each(function(){var o=t(this);if(o.data(n)){var a=o.data(n),s=a.opt,r=t("#mCSB_"+a.idx),l=t("#mCSB_"+a.idx+"_container"),d=t(".mCSB_"+a.idx+"_scrollbar");s.live&&f(s.liveSelector||t(e).selector),Q.call(this,"remove"),$.call(this),k.call(this),o.removeData(n),J(this,"mcs"),d.remove(),l.find("img."+c[2]).removeClass(c[2]),r.replaceWith(l.contents()),o.removeClass(i+" _"+n+"_"+a.idx+" "+c[6]+" "+c[7]+" "+c[5]+" "+c[3]).addClass(c[4])}})}},u=function(){return"object"!=typeof t(this)||t(this).length<1?o:this},p=function(e){var i=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],n=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],o=["minimal","minimal-dark"],a=["minimal","minimal-dark"],s=["minimal","minimal-dark"];e.autoDraggerLength=!(t.inArray(e.theme,i)>-1)&&e.autoDraggerLength,e.autoExpandScrollbar=!(t.inArray(e.theme,n)>-1)&&e.autoExpandScrollbar,e.scrollButtons.enable=!(t.inArray(e.theme,o)>-1)&&e.scrollButtons.enable,e.autoHideScrollbar=t.inArray(e.theme,a)>-1||e.autoHideScrollbar,e.scrollbarPosition=t.inArray(e.theme,s)>-1?"outside":e.scrollbarPosition},f=function(t){r[t]&&(clearTimeout(r[t]),J(r,t))},m=function(t){return"yx"===t||"xy"===t||"auto"===t?"yx":"x"===t||"horizontal"===t?"x":"y"},v=function(t){return"stepped"===t||"pixels"===t||"step"===t||"click"===t?"stepped":"stepless"},g=function(){var e=t(this),o=e.data(n),a=o.opt,s=a.autoExpandScrollbar?" "+c[1]+"_expand":"",r=["<div id='mCSB_"+o.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+a.theme+" mCSB_scrollTools_vertical"+s+"'><div class='"+c[12]+"'><div id='mCSB_"+o.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+o.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+a.theme+" mCSB_scrollTools_horizontal"+s+"'><div class='"+c[12]+"'><div id='mCSB_"+o.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],l="yx"===a.axis?"mCSB_vertical_horizontal":"x"===a.axis?"mCSB_horizontal":"mCSB_vertical",d="yx"===a.axis?r[0]+r[1]:"x"===a.axis?r[1]:r[0],h="yx"===a.axis?"<div id='mCSB_"+o.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",u=a.autoHideScrollbar?" "+c[6]:"",p="x"!==a.axis&&"rtl"===o.langDir?" "+c[7]:"";a.setWidth&&e.css("width",a.setWidth),a.setHeight&&e.css("height",a.setHeight),a.setLeft="y"!==a.axis&&"rtl"===o.langDir?"989999px":a.setLeft,e.addClass(i+" _"+n+"_"+o.idx+u+p).wrapInner("<div id='mCSB_"+o.idx+"' class='mCustomScrollBox mCS-"+a.theme+" "+l+"'><div id='mCSB_"+o.idx+"_container' class='mCSB_container' style='position:relative; top:"+a.setTop+"; left:"+a.setLeft+";' dir='"+o.langDir+"' /></div>");var f=t("#mCSB_"+o.idx),m=t("#mCSB_"+o.idx+"_container");"y"===a.axis||a.advanced.autoExpandHorizontalScroll||m.css("width",b(m)),"outside"===a.scrollbarPosition?("static"===e.css("position")&&e.css("position","relative"),e.css("overflow","visible"),f.addClass("mCSB_outside").after(d)):(f.addClass("mCSB_inside").append(d),m.wrap(h)),y.call(this);var v=[t("#mCSB_"+o.idx+"_dragger_vertical"),t("#mCSB_"+o.idx+"_dragger_horizontal")];v[0].css("min-height",v[0].height()),v[1].css("min-width",v[1].width())},b=function(e){var i=[e[0].scrollWidth,Math.max.apply(Math,e.children().map(function(){return t(this).outerWidth(!0)}).get())],n=e.parent().width();return i[0]>n?i[0]:i[1]>n?i[1]:"100%"},w=function(){var e=t(this),i=e.data(n),o=i.opt,a=t("#mCSB_"+i.idx+"_container");if(o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis){a.css({width:"auto","min-width":0,"overflow-x":"scroll"});var s=Math.ceil(a[0].scrollWidth);3===o.advanced.autoExpandHorizontalScroll||2!==o.advanced.autoExpandHorizontalScroll&&s>a.parent().width()?a.css({width:s,"min-width":"100%","overflow-x":"inherit"}):a.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(a[0].getBoundingClientRect().right+.4)-Math.floor(a[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},y=function(){var e=t(this),i=e.data(n),o=i.opt,a=t(".mCSB_"+i.idx+"_scrollbar:first"),s=it(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",r=["<a href='#' class='"+c[13]+"' "+s+" />","<a href='#' class='"+c[14]+"' "+s+" />","<a href='#' class='"+c[15]+"' "+s+" />","<a href='#' class='"+c[16]+"' "+s+" />"],l=["x"===o.axis?r[2]:r[0],"x"===o.axis?r[3]:r[1],r[2],r[3]];o.scrollButtons.enable&&a.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])},x=function(){var e=t(this),i=e.data(n),o=t("#mCSB_"+i.idx),a=t("#mCSB_"+i.idx+"_container"),s=[t("#mCSB_"+i.idx+"_dragger_vertical"),t("#mCSB_"+i.idx+"_dragger_horizontal")],r=[o.height()/a.outerHeight(!1),o.width()/a.outerWidth(!1)],d=[parseInt(s[0].css("min-height")),Math.round(r[0]*s[0].parent().height()),parseInt(s[1].css("min-width")),Math.round(r[1]*s[1].parent().width())],c=l&&d[1]<d[0]?d[0]:d[1],h=l&&d[3]<d[2]?d[2]:d[3];s[0].css({height:c,"max-height":s[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":d[0]+"px"}),s[1].css({width:h,"max-width":s[1].parent().width()-10})},C=function(){var e=t(this),i=e.data(n),o=t("#mCSB_"+i.idx),a=t("#mCSB_"+i.idx+"_container"),s=[t("#mCSB_"+i.idx+"_dragger_vertical"),t("#mCSB_"+i.idx+"_dragger_horizontal")],r=[a.outerHeight(!1)-o.height(),a.outerWidth(!1)-o.width()],l=[r[0]/(s[0].parent().height()-s[0].height()),r[1]/(s[1].parent().width()-s[1].width())];i.scrollRatio={y:l[0],x:l[1]}},S=function(t,e,i){var n=i?c[0]+"_expanded":"",o=t.closest(".mCSB_scrollTools");"active"===e?(t.toggleClass(c[0]+" "+n),o.toggleClass(c[1]),t[0]._draggable=t[0]._draggable?0:1):t[0]._draggable||("hide"===e?(t.removeClass(c[0]),o.removeClass(c[1])):(t.addClass(c[0]),o.addClass(c[1])))},T=function(){var e=t(this),i=e.data(n),o=t("#mCSB_"+i.idx),a=t("#mCSB_"+i.idx+"_container"),s=null==i.overflowed?a.height():a.outerHeight(!1),r=null==i.overflowed?a.width():a.outerWidth(!1),l=a[0].scrollHeight,d=a[0].scrollWidth;return l>s&&(s=l),d>r&&(r=d),[s>o.height(),r>o.width()]},k=function(){var e=t(this),i=e.data(n),o=i.opt,a=t("#mCSB_"+i.idx),s=t("#mCSB_"+i.idx+"_container"),r=[t("#mCSB_"+i.idx+"_dragger_vertical"),t("#mCSB_"+i.idx+"_dragger_horizontal")];if(V(e),("x"!==o.axis&&!i.overflowed[0]||"y"===o.axis&&i.overflowed[0])&&(r[0].add(s).css("top",0),G(e,"_resetY")),"y"!==o.axis&&!i.overflowed[1]||"x"===o.axis&&i.overflowed[1]){var l=dx=0;"rtl"===i.langDir&&(l=a.width()-s.outerWidth(!1),dx=Math.abs(l/i.scrollRatio.x)),s.css("left",l),r[1].css("left",dx),G(e,"_resetX")}},_=function(){function e(){s=setTimeout(function(){t.event.special.mousewheel?(clearTimeout(s),N.call(i[0])):e()},100)}var i=t(this),o=i.data(n),a=o.opt;if(!o.bindEvents){if(D.call(this),a.contentTouchScroll&&A.call(this),O.call(this),a.mouseWheel.enable){var s;e()}W.call(this),R.call(this),a.advanced.autoScrollOnFocus&&L.call(this),a.scrollButtons.enable&&z.call(this),a.keyboard.enable&&j.call(this),o.bindEvents=!0}},$=function(){var e=t(this),i=e.data(n),o=i.opt,a=n+"_"+i.idx,s=".mCSB_"+i.idx+"_scrollbar",r=t("#mCSB_"+i.idx+",#mCSB_"+i.idx+"_container,#mCSB_"+i.idx+"_container_wrapper,"+s+" ."+c[12]+",#mCSB_"+i.idx+"_dragger_vertical,#mCSB_"+i.idx+"_dragger_horizontal,"+s+">a"),l=t("#mCSB_"+i.idx+"_container");o.advanced.releaseDraggableSelectors&&r.add(t(o.advanced.releaseDraggableSelectors)),o.advanced.extraDraggableSelectors&&r.add(t(o.advanced.extraDraggableSelectors)),i.bindEvents&&(t(document).add(t(!B()||top.document)).unbind("."+a),r.each(function(){t(this).unbind("."+a)}),clearTimeout(e[0]._focusTimeout),J(e[0],"_focusTimeout"),clearTimeout(i.sequential.step),J(i.sequential,"step"),clearTimeout(l[0].onCompleteTimeout),J(l[0],"onCompleteTimeout"),i.bindEvents=!1)},E=function(e){var i=t(this),o=i.data(n),a=o.opt,s=t("#mCSB_"+o.idx+"_container_wrapper"),r=s.length?s:t("#mCSB_"+o.idx+"_container"),l=[t("#mCSB_"+o.idx+"_scrollbar_vertical"),t("#mCSB_"+o.idx+"_scrollbar_horizontal")],d=[l[0].find(".mCSB_dragger"),l[1].find(".mCSB_dragger")];"x"!==a.axis&&(o.overflowed[0]&&!e?(l[0].add(d[0]).add(l[0].children("a")).css("display","block"),r.removeClass(c[8]+" "+c[10])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&d[0].css("display","none"),r.removeClass(c[10])):(l[0].css("display","none"),r.addClass(c[10])),r.addClass(c[8]))),"y"!==a.axis&&(o.overflowed[1]&&!e?(l[1].add(d[1]).add(l[1].children("a")).css("display","block"),r.removeClass(c[9]+" "+c[11])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&d[1].css("display","none"),r.removeClass(c[11])):(l[1].css("display","none"),r.addClass(c[11])),r.addClass(c[9]))),o.overflowed[0]||o.overflowed[1]?i.removeClass(c[5]):i.addClass(c[5])},I=function(e){var i=e.type,n=e.target.ownerDocument!==document&&null!==frameElement?[t(frameElement).offset().top,t(frameElement).offset().left]:null,o=B()&&e.target.ownerDocument!==top.document&&null!==frameElement?[t(e.view.frameElement).offset().top,t(e.view.frameElement).offset().left]:[0,0];switch(i){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return n?[e.originalEvent.pageY-n[0]+o[0],e.originalEvent.pageX-n[1]+o[1],!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var a=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],s=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[a.screenY,a.screenX,s>1]:[a.pageY,a.pageX,s>1];default:return n?[e.pageY-n[0]+o[0],e.pageX-n[1]+o[1],!1]:[e.pageY,e.pageX,!1]}},D=function(){function e(t,e,n,o){if(p[0].idleTimer=c.scrollInertia<233?250:0,i.attr("id")===u[1])var a="x",l=(i[0].offsetLeft-e+o)*r.scrollRatio.x;else var a="y",l=(i[0].offsetTop-t+n)*r.scrollRatio.y;G(s,l.toString(),{dir:a,drag:!0})}var i,o,a,s=t(this),r=s.data(n),c=r.opt,h=n+"_"+r.idx,u=["mCSB_"+r.idx+"_dragger_vertical","mCSB_"+r.idx+"_dragger_horizontal"],p=t("#mCSB_"+r.idx+"_container"),f=t("#"+u[0]+",#"+u[1]),m=c.advanced.releaseDraggableSelectors?f.add(t(c.advanced.releaseDraggableSelectors)):f,v=c.advanced.extraDraggableSelectors?t(!B()||top.document).add(t(c.advanced.extraDraggableSelectors)):t(!B()||top.document);f.bind("contextmenu."+h,function(t){t.preventDefault()}).bind("mousedown."+h+" touchstart."+h+" pointerdown."+h+" MSPointerDown."+h,function(e){if(e.stopImmediatePropagation(),e.preventDefault(),tt(e)){d=!0,l&&(document.onselectstart=function(){return!1}),M.call(p,!1),V(s),i=t(this);var n=i.offset(),r=I(e)[0]-n.top,h=I(e)[1]-n.left,u=i.height()+n.top,f=i.width()+n.left;r<u&&r>0&&h<f&&h>0&&(o=r,a=h),S(i,"active",c.autoExpandScrollbar)}}).bind("touchmove."+h,function(t){t.stopImmediatePropagation(),t.preventDefault();var n=i.offset(),s=I(t)[0]-n.top,r=I(t)[1]-n.left;e(o,a,s,r)}),t(document).add(v).bind("mousemove."+h+" pointermove."+h+" MSPointerMove."+h,function(t){if(i){var n=i.offset(),s=I(t)[0]-n.top,r=I(t)[1]-n.left;if(o===s&&a===r)return;e(o,a,s,r)}}).add(m).bind("mouseup."+h+" touchend."+h+" pointerup."+h+" MSPointerUp."+h,function(t){i&&(S(i,"active",c.autoExpandScrollbar),i=null),d=!1,l&&(document.onselectstart=null),M.call(p,!0)})},A=function(){function i(t){if(!et(t)||d||I(t)[2])return void(e=0);e=1,C=0,S=0,c=1,T.removeClass("mCS_touch_action");var i=D.offset();h=I(t)[0]-i.top,u=I(t)[1]-i.left,H=[I(t)[0],I(t)[1]]}function o(t){if(et(t)&&!d&&!I(t)[2]&&(_.documentTouchScroll||t.preventDefault(),t.stopImmediatePropagation(),(!S||C)&&c)){v=K();var e=E.offset(),i=I(t)[0]-e.top,n=I(t)[1]-e.left,o="mcsLinearOut";if(O.push(i),N.push(n),H[2]=Math.abs(I(t)[0]-H[0]),H[3]=Math.abs(I(t)[1]-H[1]),k.overflowed[0])var a=A[0].parent().height()-A[0].height(),s=h-i>0&&i-h>-(a*k.scrollRatio.y)&&(2*H[3]<H[2]||"yx"===_.axis);if(k.overflowed[1])var r=A[1].parent().width()-A[1].width(),p=u-n>0&&n-u>-(r*k.scrollRatio.x)&&(2*H[2]<H[3]||"yx"===_.axis);s||p?(R||t.preventDefault(),C=1):(S=1,T.addClass("mCS_touch_action")),R&&t.preventDefault(),y="yx"===_.axis?[h-i,u-n]:"x"===_.axis?[null,u-n]:[h-i,null],D[0].idleTimer=250,k.overflowed[0]&&l(y[0],P,o,"y","all",!0),k.overflowed[1]&&l(y[1],P,o,"x",M,!0)}}function a(t){if(!et(t)||d||I(t)[2])return void(e=0);e=1,t.stopImmediatePropagation(),V(T),m=K();var i=E.offset();p=I(t)[0]-i.top,f=I(t)[1]-i.left,O=[],N=[]}function s(t){if(et(t)&&!d&&!I(t)[2]){c=0,t.stopImmediatePropagation(),C=0,S=0,g=K();var e=E.offset(),i=I(t)[0]-e.top,n=I(t)[1]-e.left;if(!(g-v>30)){w=1e3/(g-m);var o="mcsEaseOut",a=w<2.5,s=a?[O[O.length-2],N[N.length-2]]:[0,0];b=a?[i-s[0],n-s[1]]:[i-p,n-f];var h=[Math.abs(b[0]),Math.abs(b[1])];w=a?[Math.abs(b[0]/4),Math.abs(b[1]/4)]:[w,w];var u=[Math.abs(D[0].offsetTop)-b[0]*r(h[0]/w[0],w[0]),Math.abs(D[0].offsetLeft)-b[1]*r(h[1]/w[1],w[1])];y="yx"===_.axis?[u[0],u[1]]:"x"===_.axis?[null,u[1]]:[u[0],null],x=[4*h[0]+_.scrollInertia,4*h[1]+_.scrollInertia];var T=parseInt(_.contentTouchScroll)||0;y[0]=h[0]>T?y[0]:0,y[1]=h[1]>T?y[1]:0,k.overflowed[0]&&l(y[0],x[0],o,"y",M,!1),k.overflowed[1]&&l(y[1],x[1],o,"x",M,!1)}}}function r(t,e){var i=[1.5*e,2*e,e/1.5,e/2];return t>90?e>4?i[0]:i[3]:t>60?e>3?i[3]:i[2]:t>30?e>8?i[1]:e>6?i[0]:e>4?e:i[2]:e>8?e:i[3]}function l(t,e,i,n,o,a){t&&G(T,t.toString(),{dur:e,scrollEasing:i,dir:n,overwrite:o,drag:a})}var c,h,u,p,f,m,v,g,b,w,y,x,C,S,T=t(this),k=T.data(n),_=k.opt,$=n+"_"+k.idx,E=t("#mCSB_"+k.idx),D=t("#mCSB_"+k.idx+"_container"),A=[t("#mCSB_"+k.idx+"_dragger_vertical"),t("#mCSB_"+k.idx+"_dragger_horizontal")],O=[],N=[],P=0,M="yx"===_.axis?"none":"all",H=[],W=D.find("iframe"),L=["touchstart."+$+" pointerdown."+$+" MSPointerDown."+$,"touchmove."+$+" pointermove."+$+" MSPointerMove."+$,"touchend."+$+" pointerup."+$+" MSPointerUp."+$],R=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;D.bind(L[0],function(t){i(t)}).bind(L[1],function(t){o(t)}),E.bind(L[0],function(t){a(t)}).bind(L[2],function(t){s(t)}),W.length&&W.each(function(){t(this).bind("load",function(){B(this)&&t(this.contentDocument||this.contentWindow.document).bind(L[0],function(t){i(t),a(t)}).bind(L[1],function(t){o(t)}).bind(L[2],function(t){s(t)})})})},O=function(){function i(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function o(t,e,i){c.type=i&&a?"stepped":"stepless",c.scrollAmount=10,U(s,t,e,"mcsLinearOut",i?60:null)}var a,s=t(this),r=s.data(n),l=r.opt,c=r.sequential,h=n+"_"+r.idx,u=t("#mCSB_"+r.idx+"_container"),p=u.parent();u.bind("mousedown."+h,function(t){e||a||(a=1,d=!0)}).add(document).bind("mousemove."+h,function(t){if(!e&&a&&i()){var n=u.offset(),s=I(t)[0]-n.top+u[0].offsetTop,d=I(t)[1]-n.left+u[0].offsetLeft;s>0&&s<p.height()&&d>0&&d<p.width()?c.step&&o("off",null,"stepped"):("x"!==l.axis&&r.overflowed[0]&&(s<0?o("on",38):s>p.height()&&o("on",40)),"y"!==l.axis&&r.overflowed[1]&&(d<0?o("on",37):d>p.width()&&o("on",39)))}}).bind("mouseup."+h+" dragend."+h,function(t){e||(a&&(a=0,o("off",null)),d=!1)})},N=function(){function e(e,n){if(V(i),!H(i,e.target)){var s="auto"!==a.mouseWheel.deltaFactor?parseInt(a.mouseWheel.deltaFactor):l&&e.deltaFactor<100?100:e.deltaFactor||100,c=a.scrollInertia;if("x"===a.axis||"x"===a.mouseWheel.axis)var h="x",u=[Math.round(s*o.scrollRatio.x),parseInt(a.mouseWheel.scrollAmount)],p="auto"!==a.mouseWheel.scrollAmount?u[1]:u[0]>=r.width()?.9*r.width():u[0],f=Math.abs(t("#mCSB_"+o.idx+"_container")[0].offsetLeft),m=d[1][0].offsetLeft,v=d[1].parent().width()-d[1].width(),g="y"===a.mouseWheel.axis?e.deltaY||n:e.deltaX;else var h="y",u=[Math.round(s*o.scrollRatio.y),parseInt(a.mouseWheel.scrollAmount)],p="auto"!==a.mouseWheel.scrollAmount?u[1]:u[0]>=r.height()?.9*r.height():u[0],f=Math.abs(t("#mCSB_"+o.idx+"_container")[0].offsetTop),m=d[0][0].offsetTop,v=d[0].parent().height()-d[0].height(),g=e.deltaY||n;"y"===h&&!o.overflowed[0]||"x"===h&&!o.overflowed[1]||((a.mouseWheel.invert||e.webkitDirectionInvertedFromDevice)&&(g=-g),a.mouseWheel.normalizeDelta&&(g=g<0?-1:1),(g>0&&0!==m||g<0&&m!==v||a.mouseWheel.preventDefault)&&(e.stopImmediatePropagation(),e.preventDefault()),e.deltaFactor<5&&!a.mouseWheel.normalizeDelta&&(p=e.deltaFactor,c=17),G(i,(f-g*p).toString(),{dir:h,dur:c}))}}if(t(this).data(n)){var i=t(this),o=i.data(n),a=o.opt,s=n+"_"+o.idx,r=t("#mCSB_"+o.idx),d=[t("#mCSB_"+o.idx+"_dragger_vertical"),t("#mCSB_"+o.idx+"_dragger_horizontal")],c=t("#mCSB_"+o.idx+"_container").find("iframe");c.length&&c.each(function(){t(this).bind("load",function(){B(this)&&t(this.contentDocument||this.contentWindow.document).bind("mousewheel."+s,function(t,i){e(t,i)})})}),r.bind("mousewheel."+s,function(t,i){e(t,i)})}},P=new Object,B=function(e){var i=!1,n=!1,o=null;if(void 0===e?n="#empty":void 0!==t(e).attr("id")&&(n=t(e).attr("id")),n!==!1&&void 0!==P[n])return P[n];if(e){try{var a=e.contentDocument||e.contentWindow.document;o=a.body.innerHTML}catch(s){}i=null!==o}else{try{var a=top.document;o=a.body.innerHTML}catch(s){}i=null!==o}return n!==!1&&(P[n]=i),i},M=function(t){var e=this.find("iframe");if(e.length){var i=t?"auto":"none";e.css("pointer-events",i)}},H=function(e,i){var o=i.nodeName.toLowerCase(),a=e.data(n).opt.mouseWheel.disableOver,s=["select","textarea"];
return t.inArray(o,a)>-1&&!(t.inArray(o,s)>-1&&!t(i).is(":focus"))},W=function(){var e,i=t(this),o=i.data(n),a=n+"_"+o.idx,s=t("#mCSB_"+o.idx+"_container"),r=s.parent(),l=t(".mCSB_"+o.idx+"_scrollbar ."+c[12]);l.bind("mousedown."+a+" touchstart."+a+" pointerdown."+a+" MSPointerDown."+a,function(i){d=!0,t(i.target).hasClass("mCSB_dragger")||(e=1)}).bind("touchend."+a+" pointerup."+a+" MSPointerUp."+a,function(t){d=!1}).bind("click."+a,function(n){if(e&&(e=0,t(n.target).hasClass(c[12])||t(n.target).hasClass("mCSB_draggerRail"))){V(i);var a=t(this),l=a.find(".mCSB_dragger");if(a.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var d="x",h=n.pageX>l.offset().left?-1:1,u=Math.abs(s[0].offsetLeft)-h*(.9*r.width())}else{if(!o.overflowed[0])return;var d="y",h=n.pageY>l.offset().top?-1:1,u=Math.abs(s[0].offsetTop)-h*(.9*r.height())}G(i,u.toString(),{dir:d,scrollEasing:"mcsEaseInOut"})}})},L=function(){var e=t(this),i=e.data(n),o=i.opt,a=n+"_"+i.idx,s=t("#mCSB_"+i.idx+"_container"),r=s.parent();s.bind("focusin."+a,function(i){var n=t(document.activeElement),a=s.find(".mCustomScrollBox").length,l=0;n.is(o.advanced.autoScrollOnFocus)&&(V(e),clearTimeout(e[0]._focusTimeout),e[0]._focusTimer=a?(l+17)*a:0,e[0]._focusTimeout=setTimeout(function(){var t=[nt(n)[0],nt(n)[1]],i=[s[0].offsetTop,s[0].offsetLeft],a=[i[0]+t[0]>=0&&i[0]+t[0]<r.height()-n.outerHeight(!1),i[1]+t[1]>=0&&i[0]+t[1]<r.width()-n.outerWidth(!1)],d="yx"!==o.axis||a[0]||a[1]?"all":"none";"x"===o.axis||a[0]||G(e,t[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:d,dur:l}),"y"===o.axis||a[1]||G(e,t[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:d,dur:l})},e[0]._focusTimer))})},R=function(){var e=t(this),i=e.data(n),o=n+"_"+i.idx,a=t("#mCSB_"+i.idx+"_container").parent();a.bind("scroll."+o,function(e){0===a.scrollTop()&&0===a.scrollLeft()||t(".mCSB_"+i.idx+"_scrollbar").css("visibility","hidden")})},z=function(){var e=t(this),i=e.data(n),o=i.opt,a=i.sequential,s=n+"_"+i.idx,r=".mCSB_"+i.idx+"_scrollbar",l=t(r+">a");l.bind("contextmenu."+s,function(t){t.preventDefault()}).bind("mousedown."+s+" touchstart."+s+" pointerdown."+s+" MSPointerDown."+s+" mouseup."+s+" touchend."+s+" pointerup."+s+" MSPointerUp."+s+" mouseout."+s+" pointerout."+s+" MSPointerOut."+s+" click."+s,function(n){function s(t,i){a.scrollAmount=o.scrollButtons.scrollAmount,U(e,t,i)}if(n.preventDefault(),tt(n)){var r=t(this).attr("class");switch(a.type=o.scrollButtons.scrollType,n.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===a.type)return;d=!0,i.tweenRunning=!1,s("on",r);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===a.type)return;d=!1,a.dir&&s("off",r);break;case"click":if("stepped"!==a.type||i.tweenRunning)return;s("on",r)}}})},j=function(){function e(e){function n(t,e){s.type=a.keyboard.scrollType,s.scrollAmount=a.keyboard.scrollAmount,"stepped"===s.type&&o.tweenRunning||U(i,t,e)}switch(e.type){case"blur":o.tweenRunning&&s.dir&&n("off",null);break;case"keydown":case"keyup":var r=e.keyCode?e.keyCode:e.which,l="on";if("x"!==a.axis&&(38===r||40===r)||"y"!==a.axis&&(37===r||39===r)){if((38===r||40===r)&&!o.overflowed[0]||(37===r||39===r)&&!o.overflowed[1])return;"keyup"===e.type&&(l="off"),t(document.activeElement).is(h)||(e.preventDefault(),e.stopImmediatePropagation(),n(l,r))}else if(33===r||34===r){if((o.overflowed[0]||o.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type){V(i);var u=34===r?-1:1;if("x"===a.axis||"yx"===a.axis&&o.overflowed[1]&&!o.overflowed[0])var p="x",f=Math.abs(d[0].offsetLeft)-u*(.9*c.width());else var p="y",f=Math.abs(d[0].offsetTop)-u*(.9*c.height());G(i,f.toString(),{dir:p,scrollEasing:"mcsEaseInOut"})}}else if((35===r||36===r)&&!t(document.activeElement).is(h)&&((o.overflowed[0]||o.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type)){if("x"===a.axis||"yx"===a.axis&&o.overflowed[1]&&!o.overflowed[0])var p="x",f=35===r?Math.abs(c.width()-d.outerWidth(!1)):0;else var p="y",f=35===r?Math.abs(c.height()-d.outerHeight(!1)):0;G(i,f.toString(),{dir:p,scrollEasing:"mcsEaseInOut"})}}}var i=t(this),o=i.data(n),a=o.opt,s=o.sequential,r=n+"_"+o.idx,l=t("#mCSB_"+o.idx),d=t("#mCSB_"+o.idx+"_container"),c=d.parent(),h="input,textarea,select,datalist,keygen,[contenteditable='true']",u=d.find("iframe"),p=["blur."+r+" keydown."+r+" keyup."+r];u.length&&u.each(function(){t(this).bind("load",function(){B(this)&&t(this.contentDocument||this.contentWindow.document).bind(p[0],function(t){e(t)})})}),l.attr("tabindex","0").bind(p[0],function(t){e(t)})},U=function(e,i,o,a,s){function r(t){h.snapAmount&&(u.scrollAmount=h.snapAmount instanceof Array?"x"===u.dir[0]?h.snapAmount[1]:h.snapAmount[0]:h.snapAmount);var i="stepped"!==u.type,n=s?s:t?i?m/1.5:v:1e3/60,o=t?i?7.5:40:2.5,l=[Math.abs(p[0].offsetTop),Math.abs(p[0].offsetLeft)],c=[d.scrollRatio.y>10?10:d.scrollRatio.y,d.scrollRatio.x>10?10:d.scrollRatio.x],f="x"===u.dir[0]?l[1]+u.dir[1]*(c[1]*o):l[0]+u.dir[1]*(c[0]*o),g="x"===u.dir[0]?l[1]+u.dir[1]*parseInt(u.scrollAmount):l[0]+u.dir[1]*parseInt(u.scrollAmount),b="auto"!==u.scrollAmount?g:f,w=a?a:t?i?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",y=!!t;return t&&n<17&&(b="x"===u.dir[0]?l[1]:l[0]),G(e,b.toString(),{dir:u.dir[0],scrollEasing:w,dur:n,onComplete:y}),t?void(u.dir=!1):(clearTimeout(u.step),void(u.step=setTimeout(function(){r()},n)))}function l(){clearTimeout(u.step),J(u,"step"),V(e)}var d=e.data(n),h=d.opt,u=d.sequential,p=t("#mCSB_"+d.idx+"_container"),f="stepped"===u.type,m=h.scrollInertia<26?26:h.scrollInertia,v=h.scrollInertia<1?17:h.scrollInertia;switch(i){case"on":if(u.dir=[o===c[16]||o===c[15]||39===o||37===o?"x":"y",o===c[13]||o===c[15]||38===o||37===o?-1:1],V(e),it(o)&&"stepped"===u.type)return;r(f);break;case"off":l(),(f||d.tweenRunning&&u.dir)&&r(!0)}},q=function(e){var i=t(this).data(n).opt,o=[];return"function"==typeof e&&(e=e()),e instanceof Array?o=e.length>1?[e[0],e[1]]:"x"===i.axis?[null,e[0]]:[e[0],null]:(o[0]=e.y?e.y:e.x||"x"===i.axis?null:e,o[1]=e.x?e.x:e.y||"y"===i.axis?null:e),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},F=function(e,i){if(null!=e&&"undefined"!=typeof e){var o=t(this),a=o.data(n),s=a.opt,r=t("#mCSB_"+a.idx+"_container"),l=r.parent(),d=typeof e;i||(i="x"===s.axis?"x":"y");var c="x"===i?r.outerWidth(!1)-l.width():r.outerHeight(!1)-l.height(),u="x"===i?r[0].offsetLeft:r[0].offsetTop,p="x"===i?"left":"top";switch(d){case"function":return e();case"object":var f=e.jquery?e:t(e);if(!f.length)return;return"x"===i?nt(f)[1]:nt(f)[0];case"string":case"number":if(it(e))return Math.abs(e);if(e.indexOf("%")!==-1)return Math.abs(c*parseInt(e)/100);if(e.indexOf("-=")!==-1)return Math.abs(u-parseInt(e.split("-=")[1]));if(e.indexOf("+=")!==-1){var m=u+parseInt(e.split("+=")[1]);return m>=0?0:Math.abs(m)}if(e.indexOf("px")!==-1&&it(e.split("px")[0]))return Math.abs(e.split("px")[0]);if("top"===e||"left"===e)return 0;if("bottom"===e)return Math.abs(l.height()-r.outerHeight(!1));if("right"===e)return Math.abs(l.width()-r.outerWidth(!1));if("first"===e||"last"===e){var f=r.find(":"+e);return"x"===i?nt(f)[1]:nt(f)[0]}return t(e).length?"x"===i?nt(t(e))[1]:nt(t(e))[0]:(r.css(p,e),void h.update.call(null,o[0]))}}},Q=function(e){function i(){return clearTimeout(u[0].autoUpdate),0===r.parents("html").length?void(r=null):void(u[0].autoUpdate=setTimeout(function(){return d.advanced.updateOnSelectorChange&&(l.poll.change.n=a(),l.poll.change.n!==l.poll.change.o)?(l.poll.change.o=l.poll.change.n,void s(3)):d.advanced.updateOnContentResize&&(l.poll.size.n=r[0].scrollHeight+r[0].scrollWidth+u[0].offsetHeight+r[0].offsetHeight+r[0].offsetWidth,l.poll.size.n!==l.poll.size.o)?(l.poll.size.o=l.poll.size.n,void s(1)):!d.advanced.updateOnImageLoad||"auto"===d.advanced.updateOnImageLoad&&"y"===d.axis||(l.poll.img.n=u.find("img").length,l.poll.img.n===l.poll.img.o)?void((d.advanced.updateOnSelectorChange||d.advanced.updateOnContentResize||d.advanced.updateOnImageLoad)&&i()):(l.poll.img.o=l.poll.img.n,void u.find("img").each(function(){o(this)}))},d.advanced.autoUpdateTimeout))}function o(e){function i(t,e){return function(){return e.apply(t,arguments)}}function n(){this.onload=null,t(e).addClass(c[2]),s(2)}if(t(e).hasClass(c[2]))return void s();var o=new Image;o.onload=i(o,n),o.src=e.src}function a(){d.advanced.updateOnSelectorChange===!0&&(d.advanced.updateOnSelectorChange="*");var t=0,e=u.find(d.advanced.updateOnSelectorChange);return d.advanced.updateOnSelectorChange&&e.length>0&&e.each(function(){t+=this.offsetHeight+this.offsetWidth}),t}function s(t){clearTimeout(u[0].autoUpdate),h.update.call(null,r[0],t)}var r=t(this),l=r.data(n),d=l.opt,u=t("#mCSB_"+l.idx+"_container");return e?(clearTimeout(u[0].autoUpdate),void J(u[0],"autoUpdate")):void i()},Y=function(t,e,i){return Math.round(t/e)*e-i},V=function(e){var i=e.data(n),o=t("#mCSB_"+i.idx+"_container,#mCSB_"+i.idx+"_container_wrapper,#mCSB_"+i.idx+"_dragger_vertical,#mCSB_"+i.idx+"_dragger_horizontal");o.each(function(){Z.call(this)})},G=function(e,i,o){function a(t){return l&&d.callbacks[t]&&"function"==typeof d.callbacks[t]}function s(){return[d.callbacks.alwaysTriggerOffsets||y>=x[0]+T,d.callbacks.alwaysTriggerOffsets||y<=-k]}function r(){var t=[p[0].offsetTop,p[0].offsetLeft],i=[b[0].offsetTop,b[0].offsetLeft],n=[p.outerHeight(!1),p.outerWidth(!1)],a=[u.height(),u.width()];e[0].mcs={content:p,top:t[0],left:t[1],draggerTop:i[0],draggerLeft:i[1],topPct:Math.round(100*Math.abs(t[0])/(Math.abs(n[0])-a[0])),leftPct:Math.round(100*Math.abs(t[1])/(Math.abs(n[1])-a[1])),direction:o.dir}}var l=e.data(n),d=l.opt,c={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:d.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},o=t.extend(c,o),h=[o.dur,o.drag?0:o.dur],u=t("#mCSB_"+l.idx),p=t("#mCSB_"+l.idx+"_container"),f=p.parent(),m=d.callbacks.onTotalScrollOffset?q.call(e,d.callbacks.onTotalScrollOffset):[0,0],v=d.callbacks.onTotalScrollBackOffset?q.call(e,d.callbacks.onTotalScrollBackOffset):[0,0];if(l.trigger=o.trigger,0===f.scrollTop()&&0===f.scrollLeft()||(t(".mCSB_"+l.idx+"_scrollbar").css("visibility","visible"),f.scrollTop(0).scrollLeft(0)),"_resetY"!==i||l.contentReset.y||(a("onOverflowYNone")&&d.callbacks.onOverflowYNone.call(e[0]),l.contentReset.y=1),"_resetX"!==i||l.contentReset.x||(a("onOverflowXNone")&&d.callbacks.onOverflowXNone.call(e[0]),l.contentReset.x=1),"_resetY"!==i&&"_resetX"!==i){if(!l.contentReset.y&&e[0].mcs||!l.overflowed[0]||(a("onOverflowY")&&d.callbacks.onOverflowY.call(e[0]),l.contentReset.x=null),!l.contentReset.x&&e[0].mcs||!l.overflowed[1]||(a("onOverflowX")&&d.callbacks.onOverflowX.call(e[0]),l.contentReset.x=null),d.snapAmount){var g=d.snapAmount instanceof Array?"x"===o.dir?d.snapAmount[1]:d.snapAmount[0]:d.snapAmount;i=Y(i,g,d.snapOffset)}switch(o.dir){case"x":var b=t("#mCSB_"+l.idx+"_dragger_horizontal"),w="left",y=p[0].offsetLeft,x=[u.width()-p.outerWidth(!1),b.parent().width()-b.width()],C=[i,0===i?0:i/l.scrollRatio.x],T=m[1],k=v[1],_=T>0?T/l.scrollRatio.x:0,$=k>0?k/l.scrollRatio.x:0;break;case"y":var b=t("#mCSB_"+l.idx+"_dragger_vertical"),w="top",y=p[0].offsetTop,x=[u.height()-p.outerHeight(!1),b.parent().height()-b.height()],C=[i,0===i?0:i/l.scrollRatio.y],T=m[0],k=v[0],_=T>0?T/l.scrollRatio.y:0,$=k>0?k/l.scrollRatio.y:0}C[1]<0||0===C[0]&&0===C[1]?C=[0,0]:C[1]>=x[1]?C=[x[0],x[1]]:C[0]=-C[0],e[0].mcs||(r(),a("onInit")&&d.callbacks.onInit.call(e[0])),clearTimeout(p[0].onCompleteTimeout),X(b[0],w,Math.round(C[1]),h[1],o.scrollEasing),!l.tweenRunning&&(0===y&&C[0]>=0||y===x[0]&&C[0]<=x[0])||X(p[0],w,Math.round(C[0]),h[0],o.scrollEasing,o.overwrite,{onStart:function(){o.callbacks&&o.onStart&&!l.tweenRunning&&(a("onScrollStart")&&(r(),d.callbacks.onScrollStart.call(e[0])),l.tweenRunning=!0,S(b),l.cbOffsets=s())},onUpdate:function(){o.callbacks&&o.onUpdate&&a("whileScrolling")&&(r(),d.callbacks.whileScrolling.call(e[0]))},onComplete:function(){if(o.callbacks&&o.onComplete){"yx"===d.axis&&clearTimeout(p[0].onCompleteTimeout);var t=p[0].idleTimer||0;p[0].onCompleteTimeout=setTimeout(function(){a("onScroll")&&(r(),d.callbacks.onScroll.call(e[0])),a("onTotalScroll")&&C[1]>=x[1]-_&&l.cbOffsets[0]&&(r(),d.callbacks.onTotalScroll.call(e[0])),a("onTotalScrollBack")&&C[1]<=$&&l.cbOffsets[1]&&(r(),d.callbacks.onTotalScrollBack.call(e[0])),l.tweenRunning=!1,p[0].idleTimer=0,S(b,"hide")},t)}}})}},X=function(t,e,i,n,o,a,s){function r(){x.stop||(b||f.call(),b=K()-g,l(),b>=x.time&&(x.time=b>x.time?b+u-(b-x.time):b+u-1,x.time<b+1&&(x.time=b+1)),x.time<n?x.id=p(r):v.call())}function l(){n>0?(x.currVal=h(x.time,w,C,n,o),y[e]=Math.round(x.currVal)+"px"):y[e]=i+"px",m.call()}function d(){u=1e3/60,x.time=b+u,p=window.requestAnimationFrame?window.requestAnimationFrame:function(t){return l(),setTimeout(t,.01)},x.id=p(r)}function c(){null!=x.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(x.id):clearTimeout(x.id),x.id=null)}function h(t,e,i,n,o){switch(o){case"linear":case"mcsLinear":return i*t/n+e;case"mcsLinearOut":return t/=n,t--,i*Math.sqrt(1-t*t)+e;case"easeInOutSmooth":return t/=n/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e);case"easeInOutStrong":return t/=n/2,t<1?i/2*Math.pow(2,10*(t-1))+e:(t--,i/2*(-Math.pow(2,-10*t)+2)+e);case"easeInOut":case"mcsEaseInOut":return t/=n/2,t<1?i/2*t*t*t+e:(t-=2,i/2*(t*t*t+2)+e);case"easeOutSmooth":return t/=n,t--,-i*(t*t*t*t-1)+e;case"easeOutStrong":return i*(-Math.pow(2,-10*t/n)+1)+e;case"easeOut":case"mcsEaseOut":default:var a=(t/=n)*t,s=a*t;return e+i*(.499999999999997*s*a+-2.5*a*a+5.5*s+-6.5*a+4*t)}}t._mTween||(t._mTween={top:{},left:{}});var u,p,s=s||{},f=s.onStart||function(){},m=s.onUpdate||function(){},v=s.onComplete||function(){},g=K(),b=0,w=t.offsetTop,y=t.style,x=t._mTween[e];"left"===e&&(w=t.offsetLeft);var C=i-w;x.stop=0,"none"!==a&&c(),d()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var t=this;t._mTween||(t._mTween={top:{},left:{}});for(var e=["top","left"],i=0;i<e.length;i++){var n=e[i];t._mTween[n].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(t._mTween[n].id):clearTimeout(t._mTween[n].id),t._mTween[n].id=null,t._mTween[n].stop=1)}},J=function(t,e){try{delete t[e]}catch(i){t[e]=null}},tt=function(t){return!(t.which&&1!==t.which)},et=function(t){var e=t.originalEvent.pointerType;return!(e&&"touch"!==e&&2!==e)},it=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},nt=function(t){var e=t.parents(".mCSB_container");return[t.offset().top-e.offset().top,t.offset().left-e.offset().left]},ot=function(){function t(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}var e=t();return!!e&&document[e]};t.fn[i]=function(e){return h[e]?h[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist"):h.init.apply(this,arguments)},t[i]=function(e){return h[e]?h[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist"):h.init.apply(this,arguments)},t[i].defaults=a,window[i]=!0,t(window).bind("load",function(){t(o)[i](),t.extend(t.expr[":"],{mcsInView:t.expr[":"].mcsInView||function(e){var i,n,o=t(e),a=o.parents(".mCSB_container");if(a.length)return i=a.parent(),n=[a[0].offsetTop,a[0].offsetLeft],n[0]+nt(o)[0]>=0&&n[0]+nt(o)[0]<i.height()-o.outerHeight(!1)&&n[1]+nt(o)[1]>=0&&n[1]+nt(o)[1]<i.width()-o.outerWidth(!1)},mcsInSight:t.expr[":"].mcsInSight||function(e,i,n){var o,a,s,r,l=t(e),d=l.parents(".mCSB_container"),c="exact"===n[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(d.length)return o=[l.outerHeight(!1),l.outerWidth(!1)],s=[d[0].offsetTop+nt(l)[0],d[0].offsetLeft+nt(l)[1]],a=[d.parent()[0].offsetHeight,d.parent()[0].offsetWidth],r=[o[0]<a[0]?c[0]:c[1],o[1]<a[1]?c[0]:c[1]],s[0]-a[0]*r[0][0]<0&&s[0]+o[0]-a[0]*r[0][1]>=0&&s[1]-a[1]*r[1][0]<0&&s[1]+o[1]-a[1]*r[1][1]>=0},mcsOverflow:t.expr[":"].mcsOverflow||function(e){var i=t(e).data(n);if(i)return i.overflowed[0]||i.overflowed[1]}})})})}),function(t){function e(t,e){if(8===c){var i=v.width(),n=l.debounce(function(){var t=v.width();i!==t&&(i=t,e())},1);v.on(t,n)}else v.on(t,l.debounce(e,1))}function i(e){var i=e[0],n=i.parentElement;do{var o=window.getComputedStyle(n).getPropertyValue("overflow");if("visible"!==o)break}while(n=n.parentElement);return t(n===document.body?[]:n)}function n(t){window&&window.console&&window.console.error&&window.console.error("jQuery.floatThead: "+t)}function o(t){var e=t.getBoundingClientRect();return e.width||e.right-e.left}function a(){var t=document.createElement("scrolltester");t.style.cssText="width:100px;height:100px;overflow:scroll!important;position:absolute;top:-9999px;display:block",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function s(t){if(t.dataTableSettings)for(var e=0;e<t.dataTableSettings.length;e++){var i=t.dataTableSettings[e].nTable;if(t[0]===i)return!0}return!1}function r(t,e,i){var n=i?"outerWidth":"width";if(f&&t.css("max-width")){var a=0;i&&(a+=parseInt(t.css("borderLeft"),10),a+=parseInt(t.css("borderRight"),10));for(var s=0;s<e.length;s++)a+=o(e.get(s));return a}return t[n]()}t.floatThead=t.floatThead||{},t.floatThead.defaults={headerCellSelector:"tr:visible:first>*:visible",zIndex:1001,position:"auto",top:0,bottom:0,scrollContainer:function(e){return t([])},responsiveContainer:function(e){return t([])},getSizingRow:function(t,e,i){return t.find("tbody tr:visible:first>*:visible")},ariaLabel:function(t,e,i){return e.text()},floatTableClass:"floatThead-table",floatWrapperClass:"floatThead-wrapper",floatContainerClass:"floatThead-container",copyTableClass:!0,autoReflow:!1,debug:!1,support:{bootstrap:!0,datatables:!0,jqueryUI:!0,perfectScrollbar:!0},floatContainerCss:{"overflow-x":"hidden"}};var l=function(){var e={},i=Object.prototype.hasOwnProperty,n=["Arguments","Function","String","Number","Date","RegExp"];e.has=function(t,e){return i.call(t,e)},e.keys=Object.keys||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var i=[];for(var n in t)e.has(t,n)&&i.push(n);return i};var o=0;return e.uniqueId=function(t){var e=++o+"";return t?t+e:e},t.each(n,function(){var t=this;e["is"+t]=function(e){return Object.prototype.toString.call(e)==="[object "+t+"]"}}),e.debounce=function(t,e,i){var n,o,a,s,r;return function(){a=this,o=arguments,s=new Date;var l=function(){var d=new Date-s;d<e?n=setTimeout(l,e-d):(n=null,i||(r=t.apply(a,o)))},d=i&&!n;return n||(n=setTimeout(l,e)),d&&(r=t.apply(a,o)),r}},e}(),d="undefined"!=typeof MutationObserver,c=function(){for(var t=3,e=document.createElement("b"),i=e.all||[];t=1+t,e.innerHTML="<!--[if gt IE "+t+"]><i><![endif]-->",i[0];);return 4<t?t:document.documentMode}(),h=/Gecko\//.test(navigator.userAgent),u=/WebKit\//.test(navigator.userAgent),p=/rtl/i.test(document.documentElement.dir||"");c||h||u||(c=11);var f=function(){if(u){var e=t("<div>").css("width","0").append(t("<table>").css("max-width","100%").append(t("<tr>").append(t("<th>").append(t("<div>").css("min-width","100px").text("X")))));t("body").append(e);var i=0===e.find("table").width();return e.remove(),i}return!1},m=!h&&!c,v=t(window),g=h&&window.matchMedia;if(!window.matchMedia||g){var b=window.onbeforeprint,w=window.onafterprint;window.onbeforeprint=function(){b&&b(),v.triggerHandler("fth-beforeprint")},window.onafterprint=function(){w&&w(),v.triggerHandler("fth-afterprint")}}t.fn.floatThead=function(h){if(h=h||{},c<8)return this;if(l.isFunction(f)&&(f=f()),l.isString(h)){var b=h,w=Array.prototype.slice.call(arguments,1),y=this;return this.filter("table").each(function(){var e=t(this),i=e.data("floatThead-lazy");i&&e.floatThead(i);var n=e.data("floatThead-attached");if(n&&l.isFunction(n[b])){var o=n[b].apply(this,w);void 0!==o&&(y=o)}}),y}var x=t.extend({},t.floatThead.defaults||{},h);if(t.each(h,function(e,i){e in t.floatThead.defaults||!x.debug||n("Used ["+e+"] key to init plugin, but that param is not an option for the plugin. Valid options are: "+l.keys(t.floatThead.defaults).join(", "))}),x.debug){var C=t.fn.jquery.split(".");1===parseInt(C[0],10)&&parseInt(C[1],10)<=7&&n("jQuery version "+t.fn.jquery+" detected! This plugin supports 1.8 or better, or 1.7.x with jQuery UI 1.8.24 -> http://jqueryui.com/resources/download/jquery-ui-1.8.24.zip")}return this.filter(":not(."+x.floatTableClass+")").each(function(){function h(t){return t+".fth-"+N+".floatTHead"}function f(){var e=0;if(H.children("tr:visible").each(function(){e+=t(this).outerHeight(!0)}),"collapse"===P.css("border-collapse")){var i=parseInt(P.css("border-top-width"),10),n=parseInt(P.find("thead tr:first").find(">*:first").css("border-top-width"),10);i>n&&(e-=i/2)}ht.outerHeight(e),ut.outerHeight(e)}function b(){var t=r(P,mt,!0),e=Y?Q:q,i=e.length?o(e[0]):t,n="hidden"!==e.css("overflow-y")?i-j.vertical:i;if(lt.width(n),F){var a=100*t/n;it.css("width",a+"%")}else it.css("width",t+"px")}function w(){L=(l.isFunction(x.top)?x.top(P):x.top)||0,R=(l.isFunction(x.bottom)?x.bottom(P):x.bottom)||0}function y(){var e,i=H.find(x.headerCellSelector);if(at?e=ot.find(st).length:(e=0,i.each(function(){e+=parseInt(t(this).attr("colspan")||1,10)})),e!==U){U=e;var n=[],o=[];ht.empty();for(var a=0;a<e;a++){var s=document.createElement("th"),r=document.createElement("span");r.setAttribute("aria-label",x.ariaLabel(P,i.eq(a),a)),s.appendChild(r),s.className="floatThead-col",ht[0].appendChild(s),n.push("<col/>"),o.push(t("<fthtd>").css({display:"table-cell",height:"0",width:"auto"}))}n=at?ot.html():n.join(""),m&&(rt.empty(),rt.append(o),mt=rt.find("fthtd")),ut=ht.find("th"),at||ot.html(n),pt=ot.find(st),nt.html(n),ft=nt.find(st)}return e}function C(){if(!z){if(z=!0,V){var t=r(P,mt,!0),e=tt.width();t>e&&P.css("minWidth",t)}P.css(bt),it.css(bt),it.append(H),W.before(ct),f()}}function S(){z&&(z=!1,V&&P.width(yt),ct.detach(),P.prepend(H),P.css(wt),it.css(wt),P.css("minWidth",xt),P.css("minWidth",r(P,mt)))}function T(t){Ct!==t&&(Ct=t,P.triggerHandler("floatThead",[t,lt]))}function k(t){V!==t&&(V=t,lt.css({position:V?"absolute":"fixed"}))}function _(t,e,i,n){return m?i:n?x.getSizingRow(t,e,i):e}function $(){var t,e=y();return function(){var i=lt.scrollLeft();pt=ot.find(st);var n=_(P,pt,mt,c);if(n.length===e&&e>0){if(!at)for(t=0;t<e;t++)pt.eq(t).css("width","");S();var a=[];for(t=0;t<e;t++)a[t]=o(n.get(t));for(t=0;t<e;t++)ft.eq(t).width(a[t]),pt.eq(t).width(a[t]);C()}else it.append(H),P.css(wt),it.css(wt),f();lt.scrollLeft(i),P.triggerHandler("reflowed",[lt])}}function E(t){var e=q.css("border-"+t+"-width"),i=0;return e&&~e.indexOf("px")&&(i=parseInt(e,10)),i}function I(){return"auto"===Q.css("overflow-x")}function D(){var t,e=q.scrollTop(),i=0,n=X?G.outerHeight(!0):0,o=K?n:-n,a=lt.height(),s=P.offset(),r=0,l=0;if(F){var d=q.offset();i=s.top-d.top+e,X&&K&&(i+=n),r=E("left"),l=E("top"),i-=l}else t=s.top-L-a+R+j.horizontal;var c=v.scrollTop(),h=v.scrollLeft(),f=function(){return(I()?Q:q).scrollLeft()||0},m=f();return function(d){Y=I();var g=P[0].offsetWidth<=0&&P[0].offsetHeight<=0;if(!g&&dt)return dt=!1,setTimeout(function(){P.triggerHandler("reflow")},1),null;if(g&&(dt=!0,!V))return null;if("windowScroll"===d)c=v.scrollTop(),h=v.scrollLeft();else if("containerScroll"===d)if(Q.length){if(!Y)return;m=Q.scrollLeft()}else e=q.scrollTop(),m=q.scrollLeft();else"init"!==d&&(c=v.scrollTop(),h=v.scrollLeft(),e=q.scrollTop(),m=f());if(!u||!(c<0||p&&h>0||!p&&h<0)){if(et)k("windowScrollDone"===d?!0:!1);else if("windowScrollDone"===d)return null;s=P.offset(),X&&K&&(s.top+=n);var b,w,y=P.outerHeight();if(F&&V){if(i>=e){var x=i-e+l;b=x>0?x:0,T(!1)}else e-i>y-a?b=y-a-e-i:(b=J?l:e,T(!0));w=r}else!F&&V?(c>t+y+o?b=y-a+o+R:s.top>=c+L?(b=0,S(),T(!1)):(b=L+c-s.top+i+(K?n:0),C(),T(!0)),w=m):F&&!V?(i>e||e-i>y?(b=s.top-c,S(),T(!1)):(b=s.top+e-c-i,C(),T(!0)),w=s.left+m-h):F||V||(c>t+y+o?b=y+L-c+t+o:s.top>c+L?(b=s.top-c,C(),T(!1)):(b=L,T(!0)),w=s.left+m-h);return{top:Math.round(b),left:Math.round(w)}}}}function A(){var t=null,e=null,i=null;return function(n,o,a){if(null!=n&&(t!==n.top||e!==n.left)){if(8===c)lt.css({top:n.top,left:n.left});else{var s="translateX("+n.left+"px) translateY("+n.top+"px)",r={"-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s,top:"0",left:"0"};lt.css(r)}t=n.top,e=n.left}o&&b(),a&&f();var l=(Y?Q:q).scrollLeft();V&&i===l||(lt.scrollLeft(l),i=l)}}function O(){if(q.length)if(x.support&&x.support.perfectScrollbar&&q.data().perfectScrollbar)j={horizontal:0,vertical:0};else{if("scroll"===q.css("overflow-x"))j.horizontal=a;else{var t=q.width(),e=r(P,mt),i=n<o?a:0;j.horizontal=t-i<e?a:0}if("scroll"===q.css("overflow-y"))j.vertical=a;else{var n=q.height(),o=P.height(),s=t<e?a:0;j.vertical=n-s<o?a:0}}}var N=l.uniqueId(),P=t(this);if(P.data("floatThead-attached"))return!0;if(!P.is("table"))throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');var B=x.autoReflow&&d,M=null,H=P.children("thead:first"),W=P.children("tbody:first");if(0===H.length||0===W.length)return x.debug&&n(0===H.length?"The thead element is missing.":"The tbody element is missing."),P.data("floatThead-lazy",x),void P.unbind("reflow").one("reflow",function(){P.floatThead(x)});P.data("floatThead-lazy")&&P.unbind("reflow"),P.data("floatThead-lazy",!1);var L,R,z=!0,j={vertical:0,horizontal:0};l.isFunction(a)&&(a=a());var U=0;x.scrollContainer===!0&&(x.scrollContainer=i);var q=x.scrollContainer(P)||t([]),F=q.length>0,Q=F?t([]):x.responsiveContainer(P)||t([]),Y=I(),V=null;"auto"===x.position?V=null:"fixed"===x.position?V=!1:"absolute"===x.position?V=!0:x.debug&&n('Invalid value given to "position" option, valid is "fixed", "absolute" and "auto". You passed: ',x.position),null==V&&(V=F);var G=P.find("caption"),X=1===G.length;if(X)var K="top"===(G.css("caption-side")||G.attr("align")||"top");var Z=t("<fthfoot>").css({display:"table-footer-group","border-spacing":"0",height:"0","border-collapse":"collapse",visibility:"hidden"}),J=!1,tt=t([]),et=c<=9&&!F&&V,it=t("<table/>"),nt=t("<colgroup/>"),ot=P.children("colgroup:first"),at=!0;0===ot.length&&(ot=t("<colgroup/>"),at=!1);var st=at?"col:visible":"col",rt=t("<fthtr>").css({display:"table-row","border-spacing":"0",height:"0","border-collapse":"collapse"}),lt=t("<div>").css(x.floatContainerCss).attr("aria-hidden","true"),dt=!1,ct=t("<thead/>"),ht=t('<tr class="size-row"/>'),ut=t([]),pt=t([]),ft=t([]),mt=t([]);ct.append(ht),P.prepend(ot),m&&(Z.append(rt),P.append(Z)),it.append(nt),lt.append(it),x.copyTableClass&&it.attr("class",P.attr("class")),it.attr({cellpadding:P.attr("cellpadding"),cellspacing:P.attr("cellspacing"),border:P.attr("border")});var vt=P.css("display");if(it.css({borderCollapse:P.css("borderCollapse"),border:P.css("border"),display:vt}),F||it.css("width","auto"),"none"===vt&&(dt=!0),it.addClass(x.floatTableClass).css({margin:"0","border-bottom-width":"0"}),V){var gt=function(e,i){var n=e.css("position"),o="relative"===n||"absolute"===n,a=e;if(!o||i){var s={paddingLeft:e.css("paddingLeft"),paddingRight:e.css("paddingRight")};lt.css(s),a=e.data("floatThead-containerWrap")||e.wrap(t("<div>").addClass(x.floatWrapperClass).css({position:"relative",clear:"both"})).parent(),e.data("floatThead-containerWrap",a),J=!0}return a};F?(tt=gt(q,!0),tt.prepend(lt)):(tt=gt(P),P.before(lt))}else P.before(lt);lt.css({position:V?"absolute":"fixed",marginTop:"0",top:V?"0":"auto",zIndex:x.zIndex,willChange:"transform"}),lt.addClass(x.floatContainerClass),w();var bt={"table-layout":"fixed"},wt={"table-layout":P.css("tableLayout")||"auto"},yt=P[0].style.width||"",xt=P.css("minWidth")||"",Ct=!1;O();var St,Tt=function(){(St=$())()};Tt();var kt=D(),_t=A();_t(kt("init"),!0);var $t=l.debounce(function(){_t(kt("windowScrollDone"),!1)},1),Et=function(){_t(kt("windowScroll"),!1),et&&$t()},It=function(){_t(kt("containerScroll"),!1)},Dt=function(){P.is(":hidden")||(w(),O(),Tt(),kt=D(),(_t=A())(kt("resize"),!0,!0))},At=l.debounce(function(){P.is(":hidden")||(O(),w(),Tt(),kt=D(),_t(kt("reflow"),!0,!0))},1),Ot=function(){S()},Nt=function(){C()},Pt=function(t){t.matches?Ot():Nt()},Bt=null;if(window.matchMedia&&window.matchMedia("print").addListener&&!g?(Bt=window.matchMedia("print"),Bt.addListener(Pt)):(v.on("fth-beforeprint",Ot),v.on("fth-afterprint",Nt)),F?V?q.on(h("scroll"),It):(q.on(h("scroll"),It),v.on(h("scroll"),Et)):(Q.on(h("scroll"),It),v.on(h("scroll"),Et)),v.on(h("load"),At),e(h("resize"),Dt),P.on("reflow",At),x.support&&x.support.datatables&&s(P)&&P.on("filter",At).on("sort",At).on("page",At),x.support&&x.support.bootstrap&&v.on(h("shown.bs.tab"),At),x.support&&x.support.jqueryUI&&v.on(h("tabsactivate"),At),B){var Mt=null;l.isFunction(x.autoReflow)&&(Mt=x.autoReflow(P,q)),Mt||(Mt=q.length?q[0]:P[0]),M=new MutationObserver(function(t){for(var e=function(t){return t&&t[0]&&("THEAD"===t[0].nodeName||"TD"===t[0].nodeName||"TH"===t[0].nodeName)},i=0;i<t.length;i++)if(!e(t[i].addedNodes)&&!e(t[i].removedNodes)){At();break}}),M.observe(Mt,{childList:!0,subtree:!0})}P.data("floatThead-attached",{destroy:function(){var t=".fth-"+N;return S(),P.css(wt),ot.remove(),m&&Z.remove(),ct.parent().length&&ct.replaceWith(H),T(!1),B&&(M.disconnect(),M=null),P.off("reflow reflowed"),q.off(t),Q.off(t),J&&(q.length?q.unwrap():P.unwrap()),F?q.data("floatThead-containerWrap",!1):P.data("floatThead-containerWrap",!1),P.css("minWidth",xt),lt.remove(),P.data("floatThead-attached",!1),v.off(t),v.off("fth-beforeprint fth-afterprint"),Bt&&Bt.removeListener(Pt),Ot=Nt=function(){},function(){return P.floatThead(x)}},reflow:function(){At()},setHeaderHeight:function(){f()},getFloatContainer:function(){return lt},getRowGroups:function(){return z?lt.find(">table>thead").add(P.children("tbody,tfoot")):P.children("thead,tbody,tfoot")}})}),this}}(function(){var t=window.jQuery;return"undefined"!=typeof module&&module.exports&&!t&&(t=require("jquery")),t}()),function(t){function e(e,i){if(t(window).width()<i){var n="";obj_tabs=t(e+" li").toArray(),obj_cont=t(".tab-content .tab-pane").toArray(),jQuery.each(obj_tabs,function(t,e){n+='<div id="'+t+'" class="panel panel-default fr22-panel-years">',n+='<div class="panel-heading" role="tab" id="heading'+t+'">',n+='<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+t+'" aria-expanded="false" aria-controls="collapse'+t+'">'+e.innerText+"</a></h4>",n+="</div>",n+='<div id="collapse'+t+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+t+'">',n+='<div class="panel-body">'+obj_cont[t].innerHTML+"</div>",n+="</div>",n+="</div>"}),t("#accordionYears").html(n),t("#accordionYears").find(".panel-collapse").addClass("in"),t("#accordionYears").find(".panel-title a").attr("aria-expanded","true"),t(e).remove(),t(".tab-content").remove()}}t(document).ready(function(){t("#tabsYears").length&&e("#tabsYears",768)})}(jQuery,Drupal);var init_flexslider;!function(t){var e=!0;t.flexslider=function(i,n){var o=t(i);"undefined"==typeof n.rtl&&"rtl"==t("html").attr("dir")&&(n.rtl=!0),o.vars=t.extend({},t.flexslider.defaults,n);var a,s=o.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&o.vars.touch,d="click touchend MSPointerUp keyup",c="",h="vertical"===o.vars.direction,u=o.vars.reverse,p=o.vars.itemWidth>0,f="fade"===o.vars.animation,m=""!==o.vars.asNavFor,v={};t.data(i,"flexslider",o),v={init:function(){o.animating=!1,o.currentSlide=parseInt(o.vars.startAt?o.vars.startAt:0,10),isNaN(o.currentSlide)&&(o.currentSlide=0),o.animatingTo=o.currentSlide,o.atEnd=0===o.currentSlide||o.currentSlide===o.last,
o.containerSelector=o.vars.selector.substr(0,o.vars.selector.search(" ")),o.slides=t(o.vars.selector,o),o.container=t(o.containerSelector,o),o.count=o.slides.length,o.syncExists=t(o.vars.sync).length>0,"slide"===o.vars.animation&&(o.vars.animation="swing"),o.prop=h?"top":o.vars.rtl?"marginRight":"marginLeft",o.args={},o.manualPause=!1,o.stopped=!1,o.started=!1,o.startTimeout=null,o.transitions=!o.vars.video&&!f&&o.vars.useCSS&&function(){var t=document.createElement("div"),e=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.pfx=e[i].replace("Perspective","").toLowerCase(),o.prop="-"+o.pfx+"-transform",!0;return!1}(),o.ensureAnimationEnd="",""!==o.vars.controlsContainer&&(o.controlsContainer=t(o.vars.controlsContainer).length>0&&t(o.vars.controlsContainer)),""!==o.vars.manualControls&&(o.manualControls=t(o.vars.manualControls).length>0&&t(o.vars.manualControls)),""!==o.vars.customDirectionNav&&(o.customDirectionNav=2===t(o.vars.customDirectionNav).length&&t(o.vars.customDirectionNav)),o.vars.randomize&&(o.slides.sort(function(){return Math.round(Math.random())-.5}),o.container.empty().append(o.slides)),o.doMath(),o.setup("init"),o.vars.controlNav&&v.controlNav.setup(),o.vars.directionNav&&v.directionNav.setup(),o.vars.keyboard&&(1===t(o.containerSelector).length||o.vars.multipleKeyboard)&&t(document).bind("keyup",function(t){var e=t.keyCode;if(!o.animating&&(39===e||37===e)){var i=o.vars.rtl?37===e?o.getTarget("next"):39===e&&o.getTarget("prev"):39===e?o.getTarget("next"):37===e&&o.getTarget("prev");o.flexAnimate(i,o.vars.pauseOnAction)}}),o.vars.mousewheel&&o.bind("mousewheel",function(t,e,i,n){t.preventDefault();var a=e<0?o.getTarget("next"):o.getTarget("prev");o.flexAnimate(a,o.vars.pauseOnAction)}),o.vars.pausePlay&&v.pausePlay.setup(),o.vars.slideshow&&o.vars.pauseInvisible&&v.pauseInvisible.init(),o.vars.slideshow&&(o.vars.pauseOnHover&&o.hover(function(){o.manualPlay||o.manualPause||o.pause()},function(){o.manualPause||o.manualPlay||o.stopped||o.play()}),o.vars.pauseInvisible&&v.pauseInvisible.isHidden()||(o.vars.initDelay>0?o.startTimeout=setTimeout(o.play,o.vars.initDelay):o.play())),m&&v.asNav.setup(),l&&o.vars.touch&&v.touch(),(!f||f&&o.vars.smoothHeight)&&t(window).bind("resize orientationchange focus",v.resize),o.find("img").attr("draggable","false"),setTimeout(function(){o.vars.start(o)},200)},asNav:{setup:function(){o.asNav=!0,o.animatingTo=Math.floor(o.currentSlide/o.move),o.currentItem=o.currentSlide,o.slides.removeClass(s+"active-slide").eq(o.currentItem).addClass(s+"active-slide"),r?(i._slider=o,o.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(t){t.preventDefault(),t.currentTarget._gesture&&t.currentTarget._gesture.addPointer(t.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var i=t(this),n=i.index();t(o.vars.asNavFor).data("flexslider").animating||i.hasClass("active")||(o.direction=o.currentItem<n?"next":"prev",o.flexAnimate(n,o.vars.pauseOnAction,!1,!0,!0))})})):o.slides.on(d,function(e){e.preventDefault();var i,n=t(this),a=n.index();i=o.vars.rtl?-1*(n.offset().right-t(o).scrollLeft()):n.offset().left-t(o).scrollLeft(),i<=0&&n.hasClass(s+"active-slide")?o.flexAnimate(o.getTarget("prev"),!0):t(o.vars.asNavFor).data("flexslider").animating||n.hasClass(s+"active-slide")||(o.direction=o.currentItem<a?"next":"prev",o.flexAnimate(a,o.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){o.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var e,i,n="thumbnails"===o.vars.controlNav?"control-thumbs":"control-paging",a=1;if(o.controlNavScaffold=t('<ol class="'+s+"control-nav "+s+n+'"></ol>'),o.pagingCount>1)for(var r=0;r<o.pagingCount;r++){if(i=o.slides.eq(r),void 0===i.attr("data-thumb-alt")&&i.attr("data-thumb-alt",""),altText=""!==i.attr("data-thumb-alt")?altText=' alt="'+i.attr("data-thumb-alt")+'"':"",e="thumbnails"===o.vars.controlNav?'<img src="'+i.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+a+"</a>","thumbnails"===o.vars.controlNav&&!0===o.vars.thumbCaptions){var l=i.attr("data-thumbcaption");""!==l&&void 0!==l&&(e+='<span class="'+s+'caption">'+l+"</span>")}o.controlNavScaffold.append("<li>"+e+"</li>"),a++}o.controlsContainer?t(o.controlsContainer).append(o.controlNavScaffold):o.append(o.controlNavScaffold),v.controlNav.set(),v.controlNav.active(),o.controlNavScaffold.delegate("a, img",d,function(e){if(e.preventDefault(),""===c||c===e.type){var i=t(this),n=o.controlNav.index(i);i.hasClass(s+"active")||(o.direction=n>o.currentSlide?"next":"prev",o.flexAnimate(n,o.vars.pauseOnAction))}""===c&&(c=e.type),v.setToClearWatchedEvent()})},setupManual:function(){o.controlNav=o.manualControls,v.controlNav.active(),o.controlNav.bind(d,function(e){if(e.preventDefault(),""===c||c===e.type){var i=t(this),n=o.controlNav.index(i);i.hasClass(s+"active")||(n>o.currentSlide?o.direction="next":o.direction="prev",o.flexAnimate(n,o.vars.pauseOnAction))}""===c&&(c=e.type),v.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===o.vars.controlNav?"img":"a";o.controlNav=t("."+s+"control-nav li "+e,o.controlsContainer?o.controlsContainer:o)},active:function(){o.controlNav.removeClass(s+"active").eq(o.animatingTo).addClass(s+"active")},update:function(e,i){o.pagingCount>1&&"add"===e?o.controlNavScaffold.append(t('<li><a href="#">'+o.count+"</a></li>")):1===o.pagingCount?o.controlNavScaffold.find("li").remove():o.controlNav.eq(i).closest("li").remove(),v.controlNav.set(),o.pagingCount>1&&o.pagingCount!==o.controlNav.length?o.update(i,e):v.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+o.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+o.vars.nextText+"</a></li></ul>");o.customDirectionNav?o.directionNav=o.customDirectionNav:o.controlsContainer?(t(o.controlsContainer).append(e),o.directionNav=t("."+s+"direction-nav li a",o.controlsContainer)):(o.append(e),o.directionNav=t("."+s+"direction-nav li a",o)),v.directionNav.update(),o.directionNav.bind(d,function(e){e.preventDefault();var i;""!==c&&c!==e.type||(i=t(this).hasClass(s+"next")?o.getTarget("next"):o.getTarget("prev"),o.flexAnimate(i,o.vars.pauseOnAction)),""===c&&(c=e.type),v.setToClearWatchedEvent()})},update:function(){var t=s+"disabled";1===o.pagingCount?o.directionNav.addClass(t).attr("tabindex","-1"):o.vars.animationLoop?o.directionNav.removeClass(t).removeAttr("tabindex"):0===o.animatingTo?o.directionNav.removeClass(t).filter("."+s+"prev").addClass(t).attr("tabindex","-1"):o.animatingTo===o.last?o.directionNav.removeClass(t).filter("."+s+"next").addClass(t).attr("tabindex","-1"):o.directionNav.removeClass(t).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=t('<div class="'+s+'pauseplay"><a href="#"></a></div>');o.controlsContainer?(o.controlsContainer.append(e),o.pausePlay=t("."+s+"pauseplay a",o.controlsContainer)):(o.append(e),o.pausePlay=t("."+s+"pauseplay a",o)),v.pausePlay.update(o.vars.slideshow?s+"pause":s+"play"),o.pausePlay.bind(d,function(e){e.preventDefault(),""!==c&&c!==e.type||(t(this).hasClass(s+"pause")?(o.manualPause=!0,o.manualPlay=!1,o.pause()):(o.manualPause=!1,o.manualPlay=!0,o.play())),""===c&&(c=e.type),v.setToClearWatchedEvent()})},update:function(t){"play"===t?o.pausePlay.removeClass(s+"pause").addClass(s+"play").html(o.vars.playText):o.pausePlay.removeClass(s+"play").addClass(s+"pause").html(o.vars.pauseText)}},touch:function(){function t(t){t.stopPropagation(),o.animating?t.preventDefault():(o.pause(),i._gesture.addPointer(t.pointerId),C=0,d=h?o.h:o.w,m=Number(new Date),l=p&&u&&o.animatingTo===o.last?0:p&&u?o.limit-(o.itemW+o.vars.itemMargin)*o.move*o.animatingTo:p&&o.currentSlide===o.last?o.limit:p?(o.itemW+o.vars.itemMargin)*o.move*o.currentSlide:u?(o.last-o.currentSlide+o.cloneOffset)*d:(o.currentSlide+o.cloneOffset)*d)}function e(t){t.stopPropagation();var e=t.target._slider;if(e){var n=-t.translationX,o=-t.translationY;return C+=h?o:n,c=(e.vars.rtl?-1:1)*C,w=h?Math.abs(C)<Math.abs(-n):Math.abs(C)<Math.abs(-o),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){i._gesture.stop()}):void((!w||Number(new Date)-m>500)&&(t.preventDefault(),!f&&e.transitions&&(e.vars.animationLoop||(c=C/(0===e.currentSlide&&C<0||e.currentSlide===e.last&&C>0?Math.abs(C)/d+2:1)),e.setProps(l+c,"setTouch"))))}}function n(t){t.stopPropagation();var e=t.target._slider;if(e){if(e.animatingTo===e.currentSlide&&!w&&null!==c){var i=u?-c:c,n=i>0?e.getTarget("next"):e.getTarget("prev");e.canAdvance(n)&&(Number(new Date)-m<550&&Math.abs(i)>50||Math.abs(i)>d/2)?e.flexAnimate(n,e.vars.pauseOnAction):f||e.flexAnimate(e.currentSlide,e.vars.pauseOnAction,!0)}a=null,s=null,c=null,l=null,C=0}}var a,s,l,d,c,m,v,g,b,w=!1,y=0,x=0,C=0;r?(i.style.msTouchAction="none",i._gesture=new MSGesture,i._gesture.target=i,i.addEventListener("MSPointerDown",t,!1),i._slider=o,i.addEventListener("MSGestureChange",e,!1),i.addEventListener("MSGestureEnd",n,!1)):(v=function(t){o.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(o.pause(),d=h?o.h:o.w,m=Number(new Date),y=t.touches[0].pageX,x=t.touches[0].pageY,l=p&&u&&o.animatingTo===o.last?0:p&&u?o.limit-(o.itemW+o.vars.itemMargin)*o.move*o.animatingTo:p&&o.currentSlide===o.last?o.limit:p?(o.itemW+o.vars.itemMargin)*o.move*o.currentSlide:u?(o.last-o.currentSlide+o.cloneOffset)*d:(o.currentSlide+o.cloneOffset)*d,a=h?x:y,s=h?y:x,i.addEventListener("touchmove",g,!1),i.addEventListener("touchend",b,!1))},g=function(t){y=t.touches[0].pageX,x=t.touches[0].pageY,c=h?a-x:(o.vars.rtl?-1:1)*(a-y),w=h?Math.abs(c)<Math.abs(y-s):Math.abs(c)<Math.abs(x-s);var e=500;(!w||Number(new Date)-m>e)&&(t.preventDefault(),!f&&o.transitions&&(o.vars.animationLoop||(c/=0===o.currentSlide&&c<0||o.currentSlide===o.last&&c>0?Math.abs(c)/d+2:1),o.setProps(l+c,"setTouch")))},b=function(t){if(i.removeEventListener("touchmove",g,!1),o.animatingTo===o.currentSlide&&!w&&null!==c){var e=u?-c:c,n=e>0?o.getTarget("next"):o.getTarget("prev");o.canAdvance(n)&&(Number(new Date)-m<550&&Math.abs(e)>50||Math.abs(e)>d/2)?o.flexAnimate(n,o.vars.pauseOnAction):f||o.flexAnimate(o.currentSlide,o.vars.pauseOnAction,!0)}i.removeEventListener("touchend",b,!1),a=null,s=null,c=null,l=null},i.addEventListener("touchstart",v,!1))},resize:function(){!o.animating&&o.is(":visible")&&(p||o.doMath(),f?v.smoothHeight():p?(o.slides.width(o.computedW),o.update(o.pagingCount),o.setProps()):h?(o.viewport.height(o.h),o.setProps(o.h,"setTotal")):(o.vars.smoothHeight&&v.smoothHeight(),o.newSlides.width(o.computedW),o.setProps(o.computedW,"setTotal")))},smoothHeight:function(t){if(!h||f){var e=f?o:o.viewport;t?e.animate({height:o.slides.eq(o.animatingTo).height()},t):e.height(o.slides.eq(o.animatingTo).height())}},sync:function(e){var i=t(o.vars.sync).data("flexslider"),n=o.animatingTo;switch(e){case"animate":i.flexAnimate(n,o.vars.pauseOnAction,!1,!0);break;case"play":i.playing||i.asNav||i.play();break;case"pause":i.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=t(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var t=v.pauseInvisible.getHiddenProp();if(t){var e=t.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(e,function(){v.pauseInvisible.isHidden()?o.startTimeout?clearTimeout(o.startTimeout):o.pause():o.started?o.play():o.vars.initDelay>0?setTimeout(o.play,o.vars.initDelay):o.play()})}},isHidden:function(){var t=v.pauseInvisible.getHiddenProp();return!!t&&document[t]},getHiddenProp:function(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(a),a=setTimeout(function(){c=""},3e3)}},o.flexAnimate=function(e,i,n,a,r){if(o.vars.animationLoop||e===o.currentSlide||(o.direction=e>o.currentSlide?"next":"prev"),m&&1===o.pagingCount&&(o.direction=o.currentItem<e?"next":"prev"),!o.animating&&(o.canAdvance(e,r)||n)&&o.is(":visible")){if(m&&a){var d=t(o.vars.asNavFor).data("flexslider");if(o.atEnd=0===e||e===o.count-1,d.flexAnimate(e,!0,!1,!0,r),o.direction=o.currentItem<e?"next":"prev",d.direction=o.direction,Math.ceil((e+1)/o.visible)-1===o.currentSlide||0===e)return o.currentItem=e,o.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),!1;o.currentItem=e,o.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),e=Math.floor(e/o.visible)}if(o.animating=!0,o.animatingTo=e,i&&o.pause(),o.vars.before(o),o.syncExists&&!r&&v.sync("animate"),o.vars.controlNav&&v.controlNav.active(),p||o.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),o.atEnd=0===e||e===o.last,o.vars.directionNav&&v.directionNav.update(),e===o.last&&(o.vars.end(o),o.vars.animationLoop||o.pause()),f)l?(o.slides.eq(o.currentSlide).css({opacity:0,zIndex:1}),o.slides.eq(e).css({opacity:1,zIndex:2}),o.wrapup(w)):(o.slides.eq(o.currentSlide).css({zIndex:1}).animate({opacity:0},o.vars.animationSpeed,o.vars.easing),o.slides.eq(e).css({zIndex:2}).animate({opacity:1},o.vars.animationSpeed,o.vars.easing,o.wrapup));else{var c,g,b,w=h?o.slides.filter(":first").height():o.computedW;p?(c=o.vars.itemMargin,b=(o.itemW+c)*o.move*o.animatingTo,g=b>o.limit&&1!==o.visible?o.limit:b):g=0===o.currentSlide&&e===o.count-1&&o.vars.animationLoop&&"next"!==o.direction?u?(o.count+o.cloneOffset)*w:0:o.currentSlide===o.last&&0===e&&o.vars.animationLoop&&"prev"!==o.direction?u?0:(o.count+1)*w:u?(o.count-1-e+o.cloneOffset)*w:(e+o.cloneOffset)*w,o.setProps(g,"",o.vars.animationSpeed),o.transitions?(o.vars.animationLoop&&o.atEnd||(o.animating=!1,o.currentSlide=o.animatingTo),o.container.unbind("webkitTransitionEnd transitionend"),o.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(o.ensureAnimationEnd),o.wrapup(w)}),clearTimeout(o.ensureAnimationEnd),o.ensureAnimationEnd=setTimeout(function(){o.wrapup(w)},o.vars.animationSpeed+100)):o.container.animate(o.args,o.vars.animationSpeed,o.vars.easing,function(){o.wrapup(w)})}o.vars.smoothHeight&&v.smoothHeight(o.vars.animationSpeed)}},o.wrapup=function(t){f||p||(0===o.currentSlide&&o.animatingTo===o.last&&o.vars.animationLoop?o.setProps(t,"jumpEnd"):o.currentSlide===o.last&&0===o.animatingTo&&o.vars.animationLoop&&o.setProps(t,"jumpStart")),o.animating=!1,o.currentSlide=o.animatingTo,o.vars.after(o)},o.animateSlides=function(){!o.animating&&e&&o.flexAnimate(o.getTarget("next"))},o.pause=function(){clearInterval(o.animatedSlides),o.animatedSlides=null,o.playing=!1,o.vars.pausePlay&&v.pausePlay.update("play"),o.syncExists&&v.sync("pause")},o.play=function(){o.playing&&clearInterval(o.animatedSlides),o.animatedSlides=o.animatedSlides||setInterval(o.animateSlides,o.vars.slideshowSpeed),o.started=o.playing=!0,o.vars.pausePlay&&v.pausePlay.update("pause"),o.syncExists&&v.sync("play")},o.stop=function(){o.pause(),o.stopped=!0},o.canAdvance=function(t,e){var i=m?o.pagingCount-1:o.last;return!!e||(!(!m||o.currentItem!==o.count-1||0!==t||"prev"!==o.direction)||(!m||0!==o.currentItem||t!==o.pagingCount-1||"next"===o.direction)&&(!(t===o.currentSlide&&!m)&&(!!o.vars.animationLoop||(!o.atEnd||0!==o.currentSlide||t!==i||"next"===o.direction)&&(!o.atEnd||o.currentSlide!==i||0!==t||"next"!==o.direction))))},o.getTarget=function(t){return o.direction=t,"next"===t?o.currentSlide===o.last?0:o.currentSlide+1:0===o.currentSlide?o.last:o.currentSlide-1},o.setProps=function(t,e,i){var n=function(){var i=t?t:(o.itemW+o.vars.itemMargin)*o.move*o.animatingTo,n=function(){if(p)return"setTouch"===e?t:u&&o.animatingTo===o.last?0:u?o.limit-(o.itemW+o.vars.itemMargin)*o.move*o.animatingTo:o.animatingTo===o.last?o.limit:i;switch(e){case"setTotal":return u?(o.count-1-o.currentSlide+o.cloneOffset)*t:(o.currentSlide+o.cloneOffset)*t;case"setTouch":return u?t:t;case"jumpEnd":return u?t:o.count*t;case"jumpStart":return u?o.count*t:t;default:return t}}();return n*-1+"px"}();o.transitions&&(n=h?"translate3d(0,"+n+",0)":"translate3d("+((o.vars.rtl?-1:1)*parseInt(n)+"px")+",0,0)",i=void 0!==i?i/1e3+"s":"0s",o.container.css("-"+o.pfx+"-transition-duration",i),o.container.css("transition-duration",i)),o.args[o.prop]=n,(o.transitions||void 0===i)&&o.container.css(o.args),o.container.css("transform",n)},o.setup=function(e){if(f)o.vars.rtl?o.slides.css({width:"100%","float":"right",marginLeft:"-100%",position:"relative"}):o.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(l?o.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+o.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(o.currentSlide).css({opacity:1,zIndex:2}):0==o.vars.fadeFirstSlide?o.slides.css({opacity:0,display:"block",zIndex:1}).eq(o.currentSlide).css({zIndex:2}).css({opacity:1}):o.slides.css({opacity:0,display:"block",zIndex:1}).eq(o.currentSlide).css({zIndex:2}).animate({opacity:1},o.vars.animationSpeed,o.vars.easing)),o.vars.smoothHeight&&v.smoothHeight();else{var i,n;"init"===e&&(o.viewport=t('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(o).append(o.container),o.cloneCount=0,o.cloneOffset=0,u&&(n=t.makeArray(o.slides).reverse(),o.slides=t(n),o.container.empty().append(o.slides))),o.vars.animationLoop&&!p&&(o.cloneCount=2,o.cloneOffset=1,"init"!==e&&o.container.find(".clone").remove(),o.container.append(v.uniqueID(o.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(v.uniqueID(o.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),o.newSlides=t(o.vars.selector,o),i=u?o.count-1-o.currentSlide+o.cloneOffset:o.currentSlide+o.cloneOffset,h&&!p?(o.container.height(200*(o.count+o.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){o.newSlides.css({display:"block"}),o.doMath(),o.viewport.height(o.h),o.setProps(i*o.h,"init")},"init"===e?100:0)):(o.container.width(200*(o.count+o.cloneCount)+"%"),o.setProps(i*o.computedW,"init"),setTimeout(function(){o.doMath(),o.vars.rtl?o.newSlides.css({width:o.computedW,marginLeft:o.computedM,"float":"right",display:"block"}):o.newSlides.css({width:o.computedW,marginRight:o.computedM,"float":"left",display:"block"}),o.vars.smoothHeight&&v.smoothHeight()},"init"===e?100:0))}p||o.slides.removeClass(s+"active-slide").eq(o.currentSlide).addClass(s+"active-slide"),o.vars.init(o)},o.doMath=function(){var t=o.slides.first(),e=o.vars.itemMargin,i=o.vars.minItems,n=o.vars.maxItems;o.w=void 0===o.viewport?o.width():o.viewport.width(),o.h=t.height(),o.boxPadding=t.outerWidth()-t.width(),p?(o.itemT=o.vars.itemWidth+e,o.itemM=e,o.minW=i?i*o.itemT:o.w,o.maxW=n?n*o.itemT-e:o.w,o.itemW=o.minW>o.w?(o.w-e*(i-1))/i:o.maxW<o.w?(o.w-e*(n-1))/n:o.vars.itemWidth>o.w?o.w:o.vars.itemWidth,o.visible=Math.floor(o.w/o.itemW),o.move=o.vars.move>0&&o.vars.move<o.visible?o.vars.move:o.visible,o.pagingCount=Math.ceil((o.count-o.visible)/o.move+1),o.last=o.pagingCount-1,o.limit=1===o.pagingCount?0:o.vars.itemWidth>o.w?o.itemW*(o.count-1)+e*(o.count-1):(o.itemW+e)*o.count-o.w-e):(o.itemW=o.w,o.itemM=e,o.pagingCount=o.count,o.last=o.count-1),o.computedW=o.itemW-o.boxPadding,o.computedM=o.itemM},o.update=function(t,e){o.doMath(),p||(t<o.currentSlide?o.currentSlide+=1:t<=o.currentSlide&&0!==t&&(o.currentSlide-=1),o.animatingTo=o.currentSlide),o.vars.controlNav&&!o.manualControls&&("add"===e&&!p||o.pagingCount>o.controlNav.length?v.controlNav.update("add"):("remove"===e&&!p||o.pagingCount<o.controlNav.length)&&(p&&o.currentSlide>o.last&&(o.currentSlide-=1,o.animatingTo-=1),v.controlNav.update("remove",o.last))),o.vars.directionNav&&v.directionNav.update()},o.addSlide=function(e,i){var n=t(e);o.count+=1,o.last=o.count-1,h&&u?void 0!==i?o.slides.eq(o.count-i).after(n):o.container.prepend(n):void 0!==i?o.slides.eq(i).before(n):o.container.append(n),o.update(i,"add"),o.slides=t(o.vars.selector+":not(.clone)",o),o.setup(),o.vars.added(o)},o.removeSlide=function(e){var i=isNaN(e)?o.slides.index(t(e)):e;o.count-=1,o.last=o.count-1,isNaN(e)?t(e,o.slides).remove():h&&u?o.slides.eq(o.last).remove():o.slides.eq(e).remove(),o.doMath(),o.update(i,"remove"),o.slides=t(o.vars.selector+":not(.clone)",o),o.setup(),o.vars.removed(o)},v.init()},t(window).blur(function(t){e=!1}).focus(function(t){e=!0}),t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var i=t(this),n=e.selector?e.selector:".slides > li",o=i.find(n);1===o.length&&e.allowOneSlide===!0||0===o.length?(o.fadeIn(400),e.start&&e.start(i)):void 0===i.data("flexslider")&&new t.flexslider(this,e)});var i=t(this).data("flexslider");switch(e){case"play":i.play();break;case"pause":i.pause();break;case"stop":i.stop();break;case"next":i.flexAnimate(i.getTarget("next"),!0);break;case"prev":case"previous":i.flexAnimate(i.getTarget("prev"),!0);break;default:"number"==typeof e&&i.flexAnimate(e,!0)}};var i=[],n=[];getGridSize=function(e){try{return t.trim(e).indexOf(" ")>=0?(e=e.split(" "),1===e.length?parseInt(e[0]):2===e.length?ResponsiveBootstrapToolkit.is("lg")?parseInt(e[0]):parseInt(e[1]):3===e.length?ResponsiveBootstrapToolkit.is("lg")?parseInt(e[0]):ResponsiveBootstrapToolkit.is("md")?parseInt(e[1]):parseInt(e[2]):ResponsiveBootstrapToolkit.is("lg")?parseInt(e[0]):ResponsiveBootstrapToolkit.is("md")?parseInt(e[1]):ResponsiveBootstrapToolkit.is("sm")?parseInt(e[2]):parseInt(e[3])):e}catch(i){console.log(i.message)}},init_flexslider=function(t,e){i[e]={vars:{}},n[e]=t.data("maxItems");var o=t.data();if("1"!==n[e]){var a=getGridSize(n[e]);o.minItems=a,o.maxItems=a;var s=t.find("ul.slides > li").length;s<=a&&(o.directionNav=!1,o.touch=!1)}o.start=function(t){i[e]=t},t.flexslider(o)},t(document).ready(function(){t(".flexslider").each(function(e){init_flexslider(t(this),e)})}),t(window).resize(function(){t(".flexslider").each(function(t){if("1"!==n[t])try{var e=getGridSize(n[t]);i[t].vars.minItems=e,i[t].vars.maxItems=e,i[t].doMath()}catch(o){console.log(o.message)}})})}(jQuery),function(t){t.fn.loadMore=function(e,i){var n=t(this);t.fn.loadMore.defaults={parent:".read-more-wrapper",item:".load-more-item",list:".more-list",animationSpeed:"300",mobileDisplayNum:3},n.options=t.extend({},t.fn.loadMore.defaults,i),n.methods={init:function(){n.addClass("read-more-effect-processed"),n.list_wrapper=n.parent(n.options.parent).prev(n.options.list),n.load_items=n.list_wrapper.find(n.options.item);var e=Math.max.apply(null,n.load_items.map(function(){return t(this).height()}).get());n.load_items.css("height",e),n.items_per_row=n.methods.calculateItemsInRow(n.load_items),n.loaded_items=n.items_per_row,n.itemHight=n.load_items.outerHeight(!0),n.hight=n.itemHight,n.loaded_times=1,n.load_times=Math.ceil(n.load_items.length/n.items_per_row),n.list_wrapper.height(n.methods.calculateHeight(!1)),n.methods.viewElements(),n.on("click.loadMore",function(t){t.preventDefault(),t.stopPropagation(),n.methods.viewNext()}).trigger("click.$"),t(window).resize(function(){n.methods.isFinish()||(n.itemHight=n.load_items.outerHeight(!0),n.list_wrapper.animate({height:n.methods.calculateHeight(!1)},n.options.animationSpeed))})},calculateItemsInRow:function(){var e=0;return n.load_items.each(function(){if(t(this).prev().length>0){if(t(this).position().top!=t(this).prev().position().top)return!1;e++}else e++}),e},isFinish:function(){return n.load_times<=0},calculateHeight:function(t){if(!n.methods.isFinish()&&(n.calculated_loaded_times=n.loaded_times-1?n.loaded_times-1:1,n.hight=t?n.hight+n.itemHight:n.itemHight*n.calculated_loaded_times,window.innerWidth<768)){n.hight=t?n.hight+n.itemHight*n.options.mobileDisplayNum-n.itemHight:n.itemHight*n.calculated_loaded_times*n.options.mobileDisplayNum;var e=n.list_wrapper.find(n.options.item+":not(.loaded-item)").length;e<n.options.mobileDisplayNum&&(n.hight=n.hight-n.itemHight*(n.options.mobileDisplayNum-e))}return n.hight},hideLink:function(){n.animate({opacity:0},n.options.animationSpeed)},showLink:function(){n.animate({opacity:1},n.options.animationSpeed)},distroy:function(){n.load_times=0,n.removeAttr("style").addClass("distroyed"),n.unbind("click.loadMore")},switchLink:function(){n.find("span").toggleClass("hidden")},viewElements:function(){var t=n.items_per_row;window.innerWidth<768&&(t=n.options.mobileDisplayNum);var e=(n.loaded_times-1)*t;n.load_items.slice(e,e+t).animate({opacity:1},n.options.animationSpeed).addClass("loaded-item"),window.innerWidth<768&&(n.load_times=n.load_times-(n.options.mobileDisplayNum-1)),n.loaded_times++,n.load_times--},viewNext:function(){n.methods.hideLink(),n.methods.isFinish()||n.list_wrapper.animate({height:n.methods.calculateHeight(!0)},n.options.animationSpeed,function(){n.methods.viewElements(),n.methods.showLink(),n.methods.isFinish()&&(n.list_wrapper.removeAttr("style"),n.hasClass("hidden-after-more")?n.methods.hideLink():(n.methods.switchLink(),n.methods.showLink()),n.methods.distroy())})}},n.methods.init()}}(jQuery),function(t,e){function i(){var e=[],i=!1,n=0;this.isExpanding=function(){return i},this.setExpandElement=function(i){return e=t(i),this},this.setExpandInProgress=function(t){i=t===!0},this.getExpandElement=function(){return e},this.setBodyOffset=function(t,e){n=t+e-1},this.animateToSectionHeader=function(i){var o=t.extend({offsetAdjustment:0,animationDuration:300,scrollContainer:"html,body",complete:function(){}},i);if(e.length){var a=e.offset().top;({duration:parseInt(o.animationDuration),complete:o.complete});null===o.scrollContainer&&(o.scrollContainer="html,body"),"html,body"!==o.scrollContainer&&(a=o.scrollContainer.scrollTop()+e.position().top,o.offsetAdjustment=o.offsetAdjustment+n),t(o.scrollContainer).animate({scrollTop:a-n+o.offsetAdjustment},i),e=[]}}}e.ToolkitScroll=new i}(jQuery,window),function(t,e){function i(){n(),o(),t("#searchfor").bind("keyup change ",u),t(".toolkit-search-btn-up-down").click(p)}function n(){t("#toolkitt-sidebar-search-btn").on("click",function(){t("#toolkit-search").addClass("active"),t("body").addClass("toolkit-search--active"),t("#searchfor").focus()}),t("#toolkit-search-btn-close").on("click",function(){t("#toolkit-search").removeClass("active"),t("body").removeClass("toolkit-search--active"),t("#searchfor").val(""),t(".toolkit-right-content").removeHighlight(),g.removeClass("overlay")}),g.on("click",function(){g.removeClass("overlay")})}function o(){f={el:null,expandable:null,off_canvas:null},m=0}function a(e,i,n){var o,a=e.length;return a?(t("#searchfor").removeClass("error"),null!==f.el&&(o="next"===i?1:-1,"prev"===i&&0===n&&(n=a),n=(n+o)%a),s(e[n]),n):void t("#searchfor").addClass("error")}function s(e){var i=t(e),n={el:i,expandable:i.parents(".toolkit-more-info").length?i.parents(".toolkit-more-info").first():null,off_canvas:i.parents(".off-canvas-container").length?i.parents(".off-canvas-container").first():null};t(".highlight.active").removeClass("active"),n.el.addClass("active"),null!==f.el&&r(f,n),l(f,n),f=n}function r(t,e){null===t.off_canvas||t.off_canvas.is(e.off_canvas)||c()}function l(i,n){var o=null!==n.expandable,a=!o||n.expandable.hasClass("in"),s=null!==n.off_canvas,r=!s||n.off_canvas.hasClass("active");if(a&&!r)return e.ToolkitScroll.setExpandElement(t('[href="#'+n.off_canvas.attr("id")+'"]')),void e.ToolkitScroll.animateToSectionHeader({complete:function(){h(n.off_canvas),d(n)}});if(a&&r)return void d(n);var l=null===n.off_canvas?function(){e.ToolkitScroll.setExpandElement(n.el),e.ToolkitScroll.animateToSectionHeader()}:function(){e.ToolkitScroll.setExpandElement(t('[href="#'+n.off_canvas.attr("id")+'"]')),e.ToolkitScroll.animateToSectionHeader({complete:function(){h(n.off_canvas),d(n)}})};n.expandable.one("shown.bs.collapse",l).collapse("show")}function d(t){e.ToolkitScroll.setExpandElement(t.el);var i=t.off_canvas;e.ToolkitScroll.animateToSectionHeader({scrollContainer:i})}function c(){t(".off-canvas-container.active").removeClass("active").next(".overlay").fadeOut(),t("body").removeClass("modal-open")}function h(e){e.hasClass("off-canvas-container")&&(e.addClass("active").next(".overlay").fadeIn(),t("body").addClass("modal-open"))}function u(e){var i=t(this).val();t(".toolkit-right-content").removeHighlight(),i.length>3&&(g.removeClass("overlay"),t(".toolkit-right-content").highlight(i),i!==v&&(o(),v=i)),13===e.keyCode&&t(".toolkit-search-btn-down").click()}function p(){"up"===t(this).text()?(m=a(t(".highlight"),"prev",m),console.log("You clicked prev"+m)):(m=a(t(".highlight"),"next",m),console.log("You clicked next"+m))}var f,m=0,v="",g=t("#search-overlay");t.fn.highlight=function(t){function e(t,i){var n=0;if(3===t.nodeType){var o=t.data.toUpperCase().indexOf(i);if(o>=0){var a=document.createElement("span");a.className="highlight";var s=t.splitText(o),r=(s.splitText(i.length),s.cloneNode(!0));a.appendChild(r),s.parentNode.replaceChild(a,s),n=1}}else if(1===t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName))for(var l=0;l<t.childNodes.length;++l)l+=e(t.childNodes[l],i);return n}return this.each(function(){e(this,t.toUpperCase())})},t.fn.removeHighlight=function(){function t(e){for(var i=0,n=e.childNodes,o=n.length;i<o;i++){var a=n[i];if(1!==a.nodeType){if(3===a.nodeType){var s=a.nextSibling;if(null!==s&&3===s.nodeType){var r=a.nodeValue+s.nodeValue;new_node=e.ownerDocument.createTextNode(r),e.insertBefore(new_node,a),e.removeChild(a),e.removeChild(s),i--,o--}}}else t(a)}}return this.find("span.highlight").each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),t(e)}).end()},t(function(){i()})}(jQuery,window),function(t){function e(){t(".view-rpe-companies").length&&t(".view-rpe-companies table").floatThead({top:function(){return(t(".toolbar-tray-horizontal").length?t(".toolbar-tray-horizontal").outerHeight():0)+(t("#toolbar-bar").length?t("#toolbar-bar").outerHeight():0)+(t(".sticky-header").length?t(".sticky-header").outerHeight():0)},zIndex:45,position:"absolute"})}function i(){t(".view-id-rpe_companies .table-responsive").length&&t(".view-id-rpe_companies .table-responsive").mCustomScrollbar({axis:"x",mouseWheelPixels:500,scrollbarPosition:"outside",callbacks:{whileScrolling:function(){t(this).parents(".view-rpe-companies").find("thead th:first-child").css("left",-this.mcs.left),t(this).parents(".view-rpe-companies").find("tbody td:first-child").css("left",-this.mcs.left)}}})}var n,o,a=t("#search-overlay");t(document).ready(function(){function e(t,e){if(t.preventDefault(),t.stopPropagation(),window.innerWidth>=768){var i="60%";window.innerWidth<992&&(i="80%"),e.prev(".form-fields-slide-container").animate({width:i},400)}else e.prev(".form-fields-slide-container").animate({height:"100px"},300);e.prev(".form-fields-slide-container").addClass("sign-slide-processed"),e.removeClass("sign-slide-action")}function i(){t(".fe50-tabs-section").length&&t(".fe50-tabs-section").mCustomScrollbar({axis:"x",mouseWheelPixels:500,scrollbarPosition:"outside"})}function s(){window.innerWidth>=992?t(".top-header-items-wrapper-sm .region-header-links").detach().appendTo(".top-header-links .container"):t(".top-header-links .region-header-links").detach().appendTo(".top-header-items-wrapper-sm");
}function r(){if(t(".signup-form-inline").length){var e=t(".signup-form-inline").attr("action");t(".signup-form-email-input").on("input",function(){t(".signup-form-inline").attr("action",e+"?email="+t(this).val())})}}function l(){t(".table-fr22").length&&t(".table-fr22").floatThead({top:function(){return(t(".toolbar-tray-horizontal").length?t(".toolbar-tray-horizontal").outerHeight():0)+(t("#toolbar-bar").length?t("#toolbar-bar").outerHeight():0)+(t(".sticky-header").length?t(".sticky-header").outerHeight():0)},zIndex:45,position:"absolute"})}function d(){t(".fr22-table-section .table-responsive").mCustomScrollbar({axis:"x",mouseWheelPixels:500,scrollbarPosition:"outside",callbacks:{whileScrolling:function(){t(this).find("thead th:first-child").css("left",-this.mcs.left),t(this).find("tbody td:first-child").css("left",-this.mcs.left)}}})}function c(){t(".rpe-com-heading").length&&t(".rpe-com-benchmark-heading").length&&window.innerWidth>=992?t(".rpe-com-benchmark-heading").css("height",t(".rpe-com-heading").css("height")):t(".rpe-com-benchmark-heading").css("height","auto")}function h(){var e=t(".toolkit-chapter-listing-item"),i=[],n=3;if(window.innerWidth>=768&&window.innerWidth<992)var n=2;for(var o=Math.ceil(e.length/n),a=1;a<=o;a++){i=t(e).slice(a*n-n,a*n);var s=0;t(i).each(function(e,i){var n=t(i).find(".toolkit-chapter-listing-title").removeAttr("style").outerHeight();s=Math.max(n,s)}),t(i).each(function(e,i){t(i).find(".toolkit-chapter-listing-title").animate({height:s},300)})}}function u(){t(".subchapters-collapse-btn").click(function(e){e.preventDefault(),e.stopPropagation();var i=t(".toolkit-chapter-listing-item"),n=t(this).parents(".toolkit-chapter-listing-item"),o=n.index(),a=3;if(window.innerWidth>=768&&window.innerWidth<992)var a=2;var s=Math.ceil((o+1)/a);n=t(i).slice(s*a-a,s*a),t(n).each(function(e,i){t(i).find(".collapse").collapse("toggle")})})}function p(){window.location.href.indexOf("?toolkit-search")>-1&&(t("#toolkit-search").addClass("active"),setTimeout(function(){a.addClass("overlay").fadeIn(),t("#searchfor").focus()},200))}function f(){t(".footnote").popover({trigger:"click",html:!0,animation:!0}).on("mouseenter",function(){var e=this;t(this).popover("show"),t(".popover").on("mouseleave",function(){t(e).popover("hide")})}).on("mouseleave",function(){var e=this;t(".popover:hover").length||t(e).popover("hide")})}function m(){t("#sidebar").mCustomScrollbar({autoHideScrollbar:!0}),t("#sidebar").on("affixed-top.bs.affix",function(){t(this).find("li .nav").collapse("hide")}),t("#sidebar").affix({offset:{top:function(){var e=t("#sidebar").offset().top,i=t(".sticky-header").outerHeight(!0)||0;return this.top=e-i},bottom:function(){return(this.bottom=t(".footer").outerHeight(!0))||0}}})}function v(){var e=0;return t("body").hasClass("toolbar-fixed")&&(e+=39),t("body").hasClass("toolbar-tray-open")&&t("body").hasClass("toolbar-horizontal")&&(e+=40),e}function g(){var e=t(".sticky-header").outerHeight(!0)+v();t("body").scrollspy({target:"#leftCol",offset:e}),t("#leftCol").find("li.active .nav").collapse("show"),t(".panel-title").click(function(){t(this).parents(".toolkit-sidebar").find("li:not(.active) .nav").collapse("hide"),t(this).parent("li.active").find(".nav").collapse("toggle")}),t("#leftCol").on("activate.bs.scrollspy",function(){setTimeout(function(){t("#leftCol").find("li.active .nav").collapse("show"),t("#leftCol").find("li:not(.active) .nav").collapse("hide")},500)})}function b(){t("#dismiss, .overlay").on("click",function(){if(t(".off-canvas-container.active").removeClass("active").next(".overlay").fadeOut(),t("body").removeClass("modal-open"),"function"==typeof window.history.replaceState)history.replaceState({},"",window.location.pathname+window.location.search);else{var e=document.body.scrollTop,i=document.body.scrollLeft;window.location.hash="",document.body.scrollTop=e,document.body.scrollLeft=i}}),t(".off-canvas-btn").on("click",function(){t(this).parents(".off-canvas-cta-wrapper").next(".off-canvas-container").addClass("active").next(".overlay").fadeIn(),t("body").addClass("modal-open")})}function w(){t(".toolkit-more-info").on("show.bs.collapse",function(){window.ToolkitScroll.setExpandElement(t(this).parents(".toolkit-subsection-wrapper").first()),window.ToolkitScroll.setExpandInProgress(!0),0===t(".toolkit-more-info.in").not(this).length&&t(this).one("shown.bs.collapse",function(){window.ToolkitScroll.setExpandInProgress(!1),window.ToolkitScroll.animateToSectionHeader()}),t(".toolkit-subsection-wrapper").each(function(){t(this).find(".toolkit-more-info").collapse("hide")})}),t(".toolkit-more-info").on("hidden.bs.collapse",function(){window.ToolkitScroll.isExpanding()?window.ToolkitScroll.setExpandInProgress(!1):window.ToolkitScroll.setExpandElement(t(this).parents(".toolkit-subsection-wrapper").first()),window.ToolkitScroll.animateToSectionHeader()})}function y(){var e=!1;if(location.hash){var i=t('.off-canvas-btn[href="'+window.location.hash+'"]');0===i.length&&(i=t(location.hash)),0!==i.length&&(t(location.hash).parents(".toolkit-more-info").length&&(e=!0,t(location.hash).parents(".toolkit-more-info").hasClass("in")?(window.ToolkitScroll.setExpandElement(i),window.ToolkitScroll.animateToSectionHeader()):t(location.hash).parents(".toolkit-more-info").collapse("show").one("shown.bs.collapse",function(){window.ToolkitScroll.setExpandElement(i),window.ToolkitScroll.animateToSectionHeader()})),t(location.hash).hasClass("off-canvas-container")&&(t(location.hash).addClass("active").next(".overlay").fadeIn(),t("body").addClass("modal-open")),e||(window.ToolkitScroll.setExpandElement(i),setTimeout(function(){t(".off-canvas-container.active").length&&(t(".off-canvas-container").removeClass("active").next(".overlay").fadeOut(),t("body").removeClass("modal-open")),window.ToolkitScroll.animateToSectionHeader({offsetAdjustment:1})},300)))}}function x(){window.location.hash&&t(window.location.hash).length&&t("html, body").animate({scrollTop:t(window.location.hash).offset().top-t("#navbar").height()-t(".top-header-links").height()-parseFloat(t("body").css("padding-top"))},600)}c(),l(),d(),r(),s(),i(),t(".ajax-tab-link").on("click",function(){var e=t(this).closest(".paragraph--type--ajax-tab-item").attr("id"),i=t("#"+e);i.length&&i.attr("id",""),window.location.hash=e,i.length&&i.attr("id",e),t("#ajax-load-entity").css("opacity","0.5"),t("#ajax-load-entity").css("pointer-events","none"),t("#ajax-load-entity").append('<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'),t(".ajax-tab-link").removeClass("active"),t(this).addClass("active")}),!t("#ajax-load-entity").length||t("#ajax-load-entity").html().trim().length||t(window.location.hash).hasClass("ajax-tab-link-wrapper")?t("#ajax-load-entity").length&&!t("#ajax-load-entity").html().trim().length&&t(window.location.hash).hasClass("ajax-tab-link-wrapper")&&(t(".field--name-field-tabs "+window.location.hash+" .ajax-tab-link").click(),t(".field--name-field-tabs "+window.location.hash+" .ajax-tab-link").addClass("active")):(t(".field--name-field-tabs > div:first-child .ajax-tab-link").click(),t(".field--name-field-tabs > div:first-child .ajax-tab-link").addClass("active")),t("body").on("click",".industry-body-readmore",function(e){e.preventDefault(),t(this).hasClass("more")?(t(this).siblings(".industry-body").slideDown(),t(this).removeClass("more")):(t(this).siblings(".industry-body").slideUp(),t(this).addClass("more")),setTimeout(function(){t(".view-fe50-companies table").floatThead("reflow")},400)}),t(".block-search-form-block input[type='search']").tooltip("destroy"),t(".whatwedo-item-content-wrapper .field--name-field-paragraph-title").dotdotdot(),t(".rpe-page-widget-subtitle").dotdotdot(),t(".rpe-page-widget-title").dotdotdot(),t(".news-title.summary").dotdotdot(),t(".companies-list-select.agencies").selectpicker({liveSearch:!0,liveSearchPlaceholder:"Search for agency",mobile:!!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)}),t(".companies-list-select").selectpicker({liveSearch:!0,liveSearchPlaceholder:"Search for a company",mobile:!!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)}),t("select.companies-list-select").on("change",function(){var e=t(this).find("option:selected").attr("data-href");window.location.href=e}),t(".region-navigation-collapsible ul a").removeAttr("data-target"),setTimeout(function(){t(".region-navigation-collapsible ul.menu").addClass("navbar-nav"),t(".region-navigation-collapsible ul a[href*='#']").removeClass("is-active"),window.innerWidth>=992?(t(".region-navigation-collapsible ul a").removeAttr("data-toggle"),t(".region-navigation-collapsible ul .dropdown-menu").find(".sub-navbar-menu-wrapper").children().unwrap(),t(".region-navigation-collapsible ul .dropdown-menu").wrapInner("<div class='container sub-navbar-menu-wrapper'></div>"),t(".children-item-level-3").mouseenter(function(){t(this).find(".children-level-3 > div > li.expanded").first().addClass("opened")}),t(".children-level-3 > div > li").mouseenter(function(){t(".children-level-3 > div > li.expanded").first().removeClass("opened"),t(this).addClass("opened")}).mouseleave(function(){t(this).removeClass("opened"),t(".children-level-3 > div > li.expanded").first().addClass("opened")})):(t(".region-navigation-collapsible ul .dropdown-menu").wrapInner("<div class='container sub-navbar-menu-wrapper'></div>"),t(".region-navigation-collapsible .caret").on("click",function(e){e.preventDefault(),e.stopPropagation(),t(this).closest("li").hasClass("dropdown-open")?(t(this).closest("li").children("ul").slideUp(),t(this).closest("li").removeClass("dropdown-open")):(t(this).closest("li").children("ul").slideDown(),t(this).closest("li").addClass("dropdown-open"))}))},200),t(window).scroll(function(){t(window).scrollTop()>0?t(".sticky-header").addClass("scroll"):t(".sticky-header").removeClass("scroll")}),t(window).on("load",function(){t("#toolkit-interior-wrapper").length||t(".roadmap-section-expectation-wrapper").length||t(window.location.hash).length&&!t(window.location.hash).hasClass("ajax-tab-link-wrapper")&&x()}),t(window).on("hashchange",function(){t("#toolkit-interior-wrapper").length?y():t(".roadmap-section-expectation-wrapper").length||x()}),t(".jumper, .region-navigation-collapsible ul a[href*='#']").click(function(e){var i=t(this);t(i.attr("href").substr(i.attr("href").indexOf("#"))).length&&(e.preventDefault(),e.stopPropagation());try{var a=0;window.innerWidth<=991&&t("#navbar-collapse").hasClass("in")&&(a=300,t("#navbar-collapse").collapse("hide")),setTimeout(function(){t("body, html").stop().animate({scrollTop:t(i.attr("href").substr(i.attr("href").indexOf("#"))).offset().top-o-n+1},600)},a)}catch(s){console.log(s)}});var C=t("section.issue-issues"),S=t(".region-navigation-collapsible ul"),T=t("#navbar-collapse").outerHeight();t(window).on("scroll",function(){var e=t(this).scrollTop();C.each(function(){var i=t(this).offset().top-1-T-parseFloat(t("body").css("padding-top")),n=i+t(this).outerHeight();e>=i&&e<=n&&(S.find('a[href*="#"]').removeClass("is-active"),C.removeClass("is-active"),t(this).addClass("is-active"),S.find('a[href*="#'+t(this).attr("id")+'"]').addClass("is-active"))})}),t(".form-textarea-wrapper + label").detach().appendTo(".form-textarea-wrapper"),window.innerWidth<992&&(t(".navbar-collapse").on("shown.bs.collapse",function(){(t(".sticky-header").hasClass("affix")||t(".sticky-header").hasClass("affix-top"))&&(t(".sticky-header").addClass("scroll").removeClass("affix"),t("html, body").animate({scrollTop:0},0))}),t(".navbar-collapse").on("hidden.bs.collapse",function(){(t(".sticky-header").hasClass("affix")||t(".sticky-header").hasClass("affix-top"))&&t(".sticky-header").removeClass("scroll")})),t(".search-form-wrapper").on("shown.bs.collapse",function(){t(this).find("input[type='search']").focus()}),t(".block-search-form-block input[type='search']").on("focus",function(){t(this).parents("form").addClass("focused")}),t(".block-search-form-block input[type='search']").on("blur",function(){t(this).parents("form").removeClass("focused")}),t(".subscribr-btn").click(function(i){t(this).hasClass("sign-slide-action")?e(i,t(this)):t(this).unbind("slide_effect")}),t(".read-more-effect").each(function(){t(this).loadMore()}),t("#video-popup").on("show.bs.modal",function(){t("#videoIframe")[0].src+="&autoplay=1"}),t("#video-popup").on("hide.bs.modal",function(e){var i=t("#videoIframe")[0].src;i=i.replace("&autoplay=1",""),t("#videoIframe")[0].src=i}),t(".event-title").hover(function(){t(this).parents(".event-data-container").prev("a.event-date-container").toggleClass("hovered")}),t(".roadmap-resource-item a").hover(function(){t(this).parents(".borderd-item-before").toggleClass("hovered")}),t(".not-logged").click(function(e){e.preventDefault(),e.stopPropagation(),t(".not-logged-message-wrapper").stop(!0,!0).slideDown("slow"),t(document).scrollTop()+t(window).height()<=t(".not-logged-message-wrapper").offset().top+50&&t("body, html").stop().animate({scrollTop:t(document).scrollTop()+172},500)}),t("#jquery_jplayer_1").length&&t(document).ready(function(){var e=t("#jquery_jplayer_1"),i=e.data("url").substr(e.data("url").lastIndexOf(".")+1),n={title:e.attr("title")};n[i]=e.data("url"),t("#jquery_jplayer_1").jPlayer({ready:function(){t(this).jPlayer("setMedia",n)},cssSelectorAncestor:"#jp_container_1",swfPath:"../jplayer/js",supplied:i,useStateClassSkin:!0,autoBlur:!1,smoothPlayBar:!0,keyEnabled:!0,remainingDuration:!0,toggleDuration:!0})}),n=v(),o=t("#navbar").height(),t("#toolkit-interior-wrapper").length&&(m(),g(),w(),f(),y(),void 0!==window.ToolkitScroll&&window.ToolkitScroll.setBodyOffset(n,o),p()),b(),h(),u(),t(window).resize(function(){h(),c(),s()})}),Drupal.behaviors.tables={attach:function(t,n){i(),e()}}}(jQuery,Drupal),function(t){"use strict";function e(t,e){return"asc"===e?t.sort(function(t,e){var i=t.title.toLowerCase(),n=e.title.toLowerCase();return i>n?1:i<n?-1:0}):t.sort(function(t,e){var i=t.title.toLowerCase(),n=e.title.toLowerCase();return i<n?1:i>n?-1:0})}function i(){if(t(".view-fe50-companies").length){var e=10;t(".view-fe50-companies table").floatThead({top:function(){return(t(".toolbar-tray-horizontal").length?t(".toolbar-tray-horizontal").outerHeight():0)+(t("#toolbar-bar").length?t("#toolbar-bar").outerHeight():0)+(t(".sticky-header").length?t(".sticky-header").outerHeight():0)-e},zIndex:45,position:"absolute"})}}function n(){t(".view-fe50-companies .table-responsive").length&&t(".view-fe50-companies .table-responsive").mCustomScrollbar({axis:"x",mouseWheelPixels:500,scrollbarPosition:"outside",callbacks:{whileScrolling:function(){t(this).parents(".view-fe50-companies").find("thead th:first-child").css("left",-this.mcs.left),t(this).parents(".view-fe50-companies").find("tbody td:first-child").css("left",-this.mcs.left)}}})}Drupal.behaviors.ceres={attach:function(o,a){if(t("#ajax-load-entity .flexslider").length&&t("#ajax-load-entity .flexslider").each(function(e){init_flexslider(t(this),e)}),t("select.ceres-custom-select").selectpicker({style:"rltv",template:{caret:'<i class="fa fa-angle-down" aria-hidden="true"></i>'}}),t(".expert-name",o).length&&t(".expert-name",o).once().hover(function(){t(this).parents(".expert-content").prev("a.expert-image-wrapper").toggleClass("hovered")}),t(".paragraph--type--fe50-companies").length&&!t(".view-fe50-companies tbody").html().trim().length){var s,r,l;t("select.industries-select").selectpicker({size:5,mobile:!!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)}),t.ajax({url:"/fe50/subindustries",type:"GET",async:!1,success:function(e){s=e,e.forEach(function(e){t("select.industries-select").append('<option value="'+e.tid+'">'+e.name+"</option>")})}}),t.ajax({url:"/fe50/companies",type:"GET",async:!1,success:function(e){r=l=e,e.forEach(function(e){t(".table-company-assessment tbody").append('<tr><td class="views-field-title">'+e.title+'</td><td class="views-field-emissions-disclosure"><i class="icon-fe50-'+e.field_fe50_i1+'"></i></td><td class="views-field-emissions-reduction-target"><i class="icon-fe50-'+e.field_fe50_i2+'"></i></td></tr>')}),t(".industries-select").selectpicker("refresh")}}),t(".table-btn-sort").on("click",function(){t(".view-fe50-companies").css("opacity","0.5"),t(".view-fe50-companies").css("pointer-events","none"),t(".table-loader").append('<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');var i=t(this).attr("data-sort");"asc"===i?(t(this).attr("data-sort","desc"),t(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-up")):(t(this).attr("data-sort","asc"),t(this).find("i").removeClass("fa-caret-up").addClass("fa-caret-down"));var n=e(l.slice(0),i);setTimeout(function(){t(".table-company-assessment tbody tr").remove(),n.forEach(function(e){t(".table-company-assessment tbody").append('<tr><td class="views-field-title">'+e.title+'</td><td class="views-field-emissions-disclosure"><i class="icon-fe50-'+e.field_fe50_i1+'"></i></td><td class="views-field-emissions-reduction-target"><i class="icon-fe50-'+e.field_fe50_i2+'"></i></td></tr>')}),t(".view-fe50-companies").css("opacity","1"),t(".view-fe50-companies").css("pointer-events","auto"),t(".table-loader .spinner").remove()},300)}),t("select.industries-select").on("changed.bs.select",function(e,i,n,o){var a=this,d={};t(".industry-summary").css("opacity","0.5"),t(".industry-body").css("opacity","0.5"),t(".industry-body-readmore").css("opacity","0.5"),t(".view-fe50-companies").css("opacity","0.5"),t(".view-fe50-companies").css("pointer-events","none"),t(".table-loader").append('<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'),"all"==a.value?(l=r,d.field_summary="",d.body=""):(l=r.filter(function(t){return t.field_fe50_subindustry==a.value}),d=s.find(function(t){return t.tid===a.value})),setTimeout(function(){t(".table-company-assessment tbody tr").remove(),l.forEach(function(e){t(".table-company-assessment tbody").append('<tr><td class="views-field-title">'+e.title+'</td><td class="views-field-emissions-disclosure"><i class="icon-fe50-'+e.field_fe50_i1+'"></i></td><td class="views-field-emissions-reduction-target"><i class="icon-fe50-'+e.field_fe50_i2+'"></i></td></tr>')}),t(".industry-body-readmore").text(t(".industry-body-readmore").data("more")),t(".industry-summary").css("opacity","1"),t(".industry-body").css("opacity","1"),t(".industry-body").hide(),t(".industry-body-readmore").css("opacity","1"),t(".industry-body-readmore").addClass("more"),t(".view-fe50-companies").css("opacity","1"),t(".view-fe50-companies").css("pointer-events","auto"),t(".table-btn-sort").attr("data-sort","desc"),t(".table-btn-sort").find("i").removeClass("fa-caret-down").addClass("fa-caret-up"),t(".industry-summary").html(d.field_summary),t(".industry-body").html(d.body),d.body.length?t(".industry-body-readmore").css("display","inline-block"):t(".industry-body-readmore").css("display","none"),t(".table-loader .spinner").remove(),t(".view-fe50-companies table").floatThead("reflow")},500)}),n(),i()}}}}(jQuery),function(t,e){function i(e){e=e||1e4,setTimeout(function(){var e=t(".lead-generation-modal");e.modal("show"),t(".lead-generation-modal").on("hide.bs.modal",function(){o||(t('[id^="lead-generation-form-wrapper"]').detach().appendTo("#replacement--lead-generation-form-wrapper"),t(".lead-generation-section").removeClass("hidden"),setTimeout(function(){e.remove()},500))})},e)}function n(t,e){var i=new RegExp("[?&]"+e+"=([^&#]*)").exec(t);return null==i?null:decodeURI(i[1])||0}var o=!1;t("lead-generation-modal").length&&i(),t(document).ajaxSend(function(e,i,o){n(o.url,"utm_source")&&n(o.url,"utm_term")&&(t("#lead-gen-form-wrap form").addClass("dimmed"),t('[id^="lead-generation-form-wrapper"] .spinner').removeClass("hidden"))}),e.AjaxCommands.prototype.leadGeneration=function(t,e,i){o=!0},e.AjaxCommands.prototype.ajaxDismiss=function(e,i,n){t('[id^="lead-generation-form-wrapper"] .spinner').remove()}}(jQuery,Drupal);;
/**
 * @file
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, drupalSettings) {
    if (!drupalSettings.data.hasOwnProperty('extlink')) {
      return;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the
    // icon, defaults to 'append'.
    var extIconPlacement = 'append';
    if (drupalSettings.data.extlink.extIconPlacement && drupalSettings.data.extlink.extIconPlacement != '0') {
          extIconPlacement = drupalSettings.data.extlink.extIconPlacement;
        }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3$6');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (drupalSettings.data.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Whitelisted domains.
    var whitelistedDomains = false;
    if (drupalSettings.data.extlink.whitelistedDomains) {
      whitelistedDomains = [];
      for (var i = 0; i < drupalSettings.data.extlink.whitelistedDomains.length; i++) {
        whitelistedDomains.push(new RegExp('^https?:\\/\\/' + drupalSettings.data.extlink.whitelistedDomains[i].replace(/(\r\n|\n|\r)/gm,'') + '.*$', 'i'));
      }
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (drupalSettings.data.extlink.extInclude) {
      extInclude = new RegExp(drupalSettings.data.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (drupalSettings.data.extlink.extExclude) {
      extExclude = new RegExp(drupalSettings.data.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (drupalSettings.data.extlink.extCssExclude) {
      extCssExclude = drupalSettings.data.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (drupalSettings.data.extlink.extCssExplicit) {
      extCssExplicit = drupalSettings.data.extlink.extCssExplicit;
    }

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not([data-extlink]), area:not([data-extlink])', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!internal_link.test(url) && !(extExclude && extExclude.test(url))) || (extInclude && extInclude.test(url)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          var match = false;
          if (whitelistedDomains) {
            for (var i = 0; i < whitelistedDomains.length; i++) {
              if (whitelistedDomains[i].test(url)) {
                match = true;
                break;
              }
            }
          }
          if (!match) {
            external_links.push(this);
          }
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (drupalSettings.data.extlink.extClass !== '0' && drupalSettings.data.extlink.extClass !== '') {
      Drupal.extlink.applyClassAndSpan(external_links, drupalSettings.data.extlink.extClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.mailtoClass !== '0' && drupalSettings.data.extlink.mailtoClass !== '') {
      Drupal.extlink.applyClassAndSpan(mailto_links, drupalSettings.data.extlink.mailtoClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).filter(function () {
        // Filter out links with target set if option specified.
        return !(drupalSettings.data.extlink.extTargetNoOverride && $(this).is('a[target]'));
      }).attr({target: '_blank'});

      // Add noopener rel attribute to combat phishing.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the value noopener.
        if (val === null || typeof val === 'undefined') {
          return 'noopener';
        }
        // Check to see if rel contains noopener. Add what doesn't exist.
        if (val.indexOf('noopener') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          // Noopener exists. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener to val.
        else {
          return val + ' noopener';
        }
      });
    }

    if (drupalSettings.data.extlink.extNofollow) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'nofollow'.
        if (val === null || typeof val === 'undefined') {
          return 'nofollow';
        }
        var target = 'nofollow';
        // Change the target, if not overriding follow.
        if (drupalSettings.data.extlink.extFollowNoOverride) {
          target = 'follow';
        }
        if (val.indexOf(target) === -1) {
          return val + ' nofollow';
        }
        return val;
      });
    }

    if (drupalSettings.data.extlink.extNoreferrer) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'noreferrer'.
        if (val === null || typeof val === 'undefined') {
          return 'noreferrer';
        }
        if (val.indexOf('noreferrer') === -1) {
          return val + ' noreferrer';
        }
        return val;
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (drupalSettings.data.extlink.extAlert) {
        return confirm(drupalSettings.data.extlink.extAlertText);
      }
    };

    $(external_links).off("click.extlink");
    $(external_links).on("click.extlink", function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (drupalSettings.data.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img, svg').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }

    if (class_name !== '0') {
      $links_to_process.addClass(class_name);
    }

    // Add data-extlink attribute.
    $links_to_process.attr('data-extlink', '');

    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if (drupalSettings.data.extlink.extUseFontAwesome) {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaMailtoClasses + '" title="' + drupalSettings.data.extlink.mailtoLabel + '"></span><span class="visually-hidden">' + drupalSettings.data.extlink.mailtoLabel + '</span></span>');
        }
        else {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaLinkClasses + '" title="' + drupalSettings.data.extlink.extLabel + '"></span><span class="visually-hidden">' + drupalSettings.data.extlink.extLabel + '</span></span>');
        }
      }
      else {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.mailtoLabel + '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>');
        }
        else {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.extLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.extLabel + '</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, drupalSettings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, drupalSettings);
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Bootstrap Popovers.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  /**
   * Extend the Bootstrap Popover plugin constructor class.
   */
  Bootstrap.extendPlugin('popover', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.popover_animation,
        html: !!settings.popover_html,
        placement: settings.popover_placement,
        selector: settings.popover_selector,
        trigger: settings.popover_trigger,
        triggerAutoclose: !!settings.popover_trigger_autoclose,
        title: settings.popover_title,
        content: settings.popover_content,
        delay: parseInt(settings.popover_delay, 10),
        container: settings.popover_container
      }
    };
  });

  /**
   * Bootstrap Popovers.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapPopovers = {
    attach: function (context) {

      // Popover autoclose.
      if ($.fn.popover.Constructor.DEFAULTS.triggerAutoclose) {
        var $currentPopover = null;
        $(document)
          .on('show.bs.popover', '[data-toggle=popover]', function () {
            var $trigger = $(this);
            var popover = $trigger.data('bs.popover');

            // Only keep track of clicked triggers that we're manually handling.
            if (popover.options.originalTrigger === 'click') {
              if ($currentPopover && !$currentPopover.is($trigger)) {
                $currentPopover.popover('hide');
              }
              $currentPopover = $trigger;
            }
          })
          .on('click', function (e) {
            var $target = $(e.target);
            var popover = $target.is('[data-toggle=popover]') && $target.data('bs.popover');
            if ($currentPopover && !$target.is('[data-toggle=popover]') && !$target.closest('.popover.in')[0]) {
              $currentPopover.popover('hide');
              $currentPopover = null;
            }
          })
        ;
      }

      var elements = $(context).find('[data-toggle=popover]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.popover.Constructor.DEFAULTS, $element.data());

        // Store the original trigger.
        options.originalTrigger = options.trigger;

        // If the trigger is "click", then we'll handle it manually here.
        if (options.trigger === 'click') {
          options.trigger = 'manual';
        }

        // Retrieve content from a target element.
        var $target = $(options.target || $element.is('a[href^="#"]') && $element.attr('href')).clone();
        if (!options.content && $target[0]) {
          $target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');
          options.content = $target.wrap('<div/>').parent()[options.html ? 'html' : 'text']() || '';
        }

        // Initialize the popover.
        $element.popover(options);

        // Handle clicks manually.
        if (options.originalTrigger === 'click') {
          // To ensure the element is bound multiple times, remove any
          // previously set event handler before adding another one.
          $element
            .off('click.drupal.bootstrap.popover')
            .on('click.drupal.bootstrap.popover', function (e) {
              $(this).popover('toggle');
              e.preventDefault();
              e.stopPropagation();
            })
          ;
        }
      }
    },
    detach: function (context) {
      // Destroy all popovers.
      $(context).find('[data-toggle="popover"]')
        .off('click.drupal.bootstrap.popover')
        .popover('destroy')
      ;
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
 * @file
 * Bootstrap Tooltips.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  /**
   * Extend the Bootstrap Tooltip plugin constructor class.
   */
  Bootstrap.extendPlugin('tooltip', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.tooltip_animation,
        html: !!settings.tooltip_html,
        placement: settings.tooltip_placement,
        selector: settings.tooltip_selector,
        trigger: settings.tooltip_trigger,
        delay: parseInt(settings.tooltip_delay, 10),
        container: settings.tooltip_container
      }
    };
  });

  /**
   * Bootstrap Tooltips.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapTooltips = {
    attach: function (context) {
      var elements = $(context).find('[data-toggle="tooltip"]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, $element.data());
        $element.tooltip(options);
      }
    },
    detach: function (context) {
      // Destroy all tooltips.
      $(context).find('[data-toggle="tooltip"]').tooltip('destroy');
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.4.1",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+s).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var i=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+i),t(this.fixedContent).each(function(e,o){var s=o.style.paddingRight,n=t(o).css("padding-right");t(o).data("padding-right",s).css("padding-right",parseFloat(n)+i+"px")}))},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(e,i){var o=t(i).data("padding-right");t(i).removeData("padding-right"),i.style.paddingRight=o?o:""})},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,""),a=t(document).find(n),d=a.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},a.data(),o.data());o.is("a")&&i.preventDefault(),a.one("show.bs.modal",function(t){t.isDefaultPrevented()||a.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(a,d,this)})}(jQuery),dataLayer="undefined"==typeof dataLayer?{}:dataLayer,function(t,e,i){"use strict";e.behaviors.ceres_block_popup={attach:function(e,o){var s=t(e),n=o.ceres_popup.popupBlock;s.find(".popup-block-modal").each(function(e,o){var s=t(o),a=n[s.attr("id")];t.cookie("ceres_popup_"+a.changed)||(s.on("show.bs.modal",function(e){t(this).find(".modal-content").attr("class","modal-content  "+a.entranceAnimation+"  animated")}),s.on("hide.bs.modal",function(e){t(this).find(".modal-content").attr("class","modal-content  "+a.exitAnimation+"  animated")}),setTimeout(function(){s.modal("show"),t.cookie("ceres_popup_"+a.changed,!0)},parseInt(a.delay))),s.find(".modal-footer a").click(function(t){"undefined"!=i.push&&i.push({event:"PopupCTA",block_id:s.attr("id")})}),s.on("hidden.bs.modal",function(t){"undefined"!=i.push&&i.push({event:"PopupDismiss",block_id:s.attr("id")})})})}}}(jQuery,Drupal,dataLayer);;
