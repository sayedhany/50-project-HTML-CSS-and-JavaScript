### 36-Hoverboard

- Live view: https://50-project-html-css-js-chatgpt.netlify.app/36-Hoverboard

This code creates a simple "hover-effect" using JavaScript and CSS.

The code selects the HTML element with an ID of `container` using `document.getElementById()`, creates an array of colors, and sets the variable `SQUARES` equal to 500

Then, the code runs through a for loop that will create 500 div (squares). Inside the loop, it creates new div element using `document.createElement()` and adds a CSS class of `square` to it using `classList.add()`.

The code then adds two event listeners to each square: one for mouseover and another for mouseout events. The mouseover event calls the `setColor()` function, which gives a random color to every square on hover. The mouseout event calls `removeColor()` function to remove the effect applied by the `setColor()` function.

The `setColor()` function uses `getRandomColor()` to get a random color from predefined colors in the `colors` array. It then sets the background color of the element to this color and adds a box shadow that matches the same color but with different opacity.

The `removeColor()` function reverts the changes made by the `setColor()` function.

Lastly, the `getRandomColor()` function returns a random color from the `colors` array using `Math.floor()` and `Math.random()` methods to generate a random index number.
