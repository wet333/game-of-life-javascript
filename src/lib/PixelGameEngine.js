import Canvas from "./Canvas.js";
import { getDefaultConfiguration } from "./configurations.js";
import { deepCopy } from "./utils.js";

export class PixelGameEngine {

    static instance;

    constructor(initialState, updateLogic, renderLogic, controlls) {
      
        this.configuration = getDefaultConfiguration();
        this.initialState = deepCopy(initialState);
        this.state = deepCopy(initialState);
        this.updateFunction = updateLogic;
        this.renderFunction = renderLogic;
        this.controlls = controlls;

        this.canvas = new Canvas(
            getDefaultConfiguration().HTMLCanvasElementId, 
            getDefaultConfiguration().canvasSize,
        );
    
        // Internal data
        this.gameLoop;
    }

    static getInstance() {
        return PixelGameEngine.instance;
    }

    static initInstance(initialState, updateLogic, renderLogic, controlls = null) {
        PixelGameEngine.instance = new PixelGameEngine(initialState, updateLogic, renderLogic, controlls)
    }

    start() {
        this.gameLoop = setInterval(() => {
            this.renderFunction(this.state);
            this.updateFunction(this.state);
        }, this.configuration.fps)
    }

    restart() {
        clearInterval(this.gameLoop);
        this.state = deepCopy(this.initialState);
        this.start();
    }
}