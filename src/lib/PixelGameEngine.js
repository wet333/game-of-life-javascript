import Canvas from "./Canvas.js";
import { deepCopy } from "./utils.js";

export class PixelGameEngine {

    static instance;

    constructor(configuration, initialState, updateLogic, renderLogic, controlls = null) {
        
        if (PixelGameEngine.instance) {
            return PixelGameEngine.instance;
        }
      
        this.configuration = configuration;
        this.initialState = deepCopy(initialState);
        this.state = deepCopy(initialState);
        this.updateFunction = updateLogic;
        this.renderFunction = renderLogic;
        this.controlls = controlls;

        console.log(this.configuration);

        this.canvas = new Canvas(
            configuration.HTMLCanvasElementId, 
            configuration.canvasSize,
        );
    
        // Internal data
        this.gameLoop;
        
        PixelGameEngine.instance = this;
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