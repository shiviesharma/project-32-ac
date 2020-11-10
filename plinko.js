class plinko{
    constructor(){
     options={
        isStatic : false,
        'restitution': 0.8,
        'friction': 1.0,
        'density': 1.0
     }
     this.r = r;
     this.body = Matter.Bodies.circle(x, y, this.r, options)
    

     World.add(world, this.body);
  }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
       
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
        push();
      }

     
}