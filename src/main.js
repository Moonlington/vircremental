window.onload = init;

let fps = 60;

var vircounter = 0;

function init() {
  document.getElementById('upbutton1').onclick = function(){
    vircounter++;
  }

  window.setInterval(gameLoop, 1000/fps)
}

function gameLoop() {
  document.getElementById('vircounter').innerHTML = vircounter
}
