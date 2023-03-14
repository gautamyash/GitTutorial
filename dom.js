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