class Shape {
    private color: string = "red";
    private filled: boolean;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
}

public getColor(): string {
    return this.color;
}
public setColor(color: string): void {
    this.color = color;
}
public isFilled(): boolean {
    return this.filled;
}
public setFilled(): boolean {
    return this.filled;
}
public toString(): string {
        return "Shape["+"Color= "+this.color +"Filled= "+this.filled+ "]";
}
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, filled: boolean,radius: number) {
        super(color, filled);
        this.radius = radius;
    }

public getRadius(): number {
    return this.radius;
}
public setRadius(radius: number): void {
    this.radius = radius;
}
 public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
}
public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
}
public toString(): string {
    return "Cicle[Shape["+"Color= "+super.toString() +",radius= "+this.radius+ "]";
}
}

class Rectangle extends Shape {
    private width: number;
    private lenght: number;


    constructor(color: string, filled: boolean,width: number,lenght: number) {
        super(color, filled);
        this.width = width;
        this.lenght = lenght;
    }
public getWidth(): number {
    return this.width;
}
public setWidth(width: number): void {
    this.width = width;
}
public getLenght(): number {
    return this.lenght;
}
public setLenght(lenght: number): void {
    this.lenght = lenght;
}
 public getArea(): number {
    return this.width * this.lenght;
}
public getPerimeter(): number {
    return (2 *this.width) + (this.lenght);
}
public toString(): string {
    return "Rectangle[Shape["+"Color= "+super.toString() +",Width= "+this.width+ ",Lenght= "+this.lenght+"]";
}
}

class Square extends Rectangle {
    private side: number;

constructor(side: number, color: string, filled: boolean) {
super(color, filled, side, side);
this.side = side;
}

public getSide(): number {
    return this.side;
}
public setSide(side: number): void {
    this.setLenght(side);
    this.setWidth(side);
}
public setWidth(side: number): void {
    super.setWidth(side);
}
public setLenght(side: number): void {
    super.setLenght(side);
}
public toString(): string {
    return "Square[Rectangle[Shape[Color= "+super.toString() +",Width= "+this.setWidth+ ",Lenght= "+this.setLenght+"]";
}
}

export = {Shape,Square,Rectangle,Circle};