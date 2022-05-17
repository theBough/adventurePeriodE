function Mob(x, y, w, h, r, img) {
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.r = r
  this.img = loadImage(img);
  this.xSpeed = 3;
  this.ySpeed = 3;

  this.display = function () {
    
    if (rooms[activeY][activeX] == this.r) {
      this.img.resize(this.w, this.h)
      image(this.img, this.x, this.y);
    } //end if
  };
  this.update = function(){
    if(this.x > p.x){
      //the mob is on the left of the player
      this.x -= this.xSpeed;
    }else{
      //the mob is on the right of the player
      this.x += this.xSpeed;
    }    
  }

  
} //end Mob
