export class Tile {
  constructor() {
    this.x = 5;
    this.y = 5;
  }

  color(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, 50, 50);
  }
}
