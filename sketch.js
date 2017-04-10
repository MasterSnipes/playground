var t=0;
var size;
var pointX,pointY;

function setup(){
 createCanvas(640,480);
 pointX = 0;
 pointY = 0;
 background(255);
}

function draw(){
  if(pointX == width){
   fill(255);
    rect(0,400,width,height);
    pointX = 0;
 }
 textSize(20);
 text("Graph",40,470);
 stroke(0,0,0,0);
 fill(0);
 size = noise(t) * 300;
 pointY = noise(t)*-70+460;
 
 stroke(0);
 point(pointX,pointY);
 stroke(0,0,0,0);
 fill(255);
 rect(0,0,width,400);
 fill(0);
 ellipse(width/2,height/2,size,size);
 t+= 0.005;
 pointX++;
}