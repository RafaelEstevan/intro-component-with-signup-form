const submitBtn = document.getElementById("submit-info");

const inputs = [
  { element: document.querySelector(".first-name"), label: document.querySelector(".name-label"), error: document.querySelector(".first-name-error"), errorText: "First Name cannot be empty" },
  { element: document.querySelector(".last-name"), label: document.querySelector(".lastname-label"), error: document.querySelector(".last-name-error"), errorText: "Last Name cannot be empty" },
  { element: document.querySelector(".user-email"), label: document.querySelector(".email-label"), error: document.querySelector(".user-email-error"), errorText: "Email cannot be empty" },
  { element: document.querySelector(".user-pass"), label: document.querySelector(".pass-label"), error: document.querySelector(".user-pass-error"), errorText: "Password cannot be empty" },
];

const successMsg = document.querySelector(".success-msg");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passValidation = /^[A-Za-z]\w{7,14}$/;

const showError = (input) => {
  input.label.textContent = input.errorText;
  input.element.style.borderColor = "red";
  input.error.style.display = "inline";
  setTimeout(() => {
    input.label.textContent = "";
    input.element.style.borderColor = "var(--grayish-blue)";
    input.error.style.display = "none";
  }, 2000);
};

const errorFunc = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.element.value.length === 0) {
      showError(input);
    } else if (input.element === document.querySelector(".user-email") && !input.element.value.match(emailValidation)) {
      input.errorText = "Looks like this is not an email";
      showError(input);
    } else if (input.element === document.querySelector(".user-pass") && !input.element.value.match(passValidation)) {
      input.errorText = "A password must be between 7-16 characters that starts with a letter(Only letters, numbers & underscore)";
      showError(input);
    }
  }
  
  const validInputs = inputs.filter(input => input.element.value.length > 0 && (input.element !== document.querySelector(".user-email") || input.element.value.match(emailValidation)) && (input.element !== document.querySelector(".user-pass") || input.element.value.match(passValidation)));
  
  if (validInputs.length === inputs.length) {
    successMsg.textContent = "Success! Please check your email";
  } else {
    console.log("err");
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorFunc();
});
