!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form"),a=(document.querySelector('button[type="submit"]'),document.querySelector('input[name="amount"]')),l=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]');function d(e){var n=e.position,t=e.delay;return new Promise((function(e,o){var i=Math.random()>.3;setTimeout((function(){i?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(a.value),o=Number(l.value),i=Number(c.value),u=1;u<=t;u+=1)d({position:u,delay:o}).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),o+=i}))}();
//# sourceMappingURL=03-promises.2131ce95.js.map