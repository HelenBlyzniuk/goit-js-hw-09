const e=document.querySelector(".form");function t(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector('button[type="submit"]').addEventListener("submit",(function(e){!function({amount:e,step:n}){let o=0;for(i=0;i<=e;i++)return o=i,delay+=n,t(o,delay)}()}));let n={};e.addEventListener("input",(function(e){n.amount=document.querySelector('input[name="amount"]').value,n.delay=document.querySelector('input[name="delay"]').value,n.step=document.querySelector('input[name="step"]').value,console.log(n)})),console.log(n);
//# sourceMappingURL=03-promises.53f0561e.js.map
