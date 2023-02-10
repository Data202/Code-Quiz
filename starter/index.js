// highscores
var highscoresEl = document.querySelector("#highscore");
var storagedUsers = [];
var clearButtonEl = document.querySelector("#clear")

var storagedUsers = JSON.parse(localStorage.getItem("user"));
var storagedScore = JSON.parse(localStorage.getItem("score"));

if (storagedUsers) {
    for (i = 0; i < storagedUsers.length; i++) {
        var score = document.createElement("li");
        score.textContent = storagedUsers[i] + " - " + storagedScore[i];
        highscoresEl.appendChild(score);
    }
}

const start = document.getElementById("start")
console.log(start);