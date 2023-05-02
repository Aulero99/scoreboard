let scores = []

function scoreUp (score, team) {
    scores[team] += score
    drawScore(team)
}

function resetScore (){
    if (scores.length <= 0) {
        return
    }
    for (let i = 0; i<(scores.length); i++){
        scores[i] = 0
        drawScore(i)
    }
}

function drawScore(team) {
    document.getElementById('score' + team.toString()).innerText = scores[team].toString()

}


let players = 0
let element = undefined

function addPlayer() {
    
    let playerNum = document.createElement('div')
    playerNum.id = ('player' + players.toString())
    playerNum.classList.add('col-4')
    playerNum.classList.add('card')
    playerNum.classList.add('p-3')
    element = document.getElementById('board')
    element.lastChild.after(playerNum)

    let playerH1 = document.createElement('h1')
    playerH1.innerText = 'Player ' + (players + 1).toString()
    element = document.getElementById('player' + players.toString())
    element.appendChild(playerH1)

    let playerSc = document.createElement('div')
    playerSc.id = ('score' + players.toString())
    playerSc.innerText = '0'
    element = document.getElementById('player' + players.toString())
    element.lastChild.after(playerSc)

    let playerBt1 = document.createElement('div')
    playerBt1.id = ('button' + players.toString() + 'Num'  + players.toString())
    element = document.getElementById('player' + players.toString())
    element.lastChild.after(playerBt1)

    let btnCont = document.getElementById('button' + players.toString() + 'Num'  + players.toString())
    btnCont.innerHTML += 
    '<button onclick="scoreUp(1,' + players.toString() +')">+1</button> <button onclick="scoreUp(3,' + players.toString() +')">+3</button> <button onclick="scoreUp(6,' + players.toString() +')">+6</button>'

    players ++
    scores.push(0)
}


function remPlayer(){
    if (players<=0){
        return
    }

    let element = document.getElementById('player' + (players - 1).toString());
    element.remove()
    scores.splice(scores.length)
    players--
    scores = scores.slice(0,-1)
}


function resetPlayers(){
    for (let i = 0; i<players; players--){
        let element = document.getElementById('player' + (players - 1).toString());
        element.remove()
        scores.splice(scores.length)
        scores = scores.slice(0,-1)
    }
}
