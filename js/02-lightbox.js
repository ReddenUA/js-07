import { galleryItems } from './gallery-items.js';


const refs = {
    gallery: document.querySelector(".gallery")
}

const galleryItemsDivs = galleryItems  
    .map(
        ({preview, original, description }) => `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`
    )
    .join("");

    refs.gallery.innerHTML = galleryItemsDivs;
    const lightbox = new SimpleLightbox(".gallery a" ,{
        captionDelay: 250,
        captionsData: "alt",
    });
