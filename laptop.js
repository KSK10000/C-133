img = "";
status1="";
object=[];
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects....";
}
function preload(){
  img = loadImage('mobile and laptop.jpg');
}
function draw() {
    image(img, 0, 0, 600, 500);
    if(status1!=""){
        for(i=0;i<object.length;i++){
            percentage=floor(object[i].confidence*100);
            fill("black");
            text(object[i].label+" , "+percentage+"%", object[i].x, object[i].y);
            noFill();
            stroke("Black");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            document.getElementById("status").innerHTML="Number of objects detected is - "+object.length;
        }
    }
}  
function back(){
    window.location="index.html";
}
function modelloaded(){
    console.log("Your model is successfully loaded");
    status1=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log("Error");
    }
    else{
        console.log(results);
        object=results;
    }
}