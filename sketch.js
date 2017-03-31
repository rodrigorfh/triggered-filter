var img;
var imgTriggered;

function preload(){
	img = loadImage('img/foto.jpg');
	imgTriggered =loadImage('img/triggered.png')	
}

function setup(){
	
	createCanvas(img.width, img.height + img.height*0.3);
	
	image(imgTriggered, 0, img.height, img.width, img.height*0.3);
	
	image(img,0,0);

	updatePixels();
	fill(250,0,0, 150);
	noStroke();
	rect(0, 0, img.width, img.height);
	//background(187,47,24, 150);

}



function mousePressed(){
	background(187,47,24, 150);


}