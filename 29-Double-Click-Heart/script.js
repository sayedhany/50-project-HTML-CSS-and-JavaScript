const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
const clear = document.querySelector(".btn");
let clickTime = 0;
let timesClicked = localStorage.getItem("count") || 0;
times.innerHTML = timesClicked;
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      // console.log("here");
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
clear.addEventListener("click", () => {
  timesClicked = 0;
  localStorage.removeItem("count");
  times.innerHTML = 0;
});
function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  //This allows you to easily access the X and Y coordinates of where an event occurred, such as a mouse click or cursor movement.
  const { clientX: x, clientY: y } = e;
  //The offsetLeft and offsetTop properties represent its position relative to its parent container.
  const { offsetLeft: leftOffset, offsetTop: topOffset } = e.target;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  // console.log(timesClicked);
  times.innerHTML = ++timesClicked;
  // console.log(timesClicked);
  localStorage.setItem("count", timesClicked);
  setTimeout(() => heart.remove(), 1000);
}
