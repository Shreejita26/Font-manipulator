function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);

    canvas=createCanvas(600,500);
    canvas.position( 580,115);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);

}
 function modelloaded(){
    console.log("Model is intialized!!!");
 }
 function gotPoses(results){
    console.log(results);
 }
 function draw(){
    background("#cfdfee");
 }