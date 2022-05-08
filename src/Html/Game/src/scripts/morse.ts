let gameId: number = 0;
let game =  [];
let team1 = null;
let team2 = null;
let header = null;
let goals1 = null;
let goals2 = null;
let winnerCheck1 = null
let winnerCheck2 = null;
let done = null;
let table = null
let betArea = null;
let punkte = null;
let index1 = null;
let index2 = null;
let index3 = null;
let index4 = null;
let index5 = null;
let index6 = null;
let index7 = null;
let index8 = null;

function init(): void {
    index2 = document.getElementById("index2");
    index1 = document.getElementById("index1");
    index3 = document.getElementById("index3");
    index4 = document.getElementById("index4");
    index5 = document.getElementById("index5");
    index6 = document.getElementById("index6");
    index7 = document.getElementById("index7");
    index8 = document.getElementById("index8");
    table = document.getElementById("betTable");
    betArea = document.getElementById("betArea");
    team1 = document.getElementById("team1");
    team2 = document.getElementById("team2");
    header = document.getElementById("header");
    punkte = document.getElementById("punkte");

    fetch("./bet.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            game = jsondata;
        });

    writeStartSite();

    betArea.classList.add("hidden");

    document.getElementById("betTable").addEventListener("click", function (e) {
        if(e.target.type == "button") {
            gameId = parseInt(e.target.id);
            table.classList.add("hidden");
            betArea.classList.remove("hidden");
            startGame();
        };
    })
}

function writeStartSite():void{
    index1.innerHTML = '<img class="indexTeam1" src="./resources/icon/France.png"/><td>Game 1</td></img><img class="indexTeam2" src="./resources/icon/Argentinia.png"/></img>';
    index2.innerHTML = '<img class="indexTeam1" src="./resources/icon/Uruguay.png"/><td>Game 2</td></img><img class="indexTeam2" src="./resources/icon/Portugal.png"/></img>';
    index3.innerHTML = '<img class="indexTeam1" src="./resources/icon/Spain.png"/><td>Game 3</td></img><img class="indexTeam2" src="./resources/icon/Russia.png"/></img>';
    index4.innerHTML = '<img class="indexTeam1" src="./resources/icon/Croatia.png"/><td>Game 4</td></img><img class="indexTeam2" src="./resources/icon/Denmark.png"/></img>';
    index5.innerHTML = '<img class="indexTeam1" src="./resources/icon/Brazil.png"/><td>Game 5</td></img><img class="indexTeam2" src="./resources/icon/Mexico.png"/></img>';
    index6.innerHTML = '<img class="indexTeam1" src="./resources/icon/Belgium.png"/><td>Game 6</td></img><img class="indexTeam2" src="./resources/icon/Japan.png"/></img>';
    index7.innerHTML = '<img class="indexTeam1" src="./resources/icon/Sweden.png"/><td>Game 7</td></img><img class="indexTeam2" src="./resources/icon/Switzerland.png"/></img>';
    index8.innerHTML = '<img class="indexTeam1" src="./resources/icon/Columbia.png"/><td>Game 8</td></img><img class="indexTeam2" src="./resources/icon/England.png"/></img>';
}

function writeTeamsInBetArea(): void{
    team1.innerHTML = '<img class="flag" src=' + game[gameId - 1].team1Icon + '/>';
    team2.innerHTML = '<img class="flag" src=' + game[gameId - 1].team2Icon + '/>';
    header.innerText = game[gameId - 1].teamOne + "  vs  " + game[gameId - 1].teamTwo;
    punkte.innerHTML = "Points: " + game[gameId - 1].punkte;
}

function startGame(): void {

    writeTeamsInBetArea();
    let submitBtn = document.getElementById("submitButton");
    console.log(submitBtn);

    let goBackButton = document.getElementById("goBackButton");
    console.log(goBackButton);

    document.getElementById("goBackButton").addEventListener("click", function(e) {
        startOver();
    })


    document.getElementById("submitButton").addEventListener("click", function (e) {
        goals1 = document.getElementById("goals1");
        goals2 = document.getElementById("goals2");
        winnerCheck1 = document.getElementById("winnerCheck1");
        winnerCheck2 = document.getElementById("winnerCheck2");
        done = document.getElementById("done");


        if (table.classList.contains("hidden")){
            compareResults();
            writeTeamsInBetArea();
        }
    })
}

function compareResults(): void {
    if(game[gameId-1].done == true) {
        alert("You already tipped on that game!");
    }
    else if (goals1.value == game[gameId - 1].team1Score
        && goals2.value == game[gameId - 1].team2Score && game[gameId-1].done == false) {
        if (winnerCheck1.checked == true && winnerCheck2.checked == false && game[gameId - 1].winner == -1
            || winnerCheck1.checked == false && winnerCheck2.checked == true && game[gameId - 1].winner == 1
            || winnerCheck1.checked == false && winnerCheck2.checked == false && game[gameId -1].winner == 0 && game[gameId-1].done == false){
                for(let i = 0;i<8;i++){
                    game[i].punkte++;
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
    game[gameId-1].done = true;
}

function startOver():void {

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