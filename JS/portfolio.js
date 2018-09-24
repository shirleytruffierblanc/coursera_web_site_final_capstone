var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
		'https://www.artmajeur.com/medias/standard/v/a/valery-trillaud/artwork/7799506_photographie-nice-noir-et-blanc.jpg',
		'http://www.my-art.com/sites/default/files/Delphimages/e7a61edca6c166e0b2c9d1b31179fff963555e10.jpg',
		'http://www.anne-medium.com/wp-content/uploads/2017/11/Paris-Noir-et-blanc.jpg',
		'http://austinestatelawyer.typepad.com/.a/6a017d3bf4b660970c01bb08b348b6970d-pi',
		'https://images.unsplash.com/photo-1523500979934-bdf0933261d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6916c51c2b7ab2eae369e4975cc0cb2&w=1000&q=80',
		'https://s3.amazonaws.com/images.hiresphoto.com/the-photographer-at-the-dark-hedges-northern-ireland.jpg',
		'http://www.georgekarbusphotography.com/wp-content/uploads/2015/08/compass_jellyfish_black_and_white.jpg',
		'https://okdiario.com/img/bebes/2017/05/19/perro-rescata-bebe-enterrado-vivo.jpg',
		'https://www.alyoung.com//photography/img/1503139059-3.67.0003.041.jpg',
		'https://maxcdn.icons8.com/app/uploads/2017/08/black-and-white-photography.jpg'
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();