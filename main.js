
song2="";
song="";

function preload(){
    
    song=loadSound("1-01 Butter.mp3.mp3");
    
    

}
function play (){
    song.play();
}
function stop(){
    song.stop();
}




function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 ,0,600,500);
}