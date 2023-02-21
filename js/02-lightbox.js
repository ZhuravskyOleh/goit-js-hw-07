import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener('click', onGalleryCadrClick);

function createGalleryCardItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`;
    }).join('');
}

function onGalleryCadrClick(event) {
    event.preventDefault();
    console.log(event.target.dataset);
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
}

