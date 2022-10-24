import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const basicLightbox = window.basicLightbox;

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const galleryRef = document.querySelector(".gallery");
const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", addGalleryMarkup);

galleryRef.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open();
}

console.log(galleryItems);
console.log(createGalleryMarkup);
