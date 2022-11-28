// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

let x = 100
let p = 1000
let q = 100
let s = 1

function draw(){
 
  background(160, 192, 255);
  noStroke()
  for(let i = 0; i < 4; i++)
  {let y = i * 140 + 30  
     cloud(x,y)
   x-=1
   if (x < 0) {x = windowWidth }
  }

  fill(255,0,0)
  balloon(1000,10)

   fill(255,255,255)
   ellipse(100,mouseY,100,30)
   triangle(70,mouseY-10,10,mouseY,70,mouseY+10)
   triangle(50,mouseY,30,mouseY-30,30,mouseY+30)
   triangle(120,mouseY,90,mouseY-50,90,mouseY+50)

   fill (0)
   for(let i = 0; i < 3; i++)
   ellipse(i*50+200,mouseY,10)
  if (mouseY > q-25 && mouseY < q+25)
     {star(p,q,50)    
      p = windowWidth 
      q = random(100,500)
      s+=1
      }
   text("level "+s,windowWidth/100,windowHeight-20,) }
 
  function cloud(x,y)  {
    fill(255,255,255)
  ellipse(x-40,y-10,60,20)
  ellipse(x,y,90,30)
  ellipse(x+20,y+10,60,20)}


  function balloon(x,y) {
    ellipse (p,q,50)
    triangle (p,q+25,p-10,q+35,p+10,q+35)
    p-= s
    if (p < 0) {
      p = windowWidth
      q = random(100,500)
    }
  }

  function star(cx, cy, r){
       fill(255,255,0)
    beginShape();    
    for(let i = 0; i < 5; i++){
      const theta = TWO_PI * i * 2 / 5 - HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x, y);
    }
    endShape(CLOSE); 
    
}

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }