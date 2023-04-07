### Password enerator

- Live view: https://50-project-html-css-js-chatgpt.netlify.app/31-Password-Generator

This code is for generating a random password based on user input.

- The first section of the code consists of multiple lines where different elements are being retrieved from the HTML document using their corresponding 'id' values.

- A random function object is defined that includes four different functions, each of which generates a value from a different character set: lowercase letters, uppercase letters, numbers, and symbols.

- Two event listeners are defined. One listens for clicks on the "generate" button, and the other listens for clicks on the "clipboard" button.

- When the "generate" button is clicked, the program retrieves the values from the checkbox inputs as well as the length of password input. Then it passes these values to the generatePassword() function which will generate the desired password according to the user's input.

- The generatePassword() function takes in the user's input values and checks whether any of the 4 types of characters should be included in the generated password or not. It then stores these types of characters in an array called typesArr.

- The function creates an empty string called generatedPassword, and the typesArr is used to loop through its types of characters to continuously add random characters to the generatedPassword string until the length of the password is reached.

- Once the length is reached, the final password is sliced from generatedPassword if it exceeds the user's desired length. Finally, the password is returned and displayed on the webpage.

- When the "clipboard" button is clicked, the program copies the generated password to the clipboard and shows an alert message that the password has been copied.
