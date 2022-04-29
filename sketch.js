let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(50,50,20,20);
}

function draw() {
  background(220);
  p.display()
  p.update()
  screenChange();
}

function screenChange(){
  /*this function is checking to see if the player has gone off
  the canvas*/
  if(p.x < 0){
    //off the canvas tothe left
    //so place the player on the right
    p.x = width - p.w
  }
}//end screen change
