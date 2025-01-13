class Customer {
    private name: string;
    private member: boolean = false;
    private memberType: string;

    constructor(name: string, member: boolean = false, memberType: string) {
        this.name = name;
        this.member = member;
        this.memberType = memberType;
    }

    public getName(): string {
        return this.name;
    }

    public isMember(): boolean {
        return this.member;
    }

    public setMember(member: boolean): void {
        this.member = member;
    }

    public getMemberType(): string {
        return this.memberType;
    }

    public setMemberType(memberType: string): void {
        this.memberType = memberType;
    }

    public toString(): string {
        return `Customer[Name:${this.name}, member:${this.member}, memberType:${this.memberType}]`;
    }
}

class DiscountRate {
    private static serviceDiscountPremium: number = 0.2;
    private static serviceDiscountGold: number = 0.15;
    private static serviceDiscountSilver: number = 0.1;
    private static productDiscountPremium: number = 0.1;
    private static productDiscountGold: number = 0.1;
    private static productDiscountSilver: number = 0.1;

    public static getServiceDiscountRate(type: string): number {
        type = type.toLowerCase();
        if (type === "premium") {
            return this.serviceDiscountPremium;
        } else if (type === "gold") {
            return this.serviceDiscountGold;
        } else if (type === "silver") {
            return this.serviceDiscountSilver;
        } else {
            return 0.0;
        }
    }

    public static getProductDiscountRate(type: string): number {
        type = type.toLowerCase();
        if (type === "premium") {
            return this.productDiscountPremium;
        } else if (type === "gold") {
            return this.productDiscountGold;
        } else if (type === "silver") {
            return this.productDiscountSilver;
        } else {
            return 0.0; // ไม่มีส่วนลดจ้า
        }
    }
}

class Visit {
    private customer: Customer;
    private date: Date;
    private serviceExpense: number;
    private productExpense: number;

    constructor(customer: Customer, date: Date, serviseExpense: number, productExpense: number) {
        this.customer = customer;
        this.date = date;
        this.serviceExpense = serviseExpense;
        this.productExpense = productExpense;
    }

    public getName(): string {
        return this.customer.getName();
    }

    public getServiceExpense(): number {
        return this.serviceExpense;
    }

    public setServiceExpense(ex: number): void {
        this.serviceExpense = ex;
    }

    public getProductExpense(): number {
        return this.productExpense;
    }

    public setProductExpense(ex: number): void {
        this.productExpense = ex;
    }

    public getTotalExpense(): number {
        const memberType = this.customer.getMemberType();
        const serviceDiscount = DiscountRate.getServiceDiscountRate(memberType);
        const productDiscount = DiscountRate.getProductDiscountRate(memberType);

        const discountedServiceExpense = this.serviceExpense * (1 - serviceDiscount);
        const discountedProductExpense = this.productExpense * (1 - productDiscount);

        return discountedServiceExpense + discountedProductExpense;
    }

    public toString(): string {
        return `Visit[customer:${this.customer.toString()}Date:${this.date}serviceExpense:${this.serviceExpense}productExpense:${this.productExpense} ]`;
    }
}

export = { Customer, DiscountRate, Visit };
