
var sketch1 = function (p) {
	p.x = 200;
	p.y = 200;

	p.setup = function() {
		p.createCanvas(400,400);
		p.background(55);
	}

	p.draw = function() {
		p.fill(255, 0, 140, 40);
		p.noStroke();
		p.ellipse(p.x, p.y, 33, 33);
		p.x = p.x + p.random(-10, 10);
		p.y = p.y + p.random(-10, 10);
	}

}

var sketch2 = function (p) {
	p.x = 200;
	p.y = 200;

	p.setup = function() {
		p.createCanvas(400,400);
		p.background(55);
	}

	p.draw = function() {
		p.fill(25, 200, 140, 40);
		p.noStroke();
		p.ellipse(p.x, p.y, 33, 33);
		p.x = p.x + p.random(-10, 10);
		p.y = p.y + p.random(-10, 10);
	}

}

var myp5_1 = new p5(sketch1);

var myp5_2 = new p5(sketch2);

setInterval(resetBackground, 8000);

function resetBackground() {
	myp5_1.background(55);
	myp5_1.x = myp5_1.width/2;
	myp5_1.y = myp5_1.height/2;
	myp5_2.background(55);
	myp5_2.x = myp5_2.width/2;
	myp5_2.y = myp5_2.height/2;
}
