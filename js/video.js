var video = document.querySelector("#player1");;
var currentVolume = document.querySelector("#volume");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	currentVolume.innerHTML = video.volume * 100 + "%"
});

//Pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New Speed is " + video.playbackRate);
});	

// Fast
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New Speed is " + video.playbackRate);
});

//Skip
document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime < video.duration - 15){
		console.log("Original Time is = " + video.currentTime)
		video.currentTime += 15;
		console.log("Current Location of the video = " + video.currentTime)
	}
	else{
		console.log("Original Time is = " + video.currentTime)
		video.load();
		console.log("Current Location of the video = " + video.currentTime)
		console.log("Going back to the begining")
	}
});
// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

//Volume
document.querySelector("#slider").addEventListener("click", function(){
	console.log(video.volume);
	video.volume = document.querySelector("input").value/100;
	currentVolume.innerHTML = video.volume * 100 + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("Old Style");
});

// Original 
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original Style");
});
