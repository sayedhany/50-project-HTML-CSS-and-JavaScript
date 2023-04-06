const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseover", () => {
  if (container.classList.contains("hover-right")) {
    container.classList.remove("hover-right");
  }
  container.classList.add("hover-left");
});

right.addEventListener("mouseover", () => {
  if (container.classList.contains("hover-left")) {
    container.classList.remove("hover-left");
  }
  container.classList.add("hover-right");
});
