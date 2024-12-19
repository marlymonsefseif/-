import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar;
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = footer;
});

function next(){

  var items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
  clearInterval(interval);
  interval = setInterval(next,2500);
  
}
document.querySelector(".next").addEventListener("click",next);

var interval = setInterval(next,2500);

var prev = document.querySelector(".prev");
prev.addEventListener("click",() => {
  var items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
  clearInterval(interval);
  interval = setInterval(next,2500);
});


var buttons = document.querySelectorAll(".show");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "products.html";
  });
});

var button = document.querySelector(".showAbout");
button.addEventListener("click", () => {
  window.location.href = "about.html";
});
