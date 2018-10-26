var chime;

var sounds = [];

var backone;

var backtwo;

let circles = [];

const n = 500;

function preload() {
  soundFormats('m4a');
  for (var i = 0; i < 19; i++) {
    let sound = loadSound('glockenspiel.m4a');
    sound.rate(0.5 * pow(2, i / 12)); // 12-semitone exponential scale

    sounds.push(sound);
  }
}

function setup() {
	createCanvas(1000, 750);
  backone = createGraphics(1000, 750);
  backtwo = createGraphics(1000, 750);
  backone.colorMode(HSB);
  backtwo.colorMode(HSB);
  rectMode(CENTER);
  for (let i = 0; i < n; i++) {
    circles.push({
      x: (i / n) * width,
      y: 2 * height / 4,
      vx: random(-0.5, 0.5),
      vy: random(-2, 1)
    });
  }
}

const d = 30;

function draw() {
  background(255);
  backone.stroke(random(1, 360), 50, 150, 0.03);

  for (let i = 0; i < circles.length; i++) {
    // for each circle
    let from = circles[i];
		for (let j = i+1; j < circles.length; j++) {
      let to = circles[j];
			if (dist(from.x, from.y, to.x, to.y) < d) {
				backone.line(from.x, from.y, to.x, to.y);
      }
    }
    move(from);
  }
  backtwo.clear();
  for (var i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    if (sound.isPlaying()) {
      backtwo.fill(random(1, 360), 50, 150, 50);
      backtwo.noStroke();
      backtwo.ellipse(width / sounds.length * (i + 0.77), height / 2, 50, 50);
    }
  }
  image(backone, 0, 0, 1000, 750);
  image(backtwo, 0, 0, 1000, 750);
}


function move(circle) {
  circle.x += circle.vx;
  circle.y += circle.vy;

  if (circle.x < -d || circle.y < -d || circle.x > width + d || circle.y > height + d) {
    circles.splice(circles.indexOf(circle), 1);
  }
}

function keyPressed() {
  if (key == 'a') {
    sounds[0].play();
  }
  if (key == 'w') {
    sounds[1].play();
  }
  if (key == 's') {
    sounds[2].play();
  }
  if (key == 'e') {
    sounds[3].play();
  }
  if (key == 'd') {
    sounds[4].play();
  }
  if (key == 'f') {
    sounds[5].play();
  }
  if (key == 't') {
    sounds[6].play();
  }
  if (key == 'g') {
    sounds[7].play();
  }
  if (key == 'y') {
    sounds[8].play();
  }
  if (key == 'h') {
    sounds[9].play();
  }
  if (key == 'u') {
    sounds[10].play();
  }
  if (key == 'j') {
    sounds[11].play();
  }
  if (key == 'k') {
    sounds[12].play();
  }
  if (key == 'o') {
    sounds[13].play();
  }
  if (key == 'l') {
    sounds[14].play();
  }
}
