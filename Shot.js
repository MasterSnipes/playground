function Shot(x,y,velX,velY){
	this.pos = createVector(x,y);
	this.velocity = createVector(velX*2, velY*2);
	
	this.update = function(){
		
		if(Math.abs(this.velocity.x) == 2 || Math.abs(this.velocity.y) == 2){
			this.velocity.mult(5);
		} else if(this.velocity.x == 0 && this.velocity.y == 0){

			this.velocity.set(5,0);

		}
		
		this.pos.add(this.velocity);

	}

	this.render = function(){
		fill(0,0,0,0);
		strokeWeight(3);
		stroke(255);
		ellipse(this.pos.x,this.pos.y,15,15);
	}
	this.isOut = function(){

		if(this.pos.x <= 0 || this.pos.x >= width || this.pos.y <= 0 || this.pos.y >= height) {
			return true;
		} else {
			return false;
		}
	}

}