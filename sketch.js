let song, analyzer;
let angle = 0;
let radius = 100;

window.onload = () => {
  let audioContextStarted = false;
  document.getElementById("play").addEventListener("click", function () {
    if (!audioContextStarted) {
      yourAudioContext.resume();
      audioContextStarted = true;
    }
  });
};

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
}

function draw() {
  frameRate(10);
  translate(-width / 2, -height / 2);
  background("#fffceb");

  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 0); // Red color for the bars
}
