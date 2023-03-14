// var headerTitle = document.getElementById('header-title');
// //headerTitle.textContent = 'hello';
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// var addTitle = document.getElementById('main'); // select the element by its ID
// addTitle.style.fontWeight = 'bold';
//addTitle.style.color = 'green';
// var headerTitle = document.getElementById('header-title');
// //headerTitle.textContent = 'hello';
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// var addTitle = document.getElementById('main'); // select the element by its ID
// addTitle.style.fontWeight = 'bold';
// addTitle.style.color = 'green';
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';


for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = 'bold';
  
}
// Using getElementsByClassName
var list = document.getElementsByClassName('list-group')[0];
var newItem = document.createElement('li');
newItem.textContent = 'New Item';
newItem.className = 'list-group-item-new';
list.appendChild(newItem);

// Using getElementsByTagName
var list = document.getElementsByTagName('ul')[0];
var newItem = document.createElement('li');
newItem.textContent = 'New Item';
newItem.className = 'list-group-item-new';
list.appendChild(newItem);
