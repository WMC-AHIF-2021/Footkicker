let index1 = null;
let index2 = null;
let index3 = null;
let index4 = null;
let index5 = null;
let index6 = null;
let index7 = null;
let index8 = null;
let gameId = null;
let table = null;
let betArea = null;
let header = null;
let team1 = null;
let team2 = null;
let goals1 = null;
let goals2 = null;
let winnerCheck1 = null
let winnerCheck2 = null;
let punkte = null;
let pointsScore = 0;
let button = null;
let result = null;
let arr = null;

function writeStartSiteRoundOf16():void{
    punkte.innerHTML = "Points: " + pointsScore;
    index1.innerHTML = '<img class="indexTeam1" src="./resources/icon/France.png"/><td>Game 1</td></img><img class="indexTeam2" src="./resources/icon/Argentina.png"/></img>';
    index2.innerHTML = '<img class="indexTeam1" src="./resources/icon/Uruguay.png"/><td>Game 2</td></img><img class="indexTeam2" src="./resources/icon/Portugal.png"/></img>';
    index3.innerHTML = '<img class="indexTeam1" src="./resources/icon/Spain.png"/><td>Game 3</td></img><img class="indexTeam2" src="./resources/icon/Russia.png"/></img>';
    index4.innerHTML = '<img class="indexTeam1" src="./resources/icon/Croatia.png"/><td>Game 4</td></img><img class="indexTeam2" src="./resources/icon/Denmark.png"/></img>';
    index5.innerHTML = '<img class="indexTeam1" src="./resources/icon/Brazil.png"/><td>Game 5</td></img><img class="indexTeam2" src="./resources/icon/Mexico.png"/></img>';
    index6.innerHTML = '<img class="indexTeam1" src="./resources/icon/Belgium.png"/><td>Game 6</td></img><img class="indexTeam2" src="./resources/icon/Japan.png"/></img>';
    index7.innerHTML = '<img class="indexTeam1" src="./resources/icon/Sweden.png"/><td>Game 7</td></img><img class="indexTeam2" src="./resources/icon/Switzerland.png"/></img>';
    index8.innerHTML = '<img class="indexTeam1" src="./resources/icon/Colombia.png"/><td>Game 8</td></img><img class="indexTeam2" src="./resources/icon/England.png"/></img>';
}

function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function writeTeamsInBetArea(data){
    let pic1 = `${data[gameId].home_team_country}.png`;
    let url1 = "./resources/icon/" + pic1;
    let pic2 = `${data[gameId].away_team_country}.png`;
    let url2 = "./resources/icon/" + pic2;
    team2.innerHTML = '<img class="flag" src=' + url2 +'>';
    team1.innerHTML = '<img class="flag" src=' + url1 + '>';
    header.innerText = data[gameId].home_team_country + " vs " + data[gameId].away_team_country;
    punkte.innerHTML = "Points: " + pointsScore;
}

function startGame(data): void {
    result = document.getElementById('result');
    writeTeamsInBetArea(data);
    let submitBtn = document.getElementById("submitButton");

    let goBackButton = document.getElementById("goBackButton");

    document.getElementById("goBackButton").addEventListener("click", function(e) {
        startOver();
    })

    document.getElementById("submitButton").addEventListener("click", function (e) {
        goals1 = document.getElementById("goals1");
        goals2 = document.getElementById("goals2");
        winnerCheck1 = document.getElementById("winnerCheck1");
        winnerCheck2 = document.getElementById("winnerCheck2");
        if (table.classList.contains("hidden")){
            compareResults(data);
            startOver();
        }
    })
}

