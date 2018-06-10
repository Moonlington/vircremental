window.onload = init;

let fps = 60;
var Game = {
  virCounter: 0,
  addButtonUpgradeUnlocked: false,
  addButtonUpgrades:1
}

function init() {
  document.getElementById('addButton').onclick = function(){
    Game.virCounter += 1*Game.addButtonUpgrades;
  }
  document.getElementById('upgradeAddButton').onclick = function(){
    if (!this.classList.contains("disabled")) {
      Game.virCounter -= 9+1*Game.addButtonUpgrades
      Game.addButtonUpgrades++;
    }
  }

  window.setInterval(gameLoop, 1000/fps)
}

function gameLoop() {
  document.getElementById('virCounter').innerHTML = Game.virCounter
  document.getElementById('addButton').innerHTML = "Add " + 1*Game.addButtonUpgrades + " Vir"
  document.getElementById('upgradeAddButton').innerHTML = "Upgrade Vir: " + (9+1*Game.addButtonUpgrades) + " Vir"
  if (Game.virCounter >= 10) {
    document.getElementById('upgradeAddButton').classList.remove("hidden")
    Game.addButtonUpgradeUnlocked = true;
  }
  if (Game.virCounter >= 9+1*Game.addButtonUpgrades) {
    if (document.getElementById('upgradeAddButton').classList.contains("disabled")) {
      document.getElementById('upgradeAddButton').classList.remove("disabled")
    }
  } else {
    if (!document.getElementById('upgradeAddButton').classList.contains("disabled")) {
      document.getElementById('upgradeAddButton').classList.add("disabled")
    }
  }
}
