export const canvas = document.getElementById('my-canvas');
export const ctx = canvas.getContext('2d');

// Canvas Size
canvas.width = 500;
canvas.height = 500;

// Black background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);