import exp from "constants"

class Shape {
    private color:string = "red"
    private filled:boolean = true

    constructor (color:string,filled:boolean){
        this.color = color
        this.filled = filled
    }
   
    public getColor():string{
        return this.color
    }
    public setColor(color:string):void{
        this.color = color
    }
    public isFilled():boolean{
        return  this.filled
    }
    public setFilled(filled:boolean):void{
        this.filled = filled
    }
    public toString():string{
        return "Shape[color="+this.color+", filled="+this.filled+"]"
    }

}

class Circle extends Shape{
    private radius:number = 1.0

    constructor(color:string = "red",filled :boolean = true ,radius:number = 1.0){
        super(color , filled )
        this.radius = radius
    }

 
 public getRadius():number{
    return this.radius
 }
 public setRadius(radius:number):void{
    this.radius = radius
 }
 public getArea():number{
    return Math.PI * this.radius * this.radius
 }
 public getPerimeter():number{
    return 2 * Math.PI * this.radius;
 }
 public toString(): string {
     return "Circle["+super.toString()+", radius:"+this.radius+"]";
 }
 
}
class Rectangle extends Shape {
    private width:number = 1.0
    private length:number = 1.0

    constructor(color:string = "red" , filled:boolean = true,width:number = 1.0 , length:number = 1.0){
        super(color , filled)
        this.width = width
        this.length = length

        }
public getWidth():number{
    return this.width
}
public setWidth(width:number):void{
    this.width = width
}
public getLength():number{
    return this.length
}
public setLength(length:number):void{
    this.length = length
}
public getArea():number{
    return this.width * this.length
}
public getPerimeter():number{
    return 2 * this.width * this.length
}
public toString(): string {
    return "Rectangle["+super.toString()+", width"+this.width+", length:"+this.length+"]";
}
}

class Square extends Rectangle{
    private side:number

    constructor (side: number, color: string = "red", filled: boolean = true) {
        super(color, filled, side, side);
        this.side = side
    }
    public getSide():number{
        return this.side
    }
    public setSide(side:number):void{
        this.side = side
    }
    public setWidth(side: number): void {
        this.side = side
    }
    public setLength(side: number): void {
        this.side = side
    }
    public result():number{
        return this.side * this.side
    }
    public toString(): string {
        return "Square["+super.toString()+"]";//ห้ามลืมsuperนะ นอนอ
    }
}

export = { Shape, Circle, Rectangle, Square };