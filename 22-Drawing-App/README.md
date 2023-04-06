### 22-Drawing App

This code initializes and sets up a canvas with configurable brushes that can draw either circles or lines. It uses JavaScript to get references to the DOM elements of the canvas, increase button, decrease button, size element, color element, and clear element, so that it is possible to control and update them.

It listens to events like mouse down, mouse up and mouse move on the canvas element to track whether the user has pressed down on the canvas and is dragging the cursor while moving the mouse. When the user drags the mouse, it draws a circle at each point where the mouse has moved, and then draws a line between these points if the user continues to drag the mouse.

Whenever the user changes the color or brush size or clears the canvas, it updates the values accordingly using event listeners that adjust the size, color, or clear the canvas by erasing everything drawn on it.