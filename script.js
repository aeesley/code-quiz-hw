// JS GOES HERE
var timeEl = document.querySelector(".time"); // defining time class on html doc
var mainEl = document.getElementById("main"); // defining main id on html doc

var secondsLeft = 75; // defining totall time alloted to user taking quiz

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--; //shows that time will decrease
        timeEl.textContent = secondsLeft + " seconds left!"; // shows message that will display on page with time counting down

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up! GAME OVER!") // shows that when second countdown reaches zero, a message will show that game is over
        }
    }, 1000); // denotes that time will decrease by one second at a time


    
}

setTime(); // this is calling the function so the timer actually runs