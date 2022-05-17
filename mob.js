function Mob(x, y, w, h, r, img) {
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.r = r
  this.img = loadImage(img);
  this.xSpeed = 1;
  this.ySpeed = 1;

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
    if(this.y > p.y){ this.y -= this.ySpeed}else{this.y +=this.ySpeed}
  }

  
} //end Mob
