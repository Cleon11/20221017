function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  rectMode(CENTER)
  ellipse(25,25,50)
  noFill(0)
  stroke(255)
  

  var w= mouseX/10
   for(var j=0;j<height/50;j++)
 {
  for(var i=0;i<width/40;i++)
  
   ellipse(25+50*i,25+50*j,mouseX/10)//座標(??)產生一個50直徑的圓
   stroke("#FFE66F")
   rect(25+50*i,25+50*j,mouseY/4)
   stroke("#FFE66F")
   ellipse(50+50*i,50+50*j,mouseY/10)
   stroke("#80FFFF")
 } 


}
  

