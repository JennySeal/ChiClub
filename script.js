let imageArray = ["blackTanLongChi.jpg", "toffyCrouch.jpg", "chihuahuasLying.jpg", "playChi.jpg", "chiChums.jpg"];
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