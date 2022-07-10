song1="";
song2="";
rwx=0;
rwy=0;
lwx=0;
lwy=0;

function setup(){
c1=createCanvas(500,350);
c1.center();
v1=createCapture(VIDEO);
v1.hide();
pn=ml5.poseNet(v1,modelLoaded)
pn.on("pose",gotPoses)

}

function modelLoaded(){

console.log("Model is Loaded");

}

function draw(){

image(v1,0,0,500,350);

}

function preload(){

song1=loadSound("music.mp3")
song2=loadSound("music2.mp3") 

}

function gotPoses(results){
if(results.length>0){


}



}

