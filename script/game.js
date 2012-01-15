/**
 * File game.js
 * implemented by Adelino Lobão
 * 14/01/2012
 */

/**
 * Draw the window game
 */
var drawWindow = function() {
 	context.fillStyle = '#000';
	context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	context.beginPath();
	context.rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	context.closePath();
	context.fill();
}

/**
 * Animate all the lasers shoot by the player
 */
var animateLasers = function() {
	//iterate through all the lasers
	for(index in lasers) {
		//draw laser
		lasers[index].draw();
		//add a step to the laser
		lasers[index].step();
	}
}

/**
 * Run the game
 */
var runGame = function() {
 	//draw the window game
 	drawWindow();
 	//draw the player
	player.draw();
	//animate lasers
	animateLasers();
	//set timeout function
	gameLoop = setTimeout(runGame, intervalTime);
}

//window width
const WINDOW_WIDTH = 600;
//window height
const WINDOW_HEIGHT = 800;
//frame rate
const FRAME_RATE = 50;

//game loop
var gameLoop;
//interval time
var intervalTime = 1000 / FRAME_RATE;

//get frame window
var frameWindow = document.getElementById("content");
//frame window width
frameWindow.width = WINDOW_WIDTH;
//frame window height
frameWindow.height = WINDOW_HEIGHT;
//get context
var context = frameWindow.getContext("2d");

//keyhandler object
var keyHandler = new KeyHandler();
//player object
var player = new Player();
//array that will store the lasers
var lasers = new Array();

//handle events when the a key is pressed
document.onkeypress = function(e){
	keyHandler.keyPress(e);	
}

//run the game
runGame();