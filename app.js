import { gameLogic, getInitialState } from "./src/gameLogic.js";
import { PixelGameEngine } from "./src/lib/PixelGameEngine.js";
import { DEFAULT_CONFIGURATIONS } from "./src/lib/configurations.js";
import { drawGameState } from "./src/rendering.js";

const pixelGame = new PixelGameEngine(DEFAULT_CONFIGURATIONS, getInitialState(), gameLogic, drawGameState);
pixelGame.start();

document.getElementById("restart-button").addEventListener("click", (e) => pixelGame.restart());