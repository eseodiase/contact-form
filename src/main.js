
function contactForm() {
  const sum = document.getElementById("submit");
const fn = document.getElementById("fname");
const ln = document.getElementById("lname");
const em = document.getElementById("email");
const gn = document.getElementById("general");
const sp = document.getElementById("support");
const ms = document.getElementById("message");
const ck = document.getElementById("check");
const sus = document.getElementById("success");
  
  
  sum.addEventListener('click', (e) => {
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
    else {
    document.getElementById('success').innerHTML = `    <div class="success_inner">
    <p class="success-text-1">
      <span class="success-icon"></span>
      Message Sent!</p>
    <p class="success-text-2">Thanks for completing the form. We'll be in touch soon!</p>
    </div>`;
  sus.style.display = "block";
  document.querySelector('.wrapper').style.marginTop = "7.8rem";
    }
})


  };
contactForm();