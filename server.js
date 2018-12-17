const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
//var mPort = 61819;
var videos = []
var totVideos = 0
var assetPath ='assets/videos/'

fs.readdir(assetPath, function(err, files) {           
var fstat,i;

    i = 0
    files.forEach(function (file) {
        fstat = fs.lstatSync(assetPath+"/"+file);
        //console.log("Copying File '", file, "' to Cloud!");
        if (!fstat.isDirectory())
        {
           videos[i] = assetPath+"/"+file
           i++
        }
      })
    totVideos = i
})
                    

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  var i = 0
  //res.sendFile(path.join(__dirname + '/index.htm'))
  res.writeHead(200, {'Content-Type':'text/html'})
  var mhtml ='<html><head><meta charset="utf-8"/><title>Video Streaming Demo</title></head>'+
       '<style>table, td {align-content:center;border:1px solid azure;background-color: skyblue; border-width:10;}'+
       'th, td {padding: 15px; text-align: left;border-width:10;}'+
       'th{border:1px solid azure;background-color:dimgray;font-size:20;}</style>'+
       '<body style="background-color: lightskyblue"><script src="index1.js"></script>'+
       '<h1>Select a video to play</h1>'+
       '<h2>You can also click "Start/Stop" button to resume/pause the play!</h2>'
 
 var mscript ='document.addEventListener("DOMContentLoaded", init, false);\n\n\n'+
          'function init() {\n'+
          'var VPPlaying = null;\n'+
          'var VPToggle = null;\n'
  
   while (i<totVideos)
  {
    mscript += '\n\nconst VP'+i+' = document.getElementById("video'+i+'");\n'+
              'const VPToggle'+i+' = document.getElementById("toggleButton'+i+'");\n\n'+
              'VPToggle'+i+'.addEventListener("click", function() {\n'+
              'if (VP'+i+'.paused) {\n'+
              '     if (VPPlaying != null && VPPlaying != VP'+i+'){\n'+
              '         VPPlaying.pause();\n'+
              '         VPToggle.style.color = "green";\n'+
              '         VPToggle.innerHTML = "Start";\n'+
              '     }\n VP'+i+'.play();\n'+
              '     VPToggle'+i+'.style.color = "crimson";\n'+
              '     VPToggle'+i+'.innerHTML = "Stop";\n'+
              '     VPPlaying = VP'+i+';\n'+
              '     VPToggle = VPToggle'+i+";\n"+
              '}\n'+
              'else {\n     VP'+i+'.pause();\n'+
              '     VPToggle'+i+'.style.color = "green";\n'+
              '     VPToggle'+i+'.innerHTML = "Start";\n'+
                '     if (VPPlaying != null && VPPlaying == VP'+i+'){\n'+
              '         VPPlaying = null;\n'+
              '     }\n'+
              '}'+
              '});\n\n' 
      i++
  }
  mscript +='}'
  fs.writeFile("public/index1.js", mscript ,function(err) {
                                    if (err)
                                        console.log("Error in writing to script file "+"index1.js");
                                    else
                                        console.log("Done writing to script file "+"index1.js");
                                   //connection.write(resp); 
                                }); 
  i = 0
  mhtml += '<table>'+
          '<tr><th>Title</th><th>The Video</th><th>Toggle Button</th></tr>'
  
 while (i<totVideos)
  {
      mhtml +=  '<tr><td><div style="font-size: 20; color: black">Video Title '+i+'</div></td>'+
      '<td><video id="video'+i+'" width="200" controls>'+
      //'<source src="http://localhost:'+mPort+'/video?id='+i+ ' "type="video/mp4"></video></td>' +
      '<source src="/video?id='+i+ ' "type="video/mp4"></video></td>' +
    '<td><button id="toggleButton'+i+'" style="font-size:20;font-weight:600;color:green;">Start</button></td></tr>'
    
   
    i++
  }
  
  
  mhtml += '</table></body>'+
          '<br><br><footer>Courtesy: Sample Videos in the Internet!!</footer></html>'
  res.end(mhtml, 'utf-8')
})

function ReadVideo(req, res, path) {
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

    console.log("Reading the video file " + path)

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
}

app.get('/video', function(req, res) {
  const path = videos[req.query.id]
  console.log("Video:"+req.query.id)
  ReadVideo(req, res, path)
})


var server = app.listen(process.env.PORT || 8080, function () {
  var mPort = server.address().port;    
  console.log('Video Demo Server is Listening on port '+mPort+'!')
})