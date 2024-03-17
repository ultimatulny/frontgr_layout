const passwordField = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");

passwordField.addEventListener("input", function () {
  if (passwordField.value.trim() !== "") {
    eyeIcon.style.opacity = "1";
  } else {
    eyeIcon.style.opacity = "0.5";
  }
});

eyeIcon.addEventListener("click", function (e) {
  e.preventDefault();
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  eyeIcon.src =
    type === "password"
      ? "./img/close-eye-icon.svg"
      : "./img/open-eye-icon.svg";
});
