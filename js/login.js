import { navbar} from "./navbar.js";
import { footer} from "./footer.js";
document.addEventListener("DOMContentLoaded",() => {
  document.getElementById("navbar").innerHTML = navbar;
});
document.addEventListener("DOMContentLoaded",() => {
  document.getElementById("footer").innerHTML = footer;
});
document.addEventListener("DOMContentLoaded",() => {
  document.getElementById("logOut").innerHTML = "log in";
});
function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  var nameError = document.getElementById("nameError");
  var name = document.getElementById("username").value.trim();
  if (name === "") {
    nameError.textContent = "Name is required.";
    nameError.style.color = "red";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  var email = document.getElementById("email").value.trim();
  var emailError = document.getElementById("emailError");
  if (email === "") {
    emailError.textContent = "Email is required.";
    emailError.style.color = "red";
    isValid = false;
  } else {
    emailError.textContent = "";
    if (validateEmail(email)) {
      emailError.textContent = "";
    } else {
      emailError.textContent = "Email is not valid.";
      emailError.style.color = "red";
      isValid = false;
    }
  }

  var password = document.getElementById("password").value.trim();
  var passwordError = document.getElementById("passwordError");
  if (password === "") {
    passwordError.textContent = "Password is required.";
    passwordError.style.color = "red";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    passwordError.style.color = "red";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  var confirmPassword = document.getElementById("confirmPassword").value.trim();
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Password is not match.";
    confirmPasswordError.style.color = "red";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (isValid) {
    form.submit();
  }

  saveCookie("email", email);
  saveCookie("password", password);
  localStorage.setItem("cart",[]);
}

var form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function saveCookie(key, value) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 50);
  document.cookie = key + "=" + value + ";expires=" + expireDate.toUTCString();
}


