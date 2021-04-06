class Boy{
    constructor(x,y){
        var options = {
        isStatic : true,
       restitution : 0

        }
        this.image = loadImage("boy.png");
        this.body = Bodies.rectangle(107,478,10,10,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,200,550,300,300);
        pop();
    }
}