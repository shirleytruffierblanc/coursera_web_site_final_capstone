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
function selectImg(number) {
var background = document.getElementById("background");
background.style.backgroundImage = 'url(' + images[number] + ')';
}