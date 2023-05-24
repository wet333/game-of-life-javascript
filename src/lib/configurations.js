const DEFAULT_FPS = 60;
const DEFAULT_COLUMNS = 100;
const DEFAULT_ROWS = 100;

const DEFAULT_HTML_CANVAS_ID = "my-canvas";
const DEFAULT_CANVAS_SIZE = {
    height: 700,
    width: 700,
}

const DEFAULT_CONFIGURATIONS = {
    fps: 1000 / DEFAULT_FPS,
    columns: DEFAULT_COLUMNS,
    rows: DEFAULT_ROWS,
    HTMLCanvasElementId: DEFAULT_HTML_CANVAS_ID,
    canvasSize: DEFAULT_CANVAS_SIZE,
};

export function getDefaultConfiguration() {
    return DEFAULT_CONFIGURATIONS;
}