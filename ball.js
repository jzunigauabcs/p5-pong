class Ball {
  constructor() {
    this.r = 10;
    this.stepX = 3;
    this.stepY = 1;
    this.reset();
  }

  reset() {
    this.x = int(width / 2) - int(this.r / 2);
    this.y = int(height / 2) - int(this.r / 2);
    this.stepX *= round(random()) * 2 - 1;
    this.stepY *= round(random()) * 2 - 1;
  }

  draw() {
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x += this.stepX;
    this.y += this.stepY;
  }

  edge() {
    if(this.y - this.r <= 0 || this.y + this.r >= height) {
      this.stepY *= -1;
    }

    if(this.x - this.r <= 0 || this.x + this.r >= width)
      this.reset();
  }
}
