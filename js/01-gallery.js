import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
}
const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.innerHTML = addGalleryMarkup;
console.log(addGalleryMarkup);
console.log(galleryItems);
console.log(galleryRef);
