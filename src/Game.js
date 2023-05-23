import { gameLogic, getConfigurations, getInitialState } from "./gameLogic.js";
import { drawGameState } from "./rendering.js";
import { canvas, ctx } from "./canvas.js";

export class Game {
    constructor() {
        if (Game.instance) {
            return Game.instance;
        }

        this.mainLoop = null;
        Game.instance = this;
    }
  
    static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
  
    start() {
        const state = getInitialState();
        drawGameState(state);
    
        this.mainLoop = setInterval(() => {
            gameLogic(state);
            drawGameState(state);
        }, 1000 / getConfigurations().fps);
    }
  
    restart() {
        // Black background
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Restart game loop
        clearInterval(this.mainLoop);
        this.start();
    }
}