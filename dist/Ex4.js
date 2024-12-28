"use strict";
class Shape {
    constructor(color, filled) {
        this.color = "red";
        this.filled = true;
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
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return "Shape[color=" + this.color + ", filled=" + this.filled + "]";
    }
}
class Circle extends Shape {
    constructor(color = "red", filled = true, radius = 1.0) {
        super(color, filled);
        this.radius = 1.0;
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return "Circle[" + super.toString() + ", radius:" + this.radius + "]";
    }
}
class Rectangle extends Shape {
    constructor(color = "red", filled = true, width = 1.0, length = 1.0) {
        super(color, filled);
        this.width = 1.0;
        this.length = 1.0;
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * this.width * this.length;
    }
    toString() {
        return "Rectangle[" + super.toString() + ", width" + this.width + ", length:" + this.length + "]";
    }
}
class Square extends Rectangle {
    constructor(side, color = "red", filled = true) {
        super(color, filled, side, side);
        this.side = side;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    setWidth(side) {
        this.side = side;
    }
    setLength(side) {
        this.side = side;
    }
    result() {
        return this.side * this.side;
    }
    toString() {
        return "Square[" + super.toString() + "]"; //ห้ามลืมsuperนะ นอนอ
    }
}
module.exports = { Shape, Circle, Rectangle, Square };
