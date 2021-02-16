const SCALE = 2;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
const FACING_DOWN = 0;
const FACING_UP = 1;
const FACING_LEFT = 2;
const FACING_RIGHT = 3;
const FRAME_LIMIT = 8;
const MOVEMENT_SPEED = 0.8;

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 1600;
ctx.canvas.height = 800;

let keyPresses = {};
let currentDirection = FACING_DOWN;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 0;
let positionY = 0;
let img = new Image();
let chef = new Image();

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

function loadImage() {
  img.src = 'green1.png';
  img.onload = function() {
    window.requestAnimationFrame(gameLoop);
  };
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT, canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

loadImage();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;

  if (keyPresses.w || keyPresses.W) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
    hasMoved = true;
  } else if (keyPresses.s || keyPresses.S) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
  }

  if (keyPresses.a || keyPresses.A) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.d || keyPresses.D) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
  }

  if (hasMoved) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }
  
  if (!hasMoved) {
    currentLoopIndex = 0;
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
  window.requestAnimationFrame(gameLoop);

  /*ctx.beginPath();
  ctx.rect(700, 300, 200, 50);
  ctx.stroke();*/
  setVolume();
  detectLocation();
}

function moveCharacter(deltaX, deltaY, direction) {
  if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
    positionX += deltaX;
    console.log(positionX);
  }
  if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
      positionY += deltaY;
      console.log(positionY);
  }
  //building collisions
  //building 1 row 1 
  if (positionX + deltaX >= 60 && positionX + deltaX <= 280 && positionY + deltaY >= 0 && positionY + deltaY <= 170){
    positionX -= deltaX;
    positionY -= deltaY;
  }
  //building 2 row 1
  if (positionX + deltaX >= 360 && positionX + deltaX <= 650 && positionY + deltaY >= 0 && positionY + deltaY <= 170){
    positionX -= deltaX;
    positionY -= deltaY;
  }
  //building 3 row 1
  if (positionX + deltaX >= 730 && positionX + deltaX <= 990 && positionY + deltaY >= 0 && positionY + deltaY <= 170){
    positionX -= deltaX;
    positionY -= deltaY;
  }
  //building 4 row 1
  if (positionX + deltaX >= 1065 && positionX + deltaX <= 1235 && positionY + deltaY >= 0 && positionY + deltaY <= 170){
    positionX -= deltaX;
    positionY -= deltaY;
  }
  //building 5 row 1
  if (positionX + deltaX >= 1320 && positionX + deltaX <= 1600 && positionY + deltaY >= 0 && positionY + deltaY <= 170){
    positionX -= deltaX;
    positionY -= deltaY;
  }
    //building 1 row 2 
    if (positionX + deltaX >= 60 && positionX + deltaX <= 280 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 2 row 2
    if (positionX + deltaX >= 360 && positionX + deltaX <= 650 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 3 row 2
    if (positionX + deltaX >= 730 && positionX + deltaX <= 990 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 4 row 2
    if (positionX + deltaX >= 1065 && positionX + deltaX <= 1235 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 5 row 2
    if (positionX + deltaX >= 1320 && positionX + deltaX <= 1600 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
        //building 1 row 2 
    if (positionX + deltaX >= 60 && positionX + deltaX <= 280 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 2 row 2
    if (positionX + deltaX >= 360 && positionX + deltaX <= 650 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 3 row 2
    if (positionX + deltaX >= 730 && positionX + deltaX <= 990 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 4 row 2
    if (positionX + deltaX >= 1065 && positionX + deltaX <= 1235 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 5 row 2
    if (positionX + deltaX >= 1320 && positionX + deltaX <= 1600 && positionY + deltaY >= 230 && positionY + deltaY <= 420){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 1 row 3 
    if (positionX + deltaX >= 60 && positionX + deltaX <= 280 && positionY + deltaY >= 490 && positionY + deltaY <= 700){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 2 row 3
    if (positionX + deltaX >= 360 && positionX + deltaX <= 650 && positionY + deltaY >= 490 && positionY + deltaY <= 700){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 3 row 3
    if (positionX + deltaX >= 730 && positionX + deltaX <= 990 && positionY + deltaY >= 490 && positionY + deltaY <= 700){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 4 row 3
    if (positionX + deltaX >= 1065 && positionX + deltaX <= 1235 && positionY + deltaY >= 490 && positionY + deltaY <= 700){
      positionX -= deltaX;
      positionY -= deltaY;
    }
    //building 5 row 3
    if (positionX + deltaX >= 1320 && positionX + deltaX <= 1600 && positionY + deltaY >= 490 && positionY + deltaY <= 700){
      positionX -= deltaX;
      positionY -= deltaY;
    }
  currentDirection = direction;
}

function detectLocation(){
  var sliceOne = document.getElementById("lifeNo1");
  var sliceTwo = document.getElementById("lifeNo2");
  var sliceThree = document.getElementById("lifeNo3");
  var sliceFour = document.getElementById("lifeNo4");
  var food = document.getElementById("lifeLeft");
  var a1 = 0;
  var a2 = 0;
  var a3 = 0;
  var a4 = 0;

  //retrieve pizza
  if (positionX >= 210 && positionX <= 270 && positionY >= 140 && positionY <= 210) {
    food.style.display = "inline-flex";
  }
  //deliver first pizza
  if (positionX >= 200 && positionX <= 280 && positionY >= 410 && positionY <= 450) {
    sliceOne.style.display = "none";
  }
  //deliver second pizza
  if (positionX >= 580 && positionX <= 650 && positionY >= 670 && positionY <= 740) {
    sliceTwo.style.display = "none";
  }
  //deliver thrid pizza
  if (positionX >= 1460 && positionX <= 1510 && positionY >= 690 && positionY <= 750) {
    sliceThree.style.display = "none";
  }
  //deliver fourth pizza
  if (positionX >= 1190 && positionX <= 1230 && positionY >= 160 && positionY <= 200) {
    sliceFour.style.display = "none";
  }
  if (sliceOne.style.display === "none"){
    a1 = 1;
  }
  if (sliceTwo.style.display === "none"){
    a2 = 1;
  }
  if (sliceThree.style.display === "none"){
    a3 = 1;
  }
  if (sliceFour.style.display === "none"){
    a4 = 1;
  }
  if (a1 == 1 && a2 == 1 && a3 == 1 && a4 == 1){
    document.getElementById("gameFinished").style.display = "block";
  }
  if (positionX >= 290 && positionX <= 370 && positionY >= 440 && positionY <= 500) {
    /*sliceFour.style.display = "none";*/
    sliceFour.parentNode.removeChild(lifeNo1);
  }
  if (positionX >= 1010 && positionX <= 1070 && positionY >= 180 && positionY <= 250) {
    sliceThree.style.display = "none";
  }
  if (positionX >= 1000 && positionX <= 1080 && positionY >= 720 && positionY <= 790) {
    sliceOne.style.display = "none";
  }
}

//lantern position via keyboard coordinates
function update() {
  var x = positionX + 18;
  var y = positionY + 18;
  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px');
}
setInterval(update, 10);

//background audio file
var backgroundMusic = document.getElementById('chill');
function setVolume(){
  backgroundMusic.volume = 0.1;
}

//timer
var Timer = function(opts) {
  var self = this;

  self.opts     = opts || {};
  self.element  = opts.element || null;
  self.minutes  = opts.minutes || 0;
  self.seconds  = opts.seconds || 00;

  self.start = function() {
    self.interval = setInterval(countDown, 1000);
  };

  self.stop = function() {
    clearInterval(self.interval);
  };

  function countDown() {
    self.seconds--;
    if (self.minutes == 0 && self.seconds == 0) {
      self.stop();
    }

    if (self.seconds < 0) {
      self.seconds = 59;
      self.minutes--;
    }

    if (self.seconds <= 9) { self.seconds = '0' + self.seconds; }

    self.element.textContent = self.minutes + ' : ' + self.seconds;
  }
};

var myTimer = new Timer({
  minutes: 5,
  seconds: 00,
  element: document.querySelector('#timer')
});

myTimer.start();

function gameOver() {
  document.getElementById("gameOver").style.display = "block";
}
setInterval("gameOver()", 300000);
