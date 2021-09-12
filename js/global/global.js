// Navigation Bar [--- 1 ---]
// navbar Element
let navbar = document.querySelector(".navbar");
// navbarTogglerButton Element
let navbarTogglerButton = document.querySelector(".navbar-toggler");
let navbarlogo = document.querySelector(".logo");


// this function is generall on all media 
window.addEventListener("scroll", () => {

  if (window.pageYOffset >= 1) {
    navbar.style.padding = ".5rem 1rem";
    navbar.style.backgroundColor = "#24252a";
    navbar.classList.add("shadow-scroll");
    navbarlogo.classList.add("rounded-circle");
  } else {
    navbar.style.padding = "2rem 1rem";
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("shadow-scroll");
    navbarlogo.classList.remove("rounded-circle");
  }

});


// this function just for media < 991px
function forsmallmedia() {
  if(window.innerWidth <= 991) {
    navbarTogglerButton.onclick = function() {
      navbar.style.padding = ".5rem 1rem";
      navbar.style.backgroundColor = "#24252a";
      navbar.classList.add("shadow-scroll");
      navbarlogo.classList.add("rounded-circle");
    }
  }
}
forsmallmedia();

// Add Active Class On Nav Link And Remove From Siblings
let navbarNav = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
let navlocation = window.location.href;

for(let i = 0; i < navbarNav.length ; i++) {
  if(navbarNav[i].href === navlocation) {
    navbarNav[i].classList.add("active");
  }
}



// Scroll To Top Button [-- 2 --]
let goUpButton = document.querySelector(".go-up");
window.onscroll = () => {

  window.pageYOffset >= 1000 ? goUpButton.style.display = "block" : goUpButton.style.display = "none";
};

goUpButton.onclick = () => { window.scrollTo(0,0) };



/* 
-- [------ 3 ----]
  -- This Function For Any [-- Form --] In The Site
  -- To Hide Label In Input Or Textarea In Focus
  -- And Add It On Blur 
*/
function addAnimationOnLabelForm(arrayList) {

arrayList.forEach((element) => {

  element.onfocus = function() {
    this.parentElement.firstElementChild.classList.add("animation-label");
  }

  element.onblur = function() {
    this.parentElement.firstElementChild.classList.remove("animation-label");
    if(element.value != "") {
      this.parentElement.firstElementChild.classList.add("animation-label");
    }
  }

  });
}

// For Home Page Form
let homePageForm = Array.from(document.querySelectorAll(".homepage-form  .form-input"));
addAnimationOnLabelForm(homePageForm);

// For Home Page Newsletter Form
let newsletterForm = Array.from(document.querySelectorAll(".newsletter-form  .form-input"));
addAnimationOnLabelForm(newsletterForm);

// For Services Form
let servicesForm = Array.from(document.querySelectorAll(".services-form .form-input"));
addAnimationOnLabelForm(servicesForm);

// For Reservation Form
let reservationForm = Array.from(document.querySelectorAll(".reservation-form .form-input"));
addAnimationOnLabelForm(reservationForm);

// For Reservation Form  Nights Gustes Form
let nightsGustesForm = Array.from(document.querySelectorAll(".nights-gustes-form .form-input"));
addAnimationOnLabelForm(nightsGustesForm);


// Sign Page
// For Sign In Form in [-- Sign Page --]
let signInForm = Array.from(document.querySelectorAll(".sign-in-form .form-input"));
addAnimationOnLabelForm(signInForm);

// For Sign Up Form in [-- Sign Page --]
let signUpForm = Array.from(document.querySelectorAll(".sign-up-form .form-input"));
addAnimationOnLabelForm(signUpForm);

/* Add Active Class On sign-in-container or sign-Up-container
  To Switch Between Them 
  ----- Important Notice---
  i puted in if conditions to cheeck the main section because if i leaved this without cheeck
  there are two things (1) i need to create js file just for sign page else that
  (2) i will see error in console log in the other pages 
  because other page not contain that span and these things 
*/
let mainPageSection = document.querySelector(".main-page");
let spanActiveClass = document.querySelector(".toggle-sign");
let introHeding = document.querySelector(".intro-heding");

function cheeckMainSection() {
  if(mainPageSection.classList.contains("sign-introduction")) {
    spanActiveClass.onclick = () => {
      document.querySelector(".main-sign .sign-in-container").classList.add("active");
      document.querySelector(".main-sign .sign-up-container").classList.add("active");
      introHeding.textContent = "all fields are required";
    };
  }
}
cheeckMainSection();


// Start Loading
let loadingContainer = document.querySelector(".container-loading");
window.onload = () => {
  loadingContainer.remove();
  document.body.style.overflow = "auto";
};




// Trigger AOS Animation Library ---- 
// i triggerd it here because it's global file also i use it in all pages
$(window).on("scroll", function () {
  AOS.init();
});