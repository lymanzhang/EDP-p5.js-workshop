// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Fundamentals of programming in JS (no objects or arrays yet)

// Variables
var x; 
var y;

// A function!
function setup() {
  createCanvas(600, 400); // instead of size()
  x = width/2;
  y = height/2;
}

function draw() {
  
  background(51);

  fill(255);
  ellipse(x, y, 64, 64);

  y = y + random(-1, 1);
  
  // Conditionals
  if (mouseX > x) {
    x = x + random(0,1);
  } else {
    x = x - random(0,1);
  }

  // Loops
  for (var i = 0; i < width; i += 20) {
    stroke(100);
    line(i,0,i,height);
  }

}
