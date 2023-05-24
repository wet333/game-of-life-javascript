import { PixelGameEngine } from "./src/lib/PixelGameEngine.js";
import { gameLogic, getInitialState } from "./src/gameLogic.js";
import { drawGameState } from "./src/rendering.js";

PixelGameEngine.initInstance(getInitialState(), gameLogic, drawGameState);
PixelGameEngine.getInstance().start();

document.getElementById("restart-button").addEventListener("click", (e) => PixelGameEngine.getInstance().restart());