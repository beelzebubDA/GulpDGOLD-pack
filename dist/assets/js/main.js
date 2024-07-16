"use strict";

console.log("JS проверка");

//  другой способ добавлять модули
console.log("Здесь буду писать скрипты")
// const hamburger = document.querySelector(".header__hamburger");
// const navMenu = document.querySelector(".header__lists");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }


// Jquery version

$(".header__hamburger").on("click", function (e) {
    e.preventDefault();
    $(".header__hamburger").toggleClass("active");
    $(".header__lists").toggleClass("active");
});