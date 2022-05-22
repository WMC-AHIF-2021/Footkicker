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
let index1Btn = null;
let index2Btn = null;
let index3Btn = null;
let index4Btn = null;
let index5Btn = null;
let index6Btn = null;
let index7Btn = null;
let index8Btn = null;
let roundOf = null;
let stageCounter = 0;

function writeStartSiteRoundOf16():void{
    roundOf.innerText = "Round of 16";
    punkte.innerHTML = "Points: " + pointsScore;
    index1.innerHTML = '<img class="indexTeam1" src="./resources/icon/France.png"/><td>Game 01</td></img><img class="indexTeam2" src="./resources/icon/Argentina.png"/></img>';
    index1Btn.innerHTML = '<button type="button" class="btn betButton" id="48">Bet</button>';
    index2.innerHTML = '<img class="indexTeam1" src="./resources/icon/Uruguay.png"/><td>Game 02</td></img><img class="indexTeam2" src="./resources/icon/Portugal.png"/></img>';
    index2Btn.innerHTML = '<button type="button" class="btn betButton" id="49">Bet</button>';
    index3.innerHTML = '<img class="indexTeam1" src="./resources/icon/Spain.png"/><td>Game 03</td></img><img class="indexTeam2" src="./resources/icon/Russia.png"/></img>';
    index3Btn.innerHTML = '<button type="button" class="btn betButton" id="50">Bet</button>';
    index4.innerHTML = '<img class="indexTeam1" src="./resources/icon/Croatia.png"/><td>Game 04</td></img><img class="indexTeam2" src="./resources/icon/Denmark.png"/></img>';
    index4Btn.innerHTML = '<button type="button" class="btn betButton" id="51">Bet</button>';
    index5.innerHTML = '<img class="indexTeam1" src="./resources/icon/Brazil.png"/><td>Game 05</td></img><img class="indexTeam2" src="./resources/icon/Mexico.png"/></img>';
    index5Btn.innerHTML = '<button type="button" class="btn betButton" id="52">Bet</button>';
    index6.innerHTML = '<img class="indexTeam1" src="./resources/icon/Belgium.png"/><td>Game 06</td></img><img class="indexTeam2" src="./resources/icon/Japan.png"/></img>';
    index6Btn.innerHTML = '<button type="button" class="btn betButton" id="53">Bet</button>';
    index7.innerHTML = '<img class="indexTeam1" src="./resources/icon/Sweden.png"/><td>Game 07</td></img><img class="indexTeam2" src="./resources/icon/Switzerland.png"/></img>';
    index7Btn.innerHTML = '<button type="button" class="btn betButton" id="54">Bet</button>';
    index8.innerHTML = '<img class="indexTeam1" src="./resources/icon/Colombia.png"/><td>Game 08</td></img><img class="indexTeam2" src="./resources/icon/England.png"/></img>';
    index8Btn.innerHTML = '<button type="button" class="btn betButton" id="55">Bet</button>';
}

function writeStartSiteRoundOf8():void{
    roundOf.innerText = "Round of 8";
    punkte.innerHTML = "Points: " + pointsScore;
    index1.innerHTML = '<img class="indexTeam1" src="./resources/icon/Uruguay.png"/><td>Game 09</td></img><img class="indexTeam2" src="./resources/icon/France.png"/></img>';
    index1Btn.innerHTML = '<button type="button" class="btn betButton" id="56">Bet</button>';
    index2.innerHTML = '<img class="indexTeam1" src="./resources/icon/Brazil.png"/><td>Game 10</td></img><img class="indexTeam2" src="./resources/icon/Belgium.png"/></img>';
    index2Btn.innerHTML = '<button type="button" class="btn betButton" id="57">Bet</button>';
    index3.innerHTML = '<img class="indexTeam1" src="./resources/icon/Sweden.png"/><td>Game 11</td></img><img class="indexTeam2" src="./resources/icon/England.png"/></img>';
    index3Btn.innerHTML = '<button type="button" class="btn betButton" id="58">Bet</button>';
    index4.innerHTML = '<img class="indexTeam1" src="./resources/icon/Russia.png"/><td>Game 12</td></img><img class="indexTeam2" src="./resources/icon/Croatia.png"/></img>';
    index4Btn.innerHTML = '<button type="button" class="btn betButton" id="59">Bet</button>';
    index5.innerHTML = "";
    index5Btn.innerHTML = "";
    index6.innerHTML = "";
    index6Btn.innerHTML = "";
    index7.innerHTML = "";
    index7Btn.innerHTML = "";
    index8.innerHTML = "";
    index8Btn.innerHTML = "";
}

