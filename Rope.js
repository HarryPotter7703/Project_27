class Rope{
  
  constructor(bodyA, bodyB, offsetX, offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA:bodyA,
      bodyB:bodyB,
      pointB: {x: this.offsetX, y: this.offsetY},
      density:1.2,
      friction:0.01
    }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    strokeWeight(4);
    stroke(0,0,0);
    line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY)
  }
}