
function setup() {
  createCanvas(400,400);
   angleMode(DEGREES);
}

function draw() {
  background(0);


text("DIGITAL CL0CK",160,30);

translate(200,200);
rotate(-90);
   
  let h = hour();
  let m = minute();
  let s = second();


  stroke(255,153,51);
  strokeWeight(8);
  noFill();
  let end = map(s,0,60,0,360)
  arc(0,0,300,300,0,end);

  push();
  rotate(end);
  stroke(255,153,51);
   line (0,0,100,0);
 pop();

  stroke(255);
  let end2 = map(m,0,60,0,360)
  arc(0,0,280,280,0,end2);


  push();
  rotate(end2);
  stroke(255);
   line (0,0,70,0);
 pop();


  stroke(0,150,0);
  let end3 = map(h%12,0,12,0,360)
  arc(0,0,260,260,0,end3);


  push();
  rotate(end3);
  stroke(0,150,0);
   line (0,0,50,0);
 pop();

 stroke(0,0,255);
 point(0,0);
  //fill(255);
 // noStroke();
 // text(h + ':'+ m +':' + s , 10,300);
}
