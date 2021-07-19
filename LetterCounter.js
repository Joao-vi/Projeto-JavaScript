var CountLetter = 0;
var numbers = document.querySelector("#numbers");
numbers.textContent = CountLetter;
var inputBox = document.querySelector("#input-area");

inputBox.addEventListener("keydown", a);
function a() {
  var text = inputBox.value;
  var txt = text;
  CountLetter = txt.length;
  numbers.textContent = CountLetter;
}
