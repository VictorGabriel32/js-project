function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
stroke("Aqua");
  fill("MediumBlue");
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}