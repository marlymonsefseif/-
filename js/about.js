import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar;
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = footer;
});


var slideIndex = 0; 
var slides = document.querySelectorAll(".mySlides");
var totalSlides = slides.length;
function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}
showSlides(); 
document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides; 
  showSlides();
});
document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; 
  showSlides();
});
