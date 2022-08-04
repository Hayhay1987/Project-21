class Ground {


    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.options = {
            isStatic: true
        }
		this.newWall = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
        World.add(world, this.newWall);
    }

	display() {
        push();
        rectMode(CENTER)
        fill("red") 
		rect(this.newWall.position.x, this.newWall.position.y, this.w, this.h);
        pop();
	}
}