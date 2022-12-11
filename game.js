const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Fullscreen canvas
canvas.width = 800;
canvas.height = 800;

// Black background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Pixels
function generatePixelArray() {
    // pixel quantity
    const columns = 100;
    const rows = 100;
    const pixelArray = [];

    // calculate the size of each square
    var squareWidth = canvas.width / columns;
    var squareHeight = canvas.height / rows;

    // loop through the rows and columns to draw the squares
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < columns; col++) {
            // calculate the x and y coordinates of the square
            var x = col * squareWidth;
            var y = row * squareHeight;

            pixelArray.push({
                x: x,
                y: y,
                width: squareWidth,
                height: squareHeight,
                color: "black",
            });
        }
    }
    return pixelArray;
}

// Draws all the pixels in the pixel array
function drawGameState(state) {
    state.pixels.forEach(pixel => {
        ctx.fillStyle = pixel.color;
        ctx.fillRect(pixel.x, pixel.y, pixel.width, pixel.height);
    });
}

// Update the state of the game
function updateGameState(state) {

    const colorsArray = ["black", "pink"];

    state.ticks = state.ticks + 1;

    if(state.ticks % 30 === 0) {
        state.pixels.forEach(pixel => {
            pixel.color = pixel.color === 'black' ? colorsArray[Math.round(Math.random() - 0.4) % colorsArray.length] : 'black';
        });
    }
    
}

function startGameLoop() {

    // Set Initial State
    const state = {
        pixels: generatePixelArray(),
        ticks: 0,
    }

    // Initial Loop
    drawGameState(state);

    return setInterval(function() {
        
        // Update the game state here
        updateGameState(state);
        // Draw the game state on the canvas here
        drawGameState(state);
        
    }, 1000 / 60);
}

const mainLoop = startGameLoop();