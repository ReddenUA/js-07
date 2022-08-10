import { galleryItems } from './gallery-items.js';

const createGalleryMarkup = (Images) => {
    return Images 
    .map(
        ({preview, original, description }) => `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`
    )
    .join("");
}
const onGalleryItemClick = (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(
        `<img src = ${event.target.dataset.source} />`    
    );
    instance.show();
};

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML( "beforeend",createGalleryMarkup (galleryItems));
galleryRef.addEventListener("click", onGalleryItemClick);

console.log(createGalleryMarkup);
console.log(galleryItems);