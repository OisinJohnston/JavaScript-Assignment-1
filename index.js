const PI = 3.14;

function calculateCircleArea(radius) {
	return PI*radius**2;
}

function calculateRectArea(length, width) {
	return length*width;
}

function calculateTriangleArea(base, height) {
	return base*height*0.5;
}

function findHypothenuseSquared(height, base) {
	return height**2 + base**2;	
}

function findBoxVolume(length, width, depth) {
	return length * width * depth;
}

function findCylinderVolume(height, radius) {
	return PI*height*radius**2
}

function findSphereVolume(radius) {
	return (4/3)*PI*r**3
}
