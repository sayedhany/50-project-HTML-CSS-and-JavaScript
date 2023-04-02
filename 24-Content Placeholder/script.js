/*
 * This code selects some HTML elements by their IDs and assigns them to variables. The selected elements include the header, title, excerpt, profile image, name, and date. Additionally, this code will select all elements with class "animated-bg" and "animated-bg-text" using querySelectorAll method.

Next, there is a function called getData() that sets the innerHTML of each of these selected elements to certain values. Specifically, header gets a new image, title gets some text, excerpt gets some more text, profile_img gets an image of John Doe, name gets the name "John Doe", and date gets the string "Oct 08, 2020".

Finally, in this function, we remove the classes "animated-bg" and "animated-bg-text" from all elements with these classes using the forEach method.

Overall, this code appears to be setting up a webpage with a specific design for the data, which is activated after 2.5 seconds through the setTimeout function.
 */
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);
function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />`;
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