function writeStartSiteSemiFinals():void{
    roundOf.innerText = "Semi-Finals";
    punkte.innerHTML = "Points: " + pointsScore;
    index1.innerHTML = '<img class="indexTeam1" src="./resources/icon/France.png"/><td>Game 13</td></img><img class="indexTeam2" src="./resources/icon/Belgium.png"/></img>';
    index1Btn.innerHTML = '<button type="button" class="btn betButton" id="60">Bet</button>';
    index2.innerHTML = '<img class="indexTeam1" src="./resources/icon/Croatia.png"/><td>Game 14</td></img><img class="indexTeam2" src="./resources/icon/England.png"/></img>';
    index2Btn.innerHTML = '<button type="button" class="btn betButton" id="61">Bet</button>';
    index3.innerHTML = "";
    index3Btn.innerHTML = "";
    index4.innerHTML = "";
    index4Btn.innerHTML = "";
}

function writeStartSiteFinal():void{
    roundOf.innerText = "Finals";
    punkte.innerHTML = "Points: " + pointsScore;
    index1.innerHTML = '<img class="indexTeam1" src="./resources/icon/France.png"/><td>Game 15</td></img><img class="indexTeam2" src="./resources/icon/Croatia.png"/></img>';
    index1Btn.innerHTML = '<button type="button" class="btn betButton" id="63">Bet</button>';
    index2.innerHTML = '<img class="indexTeam1" src="./resources/icon/Belgium.png"/><td>Game 16</td></img><img class="indexTeam2" src="./resources/icon/England.png"/></img>';
    index2Btn.innerHTML = '<button type="button" class="btn betButton" id="62">Bet</button>';
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
            if(arr[48] === 1 && arr[49] === 1 && arr[50] === 1 && arr[51] === 1 && arr[52] === 1 && arr[53] === 1 && arr[54] === 1 && arr[55] === 1){
                stageCounter += 1;

                if(arr[56] === 1 && arr[57] === 1 && arr[58] === 1 && arr[59] === 1){

                    if(arr[60] === 1 && arr[61] === 1){

                        if(arr[62] === 1 && arr[63] === 1){
                            alert('You completed all games from the knockout-stage');
                            alert('You will now return to the start site');
                            window.location.href = '../../../../../index.html';
                        }else{
                            if(stageCounter === 13){
                                alert('You completed all games from the semi-finals');
                                alert('You now advance to the final und little final');
                            }
                            stageCounter += 1;
                            writeStartSiteFinal();
                        }
                    }
                    else{
                        if(stageCounter === 9){
                            alert('You completed all games from the round of 8');
                            alert('You now advance to the semi-finals');
                        }
                        stageCounter += 1;
                        writeStartSiteSemiFinals();
                    }
                }
                else{
                    if(stageCounter === 1){
                        alert('You completed all games from the round of 16');
                        alert('You now advance to the round of 8');
                    }
                    stageCounter += 1;
                    writeStartSiteRoundOf8();
                }
            }
            else{
                writeStartSiteRoundOf16();
            }
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
    index1Btn = document.getElementById('index1Btn');
    index2Btn = document.getElementById('index2Btn');
    index3Btn = document.getElementById('index3Btn');
    index4Btn = document.getElementById('index4Btn');
    index5Btn = document.getElementById('index5Btn');
    index6Btn = document.getElementById('index6Btn');
    index7Btn = document.getElementById('index7Btn');
    index8Btn = document.getElementById('index8Btn');
    roundOf = document.getElementById('roundOf');

    arr = new Array<number>(64);
    for(let i = 0; i < arr.length;i++){
        arr[i] = 0;
    }
    console.log(arr[0]);



    readTextFile("https://world-cup-json-2018.herokuapp.com/matches", function(text){
        let data = JSON.parse(text);
        console.log(data[10].weather.temp_celsius);
        writeStartSiteRoundOf16();
        //writeStartSiteRoundOf8();
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
