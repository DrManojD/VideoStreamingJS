document.addEventListener("DOMContentLoaded", init, false);function init() {const VP0 = document.getElementById("video0");const VPToggle0 = document.getElementById("toggleButton0");VPToggle0.addEventListener("click", function() {if (VP0.paused) VP0.play()else VP0.pause()});const VP1 = document.getElementById("video1");const VPToggle1 = document.getElementById("toggleButton1");VPToggle1.addEventListener("click", function() {if (VP1.paused) VP1.play()else VP1.pause()});const VP2 = document.getElementById("video2");const VPToggle2 = document.getElementById("toggleButton2");VPToggle2.addEventListener("click", function() {if (VP2.paused) VP2.play()else VP2.pause()});const VP3 = document.getElementById("video3");const VPToggle3 = document.getElementById("toggleButton3");VPToggle3.addEventListener("click", function() {if (VP3.paused) VP3.play()else VP3.pause()});}