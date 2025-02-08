// script.js
const audio = document.getElementById('audio');
document.getElementById('play').addEventListener('click', () => audio.play());
document.getElementById('pause').addEventListener('click', () => audio.pause());
document.getElementById('restart').addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
});
document.getElementById('volume').addEventListener('input', (e) => {
    audio.volume = e.target.value;
});