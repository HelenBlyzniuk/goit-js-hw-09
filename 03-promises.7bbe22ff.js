function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const u=document.querySelector(".form"),l=(document.querySelector('button[type="submit"]'),document.querySelector('input[name="amount"]')),d=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]');function s({position:e,delay:t}){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();const o=Number(l.value);let n=Number(d.value);const i=Number(a.value);for(let t=1;t<=o;t+=1)s({position:t,delay:n}).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),n+=i}));
//# sourceMappingURL=03-promises.7bbe22ff.js.map