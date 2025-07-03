
function contactForm() {
  const sum = document.getElementById("submit");
  const fn = document.getElementById("fname");
  
  sum.addEventListener('click', () => {
    if (fn.value.trim() === "") {
      document.getElementById('fname_error').innerHTML = "say error";
    } else {
      document.getElementById('fname_error').innerHTML = ""; // clear error
    }
  });
}
contactForm();