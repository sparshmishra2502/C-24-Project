class Rubber {
    constructor(x,y,r){

     var options={

     'restitution':0.3,
     'friction':5,
     'density':1
     }
     this.x = x;
     this.y = y;
     this.r = 50;
     this.body= Bodies.circle(this.x,this.y,this.r,options);
     World.add(world,this.body);

    }
    display(){

    var pos=this.body.position;
    var angle = this.body.angle;

    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("blue");
    strokeWeight(2);
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }


} 