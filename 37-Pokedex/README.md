### Pokedex

- Live view: https://50-project-html-css-js-chatgpt.netlify.app/37-Pokedex

This code fetches data of pokemons from an API and creates a card for each pokemon to display their information like image, name, id and type.

- `poke_container` is assigned the value of the HTML element with id "poke-container".
- `pokemon_count` is set to 150 indicating the total number of pokemon data to be fetched.
- `colors` is an object including different color codes for each type of pokemon.
- `main_types` is an array including strings of all types of pokemon.
- `fetchPokemons` is an asynchronous function that loops through each pokemon using a for loop calling `getPokemon` function for each pokemon.
- `getPokemon` is also an asynchronous function that takes an id as input and fetches the pokemon data using that id from the API. The fetched data is then sent to the function `createPokemonCard`.
- `createPokemonCard` function creates a div element dynamically, adds class to it and sets its background color based on the type of the pokemon. It creates the inner HTML of the div element using the fetched data of the pokemon and appends the element to the `poke_container`.
- Finally, the `fetchPokemons` function is called to initiate the process of fetching pokemon data one by one, creating card for each one and displaying it in the `poke_container`.
