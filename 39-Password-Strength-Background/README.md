### password-strength-background

Live view: https://50-project-html-css-js-chatgpt.netlify.app/39-password-strength-background/

This code selects two elements from the HTML document using their `id` attributes with `document.getElementById()`. One element with `id="password"` is assigned to the constant variable `password`, while another element with `id="background"` is assigned to the constant variable `background`.

After the first two lines of the code, an event listener is attached to the `password` element using `.addEventListener()`. The event listener listens for the "input" event and performs a callback function every time the value of the password input field changes.

The callback function receives an event object as a parameter (in this case, `e`). The function then extracts the value of the password input (`e.target.value`) and calculates its length.

Using the password input's length, the code calculates the blur value for the CSS filter property of the `background` element. The greater the input length, the smaller the blur value, and vice versa. The formula used to calculate `blurValue` is `20 - length * 2`.

Finally, the CSS `filter` property of the `background` element is updated with the new blur value using template literals. `background.style.filter = `blur(${blurValue}px)`;` sets the `filter` property of the `background` element to a string that contains the `blur` keyword and the calculated `blurValue` followed by `px` unit. This creates the effect of the background becoming more or less blurred based on the user's input in the password field.
