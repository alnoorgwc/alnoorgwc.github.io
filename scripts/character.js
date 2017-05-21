// Randomly select a character
character = Math.random();

var link;
if (character <= 0.25){
	link = 'https://www.actimator.com/app/play/angwc-bw';
} elif (character <= 0.5){
	link = 'https://www.actimator.com/app/play/angwc-bm';
} elif (character <= 0.75){
	link = 'https://www.actimator.com/app/play/angwc-ww';
} else {
	link = 'https://www.actimator.com/app/play/angwc-wm';
}

document.getElementById('char-link').src = link;
