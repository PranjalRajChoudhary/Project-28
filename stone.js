class Stone{
    constructor(x,y){
        var options = {
        isStatic : false,
       restitution : 0,
       density : 1.2,
       friction : 1
        }
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}