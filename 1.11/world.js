class World{

  constructor(level){
    this.level = level;
    this.planets = [];
    this.height = 2500;
    this.width = 2500;
  }

  makePlanets(num){
    for(var i = 0; i < num; i++){
      var radius = Math.random() * 50 + 50;
      //set location vector, prevent planet overlap by choosing new location for planet
      //until all planets are far enough apart
      while (true) {
        var x = Math.random() * (this.width - 2 * radius) + radius;
        var y = Math.random() * (this.height - 2 * radius) + radius;
        var loc = new vector2d(x, y);
        for(var i = 0; i < this.planets.length; i++){
          var dist = vector2d.distance(this.planets[i].loc, loc);
          if(dist <= (this.planets[i].radius + radius) * 2){break;}
        }
        if(i === this.planets.length){break;}
      }
      var p = new Planet(radius, loc);
      this.planets.push(p);
    }
  }

  update(){

  }

  render(){
    ship.render();
    ctx.save();
    ctx.translate(ship.loc.x - canvas.width/2, ship.loc.y - canvas.height/2);
    ctx.rotate()

    ctx.restore();
    for(var i = 0; i < this.planets.length; i++){
      this.planets[i].render();
    }

  }

  run(){
    this.update();
    this.render();
  }

}
