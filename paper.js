class Paper{
constructor(){
    var balloption={
		isStatic:false,
		density:1.2,
		friction:0.5,
		restitution:0.3
	}
	this.body=Bodies.circle(50,636,20,balloption)
	
	World.add(world,this.body)
	

    
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y);

    circle(0,0,20);
pop();


}


}
