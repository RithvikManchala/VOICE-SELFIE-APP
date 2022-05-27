var SpeechRecognition = window.webkitSpeechRecognition; //convert our speech into text
  
var recognition = new SpeechRecognition(); //to understand what we are saying

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;
console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis; // to convert our text to speech

    speak_data = "Taking you Selfie in 5 seconds";


    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera); // open the camera

    setTimeout(function() //for taking the picture in 5 sec
    { 
        take_snapshot(); 
        save();
    }, 5000); // 500 ms = 5 sec
}

 
camera = document.getElementById("camera");
Webcam.set({  //to set the values on the camera
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});



function take_snapshot()
{
    Webcam.snap(function(data_uri) { // to capture the picture/screenshot, data_URI is used for preview
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}