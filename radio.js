let isPlaying = false;
const radio = document.getElementById('radio');
const playPauseBtn = document.getElementById('playPauseBtn');

function togglePlayPause() {
    if (isPlaying) {
        radio.pause();
        playPauseBtn.textContent = '▶';
    } else {
        radio.play();
        playPauseBtn.textContent = 'll';
    }
    isPlaying = !isPlaying;
}
document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});
