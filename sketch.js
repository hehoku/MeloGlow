let song, analyzer;

function preload() {
  song = loadSound("./assets/SpotifyMate.com - 陀螺 - 万晓利.mp3");
}

// We define our palette
let palette = [
  "#2c695a",
  "#4ad6af",
  "#7facc6",
  "#4e93cc",
  "#f6684f",
  "#ffd300",
];

function setup() {
  createCanvas(800, 600, WEBGL);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

  angleMode(DEGREES);
  background("#fffceb");

  // Scale brushes to adapt to canvas size
  brush.scale(1.5);

  // Activate the flowfield we're going to use
  brush.field("seabed");
}

function draw() {
  let rms = analyzer.getLevel();
  console.log(rms);
  frameRate(10);
  translate(-width / 2, -height / 2);

  // brush.box() returns an array with available brushes
  let available_brushes = brush.box();

  // Set the stroke to a random brush, color, and weight = 1
  // You set a brush like this: brush.set(name_brush, color, weight)
  brush.set(random(available_brushes), random(palette), 1);

  // Draw a random flowLine (x, y, length, direction)
  brush.flowLine(
    random(width),
    random(height),
    random(300, 800),
    random(0, 360)
  );
}
