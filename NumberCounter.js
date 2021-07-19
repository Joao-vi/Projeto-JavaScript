var bnt = document.querySelectorAll("#btnCont");
var number = 0;
var output = document.querySelector("#output");
output.textContent = number;

bnt.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("increase")) {
      number++;
    } else {
      console.log("tesste");
      number--;
    }
    output.textContent = number;
  });
});
