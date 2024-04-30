function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
  stroke("Aqua");
    fill("MediumBlue");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }