import { navbar } from "./navbar.js";
import { footer } from "./footer.js"
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar;
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = footer;
});

//get data
async function getData() {
  var response = await fetch("soap.json");

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}


//display data in cart
var product = document.getElementById("content-cart");
var totalPrice = 0
async function display() {
  var productss = await getData()
  var data = localStorage.getItem("cart")
  data = data.split(",")
  var counter = 1
  let products = [];
  productss.forEach((product) => {
    if (data.find((p)=>p==product.id)) {
      products.push(product);
    }
  });
  for (let j = 0; j < products.length; j++) {
      product.innerHTML += `
        <div id="product${products[j].id}" class="product">
        <div id="detelies">
          <img src="${products[j].img}" width="100px" />
          <div>
            <h3>${products[j].name}</h3>
            <div id="p">
              <span>$</span>
              <span id="price${products[j].id}">${products[j].price}</span>
            </div>
            
          </div>
        </div>
        <div id="count">
          <button id="mines" onclick="minesCount(${products[j].id},${products[j].price})"><i class="fa-solid fa-minus"></i></button>
          <p id="${products[j].id}" class="countOfProduct">${counter}</p>
          <button id="plass" onclick="addCount(${products[j].id},${products[j].price})"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div id="subtotal">
          <span>$</span>
          <span id="totalPriceFor${products[j].id}">${products[j].price * counter}</span>
        </div>
        <button id="close" onclick="deleteProduct(product${products[j].id},${products[j].id})"><i class="fa-solid fa-xmark"></i></button>
      </div>
        `
      totalPrice += products[j].price

  }
  document.getElementById("totalPrice").innerHTML = parseFloat(totalPrice).toFixed(2)

}
display()

var btn = document.querySelector(".buy");
btn.onclick = () => {
  if(localStorage.getItem("cart") == []){
    alert("Not Exist Products");
  }
  else {
    window.location.href = "success.html";
    localStorage.setItem("cart",[]);
  }
};