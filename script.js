// CONTACT FORM
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name.");
frmvalidator.addValidation("email","req","Please provide your email.");
frmvalidator.addValidation("email","email", "Please enter a valid email address.");

// MENU TOGGLE
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
