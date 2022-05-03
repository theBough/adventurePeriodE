let p;
let w = []
function setup() {
  createCanvas(400, 400);
  p = new Player(50,50,20,20, "#8c1aff");
}

function draw() {
  background("#ffff4d");
  p.display()
  p.update()
  for(i=0 ; i<w.length ; i++){
    //this will loop however many walls
    //there are in this room
    w[i].display()
    
  }//end loop
  screenChange();
  roomOne()
  checkForCollision()
}//end draw
function roomOne(){
  w=[];
  //Top wall
  w.push(new Wall(0,0,width,20,"#66ccff"))
  //wall in the middle
  w.push(new Wall(0,200,175,20,"#ff66a3"))
  //green wall going downward
  w.push(new Wall(300,200,20,200,"#ccff66"))
 
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
