import{S as r}from"./vendor-D0gBiHs0.js";const t=document.querySelector(".gallery"),i=images.map(({preview:a,original:e,description:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${l}"
          />
        </a>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",i);new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery-C6AsgKHC.js.map
