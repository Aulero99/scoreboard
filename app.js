let scores = []
let players = 0
let element = undefined

let scoreButtonOne = 1
let scoreButtonTwo = 2
let scoreButtonThree = -1

function scoreUp (size, team) {
    scores[team] += size
    drawScore(team)
    totalScore()
}

function totalScore() {
    if (scores.length <= 0) {return}
    let sum = 0

    for (let i = 0; i<(scores.length); i++){
        sum += scores[i]
    }
    console.log ('The total score is ' + sum)
}

function resetScore(team) {
    scores[team] = 0
    drawScore(team)
    totalScore()
}

function resetAllScore (){
    if (scores.length <= 0) {return}

    for (let i = 0; i<(scores.length); i++){
        scores[i] = 0
        drawScore(i)
    }

    console.log('All scores reset')
}

function drawScore(team) {
    document.getElementById('score' + team.toString()).innerText = scores[team].toString()

}

function addPlayer() {
    
    let playerNum = document.createElement('div')
    playerNum.id = ('player' + players.toString())
    playerNum.classList.add('col-4')
    playerNum.classList.add('scorecard-container')
    element = document.getElementById('board')
    element.lastChild.after(playerNum)

    let playerCard = document.createElement('div')
    playerCard.id = ('card' + players.toString())
    playerCard.classList.add('scorecard')
    element = document.getElementById('player' + players.toString())
    element.appendChild(playerCard)

    let playerH1 = document.createElement('h1')
    playerH1.innerText = 'Player ' + (players + 1).toString()
    element = document.getElementById('card' + players.toString())
    element.appendChild(playerH1)

    let playerSc = document.createElement('div')
    playerSc.id = ('score' + players.toString())
    playerSc.innerText = '0'
    playerSc.classList.add('current-score')
    element = document.getElementById('card' + players.toString())
    element.lastChild.after(playerSc)

    let playerBt1 = document.createElement('div')
    playerBt1.id = ('button' + players.toString() + 'Num'  + players.toString())
    playerBt1.classList.add('scorecard-buttons')
    element = document.getElementById('card' + players.toString())
    element.lastChild.after(playerBt1)

    let btnCont = document.getElementById('button' + players.toString() + 'Num'  + players.toString())
    btnCont.innerHTML += 
    '<button onclick="scoreUp(' + scoreButtonOne.toString() + ',' + players.toString() +')">' + scoreButtonOne.toString() + '</button> <button onclick="scoreUp(' + scoreButtonTwo.toString() + ',' + players.toString() +')">' + scoreButtonTwo.toString() + '</button> <button onclick="scoreUp(' + scoreButtonThree.toString() + ',' + players.toString() +')">' + scoreButtonThree.toString() + '</button> <button onclick="resetScore(' + players.toString() +')">Reset</button>'

    players ++
    scores.push(0)
}

function remPlayer(){
    if (players<=0){return}

    let element = document.getElementById('player' + (players - 1).toString());
    element.remove()
    scores.splice(scores.length)
    players--
    scores = scores.slice(0,-1)
}

function resetPlayers(){
    if (players<=0){return}

    for (let i = 0; i<players; players--){
        let element = document.getElementById('player' + (players - 1).toString());
        element.remove()
        scores.splice(scores.length)
        scores = scores.slice(0,-1)
    }
}
