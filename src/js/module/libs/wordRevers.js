let yourText = document.querySelector(".your__text");
let reverseText = document.querySelector(".reverse__text");

yourText.oninput = function () {
    let text = yourText.value;
    reverseText.value = text.split('').reverse().join('');
}