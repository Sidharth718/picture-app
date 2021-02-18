var SpeechRecognition=window.webkitSpeechRecognition;
var speechrec=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    speechrec.start();
    
}
speechrec.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
if(content == "take my selfie"){
    speak();
};
}

function speak(){
  var API=window.speechSynthesis;
  speechSynth="taking your selfie in 5 seconds.";
  var textspeechsynth=new SpeechSynthesisUtterance(speechSynth);
   API.speak(textspeechsynth);
   Webcam.attach(camera);
   setTimeout(function(){
   take_snapshot();
   save();    
   },5000);
} 

camera=document.getElementById("camera");
Webcam.set({width:350,height:250,image_format:'png',png_quality:99});

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="snapshotimg">';
});   
}

function save(){
    anchor=document.getElementById("a1");
    anchorimg=document.getElementById("snapshotimg").src;
    anchor.href=anchorimg;
    anchor.click();
}
