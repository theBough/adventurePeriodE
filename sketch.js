let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(50,50,20,20, "#8c1aff");
}

function draw() {
  background("#ffff4d");
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
  if(p.x > width){
    //off the canvas tothe right
    //so place the player on the left
    p.x = 0
  }
  if(p.y < 0){
    //off the canvas tothe top
    //so place the player on the bottom
    p.y = height - p.h
  }
  if(p.y > height){
    //off the canvas tothe bottom
    //so place the player on the top
    p.y = 0
  }
}//end screen change
