Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:100
    });
    
    
    camera=document.getElementById("camera");
    
    Webcam.attach("#camera");
    
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
        
        });
    }
    
    console.log('ml5 version: ',ml5.version);
    
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/train/image/1OJKDNYPK7F7ii5U6TGkrS8KASEX-Tpli", modelLoaded);
    
    
    function modelLoaded(){
        console.log("model is loaded");
    }
    