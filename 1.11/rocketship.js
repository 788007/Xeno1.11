class Rocketship{

  constructor(location){
    this.loc = location;
    this.vel = new vector2d(0,0);
    this.acc = new vector2d(0,0);
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.scalarMult(0);
  }

  render(){
    this.update();

    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(-8, 12);
    ctx.lineTo(0, 4);
    ctx.lineTo(8, 12);
    ctx.lineTo(0, -8);
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.restore();

  }

}
