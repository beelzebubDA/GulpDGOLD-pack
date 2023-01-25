// переменные
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let result = document.querySelector(".header__result");


plus.addEventListener("click", function(e) {
    e.preventDefault();
    let frsNumb = document.querySelector(".value__1").value * 1;
    let scndNumb = document.querySelector(".value__2").value * 1;
    result.textContent = frsNumb + scndNumb;
});

minus.addEventListener("click", function(e) {
    e.preventDefault();
    let frsNumb = document.querySelector(".value__1").value * 1;
    let scndNumb = document.querySelector(".value__2").value * 1;
    result.textContent = frsNumb - scndNumb;
});

multiply.addEventListener("click", function(e) {
    e.preventDefault();
    let frsNumb = document.querySelector(".value__1").value * 1;
    let scndNumb = document.querySelector(".value__2").value * 1;
    result.textContent = frsNumb * scndNumb;
});

divide.addEventListener("click", function(e) {
    e.preventDefault();
    let frsNumb = document.querySelector(".value__1").value * 1;
    let scndNumb = document.querySelector(".value__2").value * 1;
    result.textContent = frsNumb / scndNumb;
});