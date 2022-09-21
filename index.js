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

function findHypothenuse(height, base) {
	return Math.sqrt(height**2 + base**2);
}

function findBoxVolume(length, width, depth) {
	return length * width * depth;
}

function findCylinderVolume(height, radius) {
	return PI*height*radius**2;
}

function findSphereVolume(radius) {
	return (4/3)*PI*radius**3;
}

function getInp(id) {
    return document.getElementById(id).value;
}

function getCircleArea() {
    let radius = getInp("circleRadius");
    alert(calculateCircleArea(radius));
}

function getRectArea() {
    alert(calculateRectArea(getInp("rectLength"), getInp("rectHeight")));
}

function getTriangleArea() {
    alert(calculateTriangleArea(getInp("triangleHeight"), getInp("triangleBase")));
}

function getHypo() {
    alert(findHypothenuse(getInp("hypoOpposite"), getInp("hypoAdjacent")));
}

function getBoxVolume() {
    alert(findBoxVolume(getInp("boxLength"), getInp("boxHeight"), getInp("boxDepth")));
}

function getCylinderVolume() {
    alert(findCylinderVolume(getInp("cylinderHeight"), getInp("cylinderRadius")));
}

function getSphereVolume() {
    alert(findSphereVolume(getInp("sphereRadius")))
}

