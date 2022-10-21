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

galleryRef.addEventListener("click", onImgClick);

function onImgClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `
  );
  instance.show();

  galleryRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

console.log(createGalleryMarkup);
console.log(addGalleryMarkup);
console.log(galleryItems);
console.log(galleryRef);
