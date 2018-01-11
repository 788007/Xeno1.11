window.onload = init;

// All of these are global
var canvas;
var ctx;
var worlds = [];
var current_level = -1;
var ship;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  canvas.width = 800;
  canvas.height = 800;
  canvas.style.backgroundColor = 'black';

  ctx = canvas.getContext('2d'); // This is the context

  ship = new Rocketship(new vector2d(canvas.width/2, canvas.height/2));
  makeWorld();
  animate();
}

function makeWorld(){
  current_level++;
  var w = new World(current_level);
  worlds.push(w);
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

  worlds[current_level].run();

}
