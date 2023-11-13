let song, analyzer;

function preload() {
  song = loadSound("./assets/宋亚轩 - 我怀念的 (Live).mp3");
}

function setup() {
  createCanvas(710, 200);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}
