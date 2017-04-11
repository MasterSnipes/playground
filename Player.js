var shots = [];
var pos;
var velocity;
var speed;
var ammo;
var sec;
var psec;
var debug = false;
function Player(){

	speed = 5;
	ammo = 10;
	pos = createVector(width/2,height/2);
	velocity = createVector(0,0);
	this.update = function()
	{
		psec = sec;
		sec = second();

		if(psec != sec){

			ammo++;

		}
		for(var i=0; i<shots.length; i++){
			shots[i].update();
			if(shots[i].isOut()){
				shots.splice(i,1);
			}
			
		}
		velocity.setMag(speed);
		
		pos.add(velocity);

		pos.x = constrain(pos.x,0,width);
		pos.y = constrain(pos.y,0,height);

		ammo = constrain(ammo,0,10);

	}

	this.checkInput = function(keyCode){
		if(keyCode == UP_ARROW || keyCode == 87){
			velocity.set(0,-1);
		} else if (keyCode == DOWN_ARROW || keyCode == 83){
			velocity.set(0,1);
		} else if (keyCode == LEFT_ARROW || keyCode == 65){
			velocity.set(-1,0);
		} else if (keyCode == RIGHT_ARROW || keyCode == 68){
			velocity.set(1,0);
		} else if (keyCode == 32 && ammo > 0){
			shots.push(new Shot(pos.x,pos.y,velocity.x,velocity.y));
			ammo -= 1;
		} else if (keyCode == 80){
			console.log("MOUSE");
			debug = !debug;
		}

	}

 	this.render = function()
	{
		for(var i = 0; i < shots.length;i++){
			shots[i].render();
		}

		fill(255);
		stroke(255);
		strokeWeight(3);
		ellipse(pos.x,pos.y,30,30);

		fill(50,50,50,150);
		rect(970,660,290,40);
		fill(100,100,100,150);
		rect(970,660,map(ammo,0,10,0,290),40);

		if(debug){
				fill(255);
				stroke(255);
				textFont("Arial");
				textSize(32);
				text(mouseX + ", " + mouseY, 50,50);

				text(second(), 50,120);
			
		}

	}

}





