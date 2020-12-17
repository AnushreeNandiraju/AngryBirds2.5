class Chain{
  constructor(bodyA,bodyB){
     var options = {
         length : 10,
         stiffness : 0.05,
         bodyA : bodyA,
         bodyB : bodyB
     }
     this.chain = constraint.create(options);
     World.add(world,this.chain);
  }
  display(){
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;
     strokeWeight(4);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}