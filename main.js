noseX = 0;
noseY = 0;

function preload() {
    lipstick_img = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup() {
    canvas = createCanvas(300, 300); 
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y+30;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initiallized!!')
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick_img, noseX, noseY, 30, 30)
}

function take_snapshot() {
    save('Lipstick-Filter-Image.png');
}