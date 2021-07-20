// Carousel Control
var counter = 1;
//Manual Carousel Control
document.getElementById("radio" + counter).checked = true;
counter++;
if (counter > 4) {
  counter = 1;
}
// For Automatic Carousel Control
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

//Auto-play/pause video om Mouse Hover
document.getElementById("vid1").addEventListener("mouseover", function () {
  this.play();
});
document.getElementById("vid1").addEventListener("mouseleave", function () {
  this.pause();
});

document.getElementById("vid2").addEventListener("mouseover", function () {
  this.play();
});
document.getElementById("vid2").addEventListener("mouseleave", function () {
  this.pause();
});
