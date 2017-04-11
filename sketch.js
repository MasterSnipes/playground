var t = 0;
var t2 = 0;
var p;

function preload(){



}
function setup(){
 createCanvas(1280,720);
 frameRate(60);
 p = new Player();
}

function draw(){
	background(50);
	p.checkInput();
	p.update();
	// p.updateAmmo();
	p.render();
}

function keyPressed(){

	p.checkInput(keyCode);

}