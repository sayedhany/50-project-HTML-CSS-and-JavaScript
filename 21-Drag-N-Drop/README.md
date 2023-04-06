### 21-Drag N Drop

This code implements drag and drop functionality for moving an object from one container to another container on a webpage.
```
const fill = document.querySelector(".fill");
```
This line assigns the DOM element with class "fill" to the fill variable.
```
const empties = document.querySelectorAll(".empty");
```
This line assigns an array of all DOM elements with class "empty" to the empties variable.

```
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
```
These lines add event listeners for the start and end of the drag action to the fill element.

```
for (const empty of empties) {
  //code block
}
```
This code block loops through all the elements in the empties array.

```
empty.addEventListener("dragover", dragOver);
empty.addEventListener("dragenter", dragEnter);
empty.addEventListener("dragleave", dragLeave);
empty.addEventListener("drop", dragDrop);
```
These lines add event listeners for the drag over, drag enter, drag leave, and drop actions to each element in the empties array.

```
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
```
This function is called when the dragstart event is triggered on the fill element. It adds the "hold" class to fill and sets a timeout to change the class to "invisible".

```
function dragEnd() {
  this.className = "fill";
}
```
This function is called when the dragend event is triggered on the fill element. It resets the class name of fill to "fill".

```
function dragOver(e) {
  e.preventDefault();
}
```
This function is called when the dragover event is triggered on an empty element. It prevents the default action of the event.


```
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
```
This function is called when the dragenter event is triggered on an empty element. It adds the "hovered" class to the empty element.
```
function dragLeave() {
  this.className = " empty";
}
```
This function is called when the dragleave event is triggered on an empty element. It resets the class name of the empty element to "empty".

```
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
```
This function is called when the drop event is triggered on an empty element. It resets the class name of the empty element to "empty" and appends the fill element to the empty element. This effectively moves fill from its previous container to the new container represented by the empty element.