const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});


saveHighScore = e => {
    e.preventDefault();
}