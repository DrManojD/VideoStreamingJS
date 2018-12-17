document.addEventListener('DOMContentLoaded', init, false);

/** 
* You can manipulate the video here
* For example: Uncomment the code below and in the index to get a Start/Stop button
*/
function init() {
  const VP0 = document.getElementById('video0')
  const VP1 = document.getElementById('video1')
  const VP2 = document.getElementById('video2')
  const VP3 = document.getElementById('video3')
  
  const VPToggle0 = document.getElementById('toggleButton0')
  const VPToggle1 = document.getElementById('toggleButton1')
  
  const VPToggle2 = document.getElementById('toggleButton2')
  const VPToggle3 = document.getElementById('toggleButton3')
  
  
  VPToggle0.addEventListener('click', function() {
     if (VP0.paused) VP0.play()
     else VP0.pause()
     
   })
   
   VPToggle1.addEventListener('click', function() {     
     if (VP1.paused) VP1.play()
     else VP1.pause()
   })
   
    VPToggle2.addEventListener('click', function() {     
     if (VP2.paused) VP2.play()
     else VP2.pause()
   })
   
    VPToggle3.addEventListener('click', function() {     
     if (VP3.paused) VP3.play()
     else VP3.pause()
   })
}
