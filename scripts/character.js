// Randomly select a character
char = Math.random()

var link;
if (char =< 0.25){
	link = 'https://www.actimator.com/app/play/angwc-bw'
} elif (char =< 0.5){
	link = 'https://www.actimator.com/app/play/angwc-bm'
} elif (char =< 0.75){
	link = 'https://www.actimator.com/app/play/angwc-ww'
} else {
	link = 'https://www.actimator.com/app/play/angwc-wm'
}

document.getElementById('char-link').src = link
