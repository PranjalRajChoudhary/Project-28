class Mango{
    constructor(x,y){
        var options = {
        isStatic : true,
       restitution : 0,
       friction : 1
        }
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,30,30);
        pop();
    }
}