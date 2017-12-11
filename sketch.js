//set variables
let r;
let g;
let b;
let size;
let selection = 0;
let makeRed;
let makeGreen;
let makeBlue;

//set up initial function to hold the set up instructions
function setup() {
  //canvas size X by Y
  //make canvas a variable to work with canvas.parent. 
  var canvas = createCanvas(841,594);
  canvas.parent('sketchcontainer');
  background(255);
}
//Rendering function, the draw function allows javascript to draw within the canvas
function draw() {
//This file does not have a background as the user has a canvas to draw on and if a background was used it would remove the drawing each frame.

//push() and pop() isolate the code within the who functions. Push() starts the instructions and pop() returns it to its original state.
//This set of code is for the border around the canvas.
  push();
// here the let function is used to give the variables meaning. Below all make red, blue and green are set to random.
  let makeRed = random(255);
  let makeBlue = random(255);
  let makeGreen = random(255);
  //no fill is used to give the white background.
  noFill();
  //stroke is used and the colours are set to the random colors above.
  stroke(makeGreen, makeRed, makeBlue);
  //this is the size of the border around the canvas
  strokeWeight(20);
  //A rectangle is used as a background would not allow the user to draw
  rect(0, 0, width, height);
  pop();
//This code is the code for the shapes changing and colors changing at random.
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
    //size of the shape is random between 0 and 100
    size = random(100)
  }
    strokeWeight(0);
    // the fill of the shapes is set to the variables above r b and b.
    fill(r,g,b);
    //This code sets each of the 3 shapes to follow the mouse position. It also sets the size and gives the selection to the shape.
    if (selection===0) ellipse(mouseX, mouseY, size, size);
    if (selection===1) rect(mouseX, mouseY, size, size);
    if (selection===2) triangle(mouseX, mouseY, mouseX-random(size), mouseY, mouseX, mouseY-random(size));
    //These if statements use the keycodes for the number 1, 2 and 3 buttons.
    //When number 1 is pressed ellipse or selection 0 will be chosen.
    if (keyCode === 49) selection = 0;
    //when number 2 is pressed rectangle or selection 1 will be chosen.
    if (keyCode === 50) selection = 1;
    //when number 3 is pressed triangle or selection 2 will be Schosen.
    if (keyCode === 51) selection = 2;
}
