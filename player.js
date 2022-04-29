function Player(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }//end display
  
  this.update = function(){
    /*This function will check to see if one of 
    the arrows keys has been pressed
    */
    if(keyIsDown(37)){
      //this is the left arrow key
      this.x -= 5;
    }//end if
    if(keyIsDown(39)){
      //this is the right arrow key
      this.x += 5;
    }//end if
    
  }
}//end Player
