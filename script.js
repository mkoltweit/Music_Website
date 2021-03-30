var jair = document.getElementById("images");
var currentSrc = jair.attributes.src.value;
var nextSrc = 'Images/JairPlaying.webp';
var src1 = "Images/Jair.webp";
var src2 = "Images/JairPlaying.webp";
var src3 = "Images/JairSmiling.webp";


function changeImg() {
	if(currentSrc === src1){
		(jair).src = nextSrc;
		nextSrc = src3;
	}
	if(currentSrc === src3){
		(jair).src = nextSrc;
		nextSrc = src1;
	}
}


