const fnameEl = document.querySelector("#fname");
const lnameEl = document.querySelector("#lname");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const submitEL = document.querySelector("#submit");

submitEL.addEventListener("click", () => {
  fistNvalue = fnameEl.value;
  lastNvalue = lnameEl.value;

  if (fistNvalue == "") {
    document.querySelector(".firstN").textContent = "field cannot be empty";
  }
  if (lastNvalue == "") {
    document.querySelector(".lastN").textContent = "field cannot be empty";
  }

  emialValue = emailEl.value;
  regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emialValue.match(regex)) {
    document.querySelector(".email-info").textContent =
      "Looks like this is not an email!!";
  }

  passwordValue = passwordEl.value;
  numberAtleast = 5;

  function doesStringHaveANumber(string = "") {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const hasNumber = false;

    for (const number of numbers) {
      if (string.indexOf(number) !== -1) {
        return true;
      }
    }

    return hasNumber;
  }

  if (passwordValue.length < numberAtleast) {
    document.querySelector(".pass-info").textContent =
      "Password must not be less than 5";
  }

  if (!doesStringHaveANumber(passwordValue)) {
    document.querySelector(".pass-info").textContent =
      "Password must contain atleast one number";
  }
});
