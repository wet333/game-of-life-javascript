class Canvas {

    static instance;

    constructor(HTMLElementId, size) {
        if (Canvas.instance) {
            return Canvas.instance;
        }

        this.canvas = document.getElementById(HTMLElementId);
        this.context = this.canvas.getContext('2d');

        this.canvas.width = size.width;
        this.canvas.height = size.height;

        Canvas.instance = this;
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.context;
    }
}

export default Canvas;