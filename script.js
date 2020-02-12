const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// progress바 위치
function updateProgress() {
    console.log(video.currentTime);
    console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;

    // 재생시간 표시
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 60) {
        mins = '0' +  mins;
    }

    let secs  = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + secs;
    }

    timestamp.innerHTML = mins + ':' + secs;

}

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}


// 비디오 재생 상태 이벤트
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

// 비디오 버튼 이벤트
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

// 사용자에 의해 progress바 위치 이동시
progress.addEventListener('change', setVideoProgress);