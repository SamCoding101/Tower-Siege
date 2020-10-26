class Box{
    constructor(x,y,w,h){
      var options = {

        friction:1,
        density:1.2,
        restitution:0

      }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    this.color = color;
    this.visibility = 255;

    World.add(world,this.body);
    
     }
    
    display(){
      
    var pos1 = this.body.position;
    var angle = this.body.angle;  

    if(this.body.speed<3){
      push();
      translate(pos1.x,pos1.y);
      rotate(angle);
      fill(this.color);
      rectMode(CENTER);
      rect(0,0,this.w,this.h) ;
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
        this.visibility = this.visibility - 5;
        fill(255,this.visibility);
        if(this.visibility<0){
          noStroke();
        }
        rectMode(CENTER);
        rect(pos1.x,pos1.y,this.w,this.h) ;
      pop();
    }
    
     }
    
score(){
      if(this.visibility< 0 && this.visibility> -105){
        score++;
      }
 }
}