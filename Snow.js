class Snow{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.8,
            'density':0.8
        }
        this.Image = loadImage("snow4.webp");
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
     
       
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.Image,0,0,this.width,this.height);
        //rect(0, 0, this.width, this.height);
        pop();
      }

}