var button = document.querySelector(".button");

document.querySelector(".like").addEventListener("click", function () {
  this.classList.add("active");
});

var number = document.querySelector(".number");
var add = document.querySelector(".add");

add.addEventListener("click", addNumber);

function addNumber() {
  var value = number.innerText;
  number.innerText = parseInt(value) + 1;
}
