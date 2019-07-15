var button1 = $("#B1");
var button2 = $("#B2");
var button3 = $("#B3");
var button4 = $("#B4");
var button5 = $("#B5");
var button6 = $("#B6");
var button7 = $("#B7");
var button8 = $("#B8");
var button9 = $("#B9");
var button10 = $("#B10");
var para = $("p");

button1.on("click", changeRed);
button2.on("click", changeOrange);
button3.on("click", changePink);
button4.on("click", changeLime);
button5.on("click", changePurple);
button6.on("click", changeYellow);
button7.on("click", changeTeal);
button8.on("click", changeBlue);
button9.on("click", changeLime);
button10.on("click", changeBlack);

function changeRed() {
  document.body.style.backgroundColor = "red";
  para.text("For every min you remain angry, you give up sixty seconds of peace of mind.");
}

function changeOrange() {
  document.body.style.backgroundColor = "orange";
  para.text("Focus on goals not obstacles.");
}

function changePink() {
  document.body.style.backgroundColor = "#cd325c";
  para.text("The greatest wealth is to live content with little.");
}

function changeLime() {
  document.body.style.backgroundColor = "#41c43b";
  para.text("The future belongs to those who prepare for it today.");
}

function changePurple() {
  document.body.style.backgroundColor = "#752dd2";
  para.text("Don't limit your challenges, challenge your limits.");
}

function changeYellow() {
  document.body.style.backgroundColor = "#e6d019";
  para.text("Stay hungry, stay foolish.");
}

function changeTeal() {
  document.body.style.backgroundColor = "#4da3b2";
  para.text("Don't downgrade your dreams just to fit reality.");
}

function changeBlue() {
  document.body.style.backgroundColor = "#131cec";
  para.text("Whenever you feel sad, just remember that there are billions of cells in your body and all they care about is you");
}

function changeLime() {
  document.body.style.backgroundColor = "#15ea95";
  para.text("If you judge people, you have no time to love them.");
}

function changeBlack() {
  document.body.style.backgroundColor = "#0e0004";
  para.text("Push yourself because no one else will for you.");
}
