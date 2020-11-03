// Random walker created from a tutorial by Daniel Shiffman
let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
  background(0);
}

function draw() {
  walker.update();
  walker.show();
}