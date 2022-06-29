Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:95
});

Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='photo' src="+data_uri+">";
    })
}
    
console.log("ml5 version is ",ml5.version);
 imageclassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TSkwGeVwK/model.json",modelloded);
function modelloded(){
    console.log("model is loaded!");
}