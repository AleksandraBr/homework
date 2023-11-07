function verify() {
let length = parseInt(elementLength.innerText);
let width = parseInt(elementWidth.innerText);
let height = parseInt(elementHeight.innerText);
let dwidth = parseInt(elementDwidth.innerText);
let dheight = parseInt(elementDheight.innerText);

if (length <= dwidth && width <= dheight || length <= dheight && width <= dwidth) {
result = "Коробка пройдет в дверь"
    document.getElementById("result").innerText = result;
  } else {
  result = "Коробка не пройдет в дверь"
    document.getElementById("result").innerText = result;
  }
}
const elementLength =document.getElementById("length");
const elementWidth =document.getElementById("width");
const elementHeight =document.getElementById("height");
const elementDwidth =document.getElementById("dwidth");
const elementDheight =document.getElementById("dheight");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);