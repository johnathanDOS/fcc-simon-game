let gameState = {
    count: 0,
    simonPattern: [],
    playerPattern: [],
    state: 'idle', 
}

const rTone = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
const gTone = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
const bTone = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
const yTone = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')


function startGame() {
    if (gameState.state === 'idle') {
        countUp();
    }
}

function countUp() {
    const colors = ["r", "y", "g", "b"]
    gameState.simonPattern.push(colors[Math.floor(Math.random()  * 4)])
    gameState.count += 1;
    console.log(gameState.count)
    console.log(gameState.simonPattern)
    document.getElementById('count').innerHTML = gameState.count
    gameState.state = 'running'
    gameState.playerPattern = []
    smnTrn()
}

function changeColor(elementId, color) {
    document.getElementById(elementId).style.background = color
}

function lightUp(color) {
    if (color === 'b') {
        changeColor('blue-btn', '#6666ff')
        bTone.play()
        setTimeout(function() {
            changeColor('blue-btn', 'blue')
        }, 500)
    }
    if (color === 'r') {
        changeColor('red-btn', '#ff6666')
        rTone.play()
        setTimeout( function () {
            changeColor('red-btn', 'red')
        }, 500)
    }
    if (color === 'y') {
        changeColor('yellow-btn', '#ffff99')
        yTone.play()
        setTimeout(function() {
            changeColor('yellow-btn', 'yellow')
        }, 500)
    }
    if (color === 'g') {
        changeColor('green-btn', '#00e600')
        gTone.play()
        setTimeout(function() {
            changeColor('green-btn', 'green')
        }, 500)
    }
}

function playerClick(button) {
    if (nIntervId === null) {
        if (button.id === "blue-btn") {
            gameState.playerPattern.push("b")
            changeColor('blue-btn', '#6666ff')
            bTone.play()
            setTimeout(function() {
                changeColor('blue-btn', 'blue')
            }, 500)
        }
        if (button.id === "yellow-btn") {
            gameState.playerPattern.push("y")
            changeColor('yellow-btn', '#ffff99')
            yTone.play()
            setTimeout(function() {
                changeColor('yellow-btn', 'yellow')
            }, 500)
        }
        if (button.id === "red-btn") {
            gameState.playerPattern.push("r")
            changeColor('red-btn', '#ff6666')
            rTone.play()
            setTimeout( function () {
                changeColor('red-btn', 'red')
            }, 500)
        }
        if (button.id === "green-btn") {
            gameState.playerPattern.push("g")
            changeColor('green-btn', '#00e600')
            gTone.play()
            setTimeout(function() {
                changeColor('green-btn', 'green')
            }, 500)
        }
        if (gameState.state === 'running') {
            ptrnCompare()
        }
        if (gameState.playerPattern.length === gameState.simonPattern.length && gameState.state === 'running') {
            setTimeout(function () {
                countUp()
            }, 1000)
        }
    }
}

//light up game buttons according to gamestate.simonPattern
let nIntervId = null
let smnPtrnNode = 0
function smnTrn() {
    nIntervId = setInterval(plySmnPtrn, 1000)
}
function plySmnPtrn() {
    setTimeout(lightUp(gameState.simonPattern[smnPtrnNode]))
    smnPtrnNode ++
    if (smnPtrnNode > gameState.simonPattern.length) {
        clearInterval(nIntervId)
        nIntervId = null
        smnPtrnNode = 0
    }
    console.log(smnPtrnNode)
}

// TODO:
//     - Write function to check playerPattern against simonPattern
//     - Write code to read simonPattern array and play sounds/update display accordingly

function ptrnCompare() {
    for (var i = 0; i < gameState.playerPattern.length; i ++) {
        if (gameState.playerPattern[i] != gameState.simonPattern[i]) {
            gameState.count = 0
            document.getElementById('count').innerHTML = "Start over!"
            gameState.simonPattern = []
            gameState.playerPattern = []
            gameState.state = 'idle'
            break
        }
    }
}











