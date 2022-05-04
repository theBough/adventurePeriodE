let rooms = []
function fillRooms(){
  rooms = [
  [roomOne, roomTwo]
]
}

var roomOne = function(){
  w=[];
  //Top wall
  w.push(new Wall(0,0,width,20,"#66ccff"))
  //wall in the middle
  w.push(new Wall(0,200,175,20,"#ff66a3"))
  //green wall going downward
  w.push(new Wall(300,200,20,200,"#ccff66"))
 
}
var roomTwo = function(){
  w=[];
  w.push(new Wall(380,0,20,height,"#ccff66"))
}
