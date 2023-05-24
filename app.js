import { gameLogic, getInitialState } from "./src/gameLogic.js";
import { getDefaultConfiguration } from "./src/lib/configurations.js";
import { PixelGameEngine } from "./src/lib/PixelGameEngine.js";
import { drawGameState } from "./src/rendering.js";

console.log("hello");

const pixelGame = new PixelGameEngine(getDefaultConfiguration(), getInitialState(), gameLogic, drawGameState);
pixelGame.start();

document.getElementById("restart-button").addEventListener("click", (e) => pixelGame.restart());