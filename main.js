rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;

function preload() {
}

function setup() {
	canvas = createCanvas(800, 400);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
    video.hide();
	video.size(800, 400);
    video.parent('canvas')

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded! ')
}
 
function gotPoses(results) {
	if(results.length > 0) {
		rightWristY = results[0].pose.rightWrist.y;
    	rightWristX = results[0].pose.rightWrist.x;
    	scoreRightWrist =  results[0].pose.keypoints[10].score;
    	console.log(scoreRightWrist);
	}
}

function draw() {
	

    image(video, 0, 0, 800, 400)
	if(scoreRightWrist > 0.2)
  {
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 30);
  }
}