const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}