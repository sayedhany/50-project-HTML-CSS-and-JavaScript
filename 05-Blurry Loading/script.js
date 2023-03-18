const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
// The scale function takes in 5 arguments: num, in_min, in_max, out_min and out_max.
// num: The number that we want to convert from one scale to another.
// in_min: The lower limit of the original scale or range from which we want to map 'num'.
// in_max: The upper limit of the original scale or range from which we want to map 'num'.
// out_min: The lower limit of the new or target scale or range to which we want to map 'num'.
// out_max: The upper limit of the new or target scale or range to which we want to map 'num'.
// The function returns a new value after scaling/mapping the input numbers according to their respective ranges.
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
