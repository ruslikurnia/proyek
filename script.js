// Toggle class active menu
const navbarNav = document.querySelector(".navbar-nav");

//Ketika menu diklik
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//Klik diluar sidebar
const menu = document.querySelector("#menu");
const search = document.querySelector("#search");
const cart = document.querySelector("#cart");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

