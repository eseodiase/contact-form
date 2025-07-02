function contactForm() {
  // variable
  const fn = document.getElementById("fname");
  const ln = document.getElementById("lname");
  const em = document.getElementById("email");
  const gnr = document.getElementById("general");
  const sp = document.getElementById("support");
  const ms = document.getElementById("message");
  const ck = document.getElementById("check");
  const sum = document.getElementById("submit");
  const fm = document.getElementById("form");
  
  //
  sum.addEventListener('click', () => {
    if (fn.value.trim() === "") {
      document.getElementById('fname_error').innerHTML = "This field is required";
    } else {
      document.getElementById('fname_error').innerHTML = ""; // clear error
    }
  });
  }
  contactForm();
