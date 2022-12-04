'use strict';
const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

let progressId = null;
let wasVideoPlay = false;

window.addEventListener('load', function () {
    timing.min = 0;
    timing.max = video.duration;
});

pauseBtn.addEventListener('click', function () {
    if (!video.paused) {
        video.pause();
        clearInterval(progressId);
    }
});

playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        progressId = setInterval(changeProgress, 100);
    }
});
timing.addEventListener('change', function () {
    video.currentTime = timing.value;
    currentTimeEl.innerHTML = timing.value;
    if (wasVideoPlay) {
        video.play();
        progressId = setInterval(changeProgress, 100);
    }


});
timing.addEventListener("mousedown", function () {
    clearInterval(progressId);
    wasVideoPlay = !video.paused;
    if (wasVideoPlay) {
        video.pause();
    }
});

function changeProgress() {
    timing.value = video.currentTime;
    currentTimeEl.innerHTML = video.currentTime;
}

video.addEventListener('ended', function () {
    clearInterval(progressId);
});
volume.addEventListener('change', function () {
    video.volume = volume.value;

});