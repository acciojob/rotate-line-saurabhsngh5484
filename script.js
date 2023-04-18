//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;

function rotateLine() {
  angle += 5;
  line.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotateLine);
}

rotateLine();