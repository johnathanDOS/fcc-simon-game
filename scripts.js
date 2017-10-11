let gameState = {
    count: 0,
    simonPattern: [],
    playerPattern: [], 
}

function countUp() {
    const colors = ["r", "y", "g", "b"]
    gameState.simonPattern.push(colors[Math.floor(Math.random()  * 4)])
    gameState.count += 1;
    console.log(gameState.simonPattern)
}

function playerClick(button) {
    if (button.id === "blue-btn") {
        gameState.playerPattern.push("b")
    }
    if (button.id === "yellow-btn") {
        gameState.playerPattern.push("y")
    }
    if (button.id === "red-btn") {
        gameState.playerPattern.push("r")
    }
    if (button.id === "green-btn") {
        gameState.playerPattern.push("g")
    }
}


// TODO:
//     - Write function to check playerPattern against simonPattern
//     - Write code to read simonPattern array and play sounds/update display accordingly
