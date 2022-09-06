img = "";
status = "";
objects = [];
function preload() {
}

function setup() {
    canvas = createCanvas(390, 320);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(390, 320);
    video.hide();
}

function modelLoaded() {
    console.log("model is Loaded");

    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 390, 320);

    if (status != ""){
        for ( i=0 ; i<objects.length ; i++){
         document.getElementById("status").innerHTML = "Status : Detecting Objects";
         document.getElementById("object").innerHTML = objects[i].label;
         percent = floor(objects[i].confidence);
         fill("red");
         text( objects[i].label + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
         noFill();
         stroke("red");
         rect(object[i].x , object[i].y , object[i].width , object[i].height );
        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value = document.getElementById("text_input").value;
    console.log(value);
}