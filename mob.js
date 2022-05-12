function Mob(x, y, w, h, r, img) {
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.img = loadImage(img);

  this.display = function () {
    
    if (rooms[activeY][activeX] == this.r) {
      console.log("test")
      this.img.resize(this.w, this.h)
      image(this.img, this.x, this.y);
    } //end if
  };
  this.update = function () {
    
  }; //end upDate
  this.mobCollision = function () {
    
  }; //end Collision
} //end Mob
