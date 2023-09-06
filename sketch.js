// Description: Recursive Circles with a rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);
  recurcsive(width / 2, height / 2, (width / 4) * millis() * 0.001); //call the recursive function IN the draw loop to make it run over and over again
}

function recurcsive(x, y, diameter) {
  //set the color
  let r = (x / width) * 255;
  let g = (y / height) * 255;
  let b = 255 - r;
  let a = 255;

  stroke(r, g, b, a);

  //set the offset
  // uncooment one of the following lines to see the difference
  // let Offset = 50; //;
  // let Offset = (diameter * 0.25) % 50; //;
  let Offset = diameter * 0.25;

  noFill();

  push();
  strokeWeight(1.5);
  rect(x - diameter / 2, y - diameter / 2, diameter); //draw a rectangle
  strokeWeight(1.3);
  circle(x, y, (diameter * 0.7) % 50); //draw a circle
  pop();

  //You must always have an exit condition or your program will enter into an infinite loop - a crash
  if (diameter < 90) {
    return; // leave the function
  } else {
    //make a recursive function call but with a reduced diameter
    noFill();
    recurcsive(x + Offset, y, diameter * 0.5); //left
    recurcsive(x, y + Offset, diameter * 0.5); //down
    recurcsive(x - Offset, y, diameter * 0.5); //right
    recurcsive(x, y - Offset, diameter * 0.5); //up
  }
}
