let userMoney = 0;
let contentDiv = document.getElementById("myDiv");
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  userMoney++;
  contentDiv.textContent = userMoney;
});
