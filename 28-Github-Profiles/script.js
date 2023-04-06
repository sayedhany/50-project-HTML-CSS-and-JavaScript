/*
This code is a JavaScript program that fetches data about a GitHub user and displays it on an HTML webpage. 

The first three lines declare constants `APIURL`, `main`, `form`, and `search` using the `const` keyword. `APIURL` is a string that represents the URL of the GitHub API endpoint to be used for fetching user information. `main`, `form`, and `search` are DOM elements, identified by their respective `id` attributes.

The next line declares a variable `user` using the `let` keyword.

The next function, `getUser(username)`, is an asynchronous function declared using the `async` keyword. It takes in a `username` parameter, which will be concatenated with `APIURL` to fetch information about the specified GitHub user from the API. The function uses the `try-catch` block to handle errors in case there is no such user found. If the API call is successful, `createUserCard(data)` and `getRepos(username)` functions will be called with the fetched data.

The `getRepos(username)` function is another asynchronous function declared using the `async` keyword. This function fetches repository data about the specified GitHub user using the same API endpoint. It also uses the `try-catch` block to handle errors such as when repositories for the specified user cannot be found.

The `createUserCard(user)` function takes in a `user` object and generates the HTML card containing information about the GitHub user. If the user has a `name`, it is used as the `userID`. Otherwise, the `login` name will be used. A condition checks if the `bio` exists, and if so, adds it to the card. The function then adds the `avatar_url`, `followers`, `following`, `public_repos`, and "remove" button to the card. When `createUserCard(user)` is called, it overwrites the `innerHTML` of the `main` element with the generated card HTML. It also adds an event listener to listen for a `click` event and remove the card if the button is clicked.

The `createErrorCard(msg)` function generates an error card HTML when called with an input `msg`. When called, it overwrites the `innerHTML` of the `main` element with the generated HTML.

The `addReposToCard(repos)` function takes in an array of repository data about a GitHub user and generates an HTML list containing at most five repositories. Each repository item links to the corresponding repository on GitHub by setting its `href` attribute to the HTML URL of the repository. When called, `addReposToCard(repos)` appends the generated HTML to the `repos` element within the previously created card.

The last part of the program registers an event listener on the form element. When a form submission event is triggered, the `getUser()` function will be called, passing in the value entered as the input field's value, after which the value of the input field will be cleared.
*/
const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
let user;

async function getUser(username) {
  try {
    const { data } = await axios(`${APIURL}${username}`);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(`${APIURL}${username}/repos?sort=created`);
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}
function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.name}</p>` : "";
  const cardHTML = `
  <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
    <button class="remove">remove</button>
  </div>
  `;
  main.innerHTML = cardHTML;
  const remove = document.querySelector(".remove");
  const card = document.querySelector(".card");
  remove.addEventListener("click", (e) => {
    card.remove();
  });
}
function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</div>
    </div>
  `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
// createUserCard(null);
