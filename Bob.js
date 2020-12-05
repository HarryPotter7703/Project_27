class Bob{
  constructor(x,y){
    this.x = x
    this.y = y
    var options ={
      isStatic: false,
      restitution: 0.9
   }
    this.body = Bodies.circle(x, y, 25, options);
    this.radius = 50;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    fill(0, 180, 180);
    ellipse(pos.x, pos.y, this.radius, this.radius)
  }
}