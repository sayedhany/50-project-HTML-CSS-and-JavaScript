const btn = document.querySelector(".ripple");
const html = document.querySelector("html");
btn.addEventListener("click", (e) => {
  console.log(e);
  const x = e.pageX;
  const y = e.pageY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
  html.classList.toggle("toggle");
});
