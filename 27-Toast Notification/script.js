/*
This code defines a function called createNotification(), which creates a notification message to be displayed on the webpage when invoked.

The first two lines of the code use document.getElementById() method to select elements by their id attribute from the webpage markup and assign them to the variables button and toasts, correspondingly.

The next two variables messages and types are arrays that hold some messages and types of notification, respectively.

The button.addEventListener() method is used to add an event listener to the button such that when it is clicked, it invokes the createNotification() function.

The function createNotification() has two optional parameters, message and type. If these parameters are provided, they will be used to set the text and class name of the newly created notification message element. If these parameters are not provided, random message and type will be chosen using the getRandomMessage() and getRandomType() functions.

The rest of the createNotification() function body creates a new div element with a class name 'toast' and appends it as a child of the toasts element. The text of the notification is set to the innerText property of the new div element. Finally, a timer is set with the setTimeout() function so that after 3 seconds (3000 milliseconds), the newly added notification element is removed using the remove() method.

The getRandomMessgae() and getRandomType() functions simply return a random message or type respectively by generating a random index number using the Math.random() method and rounding it down to a whole number using the Math.floor() method.
*/
const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];
const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

console.log(button);
function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessgae();

  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}
function getRandomMessgae() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
