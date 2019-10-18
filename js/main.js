
const galleryItems = [
  { preview: "img/1.jpg", fullview: "img/1-small.jpg", alt: "alt text 1"},
  { preview: "img/2.jpg", fullview: "img/2-small.jpg", alt: "alt text 2"},
  { preview: "img/3.jpg", fullview: "img/3-small.jpg", alt: "alt text 3"},
  { preview: "img/4.jpg", fullview: "img/4-small.jpg", alt: "alt text 4"},
];

const previewContainer = document.querySelector('.js-previem');
const imageGallery = document.querySelector('.js-image-gallery');
createLi(galleryItems);
previewContainer.addEventListener('click', openImg);



function createLi(transanctions) {

	transanctions.forEach(function(transanction) {
		previewContainer.insertAdjacentHTML('beforeend', handleNewLi(transanction));
	})
};

function handleNewLi({fullview, preview, alt}) {
	return `
	<li>
		<img src="${fullview}"
		data-fullview="${preview}"
		alt="${alt}" class="preview-img">
	</li>`;
};

function openImg(e) {
	const link = e.target.dataset.fullview;
	const altText = e.target.alt;
	const fullview = document.querySelector('.fullview');
	const activLink = e.currentTarget.querySelector('.preview-img--activ');

	if (activLink) {
		activLink.classList.remove('preview-img--activ');
	}


	if (e.target.nodeName !== 'IMG') {
		return;
	}

	e.target.classList.add('preview-img--activ');
	
	if (e.target) {
		fullview.remove();
	}

	imageGallery.insertAdjacentHTML('afterbegin', createImg(link, altText));
	
}; 

function createImg(src, alt) {
	return `
	<div class="fullview">
        <img src="${src}" alt="${alt}" class="fullview-img">
    </div>
	`;
};