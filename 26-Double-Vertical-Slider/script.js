/*
The code creates a slider that can move up and down through the content in the slider.

The first five lines of the code use querySelector() to select the main div container for the slider, as well as three other elements within the container: the right slide, the left slide, and two buttons that allow the user to move the slider up or down. The slidesLength variable is then defined as the number of div elements in the slideRight element.

activeSlideIndex starts at 0 because this is the index of the first slide visible in the slider. The slideLeft element is positioned above slideRight by setting its top style property to -${(slidesLength - 1) * 100}vh. This makes it possible to show the previous slide when the user performs an "up" action on the slider.

Two event listeners are then added via addEventListener(), one for each button. They both call the function changSlide() when clicked, passing either "up" or "down" as an argument.

The changSlide() function gets the height of the sliderContainer element using clientHeight, and moves the active slide up or down depending on the direction. If the direction is "up", the activeSlideIndex is incremented, and if it goes beyond the last slide, it is reset to 0. If the direction is "down", activeSlideIndex is decremented, and if it becomes negative, it is set to slidesLength - 1.

Finally, the code updates the position of the slides using their transform style properties, which adjusts their vertical position based on the value of activeSlideIndex multiplied by the sliderHeight- making it possible to show the next or previous slide in the slider.
*/
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changSlide("up"));
downButton.addEventListener("click", () => changSlide("down"));

function changSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    console.log("here");
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}
