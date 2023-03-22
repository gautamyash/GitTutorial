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

// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello ' + headerTitle.textContent;
// var item1 = document.querySelector('#items li:first-child');
// item1.textContent = 'Hello ' + item1.textContent;
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    // Create edit button element
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-sm float-right edit mr-2';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
  }
  var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete even
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener

function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  // Create edit button element
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-secondary btn-sm float-right edit mr-2';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  itemList.appendChild(li);

  // Store user details in local storage
  var userDetails = {
    name: newItem
  };
  var userDetailsStr = JSON.stringify(userDetails);
  localStorage.setItem('userDetails', userDetailsStr);
}
