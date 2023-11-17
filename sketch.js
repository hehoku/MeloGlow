let song, analyzer;

window.onload = () =>{
  let audioContextStarted = false;
  document
    .getElementById("play")
    .addEventListener("click", function () {
      if (!audioContextStarted) {
        yourAudioContext.resume();
        audioContextStarted = true;
      }
    });
}

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

let fft;

function setup() {
  createCanvas(800, 600, WEBGL);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

  fft = new p5.FFT();

  angleMode(DEGREES);
  background("#fffceb");

  // Scale brushes to adapt to canvas size
  brush.scale(1.5);

  // Activate the flowfield we're going to use
  brush.field("waves");
}

function draw() {
  frameRate(10);
  translate(-width / 2, -height / 2);
  background("#fffceb");

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

  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 0); // Red color for the bars

  // Loop through the spectrum
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}
