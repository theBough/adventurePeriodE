function Key(x,y,w,h,r, path){
  this.x = x;
  this.y = y;
  this.w  = w;
  this.h = h;
  this.r = r;
  this.img = loadImage(path);
  this.have = false;
  
  this.display = function(){
    if(this.r == rooms[activeY][activeX]){
      //resize the key image
      this.img.resize(this.w, this.h);
      image(this.img, this.x, this.y)
      
    }//end if
  }//end display
 this.keyCollision = function () {
    //check if we hit the left of any key
    if (
      p.y <= this.y + this.h &&
      p.y + p.h >= this.y &&
      p.x <= this.x + this.w &&
      p.x >= this.x &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }

    //check if we hit the right of any key
    if (
      p.y <= this.y + this.h &&
      p.y + p.h >= this.y &&
      p.x + p.w >= this.x &&
      p.x <= this.x + this.w &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }

    if (
      p.x <= this.x + this.w &&
      p.x + p.w >= this.x &&
      p.y <= this.y + this.h &&
      p.y >= this.y &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }

    //check if we hit the top of any key
    if (
      p.x <= this.x + this.w &&
      p.x + p.w >= this.x &&
      p.y + p.h >= this.y &&
      p.y <= this.y + this.h &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }
     //Check if the key hits a gate.
  
    
  };
  
}
