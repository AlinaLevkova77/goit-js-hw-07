import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarcup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);



function createGalleryMarcup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return ` <div class="gallery__item">
     <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}' 
      data-source='${original}'
      alt='${description}'
    />
  </a>
    </div>`
        }).join('');
};
galleryContainer.addEventListener('click', onOpenImgClick);
function onOpenImgClick(evt) {
    const isGalleryImg = evt.target.classList.contains('gallery__image');
   
    if (!isGalleryImg ) {
        return;
    } 
    evt.preventDefault();

    const langeImage = evt.target.dataset.source;

    const instance = basicLightbox.create(`
   <img src = '${langeImage}' alt = '${evt.target.alt}'>
`)

    instance.show()
}









