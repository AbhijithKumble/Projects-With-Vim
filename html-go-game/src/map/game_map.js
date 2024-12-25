export default class GameMap {
  image;
  mapHeight;
  mapWidth;
  gameHeight;
  gameWidth;
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("map")
    //sprite sheet height
    this.mapHeight = 383;
    this.mapWidth = 352;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.mapHeight,
      this.mapWidth,
      0,
      0,
      this.gameHeight, 
      this.gameWidth
    )
  }


}
