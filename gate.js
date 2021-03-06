function Gate(x,y,w,h,r,col){
  this.x  =x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.r = r
  this.show = true
  
  this.display = function(){
    if(this.r == rooms[activeY][activeX] && this.show ){
      fill(this.col);
      rect(this.x, this.y, this.w, this.h);
    }//end if
  }//end display
  
  this.gateCollision = function(){
     //check if we hit the left of any key
    if (
      k.y <= this.y + this.h &&
      k.y + k.h >= this.y &&
      k.x <= this.x + this.w &&
      k.x >= this.x &&
      this.r === rooms[activeY][activeX]
    ) {
     this.show = false
    }

    //check if we hit the right of any key
    if (
      k.y <= this.y + this.h &&
      k.y + k.h >= this.y &&
      k.x + k.w >= this.x &&
      k.x <= this.x + this.w &&
      this.r === rooms[activeY][activeX]
    ) {
      this.show = false
    }

    if (
      k.x <= this.x + this.w &&
      k.x + k.w >= this.x &&
      k.y <= this.y + this.h &&
      k.y >= this.y &&
      this.r === rooms[activeY][activeX]
    ) {
      this.show = false
    }

    //check if we hit the top of any key
    if (
      k.x <= this.x + this.w &&
      k.x + k.w >= this.x &&
      k.y + k.h >= this.y &&
      k.y <= this.y + this.h &&
      this.r === rooms[activeY][activeX]
    ) {
      this.show = false
    }    
    
    //check if we hit the left of any wall
    if (this.r == rooms[activeY][activeX] && this.show && p.y <= this.y +this.h && p.y + p.h >= this.y && p.x <= this.x + this.w && p.x >= this.x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (this.r == rooms[activeY][activeX] &&this.show && p.y <= this.y + this.h && p.y + p.h >= this.y && p.x + p.w >=this.x && p.x <= this.x + this.w) {
      p.x -= 5
    }


    if (this.r == rooms[activeY][activeX] &&this.show && p.x <=this.x + this.w && p.x + p.w >= this.x && p.y <= this.y + this.h && p.y >= this.y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (this.r == rooms[activeY][activeX] &&this.show && p.x <= this.x + this.w && p.x + p.w >= this.x && p.y + p.h >= this.y && p.y <= this.y + this.h) {
      p.y -= 5;
    }

  }//end gate Collision
}//end Gate
