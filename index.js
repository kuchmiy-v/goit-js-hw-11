import{a as d,i as a}from"./assets/vendor-CHDWZgP1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){const t=new URLSearchParams({key:"38288513-b7843bc63d8f48176142cf2e3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get("https://pixabay.com/api/",{params:t}).then(n=>n.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new SLBox(".gallery a",{captionsData:"alt",captionDelay:250});function m({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:e,comments:r,downloads:i}){return`
    <li class="gallery-item">
      <a href="${t}" data-lightbox="gallery">
        <img src="${o}" alt="${s}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${n}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${r}</p>
        <p><strong>Downloads:</strong> ${i}</p>
      </div>
    </li>
  `}function p(o){const t=o.map(m).join("");l.innerHTML=t,g.refresh()}function h(){l.innerHTML=""}function y(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(console.log("Search query:",t),!t){a.info({title:"Info",message:"Please enter a search query.",position:"topRight"});return}h(),y(),f(t).then(s=>{if(s.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(s.hits)}).catch(s=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L()}),c.reset()});
//# sourceMappingURL=index.js.map
