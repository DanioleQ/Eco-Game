let userMoney = 0;
let contentDiv = document.getElementById("myDiv");
let button = document.getElementById("myButton");
let upgradeButton = document.getElementById("upgradeButton");
let upgradeLevel = 1;
let upgradeDiv = document.getElementById("upgrade");
// Money Update Function
function updateMoneyDisplay() {
  contentDiv.textContent = userMoney + "$";
}
// Money Update by 1sec
setInterval(updateMoneyDisplay);
// Upgrade Function
upgradeButton.addEventListener("click", function () {
  if (userMoney >= 200 && upgradeLevel < 10) {
    upgradeLevel++;
    userMoney = userMoney - 200;
    upgradeDiv.textContent = "Upgraded";
    updateMoneyDisplay();
  } else if (userMoney < 200) {
    alert("Not enough money");
  } else if (upgradeLevel >= 10) {
    alert("Max level");
  }
});
// Main money button maker
button.addEventListener("click", function () {
  userMoney = userMoney + upgradeLevel;
  updateMoneyDisplay();
});
