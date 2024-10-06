const gen = document.querySelector(".gen");
const supt = document.querySelector(".supt");
const form = document.querySelector("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");

gen.addEventListener("click", function () {
  document.querySelector("#general").checked = true;
  gen.classList.add("selected");
  supt.classList.remove("selected");
});

supt.addEventListener("click", function () {
  console.log(`Hello`);
  document.querySelector("#support").checked = true;
  supt.classList.add("selected");
  gen.classList.remove("selected");
});

form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
  }
});

form.addEventListener("submit", function (e) {
  console.log(firstName.textContent);
  if (firstName.textContent === "") {
    firstName.classList.add("wrong");
    document.querySelector(".firstname").classList.add("wrong-border");
    e.preventDefault();
  }
});
