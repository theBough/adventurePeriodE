function Player(x, y, w, h, col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  
  this.display = function(){
    fill(this.col)
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
     if(keyIsDown(38)){
      //this is the up arrow key
      this.y -= 5;
    }//end if
    if(keyIsDown(40)){
      //this is the down arrow key
      this.y += 5;
    }//end if
    
  }
}//end Player
