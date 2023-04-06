/*
This code initializes and sets up a canvas with configurable brushes that can draw either circles or lines. It uses JavaScript to get references to the DOM elements of the canvas, increase button, decrease button, size element, color element, and clear element, so that it is possible to control and update them.

It listens to events like mouse down, mouse up and mouse move on the canvas element to track whether the user has pressed down on the canvas and is dragging the cursor while moving the mouse. When the user drags the mouse, it draws a circle at each point where the mouse has moved, and then draws a line between these points if the user continues to drag the mouse.

Whenever the user changes the color or brush size or clears the canvas, it updates the values accordingly using event listeners that adjust the size, color, or clear the canvas by erasing everything drawn on it.
*/
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPreassed = false;
colorEl.value = "black";
let color = colorEl.value;
let x, y;

canvas.addEventListener("mousedown", (e) => {
  isPreassed = true;

  x = e.offsetX;
  y = e.offsety;
});

document.addEventListener("mouseup", (e) => {
  isPreassed = false;

  x = y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPreassed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updaeSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", (e) => {
  size += 5;

  if (size > 50) {
    size = 50;
  }
  updaeSizeOnScreen();
});

decreaseBtn.addEventListener("click", (e) => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updaeSizeOnScreen();
});
colorEl.addEventListener("change", (e) => (color = e.target.value));
clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
