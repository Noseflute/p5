var vw = window.innerWidth;
var vh = window.innerHeight;
var gui; //tells my program that it has a GUI

var value = 'black'; //The default color on load.
var Color = '#000000';
var BrushSize = [1,5,10,100]; //Brush size in pixels //Must have more than 3 or it will think this is RGB value.
var Mode = ['Draw', 'Clear All']; //Menu for the mdoe

function setup() {
  createCanvas(vw,vh);
  background('white');
  stroke(0,50);
  gui = createGui('My Menu',0,0); //This is the name of my menu and position
  gui.addGlobals('Color', 'Mode, "BrushSize'); //This is the stuff inside my menu
}

function draw() {
  if (mouseIsPressed) { //When the mouse is pressed
  strokeWeight(BrushSize); //Draw the width based on BrushSize integer
  stroke(color(Color)); //Make it a color that the user selects.
  line(mouseX, mouseY, pmouseX, pmouseY); //x1, y1, previous x1, previous y1
  }
  
  else {
    noFill();
  }
}

switch (Mode) { //This handles the Mode pull down menu
  case 'ClearAll': //When the user selects Clear All
  clear(); //I run the function to clear teh screen
  break; //Stop the switch
}