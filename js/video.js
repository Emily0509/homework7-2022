// var video;
const vid = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	vid.play();
	console.log("Play Video.");
	document.getElementById("volume").innerHTML = vid.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	vid.pause();
	console.log("Pause Video.");
});

document.querySelector("#slower").addEventListener("click", function() {
	let currentSpeed = vid.playbackRate;
	let newSpeed = currentSpeed - 0.1;
	vid.playbackRate = newSpeed;
	console.log(newSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	let currentSpeed = vid.playbackRate;
	let newSpeed = currentSpeed + 0.1;
	vid.playbackRate = newSpeed;
	console.log(newSpeed);
});

document.querySelector("#skip").addEventListener("click", function() {
	vid.currentTime += 10;
	console.log("Skip video.");
});

document.querySelector("#mute").addEventListener("click", function() {
    if (vid.muted === false) {    
		vid.muted = true;
		console.log("Mute video.");
		document.getElementById("mute").innerHTML = "Unmute";
 	} else {
		vid.muted = false;
		console.log("Unmute video.")
		document.getElementById("mute").innerHTML = "Mute";
 }
});

const slider = document.getElementById("slider");
const volumeInfo = document.getElementById("volume");

slider.addEventListener("input", function() {
	vid.volume = slider.value/100;
	volumeInfo.innerHTML = slider.value + "%"; 
});

document.querySelector("#vintage").addEventListener("click", function() {
	vid.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	vid.classList.remove("oldSchool");
});
