const highScoresList = document.getElementById("highScoresList"); // referencing the list on html

const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // pulling high scores from local Storage

highScoresList.innerHTML = highScores
    .map(score => {
    return `<li class="high-score">${score.name}-${score.score}</li>`;
    }) // map takes an array of items and converts them into something else
    .join("");
