window.Modernizr=function(window,a,b){function c(a){r.cssText=a}function d(a,b){return typeof a===b}function e(a,b){return!!~(""+a).indexOf(b)}function f(a,c){for(var d in a){var f=a[d];if(!e(f,"-")&&r[f]!==b)return"pfx"==c?f:!0}return!1}function g(a,c,e){for(var f in a){var g=c[a[f]];if(g!==b)return e===!1?a[f]:d(g,"function")?g.bind(e||c):g}return!1}function h(a,b,c){var e=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+w.join(e+" ")+e).split(" ");return d(b,"string")||d(b,"undefined")?f(h,b):(h=(a+" "+x.join(e+" ")+e).split(" "),g(h,b,c))}function i(){m.input=function(b){for(var c=0,d=b.length;d>c;c++)A[b[c]]=!!(b[c]in s);return A.list&&(A.list=!(!a.createElement("datalist")||!window.HTMLDataListElement)),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(c){for(var d,e,f,g=0,h=c.length;h>g;g++)s.setAttribute("type",e=c[g]),d="text"!==s.type,d&&(s.value=t,s.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&s.style.WebkitAppearance!==b?(o.appendChild(s),f=a.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(s,null).WebkitAppearance&&0!==s.offsetHeight,o.removeChild(s)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?s.checkValidity&&s.checkValidity()===!1:s.value!=t)),z[c[g]]=!!d;return z}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var j,k,l="2.8.2",m={},n=!0,o=a.documentElement,p="modernizr",q=a.createElement(p),r=q.style,s=a.createElement("input"),t=":)",u=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),v="Webkit Moz O ms",w=v.split(" "),x=v.toLowerCase().split(" "),y={},z={},A={},B=[],C=B.slice,D=function(b,c,d,e){var f,g,h,i,j=a.createElement("div"),k=a.body,l=k||a.createElement("body");if(parseInt(d,10))for(;d--;)h=a.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',b,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,b),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},E=function(a){var b=window.matchMedia||window.msMatchMedia;if(b)return b(a)&&b(a).matches||!1;var c;return D("@media "+a+" { #"+p+" { position: absolute; } }",function(a){c="absolute"==(window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position}),c},F={}.hasOwnProperty;k=d(F,"undefined")||d(F.call,"undefined")?function(a,b){return b in a&&d(a.constructor.prototype[b],"undefined")}:function(a,b){return F.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=C.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(C.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(C.call(arguments)))};return d}),y.touch=function(){var b;return"ontouchstart"in window||window.DocumentTouch&&a instanceof DocumentTouch?b=!0:D(["@media (",u.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){b=9===a.offsetTop}),b},y.rgba=function(){return c("background-color:rgba(150,255,150,.5)"),e(r.backgroundColor,"rgba")},y.borderradius=function(){return h("borderRadius")},y.boxshadow=function(){return h("boxShadow")},y.textshadow=function(){return""===a.createElement("div").style.textShadow},y.cssanimations=function(){return h("animationName")},y.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",d="linear-gradient(left top,#9f9, white);";return c((a+"-webkit- ".split(" ").join(b+a)+u.join(d+a)).slice(0,-a.length)),e(r.backgroundImage,"gradient")},y.csstransforms=function(){return!!h("transform")},y.csstransforms3d=function(){var a=!!h("perspective");return a&&"webkitPerspective"in o.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},y.csstransitions=function(){return h("transition")};for(var G in y)k(y,G)&&(j=G.toLowerCase(),m[j]=y[G](),B.push((m[j]?"":"no-")+j));return m.input||i(),m.addTest=function(a,c){if("object"==typeof a)for(var d in a)k(a,d)&&m.addTest(d,a[d]);else{if(a=a.toLowerCase(),m[a]!==b)return m;c="function"==typeof c?c():c,"undefined"!=typeof n&&n&&(o.className+=" "+(c?"":"no-")+a),m[a]=c}return m},c(""),q=s=null,m._version=l,m._prefixes=u,m._domPrefixes=x,m._cssomPrefixes=w,m.mq=E,m.testProp=function(a){return f([a])},m.testAllProps=h,m.testStyles=D,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(n?" js "+B.join(" "):""),m}(this,this.document),Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(void 0===document.documentMode||document.documentMode>7)}),Modernizr.addTest("display-table",function(){var a,b=window.document,c=b.documentElement,d=b.createElement("div"),e=b.createElement("div"),f=b.createElement("div");return d.style.cssText="display: table",e.style.cssText=f.style.cssText="display: table-cell; padding: 10px",d.appendChild(e),d.appendChild(f),c.insertBefore(d,c.firstChild),a=e.offsetLeft<f.offsetLeft,c.removeChild(d),a}),Modernizr.addTest("tablerelative",function(){var a,b="",c=!1,d=document.body||function(){return c=!0,document.documentElement.appendChild(document.createElement("body"))}();b+='<table id="td-rel-test" style="position: absolute; top: 0px; left: 0px; border: 0px none; margin: 0px; background: red;" cellspacing="0" cellpadding="0">',b+='<tr><td style="position: relative; height: 40px; width: 20px; border: 0px none; margin: 0px; padding: 0px">',b+='<div style="height: 0px; width: 20px; position: absolute; left: 0px; bottom: 0px; border: 0px none; margin: 0px; padding: 0px;"></div></td></tr>',b+="<tr><td><br /></td></tr></table>",d.innerHTML+=b;var e=document.getElementById("td-rel-test");return a=40===e.getElementsByTagName("div")[0].offsetTop,c&&document.documentElement.removeChild(d),a}),Modernizr.addTest("svg",function(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!/Opera/.test(navigator.userAgent)});