/**
 * Study #1, inspired by _on cover, 2014_ by Philippe Decrauzat
 * https://www.artbasel.com/catalog/artwork/47566/Philippe-Decrauzat-on-cover
 */
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  rectMode(CORNERS).frameRate(10);
  blendMode(MULTIPLY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  const artworkWidth = height / 1.5; // ratio = 2.3:1
  const artworkHeight = height;
  translate(- artworkWidth / 2, - artworkHeight / 2);

  beginClip();
  rect(0, 0, artworkWidth, artworkHeight);
  endClip();

  const lineWeight = artworkWidth / 165;
  const slope = - lineWeight * 2;
  strokeWeight(lineWeight);

  let step;
  let x;

  stroke('green');
  x = lineWeight * 3;
  while (x < artworkWidth) {
    line(x, 0, x, artworkHeight);
    step = lineWeight * (4 - 2.436 * x / artworkWidth);
    x += step;
  }

  stroke('red');
  x = lineWeight;
  while (x < artworkWidth) {
    line(x, 0, x + slope, artworkHeight);
    step = lineWeight * (4 - 2.5 * x / artworkWidth);
    x += step;
  }
}
