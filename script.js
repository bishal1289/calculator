var txt = document.getElementById("txt");

var clear = document.getElementById("clear");

function display(val) {
  txt.value += val;
  return val;
}

function solve() {
  let x = txt.value;
  let y = eval(x);
  txt.value = y;
  return y;
}

clear.addEventListener("click", function () {
  txt.value = "";
});