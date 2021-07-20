// Carousel Control
var counter = 1;
//Manual Carousel Control
document.getElementById("radio" + counter).checked = true;
counter++;
if (counter > 4) {
  counter = 1;
}
For Automatic Carousel Control
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
