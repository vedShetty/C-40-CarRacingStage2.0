var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var playerImg1, playerImg2, playerImg3, playerImg4;
var trackImg, groundImg;

function preload(){
  playerImg1 = loadImage("images/car1.png");
  playerImg2 = loadImage("images/car2.png");
  playerImg3 = loadImage("images/car3.png");
  playerImg4 = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg");
  groundImg = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
