function setup () {
  createCanvas (400, 400);
  background (220); 
  setInterval (makeSquare, 250);
  }
  
  function makeSquare() {
  let r = random (255);
  let g = random (255);
  let b = random (255);
  
    noStroke();
    fill (r, g, b);
    rect (random (0, 300), random (0, 300), 60, 60);
  
    setTimeout (makeTriangle, 2000); 
  }
  
  
  function makeTriangle (){
    let r = random (255);
    let g = random (255); 
    let b = random (255);
    
    noStroke ();
    fill (r, g, b);
    triangle (random (0, 300), random (0, 300), random (0, 300), random (0, 300), random (0, 300), random (0, 300), random (0, 300))
  }
  
  