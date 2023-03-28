/*
This is a JavaScript code that creates an analog clock and uses different functions, variables, and event listeners to manipulate the clock. 

The first 6 lines are selecting different HTML elements using Document Object Model (DOM) APIs.

An event listener for click events is added to the "toggle" element. When clicked, if the "html" element has a class of "dark", it removes the class and changes the text of the toggle button to "Dark mode". If it doesn't have the "dark" class, it adds it and changes the text of the toggle button to "Light mode".

The setTime() function gets the current time using the "Date()" constructor in JavaScript. It then extracts the hours, minutes, and seconds from the date object, along with the day of the week, month, and date. It calculates whether or not the time is AM or PM and sets hoursForClock to either the hours passed, or the hours passed modulo 12. This is used to accurately position the hour hand on the clock face.

The scale() function is a helper function that maps a number from one range to another. It takes in five arguments - num, in_min, in_max, out_min, and out_max - and returns a scaled value based on those arguments.

In the second part of the setTime() function, the hour, minute, and second hands of the clock are positioned by setting styles on each element's transform CSS property using template literals. The timeEl is updated by concatenating hoursForClock, minutes, and am/pm into a string. The dateEl is updated by concatenating the name of the day, abbreviation of the month, and the numerical date within a span.

setTime() is called once at the beginning of the script and then repeatedly using setInterval() every 1000 milliseconds to update the clock every second.
*/
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();

setInterval(setTime, 1000);
