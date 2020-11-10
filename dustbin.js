class Dustbin {
    constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;    
    leftwallBody = Bodies.rectangle(x,y,width,height,{isStatic:true});
    World.add(world, leftwallBody);

    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    rightwallBody = Bodies.rectangle(x,y,width,height,{isStatic:true});
    World.add(world, rightwallBody);

    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    bottomBody = Bodies.rectangle(x,y,width,height, {isStatic:true});
    World.add(world, bottomBody);

}display(){
        var posBottom = this.bottomBody.position;
        var posLeft= this.leftwallBody.position;
        var posRight= this.rightwallBody.position;

        push();
        translate(posBottom.x, posBottom.y);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(posRight.x, posRight.y);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(posLeft.x, posLeft.y);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();



  }
}
