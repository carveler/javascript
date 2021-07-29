class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeweight(4);
    noFill();
    ellipse(this.x, this.y, r * 2, r * 2);
  }
}

let bubble = new Bubble(200, 200, 40);
let bubble2 = new Bubble(400, 200, 40);

console.log(bubble);


