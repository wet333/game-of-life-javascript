import { PixelGameEngine } from "./lib/PixelGameEngine.js";

const game = new PixelGameEngine();
const ctx = game.canvas.getContext();

export function drawGameState(state) {

    // Black background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    traverseDisplayMatrices(state.display.grid, state.display.colors, (gridElement, colorElement) => {
        ctx.fillStyle = colorElement;
        ctx.fillRect(gridElement.x, gridElement.y, gridElement.width, gridElement.height);
    });
}

function traverseDisplayMatrices(matrix1, matrix2, callback) {      // Just works for two equal matrices!!!
    matrix1.forEach((row, rowIndex) => {
        row.forEach((element, elementIndex) => {
            // call the callback function with the element from matrix1, the corresponding element from matrix2, the row index, and the column index
            callback(element, matrix2[rowIndex][elementIndex], rowIndex, elementIndex);
        });
    });
}

// Unused
/* function traverseMatrix(matrix, callback) {
    matrix.forEach((row, rowIndex) => {
        row.forEach((element, columnIndex) => {
            callback(element, rowIndex, columnIndex);
        });
    });
} */