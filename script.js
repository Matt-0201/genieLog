// Script issu du projet S8 jeu de dames
// Début du projet - script de test

import "./checkboards.js";

// Initialisation
document.addEventListener("mousemove", logMouse)
let canvasCheckboard = document.getElementById("canvas");
canvasCheckboard.addEventListener("mousedown", clickMouse)
const tileSize = 50;

// We get the position of the mouse
let positon = document.getElementById("position")
let positonClick = document.getElementById("positionClick")

// Functions
function drawSquare(drawContext, color, coords) {
    drawContext.fillStyle = "color";
    drawContext.fillRect(coords.x*tileSize, coords.y*tileSize, tileSize, tileSize);
}

function drawCheckboard() {
    const drawContext = canvasCheckboard.getContext("2d");
    
    for (let y = 0; y < colorCheckboard.length; y++) {
        for (let x = 0; x < colorCheckboard[y].length + 10; x++) {
            coords = {x: x, y: y};
            if (colorCheckboard[y][x] == 1) {
                drawSquare(drawContext, "brown", coords);
            } 
            if (colorCheckboard[y][x] == 2) {
                drawSquare(drawContext, "gray", coords);
            } 
        }
    }
}

function drawPlayer(drawContext, color, coords) {
    drawContext.fillStyle = "black";
    const circle = new Path2D();
    circle.arc(tileSize/2 +x*tileSize, tileSize/2 + y*tileSize, 20, 0, 2*Math.PI);
    drawContext.fill(circle);
}

function drawPlayersOnCheckboard() {
    const drawContext = canvasCheckboard.getContext("2d");

    for (let y = 0; y < colorCheckboard.length; y++) {
        for (let x = 0; x < colorCheckboard[y].length; x++) {
            coords = {x: x, y: y};
            if (playerCheckboard[y][x] == 1) {
                drawPlayer(drawContext, "black", coords);
            } 
            if (playerCheckboard[y][x] == 2) {
                drawPlayer(drawContext, "white", coords);
            }  
        }
    }
}

function logMouse(e) {
    positon.innerHTML = "Position: " + e.screenX + "/" + e.screenY;
}

function clickMouse(e) {
    positonClick.innerHTML = "Position du click: " + e.clientX + "/" + e.clientY;
    playAMove(e.offsetX, e.offsetY)
}

function playAMove(x, y) {
    const drawContext = canvasCheckboard.getContext("2d");
    for (let j = 0; j < playerCheckboard.length; j++) {
        for (let i = 0; i < playerCheckboard[j].length; i++) {
            let posX = Math.floor(x/tileSize); 
            let posY = Math.floor(y/tileSize);

            if (playerCheckboard[posY][posX] == 1) {
                console.log("Black played !")
                let newX = posX + 1;
                let newY = posY + 1;
                playerCheckboard[posY][posX] = 0;
                playerCheckboard[newY][newX] = 1;
                ctx.clearRect(posX*tileSize, posY*tileSize, 50, 50)
                drawCheckboard()
                drawPlayer()
            } else if (playerCheckboard[posY][posX] == 2) {
                console.log("White played")
                let newX = posX;
                let newY = posY - 1;
                playerCheckboard[posY][posX] = 0;
                playerCheckboard[newY][newX] = 2;
                ctx.clearRect(posX*tileSize, posY*tileSize, 50, 50)
                drawCheckboard()
                drawPlayer()
            } else {
                console.log("No pawn here")
            }
        }
    }
}

drawCheckboard();
drawPlayersOnCheckboard();

