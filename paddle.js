class Paddle {
  constructor(isLeft) {
    this.w = 20;
    this.h = 100;
    this.y = int(height / 2);
    this.dir = 0;
    if(isLeft) {
      this.x = this.w;
    } else {
      this.x = width - this.w;
    }
  }

  move(step) {
    this.dir = step;
  }

  update() {
    this.y += this.dir;
    if(this.y - this.h / 2 <= 0 || this.y + this.h / 2 >= height)
      this.y -= this.dir;
  }
  
  draw() {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
  
}
