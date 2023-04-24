### progress steps

- Live view: https://50-project-html-css-js-chatgpt.netlify.app/02-Progress%20Steps

The given code is for creating an interactive progress tracker that can be used to show the progress status of a multi-step process. The progress tracker contains a number of circles that represent each step and show the current step as "active".

1. `const progress = document.getElementById("progress");`
   The code first selects the HTML element with the id "progress" and stores it in a variable called `progress`.

2. `const next = document.getElementById("next"); const prev = document.getElementById("prev");`
   This code selects the HTML elements with ids "next" and "prev" respectively, which represent the next and previous buttons of the progress tracker.

3. `const circles = document.querySelectorAll(".circle");`
   This code selects all the HTML elements with the class name "circle" and stores them in an array `circles`.

4. `let currentActive = 1;`
   This line initializes the current active step to 1.

5. `next.addEventListener("click", () => {...});` & `prev.addEventListener("click", () => {...});`
   These two lines of code add event listeners to the next and previous buttons respectively. When clicked, the currentActive variable is updated and then the `update()` function is called to update the progress tracker UI accordingly.

6. `function update() {...}`
   This is the main function that updates the progress tracker UI based on the currentActive value.

- The `forEach()` method loops through all the circles and adds/removes the "active" class from the appropriate circles based on the currentActive value.
- The code then calculates the width of the progress bar by dividing the number of "active" circles by the total number of circles.
- Finally, the code disables the "previous" button if the currentActive value is the first step or disables the "next" button if the currentActive value is the last step.

In summary, the code creates an interactive progress tracker UI with a progress bar and step circles. When the user clicks the next/previous buttons, the current active step is updated and the progress tracker UI updates accordingly. The current active step is represented by an "active" class on the corresponding circle.
