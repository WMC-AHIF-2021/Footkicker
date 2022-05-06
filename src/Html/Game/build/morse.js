let gameId = 0;
let game = [];
let team1 = null;
let team2 = null;
let header = null;
let goals1 = null;
let goals2 = null;
let winnerCheck1 = null;
let winnerCheck2 = null;
let done = null;
let table = null;
let betArea = null;
let punkte = null;
function init() {
    table = document.getElementById("betTable");
    betArea = document.getElementById("betArea");
    team1 = document.getElementById("team1");
    team2 = document.getElementById("team2");
    header = document.getElementById("header");
    punkte = document.getElementById("punkte");
    betArea.classList.add("hidden");
    document.getElementById("betTable").addEventListener("click", function (e) {
        if (e.target.type == "button") {
            gameId = parseInt(e.target.id);
            table.classList.add("hidden");
            betArea.classList.remove("hidden");
            fetch("./bet.json")
                .then(response => {
                return response.json();
            })
                .then(jsondata => {
                game = jsondata;
                startGame();
            });
        }
        ;
    });
}
function startGame() {
    team1.innerHTML = '<img class="flag" src=' + game[gameId - 1].team1Icon + '/>';
    team2.innerHTML = '<img class="flag" src=' + game[gameId - 1].team2Icon + '/>';
    header.innerText = game[gameId - 1].teamOne + "  vs  " + game[gameId - 1].teamTwo;
    punkte.innerText = game[gameId - 1].points;
    let submitBtn = document.getElementById("submitButton");
    console.log(submitBtn);
    let goBackButton = document.getElementById("goBackButton");
    console.log(goBackButton);
    document.getElementById("goBackButton").addEventListener("click", function (e) {
        startOver();
    });
    document.getElementById("submitButton").addEventListener("click", function (e) {
        goals1 = document.getElementById("goals1");
        goals2 = document.getElementById("goals2");
        winnerCheck1 = document.getElementById("winnerCheck1");
        winnerCheck2 = document.getElementById("winnerCheck2");
        done = document.getElementById("done");
        if (table.classList.contains("hidden")) {
            compareResults();
            startGame();
        }
    });
}
function compareResults() {
    if (game[gameId - 1].done == true) {
        alert("You already tipped on that game!");
    }
    else if (goals1.value == game[gameId - 1].team1Score
        && goals2.value == game[gameId - 1].team2Score && game[gameId - 1].done == false) {
        if (winnerCheck1.checked == true && winnerCheck2.checked == false && game[gameId - 1].winner == -1
            || winnerCheck1.checked == false && winnerCheck2.checked == true && game[gameId - 1].winner == 1
            || winnerCheck1.checked == false && winnerCheck2.checked == false && game[gameId - 1].winner == 0) {
            game[gameId - 1].done = true;
            for (let i = 0; i < 3; i++) {
                game[i].points++;
            }
            alert("You won!");
        }
        else {
            alert("You lost!");
        }
    }
    else {
        alert("You lost!");
    }
}
function startOver() {
    if (goals1 != null) {
        goals1.value = null;
        goals2.value = null;
        winnerCheck1.checked = false;
        winnerCheck2.checked = false;
    }
    table.classList.remove("hidden");
    betArea.classList.add("hidden");
}
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
//# sourceMappingURL=morse.js.map