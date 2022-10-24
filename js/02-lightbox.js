import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const simpleLightbox = window.SimpleLightbox;

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

const ligthbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

console.log(galleryItems);
console.log(createGalleryMarkup);
