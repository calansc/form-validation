const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    event.preventDefault();
    alert("High Five!");
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = "error active";
}
