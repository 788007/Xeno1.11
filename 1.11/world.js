class World{

  constructor(level){
    this.level = level;
    this.planets = [];
    //area is greater than that of canvas
    this.height = 2400;
    this.width = 2400;
    this.makePlanets(50);
  }

  makePlanets(num){
    for(var i = 0; i < num; i++){
      var radius = Math.random() * 50 + 10;
      //set location vector, prevent planet overlap by choosing new location for planet
      //until all planets are far enough apart
      while (true) {
        var x = Math.random() * this.width - this.width/2;
        var y = Math.random() * this.height - this.height/2;
        var loc = new vector2d(x, y);
        for(var i = 0; i < this.planets.length; i++){
          var dist = vector2d.distance(this.planets[i].loc, loc);
          if(dist <= (this.planets[i].radius + radius)*1.5){break;}
        }
        if(i === this.planets.length){break;}
      }
      var p = new Planet(radius, loc);
      this.planets.push(p);
    }
  }

  update(){
    ship.update();
  }

  render(){

    ctx.save();
    //keep ship in center of canvas
    ctx.translate(canvas.width/2 - ship.loc.x, canvas.height/2 - ship.loc.y);
    //draw all planets & ship
    for(var i = 0; i < this.planets.length; i++){
      this.planets[i].render();
    }
    ship.render();
    ctx.restore();

  }

  run(){
    this.update();
    this.render();
  }

}
