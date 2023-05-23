import { Game } from "./src/Game.js";

const game = Game.getInstance();

game.start();

document.getElementById("restart-button").addEventListener("click", (e) => game.restart());