```javascript
const video = document.querySelector("video");

const playerButton = document.querySelector(".player__button");

const volume = document.querySelector(".volume");

const playbackSpeed = document.querySelector(".playbackSpeed");

const skipButtons = document.querySelectorAll(".skip");

const progressFilled = document.querySelector(".progress__filled");


// Play and Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playerButton.textContent = "❚ ❚";
    } else {
        video.pause();
        playerButton.textContent = "►";
    }
}

playerButton.addEventListener("click", togglePlay);


// Volume
volume.addEventListener("input", function () {
    video.volume = this.value;
});


// Playback Speed
playbackSpeed.addEventListener("input", function () {
    video.playbackRate = this.value;
});


// Skip 10 seconds / 25 seconds
skipButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const skipTime = this.dataset.skip;

        video.currentTime += Number(skipTime);

    });
});


// Progress Bar
video.addEventListener("timeupdate", function () {

    const percentage =
        (video.currentTime / video.duration) * 100;

    progressFilled.style.width = percentage + "%";

});


// Click on progress bar
const progress = document.querySelector(".progress");

progress.addEventListener("click", function (event) {

    const position =
        event.offsetX / progress.offsetWidth;

    video.currentTime = position * video.duration;

});


// Update button when video ends
video.addEventListener("ended", function () {
    playerButton.textContent = "►";
});
```
