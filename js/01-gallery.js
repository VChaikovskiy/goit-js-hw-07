import { galleryItems } from "./gallery-items.js";
// Change code below this line

const basicLightbox = window.basicLightbox;

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

const galleryRef = document.querySelector("div.gallery");
const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", addGalleryMarkup);

galleryRef.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("gallary__image")) {
    return;
  }
  const url = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
        <img src="${url}" >
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
