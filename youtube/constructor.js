let bubbles = [];

function setup() {}

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.display = function () {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  };
  this.move = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  };
}
