export class PixelGameEngine {

    constructor(configuration, initialState, updateLogic, renderLogic, controlls = null) {
        
        if (PixelGameEngine.instance) {
            return PixelGameEngine.instance;
        }
      
        this.configuration = configuration;
        this.initialState = initialState;
        this.state = initialState;
        this.updateFunction = updateLogic;
        this.renderFunction = renderLogic;
        this.controlls = controlls;
    
        // Internal data
        this.gameLoop;
        
        PixelGameEngine.instance = this;
    }

    start() {
        this.mainLoop = setInterval(() => {
            this.renderFunction(this.state);
            this.updateFunction(this.state);
        }, this.configuration.fps)
    }

    restart() {
        clearInterval(this.mainLoop);
        this.state = this.initialState;
        this.start();
    }
}