"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = exports.Customer = void 0;
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `${this.name}(${this.id})(${this.discount}%)`;
    }
}
exports.Customer = Customer;
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getID() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
        return this.customer.getID();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerDiscount() {
        const discountAmount = (this.amount * this.customer.getDiscount()) / 100;
        return this.amount - discountAmount; // จำนวนเงินที่ลค.จ่าย คืนค่าเปอร์เซ็นต์ส่วนลด
    }
    toString() {
        return "Invoice[id:" + this.id + "custmer:" + this.customer.toString() + "amount:" + this.amount + "getCustomerDiscount" + this.getCustomerDiscount() + "]";
    }
}
exports.Invoice = Invoice;
