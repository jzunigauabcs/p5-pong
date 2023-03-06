class Paddle {
	constructor(isLeft) {
		this.w = 20;
		this.h = 100;
		this.y = int(height / 2);

		if(isLeft) {
			this.x = 0
		} else {
			this.x = width - this.w
		}
	}

	draw() {
		
	}
}