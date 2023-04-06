/*
This is a code written in JavaScript programming language that covers basic functionalities for creating a slideshow.

The first three lines of code are selecting the HTML elements that will be used in the JavaScript code. "document.body" selects the entire body element of the HTML document, ".slide" selects all elements with the class "slide", and "getElementById" selects the HTML element(s) with an "id" attribute matching the specified string.

The next line initializes the activeSlide variable to 0.

Two event listeners are added to listen for click events on the rightBtn and leftBtn. If the right button is clicked, the active slide is incremented by 1. If it exceeds the length of the slide array, it is reset back to 0. The same logic applies when clicking the left button, except the active slide is decremented by 1 and checked if it has gone below 0.

Both right and left button event functions call two other functions: setBgToBody() and setActiveSlide().

setBgToBody() sets the background image of the body element to the current active slide's background image.

setActiveSlide() removes the "active" class from all slides, then adds the "active" class to the current active slide.

At the end of the script, there is a call to setBgToBody() to set the initial background image of the body based on the first slide in the HTML.
*/
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});
setBgToBody();
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
