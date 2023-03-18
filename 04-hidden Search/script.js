const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
});

form.addEventListener("click", (e) => {
  e.preventDefault();
});

body.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList[0]) {
    return;
  } else {
    search.classList.remove("active");
  }
});
