var SpeechRecognition = window.webkitSpeechRecognition;

var x = new SpeechRecognition();

function start(){
    document.getElementById("textarea").innerHTML = "";
    x.start();

}

x.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;
    console.log(content);
    speak();
}

function speak (){
    var synth = window.speechSynthesis;
    var speak = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak);
    
    v = document.getElementById("textarea").innerHTML;
    if(v== "take my selfie"){
        Webcam.attach(webcam);
        synth.speak(utterThis);
        setTimeout(function (){
            takeSnapshot();
        }, 5000)
    }
    
}

Webcam.set({
    width:300,
    height: 400,
    image_format: "png",
    png_quality: 90
});

var webcam = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function (x){
        document.getElementById("result").innerHTML = "<img src=" + x + " id='image'></img>"
    
    })
    saveImage();
}

function saveImage(){
    z = document.getElementById("x");
    d = document.getElementById("image").src;
    z.href = d;
    z.click();
}