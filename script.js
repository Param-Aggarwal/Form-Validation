const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const form = document.querySelector("#form-validation");

const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

const showPassword= document.querySelector("#password-show");
const showPasswordConfirmation = document.querySelector("#password-confirmation-show");

//set initial value to hide passwords
showPassword.checked=false;
showPasswordConfirmation.checked=false;

form.addEventListener("submit", e => {
  // array for error display
  const errorMessages = [];
  clearErrors();

  if (username.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters.");
  }

  if (password.value.length < 10) {
    errorMessages.push("Password must be at least 6 characters.");
  }

  if (password.value !== passwordConfirmation.value){
    errorMessages.push("Passwords must match")
  }

  if (!terms.checked){
    errorMessages.push("You must accept the terms");
  }

  if (errorMessages.length > 0){
    e.preventDefault();
    showErrors(errorMessages);
  }
});

showPassword.addEventListener("click", e => {
   if (showPassword.checked === true){
      password.type = "text";
   } else {
      password.type = "password";
   }
 });

 showPasswordConfirmation.addEventListener("click", e => {
    if (showPasswordConfirmation.checked === true){
       passwordConfirmation.type = "text";
    } else {
       passwordConfirmation.type = "password";
    }
  });

function clearErrors() {
  errorsList.innerHTML= "";
  errorsContainer.classList.remove("show");
};

function showErrors(errorMessages){
  errorMessages.forEach(e => {
    const li = document.createElement("li");
    li.innerHTML = e;
    errorsList.appendChild(li);
  });
  errorsContainer.classList.add("show");
};
