filter_x = 0;
filter_y = 0;

function preload()  {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()    {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw()      {
    image(video, 0, 0, 300, 300);
    image(mustache, filter_x, filter_y, 60 , 45);
}

function take_snapshot() {
    save("my_image.png");
}

function modelLoaded() {
    console.log("poseNet is Intialized");
}

function gotPose(results) {
    if(results.length > 0)   {
        console.log(results);
        console.log("nose x : " +results[0].pose.nose.x);
        filter_x = results[0].pose.nose.x-30;
        console.log("nose y : " +results[0].pose.nose.y);
        filter_y = results[0].pose.nose.y-5;
    }
}