function compareResults(data){
    //result innerHTML machen damit man farbe änern kann
    let one = 1;
    if(arr[gameId].toString() === one.toString()){
        alert("You already tipped on that game!");
    }
    else if(winnerCheck1.checked === true && winnerCheck2.checked === false && data[gameId].winner.value === data[gameId].home_team.country.value
        || winnerCheck1.checked === false && winnerCheck2.checked === true && data[gameId].winner.value === data[gameId].away_team.country.value){
        if(goals1.value === data[gameId].home_team.goals.toString() && goals2.value === data[gameId].away_team.goals.toString() && winnerCheck1.checked === true && winnerCheck2.checked === false
            || goals1.value === data[gameId].home_team.goals.toString() && goals2.value === data[gameId].away_team.goals.toString() && winnerCheck1.checked === false && winnerCheck2.checked === true){
            alert('You won! 5 points');
            pointsScore += 5;
        }
        else {
            //if (data[gameId].winner.value === data[gameId].home_team.country.value && (winnerCheck1.checked === true && winnerCheck2.checked === false) && ((goals1.value - 1).toString() === data[gameId].home_team.goals.toString() || (goals1.value + 1).toString() === data[gameId].home_team.goals.toString())
            let tolerancePositiv:number = parseInt(data[gameId].home_team.goals);
            let toleranceNegativ:number = parseInt(data[gameId].home_team.goals);
            tolerancePositiv++;
            toleranceNegativ--;

            if ((winnerCheck1.checked === true && winnerCheck2.checked === false) && ((goals1.value.toString() === tolerancePositiv.toString()) || (goals1.value.toString() === toleranceNegativ.toString()))) {
                alert('You won! 3 points');
                pointsScore += 3;
            }
            else if ((winnerCheck1.checked === false && winnerCheck2.checked === true) && ((goals2.value.toString() === tolerancePositiv.toString()) || (goals2.value.toString() === toleranceNegativ.toString()))) {
                alert('Not the correct score but correct team! 3 points a');
                pointsScore += 3;
            }else if ((winnerCheck1.checked === true && winnerCheck2.checked === false) && ((goals1.value.toString() === tolerancePositiv.toString()) || (goals1.value.toString() === toleranceNegativ.toString()))) {
                alert('Not the correct score but correct team! 3 points b');
                pointsScore += 3;
            } else if(winnerCheck1.checked === true && winnerCheck2.checked === false && parseInt(data[gameId].home_team.goals) > parseInt(data[gameId].away_team.goals)) {
                alert('Wrong result but correct team! 1 points');
                pointsScore += 1;
            } else if(winnerCheck1.checked === false && winnerCheck2.checked === true && parseInt(data[gameId].home_team.goals) < parseInt(data[gameId].away_team.goals))  {
                alert('Wrong result but correct team! 1 points');
                pointsScore += 1;
            } else {
                alert('Wrong result and wrong team! 0 points');
            }
            /*} else if (data[gameId].winner.value === data[gameId].away_team.country.value && (winnerCheck1.checked === false && winnerCheck2.checked === true) && ((goals2.value - 1) === data[gameId].home_team.goals || (goals2.value + 1) === data[gameId].home_team.goals)) {
                alert('You won! 3 points');
                pointsScore += 3;
            }*/
        }
    }
    else{
        alert('You lost!');
    }
    arr[gameId] = 1;
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

function init():void{
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
    header = document.getElementById("header");
    team1 = document.getElementById('team1');
    team2 = document.getElementById('team2');
    punkte = document.getElementById('punkte');
    button = document.getElementById('btn betButton');

    arr = new Array<number>(64);
    for(let i = 0; i < arr.length;i++){
        arr[i] = 0;
    }
    console.log(arr[0]);



    readTextFile("https://world-cup-json-2018.herokuapp.com/matches", function(text){
        let data = JSON.parse(text);
        console.log(data[10].weather.temp_celsius);
        writeStartSiteRoundOf16();
        betArea.classList.add("hidden");
        document.getElementById("betTable").addEventListener("click", function (e) {
            if(e.target.type == "button") {
                gameId = parseInt(e.target.id);
                table.classList.add("hidden");
                betArea.classList.remove("hidden");
                startGame(data);
            };
        })
    });


}
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
