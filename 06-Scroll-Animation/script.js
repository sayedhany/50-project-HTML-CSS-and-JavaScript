const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  console.log("triggerBottom: ", triggerBottom);
  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    console.log(box.getBoundingClientRect());
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
