"use strict";
class Shape {
    constructor(color, filled) {
        this.color = "red";
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled() {
        return this.filled;
    }
    toString() {
        return "Shape[" + "Color= " + this.color + "Filled= " + this.filled + "]";
    }
}
class Circle extends Shape {
    constructor(color, filled, radius) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return "Cicle[Shape[" + "Color= " + super.toString() + ",radius= " + this.radius + "]";
    }
}
class Rectangle extends Shape {
    constructor(color, filled, width, lenght) {
        super(color, filled);
        this.width = width;
        this.lenght = lenght;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLenght() {
        return this.lenght;
    }
    setLenght(lenght) {
        this.lenght = lenght;
    }
    getArea() {
        return this.width * this.lenght;
    }
    getPerimeter() {
        return (2 * this.width) + (this.lenght);
    }
    toString() {
        return "Rectangle[Shape[" + "Color= " + super.toString() + ",Width= " + this.width + ",Lenght= " + this.lenght + "]";
    }
}
class Square extends Rectangle {
    constructor(side, color, filled) {
        super(color, filled, side, side);
        this.side = side;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.setLenght(side);
        this.setWidth(side);
    }
    setWidth(side) {
        super.setWidth(side);
    }
    setLenght(side) {
        super.setLenght(side);
    }
    toString() {
        return "Square[Rectangle[Shape[Color= " + super.toString() + ",Width= " + this.setWidth + ",Lenght= " + this.setLenght + "]";
    }
}
module.exports = { Shape, Square, Rectangle, Circle };
