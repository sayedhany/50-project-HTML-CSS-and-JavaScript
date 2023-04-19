const imgs = document.querySelectorAll(".content");
const btns = document.querySelectorAll("li");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn1) => {
      btn1.classList.remove("active");
    });
    btn.classList.add("active");
    console.log(idx);
    imgs.forEach((img) => {
      img.classList.remove("show");
    });
    imgs[idx].classList.add("show");
  });
});
