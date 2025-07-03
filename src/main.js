
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
    document.getElementById('success').innerHTML = `    <div class="success_inner">
    <p class="success-text-1">
      <span class="success-icon"></span>
      Message Sent!</p>
    <p class="success-text-2">Thanks for completing the form. We'll be in touch soon!</p>
    </div>`;
  sus.style.display = "block";
    }
})
  };
contactForm();