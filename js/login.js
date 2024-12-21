// start: 1:00pm Dec 20, 2024
// end: 6:25pm Dec 20, 2024

const username_html = document.getElementById("login-username");
const password_html = document.getElementById("login-password");
const button_html = document.getElementById("login-button");

button_html.addEventListener("click", function (event) {
  event.preventDefault();

  let isValid = true;

  if (username_html.value !== "Aadarsh" || username_html.value === "") {
    username_html.style.backgroundColor = "#ff8686";
    isValid = false;
  } else {
    username_html.style.backgroundColor = "";
  }

  if (password_html.value !== "123456" || password_html.value === "") {
    password_html.style.backgroundColor = "#ff8686";
    isValid = false;
  } else {
    username_html.style.backgroundColor = "";
  }

  if (isValid) {
    window.open("../../index.html", "_self");
  }
});
