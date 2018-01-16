window.onload = init;

var canvas;
var ctx;
var worlds = [];
var currentLevel = -1;
var ship;

function init(){
  canvas = document.getElementById('cnv');
  canvas.width = 800;
  canvas.height = 800;
  canvas.style.backgroundColor = 'black';
  ctx = canvas.getContext('2d');
  //create rocketship at center of canvas
  ship = new Rocketship(new vector2d(canvas.width/2, canvas.height/2));
  //add event listeners that toggle acceleration/deceleration/turning on
  //  when key is down and off when key is up
  document.addEventListener("keydown", function(event){;
    switch (event.key) {
      case "s":
        ship.down = true;
      break;
      case "w":
        ship.up = true;
      break;
      case "a":
        ship.left = true;
      break;
      case "d":
        ship.right = true;
      break;
    }
  });
  document.addEventListener("keyup", function(event){;
    switch (event.key) {
      case "s":
        ship.down = false;
      break;
      case "w":
        ship.up = false;
      break;
      case "a":
        ship.left = false;
      break;
      case "d":
        ship.right = false;
      break;
    }
  });
  makeWorld();
  animate();
}

function makeWorld(){
  //increase current level number-- first one starts at 0
  currentLevel++;
  var w = new World(currentLevel);
  //add world to array
  worlds.push(w);
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  //run this level's world
  worlds[currentLevel].run();

}
