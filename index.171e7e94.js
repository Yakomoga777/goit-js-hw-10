!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(n){return n&&n.__esModule?n.default:n}var e={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return s.Date.now()};function g(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function y(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(g(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=g(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var f=c.test(n);return f||a.test(n)?u(n.slice(2),f?2:8):r.test(n)?NaN:+n}e=function(n,t,e){var o,i,r,c,a,u,f=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var e=o,r=i;return o=i=void 0,f=t,c=n.apply(r,e)}function b(n){return f=n,a=setTimeout(w,t),l?h(n):c}function j(n){var e=n-u;return void 0===u||e>=t||e<0||s&&n-f>=r}function w(){var n=m();if(j(n))return T(n);a=setTimeout(w,function(n){var e=t-(n-u);return s?v(e,r-(n-f)):e}(n))}function T(n){return a=void 0,p&&o?h(n):(o=i=void 0,c)}function O(){var n=m(),e=j(n);if(o=arguments,i=this,u=n,e){if(void 0===a)return b(u);if(s)return a=setTimeout(w,t),h(u)}return void 0===a&&(a=setTimeout(w,t)),c}return t=y(t)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(y(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=u=i=a=void 0},O.flush=function(){return void 0===a?c:T(m())},O};var h=document.querySelector("#search-box"),b=document.querySelector(".country-list"),j=document.querySelector(".country-info");function w(){b.innerHTML="",j.innerHTML=""}h.addEventListener("input",e((function(n){w(),t=h.value.trim(),e="".concat("https://restcountries.com/v3.1/","name/").concat(t),fetch(e).then((function(n){return n.json()})).then((function(n){if(n.length>5)throw new Error(Notiflix.Notify.info("Too many matches found. Please enter a more specific name."));if(n.length>=2&n.length<=10)T(n);else if(1===n.length)t=n,w(),j.insertAdjacentHTML("beforeend",function(n){return n.reduce((function(n,t){return n+function(n){return'\n \n  <p class="countri-item"><img\n      src="'.concat(n.flags.svg,'"\n      alt="flag of').concat(n.name.official,'"\n      width="100"\n    /></p>\n  <p class="countri-item">').concat(n.name.official,'</p>\n  <p class="capital">Capital: <span>').concat(n.capital,'</span></p>\n  <p class="population">Population: <span>').concat(n.population,'</span></p>\n  <p class="languages">Languages: <span>').concat(Object.values(n.languages),"</span></p>")}(t)}),"")}(t)),console.log("🔥 Країна знайдена!!!");else if(404===n.status)throw new Error(Notiflix.Notify.failure("Oops, there is no country with that name"));var t})).catch((function(n){}));var t,e}),1e3));var T=function(n){w();var t=function(n){return n.reduce((function(n,t){return n+function(n){return'<li class="countri-item">\n    <img\n      src="'.concat(n.flags.svg,'"\n      alt="flag of').concat(n.name.official,'"\n      width="100"\n    />\n    <p>').concat(n.name.official,"</p>\n  </li>\n     ")}(t)}),"")}(n);b.insertAdjacentHTML("beforeend",t)}}();
//# sourceMappingURL=index.171e7e94.js.map