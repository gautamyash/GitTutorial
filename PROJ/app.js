const BASE_URL = "https://crudcrud.com/api/be3606fc9cb644f69fdac9df5d85cc3b";

const addSellerForm = document.getElementById("addSellerForm");
const sellersList = document.getElementById("sellersList");
const searchForm = document.getElementById("searchForm");
const searchResults = document.getElementById("searchResults");

// Function to render a seller item in the list
function renderSeller(seller) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${seller.name} (${seller.email})
    <button class="deleteButton" data-id="${seller._id}">Delete</button>
  `;
  sellersList.appendChild(li);

  const deleteButtons = document.getElementsByClassName("deleteButton");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", async (e) => {
      const sellerId = e.target.getAttribute("data-id");
      await axios.delete(`${BASE_URL}/${sellerId}`);
      e.target.parentElement.remove();
    });
  }
}

// Function to clear the sellers list
function clearSellersList() {
  sellersList.innerHTML = "";
}

// Function to search for sellers by name or email
async function searchSellers(searchTerm) {
  clearSellersList();
  searchResults.innerHTML = "";
  const res = await axios.get(`${BASE_URL}?q=${searchTerm}`);
  const sellers = res.data;
  for (let seller of sellers) {
    renderSeller(seller);
  }
}

// Add seller form submit event listener
addSellerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const res = await axios.post(BASE_URL, { name, email });
  const seller = res.data;

  renderSeller(seller);

  addSellerForm.reset();
});

// Search form submit event listener
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById("searchTerm").value;
  await searchSellers(searchTerm);
});

// On page load, display all sellers
window.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get(BASE_URL);
  const sellers = res.data;
  for (let seller of sellers) {
    renderSeller(seller);
  }
});
