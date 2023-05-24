export const canvas = document.getElementById('my-canvas');
export const ctx = canvas.getContext('2d');

// Canvas Size
canvas.width = 700;
canvas.height = 700;

// Black background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);