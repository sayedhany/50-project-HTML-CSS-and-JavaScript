const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);
function doTheTrick(theChickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theChickedOne) {
      fast.checked = false;
    }
    if (cheap === theChickedOne) {
      good.checked = false;
    }
    if (fast === theChickedOne) {
      cheap.checked = false;
    }
  }
}
