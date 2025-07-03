
function contactForm() {
  const sum = document.getElementById("submit");
  const fn = document.getElementById("fname");
  
  const sus = document.getElementById("success");
  
  
  sum.addEventListener('click', (e) => {
    if (fn.value === "") {
      document.getElementById('fname_error').innerHTML = "This field is required";
      e.preventDefault()
    } 
    else {
    document.getElementById('success').innerHTML = `<div>
      <p>Message Sent!</p>
  <p>Thanks for completing the form. We ll be in touch soon!</p>
  </div>`;
  sus.style.display = "block";
    }
})
  };
contactForm();