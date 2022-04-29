let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(50,50,20,20);
}

function draw() {
  background(220);
  p.display()
}
