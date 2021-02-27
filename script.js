let imageArray = ["blackTanLongChi.jpg", "toffyCrouch.JPG", "chihuahuasLying.jpg", "playChi.JPG", "chiChums.jpg"];
var index = 0;

const changeBackground = () => {
let image = document.getElementById('headpic');
	image.src = imageArray[index];
	index++;
	if (index >= imageArray.length) {
		index = 0;
	}
}
setInterval(changeBackground, 3000);