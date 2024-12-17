import Shadow from "./character/shadow.js";
import GameMap from "./map/game_map.js";

const canvasHeight = 800;
const canvasWidth = 1000;

function animate(s, gameMap, ctx) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  gameMap.draw(ctx);
  s.draw(ctx);
  s.update();
  requestAnimationFrame(() => animate(s, gameMap, ctx));
}

function main() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Canvas initialization complete, make it visible
  canvas.classList.remove("hidden");
  const gameMap = new GameMap(canvasHeight, canvasWidth);
  const s = new Shadow(canvasHeight, canvasWidth);
  animate(s, gameMap, ctx);
}

window.addEventListener("load", main);

