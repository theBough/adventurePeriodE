/*
This function will check to see if the player hits a wall. If it hits the wall the player will back up 5 units.
In your "draw" function in your sketch.js file, you need to call "checkForCollision"
*/

function checkForCollision() {
  for (var i = 0; i < w.length; i++) {

    //check if we hit the left of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x <= w[i].x + w[i].w && p.x >= w[i].x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x + p.w >= w[i].x && p.x <= w[i].x + w[i].w) {
      p.x -= 5
    }


    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y <= w[i].y + w[i].h && p.y >= w[i].y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y + p.h >= w[i].y && p.y <= w[i].y + w[i].h) {
      p.y -= 5;
    }

  }
}
