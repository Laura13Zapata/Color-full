var button1 = $("#B1");
var button2 = $("#B2");
var button3 = $("#B3");

button1.on("click", changeBackgroundCol);

function changeBackgroundCol() {
  document.body.style.backgroundColor = "red";
}
