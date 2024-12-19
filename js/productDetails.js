import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar;
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = footer;
});

function showProduct() {
  var array = [];
  array.push(readCookie("id"), readCookie("img"), readCookie("name"), readCookie("price"),readCookie("description"));
  console.log(array);
  var showProduct = document.querySelector(".show-product");
  showProduct.innerHTML = `
    <img src=${array[1]} width="350px">
      <div class="content">
        <p>${array[2]}</p>
        <span class="price">$ ${array[3]}</span>
        <span>${array[4]}</span>
        <button onclick="setcart(${array[0]})">add to cart</button>
      </div>
  `;

}

function readCookie(cname) {
  var name = cname + "=";
  var decoded_cookie = decodeURIComponent(document.cookie);
  var carr = decoded_cookie.split(";");
  for (var i = 0; i < carr.length; i++) {
    var c = carr[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

showProduct();

window.setcart = (id) => {
  setCart(id);
};


if (localStorage.getItem("cart") != null)
  var arr = localStorage.getItem("cart").split(",");
else {
  var arr = [];
}
function setCart(id) {
  var statue = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == id) {
      alert("this product already exist in cart");
      statue = false;
    }
  }
  if (statue) {
    arr.push(id);
  }
  localStorage.setItem("cart", arr);
}
