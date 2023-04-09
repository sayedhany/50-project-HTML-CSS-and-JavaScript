### 33-Notes-App

- Live view: https://50-project-html-css-js-chatgpt.netlify.app/33-Notes-App

This JavaScript code creates a web application that allows users to add and delete notes.

First, the addBtn variable is defined and assigned the value of an HTML element with the ID "add." Then, the notes variable is defined and assigned the parsed value of the "notes" key in the localStorage object as an array.

Next, there is a conditional statement that checks whether the notes array exists. If it does, then it executes the forEach() method on the notes array and calls the addNewNote() function for each note.

The addNewNote() function creates an HTML div element and assigns it a class of "note." It then adds two nested div elements, one with a class of "tools" containing two buttons with classes of "edit" and "delete," respectively, and another with a class of "main" that contains the markdown-converted text of the note. A textarea element is also added and styled to be hidden if there is text in the note or visible if there is no text in the note.

Additionally, event listeners are added to the edit and delete buttons using addEventListener(). The edit button toggles the visibility of the main and textarea elements when clicked, while the delete button removes the entire note and updates the localStorage object by calling the updateLS() function.

Finally, the updateLS() function retrieves all textarea elements, converts them to an array, and updates the "notes" key in the localStorage object with the newly updated array of notes.
