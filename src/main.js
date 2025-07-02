const nameInput = document.getElementById("name");

nameInput.oninvalid = function () {
  this.setCustomValidity("Please fill in your first name!");
};

nameInput.oninput = function () {
  this.setCustomValidity(""); // Reset custom message on user input
};

document.getElementById("form").addEventListener("submit", function (e) {
  // You can optionally do more validation here
  alert("Form submitted!");
   // Remove this if you want the form to actually submit
});
