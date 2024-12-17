export default class Shadow {
  // the cutout of the image from sprite sheet 
  frameX;
  frameY;
  frameHeight;
  frameWidth;

  // the canvas size 
  gameHeight;
  gameWidth;

  // the position and size of shadow
  x;
  y;
  shadowWidth;
  shadowHeight;
  // the shadow sprite sheet 
  image;
  //the char 
  speed;
  staggerFrame;
  gameFrame;

  constructor(gameHeight, gameWidth) {
    this.frameX = 0;
    this.frameY = 0;
    this.frameHeight = 70;
    this.frameWidth = 64;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.x = 0;
    this.y = 0;
    this.shadowWidth = this.frameWidth; //sclaing the photo
    this.shadowHeight = this.frameHeight;
    this.speed = 0;
    this.image = document.getElementById("shadow");
    this.staggerFrame = 7;
    this.gameFrame = 0;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.frameWidth,
      this.frameY,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.shadowWidth,
      this.shadowHeight,
    );
  }

  update() {
    if ((this.gameFrame % this.staggerFrame) == 0) {
      if (this.frameX == 5) {
        this.frameX = 0;
      }
      this.frameX++;
      this.gameFrame = 0;
    }
    this.gameFrame++;
  }
}

