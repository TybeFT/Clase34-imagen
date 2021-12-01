class Brazo{
    constructor(x,y){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 100;
        this.height = 240;
        this.image = loadImage("brazobien.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("gray");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}