import { canvas, ctx } from "./src/canvas.js";
import { gameLogic, getConfigurations, getInitialState } from "./src/gameLogic.js";
import { drawGameState } from "./src/rendering.js";

export let mainLoop = startGameLoop();

// Starts the game
export function startGameLoop() {

    let state = getInitialState();
    
    drawGameState(state);

    return setInterval(function() {

        // Update the game state here
        gameLogic(state);
        // Draw the game state on the canvas here
        drawGameState(state);
        
    }, 1000 / getConfigurations().fps);
};

document.getElementById("restart-button").addEventListener("click", (e) => {
    // Black background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Restart game loop
    clearInterval(mainLoop);
    mainLoop = startGameLoop();
});