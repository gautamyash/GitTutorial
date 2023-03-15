// // var headerTitle = document.getElementById('header-title');
// // //headerTitle.textContent = 'hello';
// // var header = document.getElementById('main-header');
// // header.style.borderBottom = 'solid 3px #000';
// // var addTitle = document.getElementById('main'); // select the element by its ID
// // addTitle.style.fontWeight = 'bold';
// //addTitle.style.color = 'green';
// // var headerTitle = document.getElementById('header-title');
// // //headerTitle.textContent = 'hello';
// // var header = document.getElementById('main-header');
// // header.style.borderBottom = 'solid 3px #000';
// // var addTitle = document.getElementById('main'); // select the element by its ID
// // addTitle.style.fontWeight = 'bold';
// // addTitle.style.color = 'green';
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';


// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = 'bold';
  
// }
// // Using getElementsByClassName
// var list = document.getElementsByClassName('list-group')[0];
// var newItem = document.createElement('li');
// newItem.textContent = 'New Item';
// newItem.className = 'list-group-item-new';
// list.appendChild(newItem);

// // Using getElementsByTagName
// var list = document.getElementsByTagName('ul')[0];
// var newItem = document.createElement('li');
// newItem.textContent = 'New Item';
// newItem.className = 'list-group-item-new';
// list.appendChild(newItem);


// var items = document.getElementsByClassName('list-group-item');

// items[1].style.backgroundColor = 'green';
// items[2].style.display = 'none';

// var secondItem = document.querySelectorAll('#items li:nth-child(2)');
// secondItem[0].style.color = 'green';

// var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
// for (var i = 0; i < oddItems.length; i++) {
//   oddItems[i].style.backgroundColor = 'green';
// }

// var itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

var headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Hello ' + headerTitle.textContent;
var item1 = document.querySelector('#items li:first-child');
item1.textContent = 'Hello ' + item1.textContent;
