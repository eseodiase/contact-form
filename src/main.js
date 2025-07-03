
function contactForm() {
  const sum = document.getElementById("submit");
  const fn = document.getElementById("fname");
  
  
  sum.addEventListener('click', (e) => {
    if (fn.value === "") {
      document.getElementById('fname_error').innerHTML = "This field is required";
      e.preventDefault()
    } 
})
  };
contactForm();