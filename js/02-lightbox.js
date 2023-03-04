import { galleryItems } from './gallery-items.js';
// Change code below this line


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
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    lightbox.open();

    const handleEscButton = (event) => {
    if (event.key === 'Escape') {
        lightbox.close();
        document.removeEventListener('keydown', handleEscButton);
    }
}

    document.addEventListener('keydown', handleEscButton);
    
}

