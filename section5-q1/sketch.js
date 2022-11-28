// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",100,100);

}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke()
  fill(94, 185, 84);
  rect(x,y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x + p, y + h + p);
  fill(94, 185, 84)
  triangle(x,y+h-15,x,y+h-5,x-20,y+h-17)
}
