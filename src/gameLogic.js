import { PixelGameEngine } from "./lib/PixelGameEngine.js";
import { getDefaultConfiguration } from "./lib/configurations.js";

const game = new PixelGameEngine();
const canvas = game.canvas.getCanvas();

export function getInitialState() {
    return {
        config: getDefaultConfiguration(),
        display: generatePixelMatrix(getDefaultConfiguration().columns, getDefaultConfiguration().rows),
        ticks: 0,
    };
}

export function gameLogic(state) {
    const lastState = {...state};

    const deadCellColor = "black";
    const livingCellColor = "white";
    const colorsArray = [deadCellColor, livingCellColor];

    state.ticks = state.ticks + 1;

    if (state.ticks === 1) {
        traverseAndMutateMatrix(state.display.colors, (color, row, column) => {
            return color === deadCellColor ? colorsArray[Math.round(Math.random() - 0.45) % colorsArray.length] : deadCellColor;
        });
    }

    if(state.ticks > 1 && state.ticks % 5 === 0) {

        traverseAndMutateMatrix(state.display.colors, (color, row, column) => {

            const neighbors = getNeighbors(lastState.display.colors, row, column);

            let deadNeighbors = 0;
            let livingNeighbors = 0;

            neighbors.forEach((neighbor) => {
                if (neighbor === deadCellColor) {
                    deadNeighbors++;
                } else if (neighbor === livingCellColor) {
                    livingNeighbors++;
                }
            });

            return applyRules(color, deadNeighbors, livingNeighbors, deadCellColor, livingCellColor);
        });

    }
}

// Conway Game of Life rules
function applyRules(color, deadNeighbors, livingNeighbors, deadCellColor, livingCellColor) {
    // Any live cell with fewer than two live neighbors dies
    if (color === livingCellColor && livingNeighbors < 2) {
      return deadCellColor;
    }
  
    // Any live cell with two or three live neighbors lives
    if (color === livingCellColor && (livingNeighbors === 2 || livingNeighbors === 3)) {
      return livingCellColor;
    }
  
    // Any live cell with more than three live neighbors dies
    if (color === livingCellColor && livingNeighbors > 3) {
      return deadCellColor;
    }
  
    // Any dead cell with exactly three live neighbors becomes a live cell
    if (color === deadCellColor && livingNeighbors === 3) {
      return livingCellColor;
    }
  
    return color;
}

function getNeighbors(matrix, row, column) {
    const neighbors = [];
  
    // add the top-left neighbor if it exists
    if (row > 0 && column > 0) {
      neighbors.push(matrix[row - 1][column - 1]);
    }
  
    // add the top neighbor if it exists
    if (row > 0) {
      neighbors.push(matrix[row - 1][column]);
    }
  
    // add the top-right neighbor if it exists
    if (row > 0 && column < matrix[0].length - 1) {
      neighbors.push(matrix[row - 1][column + 1]);
    }
  
    // add the left neighbor if it exists
    if (column > 0) {
      neighbors.push(matrix[row][column - 1]);
    }
  
    // add the right neighbor if it exists
    if (column < matrix[0].length - 1) {
      neighbors.push(matrix[row][column + 1]);
    }
 
    // add the bottom-left neighbor if it exists
    if (row < matrix.length - 1 && column > 0) {
        neighbors.push(matrix[row + 1][column - 1]);
    }

    // add the bottom neighbor if it exists
    if (row < matrix.length - 1) {
        neighbors.push(matrix[row + 1][column]);
    }

    // add the bottom-right neighbor if it exists
    if (row < matrix.length - 1 && column < matrix[0].length - 1) {
        neighbors.push(matrix[row + 1][column + 1]);
    }

    return neighbors;
}

function traverseAndMutateMatrix(matrix, callback) {
    matrix.forEach((row, rowIndex) => {
        row.forEach((element, columnIndex) => {
            matrix[rowIndex][columnIndex] = callback(element, rowIndex, columnIndex);
        });
    });
}

function generatePixelMatrix(columns, rows) {
    // pixel matrix
    const pixelMatrix = [];
    const pixelColorMatrix = [];
  
    // calculate the size of each square
    var squareWidth = canvas.width / columns;
    var squareHeight = canvas.height / rows;
  
    // loop through the rows and columns to draw the squares
    for (var row = 0; row < rows; row++) {
        // create a new row in both matrixes
        pixelMatrix[row] = [];
        pixelColorMatrix[row] = [];

        for (var col = 0; col < columns; col++) {
            // calculate the x and y coordinates of the square
            var x = col * squareWidth;
            var y = row * squareHeight;
    
            // add the square to the pixel matrix
            pixelMatrix[row][col] = {
            x: x,
            y: y,
            width: squareWidth,
            height: squareHeight,
            col: col,
            row: row,
            };

            pixelColorMatrix[row][col] = "black";
        }
    }

    return { grid: pixelMatrix, colors: pixelColorMatrix };
}