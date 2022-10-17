noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    //add the size of the canvas//
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw(){
    background('#5A5A5A');
    document.getElementById("square_side").innerHTML="Width and height of a square will be = " + difference + "px";
     fill('#656bc2');
     stroke('#000000')
     square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " +noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWrist + "difference = " + difference);
    }
}


