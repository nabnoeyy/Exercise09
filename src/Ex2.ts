class Customer {
    private id:number
    private name:string
    private discount:number

    constructor (id:number,name:string,discount:number){
        this.id=id
        this.name=name
        this.discount=discount
    }
   
    public getID():number{
        return this.id
    }
    public getName():string{
        return this.name
    }
    public getDiscount():number{
        return this.discount
    }
    public setDiscount(discount:number):void{
        this.discount=discount
    }
    public toString():string{
        return `${this.name}(${this.id})(${this.discount}%)`;
        
    }
}

class Invoice {
    private id:number
    private customer:Customer
    private amount:number
   

constructor(id:number,customer:Customer,amount:number){
    this.id=id
    this.customer=customer
    this.amount=amount

}
public getID():number{
    return this.id
}
public getCustomer():Customer{
    return this.customer
}
public setCustomer(customer:Customer):void{
    this.customer=customer
}
public getAmount():number{
    return this.amount
}
public setAmount(amount:number):void{
    this.amount=amount
}
public getCustomerId():number{
    return this.customer.getID();
}
public getCustomerName():string{
    return this.customer.getName();
}
public getCustomerDiscount():number{
    const discountAmount = (this.amount * this.customer.getDiscount()) / 100;
    return this.amount - discountAmount; // จำนวนเงินที่ลค.จ่าย คืนค่าเปอร์เซ็นต์ส่วนลด
}
public toString(): string {
    return "Invoice[id:"+this.id+"custmer:"+this.customer.toString()+"amount:"+this.amount+"getCustomerDiscount"+this.getCustomerDiscount()+"]";
}

}

export  {Customer,Invoice};