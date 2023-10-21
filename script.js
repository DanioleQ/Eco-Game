let userMoney = 0;
let contentDiv = document.getElementById("myDiv");
let button = document.getElementById("myButton");
let upgradeButton = document.getElementById("upgradeButton");
let upgradeLevel = 1;
let upgradeDiv = document.getElementById("upgrade");
// Upgrade Function
upgradeButton.addEventListener("click", function () {
  if (userMoney >= 200 && upgradeLevel < 10) {
    upgradeLevel++;
    userMoney = userMoney - 200;
    upgradeDiv.textContent = "Upgraded";
  } else {
    alert("Not enough money");
  }
});
// Main money button maker
button.addEventListener("click", function () {
  userMoney = userMoney + upgradeLevel;
  contentDiv.textContent = userMoney;
});
