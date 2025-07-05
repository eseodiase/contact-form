function contactForm() {
  // variables for form inputs & button
const sum = document.getElementById("submit");
const fn = document.getElementById("fname");
const ln = document.getElementById("lname");
const em = document.getElementById("email");
const gn = document.getElementById("general");
const sp = document.getElementById("support");
const ms = document.getElementById("message");
const ck = document.getElementById("check");
const sus = document.getElementById("success");

// variables for erorr container
let fErr = document.getElementById('fname_error');
let nErr = document.getElementById('lname_error');
let eErr = document.getElementById('email_error');
let mErr = document.getElementById('message_error');
let qErr = document.getElementById('query_type_error');
let cErr = document.getElementById('checkbox_error');

  
// event handler  
  sum.addEventListener('click', (e) => {
// first name error text
    if (
  fn.value === "") {
  fErr.innerHTML = "This field is required";
}

// last name error text
    if (
  ln.value === "") {
  nErr.innerHTML = "This field is required";
}

// email error text
    if (
  em.value === "") {
  eErr.innerHTML = "This field is required";
}

// query type error text
    if (
  gn.checked === false && sp.checked === false) {
  qErr.innerHTML = "Please select a query type";
}

// message error text
    if (
  ms.value === "") {
  mErr.innerHTML = "This field is required";
}

// checkbox error text
    if (
  ck.checked === false) {
  cErr.innerHTML = "To submit this form, please consent to being contacted";
}

// prevent form submission if any of the input requirements is not fulfilled
    if (
  fn.value === "" ||
  ln.value === "" ||
  em.value === "" ||
  (gn.checked === false &&
   sp.checked === false)||
  ms.value === "" ||
  ck.checked === false
) {
  e.preventDefault();
}

// prevent form submission if email format is invalid
    else if (
  !em.value.match(/^[^@]+@[^@]+\.[^@]+$/)
) {
  eErr.innerHTML = "Please enter a valid email address";
  e.preventDefault();
}

// submits the form
    else {
   // success state display
    document.getElementById('success').innerHTML = `    <div class="success_inner">
    <p class="success-text-1">
      <span class="success-icon"></span>
      Message Sent!</p>
    <p class="success-text-2">Thanks for completing the form. We'll be in touch soon!</p>
    </div>`;
  sus.style.display = "block";
  document.querySelector('.wrapper').style.marginTop = "7.8rem";
    }
});

// Clear error message for first name
    fn.addEventListener("input", function() {
  if (fn.value.trim() !== "") {
    fErr.innerHTML = "";
  }
});

// Clear error message for last name
    ln.addEventListener("input", function() {
  if (ln.value.trim() !== "") {
    nErr.innerHTML = "";
  }
});

// Clear error message for email address
    em.addEventListener("input", function () {
  if (em.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    eErr.innerHTML = ""; 
  }
});

// Clear error message for query type
    gn.addEventListener("change", function() {
  if (gn.checked) {
    qErr.innerHTML = "";
  }
});
    sp.addEventListener("change", function() {
  if (sp.checked) {
    qErr.innerHTML = "";
  }
});

// Clear error message for textarea
    ms.addEventListener("input", function() {
  if (ms.value.trim() !== "") {
    mErr.innerHTML = "";
  }
});

// Clear error message for email address
    ck.addEventListener("change", function() {
  if (ck.checked) {
    cErr.innerHTML = "";
  }
});

  };
contactForm();