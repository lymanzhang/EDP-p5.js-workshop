// Daniel Shiffman
// Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media

// Using a for loop to initialize values.
// Using a for loop to draw.
// Adapted from Getting Started with Processing.
// from Lauren McCarthy

// An array
var images = [];
var curImage = 0;

function setup() {
  createCanvas(500, 500);
 
  // Add some more images to the array
  var fish = loadImage("fish.png");
  images.push(fish); 
  
  var burger = loadImage("burger.png");
  images.push(burger); 
  
  // This is also ok
  images.push(loadImage("chickens.jpg")); 

}

function draw() {
  background(120, 204, 50);

  // Draw image
  imageMode(CENTER);
  image(images[curImage], width/2, height/2);
}


function mousePressed() {

  // Increment curImage
  curImage = curImage + 1;

  // Make sure curImage is still in range, loop around if necessary
  if (curImage >= images.length) {
    curImage = 0;
  }
}
