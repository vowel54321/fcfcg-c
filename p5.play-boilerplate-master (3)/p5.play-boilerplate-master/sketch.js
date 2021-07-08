function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

function draw() {
  background("yellow");  
  translate(200,200)
  rotate(-90)
  hr=hour();
 mn=minute();
sc=second();
scAngle=map(sc,0,0,60,360)
hrAngle=map(hr%12,0,12,0,360)
mnAngle=map(mn,0,0,60,360)
push()
rotate(scAngle)
stroke("purple")
strokeWeight(7);
line(0,0,100,0)
pop()

push()
rotate(mnAngle)
stroke("black")
strokeWeight(7);
line(0,0,70,0)
pop()

push()
rotate(hrAngle)
stroke("blue")
strokeWeight(7);
line(0,0,50,0)
pop()

stroke("red")
strokeWeight(7)
point(0,0)
stroke("purple")
arc(0,0,300,300,0,scAngle);
stroke("blue")
arc(0,0,260,260,0,hrAngle);
stroke("black")
arc(0,0,280,280,0,mnAngle);
}

  drawSprites();
}