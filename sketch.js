let p;
let w = []
let k;
let activeX, activeY;
let g;
function setup() {
  createCanvas(400, 400);
  p = new Player(50,50,20,20, "#8c1aff");
  g = new Gate(250,50,20,80,roomOne,"white");
  activeX = 0;
  activeY = 0;
  fillRooms();
   k = new Key(200,100,20,15,roomOne,"key.png");
}
function draw() {
  background("black");
  p.display()
  p.update();
  k.display()
  k.keyCollision();
  k.update();
  g.display();
  g.gateCollision();
  for(i=0 ; i<w.length ; i++){
    //this will loop however many walls
    //there are in this room
    w[i].display()
    
  }//end loop
  screenChange();
  rooms[activeY][activeX].call()
  checkForCollision()
}//end draw
function screenChange(){
  /*this function is checking to see if the player has gone off
  the canvas*/
  if(p.x < 0){
    //off the canvas tothe left
    //so place the player on the right
    p.x = width - p.w
    activeX -= 1;
  }
  if(p.x > width){
    //off the canvas tothe right
    //so place the player on the left
    p.x = 0
    activeX += 1;
  }
  if(p.y < 0){
    //off the canvas tothe top
    //so place the player on the bottom
    p.y = height - p.h
    activeY -=1;
  }
  if(p.y > height){
    //off the canvas tothe bottom
    //so place the player on the top
    p.y = 0
    activeY += 1
  }
}//end screen change
