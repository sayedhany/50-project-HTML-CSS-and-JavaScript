### Image-Carousel

- Live view: https://50-project-html-css-js-chatgpt.netlify.app/35-Image-Carousel

This code sets up an image slider functionality using HTML and JavaScript.

First, it selects the necessary elements by their ID's (imgs, leftBtn, and rightBtn) using `document.getElementById()`.

Then, the code selects all of the images inside the imgs element using `querySelectorAll("#imgs img")`, and initializes a variable `idx` to keep track of which image is currently displayed.

The `run()` function increments `idx` and calls `changeImage()` to update the displayed image.

The `changeImage()` function first checks whether `idx` has exceeded the bounds of the array of images, resets it to zero if so, or sets it to the last image if it's below zero. The function then uses `transform` CSS property to translate the position of the displayed images.

Lastly, the `resetInterval()` function clears any existing interval and sets a new one to call `run()` again after 2 seconds.

Finally, the code adds click event listeners to the left and right buttons that adjust `idx` and call `changeImage()` as well as `resetInterval()` to update the displayed image and restart the timer.
