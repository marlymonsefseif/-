import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar;
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = footer;
});

// get data
async function getData() {
  try {
    const response = await fetch("soap.json");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

// display data
async function displayProduct(category = "all") {
  const products = await getData();
  const divProducts = document.getElementById("products");
  divProducts.innerHTML = "";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);


  filteredProducts.forEach((product) => {
    const div = document.createElement("div");
    div.setAttribute("class", "product");

    const img = document.createElement("img");
    img.setAttribute("src", product.img);
    img.onclick = () => pressImg(product.id,product.img,product.name,product.price,product.description);

    const button = document.createElement("button");
    button.setAttribute("id", `${product.id}`);
    button.setAttribute("class", "addToCart");
    button.onclick = () => setCart(product.id);
    button.textContent = "add to cart";

    const div1 = document.createElement("div");

    const name = document.createElement("h6");
    name.textContent = product.name;

    const price = document.createElement("h6");
    price.setAttribute("class", "price");
    price.textContent = "$ " + product.price;

    const description = document.createElement("p");
    description.textContent = product.description;
    description.style.cssText = "visibility: hidden;";

    div1.appendChild(img);
    div1.appendChild(button);
    div.appendChild(div1);
    div.appendChild(name);
    div.appendChild(price);
    divProducts.appendChild(div);
  });
}

window.typeProduct = (category) => {
  displayProduct(category);
};

displayProduct();

function pressImg(id, img, name, price, description) {
  saveCookie("id", id);
  saveCookie("img", img);
  saveCookie("name", name);
  saveCookie("price", price);
  saveCookie("description", description);
  window.location.href = "productDetails.html";
}

function saveCookie(key, value) {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 50);
  document.cookie = `${key}=${value};expires=${expireDate.toUTCString()}`;
}


if (localStorage.getItem("cart") != null)
  var arr = localStorage.getItem("cart").split(",");
else {
  var arr = [];
}
console.log(arr)
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


