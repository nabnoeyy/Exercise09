"use strict";
class Customer {
    constructor(name, member = false, memberType) {
        this.member = false;
        this.name = name;
        this.member = member;
        this.memberType = memberType;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(memberType) {
        this.memberType = memberType;
    }
    toString() {
        return `Customer[Name:${this.name}, member:${this.member}, memberType:${this.memberType}]`;
    }
}
class DiscountRate {
    static getServiceDiscountRate(type) {
        type = type.toLowerCase();
        if (type === "premium") {
            return this.serviceDiscountPremium;
        }
        else if (type === "gold") {
            return this.serviceDiscountGold;
        }
        else if (type === "silver") {
            return this.serviceDiscountSilver;
        }
        else {
            return 0.0;
        }
    }
    static getProductDiscountRate(type) {
        type = type.toLowerCase();
        if (type === "premium") {
            return this.productDiscountPremium;
        }
        else if (type === "gold") {
            return this.productDiscountGold;
        }
        else if (type === "silver") {
            return this.productDiscountSilver;
        }
        else {
            return 0.0; // ไม่มีส่วนลดจ้า
        }
    }
}
DiscountRate.serviceDiscountPremium = 0.2;
DiscountRate.serviceDiscountGold = 0.15;
DiscountRate.serviceDiscountSilver = 0.1;
DiscountRate.productDiscountPremium = 0.1;
DiscountRate.productDiscountGold = 0.1;
DiscountRate.productDiscountSilver = 0.1;
class Visit {
    constructor(customer, date, serviseExpense, productExpense) {
        this.customer = customer;
        this.date = date;
        this.serviceExpense = serviseExpense;
        this.productExpense = productExpense;
    }
    getName() {
        return this.customer.getName();
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(ex) {
        this.serviceExpense = ex;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(ex) {
        this.productExpense = ex;
    }
    getTotalExpense() {
        const memberType = this.customer.getMemberType();
        const serviceDiscount = DiscountRate.getServiceDiscountRate(memberType);
        const productDiscount = DiscountRate.getProductDiscountRate(memberType);
        const discountedServiceExpense = this.serviceExpense * (1 - serviceDiscount);
        const discountedProductExpense = this.productExpense * (1 - productDiscount);
        return discountedServiceExpense + discountedProductExpense;
    }
    toString() {
        return `Visit[customer:${this.customer.toString()}Date:${this.date}serviceExpense:${this.serviceExpense}productExpense:${this.productExpense} ]`;
    }
}
module.exports = { Customer, DiscountRate, Visit };
