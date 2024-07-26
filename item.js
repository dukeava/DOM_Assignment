// Change the text content of the <h1> element
document.querySelector('h1').textContent = 'DOM Manipulation';

// Change the background color of the <div> element with the id "container"
document.getElementById('container').style.backgroundColor = 'lightblue';

// Select the <ul> element and add a new <li> element with the text content "Item 7"
const ul = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = 'Item 7';
ul.appendChild(newItem);

// Style the list items based on their index
const listItems = document.querySelectorAll('ul li');

if (listItems.length > 0) listItems[0].style.color = 'crimson';          // First item
if (listItems.length > 2) listItems[2].style.backgroundColor = 'pink';   // Third item
if (listItems.length > 4) listItems[4].style.backgroundColor = 'yellow';  // Fifth item
if (listItems.length > 6) {
    listItems[6].style.backgroundColor = 'lightGray';   // Seventh item background
    listItems[6].style.color = 'royalBlue';             // Seventh item text color
}

// Add an 8th item with the text of your name
const eighthItem = document.createElement('li');
eighthItem.textContent = 'Duke Victor';  
ul.appendChild(eighthItem);

// Delete the fourth item
if (listItems.length > 3) ul.removeChild(listItems[3]);

// Add an italic element around the button text
const button = document.getElementById('myButton');
const italicText = document.createElement('i');
italicText.textContent = button.textContent;
button.innerHTML = '';  // Clear the button text
button.appendChild(italicText);
button.style.backgroundColor = 'rebeccapurple'; // Background color
button.style.color = 'white';                    // Text color
button.style.border = '1px solid white';         // Border
