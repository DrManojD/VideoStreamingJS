document.addEventListener("DOMContentLoaded", init, false);


function init() {
var VPPlaying = null;
var VPToggle = null;


const VP0 = document.getElementById("video0");
const VPToggle0 = document.getElementById("toggleButton0");

VPToggle0.addEventListener("click", function() {
if (VP0.paused) {
     if (VPPlaying != null && VPPlaying != VP0){
         VPPlaying.pause();
         VPToggle.style.color = "green";
         VPToggle.innerHTML = "Start";
     }
 VP0.play();
     VPToggle0.style.color = "crimson";
     VPToggle0.innerHTML = "Stop";
     VPPlaying = VP0;
     VPToggle = VPToggle0;
}
else {
     VP0.pause();
     VPToggle0.style.color = "green";
     VPToggle0.innerHTML = "Start";
     if (VPPlaying != null && VPPlaying == VP0){
         VPPlaying = null;
     }
}});



const VP1 = document.getElementById("video1");
const VPToggle1 = document.getElementById("toggleButton1");

VPToggle1.addEventListener("click", function() {
if (VP1.paused) {
     if (VPPlaying != null && VPPlaying != VP1){
         VPPlaying.pause();
         VPToggle.style.color = "green";
         VPToggle.innerHTML = "Start";
     }
 VP1.play();
     VPToggle1.style.color = "crimson";
     VPToggle1.innerHTML = "Stop";
     VPPlaying = VP1;
     VPToggle = VPToggle1;
}
else {
     VP1.pause();
     VPToggle1.style.color = "green";
     VPToggle1.innerHTML = "Start";
     if (VPPlaying != null && VPPlaying == VP1){
         VPPlaying = null;
     }
}});



const VP2 = document.getElementById("video2");
const VPToggle2 = document.getElementById("toggleButton2");

VPToggle2.addEventListener("click", function() {
if (VP2.paused) {
     if (VPPlaying != null && VPPlaying != VP2){
         VPPlaying.pause();
         VPToggle.style.color = "green";
         VPToggle.innerHTML = "Start";
     }
 VP2.play();
     VPToggle2.style.color = "crimson";
     VPToggle2.innerHTML = "Stop";
     VPPlaying = VP2;
     VPToggle = VPToggle2;
}
else {
     VP2.pause();
     VPToggle2.style.color = "green";
     VPToggle2.innerHTML = "Start";
     if (VPPlaying != null && VPPlaying == VP2){
         VPPlaying = null;
     }
}});



const VP3 = document.getElementById("video3");
const VPToggle3 = document.getElementById("toggleButton3");

VPToggle3.addEventListener("click", function() {
if (VP3.paused) {
     if (VPPlaying != null && VPPlaying != VP3){
         VPPlaying.pause();
         VPToggle.style.color = "green";
         VPToggle.innerHTML = "Start";
     }
 VP3.play();
     VPToggle3.style.color = "crimson";
     VPToggle3.innerHTML = "Stop";
     VPPlaying = VP3;
     VPToggle = VPToggle3;
}
else {
     VP3.pause();
     VPToggle3.style.color = "green";
     VPToggle3.innerHTML = "Start";
     if (VPPlaying != null && VPPlaying == VP3){
         VPPlaying = null;
     }
}});



const VP4 = document.getElementById("video4");
const VPToggle4 = document.getElementById("toggleButton4");

VPToggle4.addEventListener("click", function() {
if (VP4.paused) {
     if (VPPlaying != null && VPPlaying != VP4){
         VPPlaying.pause();
         VPToggle.style.color = "green";
         VPToggle.innerHTML = "Start";
     }
 VP4.play();
     VPToggle4.style.color = "crimson";
     VPToggle4.innerHTML = "Stop";
     VPPlaying = VP4;
     VPToggle = VPToggle4;
}
else {
     VP4.pause();
     VPToggle4.style.color = "green";
     VPToggle4.innerHTML = "Start";
     if (VPPlaying != null && VPPlaying == VP4){
         VPPlaying = null;
     }
}});

}