class Author {
    private name:string;
    private email:string;

    constructor(name:string,email:string){
        this.name=name
        this.email=email
    }
    public Author(name:string,email:string){
        return "name:"+this.name+"email"+this.email;
    }
    public getName():string{
        return this.name
    }
    public Email():string{
        return this.email
    }
    public setEmail(email:string):void{
        this.email=email

    }
    public toString():string{
       return "Author [name:"+this.name+"Email:"+this.email+"]";
    }
}

class Book{
    private name:string
    private authors:Author[]
    private price:number
    private qty:number = 0;
    

    constructor (name:string, authors:Author[],price:number,qty:number = 0){
        this.name = name
        this.authors = authors;
        this.price=price
        this.qty=qty;
    }
public getName():string{
    return this.name
}
public getAuthors():Author[]{
    return this.authors;
}
public getPrice():number{
    return this.price
}
public setPrice(price:number):void{
  this.price=price
}
public getQty():number{
return this.qty
}
public setQty(qty:number):void{
this.qty=qty
}
public toString():string{
    let details = "Book[name"+this.name+"authors={";
    for (let i = 0; i < this.authors.length; i++) {
        details += this.authors[i].toString();
        if (i < this.authors.length - 1) details += ", "; // แยกผู้เขียนด้วยคอมม่า
    }
    
    details += `}, price: ${this.price}, qty: ${this.qty}, totalPrice: ${this.qty * this.price}]`;  // คำนวณราคาทั้งหมดnn
    
    return details;
}
public getmoney():number{
    const money = (this.qty * this.price)
    return money

}
public getAuthorsNames():string{
    let authorsNames = "";
    for(let i=0; i< this.authors.length;i++){
        authorsNames += this.authors[i].getName() + ","
    }
    return authorsNames;
}

}


export  {Author,Book};