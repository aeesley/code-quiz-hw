const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

console.log(highScores);

finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    // saveScoreButton.disabled = !username.value;
});


saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score); // ad score
    highScores.sort( (a,b) => b.score - a.score) // sorting the high scores
    highScores.splice(5); // cap at 5 scores

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");

    console.log(highScores);
}