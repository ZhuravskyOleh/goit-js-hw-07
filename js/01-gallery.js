import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', handleGalleryCardClick)



function createGalleryCardItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    }).join('');
}

// function handleGalleryCardClick(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     const currentCardImage = event.target.dataset.source;
//     console.log(event.target);

//     const lightBox = basicLightbox.create(`
// 		<img width="1400" height="900" src="${currentCardImage}">
// 	`);
//     lightBox.show();
//     document.addEventListener('keydown', (event) => { 
//         // if (event.key === 'Escape') {
//         //     lightbox.close();
//         // }
//         lightBox.close();
//     });
// };


function handleGalleryCardClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const currentCardImage = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
        <img width="1400" height="900" src="${currentCardImage}">
    `);

    lightbox.show();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            lightbox.close();
        }
    });
}

