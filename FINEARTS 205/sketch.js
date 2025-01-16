function setup() {
  createCanvas(400, 400);
  background(220);

  setTimeout (makeRedSquare, 2000)
}

function makeRedSquare (){
noStroke ();
fill (255, 0, 0);
rect (2000, 100, 100, 60);
}

function draw (){
}